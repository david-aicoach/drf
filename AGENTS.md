# DRF — Root Agent Contract

Read this first before substantive DRF work.

## Number-one rule

**Do not over-engineer. Traction before build. Revenue work before optional build work.** Use the smallest safe, reversible action that can create or protect measurable commercial value.

**Speak sales language.** Lead with what is sold, who pays, how much or on what basis, and label every revenue stream plainly as an upfront sale, recurring fee, royalty, commission, usage fee, licence or optional upsell before using platform, analyst or technical terminology.

**Never collapse a business decision into one score.** Preserve the complete decision stack:

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence Confidence + Research Completeness
→ External Market Proof
→ ranked Niche options + Niche Score
→ selected Business × Niche
→ offer + pricing + GTM + delivery architecture
→ Revenue Blueprint Score + Return Profile
→ DRF Proof Level + Stage + Capital + Next Proof
→ structured business case
```

A high score never guarantees success or authorises capital. Equally, a market-proven business model must not be called unproven merely because DRF has not yet operated it.

## Canonical truth

```text
Founder instruction
→ GitHub Issue / acceptance criteria
→ repository files
→ verification / commercial evidence
→ chat/session context
```

Temporary agent context never overrides newer repository or GitHub truth.

---

# Mandatory Issue planning and execution protocol

**Checklist first. Execution second.** Every substantive DRF task must be planned in the GitHub Issue before implementation begins. The Issue is the live execution control plane, not a short placeholder note.

## Required Issue structure

Before substantive work starts, ensure the controlling Issue contains enough context that a fresh agent can continue without chat history:

- **Objective** — the outcome to achieve.
- **Why / context** — founder intent, problem, constraints and important decisions.
- **Scope** — included and explicitly excluded work.
- **Implementation checklist** — the work items to perform.
- **Verification checklist** — how material outputs will be checked.
- **Final outcome / acceptance criteria** — what must be true before closure.
- **Dependencies / sequence** — when ordering matters.

Do not reduce multi-page founder instructions to a few summary lines when omitted detail could change implementation.

## Live checklist rule

```text
Founder instruction
→ expand/repair the Issue
→ create the implementation checklist
→ execute one bounded item
→ verify the item
→ check it off
→ continue
→ complete final verification
→ close only when acceptance criteria pass
```

Rules:

1. **Plan before changing files.** Do not start substantive implementation while the controlling Issue is vague.
2. **Check off actual work.** Never bulk-check unfinished items at the end.
3. **Keep the Issue current.** Update scope, design and sequencing before continuing when they materially change.
4. **Record material discoveries.** Future agents must not depend on chat memory.
5. **Checklist completion alone is insufficient.** Verification and acceptance criteria must pass.
6. **Do not close with hidden work remaining.** Explicitly remove it from scope by founder decision or place it in a linked Stage Issue.

## Master Issue + Linked Stage Issues for large work

Large programmes and architecture changes use **one Master Issue plus clearly interlinked Stage Issues**. This works from ChatGPT Web and every DRF surface that can create/update ordinary GitHub Issues.

Create a Stage Issue when a stage:

- has its own meaningful checklist and acceptance criteria;
- is likely to need its own PR or verification cycle;
- changes a separate subsystem, architecture layer or major document set;
- depends on another stage;
- would make the Master too difficult to operate if kept inline;
- can be completed and verified as a bounded outcome.

### Naming convention

```text
Master GitHub Issue: #77
Stage 1 actual GitHub Issue: #78
Stage identifier: [77.1]
Stage title: [77.1] Lock DRF architecture, scoring hierarchy and proof semantics
```

`[77.1]` is a programme/stage identifier; the actual GitHub Issue remains `#78`.

Each Stage Issue begins with:

```text
Master issue: #77
Stage: 1 of 5
```

The Master includes a forward tracker:

```text
- [ ] [77.1] #78 — Architecture and scoring hierarchy
- [ ] [77.2] #79 — Master workflow
- [ ] [77.3] #80 — Research templates and V3 business plan
```

This creates two-way linking:

```text
Master #77 → Stage #78
Stage #78 → Master #77
```

### Master / Stage rules

1. The **Master owns founder intent, programme objective, architecture, sequence, dependencies and final acceptance**.
2. Each **Stage owns one bounded implementation/verification outcome**.
3. Every Stage links back to the Master; the Master links to every Stage.
4. Do not duplicate detailed Stage checklists in the Master.
5. Check off a Master stage only after its Stage Issue closes and is verified.
6. The Master cannot close until all linked stages and end-to-end acceptance pass.
7. New material stages require the Master to be updated first, then a two-way-linked Issue.
8. Native GitHub sub-issues are optional enhancements, never requirements.
9. The hierarchy must remain fully operable from ChatGPT Web.

## Size rule

- **Small/reversible:** one Issue with a short explicit checklist.
- **Standard:** one Issue with implementation and verification checklists.
- **Large programme/architecture:** one Master plus linked Stage Issues.

The purpose is to prevent scope loss, drift and incomplete handoffs—not to add ceremony.

---

# Shared contract and repository ontology

This file is the canonical repository-wide agent contract. Surface-specific files such as `.github/copilot-instructions.md` may bootstrap agents here but must not become competing governance.

- `businesses/` — revenue-producing ventures and commercial truth.
- `setups/` — reusable implementation/configuration packages.
- `agents/` — who acts.
- `skills/` — reusable capabilities.
- `workflows/` — multi-stage sequences.
- `software/` — shared tools/products/components.
- `research/` — substantial durable evidence.
- `technical/` — runtime, integrations, automation, infrastructure and observability.
- `knowledge/guidelines/` — policy and governing rules.
- `knowledge/sops/` — repeatable procedures.
- `knowledge/templates/` — standard structures.
- `knowledge/lessons/` — execution learnings.
- `knowledge/architecture/` — system design and rationale.
- `lab/` — experiments not yet canonical.
- `archive/` — retired history.

---

# DRF Revenue Opportunity Factory

**DRF is David's Revenue Factory.** Its job is to discover, research, compare, select, adapt, test, improve, scale and optionally package revenue-producing businesses.

Revenue Blueprint Score, P0–P6, staged capital and Blueprint certification are deeper underwriting/execution controls **inside DRF**. They do not replace business-opportunity selection.

## Canonical mental model

```text
                         DRF
                  REVENUE FACTORY
                         │
                         ▼
             BUSINESS OPPORTUNITY
                         │
        ┌────────────────┼────────────────┐
        │                │                │
 Opportunity Score    MRR / AI         Evidence
                     Autonomy          / Research
        │
        ▼
 External Market Proof
        │
        ▼
      NICHE
        │
   Niche Score
        │
        ▼
 BUSINESS × NICHE
        │
        ├── Successful comparable operators
        ├── Offer / Pricing
        ├── Go-to-Market / acquisition
        ├── Delivery architecture
        ├── Revenue Blueprint Score
        ├── Return Profile
        ├── DRF Proof Level
        ├── Stage
        ├── Capital
        ├── Risks / counter-evidence
        └── Next Proof
                 │
                 ▼
          REAL EXECUTION
                 │
        P4 → P5 → P6
                 │
                 ▼
          SCALE THE BUSINESS
                 │
                 └── Optional:
                     PACKAGE AS BLUEPRINT
```

## Three progressive layers

V1, V2 and V3 are not competing definitions. They are layers to be synthesised.

### Layer 1 — Opportunity Discovery & Structural Selection

Core question: **Do we want this kind of business?**

Required outputs:

- Business Opportunity and pain/outcome;
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

Core question: **Where, how and at what economics should it operate?**

Required outputs:

- ranked Business × Niche combinations;
- Niche Score and confidence;
- beachhead niche;
- proven-operator reverse engineering;
- offer and pricing;
- GTM/customer acquisition;
- delivery architecture;
- RBS and Return Profile;
- External Market Proof and DRF Proof shown separately;
- Stage, Capital and Next Proof.

This selects the **target and commercial design**, then underwrites it.

### Layer 3 — Structured Factory Output

Core question: **Can it be represented as one complete, comparable business case?**

The final dossier combines Layers 1 and 2 into a founder-readable mini business plan that can feed V3, guide execution and later support Blueprint packaging.

Layer 3 does not raise DRF Proof by documentation alone.

## External Market Proof vs DRF Proof

- **External Market Proof (EMP0–EMP4)** asks whether materially similar businesses already succeed. Use current operators, offers, prices, customers, ads, reviews, case studies, marketplace traction, longevity, expansion and counter-evidence.
- **DRF Proof P0–P6** asks how far **our adaptation** has progressed from capture through underwriting, backtest, current-market test, paid delivery, repeatability and scale.

A valid state is:

`External Market Proof: EMP3 Market Proven · DRF Proof: P1 Desk Underwritten`

Strong external proof supports scores, offer/pricing/GTM and P2 backtesting. It does not prove our local CAC, delivery quality, unit economics or repeatability.

## Copy before invent

For every material opportunity:

1. find multiple successful comparable operators where practical;
2. capture offer, price, recurring model, acquisition, proof and delivery;
3. capture failures, complaints, churn, margin pressure and other counter-evidence;
4. identify what transfers to DRF's niche, geography, channel and assets;
5. adapt/improve the proven pattern;
6. test only remaining DRF-specific uncertainty.

One successful operator is a signal, not a base rate. External success increases confidence; it never guarantees that every copy succeeds.

## Business Blueprint distinction

A **Business Blueprint** is an optional packaging output: a sufficiently evidenced operating system another competent operator can reproduce.

**Business Blueprints** may also be one separate DRF opportunity for selling those packages through the DRF site, Whop, Gumroad, classifieds or other compatible channels.

Do not redefine WhatsApp + CRM, Revenue Recovery, AI Voice, Assessment-as-a-Service or other businesses as “Business Blueprints” merely because they may later be packaged.

---

# Outcome-first modular commercial architecture

DRF does not define a business by the current AI model, CRM, messaging provider or automation vendor.

```text
1. Outcome — measurable result created/protected
2. Niche — exactly who has the pain and will pay
3. Customer channel — where interaction happens
4. System of record — where durable state lives
5. Agent layer — which AI/agent provides judgement/orchestration
```

Canonical deployment unit:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

Rules:

1. Sell the outcome, not the vendor.
2. Select the niche before scaling distribution.
3. Follow the customer's real channel.
4. Keep one clear system of record.
5. Keep agents/models replaceable unless the model itself is the product.
6. Keep predictable work deterministic.
7. Avoid duplicate workflow-state ownership.
8. Use the minimum viable stack.

## UAE service-business default

Unless niche evidence says otherwise:

`WhatsApp → CRM/system of record → deterministic lifecycle automation → native AI → external agent where materially useful`

HighLevel, HubSpot, Kapso, Grok Bot, ChatGPT, Claude and future systems are implementation options, not the business definition.

Canonical rationale: `knowledge/architecture/outcome-first-modular-revenue-architecture.md`.

---

# Canonical opportunity workflow

For every new opportunity, discovery candidate, portfolio refresh, business-model pivot or material revenue addition, use:

- `workflows/drf-opportunity-factory.md` — one end-to-end three-layer workflow;
- `knowledge/templates/drf-opportunity-factory-intake-prompt.md` — reusable founder prompt and Discovery/Refresh variants;
- `knowledge/guidelines/business-opportunity-scoring-framework.md` — Layer 1;
- `knowledge/guidelines/niche-attractiveness-scoring-framework.md` — niche selection;
- `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md` — RBS, DRF Proof, Stage, Capital and Return.

`workflows/revenue-blueprint-factory.md` is a compatibility pointer for older links, not a second workflow.

The canonical workflow supports:

1. **Founder Intake**;
2. **Automated Discovery**;
3. **Portfolio Refresh**.

Run Layer 1 completely. If it fails, reject/hold cheaply. If it advances, continue automatically through Layers 2 and 3 unless a real founder boundary applies.

---

# Change workflow

Use the shortest lifecycle proportional to risk.

## Simple-file fast path

For a low-risk reversible Markdown/checklist/note/README correction:

```text
Issue
→ direct file change on main
→ verify once
→ close Issue
```

Do not use this for code, Actions, automation, security/authentication, destructive changes, material architecture/governance or work where review/CI materially reduces risk.

## Standard path

```text
Issue
→ Issue-linked branch
→ focused changes/commits
→ Pull Request
→ checks/review
→ merge
→ Issue closes
```

Do not create PR ceremony for trivial work; do not bypass it for material work.

---

# Commercial operating rules

1. Resolve/create the GitHub Issue before substantive work.
2. Prefer **SELL / USE / INTEGRATE / AUTOMATE / BUILD**.
3. Research successful comparable businesses before invention.
4. Do not build infrastructure without a current commercial/operating blocker.
5. Existing warm assets/channels precede paid acquisition unless evidence says otherwise.
6. Define customer, pain, outcome, niche, channel, system of record, delivery/agent layer, success metric and stop condition.
7. Measure cash and qualified commercial movement before vanity activity.
8. Every active opportunity needs one next action.
9. Use deterministic automation for certainty; agents for judgement.
10. Keep agents, models and vendors replaceable; durable truth belongs in GitHub/files.
11. Do not duplicate GitHub Issues, Projects, Actions, PRs, Releases or history without a proven gap.
12. Feed recurring failures into `knowledge/lessons/` and improve the relevant system.
13. Installed/authorised/connected is not proof that an operation works.
14. Never commit credentials, tokens, keys, customer secrets or payment data.
15. Keep personal/customer data out of GitHub unless explicitly approved and appropriate.
16. Separate verified fact, credible estimate, inference, External Market Proof and DRF actual.
17. Never invent market proof, customer results, deployment, financial actuals or test results.

# Founder boundary

Escalate for genuine business decisions, material recurring cost, capital release, destructive changes, security/authentication changes, irreversible architecture, legal/regulatory impact, material pricing/guarantees or significant financial/reputation commitments.

Do not escalate routine research, calculations, routing, reversible implementation or conclusions already governed by the workflow.

# Folder discipline

Every first-class folder has a `README.md` explaining purpose/placement. Do not create empty ornamental structure. Add depth only when real content requires it.

# Native capability first

Before creating a custom CRM, dispatcher, dashboard, task system, agent runtime, research portal or orchestration layer, check whether an existing service or GitHub capability solves the need. Integrate at boundaries rather than dual-writing state.
