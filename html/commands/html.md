---
description: Create an enterprise-grade, highly detailed, monochrome dark-gray HTML architectural plan or review with tabbed widgets, pan/zoom diagrams, custom answer textareas, real-time background auto-save, and direct browser auto-open
---

Generate an enterprise-grade, highly detailed, monochrome dark-gray HTML architectural plan or review based on the following request:

$ARGUMENTS

Follow the exact rules and template specification from `skill://html`:
1. **Tabbed Navigation Layout**: Organize content into clean interactive tabs (e.g. `[01. Overview]`, `[02. Topology & Diagram]`, `[03. Technical Specs]`, `[04. Execution Phases]`, `[05. Decisions & Options]`, `[06. Risks & Verification]`, plus `[View All Sections]`).
2. **Interactive Pan & Zoom Diagrams**: Include full-width Mermaid.js architecture diagrams with embedded zoom toolbar (`[ + ]`, `[ - ]`, `[ RESET ]`, `[ FIT ]`, `[ EXPAND ]`) and mouse wheel / drag pan support.
3. **Decisions with N-Options & Custom Textarea**: Support multiple choices (2, 3, 4, 5+ options) plus a dedicated `[CUSTOM SPECIFICATION / OVERRIDE NOTES]` textarea for user overrides and freeform notes.
4. **Option 1 Silent Real-Time Background Auto-Save**: Embed the background autoSave engine targeting `http://127.0.0.1:8123/api/save` so option clicks, task checkboxes, and custom textarea inputs immediately overwrite the `.html` file on disk in real time.
5. **Modern Enterprise Design**: Pure dark neutral background (`#0c0c0c`), `#ffffff` bold titles, refined rounded corners (`border-radius: 8px` on cards/sections, `6px` on controls/inputs, `4px` on badges), stats grid metrics, and strictly 3 accent colors (Yellow warnings, Red errors, Green success).
6. **MANDATORY BROWSER AUTO-OPEN**: Immediately after writing `<project_root>/omp-html/<slug>.html`, launch the URL `http://127.0.0.1:8123/omp-html/<slug>.html` directly in the user's browser using `cmd.exe /c start` (Windows) / `open` (macOS) / `xdg-open` (Linux), and print both server and `file:///` links.
