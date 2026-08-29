# DRF Niche Attractiveness Scoring Framework

**Status:** Canonical guideline  
**Version:** 1.2  
**Date:** 29 August 2026  
**Original governing issue:** #26  
**Outcome-first architecture revision issue:** #33

## Purpose

The DRF Business Opportunity Score answers **what business/outcome is attractive?**

This framework answers the next question:

> **Exactly which market should that outcome be sold to first?**

Never treat a generic capability such as Revenue Recovery, Instant Quote, AI Voice, HighLevel, Kapso, Grok Bot or another platform as a complete go-to-market decision.

The atomic **niche-selection unit** is:

`outcome/product × vertical × sub-niche × geography × ICP × trigger/problem`

Example:

`Instant Quote × specialist construction × drywall/gypsum/false-ceiling installers × UAE × owner-led contractors receiving frequent quotation enquiries × slow/manual quoting`

After the niche is selected, define the full **commercial deployment unit**:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

The niche score remains separate from delivery architecture. **Do not merge it into the 100-point Business Opportunity Score.** A great product can have a poor niche; a great niche can be a poor fit for a specific product; and a strong outcome/niche combination can still fail if the channel or system architecture is wrong.

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
| **Product-System Fit** | **10** | Does the selected outcome/product solve this niche's actual workflow with little bespoke engineering, using a practical channel/system architecture? |
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
3. **What measurable outcome is being sold?**
4. **What is one recovered/created outcome worth?**
5. **How many qualified prospects exist?**
6. **Can we obtain/reach a list of them?**
7. **What customer channel dominates the actual buying/service workflow?**
8. **What system of record do they use now, and what switching/integration friction exists?**
9. **What do they currently use instead?**
10. **Why is the DRF offer materially better or more specialised?**
11. **Can the product be deployed repeatedly without becoming bespoke consulting?**
12. **Does the pain recur enough to support MRR?**
13. **Are there platform, privacy, regulatory or data-rights constraints that damage the model?**

If #1, #2, #5 or #6 cannot be answered, the niche is not launch-ready.

For UAE service businesses, if WhatsApp is not the proposed primary customer channel, document evidence for why another channel dominates.

## 6. Required niche hierarchy

Research should progressively narrow rather than stop at a broad industry.

`market → vertical → sub-niche → geography → firmographic ICP → trigger/problem → measurable outcome/product`

Example:

`construction → specialist contractors → drywall/gypsum/false ceilings → Dubai/UAE → owner-led SMEs with frequent inbound quote requests → slow/manual quotation → Instant Quote + Quote-to-Cash`

Another:

`hospitality → short-term rentals → multi-unit holiday-home operators/property managers → Dubai → operators with sufficient direct-brand demand and repeat guests → OTA dependence + fragmented guest CRM → compliant direct-booking website + CRM/lifecycle system`

Only after this market sequence is clear should the implementation stack be chosen.

## 7. Outcome/product × niche matrix

The same niche must be scored separately for each outcome/product when fit differs.

Examples:

- HVAC maintenance × Revenue Recovery
- HVAC maintenance × AI Voice
- drywall installers × Instant Quote
- drywall installers × Revenue Recovery
- dental implants × Missed Lead Conversion
- holiday-home operators × Direct Booking + CRM

Do not conclude that a niche is universally attractive because it fits one product.

Likewise, do not conclude that one delivery vendor is universally required. The same outcome/niche may be delivered through different channels, systems of record and agents.

## 8. Architecture fit after niche selection

Once a niche is strong enough to test, define:

```text
Outcome
× Niche
× Customer Channel
× System of Record
× Agent Layer
```

### Customer channel

Choose the channel the niche actually uses: WhatsApp, voice, email, web chat/forms, social messaging or another channel.

### System of record

Choose one canonical home for durable business state such as contacts, opportunities, lifecycle stages, consent, attribution, bookings and payments. Examples may include HighLevel, HubSpot or an existing client CRM.

### Agent layer

Use an external agent only where judgement, research, cross-system work, exceptions or autonomous orchestration materially improve the outcome. Grok Bot, ChatGPT, Claude and future models are replaceable implementation choices.

### UAE service-business default

For UAE service businesses:

`WhatsApp first → CRM/system of record → deterministic automation → native AI → external agent where needed`

HighLevel can own both WhatsApp and CRM where simplicity dominates. Kapso can own WhatsApp separately where direct MCP/API access, portability or agent-native control justifies an extra boundary. HubSpot or another CRM may remain the system of record where that better fits the client.

Canonical rationale: `knowledge/architecture/outcome-first-modular-revenue-architecture.md`.

## 9. Initial hypotheses from issue #26

These seed hypotheses have now been converted into provisional scored rows in `businesses/NICHES.md`. The canonical register, not this section, holds current scores.

### A. UAE HVAC / MEP contractors × Revenue Recovery

Hypothesis: strong because quotations, maintenance contracts, inbound enquiries and stale opportunities have meaningful ticket value; contractor markets are identifiable; recurring follow-up leakage creates measurable ROI.

Architecture hypothesis to test: WhatsApp-first customer follow-up, CRM as system of record, deterministic reactivation sequences, agent judgement only for exceptions/qualification.

Research next: company count, decision-maker reachability, average contract/quote economics, existing CRM penetration, WhatsApp workflow, response/follow-up benchmarks and specialised competitor density.

### B. UAE drywall / gypsum / false-ceiling installers × Instant Quote

Hypothesis: potentially attractive micro-vertical because service scope can often be parameterised by dimensions/material/specification while fast quotation is commercially important. The narrow niche creates strong messaging and reusable workflow IP.

Architecture hypothesis to test: WhatsApp enquiry intake + structured quote capture, CRM opportunity record, deterministic pricing/calculation, agent support for ambiguous scope and follow-up.

Research next: prospect volume, average job value, quotation formula standardisation, margin sensitivity, WhatsApp enquiry behaviour, search/outbound reachability and whether instant ranges can be safely provided before site inspection.

### C. Dubai holiday-home operators/property managers × Direct Booking + CRM

Hypothesis: attractive because direct-booking infrastructure can combine owned website, booking, CRM, lifecycle automation and repeat-guest operations.

**Critical compliance constraint:** do not build the economics around taking Airbnb-provided guest contact information and using it for off-platform marketing/direct repeat bookings in violation of Airbnb's Off-Platform Policy or applicable privacy/marketing-consent rules. The model must be designed around lawful first-party data acquisition, consent, owned-channel demand and platform-compliant guest relationships.

Research next: Dubai operator count by portfolio size, OTA commission economics, direct-booking adoption, repeat-guest rates, existing PMS/channel-manager stack, CRM integration gaps, consent/data-rights design and specialised competitor density.

## 10. Sniper selection rule

Do not shotgun a capability across every service business.

For each outcome/product:

1. generate 20–50 plausible verticals;
2. narrow each into commercially meaningful sub-niches;
3. score `outcome/product × niche × geography × ICP × trigger/problem`;
4. research the top 10 deeply;
5. identify the dominant customer channel and system-of-record reality for the top candidates;
6. contact/test the top 3;
7. choose one beachhead niche;
8. choose the minimum viable delivery architecture;
9. build one offer, setup, funnel, sales script and onboarding system for that niche;
10. only clone into adjacent niches after evidence.

Prefer domination of a small valuable category over generic presence in a huge category.

## 11. Relationship to DRF portfolio scoring

Use the layers in this order:

`Business Opportunity Score`
→ `Niche Attractiveness Score`
→ `Evidence Confidence`
→ `Delivery Architecture Fit`
→ `Execution Velocity`
→ `live market test`
→ `unit economics / retention evidence`

The Business Opportunity Score selects the **vehicle/outcome**.
The Niche Attractiveness Score selects the **target**.
The architecture chooses **how the outcome reaches and operates inside the target**.
Execution Velocity selects **sequence**.
Live evidence decides whether DRF scales.

## 12. Canonical implementation

- Portfolio/product scoring framework: `knowledge/guidelines/business-opportunity-scoring-framework.md`
- Niche scoring framework: this file
- Commercial architecture: `knowledge/architecture/outcome-first-modular-revenue-architecture.md`
- Portfolio index: `businesses/OPPORTUNITIES.md`
- **Canonical scored niche register:** `businesses/NICHES.md`
- **Dashboard:** root `index.html` renders the `Ranked niche summary` table directly below the portfolio opportunity table.

Future opportunity research must add/update ranked niche rows rather than only generic lists of 'strong verticals', and launch-candidate research must record the proposed customer channel, system of record and agent/delivery layer.
