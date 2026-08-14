# Enterprise HTML Plan & Review Skill for OMP (`/html`)

A specialized, enterprise-grade skill and plugin for Oh My Pi (omp) to generate structured, dark-mode HTML architecture RFCs, implementation plans, code reviews, and decision matrices.

## Visual Design & Quality Standards

- **Deep Obsidian Background**: Deep `#08080a` background with rich high-contrast typography.
- **Helvetica Typography**: Embedded Helvetica Neue with an authoritative 38px document title and clean typographic hierarchy.
- **Enterprise-Grade Diagrams**: Mermaid.js diagrams with structured architectural subgraphs, semantic shapes, and custom `classDef` styling.
- **Deep Technical Rigor**: Detailed engineering context, concrete TypeScript/schema code blocks, thorough execution matrices, in-depth failure mode analysis, and comprehensive verification specifications.
- **Sharp Brutalist Minimalism**: 0px border-radius across all elements (callouts, buttons, tables, badges, code blocks).
- **Strictly Zero Emojis**: Clean technical indicators (`[PLAN]`, `[REVIEW]`, `[WARNING]`, `[ERROR]`, `[STATUS]`, `[DECISION]`).
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
/html architecture plan for multi-region cache with redis and postgresql
```

Or ask the agent in natural conversation:
> "Generate an HTML plan for refactoring our auth service"

The agent will:
1. Create `omp-html/.gitignore` (if not already present).
2. Generate the standalone dark HTML document in `omp-html/<plan-slug>.html`.
3. Provide a structured summary and the clickable browser link:
   `file:///C:/Users/Aryan/projects/MyProject/omp-html/plan-auth-refactor.html`
