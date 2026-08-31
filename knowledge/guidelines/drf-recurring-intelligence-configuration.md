# DRF Recurring Intelligence Configuration

**Status:** Canonical defaults — founder-reviewable  
**Version:** 1.0  
**Date:** 31 August 2026  
**Governing stage:** [77.5] #82  
**Workflow:** `workflows/drf-recurring-intelligence-loops.md`

## Purpose

Keep discovery thresholds, research cadence and alert behaviour visible, versioned and independent from any particular scheduler or AI model.

A future scheduler may read these defaults, but it must not silently change them. Material threshold/cadence changes require an Issue and documented rationale.

---

# 1. Discovery cadence

| Setting | Default | Meaning |
|---|---|---|
| Lightweight signal scan | Daily | Collect current business-model/operator/market signals |
| Candidate deduplication and triage | Daily | Classify credible new signals before deep research |
| Deep candidate research | Event/threshold driven | Only after a candidate survives the cheap scan |
| Founder digest | Material change only | No daily noise when nothing important changes |
| Discovery evidence cutoff | Run start time | Sources newer than cutoff belong to a later run |

Recommended scheduler window when later activated: once daily outside core UAE working hours. The exact runtime is an implementation choice, not business logic.

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

---

# 4. Refresh cadence

| Portfolio state | Deep-refresh default | Daily event watch |
|---|---|---|
| TEST / PILOT | Weekly and after each evidence event | Yes |
| FUND / SCALE / BLUEPRINT | Weekly operating review; monthly external-market review | Yes |
| Golden Opportunity in RESEARCH | Monthly | Yes |
| Other active opportunity | Quarterly | Yes |
| Long-horizon / parked | Every six months | Yes, material events only |
| Conflict / broken canonical source | Immediate | Yes |

## Staleness defaults

| Evidence age | Status |
|---:|---|
| 0–90 days | Current |
| 91–180 days | Review due |
| More than 180 days | Stale |
| No reliable date | Unknown freshness |

A material event overrides the calendar.

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
| 4 | Stale Golden Opportunity or high-ranked opportunity |
| 5 | Material new external market signal |
| 6 | Scheduled ordinary refresh |
| 7 | Long-horizon background opportunity |

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

## Portfolio refresh

Coverage is proportional to the trigger. A narrow platform-price event does not require a full market rewrite, but every affected field and downstream assumption must be checked.

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
- public/private disclosure status.

Smaller observations may be appended to evidence history without changing the V3 summary.

---

# 9. Run and alert settings

| Setting | Default |
|---|---|
| Maximum one active run per idempotency key | Yes |
| Partial/failed run may change canonical decisions | No |
| Detailed source updated before aggregate | Required |
| V3 register reconciled last | Required |
| Dashboard HTML used as write source | Prohibited |
| Founder alert on no material change | No |
| Founder alert on Golden candidate | Yes |
| Founder alert on conflict/blocked trust | Yes |
| Founder alert on approval-required action | Yes |
| Paid/outreach/public/legal action automatically executed | No |

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

`DRF-INTELLIGENCE-CONFIG-1.0`

Until a production scheduler is explicitly approved and implemented, this file governs manual/specification runs only.