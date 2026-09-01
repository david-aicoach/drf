# DRF Recurring Intelligence — Run History

This folder is **durable evidence/history only**. Reusable operating instructions and scheduled profiles live in the [`DRF Recurring Intelligence Skill`](../../skills/drf-recurring-intelligence/SKILL.md).

It is not a workflow or prompt library.

## Files

- [`DISCOVERY-RUNS.md`](./DISCOVERY-RUNS.md) — completed/partial/failed discovery-run history.
- [`DISCOVERY-REJECTIONS.md`](./DISCOVERY-REJECTIONS.md) — rejected/held candidates with reason and reconsideration trigger.
- [`REFRESH-RUNS.md`](./REFRESH-RUNS.md) — portfolio/specialist refresh history.
- [`AUTONOMOUS-AI-REVENUE-OPERATIONS-RUNS.md`](./AUTONOMOUS-AI-REVENUE-OPERATIONS-RUNS.md) — audit history for the weekly Autonomous AI specialist profile.

## Rules

1. Never invent a run or candidate result.
2. Add a row only after a real run begins and its status is known.
3. Detailed evidence belongs in the relevant current research/opportunity source; this folder holds concise audit/navigation history.
4. Rejected candidates stay outside `businesses/PORTFOLIO-V3.md` unless later reconsidered and advanced.
5. Partial/failed runs do not replace the last successful canonical conclusion.
6. A run that requires GitHub write-back but fails to persist it is not completed.
7. Do not store credentials, personal/customer data or proprietary interview content here.

## Skill-owned operating profiles

- Portfolio daily calibration: `skills/drf-recurring-intelligence/references/portfolio-intelligence-profile.md`
- Business Blueprints daily: `skills/drf-recurring-intelligence/references/business-blueprints-daily-profile.md`
- Autonomous AI weekly: `skills/drf-recurring-intelligence/references/autonomous-ai-revenue-operations-profile.md`

The scheduler/runtime invokes the Skill. This folder records what actually happened.
