# DRF Recurring Intelligence Loops

**Status:** Canonical operating specification — scheduling not yet activated  
**Version:** 1.0  
**Date:** 31 August 2026  
**Master programme:** #77  
**Governing stage:** [77.5] #82  
**Processing workflow:** `workflows/drf-opportunity-factory.md`  
**Data contract:** `knowledge/architecture/drf-v3-portfolio-data-contract.md`  
**Configuration:** `knowledge/guidelines/drf-recurring-intelligence-configuration.md`

## Objective

Keep David's Revenue Factory continuously useful through two recurring loops:

```text
LOOP A — GOLDEN OPPORTUNITY DISCOVERY
find new/emerging/proven business models
→ deduplicate
→ screen cheaply
→ reject / hold / advance
→ run qualified opportunities through the same three-layer factory

LOOP B — EXISTING PORTFOLIO REFRESH
watch current markets every day
→ prioritise material changes
→ refresh affected opportunities
→ preserve history and DRF Proof
→ reconcile the V3 portfolio
```

This file defines the operating contract. It does **not** activate a paid schedule, send outreach, release capital, publish earnings claims or make legal/commercial commitments.

---

# 1. Non-negotiable rules

1. **One business workflow.** Both loops call `workflows/drf-opportunity-factory.md`. They do not create alternative scoring logic.
2. **Business before vendor.** Classify the service/product/outcome and pain solved before treating a new platform, model, agent or CRM as a separate opportunity.
3. **Cheap rejection first.** Discovery candidates receive a low-cost Layer 1 scan before deep niche research or dossier creation.
4. **Copy before invent.** Prefer current evidence from successful comparable operators; also capture failures and counter-evidence.
5. **EMP and DRF Proof stay separate.** External success can establish category evidence but cannot award DRF P3–P6.
6. **Detailed source first.** Update evidence/dossier files first, specialised registers second, `businesses/PORTFOLIO-V3.md` last.
7. **Dashboard is read-only truth.** Automation never writes business truth directly into `index.html`.
8. **Preserve history.** Never replace a prior conclusion without retaining the evidence/date/reason for the change.
9. **Pending is not zero.** Missing information remains `Pending`, `Unknown`, `Needs more research` or `Conflict`.
10. **No hidden policy.** Thresholds, cadence and source priorities live in the configuration file and are versioned.
11. **No uncontrolled action.** Capital, paid advertising, prospect contact, public claims and legal commitments require the existing founder approval boundary.
12. **KISSS.** Daily scanning does not mean full daily re-research of all 27 businesses.

---

# 2. Shared run contract

## Run types

| Code | Run type | Purpose |
|---|---|---|
| `DISC` | Discovery | Find and screen new opportunity signals |
| `REFR` | Portfolio refresh | Reassess one or more existing opportunities |
| `EVNT` | Event-triggered refresh | Respond to a material market/platform/legal/operating event |
| `RECN` | Reconciliation | Validate and reconcile registers after source changes |

## Run ID

Use UTC timestamps for machine consistency:

```text
<CODE>-YYYYMMDD-HHMMSSZ-<short-run-key>
```

Examples:

```text
DISC-20260831-040000Z-daily
REFR-20260901-020000Z-wave1
EVNT-20260902-101500Z-meta-pricing
```

## Idempotency key

A run must derive an idempotency key from:

```text
run type
+ candidate fingerprint or opportunity_id
+ evidence cutoff timestamp
+ configuration version
```

Re-running the same key may repair an interrupted run, but must not create duplicate opportunities, duplicate rejection entries or duplicate evidence records.

## Run status

```text
PLANNED
RUNNING
PARTIAL
COMPLETED
FAILED
SUPERSEDED
```

Only `COMPLETED` runs may update final decision fields. A `PARTIAL` or `FAILED` run records what was checked and leaves the last successful canonical conclusion intact.

## Required run metadata

- run ID;
- mode and configuration version;
- started/completed timestamps;
- evidence cutoff;
- source families attempted/succeeded/failed;
- candidate/opportunity IDs touched;
- files changed;
- decisions changed;
- warnings/conflicts;
- next scheduled/triggered action;
- approval-required actions not executed.

---

# 3. Source-quality hierarchy

Use current primary and direct commercial evidence wherever practical.

## Tier A — strongest operating/commercial evidence

- actual DRF/Talent Bridge/iMPLEMENTAi operating records;
- payment, delivery, customer outcome and reconciled cost evidence;
- directly observed live offers, pricing pages, checkout/listing pages and product terms;
- public company filings or audited/regulated records where relevant;
- official marketplace/product metrics and first-party customer/operator records;
- permissioned founder/operator interviews with clear provenance.

## Tier B — strong external market evidence

- multiple independent live operators;
- official case studies with disclosed limitations;
- current customer reviews across credible platforms;
- active advertising libraries and funnels;
- current job openings, expansion, reseller/franchise/partner activity;
- reputable industry or government data;
- current platform/API/policy documentation.

## Tier C — directional evidence

- reputable trade press;
- search trend/keyword data;
- specialist directories;
- community discussions with corroboration;
- investor/founder interviews without disclosed operating data;
- estimates with transparent methodology.

## Tier D — weak signal only

- isolated social posts;
- promotional claims without corroboration;
- copied listicles;
- anonymous screenshots;
- AI-generated summaries without primary sources;
- one exceptional operator presented as a general base rate.

Tier D can generate a discovery candidate. It cannot establish EMP3/EMP4 or materially change a canonical score without stronger evidence.

## Positive and negative evidence

Every material investigation should seek both:

```text
success / demand / price / growth / repeatability
AND
failure / churn / complaints / margin pressure / closure / regulation / dependency
```

Absence of negative evidence is not proof that no downside exists.

---

# 4. LOOP A — Golden Opportunity Discovery

## Objective

Continuously identify structurally attractive business opportunities that DRF can adapt, execute and eventually package, while preventing weak ideas and vendor variants from cluttering the portfolio.

## Default cadence

- **Daily lightweight scan:** broad signal collection and deduplication.
- **Daily candidate triage:** apply the cheap Layer 1 scan to credible new signals.
- **Deep research:** only for candidates that pass the configured advance threshold or require one bounded evidence check.
- **Founder digest:** only when a Golden Priority candidate, material conflict or approval decision exists.

The daily scan may run without creating any new portfolio record.

## 4.1 Discovery source families

Scan a balanced portfolio of source families rather than one feed.

### A. Proven operator activity

- new offers and pricing changes;
- visible customer/transaction/revenue milestones;
- recurring service/SaaS tiers;
- expansion, franchising, partner/reseller programmes;
- repeatable productised-service models;
- founder/operator interviews;
- acquisitions, exits or shutdowns revealing economics.

### B. Marketplaces and transaction surfaces

- digital products and Business Blueprints;
- software/app marketplaces;
- agency/service directories;
- templates, automations, datasets and APIs;
- classified/business-opportunity listings;
- creator/community marketplaces;
- demand and review velocity where observable.

### C. Advertising and funnels

- active ad libraries;
- repeated ad angles and longevity;
- landing pages, lead magnets, audit/demo/deposit offers;
- pricing tests and guarantees;
- funnel structure and calls to action;
- retargeting or recurring upsell patterns.

### D. Customer pain and demand

- high-frequency complaints and workflow leakage;
- buyer search demand and rising queries;
- costly manual processes;
- regulation/technology creating new mandatory work;
- new distribution/customer channels;
- high-value gaps left by incumbent software.

### E. Platform and technology enablers

- new APIs, MCPs, integrations and white-label/reselling capabilities;
- cost reductions or new usage models;
- deterministic automation replacing expensive labour;
- AI capability that changes delivery economics;
- new channel access such as messaging, voice or agentic commerce.

A platform capability alone is not a business opportunity. It must connect to a payer, pain/outcome and revenue mechanism.

### F. Talent Bridge and iMPLEMENTAi assets

- recurring client pain;
- repeatable recruitment/assessment work;
- existing audiences, candidate data and relationships;
- reusable delivery IP and templates;
- current sales enquiries and lost opportunities;
- lawful data/product opportunities;
- adjacent revenue modules around existing clients.

### G. Failure and contrarian evidence

- business closures;
- refund/churn/complaint patterns;
- platform bans or margin deterioration;
- CAC inflation;
- low retention or high founder dependence;
- legal/data-rights constraints;
- incumbent features erasing a proposed wedge.

## 4.2 Candidate normalisation

Each signal becomes a candidate record with:

```text
candidate_id
source signal
business/service/outcome
pain solved
payer
revenue mechanism
possible recurring value
inspiring operators
possible niches
possible delivery rails
source date
```

Do not name the business after the enabling platform unless customers are buying that platform-specific product.

## 4.3 Candidate fingerprint and deduplication

Create a fingerprint from:

```text
normalised pain/outcome
+ payer class
+ revenue model
+ primary customer workflow
```

Compare it against:

- all `opportunity_id` values in `PORTFOLIO-V3.md`;
- parent names and aliases in `OPPORTUNITIES.md`;
- current dossiers/folders;
- ranked niche rows in `NICHES.md`;
- prior rejected/held candidates.

Classify as exactly one:

| Classification | Meaning | Action |
|---|---|---|
| `NEW_PARENT` | Materially new payer/outcome/revenue model | Continue Layer 1 scan |
| `NEW_NICHE` | Existing parent opportunity, new target-market combination | Route to parent niche research |
| `DELIVERY_VARIANT` | Same business, different platform/model/channel | Add evidence/architecture option; no new parent |
| `COMMERCIAL_VARIANT` | Same parent, materially different price/revenue packaging | Add to current dossier/underwriting |
| `REFRESH` | New evidence about an existing opportunity | Route to Loop B |
| `DUPLICATE` | No material new business/niche/evidence | Record dedupe and stop |
| `RECONSIDER_REJECTED` | Prior rejection trigger has materially changed | Reopen candidate with history |

## 4.4 Cheap Layer 1 scan

Use:

`knowledge/templates/revenue-opportunity-scan-card.md`

The scan must establish at minimum:

- identifiable payer;
- measurable/valuable outcome;
- revenue mechanism;
- current commercial signals;
- credible route to first customers;
- recurring/repeat potential;
- delivery feasibility and human burden;
- no obvious fatal legal/platform/capital condition;
- provisional Opportunity Score;
- MRR;
- AI Autonomy;
- Evidence Confidence;
- Research Completeness;
- provisional EMP and confidence;
- Reject/Hold/Advance.

Do not calculate RBS before the Business × Niche, offer, price, GTM, delivery and economics are defined.

## 4.5 Decision thresholds

Use the current configuration version. Default:

### REJECT / PARK

- Opportunity Score below 65 after adequate evidence; or
- no identifiable payer/revenue mechanism; or
- implausible acquisition; or
- delivery cost/support likely exceeds value; or
- fatal legal/platform/capital condition; or
- materially better substitutes erase the proposed outcome; or
- duplicate/delivery variant with no new material evidence.

### HOLD / RESEARCH

- Opportunity Score 65–74; or
- Evidence Confidence below 60%; or
- Research Completeness below 70%; or
- one material transferability or evidence conflict remains.

A Hold must identify one bounded evidence gap and reconsideration trigger.

### ADVANCE

- Opportunity Score at least 75;
- Evidence Confidence at least 60%;
- Research Completeness at least 70%;
- no fatal gate;
- EMP2+ or a documented evidence-backed innovation rationale.

### GOLDEN PRIORITY

- Opportunity Score at least 85;
- strong MRR and/or AI leverage;
- adequate evidence;
- plausible customer-acquisition and contribution route;
- no fatal transferability problem.

These are defaults, not silent immutable policy.

## 4.6 Advance route

An advanced candidate enters the same canonical workflow:

```text
complete Layer 1 research
→ generate/rank niches
→ select beachhead
→ reverse-engineer successful operators
→ design offer, price, GTM and delivery
→ calculate RBS and Return Profile
→ assign DRF Proof, Stage, Capital and Next Proof
→ produce Layer 3 dossier
→ update source registers
→ reconcile PORTFOLIO-V3.md last
```

The agent continues automatically through all defensible desk stages. It stops only at:

- a real evidence limit;
- a founder approval boundary;
- a capital/outreach/legal action;
- a Reject/Hold decision;
- a genuine source conflict.

## 4.7 Discovery outputs

### Candidate record

Use `knowledge/templates/drf-discovery-candidate-record.md`.

### Run history

Record the completed run in:

`research/recurring-intelligence/DISCOVERY-RUNS.md`

### Rejected/held candidates

Record in:

`research/recurring-intelligence/DISCOVERY-REJECTIONS.md`

Do not create a business folder for rejected candidates by default.

### Founder digest

Surface only:

- new Golden Priority candidates;
- opportunities needing a genuine founder decision;
- material portfolio taxonomy conflicts;
- failed/blocked automation affecting trust;
- major market events affecting high-priority opportunities.

Do not send daily noise when nothing material changed.

---

# 5. LOOP B — Existing Portfolio Refresh

## Objective

Keep the current portfolio factually current without rebuilding every business every day or destroying historical evidence.

## Daily event watch

Every active parent opportunity participates in a daily lightweight event watch for:

- major competitor/operator launch, shutdown or acquisition;
- material pricing/terms change;
- platform/API/AI capability or cost change;
- regulation/data-rights/policy change;
- major search/demand shift;
- material success/failure/customer evidence;
- new DRF actuals;
- source conflict or broken canonical path.

The daily watch generates deep work only when a material signal is found or a scheduled refresh is due.

## Risk-based deep-refresh cadence

| Opportunity state | Default deep refresh | Rationale |
|---|---|---|
| Active TEST / PILOT | Weekly and after every test evidence event | Price, response, delivery and cost evidence changes decisions quickly |
| FUND / SCALE / BLUEPRINT | Weekly operating review; monthly external-market review | Capital and live customer risk are high |
| Golden Opportunity in RESEARCH | Monthly | High priority and fast-moving evidence |
| Other active parent opportunities | Quarterly | Maintain current market/niche understanding without waste |
| Long-horizon / parked opportunity | Every six months | Low immediate decision value |
| Conflict / stale critical evidence | Immediate priority | Canonical trust problem |

[77.5] configuration may override this by model/volatility.

## Immediate event triggers

Refresh regardless of age when any of these occurs:

- material platform price, quota, policy or access change;
- legal/regulatory/data-rights change;
- major competitor launch, closure, acquisition or category shift;
- material new external operator evidence;
- customer payment, delivery, churn, refund or outcome evidence;
- acquisition cost/conversion change;
- delivery/support cost change;
- founder instruction or current opportunity conflict;
- broken current dossier/source link.

## 5.1 Priority queue

Process refresh candidates in this order:

1. `Conflict` or broken source/canonical path.
2. Current DRF operating evidence or safety/legal event.
3. TEST/PILOT/FUND/SCALE opportunities.
4. Stale Golden Opportunities/high-ranked opportunities.
5. Opportunities with material new market signals.
6. Scheduled ordinary refreshes.
7. Long-horizon/background opportunities.

Within a tier, use:

```text
capital/exposure
→ evidence age
→ Opportunity Score
→ active Next Proof urgency
```

Do not create one opaque priority score unless operational evidence later proves it useful.

## 5.2 Refresh intake

Use:

`knowledge/templates/drf-portfolio-refresh-record.md`

Read before research:

- `CURRENT.md` where present;
- current dossier;
- `PORTFOLIO-V3.md` row;
- relevant `OPPORTUNITIES.md`, `NICHES.md` and `INVESTMENT-READINESS.md` entries;
- prior refresh/run history;
- current evidence/test files.

## 5.3 Material-change review

Check only the field families plausibly affected by the signal or cadence:

- operator/category evidence and EMP;
- market size/growth/timing;
- willingness to pay and pricing;
- MRR/retention logic;
- niche rankings and confidence;
- offer/positioning;
- acquisition channels/CAC;
- delivery architecture, costs, quotas and support;
- legal/platform/dependency risk;
- RBS and Return Profile;
- DRF Proof from new DRF actuals only;
- Stage, Capital and Next Proof;
- dossier/Blueprint readiness;
- evidence freshness.

A routine refresh need not recalculate every factor when no relevant input changed.

## 5.4 Change tests

A change is material when it can reasonably alter:

- a score by at least 2 points;
- an EMP/DRF Proof/Stage level;
- the best niche or niche decision band;
- price/commercial model;
- acquisition or delivery architecture;
- capital/return/maximum downside;
- the next proof action;
- legal or ethical viability;
- public/private disclosure status.

Smaller observations may be appended to evidence history without changing the summary.

## 5.5 Update rules

1. Preserve the previous value/date/evidence.
2. State the new evidence and source date.
3. State which field/factor is affected.
4. Recalculate only affected derived values.
5. Keep EMP separate from DRF Proof.
6. Never reset DRF Proof because desk research changed.
7. Never award P3–P6 from external evidence.
8. Update the detailed current dossier first.
9. Update specialised registers where relevant.
10. Reconcile `PORTFOLIO-V3.md` last.
11. Update evidence freshness and one next action.
12. Record the completed refresh run.

## 5.6 Refresh outcomes

Use exactly one headline outcome:

```text
UNCHANGED — reviewed; no material decision change
STRONGER — evidence improves the case
WEAKER — evidence reduces the case
REPOSITION — business remains attractive but niche/offer/price/GTM/delivery must change
OBSOLETE — model/wedge no longer justifies active attention
CONFLICT — authoritative evidence requires review
PROOF ADVANCED — new DRF actuals earned a higher P-level
PROOF REGRESSED — prior claimed proof was invalidated or evidence integrity failed
```

Proof regression requires explicit evidence and cannot occur merely because the market became less attractive.

---

# 6. Failure handling

## Source unavailable or blocked

- record source, error and timestamp;
- use an alternate high-quality source where available;
- do not present absence as a negative market conclusion;
- retain the last successful value;
- mark the affected check `Partial` or `Needs more research`.

## Rate limit / budget limit

- stop before low-priority sources;
- preserve completed high-priority evidence;
- mark the run `PARTIAL`;
- do not publish final score changes from incomplete critical evidence.

## Contradictory evidence

- preserve both sources;
- compare date, scope, methodology and incentives;
- choose only when one source is materially stronger/current;
- otherwise set the field/status to `Conflict` and surface the decision.

## Interrupted write

Use the idempotency key and canonical write order. If the detailed source changed but the V3 register did not, a reconciliation run must update the register. Never write the aggregate first.

## Parser/schema failure

- fail visibly;
- leave the last valid Dashboard V3 render/state intact where technically possible;
- do not coerce invalid rows;
- create/update the governing Issue with the exact field/path error.

## Partial or failed run

A failed run never overwrites the previous successful conclusion. The history record must state:

- what completed;
- what failed;
- which values remain current;
- whether a retry is required;
- whether founder action is required.

---

# 7. Public/private and Blueprint boundaries

## Public-safe opportunity fields

May be published when source rights and evidence permit:

- opportunity name;
- pain/outcome;
- high-level business model;
- Opportunity Score with date and methodology notice;
- MRR/AI Autonomy/Evidence/Research;
- EMP level/confidence with clear limitations;
- best niche and Niche Score;
- DRF Proof and Stage;
- high-level offer and price range;
- high-level Next Proof;
- evidence freshness;
- no-guarantee statement.

## Private/paid or permission-controlled material

Keep private/paid unless explicitly approved:

- complete operator reverse engineering and source notes;
- detailed lead lists and acquisition scripts;
- exact funnels, ads, sales scripts and delivery SOPs;
- proprietary data, assessments or client evidence;
- detailed financial model, sensitivities and cost architecture;
- implementation assets, snapshots, automations and templates;
- permissioned founder/operator interview transcripts;
- the complete Business Blueprint.

## Earnings and success claims

- scores are not success probabilities;
- estimates must be labelled;
- DRF actuals require evidence;
- no guaranteed earnings language;
- P6 certification must disclose period, sample, exclusions and failure modes.

---

# 8. Approval boundaries

The loops may autonomously:

- browse/research accessible public sources;
- calculate desk scores under the canonical framework;
- create/update research and portfolio files;
- create/update GitHub Issues and checklists;
- classify duplicates, niches and delivery variants;
- prepare offers, prices, tests and recommendations;
- reconcile the V3 register;
- produce a founder digest.

The loops must not autonomously:

- spend money or release capital;
- contact prospects or customers;
- publish new public claims/listings;
- accept legal/platform/commercial terms;
- expose private/customer data;
- change material guarantees/pricing policy;
- delete/overwrite useful evidence;
- mark P3–P6 without the required DRF evidence.

---

# 9. Run history and retention

Use:

```text
research/recurring-intelligence/
├── README.md
├── DISCOVERY-RUNS.md
├── DISCOVERY-REJECTIONS.md
└── REFRESH-RUNS.md
```

These are cross-portfolio control logs, not substitutes for detailed opportunity evidence.

Retention rules:

- one concise row per completed/failed run;
- one concise row per rejected/held candidate;
- link to detailed Issue/candidate record where one exists;
- preserve reconsideration trigger;
- do not add rejected candidates to the main business portfolio;
- archive only when the logs become operationally unwieldy and preserve links.

---

# 10. Implementation-neutral invocation

## ChatGPT Web manual run

```text
Read AGENTS.md.
Run workflows/drf-recurring-intelligence-loops.md in <DISCOVERY / REFRESH> mode using configuration version <version>.
Create/repair the governing Issue and live checklist first.
Use the canonical DRF Opportunity Factory for every candidate/opportunity.
Do not execute paid, outreach, public or legal actions.
```

## Future scheduler

A future GitHub Action, external agent runtime or scheduled ChatGPT task may invoke the same contract. The scheduler owns timing and credentials; this workflow owns business logic, evidence discipline and outputs.

The implementation must remain replaceable and must not embed unique scoring logic in scheduler code.

---

# 11. Required output summary

Every run ends with:

```text
RUN ID / MODE / CONFIG VERSION
STATUS / EVIDENCE CUTOFF
SOURCES ATTEMPTED / SUCCEEDED / FAILED
CANDIDATES OR OPPORTUNITIES REVIEWED
DUPLICATES / REJECTED / HELD / ADVANCED / GOLDEN
MATERIAL CHANGES
FILES UPDATED
CONFLICTS / PARTIAL RESULTS
APPROVAL-REQUIRED ACTIONS NOT EXECUTED
ONE NEXT ACTION
```

If nothing material changed, say so explicitly and do not manufacture activity.

---

# 12. Verification checklist

Before declaring a run complete:

- [ ] The correct configuration version was used.
- [ ] Run ID and idempotency key are present.
- [ ] Source quality and evidence cutoff are recorded.
- [ ] Duplicate/new-niche/vendor-variant classification was performed.
- [ ] Discovery used the Layer 1 scan before deep work.
- [ ] EMP and DRF Proof remain separate.
- [ ] Positive and negative evidence were considered where available.
- [ ] Only materially affected refresh fields were changed.
- [ ] Previous values/history were preserved.
- [ ] Detailed sources were updated before aggregates.
- [ ] `PORTFOLIO-V3.md` was reconciled last.
- [ ] Missing values remain honest.
- [ ] No approval-boundary action was executed.
- [ ] Run/rejection/refresh history was updated.
- [ ] The governing Issue checklist and repository checks passed.

## Final outcome

DRF gains continuous intelligence without creating a second scoring system: daily opportunity discovery and market watching, risk-based deep refresh, cheap rejection, strong evidence discipline, stable portfolio truth and a clear founder signal only when something material changes.