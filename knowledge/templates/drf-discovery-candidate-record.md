# DRF Discovery Candidate Record

**Status:** Canonical template  
**Version:** 1.0  
**Governing stage:** [77.5] #82  
**Loop:** `workflows/drf-recurring-intelligence-loops.md`  
**Configuration:** `DRF-INTELLIGENCE-CONFIG-1.0`

Use one record for a credible discovery candidate that requires more than a one-line rejection-log entry. Do not create a parent business folder until the candidate advances.

---

# Run identity

**Run ID:** `<DISC-YYYYMMDD-HHMMSSZ-key>`  
**Candidate ID:** `<DISC-CAND-YYYYMMDD-slug>`  
**Idempotency key:** `<hash/key>`  
**Started:** `<UTC timestamp>`  
**Evidence cutoff:** `<UTC timestamp>`  
**Configuration version:** `<version>`  
**Status:** `<PLANNED / RUNNING / PARTIAL / COMPLETED / FAILED / SUPERSEDED>`

---

# 1. Raw signal

**Source signal:** `<what was discovered>`  
**Source URL/path:** `<source>`  
**Source date:** `<date>`  
**Source quality:** `<Tier A / B / C / D>`  
**Why it may matter:** `<one paragraph>`

---

# 2. Normalised business hypothesis

**Proposed business/service/outcome:** `<plain language>`  
**Pain solved:** `<problem>`  
**Likely payer:** `<who pays>`  
**Likely user:** `<if different>`  
**Revenue mechanism:** `<upfront / recurring / usage / licence / commission / royalty>`  
**Recurring/repeat logic:** `<why revenue repeats>`  
**Possible niches:** `<hypotheses>`  
**Possible delivery rails:** `<platforms/tools; not the business definition>`

## Money in one sentence

> We sell `<outcome>` to `<payer>` for `<price/basis/Pending>` because `<pain/value>`. Revenue arrives as `<type>`.

If this sentence cannot be made coherent, reject without deep scoring.

---

# 3. Portfolio deduplication

## Candidate fingerprint

```text
pain/outcome:
payer class:
revenue model:
primary workflow:
```

## Comparison

| Existing opportunity/niche | Similarity | Material difference | Classification impact |
|---|---|---|---|
| | | | |

**Classification:**

- [ ] NEW_PARENT
- [ ] NEW_NICHE
- [ ] DELIVERY_VARIANT
- [ ] COMMERCIAL_VARIANT
- [ ] REFRESH
- [ ] DUPLICATE
- [ ] RECONSIDER_REJECTED

**Route:** `<stop / parent niche work / architecture evidence / Loop B refresh / continue scan>`

---

# 4. External commercial signals

## Positive evidence

| Operator/signal | Offer | Price/revenue model | Customer/traction evidence | Acquisition/delivery pattern | Source/date | Quality/limitation |
|---|---|---|---|---|---|---|
| | | | | | | |

## Negative/counter-evidence

| Failure/constraint | What it could invalidate | Source/date | Quality/limitation |
|---|---|---|---|
| | | | |

## Provisional External Market Proof

**EMP:** `<EMP0–EMP4 or Pending>`  
**EMP Confidence:** `<0–100>%`  
**What the market already proves:** `<one sentence>`  
**What it does not prove for DRF:** `<one sentence>`

---

# 5. Cheap Layer 1 scan

Use `knowledge/templates/revenue-opportunity-scan-card.md` and summarise:

| Metric | Result | Evidence/limitation |
|---|---:|---|
| Provisional Opportunity Score | __/100 | |
| MRR | __/10 | |
| AI Autonomy | __/100 | |
| Evidence Confidence | __% | |
| Research Completeness | __% | |
| External Market Proof | EMP_ / __% | |
| Execution Velocity | __/100 or Not assessed | |

## Fatal gates

| Gate | Pass / Fail / Unknown | Evidence |
|---|---|---|
| Identifiable payer/revenue mechanism | | |
| Credible current demand | | |
| Plausible first-customer route | | |
| Delivery cost below value | | |
| No fatal legal/platform/data issue | | |
| Not a duplicate/vendor relabel | | |

---

# 6. Decision

**Threshold version:** `<configuration version>`  
**Decision:** `<REJECT / HOLD / ADVANCE / GOLDEN PRIORITY>`  
**Reason:** `<one decisive paragraph>`  
**Largest remaining uncertainty:** `<one>`  
**Next action:** `<one bounded action>`  
**Capital authorised:** `US$0`  
**Founder approval required now:** `<No / exact decision>`

## Routing

### If rejected

- add one concise row to `research/recurring-intelligence/DISCOVERY-REJECTIONS.md`;
- include reconsideration trigger;
- do not add to `PORTFOLIO-V3.md`;
- do not create a parent folder by default.

### If held

- record one evidence gap and expiry/reconsideration trigger;
- keep outside the main portfolio unless founder policy says otherwise.

### If advanced

- create/repair the governing GitHub Issue;
- run `workflows/drf-opportunity-factory.md` through the maximum defensible Layer 1, Layer 2 and Layer 3 stages;
- create a parent folder only after confirming it is a new parent;
- update detailed sources and registers in canonical order;
- reconcile `PORTFOLIO-V3.md` last.

---

# 7. Run summary

| Measure | Count/result |
|---|---:|
| Signals scanned | |
| Credible candidates | |
| Duplicates/variants | |
| Rejected | |
| Held | |
| Advanced | |
| Golden Priority | |
| Source failures | |

**Files updated:** `<paths>`  
**Sources failed/blocked:** `<details>`  
**Partial-result impact:** `<none/details>`  
**Approval actions not executed:** `<details>`  
**One next action:** `<action>`

---

# Verification

- [ ] Run ID, idempotency key and cutoff are present.
- [ ] Business is defined by outcome/payer rather than vendor.
- [ ] Existing portfolio and rejected history were checked.
- [ ] Positive and negative evidence were sought.
- [ ] EMP is separate from DRF Proof.
- [ ] Opportunity Score, not RBS, controls cheap screening.
- [ ] Threshold version and fatal gates are explicit.
- [ ] Rejected/held candidates remain outside the main portfolio.
- [ ] No paid/outreach/public/legal action was executed without approval.
- [ ] Completed/failed run history is updated.