# DRF Business Opportunity Scoring Framework

**Status:** Canonical guideline  
**Version:** 1.0  
**Date:** 29 August 2026  
**Governing issue:** #11

## Purpose

Use this framework to compare DRF business opportunities consistently, expose missing research, and prevent attractive ideas from receiving capital simply because they sound exciting.

The framework has **three separate scoring layers**:

1. **Opportunity Score — 0 to 100**: commercial attractiveness and operating quality.
2. **Evidence Confidence — 0 to 100%**: how strongly the score is supported by current evidence.
3. **Research Completeness — 0 to 100%**: how much of the required research has actually been completed.

Evidence Confidence and Research Completeness **must never mathematically alter the Opportunity Score**. They are independent decision controls.

A fourth derived metric, **AI Autonomy Score**, measures how independently AI can build, market and deliver the business.

---

## 1. Opportunity Score — 100 points

Score every factor from **0 to 10**. Multiply by its weight. The weights sum to 100.

| Factor | Weight | Research question |
|---|---:|---|
| Market Size Now | 10 | How large is the current addressable market? Look for traffic, buyers, spend, transactions, TAM/SAM and competitor scale. |
| Market Growth | 10 | Is demand growing? Research YoY growth, search trends, adoption, investment and category expansion. |
| Timing / First-Mover Window | 6 | Is this early enough for positioning advantage without being too early for demand? |
| Willingness to Pay | 8 | Is there evidence that customers pay meaningful prices? Look for transactions, competitor revenue, CPC and price points. |
| AI Buildability | 8 | How much of creating the product/business can AI perform reliably? |
| AI Marketability | 8 | How much of SEO, content, outreach, listing optimisation, advertising and funnel operation can AI perform? |
| AI Deliverability | 10 | How much of fulfilment can AI execute repeatedly after a sale? |
| Low Human Dependency | 5 | How little mandatory human labour, meetings, KYC interaction, judgement or founder involvement is required? Higher is better. |
| Startup Capital Efficiency | 7 | How cheaply can the business reach a credible first-sale test? Higher score = lower capital requirement. |
| Speed to Revenue | 7 | How quickly can it realistically collect first revenue? |
| Margin Potential | 5 | What gross/net contribution can remain after platform fees, inference, labour, support, advertising and tooling? |
| Scalability | 6 | Can revenue grow substantially without proportional labour/cost growth? |
| Paid Growth Potential | 5 | Is there a credible path to invest paid-acquisition budget at positive unit economics? |
| Defensibility / Moat | 5 | Can the opportunity build durable advantage through data, SEO, network effects, distribution, integrations, IP or brand? |
| **Total** | **100** | |

### Formula

For each factor:

`weighted points = (factor score / 10) × factor weight`

Then:

`Opportunity Score = sum of all weighted points`

Round the portfolio display to the nearest whole number. Keep decimal precision in detailed analysis when useful.

### Opportunity decision bands

| Opportunity Score | Interpretation |
|---:|---|
| **85–100** | Exceptional — investigate/act quickly if evidence is sufficient |
| **75–84** | Strong opportunity |
| **65–74** | Worth a bounded test |
| **50–64** | Conditional — research gaps or structural weakness |
| **<50** | Low priority unless strategic reasons override |

A high Opportunity Score alone is **not** permission for material capital deployment.

---

## 2. Evidence Confidence — independent 0–100%

Evidence Confidence answers:

> How much should we trust the current scoring inputs?

It measures evidence quality, not opportunity quality.

### Suggested bands

| Confidence | Meaning |
|---:|---|
| **80–100%** | Strong — current first-party or multiple corroborated sources, plus real operating evidence where relevant |
| **60–79%** | Good enough for a small controlled test |
| **40–59%** | Material assumptions remain; research before meaningful spend |
| **20–39%** | Mostly hypothesis / indirect evidence |
| **0–19%** | Speculative idea |

### Evidence labels

Use these inside research and score justifications:

- **Verified** — supported by reliable current evidence or direct operating data.
- **Estimated** — reasonable inference based on partial evidence.
- **Missing** — required evidence has not yet been obtained.

### Capital gate

As a default, **Evidence Confidence should be at least 60% before material capital deployment**.

A lower-confidence idea can still receive a cheap, reversible validation test when the test itself is designed to increase confidence.

---

## 3. Research Completeness — independent 0–100%

Research Completeness answers:

> Have we investigated the categories required to score this business properly?

It is a checklist score, not an opinion score.

Use the 14 Opportunity Score factors as the minimum research checklist. For each factor assign:

- **Complete = 1** — enough evidence exists to score responsibly.
- **Partial = 0.5** — some evidence exists but important gaps remain.
- **Missing = 0** — materially unresearched.

Formula:

`Research Completeness = completed-equivalent factors / 14 × 100`

Round to the nearest whole percentage.

This makes the scoring system double as the **research brief**. A low completeness percentage tells the research agent exactly which dimensions remain missing.

---

## 4. AI Autonomy Score — derived 0–100

AI Autonomy is deliberately separate from the Opportunity Score because it answers a different portfolio question:

> How independently can AI operate this business after compliant human ownership/setup?

Use the four operating dimensions:

- AI Buildability
- AI Marketability
- AI Deliverability
- Low Human Dependency

Formula:

`AI Autonomy Score = average of the four 0–10 scores × 10`

Example:

```text
AI Buildability      9
AI Marketability     9
AI Deliverability   10
Low Human Dependency 8

AI Autonomy Score = 90/100
```

This metric is especially useful for sorting DRF opportunities by **economic potential per unit of required human labour**.

---

## 5. Research requirements by factor

Before treating a factor as complete, try to obtain the following evidence.

| Factor | Useful evidence |
|---|---|
| Market Size Now | TAM/SAM estimates, platform GMV, buyer counts, site traffic, transaction volume, competitor revenue |
| Market Growth | YoY growth, Google/search trends, category traffic trend, funding, adoption curves, regulatory/technology tailwinds |
| Timing | Launch date, competitor density, SERP difficulty, marketplace supply, product maturity, adoption stage |
| Willingness to Pay | Actual price points, sales, ARPU, CPC, contract values, customer interviews, competitor earnings |
| AI Buildability | Task decomposition, required tools, model capability, automation tests, human QA requirements |
| AI Marketability | Searchability, platform listing tools, content scalability, APIs, ad platform compatibility, outreach rules |
| AI Deliverability | Fulfilment workflow, exception rate, support load, integrations, agent reliability, SLA requirements |
| Human Dependency | Identity/KYC, calls, physical work, regulated judgement, approvals, account restrictions |
| Startup Capital Efficiency | Required software, subscriptions, data, inventory, licences, team cost, paid traffic, setup costs |
| Speed to Revenue | Build time, approval time, sales cycle, marketplace onboarding, customer acquisition cycle |
| Margin Potential | Selling price minus platform, inference, labour, support, refunds, acquisition and infrastructure costs |
| Scalability | Marginal delivery cost, support scaling, automation, repeatability, geographic constraints |
| Paid Growth Potential | Search/social CPC, conversion rates, AOV/LTV, available audiences, competitor ad activity, testable CAC |
| Defensibility | Proprietary data, network effects, SEO authority, switching cost, distribution, brand, workflow/IP advantages |

If the research does not contain evidence for a factor, mark that factor **Missing** rather than silently inventing certainty.

---

## 6. Portfolio decision rules

Use the scores together, not interchangeably.

### Example interpretations

**High opportunity + high confidence**  
Act or test quickly.

**High opportunity + low confidence**  
Prioritise research/validation because upside may be large but evidence is weak.

**Moderate opportunity + high confidence**  
Probably deprioritise unless strategically useful.

**High AI autonomy + strong economics**  
Particularly attractive to DRF because the business can compound without proportional human labour.

**Low AI deliverability**  
Treat with caution even when AI can build and market the offer; the business may become a human-services operation after the sale.

---

## 7. Canonical implementation

The portfolio lives at:

`businesses/OPPORTUNITIES.md`

That file must show at minimum for every active opportunity:

- Opportunity Score /100
- AI Autonomy Score /100
- Evidence Confidence %
- Research Completeness %
- the 14 underlying factor scores (0–10)
- next action
- canonical detail/research link

All early scores are provisional until supported by research. Update scores when material evidence changes rather than preserving stale rankings.

Markdown remains canonical. CSV/XLSX may be created later for pivots, formulas, charts and portfolio analytics, but must not silently become a conflicting source of truth.
