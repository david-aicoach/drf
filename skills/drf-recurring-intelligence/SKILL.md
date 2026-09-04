---
name: drf-recurring-intelligence
description: Migration pointer only. For recurring DRF discovery, portfolio calibration, scheduled research, refresh/re-score work and specialist intelligence loops, load the canonical tbhrc/skills/automations-drf-intelligence Skill.
---

# DRF Recurring Intelligence — migration pointer

**Canonical reusable owner:** https://github.com/tbhrc/skills/tree/main/automations-drf-intelligence

The former local `tbhrc/drf-main/skills/drf-recurring-intelligence/` body is retained only as migration/provenance and repository-local compatibility evidence after `tbhrc/skills#101`.

## Rule

- Do **not** maintain recurring intelligence logic here.
- Load the current central `tbhrc/skills/automations-drf-intelligence/SKILL.md` for every run or automation change.
- Keep DRF run history and durable market evidence in `tbhrc/drf-main/research/`.
- Keep current opportunity/business truth in `tbhrc/drf-main/businesses/`.
- Any reusable recurring method improvement belongs in the central Skill Bank.

If a local DRF document still links here, this pointer is the compatibility return path to the sole editable reusable owner.