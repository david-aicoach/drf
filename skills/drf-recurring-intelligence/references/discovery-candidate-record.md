# DRF Discovery Candidate Record

**Status:** Canonical template  
**Version:** 1.1  
**Governing stage:** [77.5] #82  
**Owning Skill:** `skills/drf-recurring-intelligence/SKILL.md`  
**Configuration:** `DRF-INTELLIGENCE-CONFIG-2.1`

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

## Optional proof-first application signal
Use this block when the candidate originated from a mobile/web application intelligence source. Load `proof-first-application-discovery-profile.md`.

| Signal | Evidence |
|---|---|
| Product/store URL | |
| Launch/release date | |
| Estimated monthly revenue | |
| Revenue estimate source/date | |
| Revenue direction/growth | |
| Estimated downloads/traffic | |
| Pricing/subscription/IAP/usage model | |
| Active ads/ad-spend/intensity signal | |
| Organic/viral/ASO signal | |
| Reviews/rank/user complaints | |
| Independent corroborating signal | |
| Estimate limitation | |

**Important:** third-party app revenue/download figures are estimates unless independently verified. They are never DRF actuals.

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

**Route:** `<stop / parent niche work / architecture evidence / portfolio refresh / continue scan>`

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

For proof-first application candidates, one app-intelligence estimate alone cannot establish EMP2+.

---

# 5. Cheap Layer 1 scan

Use `skills/drf-opportunity-factory/references/revenue-opportunity-scan-card.md` and summarise:

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

### Additional application gates when relevant

| Gate | Pass / Fail / Unknown | Evidence |
|---|---|---|
| Paid problem transfers beyond original brand | | |
| Monetisation model is reproducible | | |
| At least one acquisition route is transferable | | |
| MVP is buildable within acceptable time/capital | | |
| Credible differentiation wedge exists | | |
| No fatal store-policy/IP/trademark/privacy barrier | | |

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
- invoke `skills/drf-opportunity-factory/SKILL.md` and continue through the maximum defensible Layer 1, Layer 2 and Layer 3 stages;
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
- [ ] App-intelligence estimates, when used, are labelled and cross-checked.
- [ ] Rejected/held candidates remain outside the main portfolio.
- [ ] No paid/outreach/public/legal action was executed without approval.
- [ ] Completed/failed run history is updated.
