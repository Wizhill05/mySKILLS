---
name: html
description: Generate clean, dark-mode, structured HTML plans, architecture designs, reviews, and decision trees with embedded diagrams, tables, callouts, and interactive option selectors. Saves to omp-html/ and outputs a clickable file:/// link.
---

# HTML Plan & Review Generator Skill (`/html`)

This skill generates high-clarity, structured HTML documents for implementation plans, architecture designs, code reviews, and decision matrices.

## Core Philosophy

- **Document, Not a Website**: Looks like a beautifully formatted, structured `.md` document rendered in dark mode—never a marketing landing page or complex webapp.
- **Color Palette**:
  - **Page Background**: Pure black (`#09090b` or `#000000`).
  - **Container / Cards**: Dark gray (`#121215`, `#18181b`, `#1e1e24`).
  - **Borders**: Subtle dark border (`#27272a`).
  - **Text**: Crisp white (`#f4f4f5`, `#ffffff`), subtext in muted light gray (`#a1a1aa`).
  - **Warnings**: High-contrast Yellow (`#eab308` / `#facc15` text on `#231c07` background with `#ca8a04` border).
  - **Errors / Risks / Blockers**: High-contrast Red (`#ef4444` / `#f87171` text on `#2a0c0e` background with `#dc2626` border).
  - **Success / Done**: Emerald Green (`#22c55e` / `#4ade80` on `#062814` with `#16a34a` border).
  - **Info / Notes**: Cyan / Sky Blue (`#38bdf8` on `#082136` with `#0284c7` border).
- **Concise & Terse**: Keep text short, precise, bullet-driven, and actionable. Avoid long narrative fluff.
- **Embedded Visuals**: Include Mermaid.js diagrams directly via CDN for architecture, flowcharts, sequence diagrams, and timelines.
- **Interactive Decisions**: When choices or questions are needed, embed interactive selection cards (radio/checkbox) with a 1-click "Copy Decision" prompt helper.

---

## File Storage & Linking Protocol

Whenever generating an HTML plan/review:

1. **Target Directory**: Locate the current project root and ensure `<project_root>/omp-html/` exists.
2. **Gitignore Protection**: Ensure `<project_root>/omp-html/.gitignore` exists with the following content:
   ```gitignore
   *
   !.gitignore
   ```
3. **File Naming**: Save the file as `<project_root>/omp-html/<slug-or-topic>.html` (e.g., `plan-auth-system.html`, `review-pr-42.html`).
4. **Chat Response**: After writing the file, provide a concise chat summary and output the exact clickable `file:///` link:
   ```text
   Plan generated: file:///C:/Users/Aryan/projects/Resumer-v2/omp-html/plan-auth-system.html
   ```
   *(Ensure Windows paths use forward slashes `file:///C:/path/to/file.html` so all browsers open it on click).*

---

## Standard HTML Template Blueprint

When generating an HTML plan, use the following self-contained structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TITLE}}</title>
  <!-- Mermaid.js for embedded diagrams -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: '#0c0c0e',
        primaryColor: '#1e293b',
        primaryBorderColor: '#38bdf8',
        primaryTextColor: '#f8fafc',
        lineColor: '#94a3b8',
        secondaryColor: '#18181b',
        tertiaryColor: '#0f172a',
        mainBkg: '#1e293b',
        nodeBorder: '#38bdf8',
        clusterBkg: '#141418',
        clusterBorder: '#3f3f46',
        defaultLinkColor: '#94a3b8',
        titleColor: '#f8fafc',
        edgeLabelBackground: '#0c0c0e',
        actorBkg: '#1e293b',
        actorBorder: '#38bdf8',
        actorTextColor: '#f8fafc',
        actorLineColor: '#64748b',
        signalColor: '#94a3b8',
        signalTextColor: '#f8fafc',
        labelBoxBkgColor: '#1e293b',
        labelBoxBorderColor: '#38bdf8',
        labelTextColor: '#f8fafc',
        loopTextColor: '#f8fafc',
        noteBorderColor: '#ca8a04',
        noteBkgColor: '#231c07',
        noteTextColor: '#facc15',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    });
  </script>
  <style>
    :root {
      --bg-page: #09090b;
      --bg-card: #121215;
      --bg-card-hover: #18181c;
      --bg-subtle: #1c1c21;
      --border: #27272a;
      --border-focus: #3f3f46;
      --text-main: #f4f4f5;
      --text-sub: #a1a1aa;
      --text-muted: #71717a;
      
      --yellow-text: #facc15;
      --yellow-bg: #231c07;
      --yellow-border: #854d0e;
      
      --red-text: #f87171;
      --red-bg: #2a0c0e;
      --red-border: #991b1b;
      
      --green-text: #4ade80;
      --green-bg: #062814;
      --green-border: #166534;
      
      --cyan-text: #38bdf8;
      --cyan-bg: #082136;
      --cyan-border: #075985;
      
      --accent: #6366f1;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    
    body {
      background-color: var(--bg-page);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      padding: 32px 16px;
      display: flex;
      justify-content: center;
    }

    .container {
      width: 100%;
      max-width: 900px;
      background-color: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 32px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    }

    /* Header */
    .header {
      border-bottom: 1px solid var(--border);
      padding-bottom: 20px;
      margin-bottom: 28px;
    }
    .header-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 3px 8px;
      border-radius: 4px;
      background: var(--bg-subtle);
      border: 1px solid var(--border);
      color: var(--accent);
      margin-bottom: 10px;
    }
    h1 {
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 8px;
      letter-spacing: -0.3px;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      font-size: 13px;
      color: var(--text-sub);
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Headings */
    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #ffffff;
      margin: 28px 0 14px 0;
      display: flex;
      align-items: center;
      gap: 8px;
      border-bottom: 1px solid var(--border);
      padding-bottom: 8px;
    }
    h3 {
      font-size: 15px;
      font-weight: 600;
      color: #e4e4e7;
      margin: 18px 0 8px 0;
    }

    p {
      color: var(--text-main);
      font-size: 14px;
      margin-bottom: 12px;
    }

    ul, ol {
      margin-left: 20px;
      margin-bottom: 14px;
      font-size: 14px;
    }
    li {
      margin-bottom: 6px;
      color: var(--text-main);
    }
    li::marker {
      color: var(--text-muted);
    }

    /* Code and Pre */
    code {
      font-family: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
      font-size: 12.5px;
      background-color: var(--bg-subtle);
      border: 1px solid var(--border);
      padding: 2px 6px;
      border-radius: 4px;
      color: #f43f5e;
    }
    pre {
      background-color: #0c0c0e;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 14px;
      overflow-x: auto;
      margin-bottom: 16px;
    }
    pre code {
      background: transparent;
      border: none;
      padding: 0;
      color: #e4e4e7;
      font-size: 13px;
    }

    /* Callouts */
    .callout {
      border-radius: 8px;
      padding: 14px 16px;
      margin: 16px 0;
      font-size: 13.5px;
      border: 1px solid;
    }
    .callout-title {
      font-weight: 600;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .callout-warning {
      background-color: var(--yellow-bg);
      border-color: var(--yellow-border);
      color: var(--yellow-text);
    }
    .callout-error {
      background-color: var(--red-bg);
      border-color: var(--red-border);
      color: var(--red-text);
    }
    .callout-success {
      background-color: var(--green-bg);
      border-color: var(--green-border);
      color: var(--green-text);
    }
    .callout-info {
      background-color: var(--cyan-bg);
      border-color: var(--cyan-border);
      color: var(--cyan-text);
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      font-size: 13.5px;
    }
    th, td {
      border: 1px solid var(--border);
      padding: 10px 12px;
      text-align: left;
    }
    th {
      background-color: var(--bg-subtle);
      color: #ffffff;
      font-weight: 600;
      font-size: 12.5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    tr:nth-child(even) {
      background-color: rgba(255, 255, 255, 0.015);
    }
    tr:hover {
      background-color: var(--bg-card-hover);
    }

    /* Status Pills */
    .pill {
      display: inline-block;
      font-size: 11px;
      font-weight: 600;
      padding: 2px 8px;
      border-radius: 9999px;
      border: 1px solid;
    }
    .pill-pending { background: #27272a; border-color: #3f3f46; color: #d4d4d8; }
    .pill-progress { background: #172554; border-color: #1e40af; color: #60a5fa; }
    .pill-done { background: #052e16; border-color: #166534; color: #4ade80; }
    .pill-risk { background: #450a0a; border-color: #991b1b; color: #f87171; }

    /* Mermaid diagrams container */
    .diagram-container {
      background-color: #0c0c0e;
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
      margin: 16px 0;
      display: flex;
      justify-content: center;
    }

    /* Interactive Decision Cards */
    .decision-block {
      background: var(--bg-subtle);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 18px;
      margin: 20px 0;
    }
    .decision-title {
      font-size: 15px;
      font-weight: 600;
      color: #ffffff;
      margin-bottom: 12px;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 14px;
    }
    .option-label {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 12px 14px;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 6px;
      cursor: pointer;
      transition: border-color 0.15s ease;
    }
    .option-label:hover {
      border-color: var(--border-focus);
      background: var(--bg-card-hover);
    }
    .option-label input {
      margin-top: 3px;
      accent-color: var(--accent);
    }
    .option-content {
      flex: 1;
    }
    .option-name {
      font-weight: 600;
      font-size: 13.5px;
      color: #ffffff;
      margin-bottom: 2px;
    }
    .option-desc {
      font-size: 12.5px;
      color: var(--text-sub);
    }

    .copy-button {
      background-color: #27272a;
      color: #ffffff;
      border: 1px solid #3f3f46;
      border-radius: 6px;
      padding: 8px 16px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.15s ease;
    }
    .copy-button:hover {
      background-color: #3f3f46;
    }
    .copy-preview {
      font-family: ui-monospace, monospace;
      font-size: 12px;
      background: #000000;
      border: 1px solid var(--border);
      padding: 8px 12px;
      border-radius: 6px;
      color: #a1a1aa;
      margin-top: 10px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Header -->
    <header class="header">
      <span class="header-badge">Architecture & Implementation Plan</span>
      <h1>{{Plan Title}}</h1>
      <div class="meta-row">
        <span class="meta-item">📅 {{Date}}</span>
        <span class="meta-item">🎯 Status: <span class="pill pill-progress">In Review</span></span>
        <span class="meta-item">📁 Target: <code>{{Project / Module}}</code></span>
      </div>
    </header>

    <!-- Content Sections -->
    <section>
      <h2>1. Overview & Objectives</h2>
      <p>{{Terse 2-3 sentence overview of what is being implemented and why.}}</p>
    </section>

    <section>
      <h2>2. Architecture & Flow Diagram</h2>
      <div class="diagram-container">
        <div class="mermaid">
          graph TD
            A[Client / UI] -->|Action| B[Controller / API]
            B --> C{Validation}
            C -->|Valid| D[Service Layer]
            C -->|Invalid| E[Error Response]
            D --> F[(Database / State)]
        </div>
      </div>
    </section>

    <section>
      <h2>3. Execution Steps</h2>
      <table>
        <thead>
          <tr>
            <th style="width: 80px;">Phase</th>
            <th>Task & Scope</th>
            <th style="width: 200px;">Files Touched</th>
            <th style="width: 100px;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>01</strong></td>
            <td>Setup Schema & Types</td>
            <td><code>src/types/auth.ts</code></td>
            <td><span class="pill pill-pending">Pending</span></td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Warnings / Errors Callouts -->
    <section>
      <h2>4. Risks & Considerations</h2>
      <div class="callout callout-warning">
        <div class="callout-title">⚠️ Breaking Change Warning</div>
        Modifying this schema requires updating downstream callers in <code>src/services/api.ts</code>.
      </div>
      <div class="callout callout-error">
        <div class="callout-title">⛔ Blocker / Critical Risk</div>
        Token migration requires backwards compatibility fallback for existing session cookies.
      </div>
    </section>

    <!-- Interactive Decision Block (if user choices needed) -->
    <section>
      <h2>5. Architecture Decisions Needed</h2>
      <div class="decision-block">
        <div class="decision-title">Select Authentication Mechanism:</div>
        <div class="options-grid">
          <label class="option-label">
            <input type="radio" name="auth_choice" value="JWT (Stateless)" checked onchange="updateDecisionPreview()">
            <div class="option-content">
              <div class="option-name">Option A: Stateless JWT Bearer Tokens</div>
              <div class="option-desc">Fast, decentralized verification, zero database roundtrip for read requests.</div>
            </div>
          </label>
          <label class="option-label">
            <input type="radio" name="auth_choice" value="Session Cookies (Stateful)" onchange="updateDecisionPreview()">
            <div class="option-content">
              <div class="option-name">Option B: Server-Side Session Cookies</div>
              <div class="option-desc">Instant revocation capability, strict HTTP-only cookie security against XSS.</div>
            </div>
          </label>
        </div>
        <button class="copy-button" onclick="copyDecision()">📋 Copy Decision to Clipboard</button>
        <div class="copy-preview" id="decisionPreview">Selected: Option A: Stateless JWT Bearer Tokens</div>
      </div>
    </section>
  </div>

  <script>
    function updateDecisionPreview() {
      const selected = document.querySelector('input[name="auth_choice"]:checked');
      const preview = document.getElementById('decisionPreview');
      if (selected && preview) {
        preview.innerText = 'Decision: ' + selected.value;
      }
    }
    function copyDecision() {
      const preview = document.getElementById('decisionPreview');
      if (preview) {
        navigator.clipboard.writeText(preview.innerText);
        alert('Copied to clipboard: ' + preview.innerText);
      }
    }
  </script>
</body>
</html>
```

---

## Instructions for the Model

1. **Triggered via `/html` or when requested**: When the user requests an HTML plan, architecture review, or uses `/html <prompt>`, generate a standalone `.html` file matching the template styling and structure.
2. **Always include**:
   - Clean dark styling (pure black `#09090b` background, `#121215` card).
   - Crisp typography, pill tags, and monospace file/code elements.
   - At least one Mermaid diagram when illustrating workflows, architectures, dependencies, or phase lifecycles.
   - Tables for tasks, files, test plans, or schema comparisons.
   - Distinct Yellow/Red callout boxes for warnings and blockers.
   - Interactive radio/checkbox decision blocks whenever options or clarifications are presented.
3. **Save location**: `<project_root>/omp-html/<slug>.html`. Ensure `omp-html/.gitignore` exists.
4. **Chat output**: Print `file:///` clickable link.
