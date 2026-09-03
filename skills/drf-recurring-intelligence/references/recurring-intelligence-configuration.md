# DRF Recurring Intelligence Configuration

**Status:** Canonical Skill-owned defaults  
**Version:** 2.1  
**Date:** 2 September 2026  
**Governing Skill:** `skills/drf-recurring-intelligence/SKILL.md`

## Purpose
Keep cadence, thresholds, evidence standards and alert behaviour versioned independently from any scheduler/model.

Schedulers are triggers only. They must point at `tbhrc/drf-main`, invoke the **DRF Recurring Intelligence Skill**, and specify the intended profile/mode. Newer repository truth overrides scheduler prompt text.

## Active profiles

| Profile | Cadence | Skill reference |
|---|---|---|
| DRF Portfolio Intelligence & Calibration | Daily | `references/portfolio-intelligence-profile.md` |
| Proof-First Application Discovery | Daily signal lane inside Golden Opportunity Discovery | `references/proof-first-application-discovery-profile.md` |
| Business Blueprints specialist intelligence | Daily | `references/business-blueprints-daily-profile.md` |
| Autonomous AI Revenue Operations specialist intelligence | Weekly | `references/autonomous-ai-revenue-operations-profile.md` |

Dedicated specialist loops feed the whole-portfolio loop; they never make a parent invisible to portfolio calibration. Proof-First Application Discovery is a discovery sub-profile, not a separate parent-opportunity loop and not a separate score.

## Discovery cadence

| Setting | Default |
|---|---|
| Lightweight signal scan | Daily |
| Candidate deduplication / triage | Daily |
| Proof-first application scan | Daily within Golden Opportunity Discovery |
| Deep candidate research | Event/threshold-driven |
| Founder digest | Material change only |
| Evidence cutoff | Run start time |

## Proof-first application defaults
For mobile/web application discovery, load `references/proof-first-application-discovery-profile.md`.

Default high-signal mobile-app screen:
- estimated monthly revenue **≥ US$50,000/month**;
- launch age **≤ 12 months**;
- prefer stable/positive revenue direction;
- require a clear monetisation mechanism;
- prefer observable acquisition evidence;
- treat third-party revenue/download values as estimates, not audited revenue;
- require first-party product/store verification, at least one independent corroborating traction/commercial signal and one deliberate counter-evidence search before `ADVANCE`;
- deduplicate by payer + pain/outcome + revenue mechanism before creating any parent opportunity.

A lower-revenue candidate may still enter triage for exceptional growth, recency, simplicity, recurring economics, geography/niche whitespace or strong DRF asset fit, but the exception and reason must be explicit.

No “App Score” exists. Application intelligence contributes evidence only to the existing Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness and EMP framework, then to normal Layer 2/3 fields if the candidate advances.

## Layer 1 discovery thresholds

| Decision | Default rule |
|---|---|
| **Golden Priority** | Opportunity Score ≥85; adequate evidence; strong MRR and/or AI leverage; plausible customer/positive-contribution route; no fatal transferability gate |
| **Advance** | Opportunity Score ≥75; Evidence ≥60%; Research ≥70%; no fatal gate; EMP2+ or documented evidence-backed innovation rationale |
| **Hold / Research** | Score 65–74; or Evidence <60%; or Research <70%; or one critical transferability/conflict gap |
| **Reject / Park** | Score <65 after adequate research; no payer/revenue mechanism; implausible acquisition; delivery economics fail; fatal legal/platform/capital barrier; or duplicate with no material new evidence |

Thresholds do not override fatal gates. EMP remains independent; never add it mechanically to Opportunity Score.

## External Market Proof defaults

| EMP | Minimum interpretation |
|---:|---|
| EMP0 | Completed search found no credible comparable commercial activity |
| EMP1 | One/few live offers or weak early signals; traction limited |
| EMP2 | Multiple independent operators with current offers/pricing and customer/market signals |
| EMP3 | Multiple operators with sustained commercial/customer evidence, repeat/recurring patterns and reviewed counter-evidence |
| EMP4 | Robust cross-operator/period/context evidence plus strong transferability to selected niche/geography/channel |

Safeguards:
- one viral post or exceptional operator cannot establish EMP3/EMP4;
- one app-intelligence revenue estimate cannot establish EMP2+ by itself;
- missing research is `Pending`, not EMP0;
- EMP confidence is separate 0–100;
- EMP never awards DRF P3–P6;
- strong EMP should shrink redundant DRF validation.

## Portfolio cadence

Every active parent in `businesses/PORTFOLIO-V3.md` receives daily calibration under the portfolio profile. Complete/current parents receive a concise check; decision-relevant gaps/signals trigger deep research.

| Portfolio state | Deep-refresh default |
|---|---|
| Conflict / broken source | Immediate |
| TEST / PILOT | Weekly minimum and after material evidence events |
| FUND / SCALE / BLUEPRINT | Weekly operating review; monthly external review |
| Golden opportunity in RESEARCH | Monthly minimum; earlier for high-value Pending/stale fields |
| Other active opportunity | Risk/gap driven |
| Long-horizon / parked | Six-month deep refresh unless triggered earlier |

Staleness:
- 0–90 days = Current
- 91–180 = Review due
- >180 = Stale
- no reliable date = Unknown freshness

A material event, missing founder field or source conflict overrides calendar age.

## Refresh priority
1. Conflict, broken source, legal/safety/data-rights issue.
2. New DRF payment/delivery/customer/cost/churn/refund/acquisition actual.
3. TEST/PILOT/FUND/SCALE opportunity.
4. High-ranked parent with Pending/stale founder fields or weak comparable-operator/EMP evidence.
5. Material new external market signal.
6. Missing niche/offer/price/GTM/delivery/RBS/Return/Next Proof.
7. Remaining incomplete active parents.
8. Current complete background parents.

## Source minimums
Before Advance where available:
- two materially independent positive commercial/operator signals;
- one deliberate counter-evidence/failure search;
- current price/revenue-mechanism evidence or documented reason unavailable;
- credible acquisition route;
- evidence dates/quality;
- duplicate classification.

For proof-first application candidates, the originating app-intelligence estimate counts as one directional signal only. Apply the application profile's cross-validation rule before Advance.

EMP3/EMP4 requires multiple independent operators/contexts, sustained activity, current offer/pricing/customer evidence, recurring/repeat evidence where relevant, counter-evidence and transferability limits.

## Material change
Treat a change as material when it may alter:
- a score by 2+ points;
- EMP / DRF Proof / Stage;
- best niche or niche decision band;
- offer/price/revenue model;
- acquisition/delivery architecture;
- capital/return/downside;
- legal/ethical viability;
- Next Proof;
- dossier/Blueprint readiness;
- public/private disclosure status;
- or completes a previously Pending founder field in a decision-relevant way.

## Persistence rules

Every completed recurring run must leave durable GitHub evidence.

- No material founder-field change → record run history, avoid dossier churn.
- Material change → source first, affected registers, Opportunity Factory Layer 3, V3 reconciliation last, then run history.
- Partial/failed run cannot replace previous valid canonical conclusion.
- Dashboard HTML is never a write source.

Run-history data stays under `research/recurring-intelligence/`.

## Alerts
Notify David only after GitHub persistence when:
- a Golden candidate emerges;
- an existing opportunity materially strengthens/weakens;
- a major founder field/decision changes;
- a conflict/blocker/security/legal issue needs attention;
- persistence fails;
- founder approval is required.

Do not alert on unchanged routine review.

## Approval boundary
Founder approval is required before capital/spend, paid ads, outreach, public listings/claims, legal/platform commitments, exposure of personal/customer data, material guarantees or destructive actions.

## Version 2.1 change
Added Proof-First Application Discovery as a vendor-independent Golden Opportunity discovery lane, with AppKittie-style revenue/launch filters, estimate-boundary safeguards, cross-validation requirements and no new competing score.

## Version 2.0 change
The operating configuration moved from global guideline/profile paths into the owning Skill. Thresholds and business semantics are unchanged; discovery and scheduled behaviour now resolve through Skills first.
