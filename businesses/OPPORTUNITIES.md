# DRF Business Opportunities Index

Canonical portfolio of business ideas and commercial opportunities discovered through DRF research and operations.

Use this file for portfolio-level scanning only. Each material opportunity should have its own folder under `businesses/` once it deserves deeper research or experimentation.

Canonical scoring method:

`knowledge/guidelines/business-opportunity-scoring-framework.md`

Latest full validation:

`research/business-opportunity-validation-2026-08-29.md`

## Status legend

- **Idea** — captured but not yet researched enough to act.
- **Researching** — market/problem/economics being validated.
- **Candidate** — evidence is strong enough to design a bounded experiment.
- **Testing** — live commercial experiment underway.
- **Active** — producing measurable commercial value.
- **Paused** — intentionally inactive.
- **Retired** — rejected or no longer relevant.

## Portfolio summary

Scores are provisional until supported by research and operating evidence. **Opportunity Score, Evidence Confidence and Research Completeness are independent metrics.** Evidence Confidence and Research Completeness do not mathematically change the Opportunity Score.

| Opportunity | Stage | Opportunity Score | AI Autonomy | Evidence Confidence | Research Completeness | Current read | Next action | Canonical detail |
|---|---|---:|---:|---:|---:|---|---|---|
| **Whop Business Blueprints** | **Candidate** | **83/100** | **80/100** | **78%** | **82%** | Platform scale, agentic operability and first-mover timing are validated. Blueprint-specific creator payout, conversion, retention, support burden and paid CAC remain unproven. | Verify official creator economics in the live Blueprint terms/UI, then run one narrow real Blueprint deployment test and capture actual activation, payout, support and retention evidence. | `research/whop-business-blueprints-productisation.md` + `research/business-opportunity-validation-2026-08-29.md` |
| **AI-First Marketplace Directory** | **Researching** | **76/100** | **88/100** | **72%** | **86%** | The discovery problem and seller willingness to pay for qualified visibility are validated, but the broad horizontal first-mover thesis is weakened by G2/AI-directory incumbents, ACP/UCP and restrictive marketplace data rights. | Select one narrow rights-safe vertical, secure 5–10 permissioned supply sources and test 100–300 normalised listings before building a horizontal product. | `businesses/ai-first-marketplace-directory/README.md` + `research/business-opportunity-validation-2026-08-29.md` |

## Detailed opportunity scorecard

All underlying factor scores are **0–10**. The weighted Opportunity Score is calculated according to the canonical scoring guideline.

### Factor key

| Code | Factor | Weight |
|---|---|---:|
| MS | Market Size Now | 10 |
| MG | Market Growth | 10 |
| TW | Timing / First-Mover Window | 6 |
| WP | Willingness to Pay | 8 |
| AB | AI Buildability | 8 |
| AM | AI Marketability | 8 |
| AD | AI Deliverability | 10 |
| HD | Low Human Dependency | 5 |
| SC | Startup Capital Efficiency | 7 |
| SR | Speed to Revenue | 7 |
| MP | Margin Potential | 5 |
| SCALE | Scalability | 6 |
| PG | Paid Growth Potential | 5 |
| MOAT | Defensibility / Moat | 5 |

### Validated scores — 29 August 2026

| Opportunity | MS | MG | TW | WP | AB | AM | AD | HD | SC | SR | MP | SCALE | PG | MOAT | Weighted Score |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **Whop Business Blueprints** | 9 | 9 | 10 | 7 | 9 | 8 | 8 | 7 | 9 | 8 | 8 | 10 | 6 | 6 | **82.6 → 83** |
| **AI-First Marketplace Directory** | 9 | 9 | 5 | 7 | 9 | 8 | 9 | 9 | 7 | 5 | 8 | 9 | 4 | 5 | **76.0 → 76** |

## Independent evidence controls

These scores do **not** alter the weighted Opportunity Score.

| Opportunity | Evidence Confidence | Research Completeness | Key verified evidence | Key estimated / missing evidence |
|---|---:|---:|---|---|
| **Whop Business Blueprints** | **78%** | **82%** | Whop currently reports $300M+ seller earnings in the latest month, 22M+ marketplace MAU and 27,000+ businesses; Blueprint launch/timing; CLI/API/MCP agent operability; seller responsibility and fee structure. | Exact Blueprint creator payout remains unverified in first-party public terms; no DRF Blueprint conversion, activation, payout, support, retention, CAC or ROAS evidence yet. |
| **AI-First Marketplace Directory** | **72%** | **86%** | Large discovery demand; G2/Futurepedia/SaaSHub incumbent scale; paid-listing willingness to pay; rapid AI-mediated discovery growth; MCP/ACP/UCP direction; explicit data-rights restrictions on Upwork/Fiverr/Product Hunt/Etsy. | Exact first vertical, permissioned supply coverage, niche SEO/AEO difficulty, live buyer/agent usage, CAC, conversion, seller claim/update behaviour and unit economics remain unproven. |

## AI Autonomy derivation

`AI Autonomy Score = average(AI Buildability, AI Marketability, AI Deliverability, Low Human Dependency) × 10`

| Opportunity | AI Build | AI Market | AI Deliver | Low Human Dependency | AI Autonomy |
|---|---:|---:|---:|---:|---:|
| **Whop Business Blueprints** | 9 | 8 | 8 | 7 | **80/100** |
| **AI-First Marketplace Directory** | 9 | 8 | 9 | 9 | **87.5 → 88/100** |

## Validation interpretation

### Whop Business Blueprints

The score decreased from **86 → 83** while Evidence Confidence increased from **72% → 78%**. Research confirmed the market and timing but corrected earlier optimism around Blueprint-specific willingness-to-pay, delivery autonomy, margins and paid growth. The opportunity now qualifies as a **Candidate** because enough evidence exists for a cheap controlled test.

### AI-First Marketplace Directory

The score decreased from **81 → 76** while Evidence Confidence increased from **35% → 72%**. Research strongly validated the problem and monetisation patterns but materially weakened the generic horizontal first-mover thesis. The viable version is a **narrow, rights-safe normalised supply/routing layer**, not a scrape-everything directory.

## Research-gap rule

Every opportunity must use the scoring factors as its research checklist. If a factor cannot be supported, mark the underlying evidence as **Verified**, **Estimated** or **Missing** and reduce Research Completeness accordingly.

The intended loop is:

```text
idea
→ preliminary scoring
→ score exposes missing evidence
→ targeted research
→ rescore
→ bounded commercial test
→ real operating evidence
→ rescore
→ scale / pause / retire
```

### Capital gate

As a default, do not commit **material capital** based solely on a high Opportunity Score when **Evidence Confidence is below 60%**. A cheap, reversible validation experiment is allowed when the experiment itself is designed to close the evidence gap.

Both current opportunities are now above the desk-research confidence gate, but **neither has DRF operating evidence yet**. The next score movement should come from real experiments rather than additional generic desk research.

## Table format rule

**Markdown is canonical.** It is readable by humans and agents, version-controlled, diffable, searchable, linkable and easy to update directly in GitHub.

Use a secondary CSV/XLSX only when the portfolio becomes large enough that we need heavier sorting, formulas, weighted scoring, pivots, charts or bulk analysis. If that happens, the spreadsheet is an analytical projection; this Markdown file remains the durable portfolio truth unless governance is explicitly changed.
