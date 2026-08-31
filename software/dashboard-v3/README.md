# DRF Dashboard V3

**Owner:** DRF Master programme #77 / [77.6] #87  
**Purpose:** Deterministically render the canonical DRF portfolio as the primary founder dashboard while preserving Dashboard V2 and Dashboard V1 beneath it.

## Runtime files

- `../../index.html` — Dashboard V3 shell and website ordering.
- `../../assets/v3-dashboard.css` — founder-first responsive visual system.
- `../../assets/v3-dashboard.js` — canonical Markdown parsing, validation, joins and table interactions.
- `../../dashboard-v1-v2.html` — byte-for-byte legacy V1/V2 snapshot.
- `../../businesses/PORTFOLIO-V3.md` — one parent row per business opportunity.
- `../../businesses/NICHES.md` — all ranked Business × Niche rows.

## Architecture

- `../../knowledge/architecture/public-dashboard.md`
- `../../knowledge/architecture/drf-v3-portfolio-data-contract.md`

## Verification

Run from repository root:

```bash
bash software/dashboard-v3/test.sh
```

The test verifies:

- V3 Master → Layer 1 → Layer 2 → Layer 3 → V2 → V1 source order;
- exact preservation of the former dashboard Git blob;
- exact V3 register headers and 27 unique parent rows;
- existing parent folder and dossier paths;
- honest numeric/missing/EMP/DRF Proof/Stage values;
- the existing ranked niche population and detail paths;
- required V3 interaction/source markers;
- JavaScript syntax through `node --check`.

## Failure policy

A failed test blocks merge. Do not weaken a test merely to make CI green; fix the dashboard, source register or documented contract that drifted.