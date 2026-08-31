#!/usr/bin/env python3
"""Validate the DRF Dashboard V3 source, data and preserved legacy contract."""

from __future__ import annotations

import hashlib
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

INDEX = ROOT / "index.html"
LEGACY = ROOT / "dashboard-v1-v2.html"
CSS = ROOT / "assets" / "v3-dashboard.css"
JS = ROOT / "assets" / "v3-dashboard.js"
POLICY_JS = ROOT / "assets" / "v3-dashboard-policy.js"
PORTFOLIO = ROOT / "businesses" / "PORTFOLIO-V3.md"
NICHES = ROOT / "businesses" / "NICHES.md"
PUBLIC_ARCH = ROOT / "knowledge" / "architecture" / "public-dashboard.md"
DATA_CONTRACT = ROOT / "knowledge" / "architecture" / "drf-v3-portfolio-data-contract.md"

EXPECTED_LEGACY_BLOB_SHA = "45ee9d80ee2c26a345cda5029b43567141075f08"
EXPECTED_PARENT_COUNT = 27
MINIMUM_NICHE_COUNT = 31

EXPECTED_PORTFOLIO_HEADERS = [
    "Rank",
    "Opportunity ID",
    "Business Opportunity",
    "Pain / Outcome",
    "Opportunity Score",
    "MRR",
    "AI Autonomy",
    "Evidence Confidence",
    "Research Completeness",
    "External Market Proof",
    "EMP Confidence",
    "Best Niche",
    "Niche Score",
    "Niche Confidence",
    "Recommended Offer",
    "Price / Commercial Model",
    "GTM Summary",
    "Delivery Architecture",
    "RBS",
    "DRF Proof",
    "Stage",
    "Capital",
    "Return Headline",
    "Next Proof",
    "Current Read",
    "Dossier Readiness",
    "Blueprint Readiness",
    "Evidence Freshness",
    "Canonical Dossier Path",
    "Business Folder",
]

REQUIRED_NICHE_HEADERS = [
    "Parent opportunity",
    "Offer / product",
    "Vertical",
    "Sub-niche / ICP",
    "Geography",
    "Core pain / trigger",
    "Niche Score",
    "Evidence Confidence",
    "Decision",
    "Current read",
    "Next evidence",
    "Canonical detail",
]

MISSING_VALUES = {
    "Pending",
    "Unknown",
    "Not applicable",
    "Needs more research",
    "Conflict",
}

NUMERIC_RANGES = {
    "Rank": (1, EXPECTED_PARENT_COUNT),
    "Opportunity Score": (0, 100),
    "MRR": (0, 10),
    "AI Autonomy": (0, 100),
    "Evidence Confidence": (0, 100),
    "Research Completeness": (0, 100),
    "EMP Confidence": (0, 100),
    "Niche Score": (0, 100),
    "Niche Confidence": (0, 100),
    "RBS": (0, 100),
}

STAGES = {"REJECT", "RESEARCH", "TEST", "PILOT", "FUND", "SCALE", "BLUEPRINT"}


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def read(path: Path) -> str:
    require(path.is_file(), f"Missing required file: {path.relative_to(ROOT)}")
    return path.read_text(encoding="utf-8")


def clean_cell(value: str) -> str:
    value = value.strip()
    value = re.sub(r"<br\s*/?>", " ", value, flags=re.I)
    value = re.sub(r"\[([^\]]+)]\([^)]+\)", r"\1", value)
    value = value.replace("**", "").replace("__", "").replace("`", "")
    value = value.replace(r"\|", "|")
    return re.sub(r"\s+", " ", value).strip()


def split_markdown_row(line: str) -> list[str]:
    text = line.strip()
    if text.startswith("|"):
        text = text[1:]
    if text.endswith("|"):
        text = text[:-1]

    cells: list[str] = []
    current: list[str] = []
    escaped = False
    in_code = False
    for char in text:
        if escaped:
            current.append(char)
            escaped = False
        elif char == "\\":
            escaped = True
            current.append(char)
        elif char == "`":
            in_code = not in_code
            current.append(char)
        elif char == "|" and not in_code:
            cells.append(clean_cell("".join(current)))
            current = []
        else:
            current.append(char)
    cells.append(clean_cell("".join(current)))
    return cells


def is_separator(line: str) -> bool:
    cells = split_markdown_row(line)
    return bool(cells) and all(re.fullmatch(r":?-{3,}:?", cell.replace(" ", "")) for cell in cells)


def find_table(markdown: str, exact_heading: str) -> tuple[list[str], list[dict[str, str]]]:
    lines = markdown.replace("\r", "").splitlines()
    try:
        heading_index = next(i for i, line in enumerate(lines) if line.strip() == exact_heading)
    except StopIteration as exc:
        raise AssertionError(f"Missing heading: {exact_heading}") from exc

    header_index: int | None = None
    for index in range(heading_index + 1, len(lines) - 1):
        if lines[index].strip().startswith("|") and is_separator(lines[index + 1]):
            header_index = index
            break
        if index > heading_index + 1 and re.match(r"^#{1,3}\s", lines[index].strip()):
            break
    require(header_index is not None, f"No Markdown table follows {exact_heading}")

    headers = split_markdown_row(lines[header_index])
    rows: list[dict[str, str]] = []
    for line_number in range(header_index + 2, len(lines)):
        line = lines[line_number].strip()
        if not line.startswith("|"):
            break
        cells = split_markdown_row(line)
        require(
            len(cells) == len(headers),
            f"{exact_heading} row {line_number + 1} has {len(cells)} cells; expected {len(headers)}",
        )
        rows.append(dict(zip(headers, cells, strict=True)))

    require(rows, f"Table under {exact_heading} contains no rows")
    return headers, rows


def git_blob_sha(path: Path) -> str:
    data = path.read_bytes()
    header = f"blob {len(data)}\0".encode("ascii")
    return hashlib.sha1(header + data, usedforsecurity=False).hexdigest()


def parse_score(value: str, *, field: str, row_number: int, maximum: float = 100) -> float:
    """Accept canonical bare, /100 and percentage score notation."""
    match = re.fullmatch(r"(-?\d+(?:\.\d+)?)(?:/100|%)?", value.strip())
    require(match is not None, f"Invalid {field} at row {row_number}: {value}")
    number = float(match.group(1))
    require(0 <= number <= maximum, f"Out-of-range {field} at row {row_number}: {value}")
    return number


def validate_html() -> None:
    html = read(INDEX)
    required_strings = [
        "Dashboard Version 3 is not Workflow Layer 3",
        'id="v3-master"',
        'id="v3-layer1"',
        'id="v3-layer2"',
        'id="v3-layer3"',
        'id="dashboard-v2"',
        'id="dashboard-v1"',
        'href="assets/v3-dashboard.css"',
        'src="assets/v3-dashboard.js"',
        'src="assets/v3-dashboard-policy.js"',
        'src="dashboard-v1-v2.html?embedded=v2"',
        'src="dashboard-v1-v2.html?embedded=v1"',
        "A GitHub-native factory for finding, underwriting, testing and packaging revenue-producing businesses.",
        "#portfolio-grid table",
    ]
    for marker in required_strings:
        require(marker in html, f"Root index is missing required marker: {marker}")

    ordered_markers = [
        'id="v3-master"',
        'id="v3-layer1"',
        'id="v3-layer2"',
        'id="v3-layer3"',
        'id="dashboard-v2"',
        'id="dashboard-v1"',
    ]
    positions = [html.index(marker) for marker in ordered_markers]
    require(
        positions == sorted(positions),
        "Website order must be V3 Master → Layer 1 → Layer 2 → Layer 3 → V2 → V1",
    )
    require(html.count("Dashboard Version 3") >= 3, "Root index must identify Dashboard Version 3 explicitly")
    require("new Set(['Δ', 'Score Δ', 'Rank Δ'])" in html, "Legacy V1 delta-column handling is missing")


def validate_legacy_snapshot() -> None:
    legacy = read(LEGACY)
    actual_sha = git_blob_sha(LEGACY)
    require(
        actual_sha == EXPECTED_LEGACY_BLOB_SHA,
        f"Legacy snapshot drifted: expected Git blob {EXPECTED_LEGACY_BLOB_SHA}, got {actual_sha}",
    )
    required_markers = [
        'id="portfolio-grid"',
        'id="niche-grid"',
        'id="v2-preview"',
        'class="v2"',
        'id="v2-portfolio"',
        "Version 1 ends here",
        "Revenue Blueprint Factory — Version 2 Preview",
    ]
    for marker in required_markers:
        require(marker in legacy, f"Legacy snapshot is missing original V1/V2 marker: {marker}")


def validate_assets() -> None:
    css = read(CSS)
    js = read(JS)
    policy_js = read(POLICY_JS)

    for marker in [
        ".v3-table-shell",
        ".v3-resizer",
        ".v3-tip:after",
        ".legacy-frame",
        "position:sticky",
        "overflow:auto",
    ]:
        require(marker in css, f"Dashboard V3 CSS is missing: {marker}")

    for marker in [
        "businesses/PORTFOLIO-V3.md",
        "businesses/NICHES.md",
        "PORTFOLIO_HEADERS",
        "validatePortfolioRows",
        "data-resize",
        "data-filter",
        "data-sort",
        "localStorage",
        "data-proof-filter",
        "configureLegacyFrame",
        "Pending",
    ]:
        require(marker in js, f"Dashboard V3 JavaScript is missing contract marker: {marker}")

    for marker in [
        "deriveLayer1Decision",
        "strongLeverage",
        "externalProofReady",
        "GOLDEN CANDIDATE",
        "ADVANCE CANDIDATE",
        "data-policy-proof",
        "Pending / missing",
        "applyMissingFilter",
        "All Layer 1 gates passed",
    ]:
        require(marker in policy_js, f"Dashboard V3 policy JavaScript is missing: {marker}")

    require("PLACEHOLDER" not in js and "PLACEHOLDER" not in policy_js, "Dashboard JavaScript contains a placeholder")


def validate_portfolio() -> None:
    markdown = read(PORTFOLIO)
    headers, rows = find_table(markdown, "## V3 master portfolio")
    require(headers == EXPECTED_PORTFOLIO_HEADERS, "V3 portfolio header/order does not match the canonical 30-field contract")
    require(len(rows) == EXPECTED_PARENT_COUNT, f"Expected {EXPECTED_PARENT_COUNT} parent rows, found {len(rows)}")

    declared_match = re.search(r"\*\*Current parent opportunity count:\*\*\s*(\d+)", markdown)
    require(declared_match is not None, "PORTFOLIO-V3.md must declare the current parent opportunity count")
    require(int(declared_match.group(1)) == len(rows), "Declared parent count does not match the table")

    ranks: list[int] = []
    ids: set[str] = set()
    for row_number, row in enumerate(rows, start=1):
        for header in EXPECTED_PORTFOLIO_HEADERS:
            require(row[header] != "", f"Blank value in V3 portfolio row {row_number}, field {header}")

        for field, (minimum, maximum) in NUMERIC_RANGES.items():
            value = row[field]
            if value in MISSING_VALUES:
                require(field != "Rank", f"Rank cannot be missing at row {row_number}")
                continue
            match = re.fullmatch(r"-?\d+(?:\.\d+)?", value)
            require(match is not None, f"Invalid numeric value in row {row_number}, {field}: {value}")
            number = float(value)
            require(
                minimum <= number <= maximum,
                f"Out-of-range value in row {row_number}, {field}: {value}; expected {minimum}–{maximum}",
            )
            if field == "Rank":
                require(number.is_integer(), f"Rank must be an integer at row {row_number}: {value}")

        rank = int(row["Rank"])
        ranks.append(rank)
        opportunity_id = row["Opportunity ID"]
        require(bool(re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", opportunity_id)), f"Invalid opportunity ID: {opportunity_id}")
        require(opportunity_id not in ids, f"Duplicate opportunity ID: {opportunity_id}")
        ids.add(opportunity_id)

        emp = row["External Market Proof"]
        require(emp in MISSING_VALUES or bool(re.match(r"^EMP[0-4]\b", emp)), f"Invalid EMP in {opportunity_id}: {emp}")

        proof = row["DRF Proof"]
        require(proof in MISSING_VALUES or bool(re.match(r"^P[0-6]\b", proof)), f"Invalid DRF Proof in {opportunity_id}: {proof}")

        stage = row["Stage"]
        require(stage in STAGES or stage in MISSING_VALUES, f"Invalid Stage in {opportunity_id}: {stage}")

        freshness = row["Evidence Freshness"]
        require(
            freshness in MISSING_VALUES or bool(re.fullmatch(r"\d{4}-\d{2}-\d{2}", freshness)),
            f"Invalid evidence freshness in {opportunity_id}: {freshness}",
        )

        business_folder = row["Business Folder"].rstrip("/")
        require((ROOT / business_folder).is_dir(), f"Missing business folder for {opportunity_id}: {business_folder}")

        dossier = row["Canonical Dossier Path"]
        if dossier not in MISSING_VALUES:
            require((ROOT / dossier).is_file(), f"Missing current dossier for {opportunity_id}: {dossier}")

    require(ranks == list(range(1, EXPECTED_PARENT_COUNT + 1)), "V3 portfolio ranks must be continuous 1–27")
    require(len(ids) == EXPECTED_PARENT_COUNT, "Every V3 parent row must have one unique stable ID")

    representative = next((row for row in rows if row["Opportunity ID"] == "whatsapp-crm-revenue-core"), None)
    require(representative is not None, "Representative WhatsApp + CRM opportunity is missing")
    expected_values = {
        "Opportunity Score": "95",
        "MRR": "10",
        "AI Autonomy": "95",
        "Evidence Confidence": "96",
        "Research Completeness": "100",
        "External Market Proof": "EMP3 Market proven",
        "EMP Confidence": "90",
        "Niche Score": "92",
        "Niche Confidence": "88",
        "RBS": "86",
        "DRF Proof": "P2 Backtested",
        "Stage": "TEST",
    }
    for field, expected in expected_values.items():
        require(representative[field] == expected, f"Representative field drift: {field} expected {expected}, got {representative[field]}")


def validate_niches() -> None:
    markdown = read(NICHES)
    headers, rows = find_table(markdown, "## Ranked niche summary")
    missing_headers = [header for header in REQUIRED_NICHE_HEADERS if header not in headers]
    require(not missing_headers, f"Niche register missing required headers: {', '.join(missing_headers)}")
    require(len(rows) >= MINIMUM_NICHE_COUNT, f"Expected at least {MINIMUM_NICHE_COUNT} ranked niche rows, found {len(rows)}")

    for row_number, row in enumerate(rows, start=1):
        parse_score(row["Niche Score"], field="Niche Score", row_number=row_number)
        parse_score(row["Evidence Confidence"], field="niche Evidence Confidence", row_number=row_number)
        detail = row["Canonical detail"]
        require(detail not in MISSING_VALUES and detail != "", f"Niche row {row_number} has no canonical detail path")
        require((ROOT / detail).is_file(), f"Niche detail path does not exist at row {row_number}: {detail}")


def validate_architecture_docs() -> None:
    public_arch = read(PUBLIC_ARCH)
    data_contract = read(DATA_CONTRACT)
    for marker in [
        "Dashboard Version 3 is not Workflow Layer 3",
        "Dashboard V3 — Consolidated Master",
        "Dashboard V2 — preserved below V3",
        "dashboard-v1-v2.html",
        EXPECTED_LEGACY_BLOB_SHA,
        "Spreadsheet interaction contract",
    ]:
        require(marker in public_arch, f"Public dashboard architecture missing: {marker}")

    for marker in [
        "## V3 master portfolio",
        "Pending",
        "Unknown",
        "Not applicable",
        "verified numerical zero",
        "one parent row per business opportunity",
    ]:
        require(marker.lower() in data_contract.lower(), f"V3 data contract missing: {marker}")


def main() -> int:
    validations = [
        ("root HTML and section order", validate_html),
        ("legacy V1/V2 snapshot", validate_legacy_snapshot),
        ("V3 CSS/JavaScript and policy contracts", validate_assets),
        ("27-business V3 portfolio", validate_portfolio),
        ("ranked niche register", validate_niches),
        ("dashboard architecture documentation", validate_architecture_docs),
    ]

    failures: list[str] = []
    for name, validation in validations:
        try:
            validation()
            print(f"PASS: {name}")
        except Exception as exc:  # noqa: BLE001 - report all contract failures together
            failures.append(f"FAIL: {name}: {exc}")

    if failures:
        print("\n".join(failures), file=sys.stderr)
        return 1

    print("Dashboard V3 contract validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
