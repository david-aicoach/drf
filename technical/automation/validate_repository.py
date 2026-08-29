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


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def require_unit_readmes(errors: list[str], root_name: str) -> None:
    root = ROOT / root_name
    if not root.is_dir():
        return
    for unit in sorted(path for path in root.iterdir() if path.is_dir()):
        if not (unit / "README.md").is_file():
            fail(errors, f"Unit is missing README.md: {unit.relative_to(ROOT)}")


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

    if errors:
        print("DRF repository validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("DRF repository contracts: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
