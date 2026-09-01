# DRF Dashboard V3 Portfolio Data Contract

**Status:** Canonical  
**Version:** 1.0  
**Date:** 31 August 2026  
**Master programme:** #77  
**Governing stage:** [77.4] #81  
**Canonical register:** `businesses/PORTFOLIO-V3.md`

## Purpose

Define the stable bridge between:

1. one opportunity's Workflow Layer 3 dossier;
2. the portfolio and niche registers;
3. Dashboard Version 3;
4. future discovery and portfolio-refresh automations.

This contract prevents three recurring failures:

- replacing Layer 1 business-attractiveness metrics with RBS;
- flattening one parent business into duplicate vendor/niche businesses;
- rendering missing evidence as false zero or false proof.

## Critical terminology

**Dashboard Version 3 is not Workflow Layer 3.**

- **Workflow Layer 1** selects the business opportunity.
- **Workflow Layer 2** selects the niche and designs/underwrites the Business × Niche.
- **Workflow Layer 3** produces one structured business dossier/record.
- **Dashboard Version 3** compares the portfolio across all three workflow layers and then exposes each layer as a separate view.

---

# 1. Canonical source chain and precedence

```text
live operating evidence / test records
→ CURRENT.md pointer
→ current opportunity dossier
→ specialised canonical registers
→ PORTFOLIO-V3.md joined summary
→ Dashboard V3 derived rendering
```

## Field-family sources

| Field family | Primary source | Supporting source |
|---|---|---|
| Business identity, pain/outcome, Layer 1 scores | Current dossier when present; otherwise `businesses/OPPORTUNITIES.md` and parent `README.md`/`RESEARCH.md` | Opportunity research files |
| Ranked niche relationships | `businesses/NICHES.md` | Niche dossiers under `research/niches/` and current opportunity dossier |
| Best niche pointer | Highest defensible current niche row, unless the current dossier records a justified founder selection | `businesses/OPPORTUNITIES.md` |
| Offer, price, GTM, delivery architecture | Current dossier identified by `CURRENT.md` | Current assessment/research files |
| RBS, DRF Proof, Stage, Capital, Return, Next Proof | Current dossier; otherwise `businesses/INVESTMENT-READINESS.md` during migration | Assessment, financial model and evidence files |
| EMP and transferability | Current dossier following the EMP0–EMP4 standard | Current operator/evidence research |
| Portfolio comparison | `businesses/PORTFOLIO-V3.md` | All sources above |
| Website | Derived only from canonical repository files | Never a separate truth source |

## Conflict rule

1. Newer verified operating evidence wins over desk assumptions.
2. The dossier named by `CURRENT.md` wins over older README/research/assessment wording for the same field.
3. A specialised register wins for its field family when no newer current dossier value exists.
4. `PORTFOLIO-V3.md` must be reconciled after a source change; it must not silently override a more authoritative file.
5. Dashboard rendering never overrides repository truth.
6. When two current high-quality sources conflict, mark the field `Conflict`/`Needs review`; do not choose silently.

The file date alone does not make a claim newer. Evidence date, scope and explicit current-status markers govern.

---

# 2. Parent opportunity and niche relationship

## Parent rule

Use exactly one parent row per business opportunity.

`opportunity_id` is the stable lowercase kebab-case business-folder slug, for example:

```text
whatsapp-crm-revenue-core
instant-quote-quote-to-cash
business-blueprints
```

A new CRM, AI model, channel, agent or delivery vendor does not create a new opportunity unless the buyer, pain/outcome or revenue model materially changes.

## Niche rule

All meaningful niche candidates remain separate rows in `businesses/NICHES.md` and join to the parent by opportunity identity/name.

The V3 parent row stores only:

- current best/recommended niche;
- Niche Score;
- Niche Evidence Confidence;
- a pointer to the ranked niche register/dossier.

It must not destroy or overwrite lower-ranked niche options.

---

# 3. Missing-value vocabulary

Use these exact values:

| Value | Meaning | Sorting/filtering rule |
|---|---|---|
| `Pending` | Required workflow work has not yet been completed | Missing; never numeric zero |
| `Unknown` | Investigated but not currently knowable | Missing; distinct from Pending |
| `Not applicable` | Field does not apply to this business model | Excluded from numeric analysis |
| `Needs more research` | Current evidence is insufficient for a responsible value | Missing; evidence warning |
| `Conflict` | Current authoritative sources materially disagree | Missing; urgent review warning |
| `0` | Verified numerical zero | Numeric zero |

Additional rules:

- Blank cells are invalid in the canonical V3 register; use one of the values above.
- Missing EMP is `Pending`, not EMP0. EMP0 means a completed search found no credible comparable commercial activity.
- Missing DRF Proof is `Pending`, not P0. P0 means the opportunity has been deliberately captured under the current workflow.
- Documentation completeness never raises DRF Proof automatically.
- A missing return is not zero return.

---

# 4. Enum order

Dashboard sorting uses these deterministic orders.

## External Market Proof

```text
Pending / Unknown / Needs more research / Conflict
EMP0 Unobserved
EMP1 Emerging signal
EMP2 Active market
EMP3 Market proven
EMP4 Established and transferable
```

## DRF Proof

```text
Pending / Unknown / Needs more research / Conflict
P0 Captured
P1 Desk Underwritten
P2 Backtested
P3 Forward Tested
P4 Revenue Proven
P5 Repeatable
P6 Scale Proven / Blueprint Certified
```

## Stage

```text
REJECT
RESEARCH
TEST
PILOT
FUND
SCALE
BLUEPRINT
```

## Dossier readiness

```text
Missing
Layer 1 only
Partial
Ready for current stage
Complete
Conflict
```

## Blueprint packaging readiness

```text
Not ready
Pre-Blueprint
Experimental
Revenue-Proven
Repeatable
Blueprint Certified
Not applicable
```

---

# 5. V3 master field schema

| Field key | Dashboard label | Type | Allowed values / unit | Primary source | Sort/filter behaviour |
|---|---|---|---|---|---|
| `rank` | Rank | integer | 1..n | `PORTFOLIO-V3.md` | Numeric |
| `opportunity_id` | Opportunity ID | string/id | folder slug | Folder/current dossier | Text/exact |
| `business_opportunity` | Business Opportunity | string | parent business name | Current dossier/OPPORTUNITIES | Text |
| `pain_outcome` | Pain / Outcome | string | customer pain + measurable result | Current dossier/OPPORTUNITIES/INVESTMENT | Text |
| `opportunity_score` | Opportunity Score | number | 0–100 | Current dossier/OPPORTUNITIES | Numeric; missing last |
| `mrr_score` | MRR | number | 0–10 | Current dossier/OPPORTUNITIES | Numeric; missing last |
| `ai_autonomy` | AI Autonomy | number | 0–100 | Current dossier/OPPORTUNITIES | Numeric; missing last |
| `evidence_confidence` | Evidence Confidence | number | 0–100 percent | Current dossier/OPPORTUNITIES | Numeric; missing last |
| `research_completeness` | Research Completeness | number | 0–100 percent | Current dossier/OPPORTUNITIES | Numeric; missing last |
| `external_market_proof` | EMP | enum | EMP0–EMP4 or missing vocabulary | Current dossier | Enum; missing last |
| `emp_confidence` | EMP Confidence | number | 0–100 percent | Current dossier | Numeric; missing last |
| `best_niche` | Best Niche | string | concise atomic niche | Current dossier/NICHES | Text |
| `niche_score` | Niche Score | number | 0–100 | Current dossier/NICHES | Numeric; missing last |
| `niche_confidence` | Niche Confidence | number | 0–100 percent | Current dossier/NICHES | Numeric; missing last |
| `recommended_offer` | Offer / Product | string | outcome-led offer | Current dossier | Text |
| `price_model` | Price / Commercial Model | string | amount/range + revenue type | Current dossier | Text plus numeric search where practical |
| `gtm_summary` | GTM | string | first-customer route/test | Current dossier | Text |
| `delivery_architecture` | Delivery | string | channel + record + automation + agent | Current dossier | Text |
| `rbs` | RBS | number | 0–100 | Current dossier/INVESTMENT | Numeric; missing last |
| `drf_proof` | DRF Proof | enum | P0–P6 or missing vocabulary | Current dossier/INVESTMENT | Enum; missing last |
| `stage` | Stage | enum | REJECT..BLUEPRINT | Current dossier/INVESTMENT | Enum |
| `capital` | Capital | string/money | display amount or missing vocabulary | Current dossier/INVESTMENT | Parse known amount; missing last |
| `return_headline` | Return | string | headline + estimate/actual status | Current dossier/financial model | Text; never implied actual |
| `next_proof` | Next Proof | string | exact next evidence milestone/action | Current dossier/INVESTMENT/OPPORTUNITIES | Text |
| `current_read` | Founder Read | string | concise current judgement | Current dossier/OPPORTUNITIES | Text; primarily expanded view |
| `dossier_readiness` | Dossier Readiness | enum | readiness vocabulary | Current dossier | Enum |
| `blueprint_readiness` | Blueprint Readiness | enum | readiness vocabulary | Current dossier | Enum |
| `evidence_freshness` | Evidence Freshness | ISO date/status | YYYY-MM-DD or missing vocabulary | Current dossier/source | Date; missing last |
| `canonical_dossier_path` | Dossier | path/string | repository path | Current dossier/current pointer | Text/link |
| `business_folder` | Business Folder | path/string | repository folder | Stable ID mapping | Text/link |

## Primary Dashboard V3 table

The V3 master table may hide `opportunity_id`, full delivery detail and long founder-read text by default, but they remain available to the row expander/filter system.

The primary visible comparison should include:

```text
Rank
Business Opportunity
Pain / Outcome
Opportunity Score
MRR
AI Autonomy
Evidence Confidence
Research Completeness
EMP
Best Niche
Niche Score
Niche Confidence
Offer / Product
Price / Commercial Model
GTM
RBS
DRF Proof
Stage
Capital
Return
Next Proof
```

Do not add Delta, Rank Delta or Investor-ready to the primary comparison.

---

# 6. Parseable Markdown contract

`businesses/PORTFOLIO-V3.md` must contain exactly one section headed:

```markdown
## V3 master portfolio
```

The first Markdown table under that heading must use this exact header order:

```text
Rank | Opportunity ID | Business Opportunity | Pain / Outcome | Opportunity Score | MRR | AI Autonomy | Evidence Confidence | Research Completeness | External Market Proof | EMP Confidence | Best Niche | Niche Score | Niche Confidence | Recommended Offer | Price / Commercial Model | GTM Summary | Delivery Architecture | RBS | DRF Proof | Stage | Capital | Return Headline | Next Proof | Current Read | Dossier Readiness | Blueprint Readiness | Evidence Freshness | Canonical Dossier Path | Business Folder
```

Rules:

1. One row per parent opportunity.
2. No unescaped pipe characters inside cells.
3. Numeric cells contain a bare number or an approved missing value; presentation suffixes are added by the dashboard.
4. EMP cells use `EMP0`…`EMP4` plus a short label, or an approved missing value.
5. DRF Proof cells use `P0`…`P6` plus a short label, or an approved missing value.
6. Paths are plain repository-relative paths; Dashboard V3 constructs links.
7. Dates use ISO `YYYY-MM-DD`.
8. The register must state its source snapshot and last reconciliation date.
9. The parser fails visibly if the required header is missing or a row has the wrong number of cells.
10. No dashboard code may silently substitute zero for an invalid/missing field.

---

# 7. Expanded opportunity contract

Selecting a parent row should expose or link to:

## Workflow Layer 1

- business/pain/outcome;
- buyer/payer/user and revenue streams;
- successful comparable operators;
- EMP, confidence, transferability and counter-evidence;
- Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness and Execution Velocity;
- verified/estimated/inferred/missing evidence;
- Reject/Hold/Advance decision.

## Workflow Layer 2

- all ranked Business × Niche rows;
- recommended beachhead niche and runner-up;
- Niche Score and confidence;
- offer and price;
- GTM/customer acquisition;
- delivery architecture;
- RBS and Return Profile;
- DRF Proof, Stage, Capital and Next Proof.

## Workflow Layer 3

- current dossier path;
- component readiness;
- risks/counter-evidence;
- evidence register/freshness;
- Blueprint readiness;
- one next action/stop condition.

---

# 8. Dashboard intelligence fields

Dashboard V3 may deterministically derive:

- total parent opportunities;
- Golden Opportunity count: Opportunity Score ≥85 with adequate evidence;
- high-MRR count: MRR ≥9;
- high-Autonomy count: AI Autonomy ≥85;
- EMP3/EMP4 count;
- P4, P5 and P6 counts;
- count by Stage;
- count of Pending RBS, niche, EMP, dossier or Return fields;
- decision queue ordered by Stage/Opportunity Score/Next Proof;
- evidence staleness warnings.

Derived counts never become canonical business values.

## Default freshness policy

Until [77.5] #82 establishes model-specific cadences:

- `≤90 days`: current;
- `91–180 days`: review due;
- `>180 days`: stale;
- missing date: unknown freshness.

A major legal, platform, pricing or market change can trigger immediate refresh regardless of age.

---

# 9. Automation write contract

Future discovery/refresh automation must:

1. run the canonical `workflows/drf-opportunity-factory.md` logic;
2. update the detailed source file first;
3. preserve evidence history;
4. update the relevant specialised register;
5. reconcile `PORTFOLIO-V3.md` last;
6. validate row count, stable IDs, types and missing vocabulary;
7. never update Dashboard HTML as the business-data write path;
8. record which evidence changed each score/conclusion;
9. require founder approval for capital/public/legal actions;
10. avoid duplicate parent opportunities for vendor variants.

---

# 10. V1/V2 preservation

Dashboard V1 and Dashboard V2 remain visible until Dashboard V3 is built and accepted.

- V1 preserves the historical founder metrics and detailed tables.
- V2 preserves the RBS/proof/capital experiment.
- V3 is the synthesis and new primary view.

Preservation does not mean old wording overrides newer canonical architecture.

---

# 11. Contract tests

Before merging a register/dashboard change, verify:

- [ ] required heading and exact header order exist;
- [ ] every current parent business appears exactly once;
- [ ] every `opportunity_id` maps to an existing folder;
- [ ] no duplicate IDs exist;
- [ ] numeric fields contain numbers or approved missing values;
- [ ] EMP and DRF Proof values use their own enums;
- [ ] missing values are not zero;
- [ ] best-niche pointers match a current niche row or are Pending;
- [ ] current dossier paths exist or explicitly state Pending;
- [ ] the representative WhatsApp + CRM case maps without interpretation;
- [ ] Dashboard V3 renders from this contract and fails visibly on invalid data;
- [ ] V2 and V1 remain available during the V3 transition.

## Final outcome

One stable portfolio contract joins the three DRF workflow layers without flattening their meaning. It allows deterministic rendering, automated refresh and founder comparison while keeping detailed evidence and business dossiers as durable truth.