# Workflows

End-to-end, multi-stage operating sequences that coordinate agents, Skills, SOPs, evidence and systems.

Use a workflow when work crosses multiple stages or decision gates. Do not create competing workflows for parts already governed by one canonical sequence.

## Canonical business-opportunity workflow

- [`drf-opportunity-factory.md`](./drf-opportunity-factory.md) — the single end-to-end DRF route for Founder Intake, Automated Discovery candidates and Existing Portfolio Refresh. It runs:

```text
Layer 1 — Opportunity Discovery & Structural Selection
→ Layer 2 — Niche Selection & Commercial Underwriting
→ Layer 3 — Structured Factory Output + V3 reconciliation
→ DRF execution progression P3–P6 where authorised
→ optional Business Blueprint packaging
```

Layer 3 close-out is mandatory. A material opportunity/niche update must either:

- update `businesses/PORTFOLIO-V3.md` last because founder-facing fields changed; or
- record `NO FIELD CHANGE` in `businesses/V3-RECONCILIATIONS.md`.

Canonical write-back contract:

- [`../knowledge/architecture/drf-v3-writeback-contract.md`](../knowledge/architecture/drf-v3-writeback-contract.md)

Close-out checklist:

- [`../knowledge/templates/drf-v3-closeout-checklist.md`](../knowledge/templates/drf-v3-closeout-checklist.md)

Required reusable prompt:

- [`../knowledge/templates/drf-opportunity-factory-intake-prompt.md`](../knowledge/templates/drf-opportunity-factory-intake-prompt.md) — founder-to-agent prompt with Discovery and Portfolio Refresh variants.

## Canonical recurring-intelligence workflow

- [`drf-recurring-intelligence-loops.md`](./drf-recurring-intelligence-loops.md) — implementation-neutral operating contract for:
  - daily Golden Opportunity signal discovery and cheap Layer 1 screening;
  - daily portfolio event watching and risk-based deep refresh;
  - deduplication, run IDs, idempotency, source priorities and failure handling;
  - source-first writes and final `PORTFOLIO-V3.md` reconciliation;
  - public/private and founder-approval boundaries.

Configuration:

- [`../knowledge/guidelines/drf-recurring-intelligence-configuration.md`](../knowledge/guidelines/drf-recurring-intelligence-configuration.md) — visible versioned thresholds, cadence, freshness, alert and approval defaults.

Templates:

- [`../knowledge/templates/drf-discovery-candidate-record.md`](../knowledge/templates/drf-discovery-candidate-record.md)
- [`../knowledge/templates/drf-portfolio-refresh-record.md`](../knowledge/templates/drf-portfolio-refresh-record.md)

Run history:

- [`../research/recurring-intelligence/`](../research/recurring-intelligence/)

The recurring workflow schedules and routes work. Every candidate or refreshed opportunity still uses `drf-opportunity-factory.md`; no second scoring system exists.

## Supporting compatibility reference

- [`revenue-blueprint-factory.md`](./revenue-blueprint-factory.md) — compatibility pointer for older links. It is **not** a second workflow. The former RBF-7 proof stages are integrated into the canonical DRF Opportunity Factory.

## Governing hierarchy

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence + Research + External Market Proof
→ Niche Score
→ Business × Niche offer / pricing / GTM / delivery / RBS / economics
→ DRF Proof + Stage + Capital + Next Proof
→ structured Layer 3 business case
→ PORTFOLIO-V3 update or explicit NO FIELD CHANGE reconciliation
→ Dashboard Version 3
→ execute / scale / optionally package as Blueprint
```

## Critical terminology

Dashboard Version 3 is the website. Workflow Layer 3 is one opportunity's structured business-case output plus its V3 reconciliation. Dashboard V3 combines all three workflow layers.