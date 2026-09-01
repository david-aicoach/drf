# DRF Skills — Primary Operating Surface

**Skills are the number-one operating interface for reusable AI work in DRF.**

A fresh agent should start here, choose the single matching capability, then read that Skill's `SKILL.md` before substantive work.

## Canonical Skills

| Skill | Use it for | Natural triggers |
|---|---|---|
| [`drf-opportunity-factory`](./drf-opportunity-factory/SKILL.md) | New opportunity intake, market intelligence A–Z, Layer 1 → Layer 2 → Layer 3, niche/commercial underwriting and V3 close-out | “new business opportunity”, “Revenue Factory opportunity intake”, “run DRF A–Z”, “research/score this business idea” |
| [`drf-recurring-intelligence`](./drf-recurring-intelligence/SKILL.md) | Golden Opportunity discovery, daily portfolio calibration, scheduled refreshes and specialist market-intelligence loops | “run daily intelligence”, “refresh the 27 opportunities”, “scan for opportunities”, “update the automation” |
| [`drf-dashboard-operations`](./drf-dashboard-operations/SKILL.md) | Dashboard V3 presentation/data-contract maintenance, website troubleshooting and Pages verification | “update the dashboard”, “fix V3”, “add a KPI/table”, “verify the website” |
| [`drf-repository-operations`](./drf-repository-operations/SKILL.md) | Repository architecture/governance, Skill maintenance, cleanup, CI paths and structural migrations | “restructure DRF”, “update/create a DRF Skill”, “clean the repo”, “fix repository governance” |

## Skill ownership rule

**One reusable capability → one Skill owner.**

Capability-specific workflows, instructions, scoring standards, references, reusable output structures and reusable AI helper scripts belong inside the owning Skill.

Do not create new global `templates/`, AI `workflows/`, SOP, lessons or miscellaneous knowledge folders. Improve the owning Skill instead.

## What does not belong in Skills

Skills are not the only data store:

- `businesses/` remains canonical business/opportunity truth;
- `research/` remains durable market evidence and run history;
- `software/` and deployed HTML/JS/CSS remain actual product/runtime code;
- `.github/workflows/` remains because GitHub requires that platform path.

Skills tell agents **how to operate** those domains. They do not replace verified business evidence or product source code.

## Skill improvement

When repeated execution reveals a better reusable process:

1. record the lesson/evidence in the governing GitHub Issue;
2. update the existing owning Skill or its bundled reference/script;
3. validate the Skill;
4. do not create a parallel loose workflow/template for the same capability.
