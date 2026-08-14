# mySKILLS

A collection of custom skills, plugins, and slash commands for [Oh My Pi (OMP)](https://github.com/) / Pi coding agent harness.

## Skills Catalog

| Skill / Command | Description | Directory |
|---|---|---|
| **`/html` (`html`)** | Structured, minimalist dark-gray HTML implementation plans, architecture designs, reviews, and interactive decision trees with large Mermaid diagrams and tables. | [`html/`](./html) |

---

## Installation into OMP

To install all skills into your local OMP environment:

```bash
# Copy skills into OMP agent directories
cp -r html ~/.omp/agent/skills/
cp html/commands/html.md ~/.omp/agent/commands/
```
