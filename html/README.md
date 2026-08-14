# Monochrome HTML Plan & Review Skill for OMP (`/html`)

A specialized skill and slash command plugin for Oh My Pi (omp) to generate rigorous, monochrome dark-mode HTML architecture RFCs, implementation plans, code reviews, and decision matrices.

## New Features & Capabilities

1. **Tabbed Navigation Widget System**:
   - Replaces long single scrolls with clean, responsive tabs (e.g. `[01. Overview]`, `[02. Topology & Diagram]`, `[03. Technical Specs]`, `[04. Execution Phases]`, `[05. Decisions & Options]`, `[06. Risks & Verification]`, plus `[View All Sections]`).
   - Pure vanilla JS tab switching with deep URL hash support (`#tab-phases`, `#all`).
2. **Interactive Diagram Pan & Zoom Engine**:
   - Embedded toolbar on all Mermaid architecture diagrams (`[ + ]` zoom in, `[ - ]` zoom out, `[ RESET ]`, `[ FIT ]`, `[ EXPAND ]` fullscreen modal).
   - Mouse wheel zoom (0.25x to 4.0x) and drag-to-pan across X and Y axes.
3. **Decisions with N-Options & Custom Answer Textareas**:
   - Support for 2, 3, 4, 5+ architectural options in clean responsive cards.
   - Dedicated `[CUSTOM SPECIFICATION / OVERRIDE NOTES]` textarea for typing freeform constraints, specific modifications, or special requirements.
4. **Real-Time Silent Background Auto-Save (Option 1 — Zero Friction)**:
   - Clicking options, checking phase deliverables, or typing in custom textareas immediately mutates the DOM, updates `<meta name="omp-decisions">`, and sends a background POST to `http://127.0.0.1:8123/api/save`.
   - The local server **overwrites the original `.html` file directly on disk in real time** with zero prompts, zero file pickers, and zero download popups.
5. **Direct Browser Auto-Open**:
   - Immediately upon generating the HTML plan, OMP automatically launches the URL directly in your default browser.
6. **Refined Modern Enterprise Design (Rounded Corners)**:
   - Subtle, elegant rounded borders (`border-radius: 8px` on cards, sections, diagrams, tab bar, tables; `6px` on buttons, inputs, callouts; `4px` on badges).
7. **Rich Widgets**:
   - KPI & Metric Stats Grid (`.stats-grid`, `.stat-card`).
   - Interactive Phase Task Checklist with real-time disk persistence.
   - Collapsible Accordions for deep code listings and schemas.

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
3. Automatically launch `http://127.0.0.1:8123/omp-html/<plan-slug>.html` in your browser.
4. Provide a structured summary with clickable server and file links.
