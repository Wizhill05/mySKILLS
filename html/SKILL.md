---
name: html
description: Generate enterprise-grade, highly detailed, monochrome dark-gray HTML plans, architecture designs, reviews, and decision trees. Features Option 2 direct File System Access API persistence (one-time link enables direct silent in-place overwrites of the HTML file on disk with zero downloads). Pure dark neutral background (#0c0c0c), solid crisp white typography, strictly monochrome with ONLY red, yellow, and green accents. Saves to omp-html/ and outputs a clickable file:/// link.
---

# Monochrome HTML Plan & Review Generator Skill (`/html`)

This skill generates clean, rigorous, monochrome dark-mode HTML documents for system architecture specifications, implementation plans, code reviews, and decision matrices.

## Direct In-Place File Persistence (Option 2 — Zero Downloads)

When architectural options or decisions are presented to the user:
1. **One-Time File Link**:
   - The HTML plan includes a `[LINK SOURCE FILE FOR DIRECT EDITS]` button.
   - When opened in the browser, clicking this button prompts the user to select the `plan.html` file once via `window.showOpenFilePicker()`.
   - The browser grants a `FileSystemFileHandle` with read/write access for that tab session.
2. **Direct Silent Overwrite**:
   - Every time the user selects an option or checkbox, the script mutates the DOM (`checked="checked"` attributes, `<meta name="omp-decisions">`), serializes the entire HTML document, and writes it **directly and silently into the original file on disk** via `fileHandle.createWritable()`.
   - **Zero download popups, zero duplicate files in Downloads folder, zero copy-pasting**.
3. **Automated Agent Inspection**:
   - When the user asks to proceed (e.g., "proceed with plan", "start implementing", "check my choices"), the agent **reads `<project_root>/omp-html/<slug>.html` directly using the `read` tool**.
   - The agent inspects `<meta name="omp-decisions">` or finds the `checked` inputs in the HTML.
   - The agent executes the plan according to the user's saved choices.

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
  3. **GREEN** (Success, Completed Status & Linked/Saved State): Text `#86efac`, Background `#05200f`, Border `#144625`, Left accent line `#22c55e`.
- **Solid Crisp Typography**:
  - Google Font Inter + JetBrains Mono:
    `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">`
  - Font stack: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;`
  - Monospace stack: `'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace;`
  - Document Title: Solid filled 34px bold text (`color: #ffffff; font-weight: 800; letter-spacing: -0.03em; -webkit-text-stroke: 0;`).
- **Zero Emojis**: Never use emojis anywhere. Use clean uppercase technical markers: `[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[INFO]`, `[STATUS]`, `[TARGET]`, `[DECISION]`, `[SAVED]`.
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
