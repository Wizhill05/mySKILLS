---
name: html
description: Generate clean, minimalist, dark-gray HTML plans, architecture designs, reviews, and decision trees with large embedded diagrams, tables, callouts, and interactive option selectors. Plain dark-gray background, sharp edges (0px radius), strictly zero emojis. Saves to omp-html/ and outputs a clickable file:/// link.
---

# Minimalist HTML Plan & Review Generator Skill (`/html`)

This skill generates structured, minimalist HTML documents for implementation plans, architecture designs, code reviews, and decision matrices.

## Core Rules & Styling Requirements

- **Plain Dark Gray Background**: The entire page background is plain dark gray (`#141416`). No centered isolated box or floating card container. Content flows naturally in a clean readability column (`max-width: 1080px; margin: 0 auto;`).
- **No Rounded Corners**: Strict sharp minimalist aesthetic (`border-radius: 0 !important;` on all containers, buttons, callouts, tables, badges, code blocks, and form inputs).
- **Strictly Zero Emojis**: Never use emojis anywhere in titles, badges, callouts, metadata, or text. Use clean uppercase text markers instead: `[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[INFO]`, `[STATUS]`, `[TARGET]`, `[DECISION]`, `[COPY]`.
- **Large & High-Visibility Graphs**: Mermaid.js diagrams must be rendered with high contrast, large readable node fonts (`14px`), spacious padding, and scaled to full container width (`width: 100%; min-height: 240px;`).
- **Color Palette**:
  - **Page Background**: Dark gray (`#141416`).
  - **Borders & Dividers**: Subtle borders (`#27272a` / `#333338`).
  - **Text**: Crisp white (`#ffffff` / `#ececed`), subtext in muted light gray (`#a1a1aa`).
  - **Warnings**: High-contrast Yellow (`#fef08a` text, `#231c07` background, `#854d0e` border, `#facc15` left accent line).
  - **Errors / Risks / Blockers**: High-contrast Red (`#fca5a5` text, `#2a0c0e` background, `#991b1b` border, `#ef4444` left accent line).
  - **Status Badges**: Sharp rectangular text pills (`STATUS: PENDING`, `STATUS: IN PROGRESS`, `STATUS: COMPLETED`, `STATUS: BLOCKED`).
- **Concise & Terse**: Keep text short, precise, bullet-driven, and actionable. Avoid narrative fluff.
- **Interactive Decisions**: When choices or questions are needed, embed interactive selection cards with a 1-click `[COPY DECISION TO CLIPBOARD]` prompt helper.

---

## File Storage & Linking Protocol

1. **Target Directory**: Locate the current project root and ensure `<project_root>/omp-html/` exists.
2. **Gitignore Protection**: Ensure `<project_root>/omp-html/.gitignore` exists with:
   ```gitignore
   *
   __omp_shell(".gitignore")
   ```
3. **File Naming**: Save the file as `<project_root>/omp-html/<slug>.html` (e.g., `plan-auth-system.html`, `review-pr-42.html`).
4. **Chat Response**: After writing the file, provide a concise chat summary and output the clickable `file:///` link:
   ```text
   Plan generated: file:///C:/Users/Aryan/projects/Resumer-v2/omp-html/plan-auth-system.html
   ```

---

## Standard HTML Template Blueprint

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{TITLE}}</title>
  <!-- Mermaid.js for Diagrams -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: '#0d0d0f',
        primaryColor: '#1e293b',
        primaryBorderColor: '#38bdf8',
        primaryTextColor: '#ffffff',
        lineColor: '#94a3b8',
        secondaryColor: '#1e1e24',
        tertiaryColor: '#0f172a',
        mainBkg: '#1e293b',
        nodeBorder: '#38bdf8',
        clusterBkg: '#141418',
        clusterBorder: '#3f3f46',
        defaultLinkColor: '#94a3b8',
        titleColor: '#ffffff',
        edgeLabelBackground: '#0d0d0f',
        actorBkg: '#1e293b',
        actorBorder: '#38bdf8',
        actorTextColor: '#ffffff',
        actorLineColor: '#64748b',
        signalColor: '#94a3b8',
        signalTextColor: '#ffffff',
        labelBoxBkgColor: '#1e293b',
        labelBoxBorderColor: '#38bdf8',
        labelTextColor: '#ffffff',
        loopTextColor: '#ffffff',
        fontSize: '14px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    });
  </script>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0 !important;
    }

    body {
      background-color: #141416;
      color: #ececed;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      padding: 40px 32px;
    }

    .content {
      max-width: 1080px;
      margin: 0 auto;
    }

    /* Header */
    .header {
      border-bottom: 1px solid #27272a;
      padding-bottom: 20px;
      margin-bottom: 32px;
    }
    .header-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 8px;
      background: #1c1c20;
      border: 1px solid #333338;
      color: #38bdf8;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 26px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 10px;
      letter-spacing: -0.4px;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      font-size: 13px;
      color: #a1a1aa;
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Headings */
    h2 {
      font-size: 16px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin: 36px 0 16px 0;
      border-bottom: 1px solid #27272a;
      padding-bottom: 8px;
    }
    h3 {
      font-size: 14px;
      font-weight: 600;
      color: #e4e4e7;
      margin: 20px 0 8px 0;
    }

    p {
      color: #d4d4d8;
      font-size: 14px;
      margin-bottom: 14px;
    }

    ul, ol {
      margin-left: 20px;
      margin-bottom: 16px;
      font-size: 14px;
    }
    li {
      margin-bottom: 6px;
      color: #d4d4d8;
    }

    code {
      font-family: ui-monospace, "SF Mono", Menlo, Monaco, Consolas, monospace;
      font-size: 13px;
      background-color: #1f1f23;
      border: 1px solid #333338;
      padding: 2px 6px;
      color: #f43f5e;
    }
    pre {
      background-color: #0d0d0f;
      border: 1px solid #27272a;
      padding: 16px;
      overflow-x: auto;
      margin: 16px 0;
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
      padding: 14px 18px;
      margin: 18px 0;
      font-size: 13.5px;
      border: 1px solid;
    }
    .callout-title {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }
    .callout-warning {
      background-color: #231c07;
      border-color: #854d0e;
      border-left: 4px solid #facc15;
      color: #fef08a;
    }
    .callout-error {
      background-color: #2a0c0e;
      border-color: #991b1b;
      border-left: 4px solid #ef4444;
      color: #fca5a5;
    }
    .callout-info {
      background-color: #082136;
      border-color: #075985;
      border-left: 4px solid #38bdf8;
      color: #bae6fd;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 20px 0;
      font-size: 13.5px;
    }
    th, td {
      border: 1px solid #27272a;
      padding: 11px 14px;
      text-align: left;
    }
    th {
      background-color: #1c1c20;
      color: #ffffff;
      font-weight: 700;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    tr:nth-child(even) {
      background-color: #18181c;
    }
    tr:hover {
      background-color: #1f1f25;
    }

    /* Status Badges */
    .badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 2px 7px;
      border: 1px solid;
    }
    .badge-pending { background: #1c1c20; border-color: #333338; color: #a1a1aa; }
    .badge-progress { background: #082136; border-color: #075985; color: #38bdf8; }
    .badge-done { background: #062814; border-color: #166534; color: #4ade80; }
    .badge-risk { background: #2a0c0e; border-color: #991b1b; color: #f87171; }

    /* Mermaid diagrams container */
    .diagram-container {
      background-color: #0d0d0f;
      border: 1px solid #27272a;
      padding: 28px 20px;
      margin: 20px 0;
      overflow-x: auto;
      display: flex;
      justify-content: center;
    }
    .mermaid {
      width: 100%;
      min-height: 240px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mermaid svg {
      width: 100% !important;
      max-width: 980px !important;
      height: auto !important;
      min-height: 220px !important;
    }

    /* Interactive Decision Cards */
    .decision-block {
      background: #18181c;
      border: 1px solid #27272a;
      padding: 20px;
      margin: 24px 0;
    }
    .decision-title {
      font-size: 14px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: #ffffff;
      margin-bottom: 14px;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 16px;
    }
    .option-label {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 14px 16px;
      background: #141416;
      border: 1px solid #27272a;
      cursor: pointer;
    }
    .option-label:hover {
      border-color: #3f3f46;
      background: #1c1c20;
    }
    .option-label input {
      margin-top: 3px;
    }
    .option-content {
      flex: 1;
    }
    .option-name {
      font-weight: 700;
      font-size: 13.5px;
      color: #ffffff;
      margin-bottom: 3px;
    }
    .option-desc {
      font-size: 12.5px;
      color: #a1a1aa;
    }

    .copy-button {
      background-color: #27272a;
      color: #ffffff;
      border: 1px solid #3f3f46;
      padding: 10px 18px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      cursor: pointer;
    }
    .copy-button:hover {
      background-color: #3f3f46;
    }
    .copy-preview {
      font-family: ui-monospace, monospace;
      font-size: 12px;
      background: #0d0d0f;
      border: 1px solid #27272a;
      padding: 10px 14px;
      color: #a1a1aa;
      margin-top: 12px;
      white-space: pre-wrap;
    }
  </style>
</head>
<body>
  <div class="content">
    <header class="header">
      <span class="header-badge">[PLAN] IMPLEMENTATION</span>
      <h1>{{Plan Title}}</h1>
      <div class="meta-row">
        <span class="meta-item">DATE: {{Date}}</span>
        <span class="meta-item">STATUS: <span class="badge badge-progress">IN REVIEW</span></span>
        <span class="meta-item">TARGET: <code>{{Project / Module}}</code></span>
      </div>
    </header>

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
            <th style="width: 240px;">Files Touched</th>
            <th style="width: 120px;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>01</strong></td>
            <td>Setup Schema & Types</td>
            <td><code>src/types/auth.ts</code></td>
            <td><span class="badge badge-pending">PENDING</span></td>
          </tr>
        </tbody>
      </table>
    </section>

    <section>
      <h2>4. Risks & Considerations</h2>
      <div class="callout callout-warning">
        <div class="callout-title">[WARNING] Breaking Change</div>
        Modifying this schema requires updating downstream callers in <code>src/services/api.ts</code>.
      </div>
      <div class="callout callout-error">
        <div class="callout-title">[ERROR] Critical Risk / Blocker</div>
        Token migration requires backwards compatibility fallback for existing session cookies.
      </div>
    </section>

    <section>
      <h2>5. Architecture Decisions Needed</h2>
      <div class="decision-block">
        <div class="decision-title">[DECISION] Select Authentication Mechanism:</div>
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
        <button class="copy-button" onclick="copyDecision()">[COPY DECISION TO CLIPBOARD]</button>
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
        alert('Copied decision: ' + preview.innerText);
      }
    }
  </script>
</body>
</html>
```
