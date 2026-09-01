# DRF — Root Agent Contract

Read this first before substantive DRF work.

## NUMBER-ONE RULE — SKILLS FIRST

**Reusable AI work in DRF is operated through Skills.**

Before substantive capability work:

1. read [`skills/README.md`](skills/README.md);
2. identify the single best owning Skill;
3. read that `skills/<skill-name>/SKILL.md` before acting;
4. load only the Skill references/scripts/assets needed for the task;
5. improve the owning Skill when a repeatable process changes.

Do **not** create loose global templates, AI workflows, SOPs, lessons, guidelines, prompt libraries or miscellaneous knowledge folders. If behaviour belongs to an existing capability, update that Skill. Create a new Skill only for a genuinely distinct reusable capability.

### Canonical Skill router

| Need | Skill |
|---|---|
| New business opportunity, Revenue Factory intake, market intelligence A–Z, scoring, niches, offer/pricing/GTM, underwriting, Layer 3/V3 close-out | [`skills/drf-opportunity-factory/SKILL.md`](skills/drf-opportunity-factory/SKILL.md) |
| Golden Opportunity discovery, daily portfolio calibration, scheduled refresh, specialist recurring intelligence, ChatGPT Web automation behaviour | [`skills/drf-recurring-intelligence/SKILL.md`](skills/drf-recurring-intelligence/SKILL.md) |
| Dashboard V3 changes, data-contract maintenance, website troubleshooting, KPI/table/join work, Pages verification | [`skills/drf-dashboard-operations/SKILL.md`](skills/drf-dashboard-operations/SKILL.md) |
| Repository architecture, Skill maintenance, cleanup, CI/governance, structural migration | [`skills/drf-repository-operations/SKILL.md`](skills/drf-repository-operations/SKILL.md) |

Natural language is enough. A founder may simply say:

> **“Here is a new business opportunity. Use the DRF Opportunity Factory Skill and complete the market intelligence A–Z.”**

The agent must discover the Skill from this repository; the founder is not expected to know hidden file paths or prompts.

---

## DRF identity

**DRF is David's Revenue Factory.** Its job is to discover, research, compare, select, adapt, test, improve, scale and optionally package revenue-producing businesses.

Commercial priority:

> **Traction before build. Revenue work before optional build work.**

Speak sales language first: what is sold, who pays, how much/on what basis, and whether revenue is upfront, recurring, usage, commission, licence, royalty or upsell.

Never collapse a business decision into one score. Preserve:

```text
Business Opportunity
→ Opportunity Score + MRR + AI Autonomy + Evidence + Research
→ External Market Proof
→ ranked Niche options + Niche Score
→ selected Business × Niche
→ offer + pricing + GTM + delivery
→ RBS + Return Profile
→ DRF Proof + Stage + Capital + Next Proof
→ Workflow Layer 3 business case
→ V3 reconciliation
→ Dashboard V3
```

Detailed opportunity logic belongs in the Opportunity Factory Skill, not here.

---

## Canonical truth

```text
Founder instruction
→ GitHub Issue / acceptance criteria
→ repository files
→ verified commercial/operating evidence
→ chat/session context
```

Temporary agent context never overrides newer repository/GitHub truth.

Business truth flows:

```text
live evidence
→ CURRENT.md / current dossier
→ specialised registers
→ businesses/PORTFOLIO-V3.md
→ Dashboard V3
```

The dashboard is derived. **Never edit `index.html` to manufacture business truth.**

---

## Repository ownership

Keep the top level simple:

- `skills/` — primary reusable AI operating surface.
- `businesses/` — canonical business/opportunity truth.
- `research/` — durable observed evidence and run history.
- `software/` — actual product/runtime code and product-local tests.
- `assets/`, `index.html`, `dashboard-v1-v2.html` — deployed Dashboard product.
- `.github/` — GitHub-required configuration and Actions.

`.github/workflows/` is a GitHub platform requirement; it is **not** a global DRF AI workflow library.

Root `AGENTS.md` is universal governance + Skill routing only. Detailed reusable procedures belong in Skills.

---

## GitHub object creation gate

Never use a durable GitHub object as a probe, scratchpad, placeholder or number reservation.

Before creating an Issue, branch, PR, file, release or similar object:

1. determine its durable purpose;
2. search for an existing equivalent where applicable;
3. prepare meaningful final-purpose content;
4. create only the real object needed.

Legitimate governed test work and intentional draft PRs are allowed. Sacrificial objects are not.

---

## Issue-first execution

**Checklist first. Execution second.** Every substantive DRF task is controlled by a GitHub Issue before implementation.

The Issue must preserve enough context for a fresh agent to continue without chat:

- objective;
- founder intent / why;
- scope and exclusions;
- implementation checklist;
- verification checklist;
- acceptance criteria;
- dependencies/sequence where material.

Execution loop:

```text
Founder instruction
→ create/repair Issue
→ execute bounded item
→ verify
→ check off
→ continue
→ final verification
→ close only when acceptance passes
```

### Master + Stage

Large programmes use one Master Issue plus linked Stage Issues.

- Master owns founder intent, architecture, sequence and final acceptance.
- Stage owns one bounded implementation/verification outcome.
- Link both directions.
- Check off a Master stage only after the Stage closes verified.
- Master cannot close until all stages and end-to-end acceptance pass.
- Native GitHub sub-issues are optional; ordinary linked Issues must remain sufficient from ChatGPT Web.

---

## Mandatory opportunity/V3 close-out

For every material opportunity, niche, commercial-model, evidence or execution update, use the **DRF Opportunity Factory Skill** and its V3 write-back reference.

A material research Issue is not complete when only a research file changed.

Required outcome:

```text
new evidence/result
→ authoritative source first
→ affected specialised registers
→ current Layer 3 dossier/CURRENT where required
→ V3 founder-field review
→ exactly one:
   A. founder fields changed → businesses/PORTFOLIO-V3.md LAST
   B. no founder field changed → businesses/V3-RECONCILIATIONS.md
→ validation
→ only then close/merge
```

Rules:

- Do not leave Dashboard V3 stale.
- Do not manufacture a score/freshness edit merely to touch V3.
- EMP and DRF Proof remain separate.
- Documentation completeness never raises DRF Proof.
- `Pending` never becomes numerical zero.

CI enforces material opportunity/niche write-back.

---

## Change path

Use the shortest safe lifecycle proportional to risk.

**Simple-file fast path:** only for a low-risk reversible factual Markdown/checklist correction that does not materially alter opportunity/niche evidence, scores, commercial design, proof, Stage, Capital, Return or V3.

```text
Issue → direct file change on main → verify → close
```

**Standard path:** code, Actions, automation, Skills, architecture/governance, security and all material opportunity/niche changes.

```text
Issue → issue-linked branch → focused changes → PR → checks/review → merge → verify
```

---

## Universal commercial and evidence rules

1. Prefer **SELL / USE / INTEGRATE / AUTOMATE / BUILD**.
2. Research successful comparable businesses before invention.
3. Do not build infrastructure without a current commercial/operating blocker.
4. Existing warm assets/channels precede paid acquisition unless evidence says otherwise.
5. Every active opportunity needs one Next Proof/action.
6. Use deterministic automation for certainty; agents for judgement.
7. Keep models/vendors replaceable unless the model/vendor is the product.
8. Separate verified fact, credible estimate, inference, External Market Proof and DRF actual.
9. Never invent market proof, customer results, deployment, revenue, financial actuals or test results.
10. Installed/authorised/connected is not proof that an operation works.
11. Never commit credentials, tokens, keys, customer secrets, payment data or unapproved personal data.
12. Repeated operating lessons must improve the owning Skill instead of spawning parallel instruction files.

---

## Founder boundary

Escalate for genuine business decisions, material recurring cost/capital release, destructive changes, security/authentication changes, irreversible architecture, legal/regulatory impact, material pricing/guarantees or significant financial/reputation commitments.

Do not escalate routine research, calculations, Skill routing, reversible implementation or conclusions already governed by the owning Skill.
