---
description: Create a structured, minimalist dark-gray HTML implementation plan or review with large diagrams, tables, and interactive decisions in omp-html/
---

Generate a structured, minimalist dark-gray HTML implementation plan or review based on the following request:

$ARGUMENTS

Follow the exact rules and template specification from `skill://html`:
1. **Visual Style**: Plain dark gray background (`#141416`) across the entire page (no centered card box). Zero rounded corners (`border-radius: 0 !important;`). Strictly zero emojis.
2. **Visual & Data Structure**: Large, clear Mermaid.js diagrams scaled to full container width with readable node typography. Structured tables for execution steps & files modified. Text badges for statuses (`[STATUS: PENDING]`, `[STATUS: COMPLETED]`).
3. **High-Contrast Alerts**: Yellow callout for `[WARNING]`, Red callout for `[ERROR]`, Blue callout for `[INFO]`.
4. **Interactive Decisions**: If decisions or choices are needed, provide sharp interactive selection cards with `[COPY DECISION TO CLIPBOARD]`.
5. **Storage**: Save in `<project_root>/omp-html/<plan-slug>.html`. Ensure `<project_root>/omp-html/.gitignore` contains `*` and `!.gitignore`.
6. **Chat Output**: Print the clickable `file:///` link in the response along with a concise 2-3 bullet summary.
