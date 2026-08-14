import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import * as http from "node:http";
import * as fs from "node:fs";
import * as path from "node:path";

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

    // Save decision / HTML directly to disk
    if (req.method === "POST" && url.pathname === "/api/save") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", () => {
        try {
          const payload = JSON.parse(body);
          let filename = payload.filename || "plan.html";
          // Strip any directory path to prevent traversal
          filename = path.basename(filename);

          const targetDir = path.join(activeCwd, "omp-html");
          if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir, { recursive: true });
          }

          const gitignorePath = path.join(targetDir, ".gitignore");
          if (!fs.existsSync(gitignorePath)) {
            fs.writeFileSync(gitignorePath, "*\n!.gitignore\n", "utf8");
          }

          const filePath = path.join(targetDir, filename);

          if (payload.html) {
            fs.writeFileSync(filePath, payload.html, "utf8");
          }

          if (payload.decisions) {
            const jsonPath = path.join(targetDir, `${filename.replace(/\.html$/i, "")}.decision.json`);
            fs.writeFileSync(
              jsonPath,
              JSON.stringify(
                {
                  filename,
                  decisions: payload.decisions,
                  updatedAt: new Date().toISOString(),
                },
                null,
                2
              ),
              "utf8"
            );
          }

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(
            JSON.stringify({
              success: true,
              savedTo: filePath,
              timestamp: new Date().toISOString(),
            })
          );
        } catch (err: any) {
          res.writeHead(500, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ error: err?.message || "Failed to save file" }));
        }
      });
      return;
    }

    // Serve HTML plans directly
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

  server.on("error", (err: any) => {
    if (err.code === "EADDRINUSE" && port < 8130) {
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
