#!/usr/bin/env python3
"""Reject retired DRF repository identifiers from active agent/runtime routing."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
RETIRED_REPO = re.compile(r"tbhrc/drf(?!-main)")
ACTIVE_ROOT_FILES = [ROOT / "README.md", ROOT / "AGENTS.md", ROOT / ".github" / "copilot-instructions.md"]
ACTIVE_TREES = [ROOT / "skills", ROOT / ".github" / "actions", ROOT / ".github" / "workflows"]
TEXT_SUFFIXES = {".md", ".py", ".yml", ".yaml", ".json", ".js", ".html"}


def iter_active_files():
    for path in ACTIVE_ROOT_FILES:
        if path.is_file():
            yield path
    for root in ACTIVE_TREES:
        if not root.is_dir():
            continue
        for path in root.rglob("*"):
            if path.is_file() and path.suffix.lower() in TEXT_SUFFIXES:
                yield path


def main() -> int:
    errors = []
    for path in iter_active_files():
        text = path.read_text(encoding="utf-8")
        if RETIRED_REPO.search(text):
            errors.append(path.relative_to(ROOT).as_posix())

    if errors:
        print("DRF repository identity validation failed:", file=sys.stderr)
        for relative in sorted(errors):
            print(f"- active file still points to retired repository tbhrc/drf: {relative}", file=sys.stderr)
        return 1

    print("DRF active repository identity: PASS (tbhrc/drf-main)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
