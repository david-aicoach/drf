# DRF Recurring Intelligence History

**Status:** Canonical cross-portfolio control-log area  
**Governing stage:** [77.5] #82

This folder records concise run-level history for the DRF Golden Opportunity Discovery and Existing Portfolio Refresh loops.

It is not a substitute for:

- opportunity dossiers under `businesses/<opportunity>/`;
- ranked niche evidence under `research/niches/`;
- the joined V3 portfolio register;
- GitHub Issues and verification evidence.

## Files

- [`DISCOVERY-RUNS.md`](./DISCOVERY-RUNS.md) — one row per completed, partial or failed discovery run.
- [`DISCOVERY-REJECTIONS.md`](./DISCOVERY-REJECTIONS.md) — one concise row per rejected/held candidate, with reason and reconsideration trigger.
- [`REFRESH-RUNS.md`](./REFRESH-RUNS.md) — one row per portfolio refresh or event-triggered refresh.

## Rules

1. Never invent a run or candidate result.
2. Add a row only after a real run begins and its status is known.
3. Use stable run IDs from `workflows/drf-recurring-intelligence-loops.md`.
4. Detailed evidence belongs in the governing Issue/candidate record/opportunity dossier; these files hold concise navigation and audit history.
5. Rejected candidates remain outside `businesses/PORTFOLIO-V3.md` unless later reconsidered and advanced.
6. A partial or failed run does not replace the last successful canonical conclusion.
7. Do not store credentials, personal/customer data or proprietary interview content here.
8. Archive older rows only when volume impairs use, retaining stable links and summary counts.

## Canonical processing

```text
run/candidate record
→ detailed evidence or current dossier
→ specialised registers
→ PORTFOLIO-V3.md
→ concise run-history row
→ Dashboard V3 derived status
```

The dashboard may show last-success, staleness and run-health summaries derived from these records. It must not write business truth back into them.