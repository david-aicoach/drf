# DRF V3 Layer 3 Write-Back Contract

**Status:** Canonical operating contract  
**Version:** 1.0  
**Date:** 1 September 2026  
**Master programme:** #77  
**Governing stage:** [77.7] #113

## Purpose

Prevent current research, niche work or execution evidence from becoming stranded behind Dashboard V3.

The canonical close-out path is:

```text
new evidence / research / operating result
→ update the most authoritative source first
→ update specialised register(s) when their fields changed
→ update the current Workflow Layer 3 dossier/CURRENT pointer when required
→ reconcile businesses/PORTFOLIO-V3.md LAST
→ or record an explicit V3 NO-FIELD-CHANGE reconciliation
→ run validation
→ only then close the Issue / merge the PR
```

Dashboard HTML is a derived view. **Never edit `index.html` to change business truth.**

---

# 1. When this contract applies

Apply it to every material change that can affect a DRF business/opportunity decision, including:

- `businesses/<opportunity>/` research, README, CURRENT, V3 business case, assessment, financial or evidence files;
- `businesses/OPPORTUNITIES.md`;
- `businesses/NICHES.md`;
- `businesses/INVESTMENT-READINESS.md` while it remains a supporting migration register;
- `research/niches/` evidence that changes a current Business × Niche conclusion;
- live DRF execution evidence affecting EMP, DRF Proof, Stage, Capital, Return or Next Proof;
- material offer, price, GTM, delivery, economics or provider changes;
- portfolio refreshes and qualified discovery candidates.

Generic cross-portfolio research does not require 27 artificial row edits. It requires a V3 reconciliation decision only when it materially changes one or more parent fields.

---

# 2. Source-first write order

Use the V3 data-contract precedence:

```text
live operating evidence / test record
→ CURRENT.md pointer
→ current opportunity dossier
→ specialised canonical register
→ PORTFOLIO-V3.md joined summary
→ Dashboard V3
```

Never reverse this order merely because the dashboard is easier to edit.

## Specialised registers

Update only when their field family changed:

- `OPPORTUNITIES.md` — Layer 1 structural metrics/decision;
- `NICHES.md` — ranked Business × Niche rows;
- `INVESTMENT-READINESS.md` — supporting RBS/proof/capital migration fields where still applicable;
- current V3 dossier — offer, price, GTM, delivery, RBS, Return, EMP, DRF Proof, Stage, Capital, Next Proof and readiness.

---

# 3. Mandatory V3 reconciliation decision

Every in-scope change must end in exactly one of two states.

## A. V3 FIELDS CHANGED

Update `businesses/PORTFOLIO-V3.md` last.

Only change fields justified by the new authoritative evidence. Do not change a score merely because more sources were found.

Examples:

- new verified price changes `Price / Commercial Model`;
- live payment raises DRF Proof from P3 to P4;
- a stronger niche becomes the current recommended niche;
- new evidence changes RBS, Stage, Capital or Next Proof;
- a current dossier replaces a Pending field with a defensible value.

## B. V3 NO-FIELD-CHANGE

When the research was material but no parent founder field should change, do **not** manufacture a no-op edit to `PORTFOLIO-V3.md`.

Record the reconciliation in:

`businesses/V3-RECONCILIATIONS.md`

The record must state:

- date;
- governing Issue/PR or run ID;
- opportunity or cross-portfolio scope;
- authoritative source(s) changed;
- V3 fields reviewed;
- decision: `NO FIELD CHANGE`;
- why no field changed;
- next proof/current boundary.

Examples:

- a delivery channel becomes better documented but the platform-neutral parent score/RBS/Stage remains unchanged;
- general inference costs improve across the market but do not materially alter any opportunity score;
- additional sources increase confidence in an already-current conclusion without changing the parent decision field.

---

# 4. Workflow Layer 3 completion rule

Workflow Layer 3 is complete only when all of the following are true for the current stage:

1. the founder-readable dossier/current source is internally consistent;
2. specialised registers agree with the current source;
3. V3 record fields have been reviewed against the new evidence;
4. `PORTFOLIO-V3.md` was updated **or** `V3-RECONCILIATIONS.md` records `NO FIELD CHANGE`;
5. missing values remain Pending/Unknown/Not applicable rather than false zero;
6. DRF Proof reflects actual DRF execution only;
7. the next proof/action remains explicit;
8. repository/dashboard validation passes.

**Do not close a material research/update Issue before this Layer 3 close-out is complete.**

---

# 5. Agent operating rule

All DRF agents — ChatGPT Web/Desktop/Mobile, GitHub-native agents, scheduled research agents and future automation — use the same write-back contract.

A different agent/runtime does not create a different source-of-truth path.

Required final run summary:

```text
V3 RECONCILIATION
Source(s) changed: ...
Specialised registers changed: ... / none
Layer 3 dossier changed: ... / none
PORTFOLIO-V3: UPDATED / NO FIELD CHANGE
Reconciliation log: path / not required because portfolio updated
Evidence freshness reviewed: yes/no
Next Proof reviewed: yes/no
Validation: pass/fail
```

---

# 6. Legacy workflow rule

`workflows/revenue-blueprint-factory.md` is a compatibility pointer only.

The only canonical end-to-end workflow is:

`workflows/drf-opportunity-factory.md`

RBS, P0–P6, Stage, Capital and Blueprint packaging remain valid subordinate controls inside the DRF Opportunity Factory. They are not a second workflow.

---

# 7. Verification

The repository CI includes a V3 write-back guard for material business/niche changes.

A qualifying change must include at least one of:

- `businesses/PORTFOLIO-V3.md`; or
- `businesses/V3-RECONCILIATIONS.md`.

The guard is intentionally a close-out control, not a scoring engine. It does not decide whether a field should change; the evidence and canonical workflow do.

## Final outcome

Every material DRF research or execution update reaches a deliberate Layer 3/V3 conclusion before closure, keeping the current founder dashboard aligned without forcing false score movement.