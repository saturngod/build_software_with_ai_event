# {PRD Title} - Phase {phase_number}: {phase_name}

**Source PRD**: {source_prd_path}
**PRD ID**: {prd_id}
**Phase**: {phase_number} of {phase_total}
**Status**: Ready | In Progress | Blocked | Completed
**Created**: {date}
**Author**: {author}

---

## Objective

{1-2 paragraphs describing what this phase delivers and why it is needed before later phases.}

## Scope

### In Scope

- {specific item this phase will implement}

### Out of Scope

- {specific item deferred to another phase or excluded from this phase}

---

## Inputs

| Input | Source | Notes |
| ----- | ------ | ----- |
| {requirement, design decision, API, schema, or asset} | {PRD section or file path} | {important constraint} |

## Dependencies

| Dependency | Type | Required Before | Notes |
| ---------- | ---- | --------------- | ----- |
| {dependency name} | Code / Data / Design / Decision / External | {task or phase} | {notes} |

---

## Implementation Tasks

### Task 1: {task title}

- [ ] {specific implementation step}
- [ ] {specific implementation step}
- [ ] {specific implementation step}

**Acceptance Criteria:**

- {observable result}
- {observable result}

**Files / Areas:**

- `{path}` - {expected change}

### Task 2: {task title}

- [ ] {specific implementation step}
- [ ] {specific implementation step}

**Acceptance Criteria:**

- {observable result}

**Files / Areas:**

- `{path}` - {expected change}

---

## Verification

### Automated

```bash
{project-specific test, lint, typecheck, or build command}
```

### Manual

1. {manual verification step}
2. {manual verification step}

---

## Risks

| Risk | Likelihood | Mitigation |
| ---- | ---------- | ---------- |
| {risk} | Low / Medium / High | {mitigation} |

## Open Questions

- {question that must be answered before or during implementation}

## Definition of Done

- [ ] All implementation tasks completed
- [ ] Acceptance criteria verified
- [ ] Automated checks passing
- [ ] Manual verification completed
- [ ] No unresolved blockers remain

---

## Handoff Notes

{Anything the next phase or implementing agent needs to know.}
