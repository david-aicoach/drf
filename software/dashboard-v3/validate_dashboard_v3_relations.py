#!/usr/bin/env python3
"""Validate V3 cross-register and browser-integrity safeguards."""

from __future__ import annotations

import re

from validate_dashboard_v3 import INDEX, NICHES, PORTFOLIO, ROOT, find_table, read, require

INTEGRITY_JS = ROOT / "assets" / "v3-dashboard-proof-counts.js"
TOOLTIP_CSS = ROOT / "assets" / "v3-dashboard-tooltip-fix.css"


def normalise_name(value: str) -> str:
    value = value.lower().replace("&", " and ")
    value = re.sub(r"[^a-z0-9]+", " ", value)
    value = re.sub(r"\bthe\b", " ", value)
    return re.sub(r"\s+", " ", value).strip()


def validate_relationships() -> tuple[int, int]:
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
    return len(portfolio_rows), len(niche_rows)


def validate_browser_safeguards() -> None:
    html = read(INDEX)
    integrity_js = read(INTEGRITY_JS)
    tooltip_css = read(TOOLTIP_CSS)

    require(
        'href="assets/v3-dashboard-tooltip-fix.css"' in html,
        "Root index does not load the sticky-header tooltip correction",
    )
    require(
        'src="assets/v3-dashboard-proof-counts.js"' in html,
        "Root index does not load the V3 integrity/proof-count script",
    )

    for marker in [
        "validateNicheParents",
        "Niche-parent join contract failed",
        "showLayer2ContractFailure",
        "installStorageResetFallback",
        "storageAvailable",
        "window.location.reload()",
        "^P[0-6]",
    ]:
        require(marker in integrity_js, f"V3 integrity script is missing: {marker}")

    for marker in [
        ".v3-table thead .v3-tip:after",
        "top:calc(100% + 8px)",
        "bottom:auto",
        ".v3-table thead .v3-tip:before",
        "border-bottom-color:#17202a",
    ]:
        require(marker in tooltip_css, f"Tooltip correction is missing: {marker}")


def main() -> int:
    parent_count, niche_count = validate_relationships()
    validate_browser_safeguards()
    print(f"PASS: all {niche_count} niche rows join to {parent_count} V3 parent opportunities")
    print("PASS: runtime join failure, storage fallback and in-viewport tooltip safeguards are present")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
