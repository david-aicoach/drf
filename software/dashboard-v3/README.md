# DRF Dashboard V3

**Purpose:** Deterministically render the canonical DRF portfolio as the primary founder dashboard while preserving Dashboard V2 and Dashboard V1 beneath it.

## Owning Skill

Reusable Dashboard operating guidance is owned by:

- `../../skills/drf-dashboard-operations/SKILL.md`
- `../../skills/drf-dashboard-operations/references/public-dashboard-architecture.md`
- `../../skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md`

## Runtime files

- `../../index.html` — Dashboard V3 shell and website ordering.
- `../../assets/v3-dashboard.css` — founder-first responsive visual system.
- `../../assets/v3-dashboard.js` — canonical Markdown parsing, validation, joins and table interactions.
- `../../dashboard-v1-v2.html` — preserved V1/V2 snapshot.
- `../../businesses/PORTFOLIO-V3.md` — one parent row per business opportunity.
- `../../businesses/NICHES.md` — all ranked Business × Niche rows.

Product/runtime code remains with the product; it is not moved into a Skill merely because it is code.

## Verification

Run from repository root:

```bash
bash software/dashboard-v3/test.sh
```

The test verifies V3/Layer order, preservation of V1/V2, V3 register integrity, parent/dossier paths, numeric/missing/EMP/DRF Proof/Stage values, niche joins, interaction/source markers and JavaScript syntax.

## Failure policy

A failed test blocks merge. Fix the dashboard, source register or documented Skill-owned contract; do not weaken tests merely to make CI green.
