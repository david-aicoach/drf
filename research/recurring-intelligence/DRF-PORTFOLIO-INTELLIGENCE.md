# DRF Portfolio Intelligence & Calibration — Daily Profile

**Status:** Active scheduled portfolio-maintenance profile  
**Date:** 1 September 2026  
**Issue:** #118  
**Repository:** `tbhrc/drf`  
**Scheduler:** ChatGPT Web daily condition-watch automation  
**Canonical workflow:** `workflows/drf-opportunity-factory.md`  
**Recurring workflow:** `workflows/drf-recurring-intelligence-loops.md`  
**Configuration:** `knowledge/guidelines/drf-recurring-intelligence-configuration.md`  
**Layer 3 contract:** `knowledge/architecture/drf-v3-writeback-contract.md`

## Purpose

Continuously maintain the **whole DRF opportunity portfolio** as a researched, calibrated and increasingly complete revenue-factory dataset.

This is not merely a news watcher and it is not merely a score checker.

Every daily run must:

```text
review every active parent opportunity
→ identify missing / stale / conflicting / newly material evidence
→ prioritise decision-value gaps
→ research successful comparable businesses + counter-evidence
→ complete as much defensible Layer 1 / Layer 2 / Layer 3 work as possible
→ recalibrate only evidence-affected fields
→ write changes into GitHub source-first
→ reconcile V3 last
→ record the run
```

**GitHub is the durable truth. Chat is only the founder summary.**

---

# 1. Daily all-parent review

At the start of every run, read current repository canon. Newer repository truth overrides the scheduler prompt.

Read at minimum:

1. `AGENTS.md`
2. `workflows/drf-opportunity-factory.md`
3. `workflows/drf-recurring-intelligence-loops.md`
4. `knowledge/guidelines/business-opportunity-scoring-framework.md`
5. `knowledge/guidelines/niche-attractiveness-scoring-framework.md`
6. `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md`
7. `knowledge/architecture/drf-v3-writeback-contract.md`
8. `businesses/OPPORTUNITIES.md`
9. `businesses/NICHES.md`
10. `businesses/INVESTMENT-READINESS.md`
11. `businesses/PORTFOLIO-V3.md`
12. `research/recurring-intelligence/REFRESH-RUNS.md`
13. the current dossier/source for every opportunity selected for deep work
14. any dedicated recurring-intelligence profile relevant to a selected opportunity

Every active parent row in `businesses/PORTFOLIO-V3.md` must receive a daily calibration classification.

Use one of:

- `CURRENT` — current evidence and no decision-relevant gap found;
- `GAP` — a required founder/underwriting field remains `Pending`, missing or materially under-researched;
- `STALE` — evidence freshness or source age requires review;
- `CONFLICT` — authoritative evidence disagrees or source relationships are broken;
- `MATERIAL SIGNAL` — current external/DRF evidence could change a decision field;
- `DEDICATED LOOP SYNC` — a dedicated parent loop has newer specialist evidence that must be reconciled into the portfolio.

Reviewing all parents daily does **not** mean blindly rewriting all dossiers every day. Already-current opportunities receive a concise calibration check. Deep research is mandatory for decision-relevant gaps/signals, not for artificial activity.

---

# 2. What counts as an incomplete opportunity

Treat missing founder/business-case fields as an active research backlog, not a permanent passive state.

Check each parent for completeness/currentness across:

## Layer 1

- business/outcome and payer;
- revenue/income streams and commercial basis;
- Opportunity Score;
- MRR quality;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- External Market Proof + EMP Confidence;
- successful comparable operators;
- counter-evidence/failures;
- execution velocity/time-to-revenue where decision-useful.

## Layer 2

- ranked niches;
- best niche and confidence;
- operator reverse engineering for the selected Business × Niche;
- market-ready offer;
- current price/commercial model;
- GTM/customer acquisition;
- delivery architecture;
- revenue streams and recurring/upsell logic;
- RBS;
- Return Profile;
- DRF Proof;
- Stage / decision;
- Capital / downside;
- Next Proof.

## Layer 3 / V3

- complete founder-readable current dossier for the current stage;
- Dossier Readiness;
- Blueprint Readiness where relevant;
- Evidence Freshness;
- exact canonical dossier path;
- joined `PORTFOLIO-V3.md` row consistent with source truth.

A field is not considered complete merely because an old number exists. It must have current defensible evidence and provenance.

---

# 3. Daily deep-completion priority

After reviewing all parents, deep-research in this order:

1. `CONFLICT`, broken source, legal/safety/data-rights problem.
2. New DRF actuals or active TEST/PILOT/FUND/SCALE evidence.
3. High-ranked opportunities with `Pending` EMP, offer, price, GTM, RBS, Return, Proof, Stage or Next Proof.
4. High-ranked opportunities with stale or weak comparable-operator evidence.
5. Opportunities whose score/evidence confidence appears inconsistent with newer external evidence.
6. Opportunities with missing/weak niche research.
7. Remaining incomplete parent rows.
8. Already-complete/current opportunities with no signal — calibration only.

There is **no arbitrary quota-padding**. Continue through as many decision-relevant gaps as can be completed responsibly in the run.

If the run cannot finish the full deep-completion backlog because of tool/source/runtime limits:

- do not lower research quality;
- record exactly which parents were reviewed and which received deep research;
- record the remaining highest-priority targets in the run's `Next refresh / action` field;
- continue from those targets on the next daily run rather than restarting from rank 1.

The objective is continuous convergence toward a fully researched and calibrated portfolio.

---

# 4. External Market Proof is first-class

**Copy before invent.** Strong external evidence of real successful businesses is part of underwriting, not background decoration.

For every meaningful deep research pass, actively seek multiple materially comparable operators and counter-evidence.

Capture where available:

- operator/business;
- niche/geography;
- exact offer/promise;
- setup/upfront price;
- recurring/usage/licence/commission/royalty price;
- upsells and revenue streams;
- acquisition channels, ads, funnel and CTA;
- visible revenue, customers, sales, reviews, transactions, longevity, hiring, expansion, resale/franchise or repeat evidence;
- delivery/onboarding pattern;
- retention/repeat/recurring-value logic;
- founder, brand, audience, data, capital or platform advantage that may not transfer;
- failures, shutdowns, complaints, refunds, churn, margin pressure, high support, legal/platform risk and incumbent substitution.

Assign/reassess `EMP0–EMP4` plus EMP Confidence using current canon.

Strong external proof may materially support:

- Opportunity Score factors;
- Evidence Confidence;
- price and willingness-to-pay assumptions;
- GTM/customer-channel choices;
- delivery pattern;
- RBS factors;
- Return assumptions;
- Stage/decision;
- the size and purpose of Next Proof.

Do **not** add EMP as a mechanical score bonus.

External evidence can support DRF P1/P2. It cannot award P3–P6.

### Critical test-scope rule

If EMP3/EMP4 already proves the broad category, do not spend time or capital re-proving that the category exists or that somebody will ever pay for it.

Test only the largest remaining DRF-specific uncertainty, for example:

- exact niche/ICP transferability;
- local price acceptance;
- DRF acquisition/CAC;
- onboarding/activation;
- delivery quality/support burden;
- contribution/margin;
- retention/repeatability;
- second-client reuse.

Strong external proof should **shrink internal validation**, not inflate DRF Proof.

---

# 5. Dedicated opportunity loops are specialist inputs, not exclusions

Current dedicated loops may include Business Blueprints, Autonomous AI Revenue Operations and future fast-moving parents.

The DRF-wide portfolio loop must still review those parent rows every day.

Rules:

- read the newest dedicated-loop canon first;
- reconcile newer specialist evidence into the parent/V3 state when required;
- do not duplicate unchanged specialist research merely because a second automation exists;
- if the specialist loop is stale, blocked, contradictory or incomplete on a founder field, the DRF-wide loop may deep-research the missing portfolio question;
- no parent opportunity is invisible to the portfolio calibration loop.

---

# 6. Recalibration rules

Recalculate only fields affected by better/current evidence.

Potentially affected founder fields include:

- Opportunity Score;
- MRR;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- EMP + confidence;
- Best Niche / Niche Score / confidence;
- Recommended Offer;
- Price / Commercial Model;
- GTM Summary;
- Delivery Architecture;
- RBS;
- Return Headline;
- DRF Proof from qualifying DRF actuals only;
- Stage;
- Capital;
- Next Proof;
- Current Read;
- Dossier Readiness;
- Blueprint Readiness;
- Evidence Freshness.

Preserve before → after values and rationale when a field materially changes.

Do not change a score merely because more sources were found. Do change it when stronger evidence changes the underlying factor judgement.

`Pending` is not zero.

---

# 7. GitHub write-back

A daily portfolio run is not complete until GitHub persistence is verified.

## If no material file change is required

Append one concise `DRF Portfolio` run row to:

`research/recurring-intelligence/REFRESH-RUNS.md`

Record:

- total parent opportunities reviewed;
- parents deep-researched;
- gaps/stale/conflicts found;
- outcome `UNCHANGED` where appropriate;
- next highest-priority calibration targets.

Do not churn current dossiers merely to change a date.

## If substantive mutations are required

Create or reuse a focused GitHub Issue before mutations. A single daily issue may cover a coherent calibration batch when that is clearer than one issue per parent; unrelated major changes may use separate Issues.

Use source-first order:

```text
current opportunity dossier / research source
→ niche source where changed
→ OPPORTUNITIES.md when Layer 1 fields changed
→ NICHES.md when niche fields changed
→ INVESTMENT-READINESS.md where still applicable
→ current Layer 3 dossier / CURRENT pointer where applicable
→ PORTFOLIO-V3.md LAST
→ REFRESH-RUNS.md
```

Every material opportunity update must follow:

`knowledge/architecture/drf-v3-writeback-contract.md`

and end with either:

- `PORTFOLIO-V3.md` updated, or
- a `businesses/V3-RECONCILIATIONS.md` `NO FIELD CHANGE` record when evidence was material but no founder field changed.

Re-read every changed path once.

A partial/failed run cannot replace the previous valid canonical conclusion.

---

# 8. Daily founder notification

Notify David only when:

- a material score/EMP/niche/RBS/Proof/Stage/Capital/Return/Next Proof/current-read change was landed and verified;
- a major missing field was completed in a way that changes the founder decision;
- a Golden/high-priority opportunity materially strengthened or weakened;
- a real conflict, legal/platform issue or broken canonical path requires attention;
- GitHub persistence failed.

Do not send routine noise merely because every parent was reviewed.

The run history remains the durable audit even when no notification is sent.

---

# 9. Run completion summary

Every completed run must be able to report:

```text
RUN ID / CONFIG VERSION
STATUS / EVIDENCE CUTOFF
TOTAL ACTIVE PARENTS REVIEWED
CURRENT / GAP / STALE / CONFLICT / MATERIAL SIGNAL COUNTS
PARENTS DEEP-RESEARCHED
EXTERNAL OPERATORS / COUNTER-EVIDENCE REVIEWED
FIELDS COMPLETED
FIELDS RECALIBRATED
SCORES / EMP / RBS / PROOF / STAGE CHANGES
FILES UPDATED
V3 RECONCILIATION STATUS
PERSISTENCE VERIFIED
NEXT HIGHEST-PRIORITY CALIBRATION TARGETS
```

## Acceptance

The automation is doing its job when the DRF portfolio becomes progressively more complete, current, comparable and commercially grounded without waiting for founder prompts, without re-proving externally established facts, and without leaving research stranded in chat.