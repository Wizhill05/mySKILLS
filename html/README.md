# Minimalist HTML Plan & Review Skill for OMP (`/html`)

A specialized, minimalist plugin/skill for Oh My Pi (omp) to generate structured, dark-gray HTML implementation plans, architecture designs, reviews, and decision matrices.

## Design Highlights

- **Plain Dark Gray Background**: The entire page background is clean dark gray (`#141416`). No isolated central card container or shadow boxes.
- **Sharp Brutalist Minimalism**: 0px border-radius across all elements (callouts, buttons, tables, badges, code blocks).
- **Strictly Zero Emojis**: Clean text indicators (`[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[STATUS]`, `[DECISION]`).
- **Large High-Visibility Diagrams**: Mermaid.js charts rendered with high contrast, large readable node fonts, and scaled to full width.
- **Clean Tables & Code Highlighting**: Monospace code badges, structured data tables.
- **High-Contrast Callouts**: Yellow alerts for warnings, red alerts for blockers/errors, cyan for notes.
- **Interactive Decision Matrix**: Radio/checkbox selectors with a 1-click `[COPY DECISION TO CLIPBOARD]` button.
- **Automated `omp-html/` Isolation**: Automatically creates `omp-html/` in the project root with a `.gitignore` (`*`).
- **Clickable `file:///` Links**: Emits direct clickable file URLs in chat for instant browser previewing.

---

## Installation & Setup in OMP

This skill is registered in:
- `~/.omp/agent/skills/html/SKILL.md`
- `~/.omp/agent/commands/html.md` (Native `/html` slash command)
- `~/.agents/skills/html/SKILL.md`

### Usage

In any OMP session, type:

```bash
/html build real-time notification service with websockets and redis
```

Or ask the agent in natural conversation:
> "Generate an HTML plan for refactoring our auth service"

The agent will:
1. Create `omp-html/.gitignore` (if not already present).
2. Generate the standalone dark-gray HTML document in `omp-html/<plan-slug>.html`.
3. Provide a terse summary and the clickable browser link:
   `file:///C:/Users/Aryan/projects/MyProject/omp-html/plan-auth-refactor.html`
