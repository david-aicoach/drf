#!/usr/bin/env python3
"""Validate DRF durable repository contracts with no third-party dependencies."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

REQUIRED_FILES = ["README.md", "AGENTS.md", "VERSION", "CHANGELOG.md"]

FIRST_CLASS_FOLDERS = [
    ".github",
    "businesses",
    "setups",
    "agents",
    "skills",
    "workflows",
    "software",
    "research",
    "technical",
    "knowledge",
    "lab",
    "archive",
]

V3_WRITEBACK_FILES = [
    "knowledge/architecture/drf-v3-writeback-contract.md",
    "knowledge/templates/drf-v3-closeout-checklist.md",
    "businesses/V3-RECONCILIATIONS.md",
    "businesses/PORTFOLIO-V3.md",
]


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def require_unit_readmes(errors: list[str], root_name: str) -> None:
    root = ROOT / root_name
    if not root.is_dir():
        return
    for unit in sorted(path for path in root.iterdir() if path.is_dir()):
        if not (unit / "README.md").is_file():
            fail(errors, f"Unit is missing README.md: {unit.relative_to(ROOT)}")


def require_markers(errors: list[str], relative: str, markers: list[str]) -> None:
    path = ROOT / relative
    if not path.is_file():
        fail(errors, f"Missing required file: {relative}")
        return
    text = path.read_text(encoding="utf-8")
    for marker in markers:
        if marker not in text:
            fail(errors, f"{relative} is missing canonical marker: {marker}")


def validate_v3_writeback_contract(errors: list[str]) -> None:
    for relative in V3_WRITEBACK_FILES:
        if not (ROOT / relative).is_file():
            fail(errors, f"Missing V3 write-back artefact: {relative}")

    require_markers(
        errors,
        "AGENTS.md",
        [
            "workflows/drf-opportunity-factory.md",
            "knowledge/architecture/drf-v3-writeback-contract.md",
            "businesses/PORTFOLIO-V3.md",
            "businesses/V3-RECONCILIATIONS.md",
            "Do not close material opportunity/niche research",
        ],
    )
    require_markers(
        errors,
        ".github/copilot-instructions.md",
        [
            "workflows/drf-opportunity-factory.md",
            "knowledge/architecture/drf-v3-writeback-contract.md",
            "businesses/PORTFOLIO-V3.md",
            "businesses/V3-RECONCILIATIONS.md",
        ],
    )
    require_markers(
        errors,
        "workflows/drf-opportunity-factory.md",
        [
            "LAYER 3 — Structured Factory Output + V3 Write-Back",
            "businesses/PORTFOLIO-V3.md",
            "businesses/V3-RECONCILIATIONS.md",
            "A material Issue/PR is not complete until A or B is recorded",
        ],
    )

    workflow = ROOT / "workflows" / "drf-opportunity-factory.md"
    if workflow.is_file():
        text = workflow.read_text(encoding="utf-8")
        stale_markers = [
            "Until that stage is merged",
            "[77.4] #81 owns the final stable V3 data contract",
        ]
        for marker in stale_markers:
            if marker in text:
                fail(errors, f"Canonical workflow still contains stale migration wording: {marker}")

    legacy = ROOT / "workflows" / "revenue-blueprint-factory.md"
    if legacy.is_file():
        text = legacy.read_text(encoding="utf-8")
        if "not the canonical end-to-end workflow" not in text and "compatibility" not in text.lower():
            fail(errors, "Legacy revenue-blueprint-factory.md must remain an explicit compatibility reference")


def main() -> int:
    errors: list[str] = []

    for relative in REQUIRED_FILES:
        if not (ROOT / relative).is_file():
            fail(errors, f"Missing required file: {relative}")

    version_path = ROOT / "VERSION"
    if version_path.is_file():
        version = version_path.read_text(encoding="utf-8").strip()
        if not re.fullmatch(r"\d+\.\d+\.\d+", version):
            fail(errors, f"VERSION is not SemVer: {version!r}")

    for folder_name in FIRST_CLASS_FOLDERS:
        folder = ROOT / folder_name
        if not folder.is_dir():
            fail(errors, f"Missing first-class folder: {folder_name}/")
            continue
        if not (folder / "README.md").is_file():
            fail(errors, f"First-class folder must explain itself: {folder_name}/README.md")

    for root_name in ["businesses", "setups", "agents", "software"]:
        require_unit_readmes(errors, root_name)

    skills_root = ROOT / "skills"
    if skills_root.is_dir():
        for skill in sorted(path for path in skills_root.iterdir() if path.is_dir()):
            if not (skill / "SKILL.md").is_file():
                fail(errors, f"Skill is missing SKILL.md: {skill.relative_to(ROOT)}")
            if not (skill / "agents" / "openai.yaml").is_file():
                fail(errors, f"Skill is missing agents/openai.yaml: {skill.relative_to(ROOT)}")

    forbidden_names = {".env", "id_rsa", "id_ed25519"}
    forbidden_suffixes = {".pem", ".p12", ".pfx"}
    for path in ROOT.rglob("*"):
        if ".git" in path.parts or not path.is_file():
            continue
        relative = path.relative_to(ROOT)
        if path.name in forbidden_names or path.suffix.lower() in forbidden_suffixes:
            fail(errors, f"Potential secret/private-key file must not be tracked: {relative}")
        if "%" in path.name:
            fail(errors, f"Percent-encoded/unclean filename: {relative}")

    validate_v3_writeback_contract(errors)

    if errors:
        print("DRF repository validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("DRF repository contracts: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
