# DRF Layer 2 — Niche Attractiveness Scoring

**Owner:** `skills/drf-opportunity-factory/SKILL.md`  
**Purpose:** answer **Exactly which market should receive this business/outcome first?**

## Position

```text
Business Opportunity + Layer 1 evidence
→ ranked Business × Niche candidates
→ Niche Score + Niche Evidence Confidence
→ selected beachhead
→ offer + price + GTM + delivery
→ RBS + Return + DRF Proof + Stage + Capital + Next Proof
```

Opportunity Score, Niche Score and RBS remain separate.

## Atomic niche

`outcome/product × vertical × sub-niche × geography × ICP × trigger/problem`

Do not stop at a broad industry or a vendor label.

## Niche Attractiveness Score — 100 points
Score each factor 0–10 and apply the weight.

| Factor | Weight | Core question |
|---|---:|---|
| Pain / Urgency | 15 | Is the problem acute, expensive, frequent and action-driving? |
| Purchasing Power / Customer Economics | 12 | Can the ICP comfortably pay from normal economics? |
| Easy to Target / Reachability | 10 | Can the decision-maker be identified and reached precisely? |
| Market Growth / Tailwind | 8 | Is the niche growing or structurally durable? |
| Market Volume / Density | 10 | Are there enough qualified prospects in the geography? |
| Underserved / Competition Gap | 10 | Is specialist competition weak/generic enough to differentiate? |
| Measurable Revenue Upside / ROI | 12 | Can the outcome tie to revenue, booking, speed, leakage or cost? |
| Product-System Fit | 10 | Does the outcome fit the real workflow without heavy custom engineering? |
| Recurring Pain / Retention Logic | 8 | Does the pain recur enough to support retention/MRR? |
| Sales + Fulfilment Simplicity | 5 | Can it be sold/onboarded/delivered repeatedly with manageable friction? |
| **Total** | **100** | |

## Decision bands
- 85–100: **Sniper** — priority live-validation candidate
- 75–84: **Strong** — validate quickly
- 65–74: **Testable** — sharpen ICP/evidence
- 50–64: **Weak/conditional**
- <50: reject/redefine

## Niche Evidence Confidence /100
Keep confidence separate from score.

- 80–100: strong current niche-specific evidence
- 60–79: adequate for bounded underwriting/test
- 40–59: material assumptions remain
- <40: hypothesis

A 90/100 niche with 35% confidence is **Research First**.

## Required niche evidence
For serious candidates, research where available:
- multiple materially similar operators;
- exact offer/positioning;
- setup and recurring/usage/licence/commission/upsell pricing;
- customer count/reviews/case studies/sales/hiring/longevity/expansion signals;
- advertising, SEO, outbound, partnerships, funnels and marketplaces;
- onboarding, support and delivery pattern;
- recurring-value/retention logic;
- failures, complaints, churn, refunds, margin/support pressure;
- current incumbents/substitutes;
- regulation/privacy/data/system constraints;
- transferability to DRF's geography/ICP/channel/assets.

Broad category proof is not automatic niche proof. Record business-level EMP separately from niche-specific comparable evidence.

## Hard gates
Before selecting a beachhead, answer:
1. Who exactly pays?
2. What painful event triggers purchase?
3. What measurable outcome is sold?
4. What is one outcome worth?
5. How many qualified prospects exist?
6. Can DRF reach a list of them?
7. Which customer channel dominates?
8. What system of record/incumbent tools exist?
9. What do they use instead?
10. Which successful comparable operators prove current demand/pricing?
11. Why is the DRF offer better/specialised/transferable?
12. Can delivery repeat without bespoke consulting?
13. Does pain recur enough for retention/MRR?
14. Any platform/privacy/regulatory/data constraint?
15. What counter-evidence could invalidate the thesis?

If payer, trigger, market volume or reachability cannot be answered, the niche is not launch-ready.

## Ranking process
1. Generate 20–50 plausible candidates when the opportunity warrants breadth.
2. Remove obvious poor fits cheaply.
3. Score the strongest candidates.
4. Deep-research the top group enough to separate real from superficial fit.
5. Preserve the ranked list in `businesses/NICHES.md`.
6. Select one beachhead and a runner-up.
7. Continue to commercial design/underwriting.

The same niche must be scored separately for different outcomes when product fit differs.

## Architecture handoff
After niche selection define:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

Keep calculations/state transitions/routing deterministic where possible. Use agents where judgement/research/exceptions materially improve value. Do not replace a capable incumbent system merely to force a preferred vendor.

UAE service-business default unless evidence says otherwise:

`WhatsApp → one CRM/system of record → deterministic lifecycle automation → native AI → external agent where materially useful`

Detailed architecture: `outcome-first-architecture.md` in this Skill.

## Commercial handoff
The selected beachhead must feed:
- measurable offer/promise;
- setup + recurring/other price logic;
- first-10 and first-100 acquisition route where defensible;
- GTM/funnel/sales-cycle assumptions;
- onboarding/support/time-to-value;
- minimum viable delivery architecture;
- RBS + Return;
- DRF Proof + Stage + Capital + Next Proof.

Reverse-engineer successful operators before inventing the commercial pattern.
