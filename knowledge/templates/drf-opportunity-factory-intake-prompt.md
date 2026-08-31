# DRF Opportunity Factory — Founder-to-Agent Intake Prompt

**Status:** Canonical reusable intake prompt  
**Version:** 1.0  
**Date:** 31 August 2026  
**Workflow:** `workflows/drf-opportunity-factory.md`  
**Governing stage:** [77.2] #79

Use this prompt for a new founder-supplied opportunity. The same workflow can later be called in Discovery or Portfolio Refresh mode.

---

## Copy/paste prompt

```text
Work in the GitHub repository `tbhrc/drf` as the responsible DRF Web agent.

MODE
Founder Intake

BUSINESS OPPORTUNITY / ROUGH IDEA
<Describe the business, service, product, outcome, pain point or market signal. It can be rough.>

FOUNDER CONTEXT
<Add all relevant thinking, why it matters, assets we already have, constraints, intended geography, desired income model, concerns and strategic observations. Preserve this detail.>

SOURCE MATERIAL
<Add links, operator examples, posts, transcripts, files, screenshots, videos, marketplaces, products or other evidence.>

OPTIONAL NICHE HYPOTHESIS
<Add a vertical, sub-niche, geography, ICP or trigger/problem if I already have one. Treat it as a hypothesis to research, not an automatic conclusion.>

OPTIONAL SUCCESSFUL BUSINESSES / OPERATORS TO STUDY
<List any businesses, founders, agencies, products or business models that inspired the opportunity. Find additional comparables as needed.>

CONSTRAINTS / PREFERENCES
<Capital, time, geography, founder involvement, ethical/legal limits, platforms, existing systems or other boundaries.>

OBJECTIVE
Run this opportunity through the canonical DRF Opportunity Factory from beginning to end and take it to the maximum defensible stage supported by current evidence.

MANDATORY OPERATING INSTRUCTIONS

1. Read `AGENTS.md` first.
2. Read and follow `workflows/drf-opportunity-factory.md`.
3. Resolve or create the controlling GitHub Issue before substantive work. The Issue must preserve my founder context and contain an implementation checklist, verification checklist and final acceptance criteria.
4. Search the current DRF portfolio, niche register and business folders before creating anything. Do not create a duplicate opportunity merely because a different vendor/platform can deliver it.
5. Define the business opportunity as the service/product/outcome and pain solved. Treat HighLevel, WhatsApp, HubSpot, Grok Bot, ChatGPT, Claude, Stripe and other platforms/models as delivery components unless the platform itself is what customers buy.
6. Do not ask avoidable intake questions. Research missing information, make clearly labelled best-effort assumptions and continue. Escalate only genuine founder decisions, material spend, legal/security commitments or irreconcilable evidence conflicts.
7. Research the current market. Find multiple successful comparable operators where they exist. Capture their offers, pricing, recurring fees, ads/acquisition channels, funnels, reviews, case studies, customer/traction evidence, delivery patterns and longevity.
8. Research negative evidence as well: failed operators, weak reviews, churn, complaints, margin pressure, legal/platform restrictions and non-transferable founder/brand/audience advantages.
9. Keep External Market Proof separate from DRF Proof. A market-proven category may be `EMP3` while DRF remains `P1`. Do not call the category unproven merely because DRF has not sold it yet.
10. Run Layer 1 completely:
    - business opportunity and pain/outcome;
    - payer/buyer/user;
    - revenue model;
    - Opportunity Score;
    - MRR score;
    - AI Autonomy;
    - Evidence Confidence;
    - Research Completeness;
    - External Market Proof + confidence;
    - Execution Velocity/time estimates where useful;
    - Reject / Hold / Advance decision.
11. If Layer 1 fails, record the evidence-backed reason, update the Issue and stop without adding it to the main portfolio.
12. If Layer 1 passes, continue automatically through Layer 2 without waiting for another prompt:
    - generate and rank suitable niche combinations;
    - calculate Niche Scores and confidence;
    - select the recommended beachhead niche;
    - reverse-engineer successful niche/operator patterns;
    - recommend the market-ready offer, pricing and revenue streams;
    - produce the first-10 and first-100 customer GTM plan where defensible;
    - define acquisition channels/funnel;
    - define delivery architecture and replaceable technology rails;
    - calculate RBS and economics;
    - assign DRF Proof, Stage, Capital and Next Proof;
    - test only the remaining DRF-specific uncertainty.
13. Continue automatically through Layer 3:
    - create/update the founder-readable mini business plan/dossier;
    - preserve all Layer 1 and Layer 2 outputs;
    - update canonical registers only where the evidence justifies it;
    - file the opportunity under `businesses/<opportunity>/` if it advances;
    - keep Pending/Unknown/Not applicable distinct from verified zero;
    - record risks, counter-evidence, sources and Blueprint packaging readiness.
14. Separate observed fact, credible estimate, inference, External Market Proof and DRF actuals. Never invent traffic, customers, revenue, prices, proof, deployment or test results.
15. Do not spend capital, launch paid ads, contact prospects, make public claims or enter legal/commercial commitments without the required founder approval.
16. Update and check off the controlling Issue as each item is completed and verified.
17. Verify repository changes once, merge through the correct Issue-linked path, then provide the exact changed paths, PR/commit/check status and final decision.

FINAL RESPONSE FORMAT

A. Founder decision summary
B. Layer 1 structural opportunity assessment
C. External Market Proof and comparable operators
D. Ranked niches and recommended beachhead
E. Recommended offer and pricing
F. Go-to-market/customer acquisition
G. Delivery architecture
H. RBS, DRF Proof, Stage, Capital and Return Profile
I. Risks and counter-evidence
J. Canonical files/registers updated
K. One next proof action and stop condition
```

---

# Discovery mode variant

Replace the input header with:

```text
MODE
Automated Discovery

DISCOVERY SIGNAL
<source/query/operator/product/trend discovered>

CONFIGURED LAYER 1 THRESHOLDS
<version or default canonical thresholds>
```

Additional rules:

- deduplicate before deep research;
- use the cheap Layer 1 screen first;
- keep rejected candidates out of the main portfolio;
- advance only threshold-qualified opportunities;
- surface only material new opportunities to David;
- do not create a separate discovery scoring system.

[77.5] #82 defines the scheduled discovery sources, cadence, rejection log and operational safeguards.

---

# Portfolio Refresh mode variant

Replace the input header with:

```text
MODE
Portfolio Refresh

EXISTING OPPORTUNITY
<canonical opportunity name/folder>

REFRESH WINDOW / TRIGGER
<scheduled review, new evidence, market event or stale date>
```

Additional rules:

- read the current canonical dossier and registers first;
- investigate new operators, prices, trends, niches, delivery rails, economics, regulations, successes and failures;
- preserve history;
- change only materially affected scores/conclusions;
- never reset DRF Proof because research was refreshed;
- update evidence freshness and one next action;
- do not create a duplicate opportunity for a vendor variant.

[77.5] #82 defines the scheduled refresh cadence and staleness contract.

---

# Expected decision behaviour

```text
weak business opportunity
→ reject cheaply

strong business, weak evidence
→ hold/research one critical gap

strong business + adequate evidence
→ rank niches
→ design offer/price/GTM/delivery
→ underwrite Business × Niche
→ produce structured dossier
→ test only remaining uncertainty

paid successful delivery
→ prove repeatability
→ scale
→ optionally package as a Business Blueprint
```

This prompt does not guarantee a positive recommendation. It guarantees the opportunity receives the same disciplined DRF process and ends with an explicit decision.
