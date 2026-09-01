# DRF Dashboard V3 Portfolio Data Contract

**Owner:** `skills/drf-dashboard-operations/SKILL.md`  
**Canonical joined register:** `businesses/PORTFOLIO-V3.md`

## Purpose
Define the stable bridge between current opportunity truth, the 27-parent portfolio, the Business × Niche register and Dashboard V3.

The contract prevents:
- replacing Opportunity Score with RBS;
- duplicating parent businesses by vendor/niche;
- treating missing evidence as zero/proof;
- dashboard code becoming business truth.

## Source precedence

```text
live DRF evidence
→ CURRENT/current opportunity dossier
→ specialised canonical register
→ businesses/PORTFOLIO-V3.md joined founder summary
→ Dashboard V3 derived rendering
```

Newer verified operating evidence beats older desk assumptions. A current dossier beats older wording for the same field. Specialised registers govern their field family when no newer current dossier value exists. V3 must be reconciled after source changes; it never silently overrides them.

## Parent / niche relationship
- One V3 row per **parent business opportunity**.
- `Opportunity ID` is the stable lowercase kebab-case business-folder slug.
- Vendor/model/channel changes do not create a new parent unless buyer, pain/outcome or revenue model materially changes.
- All meaningful Business × Niche candidates stay as separate rows in `businesses/NICHES.md`.
- V3 stores only the current best niche pointer/score/confidence for the parent.

## Missing-value vocabulary
Use exactly:
- `Pending` — required work not completed
- `Unknown` — investigated but not currently knowable
- `Not applicable` — field does not apply
- `Needs more research` — evidence insufficient for a responsible value
- `Conflict` — current authoritative sources disagree
- `0` — verified numerical zero

Blank canonical V3 cells are invalid. Missing EMP is `Pending`, not EMP0. Missing DRF Proof is `Pending`, not P0.

## Enum order

### EMP
`Pending/Unknown/Needs more research/Conflict → EMP0 → EMP1 → EMP2 → EMP3 → EMP4`

### DRF Proof
`Pending/Unknown/Needs more research/Conflict → P0 → P1 → P2 → P3 → P4 → P5 → P6`

### Stage
`REJECT → RESEARCH → TEST → PILOT → FUND → SCALE → BLUEPRINT`

## Canonical 30-field V3 row
The first table under `## V3 master portfolio` must use this exact order:

```text
Rank
Opportunity ID
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
Niche Confidence
Recommended Offer
Price / Commercial Model
GTM Summary
Delivery Architecture
RBS
DRF Proof
Stage
Capital
Return Headline
Next Proof
Current Read
Dossier Readiness
Blueprint Readiness
Evidence Freshness
Canonical Dossier Path
Business Folder
```

## Field contract

| Field | Type / allowed form | Primary source |
|---|---|---|
| Rank | integer 1..n | V3 joined register |
| Opportunity ID | kebab-case stable ID | business folder |
| Business Opportunity | parent name | current dossier / opportunities register |
| Pain / Outcome | text | current dossier |
| Opportunity Score | 0–100 or missing vocabulary | Layer 1 source |
| MRR | 0–10 or missing | Layer 1 source |
| AI Autonomy | 0–100 or missing | Layer 1 source |
| Evidence Confidence | 0–100 or missing | Layer 1 source |
| Research Completeness | 0–100 or missing | Layer 1 source |
| External Market Proof | EMP0–EMP4 + label or missing | current dossier/market evidence |
| EMP Confidence | 0–100 or missing | current dossier |
| Best Niche | text or missing | niche register/current dossier |
| Niche Score | 0–100 or missing | niche register |
| Niche Confidence | 0–100 or missing | niche register |
| Recommended Offer | text or missing | current dossier |
| Price / Commercial Model | text/range or missing | current dossier |
| GTM Summary | text or missing | current dossier |
| Delivery Architecture | text or missing | current dossier |
| RBS | 0–100 or missing | current dossier / investment register |
| DRF Proof | P0–P6 + label or missing | current dossier / DRF actuals |
| Stage | allowed Stage enum or missing | current dossier |
| Capital | money/text or missing | current dossier |
| Return Headline | evidence-labelled text or missing | current dossier/model |
| Next Proof | exact bounded action/milestone or missing | current dossier |
| Current Read | concise founder judgement | current dossier |
| Dossier Readiness | readiness label | current dossier |
| Blueprint Readiness | readiness label | current dossier |
| Evidence Freshness | ISO date or missing | current evidence source |
| Canonical Dossier Path | repository-relative path or missing | current pointer |
| Business Folder | existing repository-relative folder | stable ID mapping |

## Markdown parsing rules
1. One row per parent opportunity.
2. No unescaped `|` inside cells.
3. Numeric fields use bare numeric values in the canonical V3 register or an approved missing value.
4. EMP cells start `EMP0`…`EMP4` or use missing vocabulary.
5. DRF Proof cells start `P0`…`P6` or use missing vocabulary.
6. Repository paths are relative paths.
7. Dates use `YYYY-MM-DD`.
8. Parser/test failures must be visible; never coerce invalid/missing data to zero.

## Founder-visible primary comparison
The default master comparison should expose:

```text
Rank · Business Opportunity · Pain/Outcome · Opportunity Score · MRR · AI Autonomy
· Evidence · Research · EMP · Best Niche · Niche Score · Niche Confidence
· Offer · Price · GTM · RBS · DRF Proof · Stage · Capital · Return · Next Proof
```

Do not reintroduce `Δ`, `Rank Δ` or `Investor-ready` into the primary V3 comparison.

## Expanded row
A parent row may expose:
- Layer 1 structural metrics, comparables, counter-evidence and decision;
- all ranked niche links and beachhead rationale;
- offer/pricing/GTM/delivery;
- RBS/Return/Proof/Stage/Capital/Next Proof;
- dossier/readiness/freshness/source paths.

## Derived dashboard intelligence
The website may derive:
- total parent count;
- Golden candidates;
- high-MRR/high-Autonomy count;
- EMP3/EMP4 count;
- RBS-complete count;
- P4/P5/P6 counts;
- Stage/proof funnel;
- Pending/deep-work count;
- decision queue;
- freshness warnings.

Derived counts never become canonical business values.

## Automation/write rule
Any discovery/refresh agent must operate through:
- `skills/drf-recurring-intelligence/SKILL.md` for recurring mode;
- `skills/drf-opportunity-factory/SKILL.md` for opportunity Layers 1–3 and V3 close-out.

Write detailed source first, affected register(s) second, `businesses/PORTFOLIO-V3.md` last. Never use Dashboard HTML as the business-data write path.

## Contract tests
Before merge verify:
- exact heading/header order;
- every current parent appears exactly once;
- ranks continuous;
- unique stable IDs;
- business folders/dossier paths resolve where required;
- numeric/missing values are valid;
- EMP and DRF Proof enums remain separate;
- best-niche join resolves or is explicitly missing;
- Dashboard fails visibly on invalid data;
- V2/V1 history remains preserved.
