---
name: drf-recurring-intelligence
description: Run or maintain DRF recurring market intelligence, Golden Opportunity discovery, proof-first application discovery, daily portfolio calibration, scheduled opportunity refresh, specialist intelligence loops, and ChatGPT Web automation behaviour. Use when asked to scan for new opportunities, find revenue-producing apps/software worth adapting, refresh all 27 DRF businesses, run daily/weekly market intelligence, review stale/Pending fields, maintain recurring research, or update an automation prompt/profile.
---

# DRF Recurring Intelligence

## Purpose
Keep the DRF opportunity portfolio current, increasingly complete and commercially grounded without waiting for founder prompts. This Skill owns recurring discovery/refresh operating logic; run-history evidence remains in `research/recurring-intelligence/`.

## Number-one rule
**Skill first, source first, V3 last.** Read this Skill before recurring intelligence work. Do not create separate loose watcher prompts, workflow files or scheduler-specific business logic.

## Modes
1. **DRF Portfolio Intelligence & Calibration** — review every active parent opportunity; deep-research decision-relevant gaps/signals.
2. **Golden Opportunity Discovery** — find/deduplicate candidate businesses; cheap Layer 1 screen first; advance only qualified opportunities.
3. **Proof-First Application Discovery** — specialised Golden Opportunity lane that starts from recent revenue-producing mobile/web applications, reverse-engineers the paid problem/monetisation/acquisition pattern, then routes transferable candidates through the normal DRF process. Load `references/proof-first-application-discovery-profile.md`.
4. **Specialist Parent Refresh** — focused high-frequency loop for a fast-moving parent such as Business Blueprints or Autonomous AI Revenue Operations.

Load `references/recurring-intelligence-configuration.md` for cadence, thresholds, staleness, source minimums and material-change rules.

## Portfolio calibration run
At run start read current root `AGENTS.md`, this Skill, `skills/drf-opportunity-factory/SKILL.md`, `businesses/PORTFOLIO-V3.md`, relevant registers, run history, and any selected parent source/dossier.

Classify every active parent as:
- CURRENT
- GAP
- STALE
- CONFLICT
- MATERIAL SIGNAL
- DEDICATED LOOP SYNC

Deep-research in priority order: conflicts/safety → new DRF actuals/active tests → high-ranked Pending/stale founder fields → weak external proof/comparables → missing niche/commercial/RBS/Return/Next Proof → remaining incomplete parents.

Do not rewrite complete parents merely to create activity. Continue through as many decision-relevant gaps as can be completed responsibly; persist remaining priorities for the next run.

## Discovery run
1. collect current market/operator/business-model signals, including proof-first application/software signals when relevant;
2. deduplicate against current parents and niches before deep research;
3. look for evidence of real commercial activity, not social hype;
4. when the signal is a revenue-producing app/software product, load `references/proof-first-application-discovery-profile.md`, capture the estimate boundary, cross-check commercial traction and test transferability/buildability before deep research;
5. run cheap Layer 1 using `skills/drf-opportunity-factory/SKILL.md`;
6. keep rejected candidates outside the main ranked portfolio and record the rejection succinctly;
7. automatically advance qualified candidates through the same Layer 2/3 path.

### Proof-first application rule
A third-party app-revenue estimate is a strong discovery shortcut but is not audited revenue and is never a DRF actual. One successful app is a candidate signal, not category proof. Cluster observed apps by **payer + pain/outcome + revenue mechanism**, not by app name, vendor or platform. Replicate validated problems/playbooks where lawful; do not copy protected branding, code, creative assets or trademarks.

The current preferred source may be AppKittie or an equivalent app-intelligence platform, but the method must remain vendor-independent. A candidate can only advance after the normal DRF evidence, duplicate, fatal-gate and transferability rules are satisfied.

## External proof
Actively research successful comparable operators and negative evidence. Strong EMP3/EMP4 should shrink redundant internal validation, not inflate DRF Proof. External proof and DRF actuals remain separate.

## Recalibration
Change only fields affected by better/current evidence. Preserve before → after + rationale for material changes. Completing a previously `Pending` field can be material even when no score changes.

## GitHub persistence
A scheduled run is not complete until GitHub persistence is verified.

If no material founder field changes: append the appropriate run-history record; do not churn dossiers.

If material changes occur, follow `skills/drf-opportunity-factory/SKILL.md` Layer 3 close-out and its V3 write-back reference. `PORTFOLIO-V3.md` is reconciled last.

Run history remains in:
- `research/recurring-intelligence/REFRESH-RUNS.md`
- `research/recurring-intelligence/DISCOVERY-RUNS.md`
- `research/recurring-intelligence/DISCOVERY-REJECTIONS.md`
- specialist run logs where applicable.

## Founder notification
Notify David only after verified persistence when there is a material decision change, a major field completion that changes the decision, a materially stronger/weaker priority opportunity, a real conflict/blocker, or a persistence failure. No-change runs remain in run history without noise.

## Scheduler independence
ChatGPT Web or another scheduler is only the runtime trigger. The business logic lives here and in bundled references. Scheduler prompts should be thin: point to `tbhrc/drf`, instruct the agent to use this Skill and specify the scheduled mode/profile.

## Self-improvement
If recurring runs reveal a repeated failure, missing classification, better source minimum or better cadence rule, update this Skill/reference through a governed Issue. Do not proliferate standalone watcher prompts or workflow files.
