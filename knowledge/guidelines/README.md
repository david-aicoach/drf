# Guidelines

Governing DRF policies and decision rules.

Use guidelines for rules that apply across multiple businesses, agents or workflows. Keep business-specific rules with the relevant business.

## Three-layer Revenue Factory

- [`business-opportunity-scoring-framework.md`](./business-opportunity-scoring-framework.md) — canonical Layer 1 structural-selection framework: Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness, External Market Proof and execution sequencing.
- [`niche-attractiveness-scoring-framework.md`](./niche-attractiveness-scoring-framework.md) — canonical Layer 2 target-market selection: ranked Business × Niche combinations, Niche Score, niche evidence confidence and comparable-operator transferability.
- [`revenue-blueprint-scoring-and-investment-readiness.md`](./revenue-blueprint-scoring-and-investment-readiness.md) — selected Business × Niche underwriting: RBS, Return Profile, DRF Proof P0–P6, Stage, Capital and Next Proof.

Opportunity Score, Niche Score and RBS answer different questions and must remain separate. External Market Proof and DRF Proof must also remain separate.

## Recurring intelligence

- [`drf-recurring-intelligence-configuration.md`](./drf-recurring-intelligence-configuration.md) — versioned discovery thresholds, daily-event-watch and deep-refresh cadence, freshness rules, source minimums, material-change tests, alerts and founder-approval defaults.

The configuration is consumed by `workflows/drf-recurring-intelligence-loops.md`. A future scheduler may execute it, but must not embed or silently alter the business policy.

## Core workflow

Use:

- `../../workflows/drf-opportunity-factory.md` for every opportunity;
- `../../workflows/drf-recurring-intelligence-loops.md` for recurring discovery/refresh routing.

Dashboard Version 3 is a website version combining all three workflow layers; it is not Workflow Layer 3.