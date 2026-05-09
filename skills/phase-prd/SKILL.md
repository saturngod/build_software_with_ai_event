---
name: process-prd
description: Process an existing Product Requirements Document into separate phase files with actionable tasks, dependencies, verification steps, and implementation-ready checklists.
---

# Process PRD

Use this skill when the user wants to break down an existing PRD into phases, tasks, or implementation files. The input is an already-written PRD. The output is one file per phase, using `feature-template.md` as the required phase file format.

## Workflow

1. **Find the PRD**
   - Use the PRD path provided by the user when available.
   - If no path is provided, look in likely PRD locations:
     - `docs/PRDs/active/`
     - `docs/prds/active/`
     - `docs/PRDs/`
     - `docs/prds/`
   - If multiple likely PRDs exist and the user did not identify one, ask which PRD to process.

2. **Read Project Context**
   - Read `CLAUDE.md`, `README.md`, or nearby project docs when available.
   - Use this context only to make phase tasks more accurate for the project stack and conventions.
   - Do not rewrite the PRD unless the user explicitly asks.

3. **Extract PRD Structure**
   - Identify:
     - PRD title and PRD ID
     - Problem, solution, scope, and target users
     - Technical design sections
     - Existing implementation phases and checklist items
     - Testing, risks, definition of done, related issues, and expected file areas
   - Preserve the PRD's intent. Do not invent new product requirements.

4. **Separate Phases**
   - Create one output file for each implementation phase.
   - If the PRD already contains phases, keep the same phase order and names unless they are unclear.
   - If the PRD does not contain clear phases, derive implementation phases from the technical design:
     - Phase 1: data model, migrations, configuration, or foundational contracts
     - Phase 2: backend, services, APIs, integrations, or core business logic
     - Phase 3: frontend, user workflows, polish, and end-to-end verification
   - Add more phases only when the PRD clearly requires them.

5. **Expand Tasks**
   - Convert broad checklist items into actionable implementation tasks.
   - Each task must be independently understandable and testable.
   - Include dependencies between tasks when order matters.
   - Include acceptance criteria or verification steps for every phase.
   - Keep tasks tied to the PRD. Mark uncertain implementation details as open questions instead of pretending they are known.

6. **Use the Phase Template**
   - Read `feature-template.md` and copy its structure for every phase file.
   - Replace every placeholder with real content.
   - Remove sections that truly do not apply only when they would otherwise contain fake content.
   - Keep checklists in Markdown task-list format.

7. **Save Phase Files**
   - Save phase files next to the source PRD unless the user gives another destination.
   - Use a `phases/` subdirectory next to the PRD:
     - Source: `docs/PRDs/active/YYYY-MM-DD-feature.md`
     - Output: `docs/PRDs/active/phases/YYYY-MM-DD-feature-phase-1-foundation.md`
   - Use kebab-case filenames.
   - Prefix filenames with the source PRD basename so the files stay grouped.

8. **Finish**
   - Report the generated phase file paths.
   - Summarize the phases and task counts.
   - List blockers, dependencies, or open questions.
   - End with: `PRD processed into phase files.`

## Standards

- Process existing PRDs; do not create a new PRD from scratch.
- Preserve the original PRD's requirements and scope.
- Use real, project-specific tasks.
- Do not leave placeholders like `{task}`, `{path}`, or `{description}`.
- Make every phase implementation-ready for a coding agent.
- Prefer concrete file paths and commands when the project context supports them.
