# DRF — Root Agent Contract

Read this first before substantive DRF work.

## Number-one rule

**Do not over-engineer. Traction before build. Revenue work before optional build work.** Use the smallest safe, reversible action that can create or protect measurable commercial value.

**Speak sales language.** In DRF business/revenue work, lead with what is sold, who pays, how much or on what basis, and label each revenue stream plainly as an upfront sale, recurring fee, royalty, commission, usage fee, licence or optional upsell before using platform, analyst or technical terminology.

**Never collapse a business decision into one score.** Preserve the complete decision stack:

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence Confidence + Research Completeness
→ ranked Niche options + Niche Score
→ selected Business × Niche
→ External Market Proof
→ Revenue Blueprint Score
→ DRF Proof Level + Stage
→ Capital + Return Profile + Next Proof
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

## Mandatory issue planning and execution protocol

**Checklist first. Execution second.** Every substantive DRF task must be planned in the GitHub Issue before implementation begins. The Issue is the live execution control plane, not a short placeholder note.

### Required issue structure

Before substantive work starts, the agent must ensure the controlling Issue contains enough context that another fresh agent can continue the work without relying on chat history. At minimum include:

- **Objective** — the outcome to achieve.
- **Why / context** — the founder intent, problem, constraints and important decisions already made.
- **Scope** — what is included and explicitly excluded.
- **Implementation checklist** — the actual work items the agent plans to perform.
- **Verification checklist** — how each material output will be checked.
- **Final outcome / acceptance criteria** — what must be true before the Issue can close.
- **Dependencies / sequence** — only when ordering materially matters.

Do not reduce a multi-page founder instruction to a few summary lines if omitted detail could change implementation.

### Live checklist rule

The implementation checklist is also the execution checklist.

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

1. **Plan before changing files.** For substantive work, do not start implementation while the controlling Issue is still vague.
2. **Check off work as it is actually completed.** Do not bulk-check unfinished items at the end.
3. **Keep the Issue current.** If scope, design or sequencing materially changes, update the checklist before continuing.
4. **Record material discoveries.** Add newly discovered requirements, blockers or decisions to the Issue so future agents do not depend on chat memory.
5. **Checklist completion is not enough by itself.** Final acceptance criteria and verification must also pass.
6. **Do not close with hidden work remaining.** Deferred work must be explicitly removed from scope by founder decision or moved into a linked stage Issue.

### Master Issue + Linked Stage Issues for large work

Large programmes and architecture changes must use **one Master Issue plus clearly interlinked Stage Issues**. This is the default because it works from ChatGPT Web and other DRF operating surfaces that can create and update ordinary GitHub Issues even when native GitHub sub-issue mutations are unavailable.

Create a separate Stage Issue when a stage is materially independent, for example when it:

- has its own meaningful implementation checklist and acceptance criteria;
- is likely to require its own PR or verification cycle;
- changes a separate subsystem, workflow, architecture layer or major document set;
- depends on completion of another stage;
- is large enough that keeping all implementation detail in the Master Issue would make the Master difficult to operate;
- can be completed and verified as a bounded outcome before the next stage begins.

#### Master / Stage naming convention

Use a stable, searchable programme prefix:

```text
Master GitHub Issue: #77
Stage 1 actual GitHub Issue: #78
Stage 1 display prefix: [77.1]
Stage 1 title: [77.1] Lock DRF architecture, scoring hierarchy and proof semantics
```

The prefix `[77.1]` is a **programme/stage identifier**, not a GitHub Issue number. The actual GitHub Issue remains `#78`.

Each Stage Issue must begin with:

```text
Master issue: #77
Stage: 1 of 5
```

The Master Issue must contain a stage tracker that links forward to the actual Stage Issues, for example:

```text
- [ ] [77.1] #78 — Architecture and scoring hierarchy
- [ ] [77.2] #79 — Master workflow
- [ ] [77.3] #80 — Research templates and V3 business plan
```

This creates a deliberate two-way link:

```text
Master #77 → Stage #78
Stage #78 → Master #77
```

#### Master / Stage rules

1. The **Master Issue owns the overall founder intent, programme objective, architecture, stage order, dependencies and final end-to-end acceptance criteria**.
2. Each **Stage Issue owns one bounded stage** with its own implementation checklist, verification checklist and final outcome.
3. Every Stage Issue must explicitly link back to the Master Issue in its opening lines.
4. The Master Issue must explicitly link to every required Stage Issue in its live stage tracker.
5. Do not duplicate the detailed Stage checklist in the Master; the Master tracks the stage outcome while the Stage Issue tracks the work.
6. Check off a Master stage only after its linked Stage Issue is closed and the stage output is verified.
7. The Master Issue cannot close until every required linked Stage Issue is complete and the Master-level end-to-end acceptance criteria pass.
8. If a Stage Issue discovers additional work large enough to become its own stage, update the Master first, then create and two-way-link the new Stage Issue.
9. Native GitHub sub-issues may be used as an optional enhancement when the current surface supports them, but they are never required and must not be a dependency for normal DRF execution.
10. The Issue hierarchy must remain fully operable from ChatGPT Web using standard GitHub Issue create/read/update operations.

### Size rule

Use proportional planning:

- **Small/reversible task:** one Issue with a short but explicit checklist.
- **Standard task:** one Issue with a complete implementation + verification checklist.
- **Large programme / architecture change:** one Master Issue plus linked Stage Issues for major stages.

The purpose is not bureaucracy. The purpose is to prevent scope loss, architectural drift and incomplete handoffs while remaining operable from the tools agents actually have.

## Shared contract

This file is the canonical repository-wide agent contract. Surface-specific files such as `.github/copilot-instructions.md` bootstrap executors into this contract but must not become competing governance.

## Repository ontology

- `businesses/` — revenue-producing ventures and their commercial truth.
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
- `knowledge/lessons/` — proven learnings from execution.
- `knowledge/architecture/` — system design and rationale.
- `lab/` — experiments not yet canonical.
- `archive/` — retired history.

## DRF Revenue Opportunity Factory

**DRF is David's Revenue Factory.** Its job is to discover, research, compare, select, adapt, test, improve, scale and optionally package revenue-producing businesses.

The Revenue Blueprint Score, P0–P6 progression, investment stages and Blueprint certification are deeper underwriting and execution controls **inside DRF**. They are not the identity of DRF and they do not replace the original business-opportunity selection layer.

### Canonical mental model

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
      NICHE
        │
   Niche Score
        │
        ▼
 BUSINESS × NICHE
        │
        ├── Successful comparable operators
        ├── External Market Proof
        ├── Offer / Pricing
        ├── Go-to-Market / acquisition
        ├── Delivery architecture
        ├── Revenue Blueprint Score
        ├── DRF Proof Level
        ├── Stage
        ├── Capital
        ├── Economics / Return Profile
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

### Three progressive layers

V1, V2 and V3 are not competing definitions of DRF. They represent three progressive layers that must be synthesised.

#### Layer 1 — Opportunity Discovery & Structural Selection

Core question: **Do we want this kind of business?**

Required first-class outputs:

- Business Opportunity and pain/outcome;
- Opportunity Score /100;
- MRR / recurring-revenue quality /10;
- AI Autonomy /100;
- Evidence Confidence /100%;
- Research Completeness /100%;
- Execution Velocity where sequencing matters;
- External Market Proof;
- Reject / Hold / Advance decision.

This layer selects the **business/service/outcome vehicle**. It must never be discarded as obsolete merely because deeper underwriting exists.

#### Layer 2 — Niche Selection & Commercial Underwriting

Core question: **Where, how and at what economics should this business be launched?**

Required outputs:

- ranked outcome/product × niche combinations;
- Niche Score and Niche Evidence Confidence;
- recommended beachhead niche;
- proven-operator reverse engineering;
- recommended offer and pricing;
- GTM and customer-acquisition plan;
- delivery architecture;
- Revenue Blueprint Score;
- External Market Proof and DRF Proof shown separately;
- Stage, Capital, Return Profile and Next Proof.

This layer selects the **target and commercial design**, then underwrites the selected Business × Niche.

#### Layer 3 — Structured Factory Output

Core question: **Can the opportunity now be represented as one complete, comparable business case?**

The final dossier must combine Layer 1 and Layer 2 into a founder-readable mini business plan that can feed the V3 comparison table, guide execution and later support Blueprint packaging.

Layer 3 does not magically raise DRF Proof. It reports the current proof honestly and updates as real execution progresses.

### External Market Proof vs DRF Proof

These are separate and must never be confused.

- **External Market Proof** asks whether materially similar businesses already succeed in the real market. It uses live operators, offers, pricing, customers, ads, reviews, case studies, marketplace traction, longevity, expansion and counter-evidence.
- **DRF Proof Level P0–P6** asks how far **our selected adaptation** has progressed from capture through underwriting, backtest, current-market test, paid delivery, repeatability and scale.

A valid state is:

`External Market Proof: Strong · DRF Proof: P1 Desk Underwritten`

Strong external proof can support a high Opportunity Score, inform the Niche Score, price, offer, GTM and backtest, and reduce the uncertainties DRF must test. It cannot prove our exact local acquisition cost, delivery quality, unit economics or repeatability.

### Copy before invent

DRF prefers proven business models over unnecessary invention.

For every material opportunity:

1. find successful comparable operators where they exist;
2. capture their exact offer, price, recurring model, acquisition approach, proof and delivery pattern;
3. capture failures, weak reviews, churn, margin pressure and other counter-evidence;
4. identify what transfers to the selected niche, geography, channel and DRF assets;
5. adapt and improve the proven pattern rather than starting from a blank page;
6. test only the remaining uncertainties specific to DRF's implementation.

One successful operator is a signal, not a base rate. Prefer multiple independent operators and current evidence. External success increases confidence; it does not guarantee that every copy will succeed.

### Business Blueprint distinction

A **Business Blueprint** is an optional packaging output: a sufficiently evidenced business system documented so another competent operator can reproduce it.

**Business Blueprints** may also exist as one separate DRF business opportunity that packages and sells proven systems through compatible channels such as the DRF-owned site, Whop, Gumroad, classifieds or specialist marketplaces.

Do not redefine every DRF opportunity as “Business Blueprints”. WhatsApp + CRM, Revenue Recovery, AI Voice, Assessment-as-a-Service and other services remain distinct business opportunities even when they may later be packaged as Blueprints.

## Outcome-first modular commercial architecture

DRF does **not** define a business by the current AI model, CRM, messaging provider or automation vendor.

Use this hierarchy:

```text
1. Outcome — what measurable business result is created or protected?
2. Niche — exactly who has the pain and will pay?
3. Customer channel — where does the customer/prospect interaction actually happen?
4. System of record — where does durable business state live?
5. Agent layer — which AI/agent performs judgement, orchestration or autonomous work?
```

The canonical commercial deployment unit is:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

Examples of components include WhatsApp, email or voice as channels; HighLevel or HubSpot as systems of record; and Grok Bot, ChatGPT, Claude or future agents as replaceable operating layers.

### Architecture rules

1. **Outcome first.** Sell recovered revenue, faster quotes, booked appointments, better conversion, lower leakage or another measurable result — not a vendor name.
2. **Niche second.** Narrow to a specific vertical, sub-niche, geography, ICP and trigger/problem before scaling distribution.
3. **Channel follows market reality.** Use the channel customers already rely on rather than forcing a preferred stack.
4. **System of record owns durable state.** Contacts, opportunities, lifecycle state, consent, attribution and other operational truth must have one clear canonical home.
5. **Agents are replaceable.** Select the agent/model that best performs the job. Do not make the commercial product dependent on one model unless the model itself is the product.
6. **Deterministic work stays deterministic.** Use APIs, workflows, scripts and native automation for predictable steps; use agents for judgement, research, exceptions and orchestration.
7. **Avoid duplicate ownership.** Do not let two platforms simultaneously own the same workflow state without a deliberate reason and reconciliation rule.
8. **Prefer the minimum viable stack.** Add another vendor only when it creates measurable reliability, capability, portability, speed or economic advantage.

### UAE service-business default

For UAE service-business opportunities, treat **WhatsApp as the default first-class customer channel unless evidence for the niche says otherwise**.

Use this default decision sequence:

```text
WhatsApp/customer channel
→ CRM/system of record
→ deterministic lifecycle automation
→ native AI where sufficient
→ external agent only where it adds material value
```

HighLevel, Kapso, HubSpot, Grok Bot, ChatGPT, Claude and future platforms are implementation options inside this architecture, not the business definition.

Canonical rationale: `knowledge/architecture/outcome-first-modular-revenue-architecture.md`.

## Canonical opportunity workflow

[77.2] #79 establishes one canonical end-to-end DRF Opportunity Factory workflow covering all three layers.

Until that workflow is merged, `workflows/revenue-blueprint-factory.md` is only the current underwriting/proof progression for RBS, backtesting, P0–P6, capital and Blueprint certification. Do not treat it as the complete DRF opportunity-discovery and selection workflow.

The governing scoring files are:

- `knowledge/guidelines/business-opportunity-scoring-framework.md` — Layer 1 business selection;
- `knowledge/guidelines/niche-attractiveness-scoring-framework.md` — Layer 2 target-market selection;
- `knowledge/guidelines/revenue-blueprint-scoring-and-investment-readiness.md` — Layer 2 Business × Niche underwriting, DRF proof and capital discipline.

## Change workflow

Use the shortest lifecycle proportional to risk.

### Simple-file fast path

For a low-risk, easily reversible change such as a Markdown checklist, note, research file, README correction, small documentation update or similar non-runtime file change:

```text
Issue
→ direct file change on main
→ verify once
→ close Issue
```

No branch or Pull Request is required.

Do **not** use this fast path for code, workflows, GitHub Actions, automation, security/authentication, secrets, runtime/configuration changes, destructive changes, architecture/governance changes with material effect, or anything where review/CI materially reduces risk.

### Standard path

For substantive or higher-risk repository changes:

```text
Issue
→ issue-linked branch
→ focused changes + commits
→ Pull Request
→ checks / review
→ merge
→ Issue closes
```

When uncertain, choose the standard path. Do not create branches/PRs for trivial file work merely for ceremony.

## Commercial operating rules

1. Resolve/create the GitHub Issue before durable substantive work.
2. Prefer **SELL / USE / INTEGRATE / AUTOMATE / BUILD**, in that order when practical.
3. Research successful comparable businesses before invention when material uncertainty exists.
4. Do not build infrastructure without a current commercial or operating blocker.
5. Existing warm assets and channels come before paid acquisition unless evidence says otherwise.
6. A business experiment must define the customer, problem, measurable outcome/offer, niche, customer channel, system of record, agent/delivery layer where relevant, success metric and stop condition.
7. Measure cash collected and qualified commercial movement before vanity activity.
8. Every active commercial opportunity needs a next action.
9. Use deterministic automation for certainty; agents for judgement.
10. Agents, models and vendors are replaceable. Durable instructions and evidence belong in files/GitHub.
11. Do not duplicate GitHub Issues, Projects, Actions, PRs, Releases or history with custom systems without a proven gap.
12. Feed recurring failures into `knowledge/lessons/`, then improve the relevant agent, skill, SOP or workflow.
13. Never treat installed/authorised/connected as proof that an operation works.
14. Never commit credentials, tokens, private keys, customer secrets or payment data.
15. Keep personal/customer data out of GitHub unless explicitly approved and appropriate; store safe references instead.
16. Separate observed facts, external market evidence, estimates, inference and DRF actuals.
17. Never invent market proof, customer results, deployment evidence, financial actuals or verification.

## Founder boundary

Escalate to David for genuine business decisions, material recurring cost, destructive data changes, security/authentication model changes, irreversible architecture, legal/regulatory impact, material pricing/guarantee changes or commitments carrying significant financial/reputation risk.

Do not escalate routine research, routing, follow-up, reversible experiments or implementation details already inside approved boundaries.

## Folder discipline

Every first-class folder has a `README.md` explaining purpose and placement rules. Do not create empty ornamental structure. Add deeper folders only when real content requires them.

## Native capability first

Before creating a custom CRM, dispatcher, dashboard, task system, agent runtime, research portal or orchestration layer, check whether an existing service or GitHub capability already solves the need. Integrate at boundaries rather than dual-writing state.
