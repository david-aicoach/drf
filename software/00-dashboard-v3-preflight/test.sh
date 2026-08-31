#!/usr/bin/env bash
set -euo pipefail

python3 - <<'PY'
from pathlib import Path
import hashlib

for name in [
    'index.html',
    'assets/v3-dashboard.js',
    'software/dashboard-v3/validate_dashboard_v3.py',
    'software/dashboard-v3/test.sh',
    'software/00-dashboard-v3-preflight/README.md',
    'software/00-dashboard-v3-preflight/test.sh',
]:
    path = Path(name)
    data = path.read_bytes()
    digest = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data, usedforsecurity=False).hexdigest()
    print(f'GIT_BLOB {name} {digest}')
PY
