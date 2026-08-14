---
name: html
description: Generate enterprise-grade, highly detailed, monochrome dark-gray HTML plans, architecture designs, reviews, and decision trees. Features tabbed navigation widgets, interactive pan/zoom diagrams, N-option decisions with custom answer textareas, real-time background auto-save (http://127.0.0.1:8123), refined rounded corners, and direct browser auto-open. Pure dark neutral background (#0c0c0c), solid crisp white typography, strictly monochrome with ONLY red, yellow, and green accents.
---

# Monochrome HTML Plan & Review Generator Skill (`/html`)

This skill generates clean, rigorous, monochrome dark-mode HTML documents for system architecture specifications, implementation plans, code reviews, and decision matrices.

## Core Features & Capabilities

1. **Tabbed Navigation Widget System**:
   - Replaces monolithic vertical scrolls with organized, interactive tabs (e.g. `[01. Overview]`, `[02. Topology & Diagram]`, `[03. Technical Specs]`, `[04. Execution Phases]`, `[05. Decisions & Options]`, `[06. Risks & Verification]`, plus `[View All Sections]`).
   - Pure vanilla JS tab switching with deep URL hash support (`#tab-phases`, `#all`).
2. **Interactive Diagram Pan & Zoom Engine**:
   - Embedded toolbar on all Mermaid architecture diagrams (`[ + ]` zoom in, `[ - ]` zoom out, `[ RESET ]`, `[ FIT ]`, `[ EXPAND ]` fullscreen modal).
   - Mouse wheel zoom (0.25x to 4.0x) and drag-to-pan across X and Y axes.
3. **Decisions with N-Options & Custom Answer Textareas**:
   - Support for 2, 3, 4, 5+ architectural options in clean responsive cards.
   - Dedicated `[CUSTOM SPECIFICATION / OVERRIDE NOTES]` textarea for typing freeform constraints, specific modifications, or special requirements.
4. **Real-Time Silent Background Auto-Save (Option 1 — Zero Friction)**:
   - Clicking options, checking phase deliverables, or typing in custom textareas immediately mutates the DOM, updates `<meta name="omp-decisions">`, and sends a background POST to `http://127.0.0.1:8123/api/save`.
   - The local server **overwrites the original `.html` file directly on disk in real time** with zero prompts and zero file pickers.
   - Status updates instantly to `[STATUS: AUTO-SAVED TO DISK (hh:mm:ss)]` in green.
5. **Direct Browser Auto-Open Protocol**:
   - Immediately upon generating and writing the HTML file, the agent launches the URL directly in the user's browser so they never have to copy-paste links manually.
6. **Refined Modern Enterprise Design (Rounded Corners)**:
   - Subtle, elegant rounded borders (`border-radius: 8px` on cards, sections, diagrams, tab bar, tables; `6px` on buttons, inputs, callouts; `4px` on badges).

---

## Visual Design & Color Rules (Strict)

- **Pure Dark Neutral Background**: Neutral dark gray/black (`#0c0c0c`). Content flows naturally in a clean column (`max-width: 1140px; margin: 0 auto; padding: 36px 24px;`).
- **Strictly Monochrome Base**:
  - Backgrounds: `#0c0c0c` (page), `#121212` (header/section cards), `#141414` (decision blocks/tabs), `#101010` (code blocks/diagrams).
  - Borders: Pure neutral dark grays (`#242424`, `#262626`, `#333333`).
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
  - Document Title: Solid filled 32px bold text (`color: #ffffff; font-weight: 800; letter-spacing: -0.03em;`).
- **Zero Emojis**: Never use emojis anywhere. Use clean uppercase technical markers: `[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[INFO]`, `[STATUS]`, `[TARGET]`, `[DECISION]`, `[SAVED]`.
- **Refined Rounded Corners**:
  - Cards, Section Cards, Header, Tab Bar, Diagram Containers, Tables: `border-radius: 8px;`
  - Option items, Buttons, Inputs, Textareas, Callouts, Code Blocks (`pre`): `border-radius: 6px;`
  - Badges, Inline Code (`code`): `border-radius: 4px;`

---

## File Storage & Mandatory Auto-Open Protocol

1. **Target Directory**: Locate the current project root and ensure `<project_root>/omp-html/` exists.
2. **Gitignore Protection**: Ensure `<project_root>/omp-html/.gitignore` exists with `*`.
3. **File Naming**: Save the file as `<project_root>/omp-html/<slug>.html` (e.g., `plan-auth-system.html`, `review-pr-42.html`).
4. **MANDATORY DIRECT BROWSER AUTO-OPEN**:
   - Immediately after writing the HTML file, the assistant **MUST launch the URL directly in the user's browser** via shell/eval:
     - **Windows**: `cmd.exe /c start http://127.0.0.1:8123/omp-html/<slug>.html`
     - **macOS**: `open http://127.0.0.1:8123/omp-html/<slug>.html`
     - **Linux**: `xdg-open http://127.0.0.1:8123/omp-html/<slug>.html`
     - Or using `xd://browser` tool (`action: "open", url: "http://127.0.0.1:8123/omp-html/<slug>.html"`).
5. **Chat Response**: Print the confirmation and links:
   ```text
   Plan generated and opened in browser:
   - Local Server: http://127.0.0.1:8123/omp-html/<slug>.html
   - Direct File: file:///<absolute_path_to_project>/omp-html/<slug>.html
   ```

---

## Automated Agent Inspection Protocol

When the user returns to OMP and says "proceed with the plan", "start implementing", or "check my choices":
1. The agent reads `<project_root>/omp-html/<slug>.html` using the `read` tool.
2. The agent inspects:
   - `<meta name="omp-decisions">` JSON payload (contains `decisions`, `custom_notes`, `tasks`).
   - The `.custom-answer-textarea` inner contents and `checked="checked"` inputs.
3. The agent executes the plan strictly incorporating the user's chosen options and custom specification notes.
