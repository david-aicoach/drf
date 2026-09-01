# DRF Proof-First Application Discovery Profile

**Status:** Active Skill-owned discovery sub-profile  
**Version:** 1.0  
**Date:** 2 September 2026  
**Owning Skill:** `skills/drf-recurring-intelligence/SKILL.md`  
**Governing Issue:** #139

## Purpose
Use already-monetising applications as a high-signal source of Golden Opportunity candidates. Start from observable commercial traction, reverse-engineer the problem, monetisation and acquisition pattern, then route only transferable candidates through the existing DRF Opportunity Factory.

This is a **discovery lane**, not a new score, proof system, business parent or mandatory vendor dependency.

## Core principle

```text
find recent applications already making money
→ verify the signal and monetisation pattern
→ cluster by customer pain/outcome, not app name
→ test transferability + buildability
→ deduplicate against DRF
→ run cheap Layer 1
→ advance only qualified opportunities
```

Replicate the **validated problem, offer and growth playbook** where lawful and useful. Do not copy protected branding, code, creative assets, trademarks or proprietary content.

## Preferred current source
As of 2 September 2026, **AppKittie** is a preferred discovery source because it exposes searchable iOS/Android app data including estimated revenue, downloads, category, launch date, MRR growth, active ads/ad-spend intelligence, viral videos, keywords, reviews and onboarding flows.

AppKittie explicitly describes revenue/download values as **estimates**. Treat them as directional commercial intelligence, never audited operator revenue.

The operating method is vendor-independent. Equivalent sources may replace or corroborate AppKittie.

## Default scan filters
These are starting defaults, not hard laws. Change them when the category economics justify it and record the reason.

| Filter | Default | Why |
|---|---:|---|
| Estimated monthly revenue | **≥ US$50,000/month** | Strong enough signal to justify investigation |
| Launch age | **≤ 12 months** | Favours recently proven demand and modern distribution |
| Revenue direction | Prefer stable/positive growth | Avoid one-off spikes and decaying novelty |
| Monetisation | Clear subscription, IAP, usage, licence or transaction model | Makes payer/value/repeat logic visible |
| Acquisition evidence | Prefer observable paid and/or organic channel evidence | Helps test transferability rather than revenue alone |
| Platform | iOS / Android / web-equivalent evidence | Keep product rail replaceable |

### Priority exceptions
A candidate below US$50,000/month can still enter triage when it has unusually high growth, very recent launch, obvious recurring economics, exceptional build simplicity, a neglected geography/niche, or strong fit with existing DRF assets. Label the exception rather than silently lowering the threshold.

## Evidence capture
For each credible application signal capture, where available:

- app/product name and store/web URL;
- launch/release date;
- estimated monthly revenue and source/date;
- revenue-growth direction/history;
- estimated downloads and revenue-per-download direction where meaningful;
- price, subscription/IAP/usage structure and paywall/onboarding pattern;
- active ads, ad-spend/intensity evidence and countries;
- organic/viral acquisition evidence;
- reviews/rankings/user complaints;
- apparent user pain/outcome and payer;
- build/delivery complexity;
- regulated, privacy, platform-policy, IP/trademark and data dependencies.

Do not create a parent folder merely because one app is successful.

## Cross-validation rule
An app-intelligence revenue estimate is a **lead**, not sufficient proof by itself.

Before `ADVANCE`, seek at least:

1. the current first-party store/product listing and monetisation mechanics;
2. one independent corroborating commercial/traction signal beyond the original estimate, such as store ranking/review velocity, ad activity, founder/operator disclosure, credible secondary app-intelligence data, public traffic/download evidence or another materially independent operator;
3. one deliberate negative/counter-evidence search.

For stronger EMP claims, use the normal DRF multi-operator standard. One AppKittie result or one viral X post cannot establish EMP3/EMP4.

## Application transferability gates
Before deep research, answer these cheaply:

| Gate | Question |
|---|---|
| Problem clarity | Is the paid user problem/outcome understandable without copying the original brand? |
| Monetisation transferability | Can the revenue model plausibly work for another entrant/niche/geography? |
| Acquisition transferability | Can DRF reproduce or improve at least one visible acquisition route? |
| Buildability | Can an MVP be built/tested at acceptable founder time/capital using current AI/software rails? |
| Differentiation wedge | Is there a credible better-version wedge: niche, geography, workflow, UX, distribution, data, price or integration? |
| Platform/legal safety | No fatal store-policy, regulatory, privacy, IP, trademark or data-rights barrier? |
| Economics | Is there a plausible positive-contribution path after platform fees, model/API costs, support and paid acquisition? |
| Portfolio identity | Is this a new outcome/business, a niche of an existing parent, or merely a delivery/product variant? |

A failed fatal gate stops the candidate cheaply.

## Web-app and SaaS equivalent
The same method applies beyond mobile apps when comparable proof exists. Replace store-specific signals with suitable evidence such as public pricing, credible revenue/customer disclosures, traffic/ad evidence, marketplace rank, acquisition listings, payment proof where trustworthy, or multiple live comparable operators.

Do not force a web/SaaS candidate into AppKittie simply because this profile originated from mobile-app intelligence.

## Routing into DRF
1. Check `businesses/OPPORTUNITIES.md`, `businesses/NICHES.md`, `businesses/PORTFOLIO-V3.md`, business folders and discovery rejections.
2. Cluster the observed app into a normalised business hypothesis: **payer + pain/outcome + revenue mechanism**.
3. Use `discovery-candidate-record.md` for any candidate that needs more than a one-line rejection.
4. Run the normal cheap Layer 1 screen from `skills/drf-opportunity-factory/SKILL.md`.
5. `REJECT` / `HOLD` stays outside the ranked portfolio.
6. `ADVANCE` / `GOLDEN PRIORITY` continues through the existing Layer 2/3 route and V3 close-out.

## No competing score
Do **not** create an “App Score”. Application intelligence contributes evidence to existing DRF fields only:

- Opportunity Score;
- MRR;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- EMP + confidence;
- later Niche Score, RBS, Return, DRF Proof, Stage, Capital and Next Proof.

Estimated third-party app revenue affects evidence and commercial judgement; it never becomes a DRF actual.

## Run behaviour
Use this profile as a lane inside Golden Opportunity Discovery. A scheduler does not need a separate application-only automation unless later evidence shows that a dedicated cadence materially improves decisions.

Each run should prefer a small number of high-signal candidates over a large list of unexamined apps. Persist candidate decisions and run history under the normal recurring-intelligence contracts.