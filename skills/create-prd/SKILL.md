---
name: create-prd
description: Generate a Product Requirements Document for any project
---
You are tasked with creating a comprehensive Product Requirements Document (PRD) using `feature-template.md` as the base.

## Instructions

1. **Gather Project Context**
   - Read `CLAUDE.md` if it exists to understand the project stack, architecture, and conventions
   - If no `CLAUDE.md`, ask the user:
     - Project name and description
     - Tech stack (language, framework, database)
     - Architecture style (monolith, SaaS, microservices, etc.)

2. **Ask for Feature Details**
   - Feature name/title (use $1 if provided as argument, otherwise ask)
   - Problem statement: what user pain does this solve?
   - Target user roles (read from CLAUDE.md or ask)
   - Expected complexity: Low / Medium / High / Critical
   - Any specific technical requirements or constraints

3. **Pre-flight Checks**
   - Scan `docs/PRDs/active/` for existing PRDs that overlap or conflict
   - Check the codebase for any existing similar features
   - Identify dependencies on other PRDs or unreleased features

4. **Generate PRD from Template**
   - Read `feature-template.md` and copy its full structure
   - Replace every placeholder with real content — no placeholders left behind:
     - `{Feature Name}` → the feature title
     - `{PRD_ID}` → `PRD-` + output of `date '+%Y-%m-%d-%H%M'`
     - `{date}` → run `date '+%B %d, %Y'` for created date and last updated
     - `{author}` → run `git config user.name`
     - `{item}`, `{role}`, `{table}`, `{task}`, `{risk}`, `{description}`, etc. → real content from user input
   - Set **Status** to `Draft`
   - Set **Complexity** to the value the user chose
   - Write the **Summary** section last (2-3 sentences on outcome; note it is completed after implementation)
   - Draw the **Architecture** mermaid diagram appropriate to the feature (sequence, flowchart, ER, or state)
   - Adapt the **Testing** code block and **Files Changed** paths to the actual project stack — replace Laravel-specific commands and paths with whatever the project uses if different
   - Fill **Implementation** phases with grouped, actionable tasks:
     - Phase 1: Database / data layer changes
     - Phase 2: Backend components
     - Phase 3: Frontend components + tests

5. **Save PRD File**
   - Run `date '+%Y-%m-%d-%H%M'` to get the timestamp
   - Save to `docs/PRDs/active/YYYY-MM-DD-HHMM-feature-name.md` (kebab-case filename)
   - Create the `docs/PRDs/active/` directory if it does not exist

6. **Finish**
   - Show the exact file path where the PRD was saved
   - List the Phase 1–3 implementation tasks as a quick summary
   - Note any blockers, dependencies, or open questions
   - **Always end with**: "PRD created! Use `/execute-prd [filename]` to start implementation."

## Standards
- **Real content only**: write actual requirements, not hypothetical filler
- **No placeholders**: every `{...}` field must be replaced with real information
- **Actionable tasks**: each checklist item must be independently implementable
- **Adapt to stack**: don't leave Laravel/React-specific paths if the project uses a different stack
