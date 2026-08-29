# DRF Business Opportunities Index

Canonical portfolio of business ideas and commercial opportunities discovered through DRF research and operations.

Use this file for portfolio-level scanning only. Each material opportunity should have its own folder under `businesses/` once it deserves deeper research or experimentation.

Canonical scoring method:

`knowledge/guidelines/business-opportunity-scoring-framework.md`

## Status legend

- **Idea** — captured but not yet researched enough to act.
- **Researching** — market/problem/economics being validated.
- **Candidate** — evidence is strong enough to design a bounded experiment.
- **Testing** — live commercial experiment underway.
- **Active** — producing measurable commercial value.
- **Paused** — intentionally inactive.
- **Retired** — rejected or no longer relevant.

## Portfolio summary

Scores are provisional until supported by research. **Opportunity Score, Evidence Confidence and Research Completeness are independent metrics.** Evidence Confidence and Research Completeness do not mathematically change the Opportunity Score.

| Opportunity | Stage | Opportunity Score | AI Autonomy | Evidence Confidence | Research Completeness | Current read | Next action | Canonical detail |
|---|---|---:|---:|---:|---:|---|---|---|
| **Whop Business Blueprints** | Researching | **86/100** | **85/100** | **72%** | **75%** | Exceptional structural fit and unusually early category timing on top of an already scaled marketplace; creator economics and real Blueprint conversion/unit economics remain incomplete. | Test the first proven Blueprint and capture real conversion, support and downstream economics. | `research/whop-business-blueprints-productisation.md` |
| **AI-First Marketplace Directory** | Idea | **81/100** | **90/100** | **35%** | **43%** | Strong structural thesis and AI fit, but the commercial score is still assumption-heavy because demand, monetisation, supply-ingestion rights, acquisition economics and competitive gap are not yet validated. | Deep research competitive landscape, SEO/AI demand, data rights, affiliate/API access and a narrow monetisable vertical before building. | `businesses/ai-first-marketplace-directory/README.md` |

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

### Scores

| Opportunity | MS | MG | TW | WP | AB | AM | AD | HD | SC | SR | MP | SCALE | PG | MOAT | Weighted Score |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| **Whop Business Blueprints** | 9 | 9 | 10 | 8 | 9 | 8 | 9 | 8 | 9 | 8 | 9 | 10 | 7 | 6 | **85.9 → 86** |
| **AI-First Marketplace Directory** | 10 | 9 | 9 | 6 | 9 | 9 | 9 | 9 | 6 | 4 | 9 | 10 | 5 | 7 | **80.6 → 81** |

## Independent evidence controls

These scores do **not** alter the weighted Opportunity Score.

| Opportunity | Evidence Confidence | Research Completeness | Key verified evidence | Key estimated / missing evidence |
|---|---:|---:|---|---|
| **Whop Business Blueprints** | **72%** | **75%** | Whop platform scale, marketplace traffic/growth, Business Blueprints launch/timing, AI/MCP direction, adjacent keyword demand and broad category economics. | Exact Blueprint creator economics, real Blueprint seller conversion, support burden, CAC/ROAS, retention and repeatable Blueprint revenue remain unproven. |
| **AI-First Marketplace Directory** | **35%** | **43%** | Internet marketplace fragmentation, existence of many product/service endpoints, strong AI/headless technical fit and broad digital-market scale. | Direct buyer/agent demand for an aggregator, competitive gap, legal/indexing rights, affiliate coverage, SEO difficulty, CAC, conversion, seller willingness to pay and unit economics are materially unvalidated. |

## AI Autonomy derivation

`AI Autonomy Score = average(AI Buildability, AI Marketability, AI Deliverability, Low Human Dependency) × 10`

| Opportunity | AI Build | AI Market | AI Deliver | Low Human Dependency | AI Autonomy |
|---|---:|---:|---:|---:|---:|
| **Whop Business Blueprints** | 9 | 8 | 9 | 8 | **85/100** |
| **AI-First Marketplace Directory** | 9 | 9 | 9 | 9 | **90/100** |

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

## Table format rule

**Markdown is canonical.** It is readable by humans and agents, version-controlled, diffable, searchable, linkable and easy to update directly in GitHub.

Use a secondary CSV/XLSX only when the portfolio becomes large enough that we need heavier sorting, formulas, weighted scoring, pivots, charts or bulk analysis. If that happens, the spreadsheet is an analytical projection; this Markdown file remains the durable portfolio truth unless governance is explicitly changed.
