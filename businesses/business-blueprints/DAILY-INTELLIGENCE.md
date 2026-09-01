# Business Blueprints — Daily Intelligence & GitHub Deployment

**Status:** Active scheduled research profile  
**Date:** 1 September 2026  
**Issue:** #112  
**Parent opportunity:** `businesses/business-blueprints/`  
**Scheduler:** ChatGPT Web daily condition-watch automation  
**Governing workflow:** `workflows/drf-recurring-intelligence-loops.md`  
**Configuration:** `knowledge/guidelines/drf-recurring-intelligence-configuration.md`

## Purpose

Run one integrated daily intelligence pass over the **Business Blueprints parent opportunity**, not a Whop-only watcher.

Whop is one distribution channel inside Business Blueprints. Gumroad, Contra, Notion Marketplace, Lemon Squeezy, Payhip, Shopify, Framer, Webflow, PromptBase, developer/API marketplaces, owned storefronts and newly emerging relevant channels belong to the same parent-opportunity research loop.

The automation is useful only when research is connected to durable DRF execution:

```text
research current evidence
→ compare with current DRF canon
→ decide whether anything materially changes
→ write the evidence/decision into GitHub
→ verify the write
→ notify David only when material or blocked
```

**Chat is a summary surface. GitHub is the durable truth.**

---

# 1. Mandatory read-before-research contract

At the start of every scheduled run, use the connected GitHub integration and read current repository truth. Newer repository truth overrides the scheduled prompt.

Read at minimum:

1. `AGENTS.md`
2. `businesses/business-blueprints/README.md`
3. `businesses/business-blueprints/RESEARCH.md`
4. `businesses/business-blueprints/RBF-ASSESSMENT.md`
5. `businesses/business-blueprints/DISTRIBUTION-CHANNELS.md`
6. `businesses/business-blueprints/PRODUCT-TYPES.md`
7. relevant files under `businesses/business-blueprints/channels/`
8. `knowledge/guidelines/business-opportunity-scoring-framework.md`
9. `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md`
10. `knowledge/guidelines/drf-recurring-intelligence-configuration.md`
11. relevant Business Blueprints entries in `businesses/OPPORTUNITIES.md`, `businesses/INVESTMENT-READINESS.md` and `businesses/PORTFOLIO-V3.md`
12. `research/recurring-intelligence/REFRESH-RUNS.md`

Do not carry an old channel taxonomy, score or conclusion forward merely because it exists in the automation prompt.

---

# 2. Daily research scope

The daily run must research the **whole commercial opportunity** proportionately. It is not required to rewrite every file every day, but the scan must not be limited to one channel.

## A. Parent market and buyer demand

Research:

- current demand for proof-backed business systems, launch kits, operating systems, templates, digital business assets and deployable businesses;
- buyer willingness to pay and current pricing bands;
- successful comparable sellers/operators and their offers;
- recurring/update/licence economics;
- actual sales, creator revenue, reviews, adoption or transaction evidence where credible;
- buyer activation/deployment evidence;
- failures, refund/churn complaints, commoditisation and support burden.

Do not use one exceptional seller as the market base rate.

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
- other credible new marketplaces or AI-native commerce/discovery surfaces.

For each material channel change, check:

- eligibility and publication mechanics;
- fees and payout economics;
- native marketplace/discovery strength;
- creator/seller economics;
- traffic, sales or adoption evidence;
- affiliate/referral/royalty economics;
- customer ownership/data portability;
- listing/product restrictions;
- AI-generated-content rules;
- refund/dispute rules;
- APIs, CLI, MCP or automation capability;
- concentration/dependency risk.

A channel is a **revenue endpoint**, not a new parent opportunity unless the payer/outcome/revenue model itself materially differs.

## C. Product formats

Check whether new evidence changes the attractiveness or packaging of:

- complete operating-business bundles;
- website/revenue launch kits;
- Notion/database operating systems;
- workflow/automation packs;
- prompt/agent/Skill packs;
- software/licence/API components;
- playbook/checklist/document bundles;
- subscriptions, update clubs or licences.

Product formats stay downstream of the Business Blueprints parent unless the canonical opportunity framework says otherwise.

## D. SEO and owned discoverability

Research meaningful changes in:

- search demand for the underlying business/problem, not only the phrase `Business Blueprints`;
- search-result competition and rankability;
- marketplace pages appearing in organic search;
- owned landing-page opportunities;
- structured data/indexability changes;
- high-intent queries that can route into specific Blueprint products.

## E. AI discovery and agentic commerce

Track material changes in:

- AI answer-engine/agent discoverability;
- `llms.txt`, structured content and machine-readable product information;
- platform APIs/CLI/MCP capabilities;
- agentic checkout, deployment or business-operation mechanics;
- browser-native WebMCP developments relevant to owned/deployed Blueprint sites;
- new AI-native marketplaces or agent purchasing/discovery surfaces.

Keep **MCP/API/CLI** separate from **WebMCP**. Do not claim native WebMCP support without direct evidence.

## F. Economics, proof and risk

Look for evidence affecting:

- direct-sale contribution;
- recurring revenue quality;
- platform fees;
- CAC/discovery economics;
- refund/support burden;
- buyer activation/deployment;
- recurring channel economics;
- platform concentration;
- IP/copying risk;
- legal/policy/AI-content restrictions;
- DRF actual traffic, buyers, deployment, revenue, support and retention when available.

External market evidence may change scores or EMP. It **cannot award DRF P3–P6** without qualifying DRF actuals.

---

# 3. Material-change test

Use the canonical recurring-intelligence configuration.

A finding is normally material when it can alter at least one of:

- Opportunity Score by **2+ points**;
- RBS by **2+ points**;
- EMP;
- DRF Proof;
- Stage or Capital;
- best Blueprint candidate/niche;
- product format;
- channel priority/routing;
- price or revenue model;
- acquisition/discovery strategy;
- delivery/activation architecture;
- legal/platform viability;
- Next Proof;
- evidence confidence/freshness in a way that changes the decision.

Smaller useful evidence can be preserved without changing the headline score.

A Whop improvement does **not automatically increase the parent Business Blueprints score**. Assess the effect on the multi-channel parent business.

---

# 4. Mandatory GitHub write-back

Every completed scheduled run must leave durable evidence in DRF.

## Every run — including no material change

Append one concise run row to:

`research/recurring-intelligence/REFRESH-RUNS.md`

Use scope `Business Blueprints` and outcome `UNCHANGED`, `STRONGER`, `WEAKER`, `REPOSITION`, `OBSOLETE`, `CONFLICT`, `PROOF ADVANCED` or `PROOF REGRESSED`.

A no-change run should **not** churn parent score/dossier files merely to change a date.

## Material channel-specific evidence

Update the detailed channel evidence first:

- existing `businesses/business-blueprints/channels/<channel>/...` files where present;
- `businesses/business-blueprints/DISTRIBUTION-CHANNELS.md` when channel priority, economics or routing changes.

Create a new channel folder only when the channel has enough durable material to justify it. Do not create ornamental structure.

## Material parent-level evidence

Update:

`businesses/business-blueprints/RESEARCH.md`

If a distinct historical evidence record is needed, create a dated file under:

`businesses/business-blueprints/research/`

Only do this for genuinely material evidence that should remain separately traceable.

## Product-format change

Update:

- `businesses/business-blueprints/PRODUCT-TYPES.md`
- the relevant file under `businesses/business-blueprints/product-types/`

only when the product taxonomy/economics materially changes.

## Opportunity Score / Layer 1 change

When the canonical Opportunity Score, MRR, AI Autonomy, Evidence Confidence, Research Completeness, EMP or Layer-1 decision changes:

1. update the detailed parent research first;
2. update the Business Blueprints entry in `businesses/OPPORTUNITIES.md`;
3. update `businesses/business-blueprints/README.md` if the current founder summary/decision changes;
4. reconcile `businesses/PORTFOLIO-V3.md` **last**.

Preserve before/after values and the evidence/rationale.

## RBS / Proof / Stage / Capital change

When the Revenue Blueprint Score, Return Profile, DRF Proof, Stage, Capital or Next Proof changes:

1. update `businesses/business-blueprints/RBF-ASSESSMENT.md` first;
2. update `businesses/INVESTMENT-READINESS.md` where applicable;
3. update `businesses/business-blueprints/README.md` if the current decision changes;
4. reconcile `businesses/PORTFOLIO-V3.md` **last**.

Never award P3–P6 from external desk research.

## Cross-marketplace evidence

When the finding materially affects more than Business Blueprints, update the reusable master research where appropriate, including:

`research/ai-first-digital-marketplaces-and-service-platforms.md`

Do not duplicate the same evidence across files without a clear canonical reason.

---

# 5. Verification and notification gate

A scheduled run is not complete until repository persistence is verified once.

Required order:

```text
research
→ decide
→ GitHub write(s)
→ re-read changed path(s)
→ append/verify REFRESH-RUNS row
→ notify if required
```

## Notify David only when

- a material decision/economic/market change occurred and is already landed in GitHub;
- a score, RBS, EMP, Proof, Stage, channel priority or Next Proof materially changed;
- a major new channel/opportunity or material risk emerged;
- contradictory authoritative evidence creates `CONFLICT`;
- GitHub persistence failed or the automation is otherwise blocked.

## Do not notify when

- the run completed successfully;
- the run was recorded in `REFRESH-RUNS.md`;
- no material decision changed.

If GitHub write-back fails, **do not describe the research as deployed or complete**. Preserve the last canonical conclusion and report the exact failure.

---

# 6. Current score boundary

At creation of this profile:

- Parent Business Blueprints RBS: **82/100**;
- DRF Proof: **P2 Backtested**;
- Gate: **FORWARD TEST**;
- Capital unlocked: **up to $3,000**;
- Whop-specific channel assessment remains separate from the parent score.

Current first-party Whop programme verification improves the Whop channel evidence quality but, by itself, does **not** justify raising the multi-platform parent score. Representative buyer conversion, channel contribution, activation, support and retention remain unproven.

The daily automation must use newer repository truth if any of these values change.
