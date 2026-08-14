---
name: html
description: Generate enterprise-grade, highly detailed, monochrome dark-gray HTML plans, architecture designs, reviews, and decision trees. Features Option 1 zero-friction real-time background auto-save via local OMP server extension (http://127.0.0.1:8123) that silently overwrites files on disk the moment options are clicked. Pure dark neutral background (#0c0c0c), solid crisp white typography, strictly monochrome with ONLY red, yellow, and green accents. Saves to omp-html/ and outputs both http:// and file:/// clickable links.
---

# Monochrome HTML Plan & Review Generator Skill (`/html`)

This skill generates clean, rigorous, monochrome dark-mode HTML documents for system architecture specifications, implementation plans, code reviews, and decision matrices.

## Real-Time Silent Background Auto-Save (Option 1 — Zero Friction)

When architectural options or decisions are presented in the HTML document:
1. **Zero-Friction Local Server**:
   - The OMP extension `omp-html-server.ts` runs a lightweight local background server on `http://127.0.0.1:8123`.
   - The generated plan can be opened via `http://127.0.0.1:8123/omp-html/<slug>.html` or `file:///.../omp-html/<slug>.html`.
2. **Instant Silent In-Place Disk Overwrite**:
   - Clicking any option or checkbox immediately mutates the DOM attributes (`checked="checked"`), updates `<meta name="omp-decisions">`, and sends a background `fetch('http://127.0.0.1:8123/api/save')`.
   - The local server **overwrites the original `.html` file on disk in real time** with zero prompts, zero file pickers, and zero download popups.
   - Status updates instantly to `[STATUS: AUTO-SAVED TO DISK (hh:mm:ss)]` in green.
3. **Automated Agent Inspection**:
   - When the user returns to OMP and says "proceed with the plan", "start implementing", or "check my choices", the agent **reads `<project_root>/omp-html/<slug>.html` directly using the `read` tool**.
   - The agent inspects `<meta name="omp-decisions">` or finds the `checked` inputs in the HTML and executes the plan according to the user's choices.

---

## Visual Design & Color Rules (Strict)

- **Pure Dark Neutral Background**: The entire page background is neutral dark gray/black (`#0c0c0c`). Content flows naturally in a clean column (`max-width: 1100px; margin: 0 auto; padding: 44px 32px;`).
- **Strictly Monochrome Base**:
  - Backgrounds: `#0c0c0c` (page), `#141414` (cards/diagrams), `#181818` (subtle blocks), `#111111` (code pre).
  - Borders: Pure neutral dark grays (`#262626`, `#333333`).
  - Text: Solid crisp white (`#ffffff`) for titles/headings, `#e5e5e5` for body, `#8a8a8a` for subtext/metadata.
  - Zero blue, purple, or cyan tints anywhere in backgrounds, text, badges, or diagrams.
- **Allowed Accent Colors (Strictly 3 Colors Only)**:
  1. **YELLOW** (Warnings & Performance Alerts): Text `#fef08a`, Background `#1f1a05`, Border `#5c450a`, Left accent line `#eab308`.
  2. **RED** (Errors, Blockers & Critical Risks): Text `#fca5a5`, Background `#22090b`, Border `#5c1118`, Left accent line `#ef4444`.
  3. **GREEN** (Success, Completed Status & Saved State): Text `#86efac`, Background `#05200f`, Border `#144625`, Left accent line `#22c55e`.
- **Solid Crisp Typography**:
  - Google Font Inter + JetBrains Mono:
    `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">`
  - Font stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;`
  - Monospace stack: `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;`
  - Document Title: Solid filled 34px bold text (`color: #ffffff; font-weight: 800; letter-spacing: -0.03em; -webkit-text-stroke: 0;`).
- **Zero Emojis**: Never use emojis anywhere. Use clean uppercase technical markers: `[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[INFO]`, `[STATUS]`, `[TARGET]`, `[DECISION]`, `[SAVED]`.
- **Sharp Corners**: `border-radius: 0 !important;` on all elements.
- **Monochrome Enterprise Diagrams (Mermaid.js)**:
  - Clean neutral dark nodes (`fill: #1a1a1a`, `stroke: #404040`, `color: #ffffff`).
  - Subgraphs with neutral dark containers (`#141414`, border `#2e2e2e`).
  - Large full-width container scaling (`max-width: 1040px; min-height: 280px;`).

---

## File Storage & Linking Protocol

1. **Target Directory**: Locate the current project root and ensure `<project_root>/omp-html/` exists.
2. **Gitignore Protection**: Ensure `<project_root>/omp-html/.gitignore` exists with:
   ```gitignore
   *
   __omp_shell(".gitignore")
   ```
3. **File Naming**: Save the file as `<project_root>/omp-html/<slug>.html` (e.g., `plan-auth-system.html`, `review-pr-42.html`).
4. **Chat Response**: After writing the file, provide a structured summary and output the clickable server and file links:
   ```text
   Plan generated:
   - Local Browser: http://127.0.0.1:8123/omp-html/plan-auth-system.html
   - Direct File: file:///C:/Users/Aryan/projects/Resumer-v2/omp-html/plan-auth-system.html
   ```
