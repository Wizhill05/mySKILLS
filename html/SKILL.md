---
name: html
description: Generate enterprise-grade, highly detailed, dark-mode HTML architectural plans, system designs, reviews, and decision matrices. Deep obsidian background (#08080a), large 38px Helvetica typography, professional enterprise architecture diagrams with subgraphs and classDefs, sharp corners (0px radius), strictly zero emojis. Saves to omp-html/ and outputs a clickable file:/// link.
---

# Enterprise HTML Plan & Review Generator Skill (`/html`)

This skill generates high-end, rigorous HTML documents for architecture specifications, implementation RFCs, in-depth code reviews, and technical decision matrices.

## Visual Design & Typography Standards

- **Deep Obsidian Background**: The entire page background is deep dark obsidian (`#08080a`). Content flows in a centered readable column (`max-width: 1120px; margin: 0 auto; padding: 48px 32px;`).
- **Typography & Helvetica**:
  - Embedded Helvetica Neue via CDN:
    `<link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet">`
  - Font stack: `'Helvetica Neue', Helvetica, Arial, -apple-system, sans-serif;`
  - Monospace font stack: `'JetBrains Mono', 'SF Mono', Consolas, Menlo, Monaco, monospace;`
- **Typographic Scale & Visual Hierarchy**:
  - **Document Title**: Large 38px bold header (`font-size: 38px; font-weight: 700; color: #ffffff; letter-spacing: -0.035em; line-height: 1.15;`).
  - **Metadata Row**: Monospace key-value items (`DATE: 2026-08-14 | STATUS: IN REVIEW | TARGET: backend/services | AUTHOR: @user`).
  - **Section Headers**: 19px bold uppercase (`h2 { font-size: 19px; letter-spacing: -0.01em; border-bottom: 1px solid #1a1a22; padding-bottom: 10px; }`) with cyan section numbers (`01.`, `02.`, etc.).
  - **Subsection Headers**: 14.5px bold crisp white.
- **Enterprise-Grade Diagrams (Mermaid.js)**:
  - Diagrams must NEVER look amateur or childish. Always use:
    - Structured subgraphs representing clear architectural boundaries (`INGRESS`, `COMPUTE`, `CACHING & PUBSUB`, `DATA TIER`).
    - Semantic shapes: databases `[(Postgres)]`, queues/buses `{{Pub/Sub Bus}}`, gateways `[Gateway]`.
    - Custom Mermaid `classDef` rules with sleek dark backgrounds and subtle accent borders (blue, cyan, purple, slate).
    - Large full-width container scaling (`max-width: 1060px; min-height: 280px;`).
- **Strictly Zero Emojis**: Never use emojis anywhere. Use clean uppercase technical markers: `[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[INFO]`, `[STATUS]`, `[TARGET]`, `[DECISION]`, `[COPY]`.
- **Sharp Corners**: `border-radius: 0 !important;` on all elements.

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
  <link rel="preconnect" href="https://fonts.cdnfonts.com">
  <link href="https://fonts.cdnfonts.com/css/helvetica-neue-55" rel="stylesheet">
  <!-- Mermaid.js for Enterprise Architecture Diagrams -->
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        darkMode: true,
        background: '#0c0d12',
        primaryColor: '#12141c',
        primaryBorderColor: '#2b3040',
        primaryTextColor: '#f1f5f9',
        lineColor: '#475569',
        secondaryColor: '#161922',
        tertiaryColor: '#0a0b10',
        mainBkg: '#12141c',
        nodeBorder: '#2b3040',
        clusterBkg: '#0e1017',
        clusterBorder: '#1e2230',
        defaultLinkColor: '#64748b',
        titleColor: '#f1f5f9',
        edgeLabelBackground: '#0c0d12',
        actorBkg: '#12141c',
        actorBorder: '#2b3040',
        actorTextColor: '#f1f5f9',
        actorLineColor: '#475569',
        signalColor: '#64748b',
        signalTextColor: '#f1f5f9',
        labelBoxBkgColor: '#12141c',
        labelBoxBorderColor: '#2b3040',
        labelTextColor: '#f1f5f9',
        loopTextColor: '#f1f5f9',
        fontSize: '13px',
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif"
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
      background-color: #08080a;
      color: #ececed;
      font-family: 'Helvetica Neue', Helvetica, Arial, -apple-system, sans-serif;
      line-height: 1.65;
      padding: 48px 32px;
      -webkit-font-smoothing: antialiased;
    }

    .content {
      max-width: 1120px;
      margin: 0 auto;
    }

    /* Header */
    .header {
      border-bottom: 1px solid #1a1a22;
      padding-bottom: 28px;
      margin-bottom: 40px;
    }
    .header-badge {
      display: inline-block;
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      padding: 4px 8px;
      background: #10131c;
      border: 1px solid #1e293b;
      color: #38bdf8;
      margin-bottom: 14px;
      font-family: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
    }
    h1 {
      font-size: 38px;
      font-weight: 700;
      color: #ffffff;
      margin-bottom: 14px;
      letter-spacing: -0.035em;
      line-height: 1.15;
    }
    .meta-row {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
      font-size: 12px;
      font-family: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
      color: #888892;
      padding-top: 10px;
    }
    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    /* Headings */
    h2 {
      font-size: 19px;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: #ffffff;
      margin: 48px 0 20px 0;
      border-bottom: 1px solid #1a1a22;
      padding-bottom: 10px;
      display: flex;
      align-items: baseline;
      gap: 10px;
    }
    .section-num {
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: #38bdf8;
      font-weight: 600;
    }
    h3 {
      font-size: 15px;
      font-weight: 700;
      color: #e2e8f0;
      margin: 28px 0 12px 0;
      letter-spacing: -0.01em;
    }

    p {
      color: #cbd5e1;
      font-size: 14.5px;
      margin-bottom: 18px;
      line-height: 1.7;
    }

    ul, ol {
      margin-left: 22px;
      margin-bottom: 20px;
      font-size: 14px;
    }
    li {
      margin-bottom: 8px;
      color: #cbd5e1;
      line-height: 1.65;
    }

    code {
      font-family: 'JetBrains Mono', 'SF Mono', Consolas, monospace;
      font-size: 12.5px;
      background-color: #12141c;
      border: 1px solid #1e2230;
      padding: 2px 6px;
      color: #f43f5e;
    }
    pre {
      background-color: #0c0d12;
      border: 1px solid #1a1a22;
      padding: 20px;
      overflow-x: auto;
      margin: 20px 0;
      line-height: 1.5;
    }
    pre code {
      background: transparent;
      border: none;
      padding: 0;
      color: #e2e8f0;
      font-size: 13px;
    }

    /* Callouts */
    .callout {
      padding: 18px 22px;
      margin: 24px 0;
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
      background-color: #1a1506;
      border-color: #4d3805;
      border-left: 4px solid #eab308;
      color: #fef08a;
    }
    .callout-error {
      background-color: #1f0a0d;
      border-color: #5c1118;
      border-left: 4px solid #ef4444;
      color: #fca5a5;
    }
    .callout-info {
      background-color: #071524;
      border-color: #0c3559;
      border-left: 4px solid #0284c7;
      color: #bae6fd;
    }

    /* Tables */
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 24px 0;
      font-size: 13.5px;
      border: 1px solid #1a1a22;
    }
    th {
      background-color: #0e1017;
      color: #cbd5e1;
      font-weight: 700;
      font-size: 11.5px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 14px 16px;
      border-bottom: 1px solid #1e2230;
      border-right: 1px solid #1a1a22;
      text-align: left;
      font-family: 'JetBrains Mono', monospace;
    }
    td {
      padding: 14px 16px;
      border-bottom: 1px solid #14161f;
      border-right: 1px solid #14161f;
      vertical-align: top;
      line-height: 1.6;
      color: #cbd5e1;
    }
    tr:nth-child(even) {
      background-color: #0b0c10;
    }
    tr:hover {
      background-color: #12141c;
    }

    /* Status Badges */
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
    .badge-pending { background: #12141c; border-color: #272c3d; color: #94a3b8; }
    .badge-progress { background: #082136; border-color: #075985; color: #38bdf8; }
    .badge-done { background: #062814; border-color: #166534; color: #4ade80; }
    .badge-risk { background: #2a0c0e; border-color: #991b1b; color: #f87171; }

    /* Mermaid diagrams container */
    .diagram-container {
      background-color: #0c0d12;
      border: 1px solid #1a1a22;
      padding: 36px 28px;
      margin: 28px 0;
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
      max-width: 1060px !important;
      height: auto !important;
      min-height: 260px !important;
    }

    /* Interactive Decision Cards */
    .decision-block {
      background: #0d0f16;
      border: 1px solid #1a1e2a;
      padding: 26px;
      margin: 32px 0;
    }
    .decision-title {
      font-size: 13px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #ffffff;
      margin-bottom: 18px;
      font-family: 'JetBrains Mono', monospace;
    }
    .options-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 20px;
    }
    .option-label {
      display: flex;
      align-items: flex-start;
      gap: 14px;
      padding: 16px 18px;
      background: #08080a;
      border: 1px solid #1a1e2a;
      cursor: pointer;
    }
    .option-label:hover {
      border-color: #2b3040;
      background: #10131c;
    }
    .option-label input {
      margin-top: 4px;
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
      color: #94a3b8;
      line-height: 1.55;
    }

    .copy-button {
      background-color: #1e2230;
      color: #ffffff;
      border: 1px solid #2e354a;
      padding: 11px 22px;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      cursor: pointer;
      font-family: 'JetBrains Mono', monospace;
    }
    .copy-button:hover {
      background-color: #2b3040;
    }
    .copy-preview {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      background: #050507;
      border: 1px solid #1a1a22;
      padding: 14px 18px;
      color: #94a3b8;
      margin-top: 16px;
      white-space: pre-wrap;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <div class="content">
    <header class="header">
      <span class="header-badge">[PLAN] ARCHITECTURE RFC</span>
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
            subgraph INGRESS["Client & Ingress Layer"]
              Client["Client Apps<br/><small style='color:#94a3b8'>Web / Mobile Clients</small>"]
              Gateway["API Gateway / Kong<br/><small style='color:#94a3b8'>TLS Termination • Rate Limiting</small>"]
            end

            subgraph COMPUTE["Stateless Compute Tier"]
              CoreWorkers["App Core Workers<br/><small style='color:#94a3b8'>Session Validation • Business Logic</small>"]
              L1LRU["L1 In-Memory LRU<br/><small style='color:#94a3b8'>1,000 Hot Keys • 10s TTL</small>"]
            end

            subgraph CACHE["Distributed Cache & Sync Bus"]
              RedisL2[("Redis Cluster Primary<br/><small style='color:#94a3b8'>L2 Distributed Cache</small>")]
              PubSubBus{{"Redis Pub/Sub Channel<br/><small style='color:#94a3b8'>Inter-Worker Eviction Notice</small>"}}
            end

            subgraph DATA["Persistent Storage Tier"]
              PostgresDB[("PostgreSQL 16 Primary<br/><small style='color:#94a3b8'>Transactional Data</small>")]
              ReplicaDB[("Read Replica<br/><small style='color:#94a3b8'>Analytics / Fallback</small>")]
            end

            Client -->|HTTPS / WSS| Gateway
            Gateway -->|HTTP/2 Proxy| CoreWorkers
            CoreWorkers <-->|Sub-ms Lookup| L1LRU
            CoreWorkers -->|Cache-Aside XFetch| RedisL2
            CoreWorkers -->|Transactional Mutations| PostgresDB
            CoreWorkers -.->|Eviction Notice| PubSubBus
            PubSubBus -.->|Broadcast Invalidation| L1LRU
            PostgresDB -.->|WAL Replication| ReplicaDB

            classDef ingress fill:#10131c,stroke:#2563eb,stroke-width:1.5px,color:#f8fafc;
            classDef compute fill:#131722,stroke:#0284c7,stroke-width:1.5px,color:#f8fafc;
            classDef cache fill:#151221,stroke:#9333ea,stroke-width:1.5px,color:#f8fafc;
            classDef storage fill:#0f172a,stroke:#475569,stroke-width:1.5px,color:#f8fafc;

            class Client,Gateway ingress;
            class CoreWorkers,L1LRU compute;
            class RedisL2,PubSubBus cache;
            class PostgresDB,ReplicaDB storage;
        </div>
      </div>
    </section>

    <!-- Rest of template sections -->
  </div>
</body>
</html>
```
