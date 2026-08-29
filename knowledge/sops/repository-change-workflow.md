# SOP — Repository Change Workflow

## Purpose

Every substantive DRF repository change must have durable context, isolated implementation, review evidence and traceable completion.

## Standard path

```text
Issue
→ issue-linked branch
→ focused changes + commits
→ Pull Request
→ review / checks
→ merge
→ Issue closes
```

## Procedure

1. **Issue first** — create or resolve the governing Issue; state objective, scope and acceptance criteria.
2. **Branch** — use `issue-<number>-<short-slug>`.
3. **Read canon** — root `AGENTS.md`, relevant folder README, then the most specific Skill/SOP/Workflow.
4. **Commercial check** — confirm the change creates/protects revenue, enables a current experiment, or removes a proven blocker.
5. **Research before invention** when material uncertainty exists.
6. **Implement minimally** — change only what the Issue requires.
7. **Commit logically** — describe the change, not the tool/model used.
8. **Open PR** — link the Issue. Use `Closes #N` only when merge should complete the work order; otherwise use `Refs #N`.
9. **Verify once** — use the smallest direct check appropriate to the change.
10. **Review** scope, factual accuracy, security, permissions and closing semantics.
11. **Merge** only after acceptance criteria pass.
12. **Confirm closure** when intended.

## Exceptions

Tiny typo-only corrections may be grouped into an existing suitable Issue. Do not create bureaucracy for its own sake.

## Completion evidence

```text
Issue → branch → commit(s) → PR → checks/review → merge
```

Do not rely on chat history as proof.
