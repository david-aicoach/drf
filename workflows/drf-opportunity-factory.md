# DRF Opportunity Factory Workflow

**Status:** Canonical end-to-end workflow  
**Version:** 1.1  
**Date:** 1 September 2026  
**Master programme:** #77  
**Write-back contract:** `knowledge/architecture/drf-v3-writeback-contract.md`

## Objective

Turn a raw business opportunity, discovered market signal or existing DRF portfolio business into one evidence-backed founder decision and keep the current V3 portfolio synchronised.

```text
FIND / RECEIVE OPPORTUNITY
→ LAYER 1: select the business
→ LAYER 2: select the niche + design/underwrite the commercial model
→ LAYER 3: structure the business case + reconcile V3
→ execute next proof stage
→ scale
→ optionally package as Business Blueprint
```

This is the **one canonical DRF opportunity workflow**.

`workflows/revenue-blueprint-factory.md` is compatibility/history only. RBS, P0–P6, Stage, Capital and Blueprint certification remain valid subordinate controls inside this workflow.

---

# 1. Governing principles

1. **DRF is David's Revenue Factory.** It discovers, researches, compares, selects, adapts, tests, improves, scales and optionally packages revenue-producing businesses.
2. **The business opportunity is the service/product/outcome and pain solved.** CRM, AI model, messaging provider, marketplace or delivery vendor is normally a replaceable component.
3. **Opportunity Score comes first.** It selects the business vehicle.
4. **Niche Score comes second.** It selects the target market.
5. **RBS comes after a Business × Niche is commercially designed.** It does not replace Opportunity Score or Niche Score.
6. **External Market Proof and DRF Proof are separate.** Existing operators can prove a category while DRF remains P0–P2.
7. **Copy before invent.** Study successful comparable operators and failures before designing from a blank page.
8. **Test only remaining uncertainty.** Do not spend money re-proving strong external facts.
9. **No score authorises capital.** Stage, Capital, Return and founder approval remain separate controls.
10. **Pending is not zero.** Never manufacture certainty from missing evidence.
11. **Source first; dashboard last.** Business truth lives in evidence/dossiers/registers, not HTML.
12. **KISSS.** Create only files/tests that buy a real decision, evidence or reusable operating value.

Canonical standards:

- Layer 1: `knowledge/guidelines/business-opportunity-scoring-framework.md`
- Niche selection: `knowledge/guidelines/niche-attractiveness-scoring-framework.md`
- RBS / DRF Proof / Stage / Capital / Return: `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md`
- Layer 3/V3 write-back: `knowledge/architecture/drf-v3-writeback-contract.md`

---

# 2. Supported modes

The same workflow supports three modes.

## A. Founder Intake

David supplies a rough opportunity, examples, links, files, voice notes, context or a niche hypothesis.

The agent must:

- preserve material founder context;
- research missing optional fields instead of asking avoidable intake questions;
- create/repair the governing Issue before substantive work;
- run the maximum defensible layer/stage from current evidence;
- continue Layer 1 → Layer 2 → Layer 3 automatically when the opportunity advances;
- stop only at a real evidence limit or founder decision boundary.

## B. Automated Discovery

A scheduled/manual scan finds a candidate.

The agent must:

- deduplicate before expensive research;
- favour evidence of real commercial activity over hype;
- run cheap Layer 1 first;
- keep rejected candidates outside the main portfolio;
- route qualified candidates through the same Layer 2 and Layer 3 path.

Operating contract: `workflows/drf-recurring-intelligence-loops.md`.

## C. Portfolio Refresh

An existing opportunity receives new evidence.

The agent must:

- read current canonical files first;
- preserve evidence/decision history;
- research only material changes;
- update only affected scores/conclusions;
- never reset DRF Proof because desk research changed;
- finish with a V3 reconciliation decision before closing the Issue.

---

# 3. Stage 0 — Control the work

Before substantive research:

1. Read root `AGENTS.md`.
2. Resolve/create the governing GitHub Issue.
3. For large work, resolve the Master + Stage hierarchy.
4. Search `businesses/OPPORTUNITIES.md`, `businesses/NICHES.md` and `businesses/` for duplicates.
5. Classify the input as one of:
   - new parent business opportunity;
   - new niche under an existing opportunity;
   - delivery/vendor variant;
   - commercial-model change;
   - evidence refresh;
   - duplicate.
6. Do not create a new parent because the platform/vendor changed unless buyer, pain/outcome or revenue model materially changed.

Canonical deployment unit:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

---

# LAYER 1 — Opportunity Discovery & Structural Selection

## Core question

> **Do we want this kind of business?**

## 4. Capture the business in money terms

Define:

- business opportunity name;
- service/product/outcome sold;
- pain solved;
- buyer, payer and user where different;
- revenue stream(s) and likely price/payment basis;
- recurring-revenue logic;
- why now;
- obvious fatal conditions;
- current delivery possibilities without locking a permanent vendor.

Use:

> **We sell `<outcome/offer>` to `<payer>` for `<price/basis>` because `<pain/value>`. Revenue arrives as `<upfront / recurring / usage / licence / commission / royalty / other>`.**

Do not score a vague technology idea with no payer/outcome.

## 5. Research External Market Proof

Find materially similar commercial operators where they exist.

### Positive evidence

Capture:

- multiple independent active operators;
- exact offers/promises;
- setup, recurring, usage, licence, commission, royalty and upsell pricing;
- acquisition channels/funnels;
- reviews, case studies and customer outcomes;
- public traction, longevity, expansion or repeat/retention signals;
- delivery/operating pattern.

### Counter-evidence

Capture:

- failed/closed operators;
- complaints and weak reviews;
- churn/refunds;
- low-margin/high-support patterns;
- legal/platform restrictions;
- concentration risk;
- advantages that do not transfer to DRF.

Assign **EMP0–EMP4 + EMP Confidence** using the Layer 1 standard.

Assess transferability to payer, pain, geography, price, acquisition channel, delivery architecture, DRF assets, capital and founder time.

External proof can be high while DRF Proof remains P0/P1.

## 6. Score structural attractiveness

Required outputs:

- Opportunity Score /100;
- MRR /10;
- AI Autonomy /100;
- Evidence Confidence /100%;
- Research Completeness /100%;
- EMP + confidence;
- Execution Velocity /100 where useful;
- time to sellable MVP / market / first revenue / first delivery where useful;
- verified facts, estimates, inference, DRF actuals and missing evidence;
- fatal risks;
- candidate niche families.

### Default decision thresholds

**ADVANCE**
- Opportunity Score ≥75;
- Evidence Confidence ≥60%;
- Research Completeness ≥70%;
- no fatal legal/acquisition/delivery/economics gate;
- EMP2+ or documented evidence-backed innovation rationale.

**GOLDEN OPPORTUNITY PRIORITY**
- Opportunity Score ≥85;
- strong MRR and/or AI leverage;
- adequate evidence;
- plausible customer-acquisition route and positive contribution.

**HOLD / RESEARCH**
- score 65–74; or
- Evidence Confidence <60%; or
- Research Completeness <70%; or
- a critical transferability question remains.

**REJECT / PARK**
- score <65 after adequate research; or
- no payer/revenue mechanism; or
- implausible acquisition/delivery economics; or
- fatal legal/platform/capital barrier; or
- materially better substitutes destroy viability.

Thresholds are founder policy and may be versioned/configured.

## 7. Layer 1 gate

### REJECT / PARK

Record reason/evidence; keep it out of the main portfolio by default; stop.

### HOLD / RESEARCH

Record the single largest uncertainty and minimum desk research/trigger needed; authorise $0 market capital; stop until the trigger/evidence changes.

### ADVANCE

Create/confirm the parent folder, update Layer 1 truth when defensible, and proceed automatically to Layer 2 unless a genuine founder boundary applies.

---

# LAYER 2 — Niche Selection & Commercial Underwriting

## Core question

> **For this attractive business, what exact market, offer, price, GTM and delivery model create the strongest business?**

## 8. Generate and score the niche matrix

Atomic unit:

`outcome/product × vertical × sub-niche × geography × ICP × trigger/problem`

Process:

1. Generate 20–50 plausible candidates where useful.
2. Remove obvious poor fits by payer, pain, volume and reachability.
3. Score strongest candidates using the canonical niche framework.
4. Research top candidates deeply enough to separate real fit from superficial fit.
5. Record niche-specific comparable operators and counter-evidence.
6. Identify customer channel/system-of-record reality.
7. Select one recommended beachhead.
8. Preserve the ranked alternatives.

Required output per meaningful niche:

- vertical;
- sub-niche/ICP;
- geography;
- trigger/problem;
- measurable outcome;
- Niche Score /100;
- Niche Evidence Confidence /100%;
- comparable proof;
- incumbent/alternative;
- customer channel;
- decision + next evidence.

A high Opportunity Score never justifies shotgun distribution.

## 9. Reverse-engineer proven operators

For the selected Business × Niche capture, where evidence exists:

- operator/business;
- niche/geography;
- offer/promise;
- setup/upfront price;
- recurring/usage/licence/commission/royalty price;
- upsells;
- acquisition channels/ad angles;
- funnel/CTA;
- onboarding/delivery pattern;
- traction/customer outcomes;
- complaints/failure modes;
- sources/dates;
- transferable and non-transferable elements.

Reverse-engineer the business-model pattern, not protected branding/content.

## 10. Design the market-ready offer

Required:

- offer name;
- measurable promise/outcome;
- buyer/payer/user;
- inclusions/exclusions;
- setup price;
- recurring price where appropriate;
- usage/licence/commission/royalty where applicable;
- optional upsells;
- commitment/cancellation/refund logic;
- customer ROI/value basis;
- price rationale from operators/customer economics;
- standard vs custom boundary.

## 11. Build the GTM plan

Required:

- beachhead ICP;
- first 10 customer path;
- first 100 only when defensible;
- warm assets/network;
- outbound;
- paid where relevant;
- SEO/content where relevant;
- partnerships/referrals;
- marketplaces/directories/classifieds where relevant;
- funnel stages and sales cycle;
- assumptions + evidence class;
- launch sequence;
- test budget;
- pass/fail/stop threshold;
- responsible owner + elapsed time.

Use channels customers and successful operators actually use.

## 12. Define delivery architecture

Use the smallest viable architecture:

`Outcome × Niche × Customer Channel × System of Record × Deterministic Automation × Agent Layer × Human Approval/Recovery`

Required:

- customer channel;
- system of record;
- deterministic automation;
- native AI where sufficient;
- external agent work only where judgement materially adds value;
- human approval/recovery;
- onboarding and sale-to-first-value flow;
- provider/AI cost;
- support/recovery burden;
- data/consent/compliance;
- failure/fallback rail;
- vendor-lock risk.

UAE service-business default unless niche evidence says otherwise:

`WhatsApp → CRM/system of record → deterministic lifecycle automation → native AI → external agent where needed`

## 13. Underwrite the selected Business × Niche

Calculate/document:

- RBS /100;
- EMP + confidence;
- DRF Proof P0–P6;
- Stage;
- GO / KILL / HOLD / RECYCLE;
- staged capital + use of funds;
- founder hours;
- downside/base/upside 12-month economics;
- revenue by stream;
- gross/contribution margin;
- CAC/payback where evidence allows;
- retention/repeat/churn assumptions;
- break-even/runway/maximum loss;
- top sensitivities;
- Next Proof.

### DRF Proof

- **P0 Captured** — payer/outcome/revenue logic captured.
- **P1 Desk Underwritten** — Layer 1 complete; niches ranked; operators studied; offer/price/GTM/delivery/RBS/economics defined.
- **P2 Backtested** — external/historical/comparable evidence replayed through DRF model; transferability/sensitivities/break-even/max loss documented.
- **P3 Forward Tested** — current-market test measured the largest remaining DRF-specific uncertainty against pre-written threshold.
- **P4 Revenue Proven** — genuine payment collected, value delivered/activated, actual cost/outcome recorded.
- **P5 Repeatable** — materially same offer acquired/delivered across independent customers/cohorts/cycles with positive contribution and bounded founder effort.
- **P6 Scale Proven / Blueprint Certified** — acquisition, delivery, margin, retention/capacity hold at meaningful volume and another competent operator can reproduce the system.

Strong EMP supports P1/P2 but cannot award P3–P6.

## 14. Layer 2 gate

| Stage | Typical proof | Action |
|---|---:|---|
| REJECT | Any | Stop and preserve reason/evidence |
| RESEARCH | P0–P1 | Remove one remaining desk uncertainty |
| TEST | P1–P2 | Test largest current-market uncertainty |
| PILOT | P3 | Complete bounded paid delivery |
| FUND | P4 | Build repeatability |
| SCALE | P5 | Increase acquisition/capacity |
| BLUEPRINT | P6 | Package/distribute proven operating system |

If EMP3/EMP4 proves the broad category, test only the remaining DRF-specific uncertainty: local price acceptance, CAC, onboarding effort, delivery quality, contribution, repeatability or similar.

---

# LAYER 3 — Structured Factory Output + V3 Write-Back

## Core question

> **Can this opportunity be represented as one complete, comparable and executable business case — and has its current founder state reached V3?**

Layer 3 is not another score. It synthesises Layers 1 and 2 and completes the repository write-back.

## 15. Required Layer 3 dossier

Every qualified opportunity produces/updates one founder-readable current dossier containing, as applicable to its stage:

1. executive opportunity summary;
2. business/service/outcome and pain;
3. buyer/payer/user;
4. revenue streams/money model;
5. successful comparable operators;
6. EMP + confidence + transferability;
7. counter-evidence/failure modes;
8. Opportunity Score;
9. MRR;
10. AI Autonomy;
11. Evidence Confidence;
12. Research Completeness;
13. Execution Velocity/time estimates where useful;
14. ranked niches;
15. best niche + Niche Score/confidence;
16. offer;
17. pricing;
18. GTM/customer acquisition;
19. delivery architecture;
20. RBS;
21. Return Profile;
22. DRF Proof;
23. Stage/decision;
24. Capital/use of funds;
25. Next Proof;
26. source/evidence register;
27. dossier readiness;
28. Blueprint packaging readiness.

Canonical template:

`knowledge/templates/business-opportunity-research.md`

Close-out template:

`knowledge/templates/drf-v3-closeout-checklist.md`

## 16. Mandatory source-first register write-back

After the current source/dossier is correct, update only the specialised registers whose field families changed:

### `businesses/OPPORTUNITIES.md`

Update when Layer 1 structural metrics/decision changed.

### `businesses/NICHES.md`

Update when ranked Business × Niche evidence/score/selection changed. Preserve one-to-many alternatives.

### `businesses/INVESTMENT-READINESS.md`

Treat as a supporting RBS/proof/capital migration register. Update only when those fields still rely on it and no newer current dossier supersedes them.

### `businesses/PORTFOLIO-V3.md` — FINAL JOINED WRITE

Review the V3 founder row after every material opportunity/niche update.

Choose exactly one:

**A. V3 FIELDS CHANGED**
- update `PORTFOLIO-V3.md` **last**;
- change only evidence-justified fields.

**B. V3 NO-FIELD-CHANGE**
- do not manufacture a no-op portfolio edit;
- add an evidence-backed row to `businesses/V3-RECONCILIATIONS.md`.

A material Issue/PR is not complete until A or B is recorded and validation passes.

Full contract:

`knowledge/architecture/drf-v3-writeback-contract.md`

**Never update Dashboard HTML as the business-data write path.**

## 17. V3 reconciliation examples

### Field changed

New paid delivery proves P4 and changes Stage/Return/Next Proof:

```text
live evidence
→ current dossier
→ supporting register(s)
→ PORTFOLIO-V3 last
→ dashboard validation
```

### No field changed

A channel/provider becomes better documented but the parent Opportunity Score/RBS/Proof/Stage remains unchanged:

```text
current research
→ confirm parent field boundary
→ V3-RECONCILIATIONS = NO FIELD CHANGE
→ validation
```

Do not inflate scores simply because evidence quantity increased.

---

# 18. File creation by stage

Create only what the current stage needs.

## Rejected/parked discovery candidate

- Issue/discovery log;
- concise reason/evidence;
- no parent folder by default.

## Advanced Layer 1

```text
businesses/<opportunity>/
├── README.md
└── RESEARCH.md
```

## Layer 2 / P1–P2

Add only when useful:

```text
├── CURRENT.md
├── V3-BUSINESS-CASE-*.md
├── financial-model.xlsx
└── investment-memo.md
```

## P3–P6

Add real evidence as it exists:

```text
├── evidence/
└── blueprint.md
```

Only P6 may be labelled Blueprint Certified without qualification.

---

# 19. Missing-value and evidence rules

Use deliberately:

- **Pending** — required work not completed;
- **Unknown** — investigated but not currently knowable;
- **Not applicable** — field does not apply;
- **Needs more research** — insufficient evidence for responsible estimate;
- **Conflict** — current authoritative sources materially disagree;
- **0** — verified numerical zero only.

Separate:

- verified fact;
- credible estimate;
- inference;
- EMP;
- DRF actual;
- missing evidence.

Never invent scores, customers, revenue, traffic, prices, proof, deployment or tests.

---

# 20. Completion rules

## Founder Intake complete when

- maximum defensible layer/stage is reached;
- Reject/Hold/Advance is explicit;
- if advanced, Layers 2 and 3 are completed without avoidable pause;
- paid/public/legal/capital action respects founder boundary;
- V3 reconciliation A or B is complete;
- validation passes.

## Discovery complete when

- duplicate detection ran;
- Layer 1 screen used configured thresholds;
- rejected candidates stayed outside main portfolio;
- qualified candidates completed applicable Layer 2/3 work;
- V3 reconciliation is complete for any new/changed parent;
- validation passes.

## Portfolio Refresh complete when

- current canonical files were read first;
- material new evidence/counter-evidence was checked;
- only affected conclusions changed;
- evidence history was preserved;
- DRF Proof was not reset;
- freshness/Next Proof were reviewed;
- V3 reconciliation A or B is complete;
- validation passes.

---

# 21. Founder decision boundaries

Escalate only for genuine business decisions such as:

- material recurring cost/capital release;
- paid market test;
- material pricing/guarantee change;
- destructive data change;
- legal/regulatory commitment;
- security/authentication model change;
- irreversible architecture;
- public earnings/success claim;
- conflicting high-quality evidence requiring founder judgement.

Do not escalate routine research, scoring, niche generation, reversible file updates or conclusions already governed by this workflow.

---

# 22. Required final run summary

Every substantive run ends with:

```text
MODE
Founder Intake / Discovery / Refresh

IDENTITY
Opportunity ID / folder / date / evidence freshness

LAYER 1
Opportunity Score
MRR
AI Autonomy
Evidence Confidence
Research Completeness
EMP + confidence
Decision

LAYER 2
Best niche
Niche Score + confidence
Offer
Price
GTM
Delivery architecture
RBS
DRF Proof
Stage
Capital
Return headline
Next Proof

LAYER 3
Current dossier/source path
Dossier readiness
Blueprint readiness
Risks/counter-evidence

V3 RECONCILIATION
Sources changed
Specialised registers changed / none
PORTFOLIO-V3: UPDATED / NO FIELD CHANGE
Reconciliation ledger path when applicable
Evidence freshness reviewed
Next Proof reviewed
Validation

FINAL
GO / KILL / HOLD / RECYCLE
One next action
```

## Final outcome

One operating path from evidence to founder decision:

`research truth → Layer 1 → Layer 2 → Layer 3 business case → V3 reconciliation → Dashboard V3 → execution`.
