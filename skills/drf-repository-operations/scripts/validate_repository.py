#!/usr/bin/env python3
"""Validate DRF skills-first repository contracts with no third-party dependencies."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]

REQUIRED_ROOT_FILES = ["README.md", "AGENTS.md", "VERSION", "CHANGELOG.md"]
REQUIRED_SKILLS = {
    "drf-opportunity-factory",
    "drf-recurring-intelligence",
    "drf-dashboard-operations",
    "drf-repository-operations",
}
RETIRED_ROOT_DIRS = {
    "knowledge",
    "workflows",
    "technical",
    "agents",
    "setups",
    "lab",
    "archive",
    "templates",
    "scripts",
}
REQUIRED_DOMAIN_DIRS = {"businesses", "research", "skills", "software", "assets", ".github"}


def fail(errors: list[str], message: str) -> None:
    errors.append(message)


def require_markers(errors: list[str], relative: str, markers: list[str]) -> None:
    path = ROOT / relative
    if not path.is_file():
        fail(errors, f"Missing required file: {relative}")
        return
    text = path.read_text(encoding="utf-8")
    for marker in markers:
        if marker not in text:
            fail(errors, f"{relative} is missing canonical marker: {marker}")


def validate_root(errors: list[str]) -> None:
    for relative in REQUIRED_ROOT_FILES:
        if not (ROOT / relative).is_file():
            fail(errors, f"Missing required root file: {relative}")

    version_path = ROOT / "VERSION"
    if version_path.is_file():
        version = version_path.read_text(encoding="utf-8").strip()
        if not re.fullmatch(r"\d+\.\d+\.\d+", version):
            fail(errors, f"VERSION is not SemVer: {version!r}")

    for dirname in REQUIRED_DOMAIN_DIRS:
        if not (ROOT / dirname).is_dir():
            fail(errors, f"Missing required domain/product directory: {dirname}/")

    for dirname in RETIRED_ROOT_DIRS:
        if (ROOT / dirname).exists():
            fail(errors, f"Retired global operating directory must not exist: {dirname}/")


def validate_skills(errors: list[str]) -> None:
    skills_root = ROOT / "skills"
    if not (skills_root / "README.md").is_file():
        fail(errors, "Missing skills/README.md capability index")
        return

    skill_dirs = {path.name for path in skills_root.iterdir() if path.is_dir()}
    missing = sorted(REQUIRED_SKILLS - skill_dirs)
    if missing:
        fail(errors, f"Missing canonical DRF Skills: {', '.join(missing)}")

    for skill_name in sorted(REQUIRED_SKILLS):
        skill = skills_root / skill_name
        skill_md = skill / "SKILL.md"
        if not skill_md.is_file():
            fail(errors, f"Skill is missing SKILL.md: skills/{skill_name}")
            continue
        text = skill_md.read_text(encoding="utf-8")
        if not text.startswith("---\n") or f"name: {skill_name}" not in text:
            fail(errors, f"Skill frontmatter/name is invalid: skills/{skill_name}/SKILL.md")
        if "description:" not in text[:1200]:
            fail(errors, f"Skill is missing description trigger metadata: skills/{skill_name}/SKILL.md")
        if not (skill / "agents" / "openai.yaml").is_file():
            fail(errors, f"Skill is missing agents/openai.yaml: skills/{skill_name}")

    require_markers(
        errors,
        "skills/README.md",
        [
            "Skills are the number-one operating interface",
            "drf-opportunity-factory",
            "drf-recurring-intelligence",
            "drf-dashboard-operations",
            "drf-repository-operations",
            "One reusable capability → one Skill owner",
        ],
    )

    require_markers(
        errors,
        "skills/drf-opportunity-factory/SKILL.md",
        ["Founder intake", "Layer 1", "Layer 2", "Layer 3", "V3", "Self-improvement rule"],
    )
    require_markers(
        errors,
        "skills/drf-recurring-intelligence/SKILL.md",
        ["Portfolio calibration", "Discovery run", "REFRESH-RUNS.md", "Scheduler independence"],
    )
    require_markers(
        errors,
        "skills/drf-dashboard-operations/SKILL.md",
        ["Dashboard Version 3 is the website synthesis", "Business truth first; dashboard last"],
    )
    require_markers(
        errors,
        "skills/drf-repository-operations/SKILL.md",
        ["Number-one rule — Skills first", "Do not create a new template", "scripts/validate_repository.py"],
    )


def validate_entrypoints(errors: list[str]) -> None:
    require_markers(
        errors,
        "AGENTS.md",
        [
            "NUMBER-ONE RULE — SKILLS FIRST",
            "skills/README.md",
            "skills/drf-opportunity-factory/SKILL.md",
            "skills/drf-recurring-intelligence/SKILL.md",
            "skills/drf-dashboard-operations/SKILL.md",
            "skills/drf-repository-operations/SKILL.md",
            "businesses/PORTFOLIO-V3.md",
            "businesses/V3-RECONCILIATIONS.md",
        ],
    )
    require_markers(
        errors,
        ".github/copilot-instructions.md",
        [
            "Skills are the operating interface",
            "skills/drf-opportunity-factory/SKILL.md",
            "skills/drf-recurring-intelligence/SKILL.md",
            "skills/drf-dashboard-operations/SKILL.md",
            "skills/drf-repository-operations/SKILL.md",
        ],
    )
    require_markers(
        errors,
        "README.md",
        ["skills-first operating system", "skills/README.md", "DRF Opportunity Factory"],
    )


def validate_v3_and_profiles(errors: list[str]) -> None:
    required = [
        "businesses/PORTFOLIO-V3.md",
        "businesses/V3-RECONCILIATIONS.md",
        "skills/drf-opportunity-factory/references/v3-writeback.md",
        "skills/drf-opportunity-factory/references/v3-closeout-checklist.md",
        "skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md",
        "skills/drf-recurring-intelligence/references/portfolio-intelligence-profile.md",
        "skills/drf-recurring-intelligence/references/business-blueprints-daily-profile.md",
        "skills/drf-recurring-intelligence/references/autonomous-ai-revenue-operations-profile.md",
    ]
    for relative in required:
        if not (ROOT / relative).is_file():
            fail(errors, f"Missing required skills-first/V3 artefact: {relative}")

    retired_profiles = [
        "research/recurring-intelligence/DRF-PORTFOLIO-INTELLIGENCE.md",
        "research/recurring-intelligence/AUTONOMOUS-AI-REVENUE-OPERATIONS.md",
        "businesses/business-blueprints/DAILY-INTELLIGENCE.md",
        "research/niches/_research-standard-v2.md",
        "research/niches/_research-standard-v3.md",
    ]
    for relative in retired_profiles:
        if (ROOT / relative).exists():
            fail(errors, f"Operating instruction/profile must live in a Skill, not domain data: {relative}")


def validate_ci(errors: list[str]) -> None:
    require_markers(
        errors,
        ".github/workflows/ci.yml",
        ["python3 skills/drf-repository-operations/scripts/validate_repository.py"],
    )


def validate_active_paths(errors: list[str]) -> None:
    active_files = [
        "AGENTS.md",
        "README.md",
        ".github/copilot-instructions.md",
        "skills/README.md",
        "businesses/README.md",
        "businesses/NICHES.md",
        "businesses/INVESTMENT-READINESS.md",
        "businesses/business-blueprints/README.md",
        "research/recurring-intelligence/README.md",
        "software/dashboard-v3/README.md",
        "index.html",
    ]
    forbidden_operational_paths = ["knowledge/", "workflows/drf-", "workflows/revenue-blueprint"]
    for relative in active_files:
        path = ROOT / relative
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        for marker in forbidden_operational_paths:
            if marker in text:
                fail(errors, f"Active operating file still points to retired global path {marker!r}: {relative}")


def validate_filenames_and_secrets(errors: list[str]) -> None:
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


def main() -> int:
    errors: list[str] = []
    validate_root(errors)
    validate_skills(errors)
    validate_entrypoints(errors)
    validate_v3_and_profiles(errors)
    validate_ci(errors)
    validate_active_paths(errors)
    validate_filenames_and_secrets(errors)

    if errors:
        print("DRF repository validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("DRF skills-first repository contracts: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
