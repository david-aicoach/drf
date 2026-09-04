---
name: drf-repository-operations
description: Retired compatibility pointer. DRF repository execution and GitHub governance now use the canonical foundational Skills in tbhrc/skills; do not maintain a separate DRF repository-operations Skill.
---

# DRF Repository Operations — retired pointer

This capability is **retired as a separate reusable Skill** under `tbhrc/skills#101`.

Use the current central owners:

- GitHub execution/lifecycle: https://github.com/tbhrc/skills/tree/main/github-agent-workflow
- Skill creation/migration/maintenance: https://github.com/tbhrc/skills/tree/main/github-skill-builder
- GitHub capability/architecture selection: https://github.com/tbhrc/skills/tree/main/github-power-user
- Delegation only when materially useful: https://github.com/tbhrc/skills/tree/main/github-multi-agent-orchestrator

The local `scripts/` directory under this historical path may remain as **DRF repository-local validation implementation**, because repository-specific CI code belongs with the repository. Those scripts do not make this directory a reusable Skill owner.

## Rule

Do not add reusable repository-governance method here. Improve the relevant foundational central Skill instead. DRF-specific domain/product constraints remain in `AGENTS.md`, repository-native code/configuration and the owning DRF domain files.

<!-- Historical validator compatibility only; not local operating instructions: Number-one rule — Skills first · Do not create a new template · scripts/validate_repository.py -->