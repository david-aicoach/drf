#!/usr/bin/env bash
set -euo pipefail

# CI checks pull-request merge commits. fetch-depth=2 ensures the first parent is available.
if ! git rev-parse --verify HEAD^1 >/dev/null 2>&1; then
  echo "V3 write-back guard: no parent commit available; skipping diff-based guard."
  exit 0
fi

changed="$(git diff --name-only HEAD^1 HEAD)"

if [ -z "$changed" ]; then
  echo "V3 write-back guard: no changed files."
  exit 0
fi

material=false
while IFS= read -r path; do
  case "$path" in
    businesses/OPPORTUNITIES.md|businesses/NICHES.md|businesses/INVESTMENT-READINESS.md)
      material=true
      ;;
    businesses/*/*)
      # Opportunity-owned evidence/dossiers. Exclude the V3 reconciliation artefacts themselves.
      case "$path" in
        businesses/PORTFOLIO-V3.md|businesses/V3-RECONCILIATIONS.md) ;;
        *) material=true ;;
      esac
      ;;
    research/niches/*.md)
      case "$path" in
        research/niches/README.md|research/niches/_research-standard-*.md|research/niches/COMPREHENSIVE-V3-COMPLETION.md) ;;
        *) material=true ;;
      esac
      ;;
  esac
done <<< "$changed"

if [ "$material" != true ]; then
  echo "V3 write-back guard: no material opportunity/niche evidence change."
  exit 0
fi

if grep -qx 'businesses/PORTFOLIO-V3.md' <<< "$changed"; then
  echo "V3 write-back guard: PASS — PORTFOLIO-V3.md reconciled."
  exit 0
fi

if grep -qx 'businesses/V3-RECONCILIATIONS.md' <<< "$changed"; then
  echo "V3 write-back guard: PASS — explicit NO-FIELD-CHANGE reconciliation recorded."
  exit 0
fi

cat >&2 <<'EOF'
V3 write-back guard: FAIL
Material DRF opportunity/niche evidence changed without a Layer 3 V3 reconciliation.

Before merge, do exactly one:
1. update businesses/PORTFOLIO-V3.md last because founder-facing V3 fields changed; or
2. add an evidence-backed NO FIELD CHANGE row to businesses/V3-RECONCILIATIONS.md.

See knowledge/architecture/drf-v3-writeback-contract.md.
EOF
exit 1
