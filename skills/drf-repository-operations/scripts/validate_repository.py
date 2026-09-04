#!/usr/bin/env python3
"""Validate DRF repository contracts with central Skill ownership."""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]

REQUIRED_ROOT_FILES = ["README.md", "AGENTS.md", "VERSION", "CHANGELOG.md"]
LOCAL_POINTER_SKILLS = {
    "drf-opportunity-factory": "https://github.com/tbhrc/skills/tree/main/drf-opportunity-factory",
    "drf-recurring-intelligence": "https://github.com/tbhrc/skills/tree/main/automations-drf-intelligence",
    "drf-dashboard-operations": "https://github.com/tbhrc/skills/tree/main/drf-dashboard-operations",
}
RETIRED_LOCAL_SKILLS = {"drf-repository-operations"}
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
            fail(errors, f"{relative} is missing required marker: {marker}")


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


def validate_skill_cutover(errors: list[str]) -> None:
    skills_root = ROOT / "skills"
    if not (skills_root / "README.md").is_file():
        fail(errors, "Missing skills/README.md central-canon router")
        return

    require_markers(
        errors,
        "skills/README.md",
        [
            "tbhrc/skills` is the sole editable reusable Skill canon",
            "drf-opportunity-factory",
            "automations-drf-intelligence",
            "drf-dashboard-operations",
            "drf-business-development",
            "github-agent-workflow",
            "One reusable capability → one Skill owner",
        ],
    )

    for skill_name, central_url in sorted(LOCAL_POINTER_SKILLS.items()):
        skill_md = skills_root / skill_name / "SKILL.md"
        if not skill_md.is_file():
            fail(errors, f"Missing compatibility pointer: skills/{skill_name}/SKILL.md")
            continue
        text = skill_md.read_text(encoding="utf-8")
        if "migration pointer" not in text.lower():
            fail(errors, f"Local Skill must be a migration pointer, not editable canon: skills/{skill_name}/SKILL.md")
        if central_url not in text:
            fail(errors, f"Local pointer does not route to central owner: skills/{skill_name}/SKILL.md")
        if "Do **not**" not in text and "Do not" not in text:
            fail(errors, f"Local pointer must prohibit local reusable-method maintenance: skills/{skill_name}/SKILL.md")

    for skill_name in sorted(RETIRED_LOCAL_SKILLS):
        skill_md = skills_root / skill_name / "SKILL.md"
        if not skill_md.is_file():
            fail(errors, f"Missing retired compatibility pointer: skills/{skill_name}/SKILL.md")
            continue
        text = skill_md.read_text(encoding="utf-8")
        if "retired" not in text.lower():
            fail(errors, f"Retired local Skill is not marked retired: skills/{skill_name}/SKILL.md")
        for marker in ["github-agent-workflow", "github-skill-builder", "github-power-user"]:
            if marker not in text:
                fail(errors, f"Retired repository-operations pointer is missing central owner {marker}")


def validate_entrypoints(errors: list[str]) -> None:
    require_markers(
        errors,
        "AGENTS.md",
        [
            "NUMBER-ONE RULE — SKILLS FIRST",
            "skills/README.md",
            "businesses/PORTFOLIO-V3.md",
            "businesses/V3-RECONCILIATIONS.md",
        ],
    )
    require_markers(
        errors,
        ".github/copilot-instructions.md",
        [
            "tbhrc/skills` is the sole editable reusable Skill canon",
            "drf-opportunity-factory",
            "automations-drf-intelligence",
            "drf-dashboard-operations",
            "github-agent-workflow",
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
            fail(errors, f"Missing required DRF domain/product compatibility artefact: {relative}")

    retired_profiles = [
        "research/recurring-intelligence/DRF-PORTFOLIO-INTELLIGENCE.md",
        "research/recurring-intelligence/AUTONOMOUS-AI-REVENUE-OPERATIONS.md",
        "businesses/business-blueprints/DAILY-INTELLIGENCE.md",
        "research/niches/_research-standard-v2.md",
        "research/niches/_research-standard-v3.md",
    ]
    for relative in retired_profiles:
        if (ROOT / relative).exists():
            fail(errors, f"Operating instruction/profile must not reappear in domain data: {relative}")


def validate_canonical_register_paths(errors: list[str]) -> None:
    """Keep current business registers pointed at compatible DRF paths during cutover."""
    require_markers(
        errors,
        "businesses/OPPORTUNITIES.md",
        [
            "skills/drf-opportunity-factory/references/business-opportunity-scoring.md",
            "skills/drf-opportunity-factory/references/niche-scoring.md",
        ],
    )
    require_markers(
        errors,
        "businesses/NICHES.md",
        [
            "skills/drf-opportunity-factory/references/niche-scoring.md",
            "skills/drf-opportunity-factory/references/niche-research-standard.md",
        ],
    )
    require_markers(
        errors,
        "businesses/INVESTMENT-READINESS.md",
        [
            "skills/drf-opportunity-factory/SKILL.md",
            "skills/drf-opportunity-factory/references/commercial-underwriting-proof-capital.md",
            "skills/drf-opportunity-factory/references/v3-writeback.md",
        ],
    )
    require_markers(
        errors,
        "businesses/PORTFOLIO-V3.md",
        ["skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md"],
    )
    require_markers(
        errors,
        "businesses/V3-RECONCILIATIONS.md",
        ["skills/drf-opportunity-factory/references/v3-writeback.md"],
    )


def validate_ci(errors: list[str]) -> None:
    require_markers(
        errors,
        ".github/workflows/ci.yml",
        [
            "python3 skills/drf-repository-operations/scripts/validate_repository.py",
            "python3 skills/drf-repository-operations/scripts/validate_skill_references.py",
        ],
    )


def validate_active_paths(errors: list[str]) -> None:
    active_routers = [
        "AGENTS.md",
        "README.md",
        ".github/copilot-instructions.md",
        "skills/README.md",
        "businesses/README.md",
        "businesses/business-blueprints/README.md",
        "research/recurring-intelligence/README.md",
        "software/dashboard-v3/README.md",
    ]
    forbidden_operational_paths = ["knowledge/", "workflows/drf-", "workflows/revenue-blueprint"]
    for relative in active_routers:
        path = ROOT / relative
        if not path.is_file():
            continue
        text = path.read_text(encoding="utf-8")
        for marker in forbidden_operational_paths:
            if marker in text:
                fail(errors, f"Active operating router still points to retired global path {marker!r}: {relative}")

    require_markers(
        errors,
        "assets/v3-dashboard-proof-counts.js",
        [
            "rewriteSkillSourceLinks",
            "/skills/drf-opportunity-factory/SKILL.md",
            "/skills/drf-recurring-intelligence/SKILL.md",
            "/skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md",
        ],
    )


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
    validate_skill_cutover(errors)
    validate_entrypoints(errors)
    validate_v3_and_profiles(errors)
    validate_canonical_register_paths(errors)
    validate_ci(errors)
    validate_active_paths(errors)
    validate_filenames_and_secrets(errors)

    if errors:
        print("DRF repository validation failed:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print("DRF central-Skill ownership contracts: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
