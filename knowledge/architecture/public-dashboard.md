# DRF Public Dashboard Architecture

**Status:** Canonical architecture  
**Governing issues:** #12, #21  
**Date:** 29 August 2026

## Purpose

Provide one public operational dashboard for DRF without creating a second database or manually copying current facts into website code.

## Governing rule

> **Repository truth stays canonical. The website reads, ranks, filters and presents it.**

The dashboard is a view and analysis workspace, not a source of truth.

## Architecture

```text
canonical Markdown / VERSION
        +
GitHub Issues
        ↓
root index.html
(browser reads public sources directly)
        ↓
client-side table parser / data-grid controls
        ↓
GitHub Pages dashboard
```

Because `tbhrc/drf` is public, the dashboard deliberately avoids a duplicate JSON database. The browser reads canonical public sources directly from `main`.

Add a deterministic generated-state layer only if direct Markdown parsing becomes unreliable, performance becomes unacceptable, or the dashboard needs data that cannot be safely/efficiently read directly.

## Canonical dashboard inputs

| Dashboard concern | Canonical source |
|---|---|
| DRF identity, operating model and revenue loop | `README.md` |
| Repository version | `VERSION` |
| Business opportunity portfolio, ranking, MRR and scores | `businesses/OPPORTUNITIES.md` |
| Detailed opportunity scorecard | `businesses/OPPORTUNITIES.md` |
| Evidence confidence and research completeness | `businesses/OPPORTUNITIES.md` |
| AI Autonomy derivation | `businesses/OPPORTUNITIES.md` |
| Scoring factor weights | `businesses/OPPORTUNITIES.md` |
| Macro internet revenue-market signals | `research/ai-first-digital-marketplaces-and-service-platforms.md` |
| Master marketplace table | `research/ai-first-digital-marketplaces-and-service-platforms.md` |
| Detailed opportunity/business truth | linked files under `businesses/` and `research/` |
| Current and recent work | GitHub Issues API for `tbhrc/drf` |

## Data-workspace contract

The dashboard may create **temporary browser-side presentation state** for usability, including:

- current sort column and direction;
- search/filter query;
- dynamically calculated visible rank;
- user-adjusted column widths;
- collapsed/expanded table panels.

This state is not business truth. It never writes back to the repository and never changes canonical scores.

Column-width preferences may be stored in browser `localStorage` because they are user-interface preferences only.

## Table behaviour

Canonical Markdown tables are parsed generically rather than rewritten as duplicated HTML rows.

Each data grid should support, where practical:

1. click-to-sort headers;
2. numeric sorting for scores, percentages and MRR values;
3. current visible rank recalculated after sorting/filtering;
4. draggable column widths on desktop;
5. sticky headers;
6. compact search/filter controls;
7. bounded internal scrolling for large tables so the page itself remains concise;
8. collapsible secondary data sets;
9. mobile-safe contained horizontal scrolling for complex matrices;
10. dedicated mobile opportunity cards for the primary business ranking.

## Frontend contract

`index.html` must:

1. fetch canonical files from the public `main` branch on page load;
2. parse stable Markdown tables/headings required for the dashboard;
3. fetch GitHub Issues for current/recent work;
4. link material views back to canonical source files;
5. show source loading/failure state explicitly;
6. never contain manually maintained opportunity scores, market numbers or issue state;
7. use cache-bypassing requests so a normal reload can reflect new canonical truth quickly;
8. keep all table ranking/filter/resizing as non-authoritative browser UI state.

## Source URLs

Canonical Markdown/version is read from:

`https://raw.githubusercontent.com/tbhrc/drf/main/<path>`

Work is read from the GitHub Issues API:

`https://api.github.com/repos/tbhrc/drf/issues`

Pull requests are excluded from the work table.

## What may be static in `index.html`

Presentation-only content may be static:

- section names;
- explanatory labels;
- navigation;
- layout/CSS;
- repository/source links;
- parsing logic;
- table interaction logic.

Current commercial facts, scores, macro figures and work status must come from canonical sources.

## GitHub Pages

The Pages source is the `main` branch repository root and serves `/index.html`.

## Wiki / Project rule

A Wiki or GitHub Project should not be added merely because the dashboard grows. Add either only when it solves a proven navigation, collaboration or portfolio-management gap that cannot be handled cleanly by the existing canonical files and Issues.

## Upgrade path

If the dashboard becomes materially larger or direct parsing becomes a bottleneck:

```text
canonical Markdown / Issues
→ deterministic build script
→ generated public-state.json
→ interactive frontend
```

That generated layer would remain a projection, never the source of truth.
