# DRF — Root Agent Contract

Read this first before substantive DRF work.

## Number-one rule

**Do not over-engineer. Traction before build. Revenue work before optional build work.** Use the smallest safe, reversible action that can create or protect measurable commercial value.

**Speak sales language.** Lead with what is sold, who pays, how much/on what basis, and label revenue plainly as upfront sale, recurring fee, royalty, commission, usage fee, licence or upsell before platform/technical terminology.

**Never collapse a business decision into one score.** Preserve the complete decision stack:

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence Confidence + Research Completeness
→ External Market Proof
→ ranked Niche options + Niche Score
→ selected Business × Niche
→ offer + pricing + GTM + delivery architecture
→ Revenue Blueprint Score + Return Profile
→ DRF Proof + Stage + Capital + Next Proof
→ Workflow Layer 3 structured business case
→ V3 reconciliation
→ Dashboard V3
```

A high score never guarantees success or authorises capital. A market-proven business model must not be called unproven merely because DRF has not yet operated it.

---

# Canonical truth

```text
Founder instruction
→ GitHub Issue / acceptance criteria
→ repository files
→ verified commercial/operating evidence
→ chat/session context
```

Temporary agent context never overrides newer repository/GitHub truth.

Repository truth flows:

```text
live evidence
→ CURRENT.md pointer
→ current opportunity dossier
→ specialised registers
→ businesses/PORTFOLIO-V3.md
→ Dashboard V3
```

The dashboard is derived. **Never edit `index.html` to change business truth.**

---

# Mandatory Issue planning and execution

**Checklist first. Execution second.** Every substantive DRF task must be controlled by a GitHub Issue before implementation.

The Issue must contain enough context that a fresh agent can continue without chat history:

- objective;
- founder context / why;
- scope and exclusions;
- implementation checklist;
- verification checklist;
- acceptance criteria/final outcome;
- dependencies/sequence where relevant.

Execution loop:

```text
Founder instruction
→ create/repair Issue
→ execute one bounded item
→ verify it
→ check it off
→ continue
→ final verification
→ close only when acceptance criteria pass
```

Rules:

1. Plan before substantive file changes.
2. Check off actual work, never anticipated work.
3. Keep the Issue current when scope/design changes.
4. Record discoveries future agents need.
5. Checklist completion alone is not enough; verification must pass.
6. Do not close with hidden work remaining.

## Master + Stage Issues

Large programmes/architecture changes use one Master plus linked Stage Issues.

Create a Stage when it has its own meaningful checklist/acceptance, PR/verification cycle, dependency or subsystem boundary.

Naming example:

```text
Master #77
Stage identifier [77.1]
Actual Stage Issue #78
```

Rules:

- Master owns founder intent, architecture, sequence and final acceptance.
- Stage owns one bounded implementation/verification outcome.
- Two-way link every Stage and Master.
- Check off a Master stage only after the Stage closes verified.
- Master cannot close until all stages and end-to-end acceptance pass.
- Native GitHub sub-issues are optional; ordinary Issues must remain sufficient.

---

# Mandatory V3 / Workflow Layer 3 close-out

This is the rule that keeps all agents on the current workflow.

For **every material opportunity, niche, commercial-model, evidence or execution update**, follow:

`knowledge/architecture/drf-v3-writeback-contract.md`

A material research/update Issue is **not complete** when only its research file changes.

Required close-out order:

```text
new evidence / result
→ update authoritative source first
→ update specialised register(s) when their fields changed
→ update current Workflow Layer 3 dossier/CURRENT when required
→ review V3 founder fields
→ choose exactly one:
   A. V3 fields changed → update businesses/PORTFOLIO-V3.md LAST
   B. no V3 field changed → record businesses/V3-RECONCILIATIONS.md
→ run validation
→ only then close Issue / merge PR
```

Rules:

1. **Do not close material opportunity/niche research while Dashboard V3 would be stale.**
2. Do not manufacture a score/freshness change just to touch the portfolio; use `NO FIELD CHANGE` reconciliation when appropriate.
3. `PORTFOLIO-V3.md` is the joined founder register, not the primary evidence source.
4. EMP and DRF Proof remain separate during reconciliation.
5. Documentation completeness never raises DRF Proof.
6. Missing/Pending never becomes numerical zero.
7. Review Evidence Freshness and Next Proof on every material refresh.
8. Use `knowledge/templates/drf-v3-closeout-checklist.md` for final close-out.
9. CI enforces that material opportunity/niche changes include either the V3 portfolio or the reconciliation ledger.

`workflows/revenue-blueprint-factory.md` is compatibility/history only. It must never become the active end-to-end workflow again.

---

# Repository ontology

- `businesses/` — revenue-producing ventures and commercial truth.
- `setups/` — reusable implementation/configuration packages.
- `agents/` — who acts.
- `skills/` — reusable capabilities.
- `workflows/` — multi-stage sequences.
- `software/` — shared tools/products/components.
- `research/` — substantial durable evidence.
- `technical/` — runtime, integrations, automation, infrastructure, observability.
- `knowledge/guidelines/` — policy/governing rules.
- `knowledge/sops/` — repeatable procedures.
- `knowledge/templates/` — standard structures.
- `knowledge/lessons/` — execution learnings.
- `knowledge/architecture/` — system design/rationale.
- `lab/` — experiments not canonical yet.
- `archive/` — retired history.

Every first-class folder has a `README.md`. Do not create empty ornamental structure.

---

# DRF Revenue Opportunity Factory

**DRF is David's Revenue Factory.** Its job is to discover, research, compare, select, adapt, test, improve, scale and optionally package revenue-producing businesses.

RBS, P0–P6, staged capital and Blueprint certification are deeper underwriting/execution controls **inside DRF**. They do not replace business-opportunity selection.

## Three progressive workflow layers

### Layer 1 — Opportunity Discovery & Structural Selection

Question: **Do we want this kind of business?**

Required outputs:

- Business Opportunity + pain/outcome;
- Opportunity Score /100;
- MRR /10;
- AI Autonomy /100;
- Evidence Confidence /100%;
- Research Completeness /100%;
- External Market Proof + confidence;
- Execution Velocity/time estimates where useful;
- Reject / Hold / Advance.

This selects the **business/service/outcome vehicle**.

### Layer 2 — Niche Selection & Commercial Underwriting

Question: **Where, how and at what economics should it operate?**

Required outputs:

- ranked Business × Niche combinations;
- Niche Score + confidence;
- beachhead niche;
- successful comparable operators + counter-evidence;
- offer/pricing;
- GTM/customer acquisition;
- delivery architecture;
- RBS + Return Profile;
- EMP and DRF Proof shown separately;
- Stage, Capital, Next Proof.

This selects the **target and commercial design**, then underwrites it.

### Layer 3 — Structured Factory Output + V3 Write-Back

Question: **Can it be represented as one complete, comparable business case and has that current state reached V3?**

Layer 3 combines Layers 1 and 2 into the current founder-readable dossier, then completes the mandatory V3 reconciliation.

Layer 3 does not raise DRF Proof by documentation alone.

Dashboard Version 3 is the website view of all three layers. **Dashboard V3 is not Workflow Layer 3.**

---

# External Market Proof vs DRF Proof

- **EMP0–EMP4** asks whether materially similar businesses already succeed. Use current operators, offers, prices, customers, ads, reviews, case studies, traction, longevity, expansion and counter-evidence.
- **DRF Proof P0–P6** asks how far **our adaptation** has progressed from capture through underwriting, backtest, current-market test, paid delivery, repeatability and scale.

Valid state:

`EMP3 Market Proven · DRF Proof P1 Desk Underwritten`

External success can support scores, offer/pricing/GTM and P2 backtesting. It does not prove our CAC, delivery quality, unit economics or repeatability.

---

# Copy before invent

For every material opportunity:

1. find multiple successful comparable operators where practical;
2. capture offer, price, recurring model, acquisition, proof and delivery;
3. capture failures, complaints, churn, margin pressure and counter-evidence;
4. identify what transfers to DRF's niche/geography/channel/assets;
5. adapt/improve the proven pattern;
6. test only remaining DRF-specific uncertainty.

One successful operator is a signal, not a base rate.

---

# Business Blueprint distinction

A **Business Blueprint** is an optional packaging output: a sufficiently evidenced operating system another competent operator can reproduce.

**Business Blueprints** is also one separate DRF opportunity for selling those packages through compatible channels.

Do not redefine WhatsApp + CRM, Revenue Recovery, AI Voice, Assessment-as-a-Service or other businesses as “Business Blueprints” merely because they may later be packaged.

---

# Outcome-first modular architecture

Do not define the business by the current AI model, CRM, messaging provider or automation vendor.

```text
1. Outcome — measurable result
2. Niche — who has the pain and will pay
3. Customer channel — where interaction happens
4. System of record — where durable state lives
5. Agent layer — where AI judgement/orchestration adds value
```

Canonical deployment unit:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

Rules:

1. Sell the outcome, not the vendor.
2. Select the niche before scaling distribution.
3. Follow the customer's real channel.
4. Keep one clear system of record.
5. Keep agents/models replaceable unless the model is the product.
6. Keep predictable work deterministic.
7. Avoid duplicate workflow-state ownership.
8. Use the minimum viable stack.

UAE service-business default unless niche evidence says otherwise:

`WhatsApp → CRM/system of record → deterministic lifecycle automation → native AI → external agent where materially useful`

Canonical rationale: `knowledge/architecture/outcome-first-modular-revenue-architecture.md`.

---

# Canonical opportunity workflow

For every new opportunity, discovery candidate, portfolio refresh, material business-model pivot or revenue addition, use:

- `workflows/drf-opportunity-factory.md` — only canonical end-to-end workflow;
- `knowledge/templates/drf-opportunity-factory-intake-prompt.md` — founder/discovery/refresh intake;
- `knowledge/templates/business-opportunity-research.md` — three-layer dossier;
- `knowledge/architecture/drf-v3-writeback-contract.md` — mandatory Layer 3 close-out;
- `knowledge/templates/drf-v3-closeout-checklist.md` — final reconciliation checklist;
- `knowledge/guidelines/business-opportunity-scoring-framework.md` — Layer 1;
- `knowledge/guidelines/niche-attractiveness-scoring-framework.md` — niche selection;
- `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md` — RBS/DRF Proof/Stage/Capital/Return.

Supported modes:

1. Founder Intake;
2. Automated Discovery;
3. Portfolio Refresh.

Run Layer 1 completely. If it fails, reject/hold cheaply. If it advances, continue automatically through Layers 2 and 3 unless a genuine founder boundary applies.

---

# Change workflow

Use the shortest lifecycle proportional to risk.

## Simple-file fast path

Only for a low-risk reversible Markdown/checklist/note correction that **does not materially change opportunity/niche evidence, scores, commercial design, proof, Stage, Capital, Return or V3 state**:

```text
Issue
→ direct file change on main
→ verify once
→ close Issue
```

## Standard path

Use for code, Actions, automation, architecture/governance, security/authentication **and all material opportunity/niche research/evidence changes**:

```text
Issue
→ Issue-linked branch
→ focused changes/commits
→ Pull Request
→ checks/review
→ merge
→ Issue closes
```

Do not bypass the V3 close-out contract through the simple-file path.

---

# Commercial operating rules

1. Resolve/create the GitHub Issue before substantive work.
2. Prefer **SELL / USE / INTEGRATE / AUTOMATE / BUILD**.
3. Research successful comparable businesses before invention.
4. Do not build infrastructure without a current commercial/operating blocker.
5. Existing warm assets/channels precede paid acquisition unless evidence says otherwise.
6. Define customer, pain, outcome, niche, channel, system of record, delivery/agent layer, success metric and stop condition.
7. Measure cash and qualified commercial movement before vanity activity.
8. Every active opportunity needs one Next Proof/action.
9. Use deterministic automation for certainty; agents for judgement.
10. Keep agents/models/vendors replaceable; durable truth belongs in GitHub/files.
11. Do not duplicate GitHub Issues, Projects, Actions, PRs, Releases or history without a proven gap.
12. Feed recurring failures into `knowledge/lessons/` and improve the relevant system.
13. Installed/authorised/connected is not proof that an operation works.
14. Never commit credentials, tokens, keys, customer secrets or payment data.
15. Keep personal/customer data out of GitHub unless explicitly approved and appropriate.
16. Separate verified fact, credible estimate, inference, EMP and DRF actual.
17. Never invent market proof, customer results, deployment, financial actuals or test results.

---

# Founder boundary

Escalate for genuine business decisions, material recurring cost, capital release, destructive changes, security/authentication changes, irreversible architecture, legal/regulatory impact, material pricing/guarantees or significant financial/reputation commitments.

Do not escalate routine research, calculations, routing, reversible implementation or conclusions already governed by the workflow.

---

# Native capability first

Before building a custom CRM, dispatcher, dashboard, task system, agent runtime, research portal or orchestration layer, check whether an existing service/GitHub capability solves the need. Integrate at boundaries rather than dual-writing state.
