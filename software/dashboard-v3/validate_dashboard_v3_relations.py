#!/usr/bin/env python3
"""Validate V3 cross-register relationships that the browser joins at runtime."""

from __future__ import annotations

import re

from validate_dashboard_v3 import NICHES, PORTFOLIO, find_table, read, require


def normalise_name(value: str) -> str:
    value = value.lower().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    value = re.sub(r"\bthe\b", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def main() -> int:
    _, portfolio_rows = find_table(read(PORTFOLIO), "## V3 master portfolio")
    _, niche_rows = find_table(read(NICHES), "## Ranked niche summary")

    names: dict[str, str] = {}
    for row in portfolio_rows:
        display_name = row["Business Opportunity"]
        key = normalise_name(display_name)
        require(key, f"Blank normalised parent opportunity name: {display_name}")
        require(key not in names, f"Normalised parent-name collision: {names.get(key)} / {display_name}")
        names[key] = display_name

    unmatched = sorted({
        row["Parent opportunity"]
        for row in niche_rows
        if normalise_name(row["Parent opportunity"]) not in names
    })
    require(
        not unmatched,
        "Niche rows reference unmatched parent opportunities: " + ", ".join(unmatched),
    )

    print(f"PASS: all {len(niche_rows)} niche rows join to {len(portfolio_rows)} V3 parent opportunities")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
