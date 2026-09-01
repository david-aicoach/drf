# DRF Public Dashboard Architecture

**Status:** Canonical Dashboard Version 3 architecture  
**Version:** 3.0  
**Date:** 31 August 2026  
**Master programme:** #77  
**Governing stage:** [77.6] #87  
**Data contract:** `knowledge/architecture/drf-v3-portfolio-data-contract.md`

## Purpose

Provide one founder-ready public operational dashboard for **David's Revenue Factory** without creating a second business database or manually copying current commercial facts into website code.

> **Repository truth stays canonical. The website reads, validates, joins, filters and presents it.**

The dashboard is a derived decision and analysis workspace. It is never the source of Opportunity Scores, niche rankings, RBS, proof, capital, returns or evidence.

---

# 1. Critical terminology

**Dashboard Version 3 is not Workflow Layer 3.**

- **Workflow Layer 1** selects the business opportunity.
- **Workflow Layer 2** selects the niche and designs/underwrites the Business × Niche.
- **Workflow Layer 3** produces one structured business case/dossier.
- **Dashboard Version 3** is the website evolution that combines the outputs of all three workflow layers across the portfolio.
- **Dashboard Version 2** is the preserved RBS/proof/capital experiment.
- **Dashboard Version 1** is the preserved original business-opportunity and niche dashboard.

The root website order is:

```text
Dashboard V3 — Consolidated Master
Dashboard V3 — Workflow Layer 1
Dashboard V3 — Workflow Layer 2
Dashboard V3 — Workflow Layer 3
Dashboard V2 — preserved below V3
Dashboard V1 — preserved at the bottom
```

---

# 2. Dashboard V3 architecture

```text
CURRENT opportunity dossiers / live evidence
        +
businesses/PORTFOLIO-V3.md
        +
businesses/NICHES.md
        +
VERSION and recurring-intelligence run registers
        ↓
root index.html
+ assets/v3-dashboard.css
+ assets/v3-dashboard.js
        ↓
client-side contract validation
+ Markdown table parsing
+ parent/niche join
+ derived portfolio intelligence
        ↓
Dashboard Version 3
        ↓
GitHub Pages
```

## Canonical inputs

| Dashboard concern | Canonical source |
|---|---|
| Complete parent portfolio comparison | `businesses/PORTFOLIO-V3.md` |
| Full ranked Business × Niche matrix | `businesses/NICHES.md` |
| Field definitions, types, source precedence and missing values | `knowledge/architecture/drf-v3-portfolio-data-contract.md` |
| Complete business detail | Current dossier identified by the parent folder / `CURRENT.md` |
| Layer 1 scoring | `knowledge/guidelines/business-opportunity-scoring-framework.md` |
| Niche scoring | `knowledge/guidelines/niche-attractiveness-scoring-framework.md` |
| RBS, DRF Proof, Stage, Capital and Return | `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md` |
| Canonical operating route | `workflows/drf-opportunity-factory.md` |
| Recurring discovery/refresh contract | `workflows/drf-recurring-intelligence-loops.md` |
| Repository version | `VERSION` |
| Discovery/refresh run history | `research/recurring-intelligence/` |

The browser reads repository-relative files from the same GitHub Pages origin. This avoids CORS complexity while keeping all current facts in canonical Markdown.

---

# 3. Four V3 areas

## Area 1 — Consolidated Master

One parent row per business opportunity, combining the founder-level outputs of all three workflow layers:

```text
Rank
Business Opportunity
Pain / Outcome
Opportunity Score
MRR
AI Autonomy
Evidence Confidence
Research Completeness
External Market Proof
Best Niche
Niche Score
Niche Evidence Confidence
Recommended Offer
Price / Commercial Model
GTM
RBS
DRF Proof
Stage
Capital
Return
Next Proof
```

The primary comparison does not include Delta, Rank Delta or Investor-ready.

The master area also derives:

- Golden Opportunity count;
- high-MRR and high-Autonomy counts;
- EMP3/EMP4 count;
- RBS-complete count;
- P4/P5/P6 counts;
- proof funnel;
- founder decision queue;
- Pending/stale data-quality warnings.

Derived counts are presentation state, not canonical business values.

## Area 2 — Workflow Layer 1

Answers:

> **Do we want this kind of business?**

Shows the business/service/outcome and pain plus Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness, EMP, structural decision and founder read.

## Area 3 — Workflow Layer 2

Answers:

> **Where, how and at what economics should it operate?**

Shows all ranked Business × Niche rows. It joins the current parent offer, price, GTM, RBS, DRF Proof, Stage and Next Proof where completed, while preserving lower-ranked niche options.

## Area 4 — Workflow Layer 3

Answers:

> **Can it be represented as one complete, comparable and executable business case?**

Shows dossier readiness, offer/pricing/GTM/delivery/Return readiness, EMP, RBS, DRF Proof, Stage, Capital, Next Proof, Blueprint readiness, evidence freshness and direct source links.

A complete dossier does not itself increase DRF Proof.

---

# 4. V1/V2 preservation architecture

Before the V3 root was created, the former `index.html` was copied byte-for-byte to:

`dashboard-v1-v2.html`

Expected preserved Git blob SHA:

`45ee9d80ee2c26a345cda5029b43567141075f08`

This snapshot remains directly accessible and retains the complete historical V1/V2 source and interaction logic.

The V3 root embeds the same-origin snapshot twice:

1. **Dashboard V2 frame** — presentation CSS hides the V1 portion and exposes the complete V2 section.
2. **Dashboard V1 frame** — presentation CSS hides V2 and exposes the V1 section; obsolete `Score Delta` and `Rank Delta` columns are hidden in the embedded view as explicitly requested.

The snapshot itself remains unchanged. If frame isolation fails, each section displays a direct fallback link to the complete preserved page.

This design provides:

- exact historical preservation;
- V2-before-V1 ordering without rewriting the legacy file;
- isolated legacy JavaScript/local state;
- a simple rollback/fallback surface;
- no duplicate manual recreation of the old tables.

---

# 5. Data validation and failure behaviour

`assets/v3-dashboard.js` must:

1. fetch the exact canonical repository-relative paths;
2. locate the exact `## V3 master portfolio` heading;
3. validate the exact 30-column header order;
4. validate one unique parent opportunity ID per row;
5. validate continuous current ranks;
6. parse numeric fields separately from presentation suffixes;
7. validate required niche-register headers;
8. join niche rows to parent data without creating new parent businesses;
9. fail visibly on invalid or missing source data;
10. never coerce invalid/missing values into zero.

A source failure may leave other independent sections available, but the affected table must show a visible failure state rather than stale invented content.

## Missing values

The dashboard preserves:

- `Pending`;
- `Unknown`;
- `Needs more research`;
- `Not applicable`;
- `Conflict`;
- verified numerical `0`.

Missing EMP does not become EMP0. Missing DRF Proof does not become P0.

---

# 6. Spreadsheet interaction contract

Each V3 data grid supports, where meaningful:

1. global search;
2. per-column text/numeric filters;
3. numeric operators such as exact, `>`, `>=`, `<`, `<=` and ranges;
4. click-to-sort ascending/descending;
5. deterministic enum sorting for EMP, DRF Proof and Stage;
6. draggable desktop column widths;
7. width persistence in `localStorage`;
8. reset widths and clear filters;
9. sticky heading/filter rows;
10. bounded vertical and horizontal scrolling;
11. expandable source/detail rows;
12. mobile-safe contained horizontal scrolling.

Browser-side sort/filter/width state is temporary presentation state and never writes back to GitHub.

---

# 7. Immediate definitions and accessibility

Key abbreviations must not rely solely on delayed browser-native `title` pop-ups.

V3 uses immediate CSS tooltips on hover and keyboard focus plus a complete visible legend for:

- Opportunity Score;
- MRR;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- EMP;
- Niche Score;
- RBS;
- DRF Proof;
- Stage;
- GTM;
- Capital;
- Return;
- Business Blueprint.

Controls require visible focus states and meaningful accessible labels.

---

# 8. Public/private boundary

The public dashboard may show high-level opportunity intelligence when source rights permit:

- opportunity and pain/outcome;
- structural scores and evidence date;
- EMP and DRF Proof;
- best niche and Niche Score;
- high-level offer/price/GTM;
- Stage, Capital/Return headline and Next Proof;
- clear non-guarantee language.

Detailed operator reverse engineering, prospect lists, proprietary client evidence, complete financial models, scripts, funnels, implementation assets and paid Business Blueprints remain private/paid unless explicitly approved.

Dashboard publication never upgrades evidence or proof.

---

# 9. Source links and health

Dashboard V3 displays source status for:

- `PORTFOLIO-V3.md`;
- `NICHES.md`;
- `VERSION`;
- the preserved legacy snapshot;
- discovery run history;
- refresh run history.

Every parent row links to its current dossier where available and business folder. Every niche detail links to its canonical niche research file.

---

# 10. Deterministic tests

The Dashboard V3 software test must verify:

- required V3 section order;
- V3 appears before V2 and V1;
- V2 appears before V1;
- the exact legacy snapshot Git blob SHA;
- 27 unique parent rows and existing business folders;
- the exact V3 table header contract;
- valid numeric/missing/EMP/DRF Proof/Stage values;
- at least the existing 31 ranked niche rows;
- required V3 assets and controls;
- JavaScript syntax;
- no Delta/Rank Delta in the new root V3 source;
- the preserved snapshot still contains the original V1 and V2 structures.

CI must fail when these contracts drift.

---

# 11. GitHub Pages and upgrade path

The Pages source is the `main` branch repository root and serves `/index.html`.

The current architecture intentionally uses direct Markdown parsing. Add a deterministic generated public-state layer only if:

- parsing performance becomes materially poor;
- source structures become too numerous/complex;
- private/public separation requires a build step;
- a stable public API is needed.

Any generated layer remains a projection:

```text
canonical dossiers/registers
→ deterministic build
→ public state
→ Dashboard V3
```

It never becomes canonical truth.

## Final architecture outcome

Dashboard V3 becomes the primary founder operating surface without deleting the evolution that produced it. It combines the full DRF decision hierarchy, exposes each workflow layer separately, preserves V2 and V1, and remains anchored to auditable repository truth.