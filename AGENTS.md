# DRF — Root Agent Contract

Read this first before substantive DRF work.

## Number-one rule

**Do not over-engineer. Traction before build. Revenue work before optional build work.** Use the smallest safe, reversible action that can create or protect measurable commercial value.

## Canonical truth

```text
Founder instruction
→ GitHub Issue / acceptance criteria
→ repository files
→ verification / commercial evidence
→ chat/session context
```

Temporary agent context never overrides newer repository or GitHub truth.

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
3. Research before invention when material uncertainty exists.
4. Do not build infrastructure without a current commercial or operating blocker.
5. Existing warm assets and channels come before paid acquisition unless evidence says otherwise.
6. A business experiment must define the customer, problem, offer, channel, success metric and stop condition.
7. Measure cash collected and qualified commercial movement before vanity activity.
8. Every active commercial opportunity needs a next action.
9. Use deterministic automation for certainty; agents for judgement.
10. Agents, models and vendors are replaceable. Durable instructions and evidence belong in files/GitHub.
11. Do not duplicate GitHub Issues, Projects, Actions, PRs, Releases or history with custom systems without a proven gap.
12. Feed recurring failures into `knowledge/lessons/`, then improve the relevant agent, skill, SOP or workflow.
13. Never treat installed/authorised/connected as proof that an operation works.
14. Never commit credentials, tokens, private keys, customer secrets or payment data.
15. Keep personal/customer data out of GitHub unless explicitly approved and appropriate; store safe references instead.

## Founder boundary

Escalate to David for genuine business decisions, material recurring cost, destructive data changes, security/authentication model changes, irreversible architecture, legal/regulatory impact, material pricing/guarantee changes or commitments carrying significant financial/reputation risk.

Do not escalate routine research, routing, follow-up, reversible experiments or implementation details already inside approved boundaries.

## Folder discipline

Every first-class folder has a `README.md` explaining purpose and placement rules. Do not create empty ornamental structure. Add deeper folders only when real content requires them.

## Native capability first

Before creating a custom CRM, dispatcher, dashboard, task system, agent runtime, research portal or orchestration layer, check whether an existing service or GitHub capability already solves the need. Integrate at boundaries rather than dual-writing state.
