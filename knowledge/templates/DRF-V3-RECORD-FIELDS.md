# DRF Layer 3 Record Fields — Template Output

**Status:** Input contract for [77.4] #81  
**Date:** 31 August 2026  
**Source template:** `business-opportunity-research.md` Version 3.0

The dossier emits the following explicitly labelled fields so the V3 portfolio contract can map them without business reinterpretation:

```text
Opportunity ID
Rank
Business Opportunity
Pain / Outcome
Opportunity Score
MRR
AI Autonomy
Evidence Confidence
Research Completeness
External Market Proof
EMP Confidence
Best Niche
Niche Score
Niche Evidence Confidence
Recommended Offer
Price / Commercial Model
GTM Summary
Delivery Architecture
Revenue Blueprint Score
DRF Proof Level
Stage
Capital
Return Headline
Next Proof
Dossier Readiness
Blueprint Packaging Readiness
Evidence Freshness
Canonical Dossier Path
```

## Type expectations

- Scores remain numeric in their own fields; display suffixes such as `/100` or `%` are presentation concerns.
- External Market Proof stores an EMP level and label; confidence remains separate.
- DRF Proof stores P0–P6 and its label; it is never derived from EMP.
- Missing required work is `Pending`; investigated but unknowable is `Unknown`; non-applicable is `Not applicable`; numeric zero means verified zero.
- `Best Niche` is a summary pointer only. All ranked Business × Niche relationships remain in `businesses/NICHES.md` and the dossier.
- `Return Headline` never substitutes for the financial model and must disclose whether it is estimate or actual.

[77.4] #81 owns the final stable field names, data types, source precedence and dashboard rendering contract.