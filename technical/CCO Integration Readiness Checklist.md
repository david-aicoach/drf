# CCO Integration Readiness Checklist

**Role:** CCO — Chief Commercial Officer  
**Purpose:** Maintain one canonical, reconciled view of commercial integration capability across ChatGPT Web / CCO, ChatGPT Desktop / Codex, Hermes and Claude.  
**Issue:** #5  
**Audit date:** 29 August 2026  
**Status:** Cross-surface verification complete; unresolved integrations remain capability backlog, not untested surfaces.

## Status key

- ✅ **Verified** — a harmless read/search/profile action succeeded and identity is sufficiently known where identity applies.
- 🟨 **Partial** — a route or useful capability exists, but authentication, identity, scope or required commercial capability is incomplete.
- ❌ **Missing** — no direct operating route was verified on that surface.
- ⏳ **Pending** — surface has not yet been tested. **No Pending rows remain.**

## Safety rule

Installed, configured, connected or visible does not equal operationally verified. A write action being exposed also does not mean it was exercised.

No customer-facing message, CRM mutation, financial action, charge, refund, invoice mutation or payment action was performed for this readiness audit. External writes require their own explicit authority and are **not** a prerequisite for closing this verification issue.

---

# 1. Unified cross-surface matrix

Every row below is reconciled against the corresponding detailed surface table.

| Integration | **ChatGPT Web / CCO** | **ChatGPT Desktop / Codex** | **Hermes** | **Claude** | CCO requirement / note |
|---|---|---|---|---|---|
| **GoHighLevel** | 🟨 Partial — read works; location identity unresolved | 🟨 Partial — HighLevel MCP read works; location/sub-account unresolved; no mutation tool | 🟨 Partial — no authenticated Hermes connector; browser route blocked before authenticated test | ❌ Missing — no MCP/CLI; browser-only route untested | Resolve exact location + bounded writes only when needed |
| **Outlook Email** | ✅ `careers@talentbridgedubai.com` | ✅ `careers@talentbridgedubai.com` | ❌ Missing | ✅ `info@talentbridgedubai.com` | Sender identity differs on Claude |
| **Outlook Calendar** | ✅ `info@talentbridgedubai.com` | ✅ `info@talentbridgedubai.com` | ❌ Missing | ✅ `info@talentbridgedubai.com` | Confirm account before calendar writes |
| **LinkedIn** | ❌ No authenticated operating route | ❌ Missing — no authenticated route | 🟨 Partial — public research only | 🟨 Partial — public research via agent/browser; no authenticated action | No unauthorised bot messaging |
| **WhatsApp Business** | ❌ Not connected | ❌ Missing — no authenticated Business route | 🟨 Partial — Hermes transport configured; Business identity/API not exposed | ❌ Missing | Prefer official Business API route when commercially required |
| **Stripe** | 🟨 Partial — infrastructure known; no bounded account action exposed here | ❌ Missing — no Stripe MCP/CLI | ❌ Missing — no Stripe MCP/API/CLI | ❌ Missing — no Stripe MCP/CLI | Confirm account identity before any payment action |
| **Web research** | ✅ Native ChatGPT | ✅ Native Desktop/Codex | ✅ Native Hermes web tools | ✅ Native Claude | Core research capability |
| **Lead enrichment** | ❌ No dedicated provider | ❌ Missing — no dedicated provider/API | 🟨 Partial — manual public-web research | 🟨 Partial — manual/agent public research | Add a provider only if manual research proves insufficient |
| **OneDrive / SharePoint** | ✅ `info@talentbridgedubai.com` | ✅ `info@talentbridgedubai.com` | ❌ Missing | ✅ `info@talentbridgedubai.com` | Commercial source-file access |
| **FolderDesk** | ✅ Connected | 🟨 Partial — FD0 read works; identity not exposed | ✅ Local FolderDesk canon read | ✅ FD0 connector | Durable coordination layer |
| **GitHub / DRF** | ✅ `tbhrc` / `talentbridgedubai@gmail.com` | ✅ `tbhrc` / `talentbridgedubai@gmail.com` | ✅ `tbhrc` (GitHub ID `239958985`) | ✅ `tbhrc` | Canonical DRF control plane |
| **ATS / recruitment database** | 🟨 Existing system; no direct connector | 🟨 Partial — ATS data visible indirectly via Drive; no direct ATS connector | ❌ Missing | 🟨 Partial — ATS sheet/Manatal procedure; no live ATS API | Use only where commercially relevant |
| **GulfTalent** | 🟨 Existing account; no direct connector | 🟨 Partial — browser/manual route only | 🟨 Partial — browser/manual route only; auth unverified | 🟨 Partial — browser/manual route only | Manual/browser route if needed |
| **Google Contacts** | ✅ `talentbridgedubai@gmail.com` | ✅ `talentbridgedubai@gmail.com` | ❌ Missing | 🟨 Partial — `google_workspace` MCP not authenticated | Warm relationship/contact resolution |
| **Canva** | ✅ Connected; identity not exposed | ✅ Connected; brand-kit read succeeded | ❌ Missing | ❌ Missing | Sales collateral |
| **E-signature / contracts** | ❌ No dedicated provider | ❌ Missing | ❌ Missing | ❌ Missing | Prefer existing contract capability before adding vendor |
| **Calling / voice** | ❌ No direct telephony route | ❌ Missing | ❌ Missing | ❌ Missing | Add only around a live voice use case |
| **Meeting intelligence** | 🟨 Teams read; transcription unproven | ✅ Teams read as `info@talentbridgedubai.com`; transcript retrieval untested | 🟨 Partial — no Teams/transcript connector; public web only | 🟨 Partial — Teams read works; transcript retrieval untested | Transcript automation remains separate evidence |
| **Paid advertising** | ❌ No ads-platform control | ❌ Missing | ❌ Missing | ❌ Missing | Phase 2 after conversion is proven |
| **Website / landing pages** | 🟨 HubSpot `talentbridgedubai@gmail.com` | 🟨 HubSpot portal `148333343`; authenticated page writes need reauthorisation | ✅ Public website research/extract; no CMS identity | 🟨 HubSpot portal `148333343`; landing-page write exposed | HighLevel/HubSpot selected per business architecture |
| **Commercial analytics** | 🟨 Multiple readable systems; no unified layer | 🟨 HubSpot portal `148333343`; no unified layer | 🟨 Runtime/public-site diagnostics only | 🟨 HubSpot + DRF readable; no unified layer | Build only when a live commercial loop needs it |
| **Gmail** | ✅ `talentbridgedubai@gmail.com` | ✅ `talentbridgedubai@gmail.com` | ❌ Missing | ✅ `talentbridgedubai@gmail.com` | Alternative sender mailbox |
| **Google Calendar** | ✅ `implementai.ae@gmail.com` | ✅ `implementai.ae@gmail.com` | ❌ Missing | 🟨 `google_workspace` MCP not authenticated | iMPLEMENTAi calendar identity |
| **Google Drive** | ✅ `talentbridgedubai@gmail.com` | ✅ `talentbridgedubai@gmail.com` | ❌ Missing | ✅ `talentbridgedubai@gmail.com` | Google file access |
| **Microsoft Teams** | ✅ `info@talentbridgedubai.com` | ✅ `info@talentbridgedubai.com` | ❌ Missing | ✅ `info@talentbridgedubai.com` | Messaging/search/read |
| **HubSpot** | ✅ `talentbridgedubai@gmail.com` | ✅ Portal `148333343` / `talentbridgedubai@gmail.com` | ❌ Missing | ✅ Portal `148333343` / `talentbridgedubai@gmail.com` | Secondary CRM / API-capable system of record |
| **Zoho Books** | 🟨 Organisation identity unresolved | 🟨 Organisation identity unresolved; financial writes blocked | ❌ Missing | 🟨 Organisation identity unresolved; financial writes blocked | No financial writes until organisation is confirmed |
| **Asana** | ✅ `talentbridgedubai@gmail.com` | ✅ `talentbridgedubai@gmail.com`, workspace `1214255580616938` | ❌ Missing | ❌ Missing | Available but not required for DRF control |
| **Hindsight Memory** | ✅ Shared FolderDesk memory | ✅ Shared FolderDesk memory | ✅ Shared FolderDesk memory / holographic provider | ✅ Shared bank `folderdesk` | Continuity layer only |

**Slack is intentionally excluded. It is not used or required.**

---

# 2. Surface — ChatGPT Web / CCO

**Tested 2026-08-29.** Harmless reads only for this readiness pass.

| Integration | Status | Authenticated account / identity | Read actually tested / evidence | Write exposed; exercised? | Route |
|---|---|---|---|---|---|
| GoHighLevel | 🟨 Partial | Location/sub-account unresolved | Contacts and opportunities queries completed with `0` results | Search/fetch only; no CRM mutation exposed | Connected HighLevel tool |
| Outlook Email | ✅ Verified | `careers@talentbridgedubai.com` | Mailbox read/profile available | Send/reply/forward/draft exposed; not exercised | Outlook Email connector |
| Outlook Calendar | ✅ Verified | `info@talentbridgedubai.com` | Calendar read/profile available | Event writes exposed; not exercised | Outlook Calendar connector |
| LinkedIn | ❌ Missing | None | Public web only | No authenticated action | Web research only |
| WhatsApp Business | ❌ Missing | None | No direct Business read | No direct send | None |
| Stripe | 🟨 Partial | Identity unresolved | No bounded account read exposed in this surface | No approved payment action exercised | Known infrastructure only |
| Web research | ✅ Verified | N/A | Native web research used | N/A | Native ChatGPT web |
| Lead enrichment | ❌ Missing | None | No dedicated provider | None | Manual web only |
| OneDrive / SharePoint | ✅ Verified | `info@talentbridgedubai.com` | File/search reads succeeded | File writes exposed; not exercised in audit | SharePoint/OneDrive connector |
| FolderDesk | ✅ Verified | Identity not exposed | Bounded connector reads succeeded | Bounded task/file actions exposed | FD0 connector |
| GitHub / DRF | ✅ Verified | `tbhrc` / `talentbridgedubai@gmail.com` | Repository/issues/files read | Repository writes proven separately | GitHub connector |
| ATS / recruitment database | 🟨 Partial | Existing system | No direct connector test | No direct ATS mutation route | Existing system / indirect routes |
| GulfTalent | 🟨 Partial | Existing account; identity not exposed | No direct connector test | No direct write route | Browser/manual |
| Google Contacts | ✅ Verified | `talentbridgedubai@gmail.com` | Contact read/search succeeded | Read-focused | Google Contacts connector |
| Canva | ✅ Verified | Connected; identity not exposed | Brand/design reads available | Create/edit exposed; not exercised | Canva connector |
| E-signature / contracts | ❌ Missing | None | No dedicated provider | None | None |
| Calling / voice | ❌ Missing | None | No telephony read | None | None |
| Meeting intelligence | 🟨 Partial | Teams `info@talentbridgedubai.com` | Teams read works | Messaging exposed; transcription unproven | Teams connector |
| Paid advertising | ❌ Missing | None | No ads read | None | None |
| Website / landing pages | 🟨 Partial | HubSpot `talentbridgedubai@gmail.com` | HubSpot page capability readable | Landing-page path needs reauthorisation | HubSpot connector |
| Commercial analytics | 🟨 Partial | Multiple systems | Multiple sources readable | No unified telemetry layer | Connected systems |
| Gmail | ✅ Verified | `talentbridgedubai@gmail.com` | Inbox/search reads succeeded | Send/draft exposed; not exercised | Gmail connector |
| Google Calendar | ✅ Verified | `implementai.ae@gmail.com` | Calendar read succeeded | Event writes exposed; not exercised | Google Calendar connector |
| Google Drive | ✅ Verified | `talentbridgedubai@gmail.com` | File/search reads succeeded | File writes exposed; not exercised | Google Drive connector |
| Microsoft Teams | ✅ Verified | `info@talentbridgedubai.com` | Chat/search reads succeeded | Messaging exposed; not exercised | Teams connector |
| HubSpot | ✅ Verified | `talentbridgedubai@gmail.com` | Account/CRM reads succeeded | CRM writes exposed; not exercised | HubSpot connector |
| Zoho Books | 🟨 Partial | Organisation unresolved | Connector exists; organisation-scoped proof incomplete | Financial writes blocked | Zoho Books connector |
| Asana | ✅ Verified | `talentbridgedubai@gmail.com` | Workspace/task reads succeeded | Task/project writes exposed; not exercised | Asana connector |
| Hindsight Memory | ✅ Verified | Shared FolderDesk memory | Recall/read works | Retain available | Hindsight connector |

---

# 3. Surface — ChatGPT Desktop / Codex

**Tested 2026-08-29.** All integration statuses below are reconciled to the unified matrix. No external/customer/financial write was exercised.

| Integration | Status | Authenticated account / identity | Read actually tested / evidence | Write exposed; exercised? | Route |
|---|---|---|---|---|---|
| GoHighLevel | 🟨 Partial | Connected; location/sub-account unresolved | HighLevel contacts query completed with `0` contacts | Only search/fetch exposed; not exercised | HighLevel MCP |
| Outlook Email | ✅ Verified | Careers & Job Portal — `careers@talentbridgedubai.com` (user `3ea288bd-56b0-4f3d-8487-56e772c5cbf3`) | Profile + recent inbox message read | Draft/reply/forward/schedule/send exposed; not exercised | Outlook Email MCP |
| Outlook Calendar | ✅ Verified | `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile + default calendar list read | Create/update/delete/respond exposed; not exercised | Outlook Calendar MCP |
| LinkedIn | ❌ Missing | None | No authenticated read route | No direct write route | None |
| WhatsApp Business | ❌ Missing | None | No authenticated Business route | No direct send | None |
| Stripe | ❌ Missing | None | Local `stripe` CLI absent; no connector | No bounded payment action | None |
| Web research | ✅ Verified | N/A | Native web-research route tested | N/A | Native Desktop/Codex web |
| Lead enrichment | ❌ Missing | None | No dedicated provider/API | None | Manual web only |
| OneDrive / SharePoint | ✅ Verified | `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile + recent documents read | File/folder writes exposed; not exercised | SharePoint/OneDrive MCP |
| FolderDesk | 🟨 Partial | Identity not exposed | FD0 health succeeded; DRF project resolve returned not found | Task/file actions exposed; not exercised | FD0 connector |
| GitHub / DRF | ✅ Verified | `tbhrc` / `talentbridgedubai@gmail.com` (ID `239958985`) | Profile + DRF Issue #5 read | Repository writes exposed; documentation/issue writes only | GitHub MCP + authenticated `gh` |
| ATS / recruitment database | 🟨 Partial | ATS data visible indirectly via Google Drive | No direct ATS connector read | No direct ATS write | Indirect Drive route |
| GulfTalent | 🟨 Partial | Existing account; identity not exposed | No authenticated read | No direct write | Browser/manual only |
| Google Contacts | ✅ Verified | `talentbridgedubai@gmail.com` (Google ID `111632185774207007883`) | Profile + contact search read | Read-focused; not exercised | Google Contacts MCP |
| Canva | ✅ Verified | Connected; identity not exposed | Brand-kit listing succeeded | Design/edit tools exposed; not exercised | Canva MCP |
| E-signature / contracts | ❌ Missing | None | No provider read | None | None |
| Calling / voice | ❌ Missing | None | No telephony read | None | None |
| Meeting intelligence | ✅ Verified | Teams `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile + chat listing read | Chat/message tools exposed; transcript retrieval untested | Teams MCP |
| Paid advertising | ❌ Missing | None | No ads-platform read | None | None |
| Website / landing pages | 🟨 Partial | HubSpot `talentbridgedubai@gmail.com`, portal `148333343` | HubSpot page/account capability read | Landing-page write requires reauthorisation; not exercised | HubSpot MCP |
| Commercial analytics | 🟨 Partial | HubSpot portal `148333343` | HubSpot account/organisation read | No unified analytics write | HubSpot MCP + runtime diagnostics |
| Gmail | ✅ Verified | `talentbridgedubai@gmail.com` (Google ID `111632185774207007883`) | Profile + inbox search read | Draft/send/forward/archive/label exposed; not exercised | Gmail MCP |
| Google Calendar | ✅ Verified | iMPLEMENTAi — `implementai.ae@gmail.com` (Google ID `108330259693249737150`) | Profile + calendar list read | Event writes exposed; not exercised | Google Calendar MCP |
| Google Drive | ✅ Verified | `talentbridgedubai@gmail.com` (Google ID `111632185774207007883`) | Profile + recent documents read | Create/update/upload/share exposed; not exercised | Google Drive MCP |
| Microsoft Teams | ✅ Verified | `info@talentbridgedubai.com` (user `294d2f39-246b-4758-84d2-6749823581b7`) | Profile + chat list read | Message/reply exposed; not exercised | Teams MCP |
| HubSpot | ✅ Verified | `talentbridgedubai@gmail.com`; owner/user `91288471`, portal `148333343` | User + organisation/capability reads succeeded | CRM writes exposed; not exercised | HubSpot MCP |
| Zoho Books | 🟨 Partial | Organisation unresolved | No safe organisation-scoped read without organisation ID | Financial writes exposed but blocked; not exercised | Zoho Books MCP |
| Asana | ✅ Verified | `talentbridgedubai@gmail.com`; user `1214255580616926`, workspace `1214255580616938` | Profile + assigned tasks read | Task/project/comment writes exposed; not exercised | Asana MCP |
| Hindsight Memory | ✅ Verified | Shared FolderDesk memory | Document listing/recall available | Retain/update exposed; not exercised | Hindsight MCP |

---

# 4. Surface — Hermes

**Tested 2026-08-29 from the native macOS Hermes runtime.** One harmless narrow read was attempted per available route. Browser-based authenticated checks were limited by macOS remote-debugging approval and a missing `oci` dependency; that is recorded as an access limitation, not evidence that an account does not exist.

| Integration | Status | Authenticated account / identity | Read actually tested / evidence | Write exposed; exercised? | Route |
|---|---|---|---|---|---|
| GoHighLevel | 🟨 Partial | None exposed; location/sub-account unresolved | No authenticated read; browser attempt blocked before auth | No CRM write route exposed | Browser tooling present; no MCP/CLI/API |
| Outlook Email | ❌ Missing | None | No email read route | No send route | None |
| Outlook Calendar | ❌ Missing | None | No calendar read route | No write route | None |
| LinkedIn | 🟨 Partial | Public identity only | Public-web research available; no authenticated LinkedIn read | No authenticated messaging | Native web tools |
| WhatsApp Business | 🟨 Partial | Gateway configured; Business sender/account not exposed | Gateway configuration/status read; no Business API profile/conversation read | No Business send exercised | Hermes WhatsApp transport only |
| Stripe | ❌ Missing | None | Local Stripe CLI absent; no account read | No payment/invoice/subscription action | None |
| Web research | ✅ Verified | N/A | `web_search` + `web_extract` tested against public Talent Bridge page | N/A | Native Hermes web |
| Lead enrichment | 🟨 Partial | None | Manual public-web research only | No provider write | Native web tools |
| OneDrive / SharePoint | ❌ Missing | None | No authenticated read | None | None |
| FolderDesk | ✅ Verified | Local desk `/Users/david/FolderDesk-OS`; user identity not exposed | Local `AGENTS.md`/canon read succeeded | Local file tools exposed; no CCO record mutation exercised | Native local filesystem |
| GitHub / DRF | ✅ Verified | `tbhrc`, GitHub ID `239958985`; email not exposed | `gh auth status`, `gh api user`, repo metadata and Issue #5 reads succeeded | `gh` write surface exists; not exercised in Hermes audit | Authenticated `gh` CLI |
| ATS / recruitment database | ❌ Missing | None | No authenticated ATS read | None | None |
| GulfTalent | 🟨 Partial | Existing account not exposed | No authenticated read; browser/manual only | None | Browser tooling blocked before auth |
| Google Contacts | ❌ Missing | None | No contacts route | None | None |
| Canva | ❌ Missing | None | No design/account route | None | None |
| E-signature / contracts | ❌ Missing | None | No provider route | None | None |
| Calling / voice | ❌ Missing | None | No telephony route | None | None |
| Meeting intelligence | 🟨 Partial | None | No Teams/transcript route; public web only | None | Native web only |
| Paid advertising | ❌ Missing | None | No ads route | None | None |
| Website / landing pages | ✅ Verified | Public Talent Bridge site; CMS identity not exposed | Public contact page successfully extracted | No authenticated CMS write | Native web search/extract |
| Commercial analytics | 🟨 Partial | No connected commercial account exposed | Runtime/health diagnostics + public-site read | No unified analytics write | Local CLI + web |
| Gmail | ❌ Missing | None | No Gmail route | None | None |
| Google Calendar | ❌ Missing | None | No calendar route | None | None |
| Google Drive | ❌ Missing | None | No Drive route | None | None |
| Microsoft Teams | ❌ Missing | None | No Teams route | None | None |
| HubSpot | ❌ Missing | None | No HubSpot account/CRM route | None | None |
| Zoho Books | ❌ Missing | None | No organisation/account route | None | None |
| Asana | ❌ Missing | None | No Asana route | None | None |
| Hindsight Memory | ✅ Verified | Shared FolderDesk memory; separate account identity not exposed | Hermes memory context loaded; holographic provider active | Memory retain/update exposed; not exercised for CCO data | Native Hermes memory provider |

## Hermes-only autonomous/runtime capability

- ✅ Native terminal, filesystem, web, browser tooling, code execution, delegation, memory and cron are available in Hermes.
- ✅ `hermes cron list --all` verified two active scheduled jobs: `daily-model-reminder` and `brain-approve-daily`.
- ⚠️ Neither schedule is evidence of a connected commercial system. No Hermes cron job currently monitors or mutates GoHighLevel, Stripe, WhatsApp Business, LinkedIn or another CCO system.

---

# 5. Surface — Claude

**Tested 2026-08-29 via Claude Code / LocalStream.** Harmless reads only; repository documentation/issue updates are separate from external CCO writes.

| Integration | Status | Authenticated account / identity | Read actually tested / evidence | Write exposed; exercised? | Route |
|---|---|---|---|---|---|
| GoHighLevel | ❌ Missing | None | No connector/CLI read | No CRM route | Browser automation only; untested |
| Outlook Email | ✅ Verified | `info@talentbridgedubai.com` (MS user `294d2f39-…`) | `get_me` + mailbox search | Send/reply/draft exposed; not exercised | Microsoft 365 MCP |
| Outlook Calendar | ✅ Verified | `info@talentbridgedubai.com` | Calendar search returned events | Event writes exposed; not exercised | Microsoft 365 MCP |
| LinkedIn | 🟨 Partial | Public data only | Public profile/company research via agent/browser | No authenticated messaging | `agent-reach` + browser |
| WhatsApp Business | ❌ Missing | None | No route | None | None |
| Stripe | ❌ Missing | None | Local Stripe CLI absent; no MCP | None | Browser only; untested |
| Web research | ✅ Verified | N/A | WebSearch/WebFetch + agent research available | N/A | Native Claude |
| Lead enrichment | 🟨 Partial | None | Manual/agent public research works | No provider API | Native web + agent research |
| OneDrive / SharePoint | ✅ Verified | `info@talentbridgedubai.com`, tenant `tbhrc-my.sharepoint.com` | SharePoint search returned documents | File writes exposed; not exercised | Microsoft 365 MCP |
| FolderDesk | ✅ Verified | FD0 connector | Connector version/find succeeded | Bounded writes exposed; not exercised in audit | FD0 MCP |
| GitHub / DRF | ✅ Verified | `tbhrc` via `gh` | Repo + Issue #5 read | Repository docs/issue writes exercised separately | Authenticated `gh` CLI |
| ATS / recruitment database | 🟨 Partial | ATS Google Sheet owned by `talentbridgedubai@gmail.com`; Manatal procedure available | Sheet visible; no live ATS API test | No direct ATS API write | Drive MCP + `manatal-ats` skill |
| GulfTalent | 🟨 Partial | Existing account; no surface identity | No authenticated read | None | Browser/manual only |
| Google Contacts | 🟨 Partial | Expected `talentbridgedubai@gmail.com`; unconfirmed here | `google_workspace` MCP not authenticated | Blocked pending OAuth | Google Workspace MCP |
| Canva | ❌ Missing | None | No connector | None | None |
| E-signature / contracts | ❌ Missing | None | No provider route | None | None |
| Calling / voice | ❌ Missing | None | No telephony route | None | None |
| Meeting intelligence | 🟨 Partial | Teams `info@talentbridgedubai.com` | Teams chats read; transcript retrieval untested | Messaging gated; not exercised | Microsoft 365 MCP |
| Paid advertising | ❌ Missing | None | No ads route | None | None |
| Website / landing pages | 🟨 Partial | HubSpot portal `148333343` | Landing-page read available | Landing-page write exposed; not exercised | HubSpot MCP |
| Commercial analytics | 🟨 Partial | HubSpot portal `148333343` + DRF | HubSpot CRM query + DRF reads | No unified layer | HubSpot MCP + `gh` |
| Gmail | ✅ Verified | `talentbridgedubai@gmail.com` | Dedicated Gmail MCP label/search reads | Send/draft/reply/etc. exposed; not exercised | Gmail MCP |
| Google Calendar | 🟨 Partial | `implementai.ae@gmail.com` known from Web/Codex; unconfirmed here | `google_workspace` MCP not authenticated | Blocked pending OAuth | Google Workspace MCP |
| Google Drive | ✅ Verified | `talentbridgedubai@gmail.com` | Dedicated Drive recent-file read | File writes exposed; not exercised | Google Drive MCP |
| Microsoft Teams | ✅ Verified | `info@talentbridgedubai.com` | Chat/search reads succeeded | Message send gated; not exercised | Microsoft 365 MCP |
| HubSpot | ✅ Verified | Portal `148333343` (`app-eu1`), owner `talentbridgedubai@gmail.com`, user `91288471` | User + schema/account reads | CRM writes exposed; not exercised | HubSpot MCP |
| Zoho Books | 🟨 Partial | Organisation unresolved | Tools exist but require unknown `organization_id` | Financial writes blocked; not exercised | Zoho Books MCP |
| Asana | ❌ Missing | None | No connector on Claude | None | None |
| Hindsight Memory | ✅ Verified | Shared bank `folderdesk` | Bank/recall read | Retain/reflect exposed; not exercised | Hindsight MCP |

## Claude capabilities outside the fixed 29-row matrix

These are useful surface capabilities but are not promoted into the commercial integration matrix unless they unblock a measurable commercial loop:

- **Autonomous scheduling:** scheduled tasks / cron.
- **Sub-agent dispatch:** `agent-intern` across available coding/agent runtimes.
- **Cross-stream dispatch:** FolderDesk `coordinate` / related orchestration.
- **Public/social research:** `agent-reach` for public X/Reddit/LinkedIn/YouTube research.
- **ChatGPT Web handoff:** available when browser/session conditions permit.
- **Manatal procedure:** skill-based ATS workflow; no live API connector verified.
- **FolderDesk commercial skills:** proposal, quote, lead research, CV/JD and related reusable workflows.
- **Infrastructure surfaces:** available separately where authorised; not treated as CCO integrations by default.

---

# 6. Identity safety map

Before any outbound message, invitation, CRM mutation, financial action or customer-facing write, resolve the **current surface + connector/tool + authenticated account/location** that will execute it.

```text
ChatGPT Web → Outlook Email → careers@talentbridgedubai.com
ChatGPT Web → Outlook Calendar → info@talentbridgedubai.com
ChatGPT Web → Gmail → talentbridgedubai@gmail.com
ChatGPT Web → Google Calendar → implementai.ae@gmail.com
ChatGPT Web → GoHighLevel → connected; location identity unresolved

Desktop/Codex → Outlook Email → careers@talentbridgedubai.com
Desktop/Codex → Outlook Calendar / OneDrive / Teams → info@talentbridgedubai.com
Desktop/Codex → Gmail / Google Drive / Google Contacts → talentbridgedubai@gmail.com
Desktop/Codex → Google Calendar → implementai.ae@gmail.com
Desktop/Codex → HubSpot → portal 148333343 / talentbridgedubai@gmail.com
Desktop/Codex → GoHighLevel → connected; location identity unresolved

Hermes → GitHub / DRF → tbhrc
Hermes → other commercial accounts → no authenticated account identity proven in this audit

Claude → Outlook Email / Calendar / OneDrive / Teams → info@talentbridgedubai.com
Claude → Gmail / Google Drive → talentbridgedubai@gmail.com
Claude → HubSpot → portal 148333343 / talentbridgedubai@gmail.com
Claude → GitHub / DRF → tbhrc
Claude → Google Calendar / Contacts → Google Workspace MCP not authenticated
Claude → GoHighLevel / Stripe / WhatsApp → no verified direct route
```

Never infer identity from another connector or another surface.

# 7. Current capability backlog

These are real commercial gaps, but they are **not evidence that the surface audit is incomplete**:

1. **GoHighLevel:** exact location/sub-account identity and bounded CRM-write route where required.
2. **WhatsApp Business:** official authenticated operating route by selected architecture.
3. **LinkedIn:** approved authenticated route only if a compliant use case requires it.
4. **Stripe:** bounded actions with confirmed account identity before any commercial mutation.
5. **Lead enrichment:** add a provider only if current research routes prove insufficient.

# 8. Closure audit — Issue #5

- [x] ChatGPT Web / CCO tested and recorded.
- [x] ChatGPT Desktop / Codex tested and recorded.
- [x] Hermes tested from the native runtime and recorded.
- [x] Claude tested and recorded.
- [x] Exact authenticated identities recorded where exposed.
- [x] Read capability, write exposure and write-exercised state distinguished.
- [x] HighLevel Hermes result recorded honestly: location identity unresolved and no authenticated CRM-write route verified.
- [x] Stripe Hermes result recorded honestly: no account identity / MCP / API / CLI route verified.
- [x] Hermes autonomous/runtime capability documented separately from commercial integrations.
- [x] All 29 unified integrations have a Hermes status; no Hermes `Pending` row remains.
- [x] Unified Desktop/Codex statuses reconciled to the detailed Desktop/Codex table.
- [x] Unified Hermes statuses reconciled to the detailed Hermes table.
- [x] Unified Claude statuses reconciled to the detailed Claude table.
- [x] No unsafe external write was performed merely to make the matrix look complete.

**Closure decision:** Issue #5 is ready to close. Future connector/account enablement belongs in focused implementation issues created only when it unlocks a measurable commercial loop.

## Governing rule

**Do not add integrations for completeness. Add them only when they unblock a measurable part of the commercial loop.**
