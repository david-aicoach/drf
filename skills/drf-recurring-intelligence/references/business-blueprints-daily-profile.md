# Business Blueprints — Daily Intelligence & GitHub Deployment

**Status:** Active scheduled research profile  
**Date:** 1 September 2026  
**Issue:** #115  
**Parent opportunity:** `businesses/business-blueprints/`  
**Scheduler:** ChatGPT Web daily condition-watch automation  
**Canonical opportunity workflow:** `workflows/drf-opportunity-factory.md`  
**Recurring-loop contract:** `workflows/drf-recurring-intelligence-loops.md`  
**Layer 3 write-back:** `knowledge/architecture/drf-v3-writeback-contract.md`  
**Configuration:** `knowledge/guidelines/drf-recurring-intelligence-configuration.md`

## Purpose

Run one integrated daily intelligence pass over the **Business Blueprints parent opportunity**, not a Whop-only watcher.

Whop is one distribution channel inside Business Blueprints. Gumroad, Contra, Notion Marketplace, Lemon Squeezy, Payhip, Shopify, Framer, Webflow, PromptBase, developer/API marketplaces, owned storefronts and newly emerging relevant channels belong to the same parent-opportunity research loop.

The automation must use the current DRF recipe:

```text
current DRF canon
→ successful comparable businesses + counter-evidence
→ External Market Proof + transferability
→ affected Opportunity/RBS/Stage/Next Proof underwriting
→ detailed source first
→ specialised registers when fields changed
→ Workflow Layer 3
→ PORTFOLIO-V3.md LAST or explicit V3 NO FIELD CHANGE
→ REFRESH-RUNS.md
→ verify once
→ notify David only when material or blocked
```

**Chat is a summary surface. GitHub is the durable truth.**

---

# 1. Mandatory read-before-research contract

At the start of every scheduled run, use the connected GitHub integration and read current repository truth. Newer repository truth overrides the scheduled prompt.

Read at minimum:

1. `AGENTS.md`
2. `workflows/drf-opportunity-factory.md`
3. `knowledge/templates/business-opportunity-research.md`
4. `knowledge/architecture/drf-v3-writeback-contract.md`
5. `businesses/business-blueprints/README.md`
6. `businesses/business-blueprints/RESEARCH.md`
7. `businesses/business-blueprints/RBF-ASSESSMENT.md`
8. `businesses/business-blueprints/DISTRIBUTION-CHANNELS.md`
9. `businesses/business-blueprints/PRODUCT-TYPES.md`
10. relevant files under `businesses/business-blueprints/channels/`
11. `knowledge/guidelines/business-opportunity-scoring-framework.md`
12. `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md`
13. `knowledge/guidelines/drf-recurring-intelligence-configuration.md`
14. relevant Business Blueprints entries in `businesses/OPPORTUNITIES.md`, `businesses/INVESTMENT-READINESS.md` and `businesses/PORTFOLIO-V3.md`
15. `research/recurring-intelligence/REFRESH-RUNS.md`

Do not carry an old taxonomy, score, proof state, EMP state, price, Next Proof or channel assumption forward merely because it exists in the automation prompt.

---

# 2. Non-negotiable evidence recipe — copy before invent

The daily run must treat **successful existing businesses as first-class evidence**, not as optional inspiration.

## Successful comparable operators

Research multiple independent materially similar businesses where practical. Capture:

- operator/business;
- product/category/niche/geography;
- exact offer and promise;
- one-time/setup price;
- recurring/usage/licence/commission/royalty pricing;
- acquisition channels, funnel and CTA;
- public sales, revenue, customers, reviews, transactions, longevity, hiring or expansion evidence;
- onboarding/delivery pattern;
- repeat/retention or recurring-value pattern;
- founder/audience/platform advantages that may not transfer;
- source date and evidence class.

Do not use one exceptional seller as the base rate.

## Counter-evidence

Actively search for:

- failed or closed products/operators;
- poor conversion despite traffic;
- refund/churn/support complaints;
- commoditisation/copying;
- weak margins or platform dependence;
- acquisition dependence on a large personal audience;
- legal/IP/policy restrictions;
- evidence that buyers purchase but do not deploy/use the system.

## External Market Proof

Assign or reassess **EMP0–EMP4 + EMP Confidence** using the current Opportunity Factory.

External evidence is allowed to materially strengthen or weaken:

- Opportunity Score factor evidence;
- RBS factor evidence;
- Evidence Confidence;
- price/commercial model;
- acquisition/GTM assumptions;
- delivery architecture;
- Stage/decision where justified;
- Next Proof.

But external evidence cannot award DRF P3–P6.

### Critical rule

If **EMP3/EMP4 already proves the broad category**, do **not** wait for iMPLEMENTAi/DRF to internally re-prove that the business model can exist.

Instead:

> **Test only the largest remaining DRF-specific uncertainty.**

Examples:

- exact DRF buyer/ICP transferability;
- local price acceptance;
- acquisition channel and CAC;
- activation/deployment quality;
- direct support burden;
- contribution margin;
- repeatability of DRF's adaptation.

Strong external category proof should **shrink the test**, not inflate DRF Proof.

---

# 3. Daily research scope

The daily run must research the **whole commercial opportunity** proportionately. It is not required to rewrite every file every day, but the scan must not be limited to one channel.

## A. Parent market and buyer demand

Research:

- successful comparable Business Blueprint / business-in-a-box / operating-system / template-system / snapshot businesses;
- buyer willingness to pay and current pricing bands;
- actual sales, creator revenue, customers, reviews, adoption or transaction evidence where credible;
- recurring/update/licence economics;
- buyer activation/deployment evidence;
- acquisition patterns used by successful operators;
- failures, weak conversion, refund/churn complaints, commoditisation and support burden.

## B. Distribution-channel portfolio

Review current and emerging channels relevant to Business Blueprint product types, including where applicable:

- Whop;
- Gumroad;
- Contra / Contra Digital Products;
- Notion Marketplace;
- Lemon Squeezy;
- Payhip;
- Shopify / owned storefronts;
- Framer Marketplace;
- Webflow Templates;
- PromptBase;
- GitHub Marketplace / RapidAPI / specialist software/API channels;
- credible new marketplaces or AI-native commerce/discovery surfaces.

For each material channel change, check:

- eligibility/publication mechanics;
- fees and payout economics;
- discovery strength;
- seller economics and public traction;
- affiliate/referral/royalty economics;
- customer ownership/data portability;
- restrictions and AI-content rules;
- refunds/disputes/support obligations;
- APIs, CLI, MCP or automation capability;
- concentration/dependency risk.

A channel is a **revenue endpoint**, not a new parent opportunity unless payer/outcome/revenue model materially differs.

## C. Product formats

Check whether evidence changes the attractiveness or packaging of:

- complete operating-business bundles;
- website/revenue launch kits;
- Notion/database operating systems;
- workflow/automation packs;
- prompt/agent/Skill packs;
- software/licence/API components;
- playbook/checklist/document bundles;
- subscriptions, update clubs or licences.

## D. SEO and owned discoverability

Research meaningful changes in:

- high-intent underlying problem/business queries;
- search-result competition and rankability;
- marketplace pages in organic search;
- owned landing-page opportunities;
- structured data/indexability;
- content/acquisition patterns used by successful comparable sellers.

## E. AI discovery and agentic commerce

Track material changes in:

- AI answer-engine/agent discoverability;
- `llms.txt`, structured content and machine-readable product information;
- platform APIs/CLI/MCP capabilities;
- agentic checkout/deployment/operation;
- browser-native WebMCP relevant to owned/deployed Blueprint sites;
- AI-native purchasing/discovery surfaces.

Keep **MCP/API/CLI** separate from **WebMCP**. Do not claim native WebMCP support without direct evidence.

## F. Economics, proof and risk

Look for evidence affecting:

- direct-sale contribution;
- recurring revenue quality;
- price bands;
- platform fees;
- CAC/discovery economics;
- refund/support burden;
- buyer activation/deployment;
- platform concentration;
- IP/copying risk;
- legal/policy/AI-content restrictions;
- DRF actual traffic, buyers, deployment, revenue, support and retention when available.

---

# 4. Material-change test

Use the canonical recurring-intelligence configuration and Opportunity Factory.

A finding is material when it can alter at least one of:

- Opportunity Score by **2+ points**;
- RBS by **2+ points**;
- EMP or EMP Confidence materially;
- DRF Proof;
- Stage or Capital;
- best Blueprint candidate/niche;
- product format;
- channel priority/routing;
- price/revenue model;
- acquisition/discovery strategy;
- delivery/activation architecture;
- legal/platform viability;
- Next Proof;
- evidence freshness/confidence in a decision-relevant way.

A Whop improvement does **not automatically increase the parent Business Blueprints score**. A strong external operator does not automatically establish EMP3/EMP4. Use breadth, quality, duration and transferability.

---

# 5. Mandatory GitHub write-back

Every completed scheduled run must leave durable evidence in DRF.

## Every run — including no material change

Append one concise run row to:

`research/recurring-intelligence/REFRESH-RUNS.md`

Use scope `Business Blueprints` and the canonical refresh outcome value.

A no-change run should not churn dossier/score files merely to change a date.

## Detailed evidence first

Material evidence belongs first in the most authoritative detailed source:

- `businesses/business-blueprints/research/` for a dated parent refresh when separately traceable evidence is warranted;
- `businesses/business-blueprints/channels/<channel>/` for channel-specific evidence;
- `businesses/business-blueprints/RESEARCH.md` for current parent evidence;
- `businesses/business-blueprints/DISTRIBUTION-CHANNELS.md` when channel routing/economics changes;
- `PRODUCT-TYPES.md` only when product taxonomy materially changes.

## Layer 1 / EMP changes

When Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness, EMP, EMP Confidence or Layer-1 decision changes:

1. update detailed parent evidence first;
2. update `businesses/OPPORTUNITIES.md` only if its represented field family changes;
3. update `businesses/business-blueprints/README.md` when founder summary changes;
4. complete Layer 3/V3 reconciliation.

## RBS / Proof / Stage / Capital / Next Proof changes

When RBS, Return Profile, DRF Proof, Stage, Capital or Next Proof changes:

1. update `businesses/business-blueprints/RBF-ASSESSMENT.md` first;
2. update `businesses/INVESTMENT-READINESS.md` only when its represented field family needs correction;
3. update `businesses/business-blueprints/README.md` when the founder decision changes;
4. complete Layer 3/V3 reconciliation.

Never award P3–P6 from external desk research.

---

# 6. Mandatory Workflow Layer 3 close-out

Every material run must finish under:

`knowledge/architecture/drf-v3-writeback-contract.md`

Choose exactly one:

### A. V3 FIELDS CHANGED

Update `businesses/PORTFOLIO-V3.md` **last** after authoritative source/register changes.

Examples include changed:

- EMP / EMP Confidence;
- price/commercial model;
- GTM;
- RBS/Proof/Stage/Capital;
- Next Proof;
- evidence freshness;
- current founder read.

### B. V3 NO FIELD CHANGE

If material research changes detailed evidence but no founder field should change, append the explicit reconciliation to:

`businesses/V3-RECONCILIATIONS.md`

Do not manufacture a no-op `PORTFOLIO-V3.md` edit.

A material research Issue/run is **not complete** until this Layer 3 decision is durable.

---

# 7. Verification and notification gate

Required order:

```text
research / external proof
→ decide
→ detailed GitHub write(s)
→ specialised register(s) when needed
→ Layer 3/V3 reconciliation
→ REFRESH-RUNS row
→ re-read changed paths once
→ notify if required
```

Notify David only when:

- a material market/economic/EMP/decision change is already landed in GitHub;
- score, RBS, EMP, Proof, Stage, channel priority, price or Next Proof materially changed;
- a major new channel/opportunity/risk emerged;
- authoritative evidence conflicts;
- GitHub persistence/validation is blocked.

If nothing material changed, record `UNCHANGED` and do not notify.

If GitHub persistence fails, do not describe the research as deployed or complete.

---

# 8. Current evidence boundary after first manual run

As of the first 1 September 2026 manual test:

- Opportunity Score: **82/100**;
- RBS: **82/100**;
- External Market Proof: **EMP3 Market Proven / 90% confidence**;
- DRF Proof: **P2 Backtested**;
- Stage: **TEST**;
- Capital unlocked: **up to $3,000**;
- initial self-serve price test band: **US$199–399 one-time**;
- Next Proof: **2 unrelated paid buyers/deposits at a pre-committed price, at least 1 genuine deployment-intent buyer, and at least 1 non-personal-favour acquisition route**, with source/conversion/fees/CAC/support measured where possible.

The automation must use newer repository truth when any of these values change.
