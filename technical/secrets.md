# DRF Secret References

Secret **values must never be committed**. Configure them in GitHub repository/organisation secrets or the appropriate external secret manager.

## Reused from DSF

| Secret name | Purpose |
|---|---|
| `AGENT_DISPATCH_TOKEN` | GitHub token used by the agent-dispatch workflow for supported coding/agent assignment operations. |
| `GEMINI_API_KEY` | Gemini API credential used only by the Gemini GitHub Actions executor. |
| `PROJECT_MANAGEMENT_TOKEN` | GitHub token with Projects V2 read/write access for DRF Project setup and lifecycle updates. |

These names are copied from the proven DSF automation contract. This repository contains no values.

## Rule for new integrations

Add a secret only when a real DRF business/setup requires it. Document only:

- secret name;
- owning system;
- purpose;
- required scope;
- rotation/owner notes when useful.

Never paste the credential into Issues, PRs, logs, Markdown, code or chat-derived repository files.
