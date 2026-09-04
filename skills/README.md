# DRF Skills — central-canon routing

DRF is skills-first, but **`tbhrc/skills` is the sole editable reusable Skill canon**.

This local `skills/` tree is retained only where it provides compatibility pointers, migration/provenance evidence or repository-local validation implementation. Do not treat it as a second Skill Bank.

## Canonical reusable owners

| DRF need | Canonical owner |
|---|---|
| New opportunity intake, market intelligence A-Z, Layer 1 → Layer 2 → Layer 3, niche/commercial underwriting and V3 close-out | [`tbhrc/skills/drf-opportunity-factory`](https://github.com/tbhrc/skills/tree/main/drf-opportunity-factory) |
| Golden Opportunity discovery, daily portfolio calibration, scheduled refreshes and specialist market-intelligence loops | [`tbhrc/skills/automations-drf-intelligence`](https://github.com/tbhrc/skills/tree/main/automations-drf-intelligence) |
| Dashboard V3 presentation/data-contract maintenance, website troubleshooting and Pages verification | [`tbhrc/skills/drf-dashboard-operations`](https://github.com/tbhrc/skills/tree/main/drf-dashboard-operations) |
| Business development, targeting, qualification, outreach, pipeline and Won handoff | [`tbhrc/skills/drf-business-development`](https://github.com/tbhrc/skills/tree/main/drf-business-development) |
| Repository execution / lifecycle | [`tbhrc/skills/github-agent-workflow`](https://github.com/tbhrc/skills/tree/main/github-agent-workflow) |
| Skill creation / migration / maintenance | [`tbhrc/skills/github-skill-builder`](https://github.com/tbhrc/skills/tree/main/github-skill-builder) |
| GitHub architecture / capability selection | [`tbhrc/skills/github-power-user`](https://github.com/tbhrc/skills/tree/main/github-power-user) |

## Local compatibility paths

The former local Skill directories remain only so historical/internal links do not break abruptly:

- `skills/drf-opportunity-factory/` → central `drf-opportunity-factory`
- `skills/drf-recurring-intelligence/` → central `automations-drf-intelligence`
- `skills/drf-dashboard-operations/` → central `drf-dashboard-operations`
- `skills/drf-repository-operations/` → retired as a reusable Skill; routes to the foundational GitHub Skills above

Their `SKILL.md` files are pointer/retirement notices. **Do not maintain reusable method in those local directories.**

## Ownership rule

**One reusable capability → one Skill owner.**

- `tbhrc/skills` = reusable HOW / Skills.
- `tbhrc/drf-main/businesses/` = current business/opportunity truth.
- `tbhrc/drf-main/research/` = durable market evidence and run history.
- `tbhrc/drf-main/software/`, root HTML/JS/CSS and `assets/` = product/runtime code.
- `tbhrc/drf-main/.github/` = GitHub-required integrations and Actions.
- repository-local validation scripts may remain with DRF when they validate DRF-specific structure, but they are not a second reusable Skill canon.

When repeated execution reveals a better reusable process, improve the owning central Skill in `tbhrc/skills`; do not rebuild a local copy here.