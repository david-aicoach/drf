---
name: drf-repository-operations
description: Operate, govern, restructure, validate or improve the tbhrc/drf-main GitHub repository itself. Use for DRF architecture/folder changes, Skill creation or improvement, repository cleanup, Issue/PR governance, CI/repository validation, canonical-path migrations, removal of stale folders, or any request about how DRF agents should work in GitHub.
---

# DRF Repository Operations

## Purpose
Keep DRF simple, durable and AI-native. Skills are the primary reusable operating surface; GitHub Issues are the execution control plane; domain truth stays with its domain.

## Number-one rule — Skills first
Before substantive DRF capability work:
1. inspect `skills/README.md`;
2. identify the single best owning Skill;
3. read that `SKILL.md` before acting;
4. use its bundled references/scripts/assets only as needed.

Do not create a new template, workflow, SOP, lesson, guideline or helper script in a global junk drawer. If the behaviour belongs to an existing capability, improve that Skill. Create a new Skill only when there is a genuinely distinct reusable capability.

## Repository ownership model
- `skills/` — reusable AI operating capabilities; `SKILL.md` entry point.
- `businesses/` — canonical business/opportunity truth.
- `research/` — durable observed evidence/run history.
- `software/` — actual product/runtime code and product-local tests.
- root site assets/HTML — deployed Dashboard product.
- `.github/` — GitHub-required actions/workflows/integration.
- root `AGENTS.md` — thin universal governance + skill router.

`.github/workflows/` is not the retired AI workflow concept; GitHub requires that path.

## Issue-first execution
Every substantive change uses a GitHub Issue with objective/context, scope, implementation checklist, verification checklist and acceptance criteria. Large programmes use Master + linked Stage Issues. Check off only verified work; close only after acceptance passes.

## Change paths
Low-risk reversible factual Markdown correction that does not alter opportunity/niche/V3 truth may use Issue → direct main change → verify → close.

Code, Actions, automation, architecture/governance/security and material opportunity/niche changes use Issue → branch → PR → checks/review → merge → verification.

## GitHub object gate
Never create durable GitHub objects as probes/placeholders. Search/read first; create only meaningful final-purpose Issues/branches/PRs/files.

## Skill maintenance
When modifying a Skill:
- preserve stable behaviour unless intentionally changing it;
- update trigger description when use cases change;
- keep `SKILL.md` concise and put detailed references under the Skill;
- keep reusable AI scripts under `scripts/`;
- keep product runtime with product, not inside a Skill merely because it is code;
- validate Skill structure before merge.

## Validation
Run `scripts/validate_repository.py` after structural changes. It should enforce the skills-first architecture and reject reintroduction of retired global instruction folders.

## Safety
Never commit secrets/credentials/customer secrets/payment data. Installed/connected is not proof of operational success. Use bounded reads for verification where possible.

## Self-improvement
Repository lessons that recur should update this Skill or the relevant domain Skill. Do not recreate a global `knowledge/`, AI `workflows/`, templates, SOPs or lessons hierarchy.
