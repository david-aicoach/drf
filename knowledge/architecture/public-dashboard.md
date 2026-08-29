# DRF Public Dashboard Architecture

**Status:** Canonical architecture  
**Governing issue:** #12  
**Date:** 29 August 2026

## Purpose

Provide one public executive dashboard for DRF without creating a second database or manually copying current facts into website code.

## Governing rule

> **Repository truth stays canonical. The website reads and presents it.**

The dashboard is a view, not a source of truth.

## V1 architecture

```text
canonical Markdown / VERSION
        +
GitHub Issues
        ↓
root index.html
(browser reads public sources directly)
        ↓
GitHub Pages dashboard
```

Because `tbhrc/drf` is public, V1 deliberately avoids a generated JSON database and GitHub Action projection layer. The browser can read the canonical public sources directly from `main`.

Add a deterministic generated-state layer only if direct parsing becomes unreliable or the dashboard needs data that cannot be safely/efficiently read from public sources.

## Canonical dashboard inputs

| Dashboard concern | Canonical source |
|---|---|
| DRF identity, operating model and revenue loop | `README.md` |
| Repository version | `VERSION` |
| Business opportunity portfolio and scores | `businesses/OPPORTUNITIES.md` |
| Macro internet revenue-market research | `research/ai-first-digital-marketplaces-and-service-platforms.md` |
| Detailed Whop Business Blueprints research | `research/whop-business-blueprints-productisation.md` |
| Detailed opportunity/business truth | linked files under `businesses/` and `research/` |
| Current work | GitHub Issues API for `tbhrc/drf` |

## Frontend contract

`index.html` must:

1. fetch canonical files from the public `main` branch on page load;
2. parse only stable headings/tables required for the dashboard;
3. fetch open GitHub Issues for current work;
4. link every material section back to canonical source files;
5. show source loading/failure state explicitly;
6. never contain manually maintained opportunity scores, market numbers or issue state;
7. use cache-bypassing requests so a normal reload can reflect new canonical truth quickly.

## Source URLs

Canonical Markdown/version is read from:

`https://raw.githubusercontent.com/tbhrc/drf/main/<path>`

Current work is read from:

`https://api.github.com/repos/tbhrc/drf/issues?state=open&per_page=100`

Pull requests are excluded from the work list.

## What may be static in `index.html`

Presentation-only content may be static:

- section names;
- explanatory labels;
- navigation;
- layout/CSS;
- repository/source links;
- parsing logic.

Current commercial facts, scores, macro figures and work status must come from canonical sources.

## GitHub Pages

The Pages source should be the `main` branch repository root so GitHub Pages serves:

`/index.html`

Once Issue #12 is merged, the root entry file is ready. If Pages is not yet enabled in repository settings, enable Pages using **Deploy from a branch → main → /(root)**.

## Why no Wiki or Project in V1

A Wiki would duplicate durable narrative already organised in repository files. A GitHub Project would add a second work-state view before the Issues-only workflow has demonstrated a gap.

Use them later only if they solve a proven navigation or portfolio-management problem.

## Upgrade path

If the dashboard becomes materially larger:

```text
canonical Markdown / Issues
→ deterministic build script
→ generated public-state.json
→ frontend
```

That is the same proven pattern used by `tbhrc/github-course`, but it is intentionally deferred until needed.
