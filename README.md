# DRF — David's Revenue Factory

> **Find, research, compare, adapt, test, scale and optionally package revenue-producing businesses.**

**Fast links:** [Sniper](https://github.com/tbhrc/skills/blob/main/human-ai-operations-map/references/ai-sniper-entry-map.md) · [North Star](https://github.com/tbhrc/skills/tree/main/founder-story-mission-vision) · [Skills](https://github.com/tbhrc/skills/blob/main/INDEX.md) · [Workflow](https://github.com/tbhrc/skills/tree/main/github-agent-workflow) · [DRF Skill Router](skills/README.md) · [Portfolio](businesses/PORTFOLIO-V3.md) · [BD](bd/README.md) · [Root Contract](AGENTS.md) · [Issues](https://github.com/tbhrc/drf-main/issues)

**Public dashboard:** https://tbhrc.github.io/drf/  
**Reusable Skill canon:** [`tbhrc/skills`](https://github.com/tbhrc/skills)  
**DRF compatibility router:** [`skills/README.md`](skills/README.md)  
**Business Development:** [`bd/`](bd/)  
**Canonical portfolio:** [`businesses/PORTFOLIO-V3.md`](businesses/PORTFOLIO-V3.md)  
**Business opportunities:** [`businesses/OPPORTUNITIES.md`](businesses/OPPORTUNITIES.md)  
**Niche register:** [`businesses/NICHES.md`](businesses/NICHES.md)

## Start here — Skills first

DRF is a **skills-first operating system**, and **`tbhrc/skills` is the sole editable reusable Skill canon**.

A founder or fresh agent should not hunt through hidden prompt/template/workflow folders or maintain a second DRF-local Skill Bank. Use [`skills/README.md`](skills/README.md) only as the DRF-to-central compatibility router, then load the most-specific canonical Skill in `tbhrc/skills`.

| Need | Canonical Skill |
|---|---|
| New business opportunity, opportunity intake, market intelligence A-Z, scoring, niche selection, commercial underwriting, Layer 3 and V3 | [`DRF Opportunity Factory`](https://github.com/tbhrc/skills/tree/main/drf-opportunity-factory) |
| Golden Opportunity discovery, daily portfolio calibration, scheduled/specialist market intelligence | [`DRF Intelligence`](https://github.com/tbhrc/skills/tree/main/automations-drf-intelligence) |
| **Target accounts, qualification, value-upfront outreach, live CRM pipeline, follow-up, sales meetings and Won-client handoff** | **[`DRF Business Development`](https://github.com/tbhrc/skills/tree/main/drf-business-development)** — DRF front door: [`bd/README.md`](bd/README.md) |
| Dashboard V3, website/data-contract maintenance, Pages verification | [`DRF Dashboard Operations`](https://github.com/tbhrc/skills/tree/main/drf-dashboard-operations) |
| Repository execution/lifecycle | [`GitHub Agent Workflow`](https://github.com/tbhrc/skills/tree/main/github-agent-workflow) |
| Skill creation, migration or maintenance | [`GitHub Skill Builder`](https://github.com/tbhrc/skills/tree/main/github-skill-builder) |
| GitHub architecture/capability selection | [`GitHub Power User`](https://github.com/tbhrc/skills/tree/main/github-power-user) |

Example founder instruction:

> **“Here is a new business opportunity: `<idea>`. Use the DRF Opportunity Factory Skill. Start the intake and complete the market intelligence A-Z.”**

For commercial execution:

> **“Run BD for `<offer/niche>`. Use DRF Business Development, qualify the best targets and work the live CRM pipeline.”**

That is sufficient. The repository owns DRF business/product truth; the central Skill Bank supplies reusable method.

## Business Development ownership

DRF distinguishes **business selection** from **business development execution**.

```text
DRF opportunity / niche truth
→ DRF Business Development
→ selected live CRM + communication/action state
→ qualified meeting / commercial progression
→ Won
→ AI Ops client handoff
```

- **DRF / GitHub** owns pre-sale campaign strategy, experiments, system work and aggregate proof.
- **Selected live CRM** owns ordinary live company/contact/opportunity/activity/next-action truth. Current selection/proof is governed by [`#157`](https://github.com/tbhrc/drf-main/issues/157); never dual-maintain competing CRM truth.
- **`tbhrc/skills`** owns the reusable Business Development method and routes platform mechanics to the currently verified CRM capability/operator.
- **AI Ops** begins at genuine acquisition / Won.
- **OneDrive** owns private/prospect/client-facing files when required.

Do not create a second GitHub CRM or one Issue/file per ordinary lead. Start at [`bd/README.md`](bd/README.md) for the detailed ownership boundary and current CRM route.

Governing programme: [`#150 — Build DRF Business Development operating layer on GHL`](https://github.com/tbhrc/drf-main/issues/150). Current CRM selection/proof: [`#157`](https://github.com/tbhrc/drf-main/issues/157).

## Skill ownership rule

**One reusable AI capability → one Skill owner.**

Reusable workflows, prompts, output structures, scoring references, operating standards and reusable AI scripts belong in the owning central Skill in `tbhrc/skills`.

The local `skills/` tree is retained only for compatibility pointers, migration/provenance evidence and DRF-specific validation implementation. It is **not** a second editable Skill Bank.

Do not recreate global `templates/`, AI `workflows/`, SOP, lesson or miscellaneous knowledge folders. When a repeated lesson improves how DRF operates, improve the owning central Skill.

## What stays outside Skills

Skills tell agents **how to operate**. They do not replace durable evidence or product code.

- [`businesses/`](businesses/) — canonical opportunity/business truth.
- [`research/`](research/) — market evidence and recurring run history.
- [`bd/`](bd/) — pre-sale BD domain/front-door and source-of-truth routing, not a lead database.
- [`software/`](software/) — actual product/runtime code and product-local tests.
- [`assets/`](assets/), [`index.html`](index.html), [`dashboard-v1-v2.html`](dashboard-v1-v2.html) — deployed Dashboard product.
- [`.github/`](.github/) — GitHub-required repository integration and Actions.
- [`skills/`](skills/) — local compatibility/migration pointers and DRF-specific validation implementation only.

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

Detailed methodology is owned by the central [`DRF Opportunity Factory Skill`](https://github.com/tbhrc/skills/tree/main/drf-opportunity-factory).

Business Development sits **after/alongside the commercial decision stack when an offer/niche is ready to test or sell**; it is not a fourth underwriting layer.

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

Substantive work is Issue-first. Use the canonical [`github-agent-workflow`](https://github.com/tbhrc/skills/tree/main/github-agent-workflow) and choose the lowest sufficient lane. Level 0 / trunk-first direct `main` is the normal path for safe bounded work; branch/PR isolation is used only when it materially reduces risk.

See [`AGENTS.md`](AGENTS.md) for DRF-specific governance and central Skill routing.

## Repository principle

**DRF exists to produce better revenue decisions and revenue-producing businesses—not documentation for its own sake. The central Skill Bank makes the operating method obvious, reusable and continuously improvable without creating a competing local canon.**
