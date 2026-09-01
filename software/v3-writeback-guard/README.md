# V3 Write-Back Guard

Deterministic CI guard for the DRF Layer 3 close-out contract.

## Purpose

When a pull request materially changes opportunity-owned or niche-owned evidence, the same change must also include one of:

- `businesses/PORTFOLIO-V3.md` — founder-facing V3 fields changed; or
- `businesses/V3-RECONCILIATIONS.md` — the evidence was reviewed and deliberately caused no V3 field change.

This prevents research from landing behind Dashboard V3 without a reconciliation decision.

## Scope

The guard watches:

- opportunity-owned files beneath `businesses/<opportunity>/`;
- `businesses/OPPORTUNITIES.md`;
- `businesses/NICHES.md`;
- `businesses/INVESTMENT-READINESS.md`;
- substantive niche evidence beneath `research/niches/`.

Repository/index files such as `businesses/README.md` do not trigger the guard by themselves.

## Run

```bash
bash software/v3-writeback-guard/test.sh
```

The script is intentionally conservative and does not decide what the V3 value should be. Evidence and the canonical Opportunity Factory workflow make that decision.