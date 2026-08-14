---
description: Create an enterprise-grade, highly detailed, monochrome dark-gray HTML architectural plan or review with Option 2 direct File System Access persistence (zero downloads) in omp-html/
---

Generate an enterprise-grade, highly detailed, monochrome dark-gray HTML architectural plan or review based on the following request:

$ARGUMENTS

Follow the exact rules and template specification from `skill://html`:
1. **Option 2 Direct File Persistence**: Include direct File System Access API persistence with a `[LINK SOURCE FILE FOR DIRECT EDITS]` button and automatic in-place disk overwrite on option clicks. The agent will read `<project_root>/omp-html/<plan>.html` directly—zero copy-pasting required!
2. **Monochrome Visual Styling**: Pure dark neutral background (`#0c0c0c`), solid crisp white bold title (Inter font, `#ffffff`, NO outline/hollow text), neutral dark grays for borders/cards (`#262626`, `#141414`).
3. **Strictly 3 Accent Colors Only**: ONLY Yellow (warnings), Red (errors/blockers), and Green (success/completed/saved) where needed. Zero blue, purple, or cyan tints.
4. **Enterprise Diagrams**: Large, professional Mermaid.js diagrams (`width: 100%; min-height: 280px;`) with semantic architectural subgraphs (`INGRESS`, `COMPUTE`, `CACHE`, `STORAGE`) in neutral dark styling.
5. **Engineering Depth**: Provide thorough technical context, concrete TypeScript/schema code blocks, detailed multi-phase file modification matrices, in-depth failure mode analysis, and complete verification matrices.
6. **Storage & Linking**: Save in `<project_root>/omp-html/<plan-slug>.html` with `.gitignore` (`*`), and print the clickable `file:///` browser link.
