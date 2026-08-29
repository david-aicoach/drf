# CCO Integration Readiness Checklist

**Role:** CCO — Chief Commercial Officer  
**Purpose:** Maintain one canonical view of CCO integrations across operating surfaces, including exact authenticated account/sender identity where exposed.

## Status key

- ✅ **Verified** — harmless read/search/profile action succeeded and identity is sufficiently known.
- 🟨 **Partial** — connector exists, but access, identity or required commercial capability is incomplete.
- ❌ **Missing** — no direct operating route is available.
- ⏳ **Pending** — surface has not yet been tested.

---

# 1. Unified cross-surface matrix

Each surface column contains both readiness and the authenticated identity where known.

| Integration | **ChatGPT Web / CCO** | **ChatGPT Desktop / Codex** | **Hermes** | **Claude** | CCO requirement / note |
|---|---|---|---|---|---|
| **GoHighLevel** | 🟨 Partial — read works; location identity unresolved | 🟨 Partial — no Hermes connector/API; browser route unavailable (dependency/auth prompt); location unresolved | ⏳ Pending | ❌ Missing — no MCP/CLI; browser-only, untested | Primary commercial spine; require exact location + bounded writes |
| **Outlook Email** | ✅ `careers@talentbridgedubai.com` | ❌ Missing — no Hermes email/Microsoft 365 connector; sender not exposed | ⏳ Pending | ✅ `info@talentbridgedubai.com` (differs from Web/Codex) | Sender identity is critical |
| **Outlook Calendar** | ✅ `info@talentbridgedubai.com` | ❌ Missing — no Hermes calendar connector; identity not exposed | ⏳ Pending | ✅ `info@talentbridgedubai.com` | Calendar identity differs from Outlook Email |
| **LinkedIn** | ❌ No authenticated operating route | 🟨 Partial — public web research only; no authenticated route or messaging | ⏳ Pending | 🟨 Research-read via `agent-reach`/browser; no auth action, no messaging | Research/relationship intelligence; no unauthorised bot messaging |
| **WhatsApp Business** | ❌ Not connected | 🟨 Partial — Hermes WhatsApp transport is configured, but Business account identity/API is not exposed; no Business read/write test | ⏳ Pending | ❌ Not connected | Prefer official WhatsApp Business through HighLevel |
| **Stripe** | 🟨 CLI/infrastructure known; no bounded action here | ❌ Missing — local stripe CLI absent; no Stripe MCP/API; account not exposed | ⏳ Pending | ❌ Missing — no MCP, no `stripe` CLI | Payment links, invoices, subscriptions, payment status |
| **Web research** | ✅ Native ChatGPT | ✅ Verified — native web search/extract read tested; no account | ⏳ Pending | ✅ Native Claude (WebSearch / WebFetch) | Prospect/company/competitor/buying-signal research |
| **Lead enrichment** | ❌ None | 🟨 Partial — manual web research route; no enrichment provider/API | ⏳ Pending | 🟨 Manual — agent/web research; no provider API | Add only if existing data proves insufficient |
| **OneDrive / SharePoint** | ✅ `info@talentbridgedubai.com` | ❌ Missing — no MCP/CLI/API; browser route unavailable for authenticated test | ⏳ Pending | ✅ `info@talentbridgedubai.com` (`tbhrc-my.sharepoint.com`) | Commercial documents/source files |
| **FolderDesk** | ✅ Connected; identity not exposed | ✅ Verified — local file read access tested against FolderDesk canon; identity not exposed | ⏳ Pending | ✅ FD0 connector v3.34 | Durable coordination where required |
| **GitHub / DRF** | ✅ `tbhrc` / `talentbridgedubai@gmail.com` | ✅ Verified — `gh` CLI read tested as `tbhrc` (GitHub ID `239958985`); email not exposed | ⏳ Pending | ✅ `tbhrc` (write exercised on this Issue) | Canonical DRF control plane |
| **ATS / recruitment database** | 🟨 Existing system; no direct connector | ❌ Missing — no ATS connector/CLI/API; no authenticated read | ⏳ Pending | 🟨 "ATS" sheet readable via Drive; no connector | Use only where commercially relevant |
| **GulfTalent** | 🟨 Existing account; no direct connector | 🟨 Partial — browser/manual route only; browser dependency unavailable; identity not exposed | ⏳ Pending | 🟨 Account exists; browser-only | Browser/manual route if useful |
| **Google Contacts** | ✅ `talentbridgedubai@gmail.com` | ❌ Missing — no Google Contacts connector/API; identity not exposed | ⏳ Pending | 🟨 `google_workspace` MCP not authenticated | Warm relationship/contact resolution |
| **Canva** | ✅ Connected; identity not exposed | ❌ Missing — no Canva MCP/API/CLI; browser route unavailable | ⏳ Pending | ❌ No connector | Sales collateral |
| **E-signature / contracts** | ❌ No dedicated provider | ❌ Missing — no provider connector/API/CLI | ⏳ Pending | ❌ None | Prefer HighLevel contracts if sufficient |
| **Calling / voice** | ❌ No direct telephony route | ❌ Missing — no telephony connector/API/CLI | ⏳ Pending | ❌ None | Prefer HighLevel telephony or one provider |
| **Meeting intelligence** | 🟨 Teams `info@talentbridgedubai.com` | 🟨 Partial — no Teams/meeting connector; native web research only; transcription not exposed | ⏳ Pending | 🟨 Teams `info@talentbridgedubai.com`; transcription unproven | Read works; transcription automation unproven |
| **Paid advertising** | ❌ No ads-platform control | ❌ Missing — no ads-platform connector/API/CLI | ⏳ Pending | ❌ None | Phase 2 only after outbound conversion is proven |
| **Website / landing pages** | 🟨 HubSpot `talentbridgedubai@gmail.com` | ✅ Verified — public website read tested via web search/extract; no authenticated CMS write route | ⏳ Pending | 🟨 HubSpot landing-page read+write available (portal `148333343`) | HighLevel preferred; HubSpot page access needs reauthorisation |
| **Commercial analytics** | 🟨 Multiple readable systems | 🟨 Partial — public web plus local/runtime diagnostics; no connected commercial analytics system | ⏳ Pending | 🟨 HubSpot CRM + DRF readable; no unified layer | Start with HighLevel + DRF |
| **Gmail** | ✅ `talentbridgedubai@gmail.com` | ❌ Missing — no Gmail connector/CLI/API; account not exposed | ⏳ Pending | ✅ `talentbridgedubai@gmail.com` (dedicated Gmail MCP) | Alternative sender mailbox |
| **Google Calendar** | ✅ `implementai.ae@gmail.com` | ❌ Missing — no Google Calendar connector/API; account not exposed | ⏳ Pending | 🟨 `google_workspace` MCP not authenticated | iMPLEMENTAi calendar identity |
| **Google Drive** | ✅ `talentbridgedubai@gmail.com` | ❌ Missing — no Drive connector/CLI/API; account not exposed | ⏳ Pending | ✅ `talentbridgedubai@gmail.com` (dedicated Drive MCP) | Google file access |
| **Microsoft Teams** | ✅ `info@talentbridgedubai.com` | ❌ Missing — no Teams connector/API; account not exposed | ⏳ Pending | ✅ `info@talentbridgedubai.com` | Messaging/search/read |
| **HubSpot** | ✅ `talentbridgedubai@gmail.com` | ❌ Missing — no HubSpot MCP/API/CLI; account/portal not exposed | ⏳ Pending | ✅ Portal `148333343` (`app-eu1`) / `talentbridgedubai@gmail.com`; CRM writes available | Secondary CRM; multiple writes available |
| **Zoho Books** | 🟨 Connected; organisation identity unresolved | ❌ Missing — no Zoho Books connector/API/CLI; organisation not exposed | ⏳ Pending | 🟨 Connected; organisation identity unresolved | Block financial writes until identity confirmed |
| **Asana** | ✅ `talentbridgedubai@gmail.com` | ❌ Missing — no Asana connector/API/CLI; account not exposed | ⏳ Pending | ❌ No connector | Available but not required for DRF control |
| **Hindsight Memory** | ✅ Shared FolderDesk memory | ✅ Verified — Hermes memory context/provider is available; shared FolderDesk identity | ⏳ Pending | ✅ Shared bank `folderdesk` | Continuity layer only |

**Slack is intentionally excluded. It is not used or required.**

---

# 2. Surface — ChatGPT Web / CCO

| Status | Integration | Authenticated account / identity | Read test | Write / send status |
|---|---|---|---|---|
| 🟨 | GoHighLevel | Location/sub-account identity not exposed | ✅ Contacts **0**; opportunities **0** | ❌ Current connector exposes only search/fetch |
| ✅ | Outlook Email | `careers@talentbridgedubai.com` | ✅ | ✅ Send/reply/forward/draft exposed; no live send exercised |
| ✅ | Outlook Calendar | `info@talentbridgedubai.com` | ✅ | ✅ Writes exposed; not exercised |
| ❌ | LinkedIn | None | Public web only | No approved authenticated action |
| ❌ | WhatsApp Business | None | — | — |
| 🟨 | Stripe | Identity not exposed | Not directly tested | No bounded Stripe action exposed |
| ✅ | Web research | Native ChatGPT | ✅ | N/A |
| ❌ | Lead enrichment | None | — | — |
| ✅ | OneDrive / SharePoint | `info@talentbridgedubai.com` | ✅ | ✅ File writes exposed |
| ✅ | FolderDesk | Identity not exposed | ✅ | ✅ Bounded actions available |
| ✅ | GitHub / DRF | `tbhrc` / `talentbridgedubai@gmail.com` | ✅ | ✅ Issues + file writes proven |
| 🟨 | ATS | Existing system | No connector test | No direct connector |
| 🟨 | GulfTalent | Existing account | No connector test | No direct connector |
| ✅ | Google Contacts | `talentbridgedubai@gmail.com` | ✅ | Read-focused |
| ✅ | Canva | Identity not exposed | ✅ | Create/edit exposed; not exercised |
| ❌ | E-signature / contracts | None | — | — |
| ❌ | Calling / voice | None | — | — |
| 🟨 | Meeting intelligence | Teams `info@talentbridgedubai.com` | ✅ | Messaging available; transcription unproven |
| ❌ | Paid advertising | None | — | — |
| 🟨 | Website / landing pages | HubSpot `talentbridgedubai@gmail.com` | ✅ | Landing pages require reauthorisation |
| 🟨 | Commercial analytics | Multiple systems | ✅ | No unified telemetry layer |
| ✅ | Gmail | `talentbridgedubai@gmail.com` | ✅ | ✅ Send/draft exposed; no live send exercised |
| ✅ | Google Calendar | `implementai.ae@gmail.com` | ✅ | ✅ Writes exposed; not exercised |
| ✅ | Google Drive | `talentbridgedubai@gmail.com` | ✅ | ✅ Writes exposed; not exercised |
| ✅ | Microsoft Teams | `info@talentbridgedubai.com` | ✅ | ✅ Messaging/reply exposed; not exercised |
| ✅ | HubSpot | `talentbridgedubai@gmail.com` | ✅ | ✅ CRM writes report available |
| 🟨 | Zoho Books | Organisation identity unresolved | Connector available | Financial writes blocked pending identity |
| ✅ | Asana | `talentbridgedubai@gmail.com` | ✅ | Task/project writes exposed |
| ✅ | Hindsight Memory | Shared FolderDesk memory | ✅ | Retain available |

---

# 3. Surface — ChatGPT Desktop / Codex

**Tested 2026-08-29.** All reads below were harmless. “Write exposed” means a tool is available; no customer-facing, CRM, financial, or other external write was exercised for this matrix. The documentation and Issue #5 update are the only repository writes in this work.

| Integration | Status | Authenticated account / identity | Read capability actually tested | Write/send exposed; exercised? | MCP, CLI or local-only capability |
|---|---|---|---|---|---|
| GoHighLevel | 🟨 Partial | Connected account and location/sub-account **not exposed** | HighLevel MCP contacts query completed: `0` contacts | No CRM mutation tool exposed (only `search`/`fetch`); **not exercised** | HighLevel MCP only |
| Outlook Email | ✅ Verified | Careers & Job Portal of Talent Bridge — `careers@talentbridgedubai.com` (user `3ea288bd-56b0-4f3d-8487-56e772c5cbf3`) | Profile and one recent inbox message read | Draft/reply/forward/schedule/send exposed; **not exercised** | Outlook Email MCP |
| Outlook Calendar | ✅ Verified | Talent Bridge Dubai — `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile plus editable default calendar list | Create/update/delete/respond exposed; **not exercised** | Outlook Calendar MCP |
| LinkedIn | ❌ Missing | None exposed | No authenticated route tested | No direct write route | No connector, MCP, or local CLI found |
| WhatsApp Business | ❌ Missing | None exposed | No authenticated route tested | No direct send route | No connector, MCP, or local CLI found |
| Stripe | ❌ Missing | None exposed | No authenticated account read: local `stripe` CLI absent and no connector found | No bounded payment/invoice write route | No Stripe MCP or local CLI found |
| Web research | ✅ Verified | Native Desktop/Codex; no account applicable | Native web-research route available | N/A | Native web tool |
| Lead enrichment | ❌ Missing | None exposed | No dedicated enrichment read route | No write route | No dedicated connector found |
| OneDrive / SharePoint | ✅ Verified | Talent Bridge Dubai — `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile plus recent-document listing read | Folder/file create, upload, update, move and share exposed; **not exercised** | SharePoint/OneDrive MCP |
| FolderDesk | 🟨 Partial | Identity not exposed | FD0 health succeeded; resolve for “DRF Revenue Factory” returned not found | Task/file/brain writes exposed; **not exercised** | FD0-FolderDesk MCP; no local `fd0` CLI found |
| GitHub / DRF | ✅ Verified | Talent Bridge Dubai — `tbhrc` / `talentbridgedubai@gmail.com` (GitHub ID `239958985`) | Profile plus `tbhrc/drf` Issue #5 fetched | Issues/comments/file/commit tools exposed; Issue #5 update and this documentation are the only exercised repository writes | GitHub MCP and authenticated local `gh` CLI |
| ATS / recruitment database | 🟨 Partial | Existing ATS data visible through Google Drive, but no ATS identity/connector | No direct ATS read available | No direct ATS write route | Google Drive is indirect only |
| GulfTalent | 🟨 Partial | Existing account noted, but no identity exposed here | No direct authenticated read route | No direct write route | Browser/manual route only; not authenticated-tested |
| Google Contacts | ✅ Verified | Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com` (Google ID `111632185774207007883`) | Profile plus contact search read | Read-focused connector; no contact mutation exposed | Google Contacts MCP |
| Canva | ✅ Verified | Connected; identity not exposed | Brand-kit listing succeeded | Design/folder/edit tools exposed; **not exercised** | Canva MCP |
| E-signature / contracts | ❌ Missing | None exposed | No dedicated provider read route | No contract write/send route | No connector found |
| Calling / voice | ❌ Missing | None exposed | No direct telephony read route | No direct calling route | No connector found |
| Meeting intelligence | ✅ Verified | Teams: Talent Bridge Dubai — `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Teams profile plus one chat listing read | Chat/channel/message tools exposed; **not exercised**. Transcript retrieval remains untested. | Teams MCP |
| Paid advertising | ❌ Missing | None exposed | No ads-platform read route | No ads write route | No connector found |
| Website / landing pages | 🟨 Partial | HubSpot: `talentbridgedubai@gmail.com`, portal `148333343` | HubSpot identity/portal capability read | Landing-page read/write require reauthorisation; **not exercised** | HubSpot MCP |
| Commercial analytics | 🟨 Partial | HubSpot portal `148333343` | HubSpot organisation/account read succeeded | No unified analytics write; **not exercised** | HubSpot MCP; HighLevel location unresolved |
| Gmail | ✅ Verified | Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com` (Google ID `111632185774207007883`) | Profile plus inbox search read | Draft/send/forward/archive/label exposed; **not exercised** | Gmail MCP |
| Google Calendar | ✅ Verified | iMPLEMENTAi — `implementai.ae@gmail.com` (Google ID `108330259693249737150`); primary calendar confirmed | Profile plus calendar list read | Create/update/delete/respond exposed; **not exercised** | Google Calendar MCP |
| Google Drive | ✅ Verified | Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com` (Google ID `111632185774207007883`) | Profile plus recent-document listing read | Create/copy/update/upload/share exposed; **not exercised** | Google Drive MCP |
| Microsoft Teams | ✅ Verified | Talent Bridge Dubai — `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile plus chat list read | Chat/channel/message/reply exposed; **not exercised** | Teams MCP |
| HubSpot | ✅ Verified | Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com`; owner/user `91288471`, portal `148333343` | User and organisation/capability reads succeeded | CRM writes available for contacts, companies, deals, tasks, tickets, calls, meetings, notes, products and email; **not exercised** | HubSpot MCP |
| Zoho Books | 🟨 Partial | Organisation identity not exposed | No safe organisation-scoped read without organisation ID | Finance create/update/send tools registered; **not exercised and blocked** pending identity | Zoho Books MCP only |
| Asana | ✅ Verified | Talent Bridge — `talentbridgedubai@gmail.com`; user `1214255580616926`, workspace `1214255580616938` | Profile plus assigned-task listing read | Project/task/comment/update exposed; **not exercised** | Asana MCP |
| Hindsight Memory | ✅ Verified | Shared FolderDesk memory; user identity not exposed | Document listing queried successfully | Retain/update/directive exposed; **not exercised** | Hindsight-Memory MCP |

---

# 4. Surface — Hermes

**Tested 2026-08-29.** Hermes was tested from the native macOS runtime with one harmless narrow read per available route. No customer-facing, CRM, messaging, financial or external write was exercised. The browser route could not be authenticated-tested because Browser Use required macOS remote-debugging approval and then failed on a missing `oci` dependency; this is recorded as an access limitation, not as evidence of an authenticated account.

**Hermes runtime evidence:**

```text
Hermes local runtime → GitHub / DRF → authenticated `gh` CLI → `tbhrc` (GitHub ID 239958985; email not exposed)
Hermes local runtime → FolderDesk → local filesystem → /Users/david/FolderDesk-OS (canon read tested)
Hermes local runtime → Web research → native web search + web extract (public Talent Bridge page read)
Hermes local runtime → Hindsight Memory → holographic provider / shared FolderDesk memory context
Hermes local runtime → WhatsApp transport → configured gateway, Business account identity not exposed
Hermes local runtime → all other listed CCO connectors → no MCP servers configured; no dedicated CLI/API route found
```

| Integration | Status | Authenticated account / identity | Read capability actually tested | Write/send exposed; exercised? | API, MCP, CLI, browser or local access |
|---|---|---|---|---|---|
| GoHighLevel | 🟨 Partial | None exposed; location/sub-account unresolved | No authenticated read. Browser route attempted but blocked by Browser Use/macOS debugging approval and missing `oci` dependency | No CRM write route exposed; **not exercised** | Browser tooling present but not operationally authenticated; no MCP/CLI/API |
| Outlook Email | ❌ Missing | None exposed | No email read route | No send/write route; **not exercised** | No Email/Microsoft 365 MCP, CLI or API |
| Outlook Calendar | ❌ Missing | None exposed | No calendar read route | No calendar write route; **not exercised** | No Calendar/Microsoft 365 MCP, CLI or API |
| LinkedIn | 🟨 Partial | None; public identity only | Public web research route available; no authenticated LinkedIn read | No authenticated messaging/write; **not exercised** | Native web search/extract; browser route not authenticated-tested |
| WhatsApp Business | 🟨 Partial | Hermes WhatsApp gateway is configured, but Business account/sender identity is not exposed | Gateway transport configuration/status read; no WhatsApp Business API conversation/profile read | No Business send/write route exercised; **not exercised** | Hermes WhatsApp gateway transport only; no Business MCP/API/CLI |
| Stripe | ❌ Missing | None exposed | No account read; local `stripe` CLI absent | No payment/invoice/subscription write route; **not exercised** | No Stripe MCP/API/CLI; browser route not authenticated-tested |
| Web research | ✅ Verified | No account applicable | `web_search` and `web_extract` read tested against Talent Bridge public contact page | N/A | Native Hermes web tools |
| Lead enrichment | 🟨 Partial | None | Manual public-web research only; no provider lookup | No write route; **not exercised** | Native web tools; no enrichment API/MCP/CLI |
| OneDrive / SharePoint | ❌ Missing | None exposed | No authenticated read route | No file write/send route; **not exercised** | No MCP/CLI/API; browser route not authenticated-tested |
| FolderDesk | ✅ Verified | Local desk `/Users/david/FolderDesk-OS`; user identity not exposed | Local `read_file` read of `AGENTS.md` and FolderDesk canon succeeded | File edits available through Hermes tools; **not exercised on CCO records** | Native local filesystem/file tools; no FD0 MCP configured |
| GitHub / DRF | ✅ Verified | `tbhrc`, GitHub ID `239958985`; email not exposed | `gh auth status`, `gh api user`, repository metadata and Issue #5 reads succeeded | Issue/file/comment writes exposed through `gh`; **not exercised in this Hermes test** | Authenticated local `gh` CLI; no GitHub MCP configured |
| ATS / recruitment database | ❌ Missing | None exposed | No authenticated ATS read | No ATS write route; **not exercised** | No ATS MCP/CLI/API; browser route not authenticated-tested |
| GulfTalent | 🟨 Partial | Existing account not exposed | No authenticated read; only possible browser/manual route | No write route; **not exercised** | Browser tooling present but blocked before authenticated test |
| Google Contacts | ❌ Missing | None exposed | No contacts read route | No contact write route; **not exercised** | No Google MCP/CLI/API |
| Canva | ❌ Missing | None exposed | No design/account read route | No design write route; **not exercised** | No Canva MCP/CLI/API; browser route not authenticated-tested |
| E-signature / contracts | ❌ Missing | None exposed | No provider read route | No contract/send route; **not exercised** | No connector/API/CLI |
| Calling / voice | ❌ Missing | None exposed | No telephony read route | No calling route; **not exercised** | No telephony connector/API/CLI |
| Meeting intelligence | 🟨 Partial | None exposed | No Teams/transcript read route; public web only | No meeting-message/transcription write route; **not exercised** | Native web tools only; no Teams/meeting MCP |
| Paid advertising | ❌ Missing | None exposed | No ads-platform read route | No ads write route; **not exercised** | No ads MCP/API/CLI |
| Website / landing pages | ✅ Verified | Public Talent Bridge website; CMS identity not exposed | Public contact page read/extracted successfully; Dubai address and `info@talentbridgedubai.com` visible | No authenticated CMS write route; **not exercised** | Native web search/extract; no CMS MCP/API/CLI |
| Commercial analytics | 🟨 Partial | No connected commercial account exposed | Hermes runtime/health diagnostics and public-site read available; no CRM/payment analytics read | No unified analytics write; **not exercised** | Local CLI + web tools; no analytics MCP/API |
| Gmail | ❌ Missing | None exposed | No Gmail read route | No send/write route; **not exercised** | No Gmail MCP/CLI/API |
| Google Calendar | ❌ Missing | None exposed | No calendar read route | No calendar write route; **not exercised** | No Google Calendar MCP/CLI/API |
| Google Drive | ❌ Missing | None exposed | No Drive read route | No Drive write route; **not exercised** | No Drive MCP/CLI/API |
| Microsoft Teams | ❌ Missing | None exposed | No Teams read route | No Teams message/write route; **not exercised** | No Teams MCP/CLI/API |
| HubSpot | ❌ Missing | None exposed | No HubSpot account/CRM read route | No CRM write route; **not exercised** | No HubSpot MCP/CLI/API |
| Zoho Books | ❌ Missing | None exposed | No organisation/account read route | No financial write/send route; **not exercised** | No Zoho Books MCP/CLI/API |
| Asana | ❌ Missing | None exposed | No Asana read route | No task/project write route; **not exercised** | No Asana MCP/CLI/API |
| Hindsight Memory | ✅ Verified | Shared FolderDesk memory; no separate account identity exposed | Hermes memory context loaded; doctor reports holographic provider active | Memory retain/update capability exposed by Hermes; **not exercised for CCO data** | Native Hermes memory tool/provider; no external MCP configured |

## Hermes-only autonomous and scheduled capability

- ✅ **Native cron scheduler:** two active scheduled jobs were verified with `hermes cron list --all` (`daily-model-reminder` and `brain-approve-daily`). Hermes exposes recurring schedules and script-only (`no-agent`) delivery.
- ✅ **Autonomous runtime/tool surface:** local terminal, filesystem, web, browser, code execution, delegation, memory and cron toolsets are enabled in the CLI/runtime configuration.
- ⚠️ **Not a CCO integration:** no Hermes cron job currently monitors GoHighLevel, Stripe, WhatsApp Business, LinkedIn, or other commercial systems. No external CCO automation write was attempted.

# 5. Surface — Claude

**Tested 2026-08-29 (Claude Code / LocalStream).** All reads below were harmless. "Write exposed" means a tool is available; no customer-facing, CRM, financial or other external write was exercised. The documentation and Issue #5 update are the only repository writes in this work. Claude reaches CCO integrations through dedicated MCP servers, a native FD0 connector, local CLIs (`gh`, `composio`) and browser-automation surfaces. No GoHighLevel, Stripe, WhatsApp, LinkedIn, Canva or Asana connector exists on this surface; Google Calendar/Contacts are only reachable via the `google_workspace` MCP, which is **not authenticated** here.

**Authenticated identities established (harmless reads):**

```text
Claude → Microsoft 365 MCP (Outlook mail+calendar, OneDrive/SharePoint, Teams) → info@talentbridgedubai.com (user 294d2f39-246b-4758-84d2-6749823581b7)
Claude → Gmail MCP (dedicated)                                                 → talentbridgedubai@gmail.com
Claude → Google Drive MCP (dedicated)                                          → talentbridgedubai@gmail.com
Claude → google_workspace MCP (Calendar, Contacts, Docs)                       → NOT AUTHENTICATED (OAuth consent required)
Claude → HubSpot MCP                                                           → portal 148333343 (app-eu1), owner talentbridgedubai@gmail.com (user 91288471)
Claude → GitHub CLI (gh)                                                       → tbhrc  (scopes: repo, workflow, project, gist, read:org, delete_repo)
Claude → FolderDesk FD0 connector                                             → v3.34, connected
Claude → Hindsight memory MCP                                                  → bank folderdesk
Claude → Composio CLI                                                          → talentbridgedubai@gmail.com / talentbridgedubai_workspace (broker; gmail + outlook connections active, github expired; not wired to CCO apps)
```

| Integration | Status | Authenticated account / identity | Read capability actually tested | Write/send exposed; exercised? | MCP, CLI, browser or API capability |
|---|---|---|---|---|---|
| GoHighLevel | ❌ Missing | None on Claude surface | No connector/CLI; nothing tested | No CRM write route; **not exercised** | No MCP/CLI. Only route is browser automation to `app.gohighlevel.com` (untested). No OAuth/MCP location identity. |
| Outlook Email | ✅ Verified | `info@talentbridgedubai.com` (Microsoft 365 MCP, user `294d2f39-…`) — **differs from ChatGPT Web and Codex, both `careers@talentbridgedubai.com`** | `get_me` + mailbox thread search | Send/reply/reply-all/forward/draft exposed; **not exercised** | Microsoft 365 MCP |
| Outlook Calendar | ✅ Verified | `info@talentbridgedubai.com` (same MS account) | `outlook_calendar_search` returned events | Create/update/delete event + respond-to-invite exposed; **not exercised** | Microsoft 365 MCP |
| LinkedIn | 🟨 Partial (research only) | None (public data) | ✅ Public profile/company reads via `agent-reach` skill + browser | No authenticated write; no messaging | No connector/MCP/CLI for authenticated actions. Real-Chrome session may exist (untested). Research/relationship intelligence is reachable; bot messaging is not. |
| WhatsApp Business | ❌ Missing | None | No route tested | No send route | No connector/MCP/CLI |
| Stripe | ❌ Missing | None | Local `stripe` CLI absent; no MCP | No bounded payment/invoice write route | No Stripe MCP or CLI. Browser to `dashboard.stripe.com` only (untested). |
| Web research | ✅ Verified | Native Claude; no account applicable | WebSearch + WebFetch + `agent-reach` skill available | N/A | Native Claude tools |
| Lead enrichment | 🟨 Partial (manual) | None | ✅ Agent/web research enrichment via WebSearch + `agent-reach` + sub-agents | No write route | No enrichment-data-provider API. Manual/agent research enrichment is available; add a paid provider only if this proves insufficient. |
| OneDrive / SharePoint | ✅ Verified | `info@talentbridgedubai.com` — tenant `tbhrc-my.sharepoint.com` (~5,361 docs) | `sharepoint_search` returned documents | Upload/update/move/copy/rename/delete file + create folder exposed; **not exercised** | Microsoft 365 MCP |
| FolderDesk | ✅ Verified | FD0 connector v3.34 (`find / project / task / file / website / coordinate / connector`) | `connector(version)` + `find` succeeded | Bounded task/file/coordination writes exposed; **not exercised in this test** | Native FD0 MCP connector; no local `fd0` CLI |
| GitHub / DRF | ✅ Verified | `tbhrc` via `gh` CLI (GitHub ID `239958985`) | Repo + Issue #5 read | Issues/comments/commit tools; **Issue #5 update and this documentation are the only exercised repository writes** | Authenticated local `gh` CLI |
| ATS / recruitment database | 🟨 Partial | Google Sheet "ATS" owned by `talentbridgedubai@gmail.com`; Manatal (no live API tested) | ✅ Sheet visible via Drive MCP; `manatal-ats` skill documents the Manatal screening procedure | No ATS API write route; sheet edits only | No live ATS connector. Google Drive indirect + `manatal-ats` skill are the concrete routes. |
| GulfTalent | 🟨 Partial | Existing account; no credentials on surface | No authenticated read route | No write route | Browser/manual route only (untested) |
| Google Contacts | 🟨 Partial | Would be `talentbridgedubai@gmail.com` | ❌ `google_workspace` MCP **not authenticated** (OAuth consent required) | Blocked pending consent | No dedicated Google Contacts MCP on this surface (Codex has one; Claude does not) |
| Canva | ❌ Missing | None | No connector | No write route | No Canva MCP on Claude surface (Codex has one) |
| E-signature / contracts | ❌ Missing | None | No provider read route | No contract write/send route | No connector |
| Calling / voice | ❌ Missing | None | No telephony read route | No calling route | No connector |
| Meeting intelligence | 🟨 Partial | Teams `info@talentbridgedubai.com` | `teams_list_chats` shows interview meeting chats | Chat message send is write-gated; **not exercised**. Transcript retrieval untested. | Microsoft 365 MCP |
| Paid advertising | ❌ Missing | None | No ads-platform read route | No ads write route | No connector |
| Website / landing pages | 🟨 Partial | HubSpot portal `148333343` | `LANDING_PAGE` read AVAILABLE | `LANDING_PAGE` write **AVAILABLE** via `manage_landing_page` / `manage_crm_objects`; **not exercised**. HighLevel still preferred. | HubSpot MCP |
| Commercial analytics | 🟨 Partial | HubSpot portal `148333343` + DRF | HubSpot CRM SQL (`query_crm_data`) + DRF repo reads | No unified analytics write | HubSpot MCP + `gh` CLI; no unified telemetry layer |
| Gmail | ✅ Verified | `talentbridgedubai@gmail.com` (dedicated Gmail MCP) — 744 sent / 4,254 inbox | `list_labels`, `search_threads` | Send/draft/reply/forward/trash/label exposed; **not exercised** | Dedicated Gmail MCP (separate from `google_workspace`) |
| Google Calendar | 🟨 Partial | iMPLEMENTAi `implementai.ae@gmail.com` (per Web/Codex; unconfirmed here) | ❌ `google_workspace` MCP **not authenticated** | Blocked pending consent | No dedicated Google Calendar MCP on this surface (Codex has one; Claude does not) |
| Google Drive | ✅ Verified | `talentbridgedubai@gmail.com` (dedicated Drive MCP) | `list_recent_files` | Create/update/copy/share/trash exposed; **not exercised** | Dedicated Drive MCP (the `google_workspace` Drive path is separate and unauthenticated) |
| Microsoft Teams | ✅ Verified | `info@talentbridgedubai.com` | `teams_list_chats`, `chat_message_search` | Send-message is write-gated / not active on this surface; **not exercised** | Microsoft 365 MCP |
| HubSpot | ✅ Verified | Portal `148333343` (`app-eu1.hubspot.com`), owner `talentbridgedubai@gmail.com` (user `91288471`), STANDARD / USD, onboarding incomplete | `get_user_details`, `discover_hubspot_schema` | CRM **write AVAILABLE** for CONTACT/COMPANY/DEAL/TICKET/TASK/NOTE/CALL/EMAIL/LINE_ITEM/PRODUCT/LANDING_PAGE via `manage_crm_objects`; BLOG_POST + MARKETING_EMAIL need reauthorisation. **Not exercised.** | HubSpot MCP |
| Zoho Books | 🟨 Partial | Organisation identity unresolved | `ZohoBooks_*` tools present; every call needs `organization_id` and no list-organisations tool is exposed | Finance create/update/send tools registered; **not exercised and blocked** pending identity | Zoho Books MCP only |
| Asana | ❌ Missing | None | No connector | No write route | No Asana MCP on Claude surface (Web + Codex have one) |
| Hindsight Memory | ✅ Verified | Shared bank `folderdesk` | `get_bank`, `recall` | `retain` / `reflect` exposed; **not exercised** | Hindsight-Memory MCP |

## Claude-specific capability notes

- **Local execution:** Claude Code runs on David's Mac with shell, filesystem and local CLIs (`gh`, `composio`) — a capability ChatGPT Web lacks. GitHub/DRF writes are native here (LocalStream).
- **Browser automation:** in-app browser, real Chrome with logged-in sessions, Playwright and Chrome DevTools MCPs — the only current route to GoHighLevel, Stripe, LinkedIn and GulfTalent, all untested.
- **Sub-agent dispatch:** `agent-intern` MCP delegates to Codex / Antigravity (Gemini) / Copilot / Cursor on the user's own quota, and generates images.
- **Composio broker:** CLI authenticated (`talentbridgedubai_workspace`) with active `gmail` and `outlook` (alias `katrina`) connections and an expired `github` connection — a potential future broker path, not currently wired to CCO commercial apps; the Composio plugin is not installed in Claude Code.
- **Identity divergence:** Claude's single Microsoft 365 connector authenticates Outlook **Email** as `info@talentbridgedubai.com`, whereas both ChatGPT Web and ChatGPT Desktop/Codex send Outlook Email as `careers@talentbridgedubai.com`. Confirm the intended sender per surface before any outbound mail.

## Additional Claude surfaces beyond the fixed unified table

Surfaces found in discovery that are not rows in the section-1 matrix. Per the governing rule these are **not** promoted into the unified matrix unless they unblock a measurable part of the commercial loop; they are recorded here so the Claude picture is complete and not artificially capped at the original 29 rows.

| Surface / capability | Status on Claude | Identity / auth | What it does | Commercial-loop relevance |
|---|---|---|---|---|
| **Autonomous scheduling** (`scheduled-tasks` MCP + cron/`CronCreate`) | ✅ Available | Local to Claude Code | Time-based recurring agent runs — follow-up cadence, pipeline/inbox monitoring, scheduled digests | High — the Claude equivalent of the "Hermes-only runtime capability" Issue #5 asks each surface to record |
| **Sub-agent dispatch** (`agent-intern` MCP) | ✅ Available | Runs on David's own Codex / Gemini / Copilot / Cursor quota | Parallel delegation of research or drafting; **only image generator** on this surface (`antigravity_image`) | Medium — research throughput + sales-collateral/image generation without spending Claude tokens |
| **Cross-agent / cross-stream dispatch** (`coordinate` FD0 action, `vps-control` skill) | ✅ Available | FolderDesk FD0 connector | Hand a bounded task to Hermes / Codex / LocalStream and verify from durable files | Medium — lets Claude route commercial work to a surface that has the connector it lacks |
| **Public / social research** (`agent-reach` skill) | ✅ Available | No login (public data); paywall-bypass helpers | Read X / Reddit / LinkedIn-public / YouTube transcripts; company & prospect signal scraping | High — augments Web research, partial LinkedIn **research** intelligence, and manual lead enrichment |
| **ChatGPT Web handoff** (`chatgpt-web-handoff` skill) | 🟨 Available, needs Chrome session | David's authenticated ChatGPT in Chrome | Offload heavy public research to ChatGPT Web and retrieve cited results | Medium — heavy-research overflow route |
| **Manatal ATS** (`manatal-ats` skill) | 🟨 Skill only | No live API tested | Documented candidate screening / shortlisting procedure over Manatal | Medium — this is the concrete route behind the "ATS / recruitment database" row, which the fixed matrix marks as "no connector" |
| **Hostinger Reach** (`hostinger-reach` MCP) | ❌ Not authorised | OAuth not completed on this surface | Email-marketing platform — campaigns, contacts, segments, automations, forms | Medium — an outbound email-campaign route if authorised; currently unusable |
| **FolderDesk commercial skills** (`talent-bridge-recruitment-proposal`, `instant-quote`, `tb-lead-research`, `talent-bridge-cv-writer`, `talent-bridge-jd-writer`, `tb-finances-zoho-books`, …) | ✅ Available | Operate through the connectors already listed above | Proposal / quote / JD / CV generation, lead research, finance procedures | High — direct commercial-loop tooling unique to this surface |
| **Google Workspace authoring** (`google_workspace` MCP — Docs / Sheets / Slides / Forms / Chat / Tasks / Apps Script) | ❌ Not authenticated | OAuth consent required | Document/spreadsheet/deck authoring, Google Chat messaging, Apps Script automation | Medium if authorised — collateral authoring + a second messaging surface |
| **Infrastructure MCPs** (`supabase`, Hostinger `vps`/`dns`/`domains`/`hosting`/`wordpress`, Cloudflare via SOP-033) | Mixed — Supabase ✅, Hostinger ❌ not authorised, Cloudflare via scoped token | Per service | Database, hosting, DNS, CDN/WAF control | Low — infrastructure, not the commercial loop; listed for completeness only |

---

# CCO account safety rule

Before any outbound message, invitation, CRM mutation, financial action or customer-facing write, identify the **surface + connector/tool + authenticated account/location** that will execute it.

Never infer identity from another connector or another surface.

```text
ChatGPT Web → Outlook Email → careers@talentbridgedubai.com
ChatGPT Web → Outlook Calendar → info@talentbridgedubai.com
ChatGPT Web → Gmail → talentbridgedubai@gmail.com
ChatGPT Web → Google Calendar → implementai.ae@gmail.com
ChatGPT Web → GoHighLevel → connected, location identity unresolved
ChatGPT Desktop / Codex → HighLevel connected but location unresolved; see the Desktop/Codex table for each tested identity and route
Hermes → NOT YET TESTED
Claude → Outlook Email / Calendar, OneDrive/SharePoint, Teams → info@talentbridgedubai.com
Claude → Gmail / Google Drive → talentbridgedubai@gmail.com
Claude → HubSpot → portal 148333343 / talentbridgedubai@gmail.com
Claude → GitHub / DRF → tbhrc
Claude → GoHighLevel / Stripe / WhatsApp / LinkedIn → NO ROUTE (browser-only, untested)
Claude → Google Calendar / Google Contacts → google_workspace MCP NOT AUTHENTICATED
```

# Current biggest CCO gaps

1. **HighLevel:** exact location/sub-account identity + bounded CRM write capability.
2. **WhatsApp Business:** official operating route.
3. **LinkedIn:** approved authenticated operating route.
4. **Stripe:** bounded sales/collection actions with confirmed account identity.
5. **Lead enrichment:** only if existing data proves insufficient.

# Surface test progress

- [x] **ChatGPT Web / CCO** tested and recorded.
- [x] **ChatGPT Desktop / Codex** tested and reconciled with ChatGPT Web.
- [ ] **Hermes** pending.
- [x] **Claude** tested and recorded (2026-08-29) — 🟨 partial: strong on Microsoft 365, Gmail, Google Drive, HubSpot, GitHub/DRF, FolderDesk, Hindsight; no route to HighLevel / Stripe / WhatsApp / Canva / Asana; LinkedIn + lead enrichment are research-read only; Google Calendar + Contacts blocked on OAuth. See §5 "Additional Claude surfaces beyond the fixed unified table" for scheduling, sub-agent dispatch, cross-agent dispatch, public-research and commercial-skill capabilities.

Keep GitHub Issue #5 open until Desktop/Codex, Hermes and Claude are tested and reconciled against the unified table. **Web, Codex and Claude are now done; Hermes remains.**

## Governing rule

**Do not add integrations for completeness. Add them only when they unblock a measurable part of the commercial loop.**
