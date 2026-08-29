# CCO Integration Readiness Checklist

**Role:** CCO — Chief Commercial Officer  
**Purpose:** Maintain one canonical view of the integrations available to the CCO across each operating surface, including exact authenticated account/sender identity where exposed.

## Status key

- ✅ **Verified** — harmless read/search/profile action succeeded and identity is sufficiently known.
- 🟨 **Partial** — connector exists, but access, identity or required commercial capability is incomplete.
- ❌ **Missing** — no direct operating route is available.
- ⏳ **Pending** — surface has not yet been tested.

---

# 1. Unified cross-surface matrix

This is the master table. Each operating surface gets its own status and account/identity columns.

| Integration | **ChatGPT Web / CCO — this assistant** | **Web account / identity** | **ChatGPT Desktop / Codex** | **Desktop / Codex account / identity** | **Hermes** | **Hermes account / identity** | CCO requirement / note |
|---|---|---|---|---|---|---|---|
| **GoHighLevel** | 🟨 Partial — contacts + opportunities reads work; writes not exposed | Connected, but **location/sub-account identity not exposed** | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Primary commercial operating spine; need exact location identity + bounded CRM writes |
| **Outlook Email** | ✅ Verified | `careers@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Email sender identity is critical |
| **Outlook Calendar** | ✅ Verified | `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Calendar identity differs from Outlook Email |
| **LinkedIn** | ❌ Missing direct authenticated operating route | None exposed | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Research/relationship intelligence; no unauthorised scraping or bot messaging |
| **WhatsApp Business** | ❌ Missing | Not connected | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prefer official WhatsApp Business through HighLevel |
| **Stripe** | 🟨 Partial — wider CLI/infrastructure exists, no direct bounded action here | Identity not exposed here | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Payment links, invoices, subscriptions, payment status only |
| **Web research** | ✅ Verified | Native ChatGPT public web | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prospect/company/competitor/buying-signal research |
| **Lead enrichment** | ❌ Missing | None | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Add only if existing data proves insufficient |
| **OneDrive / SharePoint** | ✅ Verified | `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Commercial documents/source files |
| **FolderDesk** | ✅ Verified | Connected; identity not exposed | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Durable/local coordination where required |
| **GitHub / DRF** | ✅ Verified | `tbhrc` / `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Canonical DRF control plane |
| **ATS / recruitment database** | 🟨 Partial — existing system, no dedicated connector here | Existing business system | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Use only where commercially relevant |
| **GulfTalent** | 🟨 Partial — existing account, no direct connector here | Existing account | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Manual/browser route if useful |
| **Google Contacts** | ✅ Verified | `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Warm relationship/contact resolution |
| **Canva** | ✅ Verified | Connected; account identity not exposed | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Sales collateral when directly useful |
| **E-signature / contracts** | ❌ Missing dedicated provider | None | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prefer HighLevel contracts if sufficient |
| **Calling / voice** | ❌ Missing direct telephony route | None | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prefer HighLevel telephony or one provider |
| **Meeting intelligence** | 🟨 Partial | Teams: `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Search/read works; transcription automation not proven |
| **Paid advertising** | ❌ Missing direct ads-platform control | None | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Phase 2 after organic/outbound conversion is proven |
| **Website / landing pages** | 🟨 Partial via HubSpot | HubSpot: `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | HubSpot landing-page access requires reauthorisation; HighLevel preferred |
| **Commercial analytics** | 🟨 Partial | Multiple systems; no unified identity | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Start with HighLevel + DRF; no separate BI until required |
| **Gmail** | ✅ Verified | `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Alternative sender mailbox |
| **Google Calendar** | ✅ Verified | `implementai.ae@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | iMPLEMENTAi calendar identity |
| **Google Drive** | ✅ Verified | `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Google file access |
| **Microsoft Teams** | ✅ Verified | `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Messaging/search/read available |
| **HubSpot** | ✅ Verified | `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | CRM reads + several writes available; not intended as primary CCO spine |
| **Zoho Books** | 🟨 Partial | Connector present; organisation identity unresolved | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Financial actions blocked until organisation identity is confirmed |
| **Asana** | ✅ Verified | `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Available but not required for DRF control |
| **Hindsight Memory** | ✅ Verified | Shared FolderDesk memory bank | ⏳ Pending | ⏳ Pending | ⏳ Pending | ⏳ Pending | Recall/continuity layer only |

**Slack is intentionally excluded. It is not used or required.**

---

# 2. Surface table — ChatGPT Web / CCO (this assistant)

| Status | Integration | Authenticated account / identity | Read test | Write / send test status |
|---|---|---|---|---|
| 🟨 | **GoHighLevel** | Location/sub-account identity not exposed | ✅ Contacts read: **0**. ✅ Opportunities read: **0** | ❌ Connector exposes only `search` + `fetch`; no CRM writes |
| ✅ | **Outlook Email** | `careers@talentbridgedubai.com` | ✅ Mailbox read/list succeeded | ✅ Send/reply/forward/draft actions exposed; **no live send performed** |
| ✅ | **Outlook Calendar** | `info@talentbridgedubai.com` | ✅ Search succeeded | ✅ Calendar write capability exposed; not exercised |
| ❌ | **LinkedIn** | None exposed | Public web only | No approved direct operating action |
| ❌ | **WhatsApp Business** | Not connected | — | — |
| 🟨 | **Stripe** | Identity not exposed here | Not directly tested | No direct bounded Stripe action exposed |
| ✅ | **Web research** | Native | ✅ Proven | N/A |
| ❌ | **Lead enrichment** | None | — | — |
| ✅ | **OneDrive / SharePoint** | `info@talentbridgedubai.com` | ✅ Search succeeded | ✅ File update actions exposed; not exercised in surface test |
| ✅ | **FolderDesk** | Identity not exposed | ✅ `find/recent` succeeded | Bounded actions available |
| ✅ | **GitHub / DRF** | `tbhrc` / `talentbridgedubai@gmail.com` | ✅ Repo/file/profile access | ✅ Issues + DRF file writes **proven** |
| 🟨 | **ATS** | Existing system | No connector test | No direct connector |
| 🟨 | **GulfTalent** | Existing account | No connector test | No direct connector |
| ✅ | **Google Contacts** | `talentbridgedubai@gmail.com` | ✅ Contact search succeeded | Read-focused |
| ✅ | **Canva** | Identity not exposed | ✅ Design search succeeded | Create/edit actions exposed; not exercised |
| ❌ | **E-signature / Contracts** | None | — | — |
| ❌ | **Calling / Voice** | None | — | — |
| 🟨 | **Meeting Intelligence** | Teams: `info@talentbridgedubai.com` | ✅ Teams search/read succeeded | Messaging available; transcription automation unproven |
| ❌ | **Paid Advertising** | None | — | — |
| 🟨 | **Website / Landing Pages** | HubSpot `talentbridgedubai@gmail.com` | ✅ HubSpot account/profile read | Landing-page capability requires reauthorisation |
| 🟨 | **Commercial Analytics** | Multiple systems | ✅ Source-system reads available | No unified write/telemetry layer |
| ✅ | **Gmail** | `talentbridgedubai@gmail.com` | ✅ Profile + mailbox labels | ✅ Send + draft actions exposed; no live send performed |
| ✅ | **Google Calendar** | `implementai.ae@gmail.com` | ✅ Connector search succeeded | ✅ Calendar writes exposed; not exercised |
| ✅ | **Google Drive** | `talentbridgedubai@gmail.com` | ✅ Drive search succeeded | Write capability exposed; not exercised |
| ✅ | **Microsoft Teams** | `info@talentbridgedubai.com` | ✅ Search/read succeeded | ✅ Messaging/reply actions exposed; no live message sent |
| ✅ | **HubSpot** | `talentbridgedubai@gmail.com` | ✅ Profile/permissions succeeded | ✅ Contacts, companies, deals, tasks, calls, meetings, email, notes, products and line-item writes report available |
| 🟨 | **Zoho Books** | Organisation/account identity unresolved | Connector schema available | Do not write until identity is resolved |
| ✅ | **Asana** | `talentbridgedubai@gmail.com` | ✅ Authenticated user lookup | Task/project writes exposed; not exercised |
| ✅ | **Hindsight Memory** | Shared FolderDesk memory bank | ✅ Recall succeeded | Retain available |

---

# 3. Surface table — ChatGPT Desktop / Codex

**Status: not yet tested.**

| Status | Integration | Authenticated account / identity | Read test | Write / send test status |
|---|---|---|---|---|
| ⏳ | **GoHighLevel** | Pending | Pending | Pending — specifically test location identity + CRM writes |
| ⏳ | **Outlook Email** | Pending | Pending | Pending |
| ⏳ | **Outlook Calendar** | Pending | Pending | Pending |
| ⏳ | **LinkedIn** | Pending | Pending | Pending |
| ⏳ | **WhatsApp Business** | Pending | Pending | Pending |
| ⏳ | **Stripe** | Pending | Pending | Pending — test CLI/MCP access and authenticated account |
| ⏳ | **Web research** | Pending | Pending | N/A |
| ⏳ | **Lead enrichment** | Pending | Pending | Pending |
| ⏳ | **OneDrive / SharePoint** | Pending | Pending | Pending |
| ⏳ | **FolderDesk** | Pending | Pending | Pending |
| ⏳ | **GitHub / DRF** | Pending | Pending | Pending |
| ⏳ | **ATS** | Pending | Pending | Pending |
| ⏳ | **GulfTalent** | Pending | Pending | Pending |
| ⏳ | **Google Contacts** | Pending | Pending | Pending |
| ⏳ | **Canva** | Pending | Pending | Pending |
| ⏳ | **E-signature / Contracts** | Pending | Pending | Pending |
| ⏳ | **Calling / Voice** | Pending | Pending | Pending |
| ⏳ | **Meeting Intelligence** | Pending | Pending | Pending |
| ⏳ | **Paid Advertising** | Pending | Pending | Pending |
| ⏳ | **Website / Landing Pages** | Pending | Pending | Pending |
| ⏳ | **Commercial Analytics** | Pending | Pending | Pending |
| ⏳ | **Gmail** | Pending | Pending | Pending |
| ⏳ | **Google Calendar** | Pending | Pending | Pending |
| ⏳ | **Google Drive** | Pending | Pending | Pending |
| ⏳ | **Microsoft Teams** | Pending | Pending | Pending |
| ⏳ | **HubSpot** | Pending | Pending | Pending |
| ⏳ | **Zoho Books** | Pending | Pending | Pending |
| ⏳ | **Asana** | Pending | Pending | Pending |
| ⏳ | **Hindsight Memory** | Pending | Pending | Pending |

---

# 4. Surface table — Hermes

**Status: not yet tested.** Test Hermes as its own autonomous/runtime surface. Record local CLI, MCP, browser, API, credential and scheduled-agent capabilities separately from ChatGPT Web and Desktop/Codex.

| Status | Integration | Authenticated account / identity | Read test | Write / send test status |
|---|---|---|---|---|
| ⏳ | **GoHighLevel** | Pending | Pending | Pending — test exact location identity + CRM writes |
| ⏳ | **Outlook Email** | Pending | Pending | Pending |
| ⏳ | **Outlook Calendar** | Pending | Pending | Pending |
| ⏳ | **LinkedIn** | Pending | Pending | Pending |
| ⏳ | **WhatsApp Business** | Pending | Pending | Pending |
| ⏳ | **Stripe** | Pending | Pending | Pending — test CLI/API + authenticated account |
| ⏳ | **Web research** | Pending | Pending | N/A |
| ⏳ | **Lead enrichment** | Pending | Pending | Pending |
| ⏳ | **OneDrive / SharePoint** | Pending | Pending | Pending |
| ⏳ | **FolderDesk** | Pending | Pending | Pending |
| ⏳ | **GitHub / DRF** | Pending | Pending | Pending |
| ⏳ | **ATS** | Pending | Pending | Pending |
| ⏳ | **GulfTalent** | Pending | Pending | Pending |
| ⏳ | **Google Contacts** | Pending | Pending | Pending |
| ⏳ | **Canva** | Pending | Pending | Pending |
| ⏳ | **E-signature / Contracts** | Pending | Pending | Pending |
| ⏳ | **Calling / Voice** | Pending | Pending | Pending |
| ⏳ | **Meeting Intelligence** | Pending | Pending | Pending |
| ⏳ | **Paid Advertising** | Pending | Pending | Pending |
| ⏳ | **Website / Landing Pages** | Pending | Pending | Pending |
| ⏳ | **Commercial Analytics** | Pending | Pending | Pending |
| ⏳ | **Gmail** | Pending | Pending | Pending |
| ⏳ | **Google Calendar** | Pending | Pending | Pending |
| ⏳ | **Google Drive** | Pending | Pending | Pending |
| ⏳ | **Microsoft Teams** | Pending | Pending | Pending |
| ⏳ | **HubSpot** | Pending | Pending | Pending |
| ⏳ | **Zoho Books** | Pending | Pending | Pending |
| ⏳ | **Asana** | Pending | Pending | Pending |
| ⏳ | **Hindsight Memory** | Pending | Pending | Pending |

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
ChatGPT Desktop / Codex → NOT YET TESTED
Hermes → NOT YET TESTED
```

# Current biggest CCO gaps

1. **HighLevel:** exact location/sub-account identity + bounded CRM write capability.
2. **WhatsApp Business:** official operating route.
3. **LinkedIn:** approved authenticated operating route.
4. **Stripe:** bounded sales/collection actions with confirmed account identity.
5. **Lead enrichment:** only if existing data proves insufficient.

# Surface test progress

- [x] **ChatGPT Web / CCO — this assistant** tested and recorded.
- [ ] **ChatGPT Desktop / Codex** pending.
- [ ] **Hermes** pending.

Keep GitHub Issue #5 open until Desktop/Codex and Hermes are tested and reconciled against the unified table.

## Governing rule

**Do not add integrations for completeness. Add them only when they unblock a measurable part of the commercial loop.**
