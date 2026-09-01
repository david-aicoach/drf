# DRF V3 Close-Out Checklist

**Owner:** `skills/drf-opportunity-factory/SKILL.md`  
Use this only for the final verification of a material opportunity/niche update.

## Source first
- [ ] Governing Issue is current.
- [ ] New evidence/result is written to the most authoritative detailed source first.
- [ ] Current Layer 3 dossier / `CURRENT.md` is updated when required.
- [ ] Fact, estimate, inference, EMP and DRF actual are separated.
- [ ] Counter-evidence/limitations are preserved.

## Registers
- [ ] `businesses/OPPORTUNITIES.md` updated if Layer 1 fields changed.
- [ ] `businesses/NICHES.md` updated if niche fields changed.
- [ ] `businesses/INVESTMENT-READINESS.md` updated where its RBS/Proof/Stage/Capital field family changed.

## V3 reconciliation
- [ ] All V3 founder fields reviewed.
- [ ] Exactly one close-out route chosen:
  - [ ] `businesses/PORTFOLIO-V3.md` updated **last** because a founder field changed; **or**
  - [ ] `businesses/V3-RECONCILIATIONS.md` records evidence-backed **NO FIELD CHANGE**.
- [ ] EMP and DRF Proof remain separate.
- [ ] Documentation/research completeness did not raise DRF Proof.
- [ ] `Pending`/`Unknown`/`Not applicable` were not converted to zero.
- [ ] Evidence Freshness and Next Proof were reviewed.

## Concurrency
- [ ] Current `main`/affected canonical paths checked before final merge.
- [ ] Newer valid work from other agents preserved/reconciled.

## Verification
- [ ] Skill/repository validation passes.
- [ ] Dashboard/V3 relation tests pass where affected.
- [ ] V3 write-back guard passes.
- [ ] Changed canonical paths re-read once.
- [ ] PR/check evidence recorded in the Issue.
- [ ] Scheduled run, if applicable, recorded as completed only after persistence succeeds.

## Closure
- [ ] No hidden work remains.
- [ ] One Next Proof + stop/pass condition is explicit.
- [ ] Founder handover states exact changed paths and current decision.
