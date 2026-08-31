# Workflows

End-to-end, multi-stage operating sequences that coordinate agents, Skills, SOPs, evidence and systems.

Use a workflow when work crosses multiple stages or decision gates. Do not create competing workflows for parts already governed by one canonical sequence.

## Canonical workflow

- [`drf-opportunity-factory.md`](./drf-opportunity-factory.md) — the single end-to-end DRF route for founder intake, automated opportunity discovery and existing-portfolio refresh. It runs:

```text
Layer 1 — Opportunity Discovery & Structural Selection
→ Layer 2 — Niche Selection & Commercial Underwriting
→ Layer 3 — Structured Factory Output
→ DRF execution progression P3–P6 where authorised
→ optional Business Blueprint packaging
```

Required reusable prompt:

- [`../knowledge/templates/drf-opportunity-factory-intake-prompt.md`](../knowledge/templates/drf-opportunity-factory-intake-prompt.md) — founder-to-agent prompt with Discovery and Portfolio Refresh variants.

## Supporting compatibility reference

- [`revenue-blueprint-factory.md`](./revenue-blueprint-factory.md) — compatibility pointer for older links. It is **not** a second workflow. The former RBF-7 proof stages are integrated into the canonical DRF Opportunity Factory.

## Governing hierarchy

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence + Research + External Market Proof
→ Niche Score
→ Business × Niche offer / pricing / GTM / delivery / RBS / economics
→ DRF Proof + Stage + Capital + Next Proof
→ structured V3 business case
→ execute / scale / optionally package as Blueprint
```
