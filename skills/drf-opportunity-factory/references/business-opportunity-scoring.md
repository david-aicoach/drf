# DRF Layer 1 — Business Opportunity Scoring

**Owner:** `skills/drf-opportunity-factory/SKILL.md`  
**Purpose:** answer **Do we want this kind of business?** before deep niche/commercial work.

## Decision stack

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence Confidence + Research Completeness
→ External Market Proof
→ ranked niches
```

Opportunity Score is structural attractiveness. It does **not** select the niche, prove DRF execution, authorise capital or certify a Blueprint.

## Business definition
Define the opportunity by **payer + pain/outcome + revenue mechanism**. AI models, CRMs, marketplaces, messaging providers and agent runtimes are normally replaceable delivery components.

Use plain sales language:

> We sell `<outcome>` to `<payer>` for `<price/basis>` because `<pain/value>`. Revenue arrives as `<upfront / recurring / usage / licence / commission / royalty / other>`.

Do not score a vague technology idea with no payer/outcome.

## Opportunity Score — 100 points
Score each factor 0–10, then multiply by its weight.

| Factor | Weight | Core question |
|---|---:|---|
| Market Size Now | 9 | Is the reachable market large enough now? |
| Market Growth | 9 | Is demand growing or structurally durable? |
| Timing / First-Mover Window | 5 | Is timing favourable without being too early? |
| Willingness to Pay | 7 | Do customers pay meaningful prices for the outcome? |
| AI Buildability | 7 | How much of creation/setup can AI perform reliably? |
| AI Marketability | 7 | How much of acquisition/marketing can AI execute? |
| AI Deliverability | 9 | How much fulfilment can AI execute repeatedly? |
| Low Human Dependency | 4 | How little mandatory human/founder labour is required? |
| Startup Capital Efficiency | 6 | How cheaply can DRF reach a credible first-sale test? |
| Speed to Revenue | 6 | How quickly can first cash realistically be collected? |
| Margin Potential | 5 | What contribution remains after delivery/acquisition? |
| Scalability | 6 | Can revenue grow without proportional labour/cost? |
| Paid Growth Potential | 4 | Is positive-unit-economics paid acquisition plausible? |
| Defensibility / Moat | 5 | Can durable advantage accumulate? |
| MRR / Recurring Revenue Quality | 11 | Does continuing value support durable recurring revenue? |
| **Total** | **100** | |

`weighted points = (factor score / 10) × factor weight`

## Structural bands

| Score | Decision meaning |
|---:|---|
| 85–100 | Golden Opportunity candidate |
| 75–84 | Strong — advance when evidence is adequate |
| 65–74 | Hold / targeted research |
| 50–64 | Weak — normally park/reject |
| <50 | Reject unless documented founder rationale overrides |

Default **Advance** additionally requires Evidence Confidence ≥60%, Research Completeness ≥70%, no fatal gate, and EMP2+ or a documented evidence-backed innovation rationale.

## MRR /10

| Score | Interpretation |
|---:|---|
| 9–10 | Native subscription/usage/rebilling with continuing value |
| 7–8 | Credible retainer/subscription but churn/support remains material |
| 4–6 | Monthly billing possible; underlying value partly one-off |
| 1–3 | Primarily transactional with optional recurring add-ons |
| 0 | No credible recurring model |

Monthly billing is not automatically good MRR. Heavy recurring human work reduces AI Deliverability and Low Human Dependency.

## AI Autonomy /100

`AI Autonomy = average(AI Buildability, AI Marketability, AI Deliverability, Low Human Dependency) × 10`

Score sustained production economics, not demos. Include quotas, provider charges, browser failures, support/recovery minutes and exception handling.

Preferred recurring execution order:

`deterministic/native action → native domain AI → bounded reasoning → browser/computer-use only where necessary`

## Evidence Confidence /100
Measures how much to trust the current scoring inputs.

- 80–100: strong current evidence
- 60–79: adequate for deeper underwriting/bounded test
- 40–59: material assumptions remain
- <40: mostly hypothesis

Evidence labels: **Verified fact · Credible estimate · Inference · DRF actual · Missing**.

## Research Completeness /100
Use the 15 Opportunity Score factors as minimum coverage. Complete = 1, Partial = 0.5, Missing = 0.

`Research Completeness = completed-equivalent factors / 15 × 100`

Completeness is coverage, not attractiveness or proof.

## External Market Proof — EMP0 to EMP4
EMP asks whether materially similar businesses succeed externally. It is independent of DRF Proof.

| Level | Meaning |
|---:|---|
| EMP0 | Completed search found no credible comparable commercial activity |
| EMP1 | Emerging signal — one/few operators, limited traction evidence |
| EMP2 | Active market — multiple independent operators with offers/pricing/customer signals |
| EMP3 | Market proven — sustained multi-operator commercial/customer/repeat evidence + counter-evidence reviewed |
| EMP4 | Established and transferable — robust evidence plus strong match to target context |

Record EMP Confidence separately. Missing research is `Pending`, not EMP0.

### Required market evidence where available
- multiple independent active operators;
- exact offers and prices;
- upfront/recurring/usage/licence/commission/royalty/upsell economics;
- acquisition channels/funnels/ads/SEO/outbound/marketplaces;
- reviews, case studies, customer/revenue/transaction/expansion signals;
- delivery/onboarding/support pattern;
- retention/repeat logic;
- failures, closures, complaints, churn, refunds, margin/support pressure;
- date/source quality and transferability limits.

### Transferability test
Ask whether payer, pain, geography, price, acquisition route, delivery economics, regulation/system constraints and founder/brand/data advantages transfer to DRF.

Valid state:

`EMP3 Market Proven · DRF Proof P1 Desk Underwritten`

Strong EMP reduces redundant internal validation; it never awards DRF P3–P6.

## Copy before invent

`find what works → verify multiple comparables → research failures → test transferability → adapt → test remaining DRF uncertainty`

One successful operator is a signal, not a base rate.

## Execution Velocity — optional sequencing score
Use when useful to choose which strong opportunity to execute first.

| Factor | Weight |
|---|---:|
| Build / Setup Speed | 25 |
| Go-to-Market Launch Speed | 20 |
| Sales-Cycle Speed | 20 |
| Client Delivery / Onboarding Speed | 20 |
| Dependency / Resistance | 15 |

Do not blend Execution Velocity into Opportunity Score. If a single sequencing number is useful:

`Execution Priority = Opportunity Score × 0.70 + Execution Velocity × 0.30`

Evidence Confidence below 60% remains **Research First**.

## Fatal gates
Before Advance, confirm:
- identifiable payer and revenue mechanism;
- credible demand/current pain;
- plausible first-customer route;
- delivery cost plausibly below value;
- no fatal legal/platform/data barrier;
- not merely a duplicate/vendor relabel.

## Output
Layer 1 must finish with:
- opportunity/pain/payer/revenue model;
- successful comparables + counter-evidence;
- Opportunity Score;
- MRR;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- EMP + confidence;
- execution timing where useful;
- fatal risks;
- candidate niche families;
- **REJECT / HOLD / ADVANCE / GOLDEN PRIORITY**;
- one largest remaining uncertainty / next action.
