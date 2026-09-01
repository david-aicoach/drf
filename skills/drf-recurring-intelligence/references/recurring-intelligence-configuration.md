# DRF Recurring Intelligence Configuration

**Status:** Canonical defaults — DRF-wide daily portfolio calibration active  
**Version:** 1.2  
**Date:** 1 September 2026  
**Governing stage:** [77.5] #82  
**Activation issues:** #112, #118  
**Workflow:** `workflows/drf-recurring-intelligence-loops.md`

## Purpose

Keep discovery thresholds, research cadence and alert behaviour visible, versioned and independent from any particular scheduler or AI model.

Schedulers must read these defaults and the relevant scheduled profile before execution. They must not silently change scoring, evidence or cadence rules. Material threshold/cadence changes require an Issue and documented rationale.

Active scheduled profiles include:

1. DRF-wide daily portfolio intelligence/calibration: `research/recurring-intelligence/DRF-PORTFOLIO-INTELLIGENCE.md`
2. Business Blueprints daily specialist intelligence: `businesses/business-blueprints/DAILY-INTELLIGENCE.md`
3. Autonomous AI Revenue Operations weekly specialist intelligence: `research/recurring-intelligence/AUTONOMOUS-AI-REVENUE-OPERATIONS.md`

Dedicated specialist loops feed the portfolio calibration loop; they do not remove their parent opportunities from daily DRF-wide review.

---

# 1. Discovery cadence

| Setting | Default | Meaning |
|---|---|---|
| Lightweight signal scan | Daily | Collect current business-model/operator/market signals |
| Candidate deduplication and triage | Daily | Classify credible new signals before deep research |
| Deep candidate research | Event/threshold driven | Only after a candidate survives the cheap scan |
| Founder digest | Material change only | No daily noise when nothing important changes |
| Discovery evidence cutoff | Run start time | Sources newer than cutoff belong to a later run |

Recommended scheduler window: once daily outside core UAE working hours where practical. The exact runtime is an implementation choice, not business logic.

---

# 2. Layer 1 discovery thresholds

| Decision | Default rule |
|---|---|
| **Golden Priority** | Opportunity Score ≥85; adequate evidence; strong MRR and/or AI leverage; plausible customer and positive-contribution route; no fatal transferability issue |
| **Advance** | Opportunity Score ≥75; Evidence Confidence ≥60%; Research Completeness ≥70%; no fatal gate; EMP2+ or documented evidence-backed innovation rationale |
| **Hold / Research** | Opportunity Score 65–74; or Evidence <60%; or Research <70%; or one critical transferability/conflict gap |
| **Reject / Park** | Opportunity Score <65 after adequate research; no payer/revenue mechanism; implausible acquisition; delivery cost exceeds value; fatal legal/platform/capital barrier; or duplicate with no material new evidence |

## Threshold rules

1. Score thresholds do not override fatal gates.
2. EMP is independent and must not be added as a mechanical bonus to Opportunity Score.
3. A candidate below a threshold may advance only with a documented founder override or strategic rationale.
4. A candidate above a threshold may still be held/rejected for evidence, legal, acquisition, delivery or transferability reasons.
5. Every decision records the configuration version.

---

# 3. External Market Proof defaults

| EMP | Minimum interpretation |
|---:|---|
| EMP0 | A completed search found no credible comparable commercial activity |
| EMP1 | One/few live offers or weak early signals; traction evidence limited |
| EMP2 | Multiple independent operators with current offers/pricing and customer/market signals |
| EMP3 | Multiple operators with sustained commercial/customer evidence, repeat/recurring patterns and reviewed counter-evidence |
| EMP4 | Robust cross-operator/period/context evidence plus strong transferability to the chosen niche/geography/channel |

## EMP safeguards

- One viral post or exceptional operator cannot establish EMP3/EMP4.
- Missing research is `Pending`, not EMP0.
- EMP confidence remains a separate 0–100 value.
- EMP never awards DRF P3–P6.
- Strong EMP is a first-class underwriting input and should reduce redundant DRF validation when broad market facts are already established.
- If EMP3/EMP4 proves the category, the next internal test targets only the largest remaining DRF-specific uncertainty.

---

# 4. Portfolio calibration and refresh cadence

## Daily all-parent calibration

Every active parent opportunity in `businesses/PORTFOLIO-V3.md` receives a daily review under:

`research/recurring-intelligence/DRF-PORTFOLIO-INTELLIGENCE.md`

The daily review checks:

- missing/Pending founder fields;
- stale evidence;
- external operator/EMP gaps;
- score/evidence inconsistencies;
- missing/weak niche, offer, price, GTM, delivery, RBS, Return, Proof, Stage or Next Proof fields;
- material new external or DRF evidence;
- dedicated-loop evidence that has not yet reached portfolio truth;
- broken canonical paths or source conflicts.

Already-current, complete opportunities receive a concise calibration check rather than artificial full re-research. Decision-relevant gaps are actively deep-researched and completed in priority order.

If the full deep-completion backlog cannot be responsibly completed in one run, the run records the remaining highest-priority targets and the next daily run continues from them rather than restarting.

## Deep-refresh defaults

| Portfolio state | Deep-refresh default | Daily calibration |
|---|---|---|
| Conflict / broken canonical source | Immediate | Yes |
| TEST / PILOT | Weekly minimum and after each evidence event; sooner when the daily gap review finds a material missing field | Yes |
| FUND / SCALE / BLUEPRINT | Weekly operating review; monthly external-market review; immediate material-gap work | Yes |
| Golden Opportunity in RESEARCH | Monthly minimum; earlier when high-value fields are Pending/stale | Yes |
| Other active opportunity | Risk/gap driven; no longer allowed to remain indefinitely incomplete merely because quarterly refresh is not due | Yes |
| Long-horizon / parked | Six-month deep refresh unless a material trigger/gap justifies earlier work | Yes, lightweight |

The prior quarterly-only ordinary refresh model is superseded for incomplete active opportunities. A current and complete parent need not be fully re-researched daily, but a material `Pending`/stale/conflicting field is an active research backlog item.

## Active scheduled profile — DRF Portfolio Intelligence & Calibration

Canonical profile:

`research/recurring-intelligence/DRF-PORTFOLIO-INTELLIGENCE.md`

The scheduled run must:

- review **every active parent opportunity** daily;
- use `PORTFOLIO-V3.md` and authoritative dossiers to identify gaps/staleness/conflicts;
- actively research successful comparable businesses/operators and negative evidence;
- assign/reassess EMP and transferability;
- complete missing high-value business-case fields rather than waiting for founder prompts;
- recalibrate Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness, niche, offer/price/GTM/delivery, RBS, Return, DRF Proof, Stage, Capital and Next Proof only where evidence justifies it;
- use strong external evidence instead of re-proving established category facts internally;
- keep dedicated parent loops as specialist inputs, not exclusions;
- persist every completed run to `research/recurring-intelligence/REFRESH-RUNS.md`;
- complete mandatory Layer 3/V3 reconciliation for every material change;
- notify David only after material changes are landed/verified, or when persistence/trust is blocked.

## Active scheduled profile — Business Blueprints

Business Blueprints has a dedicated daily ChatGPT Web specialist profile because the category and its distribution channels are moving quickly.

Canonical profile:

`businesses/business-blueprints/DAILY-INTELLIGENCE.md`

The scheduled run must:

- research the **Business Blueprints parent opportunity**, not Whop alone;
- treat Whop and other marketplaces/storefronts as distribution channels;
- read current DRF canon before research;
- use successful comparable operators and EMP as first-class evidence;
- persist every completed run to `research/recurring-intelligence/REFRESH-RUNS.md`;
- update detailed evidence and canonical decision files when material evidence changes them;
- complete Layer 3/V3 reconciliation;
- notify the founder only after material changes are landed/verified, or when persistence/trust is blocked.

A no-change scheduled run records `UNCHANGED` in the refresh register but does not churn dossier/score files.

## Staleness defaults

| Evidence age | Status |
|---:|---|
| 0–90 days | Current |
| 91–180 days | Review due |
| More than 180 days | Stale |
| No reliable date | Unknown freshness |

A material event, missing founder field or source conflict overrides the calendar.

---

# 5. Immediate event triggers

Trigger an event refresh for:

- new DRF payment, delivery, customer outcome, cost, churn, refund or acquisition evidence;
- material platform/API/AI price, quota, policy or access change;
- legal, regulatory, privacy or data-rights change;
- major competitor/operator launch, shutdown, acquisition, expansion or pricing change;
- material new successful-operator or failure evidence;
- significant search/demand/advertising shift;
- new niche evidence likely to change the beachhead decision;
- broken `CURRENT.md`, dossier, folder or register relationship;
- authoritative source conflict;
- explicit founder instruction.

---

# 6. Refresh priority order

| Priority | Condition |
|---:|---|
| 1 | Conflict, broken source or legal/safety concern |
| 2 | New DRF actual or active customer evidence |
| 3 | TEST / PILOT / FUND / SCALE opportunity |
| 4 | High-ranked opportunity with missing/Pending founder fields or stale comparable-operator/EMP evidence |
| 5 | Material new external market signal |
| 6 | Missing niche/offer/price/GTM/delivery/RBS/Return/Next Proof work |
| 7 | Remaining incomplete active parents |
| 8 | Current/complete background opportunities |

Within a priority tier, use capital/exposure, evidence age, Opportunity Score and Next Proof urgency. Do not invent an opaque combined score without demonstrated need.

---

# 7. Source coverage minimums

## Discovery candidate before Advance

- at least two materially independent positive commercial/operator signals where available;
- at least one counter-evidence/failure search;
- at least one current price/revenue-mechanism signal or a clear reason it is unavailable;
- at least one credible customer-acquisition route;
- evidence dates and source quality labels;
- duplicate classification against the current portfolio.

## EMP3 or EMP4

- multiple independent operators/contexts;
- sustained rather than momentary activity;
- current offers/pricing/customer evidence;
- recurring/repeatability evidence where relevant;
- counter-evidence/failure modes;
- documented transferability limits.

## DRF-wide portfolio calibration

Every daily run reviews all active parent rows. Deep research is proportional to the identified gap/signal, but for selected deep-work opportunities the agent should cover the full decision-relevant chain needed to resolve the gap rather than performing a token update.

Where fields are missing, actively seek enough evidence to complete them defensibly, including successful comparable operators, counter-evidence, revenue/pricing, acquisition, delivery and transferability.

A narrow platform-price event does not require a full market rewrite, but every affected downstream assumption must be checked.

For Business Blueprints, the dedicated daily scan remains parent-wide: parent demand/economics, channel portfolio, product formats, SEO/AI discovery, agentic/MCP/WebMCP opportunities, platform/IP risk and DRF actuals are all in scope.

---

# 8. Material-change thresholds

Treat a change as material when it may alter:

- any score by at least 2 points;
- EMP, DRF Proof or Stage;
- best niche or a niche decision band;
- offer, price or revenue model;
- acquisition or delivery architecture;
- capital, maximum downside or return headline;
- legal/ethical viability;
- Next Proof;
- dossier/Blueprint readiness;
- public/private disclosure status.

Completing a previously `Pending` founder field can be material even if no numeric score changes.

Smaller observations may be appended to evidence history without changing the V3 summary.

---

# 9. Run and alert settings

| Setting | Default |
|---|---|
| Maximum one active run per idempotency key | Yes |
| Partial/failed run may change canonical decisions | No |
| Completed scheduled refresh recorded in run history | Required |
| All active parent rows reviewed in DRF portfolio run | Required |
| Detailed source updated before aggregate | Required |
| V3 register reconciled last | Required |
| Dashboard HTML used as write source | Prohibited |
| Founder alert on no material change | No |
| Founder alert on Golden candidate | Yes |
| Founder alert on material existing-opportunity change | Yes, after GitHub persistence |
| Founder alert on conflict/blocked trust | Yes |
| Founder alert on approval-required action | Yes |
| Paid/outreach/public/legal action automatically executed | No |

A scheduled automation that researches but does not persist the required GitHub record is `PARTIAL` or `FAILED`, not `COMPLETED`.

---

# 10. Public/private defaults

## Public-safe by default when evidence rights permit

- opportunity name and pain/outcome;
- high-level scores with date/methodology disclaimer;
- EMP and DRF Proof labels;
- best niche and Niche Score;
- high-level offer and price range;
- Stage, Next Proof and evidence freshness;
- clear non-guarantee statement.

## Private/paid by default

- complete operator reverse engineering;
- source notes and proprietary evidence;
- prospect lists, scripts, funnels and acquisition assets;
- detailed financial model and sensitivities;
- client/candidate data;
- implementation assets, snapshots and automations;
- detailed delivery SOPs;
- permissioned interview transcripts;
- complete Business Blueprint.

---

# 11. Approval settings

Founder approval is required before:

- releasing or increasing capital;
- paid advertising or external spend;
- contacting prospects/customers;
- publishing new public listings/claims;
- accepting legal/platform terms;
- exposing customer/personal data;
- material guarantees or commercial commitments;
- destructive repository/data changes.

Research, scoring, file reconciliation and recommendations may proceed within existing repository permissions.

---

# 12. Change control

A new configuration version must record:

- old and new setting;
- reason/evidence;
- affected loops/opportunities;
- effective date;
- governing Issue;
- whether historical runs remain comparable.

## Current version

`DRF-INTELLIGENCE-CONFIG-1.2`

### 1.1 → 1.2

- **Reason:** the broad DRF Opportunity Score Watch only waited for material signals and did not actively complete missing/stale opportunity research across the whole portfolio.
- **Change:** activate a dedicated daily DRF Portfolio Intelligence & Calibration profile; review every active parent each run; make `Pending`/stale/conflicting founder fields an active research backlog; require successful-comparable-operator/EMP research; allow strong external proof to reduce redundant DRF validation; keep dedicated parent loops as specialist inputs rather than exclusions; require source-first Layer 3/V3 write-back and durable run history.
- **Affected opportunities:** all active DRF parent opportunities.
- **Effective date:** 1 September 2026.
- **Issue:** #118.
- **Historical comparability:** preserved; scoring formulas/thresholds are unchanged, but refresh cadence and completeness expectations are stronger.

### 1.0 → 1.1

- **Reason:** the existing ChatGPT Whop watcher was too narrow and did not require GitHub deployment.
- **Change:** activate a dedicated daily Business Blueprints parent-opportunity profile through ChatGPT Web; require GitHub read/write/verification in the same run; record every completed refresh in `REFRESH-RUNS.md`; retain material-change-only founder alerts.
- **Affected opportunity:** Business Blueprints.
- **Effective date:** 1 September 2026.
- **Issue:** #112.
- **Historical comparability:** preserved; scoring thresholds are unchanged.

Other recurring-intelligence schedules may be added later without changing business logic, provided they invoke the canonical workflow/configuration and document their opportunity-specific profile.