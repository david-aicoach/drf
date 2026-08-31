# DRF Public Dashboard vs Revenue Blueprint Factory — Alignment Audit

**Status:** Historical audit — **superseded by later RBF V2 integration and Business Blueprints taxonomy changes**  
**Date:** 31 August 2026  
**Issue:** #62  
**Dashboard:** https://tbhrc.github.io/drf/  
**Decision at Issue #62:** inspect and preserve the then-current website; RBF integration was deliberately deferred in that issue.

> **Current mapping:** Subsequent work integrated RBF V2 and generalised the digital-product parent to **Business Blueprints**. Whop is a distribution channel, not the parent business. Current sources are `businesses/business-blueprints/`, `businesses/INVESTMENT-READINESS.md`, and the live `index.html`. Read the body below as a historical design audit, not the current dashboard state.

## Executive read

The public dashboard is technically sound for the **legacy portfolio model**, but it is now conceptually behind the Revenue Blueprint Factory.

The dashboard currently answers:

```text
What is the old Opportunity Score?
What is MRR quality?
What is AI Autonomy?
How strong is Evidence Confidence?
What niche ranked highest?
```

The new factory needs the public dashboard to answer:

```text
How strong is the business?        → Revenue Blueprint Score
How much is actually proven?       → P0-P6 Proof Level
What may we do next?               → Investment Gate
How much capital is unlocked?      → Capital Gate
What cash/time goes in and out?    → Return Profile
What exact proof milestone is next?
```

Therefore the website should be realigned in the **next issue**, after David accepts the Whop worked output as the standard.

---

## What the website currently reads

`index.html` currently fetches from `main`:

- `README.md`;
- `VERSION`;
- `businesses/OPPORTUNITIES.md`;
- `businesses/NICHES.md`;
- macro marketplace research;
- GitHub Issues.

It parses the old opportunity tables for:

- Portfolio summary;
- Validated scores;
- Independent evidence controls;
- AI Autonomy;
- Factor key/weights.

The mobile opportunity cards explicitly display:

```text
Opportunity Score
MRR
AI Autonomy
Evidence Confidence
```

This proves the public dashboard has **not yet adopted** the RBF decision model.

---

## Current top-of-page metrics

The dashboard hero currently prioritises:

1. Version;
2. number of opportunities;
3. Top Score;
4. Top MRR;
5. Open Work.

These are useful operationally, but for the Revenue Blueprint Factory the more important public portfolio controls become:

1. Opportunities / businesses;
2. P4 Revenue Proven;
3. P5 Repeatable;
4. P6 Blueprint Certified;
5. Portfolio monthly net cash;
6. capital at risk;
7. Blueprint revenue this month.

Do not change these yet. This is the target for the next website issue.

---

## README dependency discovered

The website does not simply render Markdown. It programmatically searches `README.md` for:

- a sentence beginning `A GitHub-native factory...` for the hero introduction;
- a `## Revenue execution loop` section containing a fenced code block.

Therefore the new root README must preserve those machine-readable hooks until the website parser is updated.

Issue #62 keeps those hooks compatible while making the README more human-readable.

---

## Whop shows the required future website pattern

Whop's new RBF result is:

> **RBS 79/100 · P2 Backtested · FORWARD TEST · up to $3,000 · Investor-ready: No**

A future public opportunity card should therefore show at minimum:

```text
BUSINESS BLUEPRINTS — HISTORICAL WHOP-FOCUSED EXAMPLE

RBS                  79/100
Proof                P2 Backtested
Gate                 Forward Test
Capital unlocked     Up to $3,000
Investor-ready       No

Legacy score         82/100

Top money line       Blueprint sales + royalties + Partner commissions
Next proof           5 paid buyers at $199+ with CAC ≤ ~$104
```

The detailed opportunity view can then show the 10-factor RBS matrix and the return/backtest table.

---

## Recommended next website issue

After the Whop output is accepted as the standard:

1. Make `businesses/INVESTMENT-READINESS.md` a first-class dashboard source.
2. Add RBS / Proof / Gate / Capital / Investor-ready columns to the main opportunity table.
3. Keep the old Opportunity Score as `Legacy score` during migration, not as the headline.
4. Add a per-opportunity scoring matrix view for the 10 RBS factors.
5. Add return-profile columns only where sourced:
   - current monthly net cash;
   - capital invested;
   - monthly ROI;
   - annual ROI;
   - payback;
   - founder hours.
6. Add P0-P6 factory funnel metrics.
7. Add P4/P5/P6 counts and Blueprint revenue to the hero metrics.
8. Point Whop research navigation to `businesses/business-blueprints/RBF-ASSESSMENT.md` first.
9. Preserve direct links to detailed evidence and legacy scores during transition.
10. Do not show blank/Pending return numbers as zeros.

## Decision

**Website integration: deliberately deferred.**

The website remains the correct public workspace for David to monitor DRF, but its schema should only be changed after the Whop RBF output is approved as the canonical opportunity format.