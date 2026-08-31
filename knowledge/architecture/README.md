# Architecture

Durable DRF system design and rationale.

Architecture must explain why a structure exists, what it replaces, major boundaries and how it supports measurable commercial execution without unnecessary complexity.

## Canonical DRF architecture

1. [`outcome-first-modular-revenue-architecture.md`](./outcome-first-modular-revenue-architecture.md) — commercial deployment model:

   `Outcome × Niche × Customer Channel × System of Record × Agent Layer`

   It establishes the UAE WhatsApp-first default and keeps CRM, channel and agent vendors modular/replacement choices.

2. [`drf-v3-portfolio-data-contract.md`](./drf-v3-portfolio-data-contract.md) — stable bridge between Workflow Layer 3 dossiers, the canonical portfolio/niche registers, Dashboard Version 3 and future recurring intelligence automation.

   It governs:

   - one parent row per business opportunity;
   - stable opportunity IDs;
   - ranked Business × Niche relationships;
   - source precedence;
   - field names and types;
   - Pending/Unknown/Not applicable/zero semantics;
   - EMP and DRF Proof separation;
   - the parseable `businesses/PORTFOLIO-V3.md` contract;
   - Dashboard V3 derived rendering.

3. [`drf-template-validation-whatsapp-crm-hvac.md`](./drf-template-validation-whatsapp-crm-hvac.md) — [77.3] representative validation proving the three-layer dossier can preserve V1 business metrics, V2 commercial/proof controls and honest evidence boundaries.

## Critical terminology

- Workflow Layers 1–3 describe how each opportunity is processed.
- Dashboard Versions 1–3 describe website evolution.
- Dashboard V3 combines all three workflow layers; it is not Workflow Layer 3.

## Other architecture documents

- [`strategic-flywheel.md`](./strategic-flywheel.md) — DRF strategic compounding/flywheel design.
- [`public-dashboard.md`](./public-dashboard.md) — public dashboard architecture; [77.6] #87 will align the implementation with Dashboard V3 while preserving V2/V1.
