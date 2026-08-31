# DRF Opportunity Factory Workflow

**Status:** Canonical end-to-end workflow  
**Version:** 1.0  
**Date:** 31 August 2026  
**Master programme:** #77  
**Governing stage:** [77.2] #79

## Objective

Turn a raw business opportunity, discovered market signal or existing DRF portfolio business into one clear, evidence-backed outcome:

```text
REJECT / PARK
HOLD / RESEARCH
ADVANCE TO COMMERCIAL UNDERWRITING
EXECUTE THE NEXT PROOF STAGE
SCALE
OPTIONALLY PACKAGE AS A BUSINESS BLUEPRINT
```

This is the **one canonical DRF opportunity workflow**.

It preserves the three distinct questions David needs answered:

```text
LAYER 1 — DO WE WANT THIS KIND OF BUSINESS?
Business Opportunity + Opportunity Score + MRR + AI Autonomy
+ Evidence Confidence + Research Completeness + External Market Proof

LAYER 2 — WHERE, HOW AND AT WHAT ECONOMICS SHOULD IT OPERATE?
Ranked niches + Niche Score + proven operators + offer + pricing
+ GTM + delivery architecture + RBS + economics + DRF Proof + Stage + Capital

LAYER 3 — CAN WE REPRESENT IT AS ONE COMPLETE, COMPARABLE BUSINESS CASE?
Structured founder dossier + canonical portfolio data + next proof plan
```

The workflow is deliberately one system rather than three competing workflows.

---

# 1. Governing principles

1. **DRF is David's Revenue Factory.** It discovers, researches, compares, selects, adapts, tests, improves, scales and optionally packages revenue-producing businesses.
2. **The business opportunity is the service/product/outcome and pain solved.** A vendor, CRM, AI model, messaging platform or delivery tool is normally a replaceable component.
3. **Opportunity Score comes first.** It selects the business vehicle.
4. **Niche Score comes second.** It selects the target market.
5. **RBS comes after a Business × Niche is commercially designed.** It does not replace Opportunity Score or Niche Score.
6. **External Market Proof and DRF Proof are separate.** Existing successful operators can prove the category while DRF remains P0–P2.
7. **Copy before invent.** Find, verify and reverse-engineer successful operators before designing from a blank page.
8. **Counter-evidence is mandatory.** Study failures, weak reviews, churn, margin pressure, platform dependence and non-transferable advantages.
9. **Test only remaining uncertainty.** Do not spend money re-proving facts already strongly established by current market evidence.
10. **No score guarantees success or authorises capital.** Stage, capital and return controls remain separate.
11. **Pending is not zero.** Never turn unknown or missing data into false numerical certainty.
12. **KISSS.** Create only the files and tests that buy a real decision or evidence.

Canonical scoring standards:

- Layer 1: `knowledge/guidelines/business-opportunity-scoring-framework.md`
- Niche selection: `knowledge/guidelines/niche-attractiveness-scoring-framework.md`
- Business × Niche underwriting/proof: `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md`

---

# 2. Supported operating modes

The same workflow supports three modes.

## Mode A — Founder Intake

David supplies a rough opportunity, context, examples, links, transcripts and optionally a niche or operator to study.

The agent must:

- preserve all material founder context;
- research missing fields rather than ask avoidable intake questions;
- create or repair the governing Issue before substantive work;
- run the maximum defensible workflow stage from current evidence;
- stop only at a real gate, founder decision boundary or evidence limit.

## Mode B — Automated Discovery

A future scheduled agent scans the market for new or emerging opportunities.

The agent must:

- detect duplicates before expensive research;
- favour signals of real commercial activity over hype;
- run a cheap Layer 1 screen first;
- reject weak candidates without creating portfolio clutter;
- advance only candidates meeting the configured threshold;
- use the same Layer 2 and Layer 3 logic as founder intake.

The discovery source/cadence and rejection log are specified in [77.5] #82. This workflow defines the common processing contract.

## Mode C — Portfolio Refresh

A future scheduled or manual agent reassesses an existing DRF opportunity.

The agent must:

- start from current canonical files rather than rebuild from memory;
- preserve previous evidence and decisions;
- research only material market changes;
- update only scores/conclusions affected by new evidence;
- never reset DRF Proof because a report was refreshed;
- avoid duplicate businesses caused by new delivery vendors or platform variants.

The refresh cadence/staleness contract is specified in [77.5] #82.

---

# 3. Input contract

Use the information supplied. Missing optional fields do not block research.

```text
MODE
Founder Intake / Automated Discovery / Portfolio Refresh

BUSINESS OPPORTUNITY / ROUGH IDEA
<what appears to be sold or the market signal discovered>

FOUNDER CONTEXT
<why it matters, existing thinking, assets, constraints, desired outcome>

SOURCE MATERIAL
<links, transcripts, examples, screenshots, files, market posts, operator names>

OPTIONAL NICHE HYPOTHESIS
<vertical, sub-niche, geography, ICP, trigger/problem>

OPTIONAL OPERATORS TO STUDY
<businesses, founders, products or marketplaces>

CONSTRAINTS
<capital, geography, ethics, legal, time, platform, founder involvement>
```

The agent must not silently discard contradictory founder input. Record the conflict, research it and state the conclusion.

---

# 4. Stage 0 — Control the work before researching

Every substantive run starts with repository control.

## Checklist

1. Read `AGENTS.md`.
2. Resolve the Master/Stage Issue hierarchy when the work belongs to a large programme.
3. Create or repair the controlling Issue so it contains:
   - objective;
   - founder context;
   - scope/exclusions;
   - implementation checklist;
   - verification checklist;
   - final outcome/acceptance criteria;
   - dependencies where relevant.
4. Search `businesses/OPPORTUNITIES.md`, `businesses/NICHES.md` and `businesses/` for an existing equivalent opportunity.
5. Decide whether the input is:
   - new business opportunity;
   - new niche beneath an existing opportunity;
   - delivery-rail/vendor change;
   - commercial-model change;
   - evidence refresh;
   - duplicate.
6. Do not create a new business folder when the underlying service/outcome already exists.

## Duplicate rule

A different platform does not automatically create a different business.

Example:

```text
Revenue Recovery delivered through HighLevel
Revenue Recovery delivered through HubSpot
Revenue Recovery delivered through another CRM
```

These are normally delivery variants of the same opportunity unless the buyer, outcome or revenue model is materially different.

---

# LAYER 1 — Opportunity Discovery & Structural Selection

## Core question

> **Do we want this kind of business?**

Layer 1 finds and compares business/service/outcome vehicles before committing to deep niche design or capital work.

---

# 5. Layer 1A — Capture the business in money terms

Define:

- business opportunity name;
- service/product/outcome sold;
- pain/problem solved;
- buyer, payer and user where different;
- core revenue stream(s);
- likely price/payment basis;
- recurring-revenue logic;
- why now;
- obvious fatal conditions;
- current delivery possibilities without selecting a permanent vendor.

Use this one-line format:

> **We sell `<measurable outcome/offer>` to `<payer>` for `<price/basis>` because `<pain/value>`. Revenue arrives as `<upfront / recurring / usage / licence / commission / royalty / other>`.**

Do not score a vague technology idea with no payer or outcome.

---

# 6. Layer 1B — Research External Market Proof

Before inventing the offer, find materially similar successful operators where they exist.

## Positive evidence

Capture:

- multiple independent active operators;
- exact offers/promises;
- setup, recurring, usage, licence, commission, royalty and upsell pricing;
- current advertising and acquisition channels;
- funnels and calls to action;
- reviews, case studies and customer outcomes;
- public customer counts, revenue, transactions, marketplace sales indicators, hiring or expansion;
- longevity and repeat/retention evidence;
- delivery architecture and operating pattern.

## Negative evidence

Capture:

- failed/closed operators;
- complaints and weak reviews;
- churn/refund signals;
- low-margin or high-support patterns;
- legal/platform restrictions;
- customer concentration;
- dependency on a unique founder, brand, audience, dataset, capital base or geography.

## Assign External Market Proof

Use EMP0–EMP4 and EMP Confidence from the Layer 1 scoring framework.

Do not infer category proof from one viral post or one exceptional operator.

## Transferability

Assess whether the proven pattern transfers to:

- target payer;
- pain/trigger;
- geography/culture/regulation;
- proposed price;
- acquisition channel;
- delivery architecture;
- DRF/Talent Bridge/iMPLEMENTAi assets;
- available capital and founder time.

External Market Proof can be high while DRF Proof remains P0 or P1.

---

# 7. Layer 1C — Research and score structural attractiveness

Research every factor in the canonical Opportunity Score.

Required outputs:

- **Opportunity Score /100**;
- **MRR /10**;
- **AI Autonomy /100**;
- **Evidence Confidence /100%**;
- **Research Completeness /100%**;
- **External Market Proof level + confidence**;
- **Execution Velocity /100** where sequencing matters;
- time to build/sellable MVP;
- time to market;
- time to first revenue;
- time to deliver/onboard one customer;
- verified evidence, credible estimates, inference, DRF actuals and missing evidence;
- fatal risks;
- candidate niche families for Layer 2.

## Evidence rule

External success should strengthen the relevant structural factors. Do not add a duplicate EMP bonus to the 100-point score.

## Layer 1 decision thresholds

Use configured thresholds when supplied. Otherwise use the canonical defaults:

### ADVANCE

- Opportunity Score **≥75**;
- Evidence Confidence **≥60%**;
- Research Completeness **≥70%**;
- no fatal legal, acquisition, delivery or economics gate;
- EMP2+ **or** a documented evidence-backed innovation rationale.

### GOLDEN OPPORTUNITY PRIORITY

- Opportunity Score **≥85**;
- strong MRR and/or AI leverage;
- adequate evidence;
- a plausible route to customers and positive contribution.

### HOLD / RESEARCH

- Opportunity Score **65–74**; or
- Evidence Confidence below 60%; or
- Research Completeness below 70%; or
- a critical transferability question remains.

### REJECT / PARK

- Opportunity Score below 65 after adequate research; or
- no identifiable payer/revenue mechanism; or
- implausible acquisition; or
- delivery cost likely exceeds value; or
- fatal legal/platform/capital barrier; or
- materially better substitutes make the offer non-viable.

Thresholds are founder policy and must remain configurable. Record the version/thresholds used.

---

# 8. Layer 1 Gate

Choose one:

## REJECT / PARK

- record the reason and evidence;
- do not add it to the main portfolio;
- do not create a full business folder unless history/lesson value justifies it;
- stop the workflow.

## HOLD / RESEARCH

- record the single largest uncertainty;
- define the minimum desk research needed;
- set a trigger/date where appropriate;
- authorise $0 market capital;
- stop until the trigger/evidence changes.

## ADVANCE

- create or confirm the business folder;
- add/update the Layer 1 portfolio only when the score is defensible;
- proceed automatically into Layer 2 unless a genuine founder boundary applies.

## Layer 1 output card

```text
BUSINESS OPPORTUNITY
<name + one-sentence money model>

LAYER 1
Opportunity Score: __/100
MRR: __/10
AI Autonomy: __/100
Evidence Confidence: __%
Research Completeness: __%
External Market Proof: EMP_ <name> · Confidence __%
Execution Velocity: __/100 or Not assessed

DECISION
Reject / Hold / Advance
Reason: <one sentence>
Next action: <one bounded action>
```

---

# LAYER 2 — Niche Selection & Commercial Underwriting

## Core question

> **For this attractive business, what exact market, offer, price, GTM and delivery model create the strongest business?**

Layer 2 converts a structurally attractive opportunity into a specific Business × Niche commercial case.

---

# 9. Layer 2A — Generate and score the niche matrix

Use the atomic unit:

`outcome/product × vertical × sub-niche × geography × ICP × trigger/problem`

## Process

1. Generate 20–50 plausible vertical/sub-niche candidates where useful.
2. Remove obvious poor fits using payer, pain, market volume and reachability.
3. Score the strongest candidates with the canonical Niche framework.
4. Research the top candidates deeply enough to separate real fit from superficial fit.
5. Record niche-specific comparable operators and counter-evidence.
6. Identify the dominant customer channel and current system-of-record reality.
7. Select one recommended beachhead niche.
8. Preserve the ranked list for later expansion.

## Required outputs

- Vertical;
- Sub-niche / ICP;
- Geography;
- Trigger/problem;
- Measurable outcome;
- Niche Score /100;
- Niche Evidence Confidence /100%;
- niche-specific comparable proof;
- current alternative/system;
- customer channel;
- decision and next evidence.

A high Opportunity Score never justifies shotgun distribution.

---

# 10. Layer 2B — Reverse-engineer proven operators

For the selected Business × Niche, study several successful comparable businesses where evidence exists.

## Operator evidence table

Capture:

- operator/business;
- target niche/geography;
- exact offer and promise;
- setup/upfront price;
- recurring/usage/licence/commission/royalty price;
- upsells;
- acquisition channels and visible ad angles;
- funnel/CTA;
- onboarding and delivery pattern;
- proof/traction;
- customer outcomes;
- weaknesses/complaints/failure modes;
- sources and dates;
- what appears transferable;
- what appears non-transferable.

Separate observed fact from inference.

## Extraction rule

Reverse-engineer the business-model pattern, not protected branding/content.

The goal is:

```text
what already sells
+ why customers buy
+ how it is priced
+ how customers are acquired
+ how value is delivered
+ where operators fail
→ recommended DRF adaptation
```

---

# 11. Layer 2C — Design the market-ready offer

Produce the recommended offer for the selected niche.

Required:

- offer name;
- measurable promise/outcome;
- buyer/payer/user;
- inclusions;
- exclusions/boundaries;
- setup/implementation price;
- recurring monthly/annual price where appropriate;
- usage/licence/commission/royalty structure where appropriate;
- optional upsells;
- commitment/cancellation/refund logic;
- customer ROI/value basis;
- why the price is credible from operator and customer evidence;
- what is standardised versus custom.

Do not hide the money behind vague words such as “monetisation layer”.

---

# 12. Layer 2D — Build the go-to-market plan

Required:

- beachhead ICP;
- first 10 customer acquisition path;
- first 100 customer path where defensible;
- warm-network/customer assets available;
- outbound strategy;
- paid acquisition where relevant;
- SEO/content where relevant;
- partnerships/referrals where relevant;
- marketplaces/directories/classifieds where relevant;
- funnel stages;
- sales cycle;
- conversion assumptions and evidence classes;
- launch sequence;
- test budget;
- pass/fail/stop thresholds;
- responsible owner and elapsed time.

Use the channels customers and successful operators actually use.

---

# 13. Layer 2E — Define delivery architecture

Define the smallest viable architecture:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

Required:

- customer channel;
- system of record;
- deterministic automation;
- native AI where sufficient;
- external agent work where judgement materially adds value;
- human work and approval points;
- onboarding flow;
- sale-to-first-value flow;
- direct platform/provider/AI cost;
- support/recovery burden;
- data ownership, consent and compliance;
- failure/recovery path;
- replacement/fallback rail;
- vendor-lock risk.

For UAE service businesses, default to:

`WhatsApp → CRM/system of record → deterministic lifecycle automation → native AI → external agent where needed`

Use another channel when niche evidence supports it.

---

# 14. Layer 2F — Underwrite Business × Niche

Calculate and document:

- Revenue Blueprint Score /100;
- External Market Proof and EMP Confidence;
- DRF Proof P0–P6;
- Stage;
- decision: GO / KILL / HOLD / RECYCLE;
- startup/staged capital;
- exact use of funds;
- founder hours;
- downside/base/upside 12-month economics;
- revenue by stream;
- gross and contribution margin;
- CAC and payback where evidence allows;
- retention/repeat/churn assumptions;
- break-even;
- runway and maximum loss;
- top three sensitivities;
- next proof milestone.

## DRF Proof mapping

### P0 — Captured

Business opportunity, payer, outcome and revenue logic captured.

### P1 — Desk Underwritten

Layer 1 complete; niches ranked; operators studied; selected offer, price, GTM, delivery, initial RBS and financial model complete.

### P2 — Backtested

External/comparable/historical evidence replayed through the DRF model; transferability, sensitivities, break-even and maximum loss documented.

### P3 — Forward Tested

A current-market test measures the largest remaining DRF-specific demand, price or channel uncertainty against a pre-written threshold.

### P4 — Revenue Proven

DRF collects genuine payment, delivers/activates value and records actual cost/outcome.

### P5 — Repeatable

The materially same offer is acquired/delivered across independent customers/cohorts/cycles with positive contribution and bounded founder effort.

### P6 — Scale Proven / Blueprint Certified

Acquisition, delivery, margin, retention and capacity hold at meaningful volume and another competent operator can reproduce the system.

Strong external proof supports P1/P2 but cannot award P3–P6.

---

# 15. Layer 2 Gate

Choose the current Stage:

| Stage | Typical DRF Proof | Action |
|---|---:|---|
| REJECT | Any | Stop and preserve reason/evidence |
| RESEARCH | P0–P1 | Remove one remaining desk uncertainty |
| TEST | P1–P2 | Test the largest remaining current-market uncertainty |
| PILOT | P3 | Complete bounded paid delivery |
| FUND | P4 | Build repeatability |
| SCALE | P5 | Increase acquisition/capacity |
| BLUEPRINT | P6 | Package/distribute the proven operating system |

## Test-only-what-remains rule

If EMP3/EMP4 strongly proves the broad category, do not run a vague category validation test.

Test the remaining DRF-specific uncertainty, for example:

- UAE HVAC response to the exact audit/pilot offer;
- price acceptance at AED X;
- ability to acquire accounts below target CAC;
- onboarding time on the chosen CRM;
- recovered gross profit after provider/support costs;
- repeatability without founder rescue.

---

# LAYER 3 — Structured Factory Output

## Core question

> **Can this opportunity now be represented as one complete, comparable business case?**

Layer 3 is not another score. It is the structured synthesis of Layer 1 and Layer 2.

---

# 16. Required Layer 3 dossier

Every qualified opportunity must produce/update one founder-readable dossier containing:

1. Executive opportunity summary.
2. Business/service/outcome and pain solved.
3. Buyer, payer and user.
4. Revenue streams and money model.
5. Successful comparable operators.
6. External Market Proof + confidence + transferability.
7. Counter-evidence and known failure modes.
8. Opportunity Score.
9. MRR potential.
10. AI Autonomy.
11. Evidence Confidence.
12. Research Completeness.
13. Execution Velocity/time estimates where useful.
14. Ranked niches.
15. Best niche + Niche Score + confidence.
16. Recommended offer.
17. Recommended pricing.
18. GTM/customer acquisition.
19. Delivery architecture.
20. Revenue Blueprint Score.
21. DRF Proof.
22. Stage and decision.
23. Capital/use of funds.
24. Downside/base/upside Return Profile.
25. Next proof milestone.
26. Source/evidence register.
27. Blueprint packaging readiness.

[77.3] #80 owns the exact reusable dossier/template implementation. Until that stage is merged, use the current business research templates and preserve all fields above.

---

# 17. Canonical portfolio updates

Update canonical registers only when evidence justifies the change.

## `businesses/OPPORTUNITIES.md`

Update when Layer 1 has a defensible opportunity score and decision.

Preserve:

- Opportunity Score;
- MRR;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- External Market Proof;
- best niche/Niche Score when known;
- current judgement and next action.

Do not put `Δ` or `Rank Δ` back into the future primary V3 table.

## `businesses/NICHES.md`

Update when one or more Business × Niche rows have defensible scores/evidence.

Do not hard-code one niche into the parent opportunity. Preserve the ranked relationship.

## `businesses/INVESTMENT-READINESS.md`

Update when the selected Business × Niche has a defensible RBS, DRF Proof, Stage, Capital/Return status and Next Proof.

Do not display Pending as zero.

[77.4] #81 owns the final stable V3 data contract.

---

# 18. File creation by stage

Create only what the current stage needs.

## Rejected/parked discovery candidate

- controlling Issue or future discovery log;
- concise reason/evidence;
- no business folder by default.

## Advanced Layer 1 opportunity

```text
businesses/<opportunity>/
├── README.md       # founder summary / current decision
└── RESEARCH.md     # source-backed business research
```

## P1/P2 underwritten opportunity

Add only when needed:

```text
├── financial-model.xlsx
└── investment-memo.md
```

## P3–P6 execution

Add actual evidence as it exists:

```text
├── evidence/
└── blueprint.md
```

A Blueprint file may begin experimentally when useful, but only P6 may be labelled Blueprint Certified without qualification.

Do not create empty ornamental files/folders.

---

# 19. Missing-value and evidence rules

Use these values deliberately:

- **Pending** — required work has not yet been completed.
- **Unknown** — investigated but not currently knowable.
- **Not applicable** — the field does not apply to this model.
- **0** — verified numerical zero only.
- **Needs more research** — evidence is insufficient for a responsible estimate.

Separate:

- verified fact;
- credible estimate;
- inference;
- External Market Proof;
- DRF actual;
- missing evidence.

Never invent scores, customers, revenue, traffic, prices, proof, deployment or tests.

---

# 20. Mode-specific completion rules

## Founder Intake complete when

- the maximum defensible stage has been reached from current evidence;
- Reject/Hold/Advance is explicit;
- if advanced, Layer 2 and Layer 3 are completed without avoidable pause;
- live capital/market action is not taken without required approval;
- files/registers are updated and verified.

## Automated Discovery complete when

- duplicate detection ran;
- Layer 1 screen ran using the configured threshold version;
- rejected candidates were recorded outside the main portfolio;
- qualified candidates entered the same Layer 2/Layer 3 workflow;
- only qualified opportunities were added to the portfolio.

## Portfolio Refresh complete when

- current canonical files were read first;
- material new evidence and counter-evidence were checked;
- only affected scores/conclusions changed;
- evidence history was preserved;
- DRF Proof was not reset;
- next action and freshness date were updated.

---

# 21. Founder decision boundaries

Escalate to David only for a genuine decision, including:

- material recurring cost;
- capital release or paid market test;
- material pricing/guarantee change;
- destructive data change;
- legal/regulatory commitment;
- security/authentication model change;
- irreversible architecture;
- public earnings/success claim;
- conflicting high-quality evidence requiring founder judgement.

Do not escalate routine research, score calculation, niche generation, file updates, reversible implementation details or conclusions already governed by the workflow.

---

# 22. Automation-compatible output contract

Every run should end with a machine/human-readable summary containing:

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
External Market Proof + confidence
Execution Velocity where assessed
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
Dossier path
Registers updated
Evidence sources
Risks/counter-evidence
Blueprint readiness

FINAL
GO / KILL / HOLD / RECYCLE
One next action
```

The same contract is used by founder intake, discovery and refresh modes. Future automation must not invent a separate scoring system.

---

# 23. Verification checklist

Before closing the controlling Issue:

- [ ] Founder context and all material requirements are captured.
- [ ] Duplicate/business-versus-vendor classification is correct.
- [ ] Layer 1 scores recalculate correctly and sum/derive correctly.
- [ ] External Market Proof sources and counter-evidence are traceable.
- [ ] Niche Score remains separate from Opportunity Score.
- [ ] RBS remains separate from both.
- [ ] External Market Proof and DRF Proof are not conflated.
- [ ] Offer, pricing, GTM and delivery recommendations are evidence-backed.
- [ ] Financial assumptions are labelled and formulas are correct.
- [ ] Unknowns remain Pending/Unknown rather than false zero.
- [ ] Canonical registers and business files agree.
- [ ] Only intended files changed.
- [ ] Required repository checks pass.
- [ ] One next action and stop condition are explicit.
- [ ] The Issue checklist and acceptance criteria are current.

---

# 24. Workflow outcome

A successful run does not necessarily produce a launched business.

It produces the **right next decision** with the smallest justified expenditure:

```text
weak opportunity → reject cheaply
promising but uncertain → hold for one evidence gap
strong opportunity → choose the best niche
proven market pattern → adapt offer/price/GTM/delivery
underwritten Business × Niche → test only remaining uncertainty
paid successful delivery → build repeatability
repeatable business → scale
scale-proven system → optionally package as a Blueprint
```

> **DRF finds and builds revenue-producing businesses. The Blueprint is an optional product of a sufficiently evidenced business—not the definition of the factory.**
