#!/usr/bin/env bash
set -euo pipefail

python3 software/dashboard-v3/validate_dashboard_v3.py
python3 software/dashboard-v3/validate_dashboard_v3_relations.py
node --check assets/v3-dashboard.js
node --check assets/v3-dashboard-policy.js
node --check assets/v3-dashboard-proof-counts.js
