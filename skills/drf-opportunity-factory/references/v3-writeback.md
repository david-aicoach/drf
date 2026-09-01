# DRF V3 Write-Back Contract

**Owner:** `skills/drf-opportunity-factory/SKILL.md`

## Purpose
Prevent research from becoming stranded in a dossier while the founder dashboard/register remains stale.

A material opportunity/niche/commercial/evidence/execution update is not complete until its current state has been reconciled to V3.

## Source precedence

```text
live evidence / DRF actual
→ current opportunity source / dossier
→ specialised register(s)
→ businesses/PORTFOLIO-V3.md
→ Dashboard V3
```

The dashboard is derived only.

## Mandatory close-out order

```text
1. update authoritative detailed source first
2. update CURRENT/current Layer 3 dossier where required
3. update businesses/OPPORTUNITIES.md if Layer 1 fields changed
4. update businesses/NICHES.md if niche fields changed
5. update businesses/INVESTMENT-READINESS.md where RBS/Proof/Stage/Capital migration fields changed
6. review all V3 founder fields
7. choose exactly one:
   A. founder-facing V3 field changed → update businesses/PORTFOLIO-V3.md LAST
   B. material evidence but no founder field changed → append businesses/V3-RECONCILIATIONS.md NO FIELD CHANGE
8. run validation / re-read changed paths
9. only then close Issue / merge / mark scheduled run completed
```

## Material change
Treat as material when it may change:
- Opportunity Score, MRR, AI Autonomy, Evidence or Research;
- EMP / confidence;
- best niche / Niche Score / confidence;
- offer / pricing / revenue model;
- GTM / acquisition;
- delivery architecture;
- RBS / Return;
- DRF Proof / Stage / Capital;
- Next Proof / Current Read;
- Dossier or Blueprint Readiness;
- evidence freshness;
- legal/ethical viability;
- or completes a previously Pending founder field.

## V3 field review
Review the parent row for:
- Rank (only if portfolio ranking policy requires recalculation)
- Business Opportunity / pain-outcome
- Opportunity Score
- MRR
- AI Autonomy
- Evidence Confidence
- Research Completeness
- External Market Proof + confidence
- Best Niche + score/confidence
- Recommended Offer
- Price / Commercial Model
- GTM Summary
- Delivery Architecture
- RBS
- DRF Proof
- Stage
- Capital
- Return Headline
- Next Proof
- Current Read
- Dossier Readiness
- Blueprint Readiness
- Evidence Freshness
- Canonical Dossier Path
- Business Folder

## No-field-change ledger
Use `businesses/V3-RECONCILIATIONS.md` only when:
- evidence/research was materially reviewed/changed;
- all relevant founder fields were explicitly checked;
- no V3 value should responsibly change.

Record date/run/Issue, scope, authoritative sources changed, V3 fields reviewed, reason for no change and Next Proof.

Do not use NO FIELD CHANGE to avoid a real V3 update.

## Proof integrity
- EMP and DRF Proof remain separate.
- External operators can strengthen EMP, RBS and P1/P2 desk evidence but cannot award P3–P6.
- Documentation completeness never raises DRF Proof.
- Refreshing research never resets legitimate DRF Proof.

## Missing values
Keep these distinct:
- `Pending` — required work not completed
- `Unknown` — investigated but not currently knowable
- `Not applicable` — genuinely does not apply
- `Needs more research` — evidence insufficient
- `Conflict` — authoritative sources disagree
- `0` — verified numerical zero

Never convert missing evidence to zero.

## Conflict rule
If a current source conflicts with V3:
1. determine source scope/date/authority;
2. preserve conflict explicitly if not resolvable;
3. never silently choose the more convenient number;
4. reconcile the joined V3 row after the detailed source decision.

## Concurrency rule
Other agents may update `main` while work is in progress. Before final V3 write-back/merge:
- fetch current `main`/canonical files;
- compare affected rows/paths;
- preserve newer valid work;
- rebase/reconcile instead of overwriting.

## Scheduled-run rule
A recurring intelligence run that required GitHub write-back but failed to persist/reconcile is `PARTIAL` or `FAILED`, not `COMPLETED`.

## Validation
Use the repository/product tests owned by:
- `skills/drf-repository-operations/scripts/validate_repository.py`
- `software/dashboard-v3/`
- `software/v3-writeback-guard/`

Then re-read every changed canonical path once.
