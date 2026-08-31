# DRF Recurring Intelligence Contract Validation

**Status:** Passed for [77.5] #82  
**Date:** 31 August 2026  
**Workflow:** `workflows/drf-recurring-intelligence-loops.md`  
**Configuration:** `knowledge/guidelines/drf-recurring-intelligence-configuration.md`

## Architecture validation

| Requirement | Implementation | Result |
|---|---|---|
| One processing workflow | Both loops route candidates/opportunities into `workflows/drf-opportunity-factory.md` | Pass |
| One V3 output contract | Both loops reconcile `businesses/PORTFOLIO-V3.md` last | Pass |
| No dashboard-only truth | Dashboard HTML is explicitly prohibited as a business-data write path | Pass |
| Business before vendor | Candidate fingerprint uses pain/outcome, payer, revenue model and workflow | Pass |
| EMP separate from DRF Proof | Both loop and templates prohibit external evidence awarding P3–P6 | Pass |
| Cheap rejection | Discovery requires the Layer 1 scan before full dossier/RBS work | Pass |
| History preservation | Partial/failed runs retain the last successful conclusion | Pass |
| Missing values | Pending/Unknown/Conflict remain distinct from zero | Pass |
| Founder boundary | Paid, outreach, public and legal actions remain approval-gated | Pass |
| Implementation neutrality | Contract can be run manually, by ChatGPT Web, GitHub Actions or another scheduler | Pass |

## Discovery loop validation

- Daily lightweight signal scan is defined.
- Source families cover operators, marketplaces, ads/funnels, customer pain, technology enablers, Talent Bridge/iMPLEMENTAi assets and failure evidence.
- Source quality tiers distinguish direct operating evidence from weak social signals.
- Candidate normalisation captures payer, outcome and revenue mechanism.
- Deduplication classifies `NEW_PARENT`, `NEW_NICHE`, `DELIVERY_VARIANT`, `COMMERCIAL_VARIANT`, `REFRESH`, `DUPLICATE` and `RECONSIDER_REJECTED`.
- Configurable default thresholds match the canonical Layer 1 framework.
- Rejected/held candidates remain outside the parent portfolio.
- Qualified candidates continue through the existing three-layer workflow.
- A founder digest is emitted only for material Golden candidates, conflicts or approval decisions.

## Portfolio-refresh validation

- Every parent receives a daily material-event watch without full daily re-research.
- Deep refresh cadence is risk-based: weekly for active proof/capital stages, monthly for Golden research, quarterly for ordinary active opportunities and six-monthly for parked/long-horizon cases.
- Immediate triggers cover DRF actuals, platform cost/access, legal/regulatory change, competitor events, market signals, niche evidence and source conflicts.
- Priority is explicit and non-opaque.
- Only materially affected fields are recalculated.
- Before/after evidence and source provenance are retained.
- DRF Proof is preserved unless qualifying DRF evidence changes it.
- Detailed source files update before specialised registers and `PORTFOLIO-V3.md`.

## Failure-handling validation

- Source outages do not become negative market conclusions.
- Rate/budget limits produce a Partial run rather than invented completeness.
- Contradictory authoritative evidence becomes `Conflict` when it cannot be resolved.
- Idempotency prevents duplicate candidate/history entries.
- Interrupted writes are repaired by reconciliation in the correct source order.
- A failed run does not overwrite the last successful canonical conclusion.

## Records and navigation

| Record | Path | Initial state |
|---|---|---|
| Discovery candidate detail | `knowledge/templates/drf-discovery-candidate-record.md` | Template only |
| Portfolio refresh detail | `knowledge/templates/drf-portfolio-refresh-record.md` | Template only |
| Discovery run history | `research/recurring-intelligence/DISCOVERY-RUNS.md` | Empty register; no invented runs |
| Rejected/held candidates | `research/recurring-intelligence/DISCOVERY-REJECTIONS.md` | Empty register; no invented candidates |
| Refresh run history | `research/recurring-intelligence/REFRESH-RUNS.md` | Empty register; no invented refreshes |

## Production activation boundary

This stage does not activate an external schedule. A production scheduler remains a separate explicit implementation/approval action because it may require credentials, recurring compute, outbound access or paid services.

The business logic is now ready for that scheduler without being tied to one runtime.

## Conclusion

**Pass.** DRF now has complete, implementation-neutral recurring intelligence contracts for daily Golden Opportunity discovery and risk-based portfolio refresh, with strong evidence, write-order, proof and approval safeguards.