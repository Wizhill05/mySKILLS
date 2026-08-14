---
description: Create an enterprise-grade, highly detailed, dark-mode HTML architectural plan or review with large diagrams, detailed tables, code snippets, risk analysis, and interactive decisions in omp-html/
---

Generate an enterprise-grade, highly detailed, dark-mode HTML architectural plan or review based on the following request:

$ARGUMENTS

Follow the exact rules and template specification from `skill://html`:
1. **Visual Styling**: Deep obsidian background (`#08080a`), large 38px Helvetica document title, clean Helvetica Neue font stack, sharp corners (`border-radius: 0 !important;`), strictly zero emojis.
2. **Enterprise Diagrams**: Large, professional Mermaid.js diagrams (`width: 100%; min-height: 280px;`) with semantic architectural subgraphs (`INGRESS`, `COMPUTE`, `CACHE`, `DATA`) and custom `classDef` styling.
3. **Engineering Depth**: Provide thorough technical context, concrete TypeScript/schema code blocks, detailed multi-phase file modification matrices, in-depth failure mode analysis, and complete verification matrices.
4. **Interactive Decisions**: If decisions or choices are needed, provide sharp interactive selection cards with full technical trade-off descriptions and `[COPY DECISION TO CLIPBOARD]`.
5. **Storage & Linking**: Save in `<project_root>/omp-html/<plan-slug>.html` with `.gitignore` (`*`), and print the clickable `file:///` browser link.
