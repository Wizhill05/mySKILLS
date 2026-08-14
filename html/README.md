# Monochrome HTML Plan & Review Skill for OMP (`/html`)

A specialized skill and slash command plugin for Oh My Pi (omp) to generate rigorous, monochrome dark-mode HTML architecture RFCs, implementation plans, code reviews, and decision matrices.

## Real-Time Silent Background Auto-Save (Option 1)

1. **OMP Extension Background Server**:
   - The OMP extension `omp-html-server.ts` runs a lightweight local server on `http://127.0.0.1:8123`.
   - The generated plan can be opened via `http://127.0.0.1:8123/omp-html/<slug>.html` or `file:///.../omp-html/<slug>.html`.
2. **Instant Silent In-Place Disk Overwrite**:
   - Every time you click an option or checkbox in your browser, the script mutates the DOM (`checked="checked"` attributes, `<meta name="omp-decisions">`) and immediately sends a silent background POST request to `http://127.0.0.1:8123/api/save`.
   - The local server **overwrites the original `.html` file directly on disk in real time**.
   - **Zero download dialogs, zero duplicate files in Downloads folder, zero file-linking popups, zero copy-pasting**.
3. **Automated Agent Reading**:
   - When you tell OMP "proceed with the plan" or "start implementing", OMP uses the `read` tool directly on `<project_root>/omp-html/<slug>.html`.
   - OMP reads your saved choices and executes the implementation.

---

## Installation & Setup in OMP

This skill is registered in:
- `~/.omp/agent/skills/html/SKILL.md`
- `~/.omp/agent/commands/html.md` (Native `/html` slash command)
- `~/.omp/agent/extensions/omp-html-server.ts` (Background auto-save daemon)
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
3. Provide a structured summary and the clickable links:
   - `http://127.0.0.1:8123/omp-html/plan-auth-refactor.html`
   - `file:///C:/Users/Aryan/projects/MyProject/omp-html/plan-auth-refactor.html`
