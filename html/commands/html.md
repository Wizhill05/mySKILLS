---
description: Create a structured, dark-mode HTML implementation plan or review with diagrams, tables, and interactive decisions in omp-html/
---

Generate a structured, dark-mode HTML implementation plan or review based on the following request:

$ARGUMENTS

Follow the exact rules and template specification from `skill://html`:
1. **Visual Style**: Pure black page background (`#09090b`), dark gray content container (`#121215`), white text (`#f4f4f5`), subtle borders (`#27272a`), muted subtext (`#a1a1aa`). High contrast callouts: Yellow for warnings, Red for errors/risks.
2. **Visual & Data Structure**: Include Mermaid.js diagrams for architecture/flowcharts/sequences, structured tables for execution steps & files modified, and status pills.
3. **Interactive Decisions**: If decisions or choices are needed, provide interactive selection cards with a copyable response button.
4. **Storage**: Save in `<project_root>/omp-html/<plan-slug>.html`. Ensure `<project_root>/omp-html/.gitignore` contains `*` and `!.gitignore`.
5. **Chat Output**: Print the clickable `file:///` link in the response along with a concise 2-3 bullet summary.
