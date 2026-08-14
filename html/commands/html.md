---
description: Create an enterprise-grade, highly detailed, monochrome dark-gray HTML architectural plan or review with Option 1 silent real-time background auto-save in omp-html/
---

Generate an enterprise-grade, highly detailed, monochrome dark-gray HTML architectural plan or review based on the following request:

$ARGUMENTS

Follow the exact rules and template specification from `skill://html`:
1. **Option 1 Real-Time Background Auto-Save**: Include silent background autoSave engine targeting `http://127.0.0.1:8123/api/save` so user option clicks immediately overwrite the file on disk in real time. Zero download dialogs, zero manual file linking!
2. **Monochrome Visual Styling**: Pure dark neutral background (`#0c0c0c`), solid crisp white bold title (Inter font, `#ffffff`, NO outline/hollow text), neutral dark grays for borders/cards (`#262626`, `#141414`).
3. **Strictly 3 Accent Colors Only**: ONLY Yellow (warnings), Red (errors/blockers), and Green (success/completed/saved) where needed. Zero blue, purple, or cyan tints.
4. **Enterprise Diagrams**: Large, professional Mermaid.js diagrams (`width: 100%; min-height: 280px;`) with semantic architectural subgraphs (`INGRESS`, `COMPUTE`, `CACHE`, `STORAGE`) in neutral dark styling.
5. **Engineering Depth**: Provide thorough technical context, concrete TypeScript/schema code blocks, detailed multi-phase file modification matrices, in-depth failure mode analysis, and complete verification matrices.
6. **Storage & Linking**: Save in `<project_root>/omp-html/<plan-slug>.html` with `.gitignore` (`*`), and print both `http://127.0.0.1:8123/omp-html/<plan-slug>.html` and `file:///` links.
