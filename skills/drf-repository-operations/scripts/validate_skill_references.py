#!/usr/bin/env python3
"""Fail when Skill-owned references route agents to retired global DRF paths."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
REFERENCES = ROOT / "skills"
RETIRED_PATH = re.compile(r"(?:knowledge/|workflows/(?:drf-|revenue-blueprint))")


def main() -> int:
    errors: list[str] = []
    for path in sorted(REFERENCES.glob("*/references/**/*.md")):
        text = path.read_text(encoding="utf-8")
        for line_number, line in enumerate(text.splitlines(), start=1):
            matches = sorted(set(RETIRED_PATH.findall(line)))
            if matches:
                relative = path.relative_to(ROOT)
                errors.append(
                    f"{relative}:{line_number}: retired operating path in Skill reference: {line.strip()}"
                )

    if errors:
        print("DRF Skill reference validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("DRF Skill references: PASS — no retired global operating paths")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
