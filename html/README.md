# Monochrome HTML Plan & Review Skill for OMP (`/html`)

A specialized skill and slash command plugin for Oh My Pi (omp) to generate rigorous, monochrome dark-mode HTML architecture RFCs, implementation plans, code reviews, and decision matrices.

## Direct In-Place File Persistence (Option 2 — Zero Downloads)

1. **One-Time File Link**:
   - Open the generated plan in your browser (`file:///.../omp-html/plan.html`).
   - Click `[LINK SOURCE FILE FOR DIRECT EDITS]` once to grant the browser a `FileSystemFileHandle` for that tab.
2. **Direct Silent In-Place Disk Overwrite**:
   - Every time you click an option or checkbox, the script mutates the DOM (`checked="checked"` attributes, `<meta name="omp-decisions">`), serializes the HTML document, and writes it **directly and silently to the original file on disk**.
   - **Zero download dialogs, zero duplicate files in Downloads folder, zero copy-pasting**.
3. **Automated Agent Reading**:
   - When you tell OMP "proceed with the plan" or "start implementing", OMP uses the `read` tool directly on `<project_root>/omp-html/<slug>.html`.
   - OMP reads your saved choices and executes the implementation.

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
