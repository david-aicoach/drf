# DRF Portfolio Intelligence & Calibration — Daily Profile

**Status:** Active scheduled profile  
**Cadence:** Daily  
**Repository:** `tbhrc/drf`  
**Scheduler:** ChatGPT Web condition-watch automation  
**Owning Skill:** `skills/drf-recurring-intelligence/SKILL.md`

## Thin scheduler prompt
A scheduler only needs to say:

> Work in `tbhrc/drf`. Use the **DRF Recurring Intelligence Skill** in **DRF Portfolio Intelligence & Calibration** mode. Follow current repository truth, persist the run to GitHub, and notify David only on a material change/blocker.

The Skill and repository—not the scheduler text—own the method.

## Daily objective
Review **every active parent opportunity** in `businesses/PORTFOLIO-V3.md`, classify currentness/completeness, and deep-research the highest-value gaps/signals until the run's responsible capacity is exhausted.

Classification:
- `CURRENT`
- `GAP`
- `STALE`
- `CONFLICT`
- `MATERIAL SIGNAL`
- `DEDICATED LOOP SYNC`

## Priority
1. Conflict/legal/safety/broken source.
2. New DRF actuals or active TEST/PILOT/FUND/SCALE evidence.
3. High-ranked Pending/stale founder fields.
4. Weak comparable-operator/EMP evidence.
5. Score/evidence inconsistency.
6. Missing niche/commercial/RBS/Return/Next Proof.
7. Remaining incomplete parents.
8. Current/complete parents — calibration only.

No quota padding. Do not rewrite current dossiers just to create activity.

## Research standard
For selected deep work, use the **DRF Opportunity Factory Skill**. Research successful comparable businesses and counter-evidence, complete the decision-relevant Layer 1/2/3 chain, and change only evidence-affected fields.

Strong EMP3/EMP4 should reduce redundant internal validation; it never awards DRF P3–P6.

## Persistence
Every completed run appends to `research/recurring-intelligence/REFRESH-RUNS.md` and records:
- total active parents reviewed;
- classifications/gaps found;
- parents deep-researched;
- fields completed/recalibrated;
- score/EMP/RBS/Proof/Stage changes;
- exact files updated;
- V3 reconciliation status;
- persistence verification;
- next highest-priority targets.

Material changes must finish through the Opportunity Factory Skill and reconcile `businesses/PORTFOLIO-V3.md` last (or record explicit V3 `NO FIELD CHANGE`).

## Notification
Notify David only after verified persistence when a material founder decision changes, an important opportunity strengthens/weakens, a major field is completed, a conflict/blocker requires attention, or persistence fails.
