# Monochrome HTML Plan & Review Skill for OMP (`/html`)

A specialized skill and slash command plugin for Oh My Pi (omp) to generate rigorous, monochrome dark-mode HTML architecture RFCs, implementation plans, code reviews, and decision matrices.

## Visual Design & Color Rules

- **Pure Dark Neutral Background**: `#0c0c0c` page background, `#141414` / `#111111` containers and code blocks. Zero blue or purple tints.
- **Solid White Typography**: Inter webfont with solid filled white headers (`#ffffff`, `-webkit-text-stroke: 0`, zero outline effects).
- **Strictly 3 Accent Colors Only**:
  - **RED**: `[ERROR]`, critical risks, blockers, failed tests.
  - **YELLOW**: `[WARNING]`, performance alerts, review warnings.
  - **GREEN**: `[SUCCESS]`, completed status, passed checks.
  - Everything else is strictly monochrome neutral grays.
- **Enterprise-Grade Diagrams**: Mermaid.js diagrams with structured architectural subgraphs in neutral dark charcoal styling.
- **Deep Technical Rigor**: Detailed engineering context, concrete TypeScript/schema code blocks, thorough execution matrices, in-depth failure mode analysis, and comprehensive verification specifications.
- **Sharp Brutalist Minimalism**: 0px border-radius across all elements.
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
