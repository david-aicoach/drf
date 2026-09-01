# DRF Layer 3 — Business Case Output Contract

**Owner:** `skills/drf-opportunity-factory/SKILL.md`  
**Purpose:** define the founder-readable current dossier for a qualified opportunity.

This is a **reference/output contract inside the Skill**, not a global template. Create only sections justified by the current stage/evidence, but preserve the complete decision stack.

## Required header

```text
Business Opportunity:
Opportunity ID / folder:
Current date / evidence cutoff:
Current dossier status:
Governing Issue:
```

## Executive founder decision
State in plain language:
- what we sell;
- who pays;
- why they pay;
- current price/revenue model;
- current recommended niche;
- current decision: reject/hold/test/pilot/fund/scale/blueprint;
- one Next Proof;
- what is externally proven vs what DRF still has to prove.

## 1. Business / money model
Capture:
- measurable outcome/pain solved;
- buyer/payer/user;
- setup/upfront revenue;
- recurring/usage/licence/commission/royalty/upsell streams;
- why revenue repeats;
- why now;
- obvious fatal conditions.

Use one sales-language sentence:

> We sell `<outcome>` to `<payer>` for `<price/basis>` because `<pain/value>`. Revenue arrives as `<types>`.

## 2. Layer 1 structural assessment
Include:
- Opportunity Score /100 and factor rationale;
- MRR /10;
- AI Autonomy /100;
- Evidence Confidence /100%;
- Research Completeness /100%;
- External Market Proof + EMP Confidence;
- execution velocity/time-to-market/revenue where useful;
- Layer 1 decision.

## 3. External Market Proof / proven operators
For multiple comparables where practical, capture:

| Operator | Niche/geography | Offer | Price/revenue model | Acquisition | Customer/traction/repeat evidence | Delivery pattern | Transferability limits | Source/date |
|---|---|---|---|---|---|---|---|---|

Then state:
- EMP level/confidence;
- what the market already proves;
- what does **not** transfer automatically to DRF.

## 4. Counter-evidence / failures
Capture failed/closed operators, complaints, weak reviews, churn/refunds, low-margin/high-support patterns, incumbent substitution, platform/legal restrictions and founder/brand/data advantages that may not transfer.

## 5. Ranked niche options
Preserve the serious alternatives, not only the winner.

| Rank | Business × Niche | Niche Score | Confidence | Comparable proof | Core pain/value | Decision / reason |
|---:|---|---:|---:|---|---|---|

State recommended beachhead + runner-up and why.

## 6. Market-ready offer
Define:
- promise/outcome;
- inclusions;
- exclusions/boundaries;
- setup/onboarding;
- core recurring/usage service;
- optional upsells;
- success metric;
- guarantee only if founder-approved and evidence supports it.

## 7. Pricing and revenue streams
Show exact current proposal or evidence-backed range:

| Revenue stream | Price/basis | Recurring? | Evidence/basis | Status |
|---|---|---|---|---|

Separate observed competitor pricing, credible DRF estimate and DRF actual.

## 8. Go-to-market / customer acquisition
Include where defensible:
- ICP/decision-maker;
- prospect-source/listability;
- first-10-customer route;
- first-100 route;
- outbound / paid / SEO-content / partnerships / referrals / directories / marketplaces as relevant;
- funnel stages;
- expected sales cycle;
- CAC assumption/status;
- pass/fail thresholds for the next test.

## 9. Delivery architecture
Use:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

Specify:
- deterministic workflow/state ownership;
- AI/agent responsibilities;
- human exceptions/approvals;
- replaceable vendor rails;
- onboarding/time to value;
- expected support/recovery burden;
- material security/privacy/data dependencies.

## 10. Commercial underwriting
Include:
- RBS /100 + factor rationale;
- downside/base/upside Return Profile;
- startup/test capital;
- fully loaded delivery/acquisition assumptions;
- contribution/margin status;
- maximum downside for next stage;
- assumptions vs DRF actuals.

Use the Skill's financial-model asset only when materially useful.

## 11. Proof / Stage / Capital
State separately:
- EMP + confidence;
- DRF Proof P0–P6;
- Stage;
- Capital ceiling/use;
- why current evidence permits that state and no more.

Documentation alone never raises DRF Proof.

## 12. Next Proof
Define exactly one largest remaining DRF-specific uncertainty and one bounded proof action:
- action;
- target sample/market;
- pre-committed price where applicable;
- metric(s);
- pass threshold;
- fail/stop condition;
- maximum time/capital;
- founder approval boundary.

## 13. Risks and kill/recycle triggers
List top risks across demand, pricing, acquisition, delivery, AI reliability/cost, support burden, regulation/data, platform concentration, incumbent substitution, margin and founder dependency.

For each material risk state mitigation and the evidence that would kill/recycle the thesis.

## 14. Source register
Every material external claim should have source + date + evidence label/quality. Keep long source notes in the opportunity/research evidence files where appropriate; the dossier needs enough provenance for a fresh agent/founder to verify the conclusion.

## 15. Readiness
State:
- Dossier Readiness;
- Blueprint Readiness;
- Evidence Freshness;
- remaining missing/conflicting fields.

`Pending`, `Unknown`, `Not applicable` and verified zero are distinct.

## 16. Canonical write-back
After the dossier/source truth is updated:
- update `businesses/OPPORTUNITIES.md` if Layer 1 fields changed;
- update `businesses/NICHES.md` if niche fields changed;
- update `businesses/INVESTMENT-READINESS.md` where still used for RBS/Proof/Stage/Capital migration;
- reconcile `businesses/PORTFOLIO-V3.md` **last**, or record explicit `businesses/V3-RECONCILIATIONS.md` no-field-change result;
- validate before closing.

Detailed close-out: `v3-writeback.md`.

## Founder summary output
End with:
1. decision in one paragraph;
2. top 3 reasons to pursue/avoid;
3. one Next Proof;
4. exact files/Issue/PR/check evidence.
