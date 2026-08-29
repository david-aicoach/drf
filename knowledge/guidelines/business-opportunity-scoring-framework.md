# DRF Business Opportunity Scoring Framework

**Status:** Canonical guideline  
**Version:** 1.2  
**Date:** 29 August 2026  
**Original governing issue:** #11  
**MRR revision issue:** #20  
**Execution-velocity revision issue:** #24

## Purpose

Use this framework to compare DRF business opportunities consistently, expose missing research, and prioritise businesses that can produce durable recurring revenue with low proportional human labour **and can reach the market without unnecessary build resistance**.

The framework deliberately separates commercial attractiveness from execution velocity. A strategically excellent business can therefore remain highly rated while being sequenced behind a nearly-as-good opportunity that can be sold next week.

## 1. Opportunity Score — 0 to 100

Score every factor from **0 to 10** and multiply by its weight. Weights sum to 100.

| Factor | Weight | Research question |
|---|---:|---|
| Market Size Now | 9 | How large is the current addressable market? |
| Market Growth | 9 | Is demand growing? |
| Timing / First-Mover Window | 5 | Is this early enough for advantage without being too early for demand? |
| Willingness to Pay | 7 | Is there evidence customers pay meaningful prices for the outcome? |
| AI Buildability | 7 | How much of creating the product/business can AI perform reliably? |
| AI Marketability | 7 | How much of SEO, content, outreach, advertising and funnel operation can AI perform? |
| AI Deliverability | 9 | How much fulfilment can AI execute repeatedly after a sale? |
| Low Human Dependency | 4 | How little mandatory human labour or founder involvement is required? Higher is better. |
| Startup Capital Efficiency | 6 | How cheaply can the business reach a credible first-sale test? |
| Speed to Revenue | 6 | How quickly can it realistically collect first revenue, considering the entire path? |
| Margin Potential | 5 | What contribution can remain after delivery and acquisition costs? |
| Scalability | 6 | Can revenue grow without proportional labour/cost growth? |
| Paid Growth Potential | 4 | Is there a credible positive-unit-economics paid acquisition path? |
| Defensibility / Moat | 5 | Can the opportunity build durable advantage? |
| **MRR / Recurring Revenue Quality** | **11** | Can it produce durable recurring revenue because customers receive continuing value? |
| **Total** | **100** | |

`weighted points = (factor score / 10) × factor weight`

`Opportunity Score = sum(weighted points)`

### Opportunity decision bands

| Score | Interpretation |
|---:|---|
| 85–100 | Exceptional — investigate/act quickly if evidence is sufficient |
| 75–84 | Strong opportunity |
| 65–74 | Worth a bounded test |
| 50–64 | Conditional |
| <50 | Low priority unless strategic reasons override |

### MRR guide

| MRR score | Interpretation |
|---:|---|
| 9–10 | Native subscription/usage/rebilling; continuing value and strong retention logic |
| 7–8 | Credible recurring subscription/retainer but churn/support dependence remains material |
| 4–6 | Monthly billing possible but underlying value partly one-off |
| 1–3 | Primarily transactional with optional recurring add-ons |
| 0 | No credible recurring-revenue model |

MRR is not passive income by itself. Heavy monthly human delivery must reduce AI Deliverability and Low Human Dependency.

## 2. Evidence Confidence — independent 0–100%

Evidence Confidence answers: **How much should we trust the current scoring inputs?**

| Confidence | Meaning |
|---:|---|
| 80–100% | Strong — current first-party or corroborated evidence plus operating evidence where relevant |
| 60–79% | Good enough for a small controlled test |
| 40–59% | Material assumptions remain |
| 20–39% | Mostly hypothesis / indirect evidence |
| 0–19% | Speculative idea |

Evidence labels: **Verified**, **Estimated**, **Missing**. Default capital gate: at least **60% confidence before material capital deployment**.

## 3. Research Completeness — independent 0–100%

Use the 15 Opportunity Score factors as the minimum research checklist. Complete = 1, Partial = 0.5, Missing = 0.

`Research Completeness = completed-equivalent factors / 15 × 100`

Research Completeness measures investigation, not attractiveness.

## 4. AI Autonomy Score — derived 0–100

Use AI Buildability, AI Marketability, AI Deliverability and Low Human Dependency.

`AI Autonomy Score = average(four scores) × 10`

## 5. Execution Velocity Score — independent 0–100

Execution Velocity answers: **How quickly and with how little resistance can DRF turn this opportunity into a repeatable sale and successful client delivery using assets already available?**

This is deliberately independent of Opportunity Score. It prevents a slow platform or marketplace build from displacing an almost equally attractive offer that can be packaged and sold immediately.

Score each dimension 0–10. Higher is always better/faster/easier.

| Execution factor | Weight | What it measures |
|---|---:|---|
| **Build / Setup Speed** | **25** | Time and effort to create a credible sellable version. Buying/forking/installing an existing snapshot or proven component should score much higher than custom platform development. |
| **Go-to-Market Launch Speed** | **20** | Time to have offer, pricing, landing page, tracking, CRM, outreach and initial paid/owned channels live. |
| **Sales-Cycle Speed** | **20** | Expected elapsed time from qualified prospect to cash collected. Existing warm relationships and obvious measurable ROI increase the score. |
| **Client Delivery / Onboarding Speed** | **20** | Time and resistance from sale to a working customer implementation. Repeatable configuration scores higher than bespoke consulting. |
| **Dependency / Resistance** | **15** | External approvals, data access, integrations, marketplace liquidity, SEO ranking, partner dependence, regulation and founder bottlenecks. Higher = fewer blockers. |
| **Total** | **100** | |

`Execution Velocity Score = Σ((execution factor / 10) × weight)`

### Execution bands

| Score | Meaning |
|---:|---|
| 85–100 | Immediate lane — package/test now |
| 70–84 | Fast lane — usually launchable within weeks |
| 55–69 | Build lane — useful but requires meaningful setup |
| 40–54 | Background lane — run alongside faster revenue work |
| <40 | Long-horizon lane — research/incubate; do not let it block faster opportunities |

## 6. Required time estimates

Every active opportunity must carry four explicit elapsed-time estimates:

1. **Time to Build / Sellable MVP** — founder approval to something credible enough to sell.
2. **Time to Market** — founder approval to offer + landing/funnel + CRM/tracking + first outbound/paid/owned acquisition live.
3. **Time to First Revenue** — realistic elapsed time to first collected cash, including sales cycle.
4. **Time to Deliver / Onboard One Client** — sale to working first-value implementation.

Use ranges, not false precision: `1–3 days`, `1–2 weeks`, `1–3 months`, etc. If the estimate cannot responsibly be made, write **Needs more research**.

### Avoiding double counting

- **Speed to Revenue** remains inside Opportunity Score because time-to-cash is a structural commercial quality.
- **Execution Velocity** is a separate sequencing control. It decomposes *why* revenue is fast or slow and measures build, GTM, sales, fulfilment and blockers.
- Do **not** add Execution Velocity points directly into the 100-point Opportunity Score.

## 7. Combined Execution Priority Score — derived 0–100

For sequencing the portfolio, use:

`Execution Priority Score = Opportunity Score × 0.70 + Execution Velocity Score × 0.30`

Why 70/30: DRF should not choose a weak business merely because it is easy to launch, but execution speed is material enough to reorder otherwise strong opportunities.

### Confidence gate

The numerical priority score does not erase uncertainty. Any opportunity below **60% Evidence Confidence** is automatically **Research First** regardless of ranking. Where timing itself is uncertain, mark the relevant estimate **Needs more research**.

### Staircase rule

Use Execution Priority Score to identify the **top five staircase**, then apply founder judgement for strategic overlap:

1. Start the highest-value, fastest-to-cash opportunity.
2. Reuse its assets, funnels, automation and customer learning in Stair 2.
3. Add the next offer only when Stair 1 has reached a defined launch/traction checkpoint.
4. Slow-burn asset businesses may run in a bounded background lane but must not consume the primary revenue lane.
5. Prefer one reusable commercial engine across adjacent offers rather than five independent marketing stacks.

## 8. Research requirements

Useful evidence includes TAM/SAM, growth, pricing, platform/customer counts, search trends, competitor economics, actual workflows, integration requirements, support load, approval requirements, CAC, sales cycle, retention, gross margin and recurring value.

For Execution Velocity specifically, investigate:

- existing snapshots/templates/components available to buy, fork or install;
- required customisation hours;
- landing/funnel and checkout readiness;
- CRM, WhatsApp, email, ad and calendar integration work;
- availability of warm audiences and existing client relationships;
- procurement/contract/payment friction;
- onboarding data/access requirements;
- repeatable versus bespoke delivery steps;
- external approvals, ranking delays, marketplace liquidity and partner SLAs.

If evidence does not exist, mark it **Missing / Needs more research** rather than inventing certainty.

## 9. Portfolio decision rules

- High opportunity + high confidence + high velocity: **primary execution lane**.
- High opportunity + low confidence: **validate before meaningful spend**.
- High opportunity + low velocity: **background/incubation lane**.
- High MRR + high AI autonomy: particularly attractive.
- High MRR + heavy human delivery: investigate disguised managed-service burden.
- Existing warm assets/channels come before paid acquisition unless evidence says otherwise.
- Prefer **SELL / USE / INTEGRATE / AUTOMATE / BUILD**, in that order when practical.

Tie-break similar opportunities by: (1) higher MRR, (2) higher Execution Velocity, (3) higher AI Autonomy, (4) faster first revenue, (5) lower startup capital.

## 10. Canonical implementation

Portfolio: `businesses/OPPORTUNITIES.md`

Every active opportunity must show at minimum:

- Opportunity Score /100
- MRR /10
- AI Autonomy /100
- Evidence Confidence %
- Research Completeness %
- Execution Velocity /100
- Execution Priority /100
- Time to Build
- Time to Market
- Time to First Revenue
- Time to Deliver / Onboard One Client
- all 15 Opportunity Score factors
- next action
- canonical detail/research link

Markdown remains canonical. CSV/XLSX may support analytics but must not silently become conflicting truth.