# DRF Niche Attractiveness Scoring Framework

**Status:** Canonical guideline  
**Version:** 1.0  
**Date:** 29 August 2026  
**Governing issue:** #26

## Purpose

The DRF Business Opportunity Score answers **what business/product is attractive?**

This framework answers the next question:

> **Exactly which market should that product be sold to first?**

Never treat a generic product such as Revenue Recovery, Instant Quote, AI Voice or HighLevel Vertical SaaS as a complete go-to-market decision.

The atomic commercial unit is:

`product × vertical × sub-niche × geography × ICP`

Example:

`Instant Quote × specialist construction × drywall/gypsum/false-ceiling installers × UAE × owner-led contractors receiving frequent quotation enquiries`

This is a separate score. **Do not merge it into the 100-point Business Opportunity Score.** A great product can have a poor niche; a great niche can be a poor fit for a specific product.

## 1. Hormozi market-selection core

Use the four market characteristics popularised by Alex Hormozi as the core market gate:

1. **Massive pain** — the prospect has an important, expensive or urgent problem.
2. **Purchasing power** — the prospect has money and can economically pay for the solution.
3. **Easy to target** — the prospects can be identified and reached efficiently.
4. **Growing market** — the market is expanding or has a durable favourable demand trend.

DRF extends these with factors required for vertical SaaS and outcome-based recurring products.

## 2. Niche Attractiveness Score — 0 to 100

Score each factor 0–10. Weights sum to 100.

| Factor | Weight | Research question |
|---|---:|---|
| **Pain / Urgency** | **15** | Is the problem acute, expensive, frequent and important enough to cause action now? |
| **Purchasing Power / Customer Economics** | **12** | Can the ICP comfortably pay the target monthly/setup price from normal business economics? |
| **Easy to Target / Reachability** | **10** | Can we build a precise prospect list and reach the decision-maker through ads, search, outbound, associations, directories or existing relationships? |
| **Market Growth / Tailwind** | **8** | Is the niche growing or benefiting from a structural trend? |
| **Market Volume / Density** | **10** | Are there enough qualified prospects in the chosen geography to support the revenue target without broadening the ICP? |
| **Underserved / Competition Gap** | **10** | Is there weak specialised competition or poor incumbent service? Higher score = more underserved / easier differentiation. |
| **Measurable Revenue Upside / ROI** | **12** | Can the outcome be tied to recovered revenue, more bookings, faster quotes, lower leakage, more appointments or another measurable economic result? |
| **Product-System Fit** | **10** | Does the selected product solve this niche's actual workflow with little bespoke engineering? |
| **Recurring Pain / Retention Logic** | **8** | Does the problem recur every month so cancelling recreates meaningful pain or leakage? |
| **Sales + Fulfilment Simplicity** | **5** | Can the offer be explained, sold, onboarded and delivered repeatedly with low custom work and low compliance/integration resistance? |
| **Total** | **100** | |

`Niche Attractiveness Score = Σ((factor score / 10) × weight)`

## 3. Decision bands

| Score | Interpretation |
|---:|---|
| **85–100** | Sniper niche — priority validation / launch candidate |
| **75–84** | Strong niche — validate quickly |
| **65–74** | Testable — needs sharper ICP or evidence |
| **50–64** | Weak / conditional — do not prioritise without strategic reason |
| **<50** | Reject or materially redefine |

## 4. Evidence Confidence stays separate

Do not reward a niche merely because it sounds plausible.

Every score must also carry **Niche Evidence Confidence /100%**:

- **80–100%:** strong current evidence + preferably prospect/customer evidence;
- **60–79%:** sufficient for a bounded market test;
- **40–59%:** material assumptions remain;
- **<40%:** hypothesis only.

Default rule: a niche scoring 90/100 with 35% confidence is **Research First**, not a launch priority.

## 5. Hard gates

Before a niche enters the primary execution lane, answer:

1. **Who exactly pays?** Named role/owner type, business size and geography.
2. **What painful event triggers purchase?**
3. **What is one recovered/created outcome worth?**
4. **How many qualified prospects exist?**
5. **Can we obtain/reach a list of them?**
6. **What do they currently use instead?**
7. **Why is the DRF offer materially better or more specialised?**
8. **Can the product be deployed repeatedly without becoming bespoke consulting?**
9. **Does the pain recur enough to support MRR?**
10. **Are there platform, privacy, regulatory or data-rights constraints that damage the model?**

If #1, #2, #4 or #5 cannot be answered, the niche is not launch-ready.

## 6. Required niche hierarchy

Research should progressively narrow rather than stop at a broad industry.

`market → vertical → sub-niche → geography → firmographic ICP → trigger/problem → product`

Example:

`construction → specialist contractors → drywall/gypsum/false ceilings → Dubai/UAE → owner-led SMEs with frequent inbound quote requests → slow/manual quotation → Instant Quote + Quote-to-Cash`

Another:

`hospitality → short-term rentals → multi-unit holiday-home operators/property managers → Dubai → operators with sufficient direct-brand demand and repeat guests → OTA dependence + fragmented guest CRM → compliant direct-booking website + HighLevel Rentals + CRM`

## 7. Product × niche matrix

The same niche must be scored separately for each product when fit differs.

Examples:

- HVAC maintenance × Revenue Recovery
- HVAC maintenance × AI Voice
- drywall installers × Instant Quote
- drywall installers × Revenue Recovery
- dental implants × Missed Lead Conversion
- holiday-home operators × HighLevel Rentals / Direct Booking

Do not conclude that a niche is universally attractive because it fits one product.

## 8. Initial hypotheses from issue #26

These are **research candidates, not locked scores**:

### A. UAE HVAC / MEP contractors × Revenue Recovery

Hypothesis: strong because quotations, maintenance contracts, inbound enquiries and stale opportunities have meaningful ticket value; contractor markets are identifiable; recurring follow-up leakage creates measurable ROI.

Research next: company count, decision-maker reachability, average contract/quote economics, existing CRM penetration, response/follow-up benchmarks and specialised competitor density.

### B. UAE drywall / gypsum / false-ceiling installers × Instant Quote

Hypothesis: potentially attractive micro-vertical because service scope can often be parameterised by dimensions/material/specification while fast quotation is commercially important. The narrow niche creates strong messaging and reusable workflow IP.

Research next: prospect volume, average job value, quotation formula standardisation, margin sensitivity, search/outbound reachability and whether instant ranges can be safely provided before site inspection.

### C. Dubai holiday-home operators/property managers × HighLevel Rentals + Direct Booking + CRM

Hypothesis: attractive because HighLevel Rentals now provides multi-day booking, inventory/listing variants, advanced pricing, branded booking pages, payments/deposits and external iCal synchronisation. The product can combine owned website, booking, CRM, lifecycle automation and repeat-guest operations.

**Critical compliance constraint:** do not build the economics around taking Airbnb-provided guest contact information and using it for off-platform marketing/direct repeat bookings in violation of Airbnb's Off-Platform Policy or applicable privacy/marketing-consent rules. The model must be designed around lawful first-party data acquisition, consent, owned-channel demand and platform-compliant guest relationships.

Research next: Dubai operator count by portfolio size, OTA commission economics, direct-booking adoption, repeat-guest rates, existing PMS/channel-manager stack, HighLevel Rentals integration gaps, consent/data-rights design and specialised competitor density.

## 9. Sniper selection rule

Do not shotgun a HighLevel capability across every service business.

For each product:

1. generate 20–50 plausible verticals;
2. narrow each into commercially meaningful sub-niches;
3. score `product × niche × geography × ICP`;
4. research the top 10 deeply;
5. contact/test the top 3;
6. choose one beachhead niche;
7. build one offer, snapshot, funnel, sales script and onboarding system for that niche;
8. only clone into adjacent niches after evidence.

Prefer domination of a small valuable category over generic presence in a huge category.

## 10. Relationship to DRF portfolio scoring

Use the layers in this order:

`Business Opportunity Score`
→ `Niche Attractiveness Score`
→ `Evidence Confidence`
→ `Execution Velocity`
→ `live market test`
→ `unit economics / retention evidence`

The Business Opportunity Score selects the **vehicle**.
The Niche Attractiveness Score selects the **target**.
Execution Velocity selects **sequence**.
Live evidence decides whether DRF scales.

## 11. Canonical implementation

- Portfolio/product score: `knowledge/guidelines/business-opportunity-scoring-framework.md`
- Niche score: this file
- Portfolio index: `businesses/OPPORTUNITIES.md`

Future HighLevel opportunity research should include a ranked niche table rather than only a generic list of 'strong verticals'.