# DRF Public Dashboard V3 Architecture

**Owner:** `skills/drf-dashboard-operations/SKILL.md`  
**Data contract:** `v3-portfolio-data-contract.md`

## Purpose
Provide one founder-ready public operational dashboard without creating a second business database.

> **Repository truth stays canonical. The website reads, validates, joins, filters and presents it.**

Dashboard code never originates Opportunity Scores, niche rankings, RBS, proof, capital, return or business evidence.

## Terminology
**Dashboard Version 3 is not Workflow Layer 3.**

- Workflow Layer 1 selects the business opportunity.
- Workflow Layer 2 selects the niche and underwrites the commercial design.
- Workflow Layer 3 structures the current business case and completes V3 write-back.
- Dashboard V3 is the website synthesis of all three workflow layers across the portfolio.
- Dashboard V2 and V1 remain preserved below V3 as evolution history.

Website order:

```text
V3 Founder Master Dashboard
→ V3 Workflow Layer 1
→ V3 Workflow Layer 2
→ V3 Workflow Layer 3
→ preserved Dashboard V2
→ preserved Dashboard V1
```

## Product/runtime architecture

```text
current dossiers / live evidence
+ businesses/PORTFOLIO-V3.md
+ businesses/NICHES.md
        ↓
index.html
+ assets/v3-dashboard.css
+ assets/v3-dashboard.js
+ V3 policy/integrity scripts
        ↓
client-side validation + joins + derived intelligence
        ↓
Dashboard V3
        ↓
GitHub Pages
```

## Canonical sources

| Dashboard concern | Canonical owner/source |
|---|---|
| Complete parent comparison | `businesses/PORTFOLIO-V3.md` |
| Full Business × Niche matrix | `businesses/NICHES.md` |
| Current business detail | parent current dossier / `CURRENT.md` where present |
| Layer 1 scoring | `skills/drf-opportunity-factory/references/business-opportunity-scoring.md` |
| Niche scoring | `skills/drf-opportunity-factory/references/niche-scoring.md` |
| RBS / Return / DRF Proof / Stage / Capital | `skills/drf-opportunity-factory/references/commercial-underwriting-proof-capital.md` + current dossier |
| Field types/precedence/missing values | `skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md` |
| Opportunity operating route | `skills/drf-opportunity-factory/SKILL.md` |
| Dashboard operating route | `skills/drf-dashboard-operations/SKILL.md` |

## Area 1 — Founder Master Dashboard
One row per parent business opportunity with high-value founder comparison fields across all workflow layers.

It must make the total parent count prominent and derive it from the V3 portfolio row count.

Core comparison includes:
- Rank / Business Opportunity / Pain-Outcome;
- Opportunity Score / MRR / AI Autonomy / Evidence / Research;
- EMP;
- Best Niche / Niche Score / confidence;
- Offer / Price / GTM / Delivery;
- RBS / DRF Proof / Stage / Capital / Return / Next Proof.

Long fields may live in expandable details; no canonical field is silently discarded.

## Area 2 — Workflow Layer 1
Show structural business-selection intelligence and distinguish Golden/Advance/Hold/Reject decisions from capital/proof decisions.

## Area 3 — Workflow Layer 2
Show every ranked Business × Niche row and current parent commercial fields. The join must fail visibly if a niche parent cannot be resolved.

## Area 4 — Workflow Layer 3
Show dossier/readiness/evidence freshness and execution/Blueprint readiness. A polished dossier does not increase DRF Proof.

## Derived dashboard intelligence
The UI may derive, never canonise:
- parent count;
- Golden candidates;
- high MRR / high AI-autonomy counts;
- EMP3/EMP4 count;
- RBS-complete count;
- P4/P5/P6 counts;
- proof funnel;
- Pending/deep-work count;
- decision queue;
- evidence freshness warnings.

## Interaction requirements
- master and layer tables scroll vertically/horizontally inside bounded blocks;
- columns sort/filter;
- global search available where useful;
- column widths resizable/resettable;
- sticky headers;
- immediate tooltips/definitions;
- row detail expansion for long founder intelligence;
- responsive degradation must preserve data access.

## Integrity rules
- `Pending`, `Unknown`, `Not applicable`, `Needs more research`, `Conflict` and verified `0` are distinct.
- EMP and DRF Proof remain separate.
- Opportunity Score, Niche Score and RBS remain separate.
- V3 has exactly one parent row per opportunity.
- niche rows remain one-to-many under parent opportunities.
- stable parent IDs/folder paths must resolve.
- invalid joins/types fail visibly.
- Dashboard V2/V1 history remains available unless explicitly retired by founder decision.

## Public deployment verification
For dashboard changes:
1. follow the Dashboard Operations Skill;
2. run `software/dashboard-v3/test.sh` and repository CI;
3. merge only after checks pass;
4. verify post-merge main CI;
5. verify GitHub Pages build/deploy success.

Business truth changes must route through the Opportunity Factory Skill before dashboard product changes.
