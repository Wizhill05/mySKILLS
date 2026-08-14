---
name: html
description: Generate enterprise-grade, highly detailed, monochrome dark-gray HTML plans, architecture designs, reviews, and decision trees. Pure dark neutral background (#0c0c0c), solid crisp white typography (Inter font), strictly monochrome base with ONLY red, yellow, and green accents for errors, warnings, and success. Large embedded diagrams, tables, callouts, and interactive option selectors. Saves to omp-html/ and outputs a clickable file:/// link.
---

# Monochrome HTML Plan & Review Generator Skill (`/html`)

This skill generates clean, rigorous, monochrome dark-mode HTML documents for system architecture specifications, implementation plans, code reviews, and decision matrices.

## Color & Typography Rules (Strict)

- **Pure Dark Neutral Background**: The entire page background is neutral dark gray/black (`#0c0c0c`). Content flows naturally in a clean column (`max-width: 1100px; margin: 0 auto; padding: 44px 32px;`).
- **Strictly Monochrome Base**:
  - Backgrounds: `#0c0c0c` (page), `#141414` (cards/diagrams), `#181818` (subtle blocks), `#111111` (code pre).
  - Borders: Pure neutral dark grays (`#262626`, `#333333`).
  - Text: Solid crisp white (`#ffffff`) for titles/headings, `#e5e5e5` for body, `#8a8a8a` for subtext/metadata.
  - Zero blue, purple, or cyan tints anywhere in backgrounds, text, badges, or diagrams.
- **Allowed Accent Colors (Strictly 3 Colors Only)**:
  1. **YELLOW** (Warnings & Performance Alerts): Text `#fef08a`, Background `#1f1a05`, Border `#5c450a`, Left accent line `#eab308`.
  2. **RED** (Errors, Blockers & Critical Risks): Text `#fca5a5`, Background `#22090b`, Border `#5c1118`, Left accent line `#ef4444`.
  3. **GREEN** (Success, Completed Status & Passed Checks): Text `#86efac`, Background `#05200f`, Border `#144625`, Left accent line `#22c55e`.
- **Solid Crisp Typography**:
  - Google Font Inter + JetBrains Mono:
    `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">`
  - Font stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;`
  - Monospace stack: `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;`
  - Document Title: Solid filled 34px bold text (`color: #ffffff; font-weight: 800; letter-spacing: -0.03em; -webkit-text-stroke: 0;`). Never use outline/hollow fonts.
- **Zero Emojis**: Never use emojis anywhere. Use clean uppercase technical markers: `[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[INFO]`, `[STATUS]`, `[TARGET]`, `[DECISION]`, `[COPY]`.
- **Sharp Corners**: `border-radius: 0 !important;` on all elements.
- **Monochrome Enterprise Diagrams (Mermaid.js)**:
  - Clean neutral dark nodes (`fill: #1a1a1a`, `stroke: #444444`, `color: #ffffff`).
  - Subgraphs with neutral dark containers (`#141414`, border `#2e2e2e`).
  - Large full-width container scaling (`max-width: 1060px; min-height: 280px;`).

---

## File Storage & Linking Protocol

1. **Target Directory**: Locate the current project root and ensure `<project_root>/omp-html/` exists.
2. **Gitignore Protection**: Ensure `<project_root>/omp-html/.gitignore` exists with:
   ```gitignore
   *
   __omp_shell(".gitignore")
   ```
3. **File Naming**: Save the file as `<project_root>/omp-html/<slug>.html` (e.g., `plan-auth-system.html`, `review-pr-42.html`).
4. **Chat Response**: After writing the file, provide a structured chat summary and output the clickable `file:///` link:
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
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  <!-- Mermaid.js for Diagrams -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: '#111111',
        primaryColor: '#1a1a1a',
        primaryBorderColor: '#3a3a3a',
        primaryTextColor: '#ffffff',
        lineColor: '#525252',
        secondaryColor: '#171717',
        tertiaryColor: '#0f0f0f',
        mainBkg: '#1a1a1a',
        nodeBorder: '#404040',
        clusterBkg: '#141414',
        clusterBorder: '#2e2e2e',
        defaultLinkColor: '#737373',
        titleColor: '#ffffff',
        edgeLabelBackground: '#111111',
        actorBkg: '#1a1a1a',
        actorBorder: '#404040',
        actorTextColor: '#ffffff',
        actorLineColor: '#525252',
        signalColor: '#737373',
        signalTextColor: '#ffffff',
        labelBoxBkgColor: '#1a1a1a',
        labelBoxBorderColor: '#404040',
        labelTextColor: '#ffffff',
        loopTextColor: '#ffffff',
        fontSize: '13px',
        fontFamily: "'Inter', -apple-system, sans-serif"
      }
    });
  </script>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      border-radius: 0 !important;
      -webkit-text-stroke: 0 !important;
    }

    body {
      background-color: #0c0c0c;
      color: #e5e5e5;
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
      line-height: 1.65;
      padding: 44px 32px;
      -webkit-font-smoothing: antialiased;
    }

    .content {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* Header */
    .header {
      border-bottom: 1px solid #262626;
      padding-bottom: 24px;
      margin-bottom: 36px;
    }
    .header-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 8px;
      background: #171717;
      border: 1px solid #333333;
      color: #d4d4d4;
      margin-bottom: 12px;
      font-family: 'JetBrains Mono', monospace;
    }
    h1 {
      font-size: 34px;
      font-weight: 800;
      color: #ffffff !important;
      margin-bottom: 12px;
      letter-spacing: -0.03em;
      line-height: 1.2;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
      color: #8a8a8a;
      padding-top: 6px;
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Headings */
    h2 {
      font-size: 18px;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: #ffffff;
      margin: 44px 0 18px 0;
      border-bottom: 1px solid #262626;
      padding-bottom: 8px;
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .section-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #737373;
      font-weight: 700;
    }
    h3 {
      font-size: 15px;
      font-weight: 700;
      color: #ffffff;
      margin: 26px 0 10px 0;
    }

    p {
      color: #d4d4d4;
      font-size: 14.5px;
      margin-bottom: 16px;
      line-height: 1.7;
    }

    ul, ol {
      margin-left: 22px;
      margin-bottom: 18px;
      font-size: 14px;
    }
    li {
      margin-bottom: 8px;
      color: #d4d4d4;
      line-height: 1.65;
    }

    code {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12.5px;
      background-color: #171717;
      border: 1px solid #2e2e2e;
      padding: 2px 6px;
      color: #ffffff;
    }
    pre {
      background-color: #111111;
      border: 1px solid #262626;
      padding: 18px;
      overflow-x: auto;
      margin: 18px 0;
      line-height: 1.5;
    }
    pre code {
      background: transparent;
      border: none;
      padding: 0;
      color: #e5e5e5;
      font-size: 13px;
    }

    /* Callouts - Only Yellow, Red, Green accents */
    .callout {
      padding: 16px 20px;
      margin: 22px 0;
      font-size: 14px;
      border: 1px solid;
      line-height: 1.65;
    }
    .callout-title {
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 8px;
      font-size: 12.5px;
      font-family: 'JetBrains Mono', monospace;
    }
    .callout-warning {
      background-color: #1f1a05;
      border-color: #5c450a;
      border-left: 4px solid #eab308;
      color: #fef08a;
    }
    .callout-error {
      background-color: #22090b;
      border-color: #5c1118;
      border-left: 4px solid #ef4444;
      color: #fca5a5;
    }
    .callout-success {
      background-color: #05200f;
      border-color: #144625;
      border-left: 4px solid #22c55e;
      color: #86efac;
    }
    .callout-note {
      background-color: #141414;
      border-color: #2b2b2b;
      border-left: 4px solid #737373;
      color: #d4d4d4;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 22px 0;
      font-size: 13.5px;
      border: 1px solid #262626;
    }
    th {
      background-color: #141414;
      color: #ffffff;
      font-weight: 700;
      font-size: 11.5px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 12px 14px;
      border-bottom: 1px solid #333333;
      border-right: 1px solid #262626;
      text-align: left;
      font-family: 'JetBrains Mono', monospace;
    }
    td {
      padding: 12px 14px;
      border-bottom: 1px solid #1f1f1f;
      border-right: 1px solid #1f1f1f;
      vertical-align: top;
      line-height: 1.6;
      color: #d4d4d4;
    }
    tr:nth-child(even) {
      background-color: #0f0f0f;
    }
    tr:hover {
      background-color: #171717;
    }

    /* Badges */
    .badge {
      display: inline-block;
      font-size: 10.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 3px 8px;
      border: 1px solid;
      font-family: 'JetBrains Mono', monospace;
    }
    .badge-pending { background: #171717; border-color: #333333; color: #a3a3a3; }
    .badge-progress { background: #1f1f1f; border-color: #404040; color: #ffffff; }
    .badge-done { background: #05200f; border-color: #166534; color: #4ade80; }
    .badge-risk { background: #2a0c0e; border-color: #991b1b; color: #f87171; }
    .badge-warn { background: #231c07; border-color: #854d0e; color: #facc15; }

    /* Mermaid diagrams container */
    .diagram-container {
      background-color: #111111;
      border: 1px solid #262626;
      padding: 32px 24px;
      margin: 24px 0;
      overflow-x: auto;
      display: flex;
      justify-content: center;
    }
    .mermaid {
      width: 100%;
      min-height: 280px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .mermaid svg {
      width: 100% !important;
      max-width: 1040px !important;
      height: auto !important;
      min-height: 260px !important;
    }

    /* Interactive Decision Cards */
    .decision-block {
      background: #141414;
      border: 1px solid #262626;
      padding: 24px;
      margin: 28px 0;
    }
    .decision-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #ffffff;
      margin-bottom: 16px;
      font-family: 'JetBrains Mono', monospace;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 18px;
    }
    .option-label {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 18px;
      background: #0c0c0c;
      border: 1px solid #262626;
      cursor: pointer;
    }
    .option-label:hover {
      border-color: #404040;
      background: #171717;
    }
    .option-label input {
      margin-top: 4px;
      accent-color: #ffffff;
    }
    .option-content {
      flex: 1;
    }
    .option-name {
      font-weight: 700;
      font-size: 14px;
      color: #ffffff;
      margin-bottom: 4px;
    }
    .option-desc {
      font-size: 13px;
      color: #a3a3a3;
      line-height: 1.55;
    }

    .copy-button {
      background-color: #262626;
      color: #ffffff;
      border: 1px solid #404040;
      padding: 10px 20px;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      cursor: pointer;
      font-family: 'JetBrains Mono', monospace;
    }
    .copy-button:hover {
      background-color: #333333;
    }
    .copy-preview {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      background: #080808;
      border: 1px solid #262626;
      padding: 12px 16px;
      color: #a3a3a3;
      margin-top: 14px;
      white-space: pre-wrap;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="content">
    <header class="header">
      <span class="header-badge">[PLAN] ARCHITECTURE SPECIFICATION</span>
      <h1>{{Plan Title}}</h1>
      <div class="meta-row">
        <span class="meta-item">DATE: {{Date}}</span>
        <span class="meta-item">STATUS: <span class="badge badge-progress">IN REVIEW</span></span>
        <span class="meta-item">TARGET: <code>{{Project / Module}}</code></span>
        <span class="meta-item">AUTHOR: {{Author}}</span>
      </div>
    </header>

    <section>
      <h2><span class="section-num">01.</span> Architecture Context & Problem Statement</h2>
      <p>{{Comprehensive technical background explaining the architecture, motivations, current bottlenecks, and target end-state.}}</p>
    </section>

    <section>
      <h2><span class="section-num">02.</span> System Topology & Component Interactions</h2>
      <div class="diagram-container">
        <div class="mermaid">
          flowchart TB
            subgraph INGRESS["Ingress & Edge Layer"]
              Client["Client Applications (Web / Mobile)"]
              Gateway["API Gateway / Envoy (TLS Termination • Auth)"]
            end

            subgraph COMPUTE["Stateless Compute Tier"]
              CoreWorkers["App Core Workers (Bun / Fastify Cluster)"]
              L1LRU["L1 In-Memory LRU Cache (1K Hot Keys • 10s TTL)"]
            end

            subgraph CACHE["Distributed Cache & Invalidation"]
              RedisPrimary[("Redis Cluster Primary (L2 Distributed Cache)")]
              PubSubBus{{"Redis Pub/Sub Bus (Inter-Worker Eviction)"}}
            end

            subgraph STORAGE["Persistent Storage Tier"]
              PostgresPrimary[("PostgreSQL 16 Primary (Transactional Truth)")]
              ReadReplica[("Read Replica (Analytics & Fallback Reads)")]
            end

            Client -->|HTTPS / WSS| Gateway
            Gateway -->|HTTP/2 Internal Proxy| CoreWorkers
            CoreWorkers <-->|Sub-millisecond Lookup| L1LRU
            CoreWorkers -->|Cache-Aside (XFetch)| RedisPrimary
            CoreWorkers -->|Transactional Commits| PostgresPrimary
            CoreWorkers -.->|Publish Eviction Notice| PubSubBus
            PubSubBus -.->|Broadcast Invalidate| L1LRU
            PostgresPrimary -.->|Async WAL Streaming| ReadReplica
        </div>
      </div>
    </section>

    <!-- Rest of template sections -->
  </div>
</body>
</html>
```
