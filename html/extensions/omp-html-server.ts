import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import * as http from "node:http";
import * as fs from "node:fs";
import * as path from "node:path";
import { exec } from "node:child_process";

let serverInstance: http.Server | null = null;
let activePort = 8123;
let activeCwd = process.cwd();

export default function (pi: ExtensionAPI) {
  pi.on("session_start", async (_event, ctx) => {
    activeCwd = ctx.cwd || process.cwd();

    if (serverInstance) {
      return;
    }

    startServer(pi, activeCwd);
  });

  pi.on("session_shutdown", async () => {
    if (serverInstance) {
      serverInstance.close();
      serverInstance = null;
    }
  });
}

function openInBrowser(targetUrl: string) {
  const platform = process.platform;
  try {
    if (platform === "win32") {
      exec(`start "" "${targetUrl}"`);
    } else if (platform === "darwin") {
      exec(`open "${targetUrl}"`);
    } else {
      exec(`xdg-open "${targetUrl}"`);
    }
  } catch (e) {
    console.error("[omp-html-server] Failed to launch browser:", e);
  }
}

function startServer(pi: ExtensionAPI, initialCwd: string, port = 8123) {
  const server = http.createServer(async (req, res) => {
    // Enable CORS for both localhost and file:/// origins
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }

    const url = new URL(req.url || "/", `http://127.0.0.1:${port}`);

    // Healthcheck
    if (url.pathname === "/health" || url.pathname === "/api/health") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok", port, cwd: activeCwd }));
      return;
    }

    // Direct Browser Open Endpoint
    if (url.pathname === "/api/open" || (req.method === "POST" && url.pathname === "/api/open")) {
      let targetUrl = "";
      if (req.method === "GET") {
        const fileParam = url.searchParams.get("file");
        const urlParam = url.searchParams.get("url");
        if (urlParam) {
          targetUrl = urlParam;
        } else if (fileParam) {
          const safeName = path.basename(fileParam);
          targetUrl = `http://127.0.0.1:${port}/omp-html/${safeName}`;
        }
        if (targetUrl) {
          openInBrowser(targetUrl);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ success: true, opened: targetUrl }));
          return;
        } else {
          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: "Missing file or url parameter" }));
          return;
        }
      } else {
        let body = "";
        req.on("data", (chunk) => { body += chunk; });
        req.on("end", () => {
          try {
            const data = JSON.parse(body || "{}") as Record<string, unknown>;
            if (typeof data.url === "string") {
              targetUrl = data.url;
            } else if (typeof data.file === "string" || typeof data.filename === "string") {
              const fileName = typeof data.file === "string" ? data.file : (data.filename as string);
              const safeName = path.basename(fileName);
              targetUrl = `http://127.0.0.1:${port}/omp-html/${safeName}`;
            }
            if (targetUrl) {
              openInBrowser(targetUrl);
              res.writeHead(200, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ success: true, opened: targetUrl }));
            } else {
              res.writeHead(400, { "Content-Type": "application/json" });
              res.end(JSON.stringify({ error: "Missing file or url parameter" }));
            }
          } catch (e: unknown) {
            const message = e instanceof Error ? e.message : "Invalid JSON";
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ error: message }));
          }
        });
        return;
      }
    }

    // Save decision / custom notes / HTML directly to disk
    if (req.method === "POST" && url.pathname === "/api/save") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        try {
          const payload = JSON.parse(body) as Record<string, unknown>;
          const rawFilename = typeof payload.filename === "string" ? payload.filename : "plan.html";
          // Strip any directory path to prevent traversal
          const filename = path.basename(rawFilename);

          const targetDir = path.join(activeCwd, "omp-html");
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }

          const gitignorePath = path.join(targetDir, ".gitignore");
          if (!fs.existsSync(gitignorePath)) {
            fs.writeFileSync(gitignorePath, "*\n!.gitignore\n", "utf8");
          }

          const filePath = path.join(targetDir, filename);

          if (typeof payload.html === "string") {
            fs.writeFileSync(filePath, payload.html, "utf8");
          }

          if (payload.decisions || payload.custom_notes || payload.tasks) {
            const jsonPath = path.join(targetDir, `${filename.replace(/\.html$/i, "")}.decision.json`);
            fs.writeFileSync(
              jsonPath,
              JSON.stringify(
                {
                  filename,
                  decisions: payload.decisions || {},
                  custom_notes: payload.custom_notes || {},
                  tasks: payload.tasks || {},
                  updatedAt: new Date().toISOString(),
                },
                null,
                2
              ),
              "utf8"
            );
          }

          if (payload.open === true) {
            const fileUrl = `http://127.0.0.1:${port}/omp-html/${filename}`;
            openInBrowser(fileUrl);
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: true,
              savedTo: filePath,
              timestamp: new Date().toISOString(),
            })
          );
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : "Failed to save file";
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: message }));
        }
      });
      return;
    }

    // Serve HTML plans and list index
    if (req.method === "GET" && (url.pathname === "/" || url.pathname === "/omp-html" || url.pathname === "/omp-html/")) {
      const targetDir = path.join(activeCwd, "omp-html");
      let files: string[] = [];
      if (fs.existsSync(targetDir)) {
        files = fs.readdirSync(targetDir).filter((f) => f.endsWith(".html"));
      }

      const listItems = files
        .map(
          (f) =>
            `<li style="margin: 12px 0;"><a style="color: #ffffff; font-size: 16px; text-decoration: none; border-bottom: 1px solid #444;" href="/omp-html/${f}">[PLAN] ${f}</a></li>`
        )
        .join("");

      const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>OMP HTML Documents Index</title>
  <style>
    body { background: #0c0c0c; color: #e5e5e5; font-family: monospace; padding: 40px; }
    h1 { color: #fff; border-bottom: 1px solid #333; padding-bottom: 12px; }
    ul { list-style: none; padding: 0; }
  </style>
</head>
<body>
  <h1>OMP HTML Workspace Plans & Reviews</h1>
  <p style="color: #888;">Active Working Directory: <code>${activeCwd}</code></p>
  <ul>
    ${listItems || '<li style="color: #666;">No .html files generated in omp-html/ yet.</li>'}
  </ul>
</body>
</html>`;

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    }

    // Serve HTML files
    if (req.method === "GET" && (url.pathname.startsWith("/omp-html/") || url.pathname.endsWith(".html"))) {
      const cleanPath = url.pathname.replace(/^\/omp-html\//, "").replace(/^\//, "");
      const safeFilename = path.basename(cleanPath);
      const filePath = path.join(activeCwd, "omp-html", safeFilename);

      if (fs.existsSync(filePath)) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        fs.createReadStream(filePath).pipe(res);
        return;
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end(`File not found: ${safeFilename}`);
        return;
      }
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  });

  server.on("error", (err: unknown) => {
    const sysError = err as NodeJS.ErrnoException;
    if (sysError?.code === "EADDRINUSE" && port < 8130) {
      startServer(pi, initialCwd, port + 1);
    } else {
      console.error("[omp-html-server] Error:", err);
    }
  });

  server.listen(port, "127.0.0.1", () => {
    activePort = port;
    serverInstance = server;
  });
}
