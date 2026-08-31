# DRF Templates

Standard structures for recurring DRF outputs. Create only files required by the current workflow layer and DRF Proof stage; documentation must buy a decision, evidence or reusable operating value.

## Start here

1. [`drf-opportunity-factory-intake-prompt.md`](./drf-opportunity-factory-intake-prompt.md) — reusable founder-to-agent prompt, including Automated Discovery and Portfolio Refresh variants.
2. [`../../workflows/drf-opportunity-factory.md`](../../workflows/drf-opportunity-factory.md) — the one canonical end-to-end DRF opportunity workflow.
3. [`../../workflows/drf-recurring-intelligence-loops.md`](../../workflows/drf-recurring-intelligence-loops.md) — recurring Golden Opportunity Discovery and Existing Portfolio Refresh routing.

## Critical distinction

- Workflow Layer 1, Layer 2 and Layer 3 describe the progression applied to each opportunity.
- Dashboard Version 1, Version 2 and Version 3 describe website evolution.
- Dashboard V3 displays all three workflow layers; Dashboard V3 is not Workflow Layer 3.

---

# Recurring intelligence templates

- [`drf-discovery-candidate-record.md`](./drf-discovery-candidate-record.md) — normalises a credible signal, deduplicates it, records operator/counter-evidence and applies the cheap Layer 1 decision before any parent folder is created.
- [`drf-portfolio-refresh-record.md`](./drf-portfolio-refresh-record.md) — records the current baseline, proportionate refresh scope, new evidence, before/after fields, proof integrity and source-first write order.

Configuration:

- [`../guidelines/drf-recurring-intelligence-configuration.md`](../guidelines/drf-recurring-intelligence-configuration.md)

Run history:

- [`../../research/recurring-intelligence/`](../../research/recurring-intelligence/)

Discovery candidates use Opportunity Score and External Market Proof for cheap screening. They do not calculate preliminary RBS before a Business × Niche and commercial model exist.

---

# Layer 1 — Opportunity Discovery & Structural Selection

Core question: **Do we want this kind of business?**

- [`revenue-opportunity-scan-card.md`](./revenue-opportunity-scan-card.md) — low-cost high-volume discovery screen using Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness and External Market Proof; decides Reject / Hold / Advance.
- [`business-opportunity-readme.md`](./business-opportunity-readme.md) — 20-second founder summary preserving the complete three-layer decision stack.
- [`business-opportunity-research.md`](./business-opportunity-research.md) — canonical full dossier template. It begins with Layer 1 and advances into Layer 2 and Layer 3 only when justified.

Layer 1 governing standard:

- [`../guidelines/business-opportunity-scoring-framework.md`](../guidelines/business-opportunity-scoring-framework.md)

```text
Business Opportunity + Pain/Outcome
→ Opportunity Score
→ MRR
→ AI Autonomy
→ Evidence Confidence
→ Research Completeness
→ External Market Proof
→ Reject / Hold / Advance
```

---

# Layer 2 — Niche Selection & Commercial Underwriting

Core question: **Where, how and at what economics should this business operate?**

The full dossier contains:

- ranked Business × Niche matrix;
- Niche Score and Niche Evidence Confidence;
- successful comparable operator reverse engineering;
- market-ready offer and pricing;
- first-10/first-100 GTM and customer acquisition;
- delivery architecture;
- Revenue Blueprint Score;
- Return Profile;
- DRF Proof, Stage, Capital and Next Proof.

Supporting templates:

- [`revenue-blueprint-financial-model.xlsx`](./revenue-blueprint-financial-model.xlsx) — 12-month downside/base/upside model with capital, cash, ROI, payback, runway and founder-time returns.
- [`revenue-blueprint-financial-model.md`](./revenue-blueprint-financial-model.md) — financial definitions, inputs, formulas and decision rules.
- [`revenue-blueprint-investment-memo.md`](./revenue-blueprint-investment-memo.md) — detailed capital/decision memo where the Stage requires it.
- [`business-benchmark-scorecard.md`](./business-benchmark-scorecard.md) — benchmark an existing business, department, bottleneck, pivot or added revenue model.

Layer 2 governing standards:

- [`../guidelines/niche-attractiveness-scoring-framework.md`](../guidelines/niche-attractiveness-scoring-framework.md)
- [`../guidelines/revenue-blueprint-scoring-and-investment-readiness.md`](../guidelines/revenue-blueprint-scoring-and-investment-readiness.md)

---

# Layer 3 — Structured Factory Output

Core question: **Can the opportunity be represented as one complete, comparable and executable business case?**

The Layer 3 section inside [`business-opportunity-research.md`](./business-opportunity-research.md) produces:

- a V3 record summary;
- dossier-readiness controls;
- risks/counter-evidence;
- source/evidence register;
- Blueprint packaging readiness;
- one explicit decision and next proof milestone.

Supporting outputs:

- [`DRF-V3-RECORD-FIELDS.md`](./DRF-V3-RECORD-FIELDS.md) — dossier field hand-off to the final V3 data contract.
- [`revenue-blueprint-specification.md`](./revenue-blueprint-specification.md) — operating recipe and P3–P6 packaging/certification structure.
- [`revenue-blueprint-factory-dashboard.md`](./revenue-blueprint-factory-dashboard.md) — factory throughput, proof conversion, capital efficiency, portfolio cash and Blueprint revenue metrics.
- [`business-opportunity-worked-example-business-blueprints.md`](./business-opportunity-worked-example-business-blueprints.md) — Business Blueprints example; one opportunity/packaging route, not the identity of DRF.

The stable data contract is [`../architecture/drf-v3-portfolio-data-contract.md`](../architecture/drf-v3-portfolio-data-contract.md). Dashboard Version 3 is implemented under [77.6] #87.

---

# Canonical progression

```text
DAILY DISCOVERY / EVENT WATCH
→ deduplicate
→ cheap Layer 1 scan
→ reject, hold or advance

LAYER 1 — SELECT THE BUSINESS
pain/outcome + successful operators + External Market Proof
+ Opportunity Score + MRR + AI Autonomy + Evidence + Research

LAYER 2 — SELECT THE TARGET AND DESIGN THE BUSINESS
rank niches → select beachhead → reverse-engineer operators
→ offer → pricing → GTM → delivery → RBS → Return
→ DRF Proof → Stage → Capital → Next Proof

LAYER 3 — STRUCTURE THE OUTPUT
founder-readable mini business plan
→ canonical V3 record
→ execution plan
→ optional Blueprint packaging

REFRESH
watch material change → update affected source → preserve history
→ reconcile PORTFOLIO-V3 last
```

## Evidence rule

Every serious record separates:

- Verified fact;
- Credible estimate;
- Inference;
- External Market Proof;
- DRF actual;
- Missing/Pending.

A category can be `EMP3 Market Proven` while DRF remains `P1 Desk Underwritten`.

## Compatibility

- [`../../workflows/revenue-blueprint-factory.md`](../../workflows/revenue-blueprint-factory.md) remains only a compatibility pointer; it is not a second workflow.
- [`business-experiment.md`](./business-experiment.md) remains suitable for a small bounded commercial experiment.
- [`research-output.md`](./research-output.md) remains suitable for generic decision research outside the DRF opportunity factory.

## Governing files

- Opportunity workflow: [`../../workflows/drf-opportunity-factory.md`](../../workflows/drf-opportunity-factory.md)
- Recurring loops: [`../../workflows/drf-recurring-intelligence-loops.md`](../../workflows/drf-recurring-intelligence-loops.md)
- Founder intake: [`drf-opportunity-factory-intake-prompt.md`](./drf-opportunity-factory-intake-prompt.md)
- Intelligence configuration: [`../guidelines/drf-recurring-intelligence-configuration.md`](../guidelines/drf-recurring-intelligence-configuration.md)
- Layer 1 scoring: [`../guidelines/business-opportunity-scoring-framework.md`](../guidelines/business-opportunity-scoring-framework.md)
- Niche scoring: [`../guidelines/niche-attractiveness-scoring-framework.md`](../guidelines/niche-attractiveness-scoring-framework.md)
- RBS / DRF Proof / Stage / Capital / Return: [`../guidelines/revenue-blueprint-scoring-and-investment-readiness.md`](../guidelines/revenue-blueprint-scoring-and-investment-readiness.md)

For full opportunity research, this three-layer pack takes precedence over the generic `research-output.md` template.