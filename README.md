# DRF — David's Revenue Factory

> **Find, research, compare, adapt, test, scale and optionally package revenue-producing businesses.**

**Public dashboard:** https://tbhrc.github.io/drf/  
**Primary AI operating surface:** [`skills/`](skills/)  
**Canonical portfolio:** [`businesses/PORTFOLIO-V3.md`](businesses/PORTFOLIO-V3.md)  
**Business opportunities:** [`businesses/OPPORTUNITIES.md`](businesses/OPPORTUNITIES.md)  
**Niche register:** [`businesses/NICHES.md`](businesses/NICHES.md)

## Start here — Skills first

DRF is a **skills-first operating system**.

A founder or fresh agent should not hunt through hidden prompt/template/workflow folders. Reusable AI work starts by selecting a named Skill from [`skills/README.md`](skills/README.md).

| Need | Skill |
|---|---|
| New business opportunity, opportunity intake, market intelligence A–Z, scoring, niche selection, commercial underwriting, Layer 3 and V3 | [`DRF Opportunity Factory`](skills/drf-opportunity-factory/SKILL.md) |
| Golden Opportunity discovery, daily 27-parent calibration, scheduled/specialist market intelligence | [`DRF Recurring Intelligence`](skills/drf-recurring-intelligence/SKILL.md) |
| Dashboard V3, website/data-contract maintenance, Pages verification | [`DRF Dashboard Operations`](skills/drf-dashboard-operations/SKILL.md) |
| Repository architecture, Skill maintenance, governance, cleanup and CI | [`DRF Repository Operations`](skills/drf-repository-operations/SKILL.md) |

Example founder instruction:

> **“Here is a new business opportunity: `<idea>`. Use the DRF Opportunity Factory Skill. Start the intake and complete the market intelligence A–Z.”**

That is sufficient. The repository must supply the method.

## Skill ownership rule

**One reusable AI capability → one Skill owner.**

Capability-specific workflows, prompts, output structures, scoring references, operating standards and reusable AI scripts live inside the owning Skill.

Do not recreate global `templates/`, AI `workflows/`, SOP, lesson or miscellaneous knowledge folders. When a repeated lesson improves how DRF operates, improve the owning Skill.

## What stays outside Skills

Skills tell agents **how to operate**. They do not replace durable evidence or product code.

- [`businesses/`](businesses/) — canonical opportunity/business truth.
- [`research/`](research/) — market evidence and recurring run history.
- [`software/`](software/) — actual product/runtime code and product-local tests.
- [`assets/`](assets/), [`index.html`](index.html), [`dashboard-v1-v2.html`](dashboard-v1-v2.html) — deployed Dashboard product.
- [`.github/`](.github/) — GitHub-required repository integration and Actions.

`.github/workflows/` remains because GitHub requires that platform path; it is not a DRF AI workflow library.

## Revenue Factory decision stack

```text
BUSINESS OPPORTUNITY
→ Opportunity Score + MRR + AI Autonomy + Evidence + Research
→ External Market Proof
→ ranked Niche options + Niche Score
→ selected Business × Niche
→ offer + pricing + GTM + delivery
→ RBS + Return Profile
→ DRF Proof + Stage + Capital + Next Proof
→ Workflow Layer 3 business case
→ V3 reconciliation
→ real execution
→ scale
→ optional Business Blueprint
```

Opportunity Score, Niche Score and RBS answer different questions. External Market Proof and DRF Proof are separate. A high score never authorises capital.

## Three workflow layers

| Layer | Founder question |
|---|---|
| **Layer 1 — Opportunity Discovery & Structural Selection** | Do we want this kind of business? |
| **Layer 2 — Niche Selection & Commercial Underwriting** | Where, how and at what economics should it operate? |
| **Layer 3 — Structured Factory Output + V3 Write-Back** | Can it be represented as one complete comparable business case, and has that current state reached V3? |

Detailed methodology is owned by the [`DRF Opportunity Factory Skill`](skills/drf-opportunity-factory/SKILL.md).

## Copy before invent

DRF prefers verified market evidence to unnecessary invention:

```text
find what works
→ verify successful comparable operators
→ research failures/counter-evidence
→ test transferability
→ adapt and improve
→ test only remaining DRF-specific uncertainty
```

One successful operator is a signal, not a base rate.

## Business truth and Dashboard V3

Business truth is source-first:

```text
live evidence
→ current dossier/CURRENT
→ specialised registers
→ businesses/PORTFOLIO-V3.md
→ Dashboard V3
```

Dashboard Version 3 is the website synthesis of all three workflow layers. **Dashboard V3 is not Workflow Layer 3.** Dashboard V2 and V1 remain visible as evolution history.

Never edit website code to manufacture business scores, ranks, proof or commercial conclusions.

## GitHub execution control

Substantive work is Issue-first. Large programmes use a Master Issue plus linked Stage Issues. Standard implementation uses:

```text
Issue → branch → focused change → PR → checks/review → merge → verify
```

See [`AGENTS.md`](AGENTS.md) for universal governance and Skill routing.

## Repository principle

**DRF exists to produce better revenue decisions and revenue-producing businesses—not documentation for its own sake. Skills make the operating method obvious, reusable and continuously improvable.**
