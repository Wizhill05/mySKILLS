# HTML Plan & Review Skill for OMP (`/html`)

A specialized, zero-fluff plugin/skill for Oh My Pi (omp) to generate structured, dark-mode HTML implementation plans, architecture designs, reviews, and decision matrices.

## Key Features

- 🌑 **Pure Black & Dark Gray Aesthetic**: Designed to feel like a high-precision, hyper-structured `.md` document, not a generic marketing website.
- 📊 **Embedded Visuals & Diagrams**: Native Mermaid.js diagrams directly rendered in dark theme for flowcharts, sequences, state machines, and system architecture.
- 📑 **Clean Tables & Code Tags**: Structured tables for phase breakdowns, file modifications, risk assessments, and test matrices.
- ⚠️ **High-Contrast Callouts**: Yellow alerts for warnings, red alerts for blockers/risks, green for success/verification criteria, and cyan for notes.
- 🎛️ **Interactive Decision Matrices**: Embedded interactive radio/checkbox selectors with a 1-click "Copy Decision" button so the user can easily answer the agent's questions.
- 📁 **Automated `omp-html/` Isolation**: Automatically creates `omp-html/` in the project root with a `.gitignore` (`*`) to keep working directories clean.
- 🔗 **Clickable `file:///` Links**: Emits direct clickable file URLs in chat for instant browser previewing.

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
2. Generate the standalone dark-mode HTML document in `omp-html/<plan-slug>.html`.
3. Provide a terse summary and the clickable browser link:
   `file:///C:/Users/Aryan/projects/MyProject/omp-html/plan-auth-refactor.html`

---

## Directory Structure

```
mySKILLS/
└── html/
    ├── SKILL.md                          # Main OMP skill definition
    ├── README.md                         # Documentation
    ├── template.html                     # Reusable dark HTML template
    ├── commands/
    │   └── html.md                       # /html slash command definition
    └── examples/
        ├── implementation-plan-example.html  # Full implementation plan demo
        └── code-review-example.html          # Full code review demo
```
