# Proof-First Application Discovery — Evidence Note

**Date:** 2 September 2026  
**Status:** Current evidence note  
**Governing Issue:** #139  
**Operating owner:** `skills/drf-recurring-intelligence/`

## Founder signal
David supplied this X post as the trigger for incorporating a proof-first application lane into DRF:

- Jacob Rodri: https://x.com/jacobrodri_/status/2094421417357988260?s=46

Founder interpretation: use applications that already show meaningful revenue as a shortcut to finding Golden Opportunities, especially where DRF can build a web/mobile application rather than inventing demand from zero.

Direct X retrieval was unavailable from the current web crawler during this implementation. Indexed recent posts from the same author showed the same recurring playbook: use AppKittie to filter for recently launched apps already making meaningful monthly revenue, study what is working, then build/adapt a better version. Treat the founder-supplied URL as the source signal; the operating method below is validated primarily against AppKittie's current first-party product claims.

## First-party AppKittie evidence
Source checked: https://www.appkittie.com/ on 2 September 2026.

AppKittie currently states that it provides:

- search across millions of iOS and Android apps;
- filters including estimated revenue, downloads, category and launch date;
- estimated monthly revenue and MRR growth;
- active ads and ad-spend intelligence;
- viral-video/creator intelligence;
- keyword/ASO data;
- reviews and onboarding-flow intelligence;
- daily data updates;
- CSV export and API credits on the paid plan.

Current listed commercial access:

- US$79/month billed monthly;
- US$49/month equivalent billed yearly;
- 5,000 API credits/month on the listed plan.

These prices/features are current-source observations, not a purchasing recommendation.

## Critical evidence limitation
AppKittie explicitly says its revenue values are **estimates** produced from multiple datasets/models and monitored ranking/performance/monetisation signals.

Therefore DRF must classify AppKittie revenue/download figures as directional third-party commercial intelligence. They are **not audited operator revenue**, and they are never DRF actuals.

A single AppKittie result can justify investigation but cannot by itself establish EMP2–EMP4.

## Why this is valuable to DRF
This source compresses several expensive discovery steps:

```text
unknown app idea
→ current revenue signal
→ launch recency
→ monetisation model
→ growth direction
→ ads/organic acquisition evidence
→ onboarding/paywall clues
→ reviews/user pain
```

That directly supports DRF's existing **copy before invent** architecture: find what is commercially working, verify it, test transferability, adapt/improve, then test only the remaining DRF-specific uncertainty.

## Recommended starting filter
For a high-signal Golden Opportunity scan:

- estimated monthly revenue ≥ US$50,000;
- launch age ≤ 12 months;
- prefer stable/positive revenue direction;
- clear subscription/IAP/usage/transaction model;
- observable paid and/or organic acquisition evidence;
- obvious paid user problem/outcome;
- acceptable MVP buildability and platform/legal risk.

This is a discovery filter, not a new DRF score.

## Cross-check before Advance
Before a candidate advances from discovery:

1. verify the current first-party store/product listing and monetisation mechanics;
2. obtain at least one materially independent corroborating signal beyond the originating revenue estimate;
3. search deliberately for negative evidence/failure modes;
4. deduplicate by payer + pain/outcome + revenue mechanism;
5. apply the normal DRF Layer 1 thresholds and fatal gates.

## Strategic interpretation
The opportunity is **not “clone AppKittie apps”**. The durable DRF capability is:

> discover recently proven software demand from commercial telemetry, abstract the paid problem and growth pattern, then build a differentiated and lawful version where DRF has a credible distribution/build/economic advantage.

The same proof-first method can extend to web apps/SaaS using equivalent revenue/customer/traffic/acquisition evidence sources.

## Current implementation decision
Issue #139 adds this as a Skill-owned discovery lane inside Golden Opportunity Discovery. No new automation, score, parent opportunity or paid subscription is required to activate the method. A dedicated AppKittie API integration should only be considered after the lane demonstrates enough decision value to justify its cost and access requirements.
