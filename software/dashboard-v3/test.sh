#!/usr/bin/env bash
set -euo pipefail

python3 software/dashboard-v3/validate_dashboard_v3.py
node --check assets/v3-dashboard.js
