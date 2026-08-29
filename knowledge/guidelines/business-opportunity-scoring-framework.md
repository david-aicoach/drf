# DRF Business Opportunity Scoring Framework

**Status:** Canonical guideline  
**Version:** 1.1  
**Date:** 29 August 2026  
**Original governing issue:** #11  
**MRR revision issue:** #20

## Purpose

Use this framework to compare DRF business opportunities consistently, expose missing research, and prevent attractive ideas from receiving capital simply because they sound exciting.

DRF is deliberately biased toward businesses that can produce **durable monthly recurring revenue with low proportional human labour**. Recurring revenue is therefore a first-class weighted factor rather than an implied benefit hidden inside scalability or margins.

The framework has three separate scoring layers:

1. **Opportunity Score — 0 to 100**: commercial attractiveness and operating quality.
2. **Evidence Confidence — 0 to 100%**: how strongly the score is supported by current evidence.
3. **Research Completeness — 0 to 100%**: how much of the required research has actually been completed.

Evidence Confidence and Research Completeness never mathematically alter the Opportunity Score. They are independent decision controls.

A fourth derived metric, **AI Autonomy Score**, measures how independently AI can build, market and deliver the business.

---

## 1. Opportunity Score — 100 points

Score every factor from **0 to 10**. Multiply by its weight. The weights sum to 100.

| Factor | Weight | Research question |
|---|---:|---|
| Market Size Now | 9 | How large is the current addressable market? Look for buyers, spend, transactions, TAM/SAM and competitor/platform scale. |
| Market Growth | 9 | Is demand growing? Research YoY growth, adoption, investment, search trends and category expansion. |
| Timing / First-Mover Window | 5 | Is this early enough for positioning advantage without being too early for demand? |
| Willingness to Pay | 7 | Is there evidence that customers pay meaningful prices for the outcome? |
| AI Buildability | 7 | How much of creating the product/business can AI perform reliably? |
| AI Marketability | 7 | How much of SEO, content, outreach, listing optimisation, advertising and funnel operation can AI perform? |
| AI Deliverability | 9 | How much of fulfilment can AI execute repeatedly after a sale? |
| Low Human Dependency | 4 | How little mandatory human labour, meetings, judgement or founder involvement is required? Higher is better. |
| Startup Capital Efficiency | 6 | How cheaply can the business reach a credible first-sale test? Higher score = lower capital requirement. |
| Speed to Revenue | 6 | How quickly can it realistically collect first revenue? |
| Margin Potential | 5 | What contribution can remain after platform fees, inference, labour, support, advertising and tooling? |
| Scalability | 6 | Can revenue grow substantially without proportional labour/cost growth? |
| Paid Growth Potential | 4 | Is there a credible path to invest paid-acquisition budget at positive unit economics? |
| Defensibility / Moat | 5 | Can the opportunity build durable advantage through data, SEO/AEO, network effects, distribution, integrations, IP, workflow or brand? |
| **MRR / Recurring Revenue Quality** | **11** | Can the business produce durable monthly recurring revenue because customers receive continuing value and have a strong reason to remain subscribed? |
| **Total** | **100** | |

### Why MRR carries the largest weight

DRF is intended to build compounding income, not merely a sequence of one-off projects. A business that repeatedly reacquires the same revenue every month is structurally stronger than an otherwise similar project business.

However, **ability to charge monthly is not enough**. MRR must represent recurring value.

Use this guide:

| MRR score | Interpretation |
|---:|---|
| **9–10** | Native subscription, usage/rebilling or recurring-service economics; ongoing customer value; strong retention logic; largely automated billing/delivery. |
| **7–8** | Credible recurring subscription/retainer with continuing value, but churn, support or renewal dependence remains material. |
| **4–6** | Monthly billing is possible, but the underlying value is partly one-off or customers have weak reasons to remain subscribed. |
| **1–3** | Primarily one-time/project/transactional revenue with only optional recurring add-ons. |
| **0** | No credible recurring-revenue model. |

**MRR is not passive income by itself.** A high-MRR business with heavy monthly human delivery should lose points under AI Deliverability and Low Human Dependency.

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

A high Opportunity Score alone is not permission for material capital deployment.

---

## 2. Evidence Confidence — independent 0–100%

Evidence Confidence answers: **How much should we trust the current scoring inputs?**

| Confidence | Meaning |
|---:|---|
| **80–100%** | Strong — current first-party or multiple corroborated sources, plus operating evidence where relevant |
| **60–79%** | Good enough for a small controlled test |
| **40–59%** | Material assumptions remain; research before meaningful spend |
| **20–39%** | Mostly hypothesis / indirect evidence |
| **0–19%** | Speculative idea |

Evidence labels:

- **Verified** — supported by reliable current evidence or direct operating data.
- **Estimated** — reasonable inference based on partial evidence.
- **Missing** — required evidence has not yet been obtained.

### Capital gate

As a default, Evidence Confidence should be at least **60% before material capital deployment**. A lower-confidence idea can still receive a cheap, reversible validation test when the test itself is designed to increase confidence.

---

## 3. Research Completeness — independent 0–100%

Use the **15 Opportunity Score factors** as the minimum research checklist. For each factor assign:

- **Complete = 1** — enough evidence exists to score responsibly.
- **Partial = 0.5** — some evidence exists but important gaps remain.
- **Missing = 0** — materially unresearched.

Formula:

`Research Completeness = completed-equivalent factors / 15 × 100`

Round to the nearest whole percentage.

A low-quality factor can still be fully researched. Research Completeness measures whether we investigated it, not whether the result was favourable.

---

## 4. AI Autonomy Score — derived 0–100

AI Autonomy answers: **How independently can AI operate this business after compliant human ownership/setup?**

Use:

- AI Buildability
- AI Marketability
- AI Deliverability
- Low Human Dependency

Formula:

`AI Autonomy Score = average of the four 0–10 scores × 10`

---

## 5. Research requirements by factor

| Factor | Useful evidence |
|---|---|
| Market Size Now | TAM/SAM, platform/customer counts, buyer counts, transaction volume, competitor revenue |
| Market Growth | YoY growth, adoption, search trends, funding/investment, technology/regulatory tailwinds |
| Timing | Launch date, competitor density, SERP difficulty, product maturity, marketplace supply |
| Willingness to Pay | Actual prices, subscriptions, ARPU, CPC, contract values, customer interviews, competitor earnings |
| AI Buildability | Task decomposition, required tools, model capability, automation tests, QA requirements |
| AI Marketability | Searchability, marketplace distribution, content scalability, APIs, ads and outreach rules |
| AI Deliverability | Fulfilment workflow, exception rate, support load, integrations, reliability, SLA requirements |
| Human Dependency | Calls, physical work, approvals, regulated judgement, identity/KYC, support burden |
| Startup Capital Efficiency | Required software, subscriptions, licences, data, inventory, team and paid-traffic cost |
| Speed to Revenue | Build/onboarding time, approvals, sales cycle, marketplace launch and customer-acquisition cycle |
| Margin Potential | Price minus platform, inference, labour, support, refunds, acquisition and infrastructure costs |
| Scalability | Marginal delivery cost, support scaling, automation, geographic limits and repeatability |
| Paid Growth Potential | CPC/CPM, conversion, AOV/LTV, available audiences and testable CAC |
| Defensibility | Proprietary data, workflow/IP, switching cost, distribution, SEO/AEO authority, integrations and brand |
| **MRR / Recurring Revenue Quality** | Native subscription/usage billing, recurring customer need, renewal/retention evidence, churn, gross retention, expansion revenue, rebilling/markup economics, low servicing burden and switching cost |

If evidence does not exist, mark the factor **Missing** rather than silently inventing certainty.

---

## 6. Portfolio decision rules

Use the scores together, not interchangeably.

- **High opportunity + high confidence:** act or test quickly.
- **High opportunity + low confidence:** prioritise validation before meaningful spend.
- **High MRR + high AI autonomy:** particularly attractive because revenue can compound without proportional labour.
- **High MRR + low human-dependency score:** recurring revenue may actually be a disguised managed-service business; investigate delivery burden.
- **Low MRR:** acceptable only if margins, speed, distribution or strategic asset creation compensate materially.
- **Low AI deliverability:** treat cautiously even when AI can build and market the offer.

### Tie-break rule

When two opportunities have similar total scores and evidence confidence, prefer the one with:

1. higher MRR score;
2. higher AI Autonomy;
3. faster revenue;
4. lower startup capital.

---

## 7. Canonical implementation

The portfolio lives at:

`businesses/OPPORTUNITIES.md`

That file must show at minimum for every active opportunity:

- Opportunity Score /100
- **MRR score /10**
- AI Autonomy Score /100
- Evidence Confidence %
- Research Completeness %
- all 15 underlying factor scores (0–10)
- next action
- canonical detail/research link

All early scores are provisional until supported by research. Update scores when material evidence changes rather than preserving stale rankings.

Markdown remains canonical. CSV/XLSX may be created later for pivots, formulas, charts and portfolio analytics, but must not silently become a conflicting source of truth.
