# DRF Portfolio Refresh Record

**Status:** Canonical template  
**Version:** 1.0  
**Governing stage:** [77.5] #82  
**Owning Skill:** `skills/drf-recurring-intelligence/SKILL.md`  
**Configuration:** `DRF-INTELLIGENCE-CONFIG-1.0`

Use this record for a scheduled or event-triggered refresh of an existing parent opportunity. Read current canonical truth before searching. Preserve prior values and DRF Proof.

---

# Run identity

**Run ID:** `<REFR/EVNT-YYYYMMDD-HHMMSSZ-key>`  
**Opportunity ID:** `<stable folder slug>`  
**Idempotency key:** `<key>`  
**Trigger:** `<scheduled / event / founder instruction / new DRF actual / conflict>`  
**Started:** `<UTC timestamp>`  
**Evidence cutoff:** `<UTC timestamp>`  
**Configuration version:** `<version>`  
**Status:** `<PLANNED / RUNNING / PARTIAL / COMPLETED / FAILED / SUPERSEDED>`

---

# 1. Current canonical baseline

**Current pointer:** `<CURRENT.md or None>`  
**Current dossier:** `<path>`  
**V3 portfolio row:** `<rank/name>`  
**Relevant niche rows:** `<paths/rows>`  
**Current DRF evidence path:** `<path>`  
**Last successful refresh:** `<date/run ID>`

## Baseline values

| Field | Before value | Source/path | Evidence date |
|---|---|---|---|
| Opportunity Score | | | |
| MRR | | | |
| AI Autonomy | | | |
| Evidence Confidence | | | |
| Research Completeness | | | |
| EMP / confidence | | | |
| Best Niche / score / confidence | | | |
| Offer / price | | | |
| GTM | | | |
| Delivery architecture | | | |
| RBS | | | |
| DRF Proof | | | |
| Stage / Capital | | | |
| Return headline | | | |
| Next Proof | | | |
| Evidence freshness | | | |

---

# 2. Refresh scope

Check only the field families affected by the trigger or due cadence.

- [ ] Successful operators / closures / category evidence
- [ ] Market size / growth / timing
- [ ] Offers / prices / recurring structures
- [ ] Customer demand / reviews / case studies
- [ ] Advertising / funnels / acquisition channels / CAC
- [ ] Niche evidence / rank / reachability / customer economics
- [ ] Delivery platforms / APIs / AI capability / quotas / cost
- [ ] Support burden / reliability / human recovery
- [ ] Legal / regulatory / privacy / data rights / platform policy
- [ ] DRF payments / delivery / customer outcomes / cost / churn
- [ ] Financial model / Return Profile
- [ ] Current paths / register consistency
- [ ] Public/private disclosure status

**Why this scope is proportionate:** `<reason>`

---

# 3. New evidence

## Positive evidence

| Finding | Field affected | Source/date | Evidence label/class | Strength | Limitation |
|---|---|---|---|---|---|
| | | | | | |

## Negative/counter-evidence

| Finding | Field affected | Source/date | Evidence label/class | Strength | Limitation |
|---|---|---|---|---|---|
| | | | | | |

## Source failures or gaps

| Source/check | Failure/gap | Impact on conclusion | Retry/alternative |
|---|---|---|---|
| | | | |

---

# 4. Materiality test

A change is material if it may alter a score by at least 2 points, an EMP/P-level/Stage, best niche, offer, price, GTM, delivery architecture, capital/return, Next Proof, legal viability or public disclosure.

| Evidence change | Material? | Why | Affected fields |
|---|---|---|---|
| | | | |

**Overall material change:** `<Yes / No / Conflict / Partial>`

---

# 5. Recalculation and decision changes

Update only affected values.

| Field | Before | After | Change | Evidence/reason | Source updated first? |
|---|---|---|---|---|---|
| | | | | | |

## Proof integrity

**DRF Proof before:** `<P-level>`  
**DRF Proof after:** `<same/new level>`  
**Evidence permitting change:** `<DRF actual only for P3–P6>`  
**EMP change:** `<if any>`  
**Why EMP did not automatically change DRF Proof:** `<statement>`

Never reset DRF Proof because a desk report was refreshed. Never award P3–P6 from external evidence.

---

# 6. Refresh outcome

Choose one:

- [ ] UNCHANGED
- [ ] STRONGER
- [ ] WEAKER
- [ ] REPOSITION
- [ ] OBSOLETE
- [ ] CONFLICT
- [ ] PROOF ADVANCED
- [ ] PROOF REGRESSED

**Outcome:** `<label>`  
**Founder read:** `<one paragraph>`  
**One next action:** `<single bounded action>`  
**Stop/reconsideration condition:** `<exact>`  
**Founder approval required:** `<No / exact decision>`

---

# 7. Canonical write sequence

Record actual writes in order.

| Order | Path | Change | Verified |
|---:|---|---|---|
| 1 | Detailed evidence/current dossier | | |
| 2 | `businesses/OPPORTUNITIES.md` if Layer 1 changed | | |
| 3 | `businesses/NICHES.md` if niche evidence changed | | |
| 4 | `businesses/INVESTMENT-READINESS.md` if RBS/Proof/Stage/Capital changed | | |
| 5 | `businesses/PORTFOLIO-V3.md` reconciliation | | |
| 6 | Dashboard derived view | No business-truth write | |

If the run is Partial/Failed, do not publish final decision changes. Preserve the last successful values.

---

# 8. Public/private review

| Field/evidence | Public-safe? | Reason / permission / restriction |
|---|---|---|
| | | |

**Public claim changed:** `<No / details>`  
**Paid/private Blueprint material affected:** `<No / details>`

No new public claim is published by this refresh without the required approval.

---

# 9. Completion summary

**Sources attempted:** `<count>`  
**Sources succeeded:** `<count>`  
**Sources failed:** `<count>`  
**Fields reviewed:** `<list>`  
**Fields changed:** `<list/None>`  
**Files changed:** `<paths>`  
**Last successful refresh now:** `<date/run ID>`  
**Next scheduled refresh:** `<date/cadence>`  
**Immediate event triggers retained:** `<list>`

---

# Verification

- [ ] Current dossier/registers were read before research.
- [ ] Trigger and proportionate scope are explicit.
- [ ] Positive and negative evidence were checked.
- [ ] Source failures did not become negative conclusions.
- [ ] Only material affected fields changed.
- [ ] Before/after values and reasons are preserved.
- [ ] EMP and DRF Proof remain separate.
- [ ] DRF Proof changed only from qualifying DRF evidence.
- [ ] Detailed source files were written before aggregates.
- [ ] `PORTFOLIO-V3.md` was reconciled last.
- [ ] Missing values remain honest.
- [ ] No approval-boundary action was executed.
- [ ] The run was recorded in `research/recurring-intelligence/REFRESH-RUNS.md`.
