---
name: drf-dashboard-operations
description: Maintain, redesign, validate or troubleshoot the DRF Dashboard V3 website and its founder data contract. Use when asked to change index.html/V3 presentation, add dashboard KPIs/tables/layers, fix joins/tooltips/counts/ranking, maintain PORTFOLIO-V3 dashboard semantics, preserve V1/V2 history, or verify GitHub Pages deployment.
---

# DRF Dashboard Operations

## Purpose
Operate Dashboard V3 as a derived founder control surface without turning HTML into business truth.

## Core rule
**Business truth first; dashboard last.** Never edit website code to manufacture scores, ranks, proof, niches or commercial conclusions. Update authoritative business sources and V3 register through the Opportunity Factory Skill first; dashboard code renders that truth.

## Product boundary
Live product/runtime remains outside the Skill:
- `index.html`
- `dashboard-v1-v2.html`
- root `assets/`
- `software/dashboard-v3/`
- `software/00-dashboard-v3-preflight/`

This Skill owns how to operate/maintain that product, not the runtime files themselves.

## V3 semantics
Dashboard Version 3 is the website synthesis of all three Workflow Layers; **Dashboard V3 is not Workflow Layer 3**.

V3 should expose:
1. Founder Master Dashboard — one parent row per opportunity, all major founder decision fields.
2. Workflow Layer 1 — structural opportunity selection.
3. Workflow Layer 2 — Business × Niche and commercial underwriting.
4. Workflow Layer 3 — dossier/readiness/execution state.
5. Preserved Dashboard V2 and Dashboard V1 below V3 as evolution history unless founder explicitly retires them.

Load `references/v3-portfolio-data-contract.md` for field types, precedence, joins and missing-value semantics. Load `references/public-dashboard-architecture.md` for presentation/interaction requirements.

## Change procedure
1. Resolve/create governing Issue.
2. Read current source files and V3 contract.
3. Confirm whether request changes business truth or presentation only.
4. If business truth changes, route through `skills/drf-opportunity-factory/SKILL.md` first.
5. Make the smallest product change.
6. Run product-local Dashboard tests/validators in `software/dashboard-v3/` and repository CI.
7. Verify Pages deployment after merge for public-site changes.

## Integrity rules
- `Pending`, `Unknown`, `Not applicable` and verified zero are distinct.
- EMP and DRF Proof are separate.
- Opportunity Score, Niche Score and RBS are separate.
- Parent-opportunity count must derive from canonical V3 data, not decorative hard-coding.
- Stable parent/niche joins must fail visibly rather than silently dropping rows.
- Do not delete V1/V2 history merely to simplify V3.

## Self-improvement
If a recurring dashboard maintenance failure reveals a reusable operating rule, update this Skill/reference rather than adding a global dashboard SOP/template.
