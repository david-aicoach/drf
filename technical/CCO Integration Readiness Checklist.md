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
| **GoHighLevel** | 🟨 Partial — read works; location identity unresolved | ⏳ Pending | ⏳ Pending | ⏳ Pending | Primary commercial spine; require exact location + bounded writes |
| **Outlook Email** | ✅ `careers@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Sender identity is critical |
| **Outlook Calendar** | ✅ `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Calendar identity differs from Outlook Email |
| **LinkedIn** | ❌ No authenticated operating route | ⏳ Pending | ⏳ Pending | ⏳ Pending | Research/relationship intelligence; no unauthorised bot messaging |
| **WhatsApp Business** | ❌ Not connected | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prefer official WhatsApp Business through HighLevel |
| **Stripe** | 🟨 CLI/infrastructure known; no bounded action here | ⏳ Pending | ⏳ Pending | ⏳ Pending | Payment links, invoices, subscriptions, payment status |
| **Web research** | ✅ Native ChatGPT | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prospect/company/competitor/buying-signal research |
| **Lead enrichment** | ❌ None | ⏳ Pending | ⏳ Pending | ⏳ Pending | Add only if existing data proves insufficient |
| **OneDrive / SharePoint** | ✅ `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Commercial documents/source files |
| **FolderDesk** | ✅ Connected; identity not exposed | ⏳ Pending | ⏳ Pending | ⏳ Pending | Durable coordination where required |
| **GitHub / DRF** | ✅ `tbhrc` / `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Canonical DRF control plane |
| **ATS / recruitment database** | 🟨 Existing system; no direct connector | ⏳ Pending | ⏳ Pending | ⏳ Pending | Use only where commercially relevant |
| **GulfTalent** | 🟨 Existing account; no direct connector | ⏳ Pending | ⏳ Pending | ⏳ Pending | Browser/manual route if useful |
| **Google Contacts** | ✅ `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Warm relationship/contact resolution |
| **Canva** | ✅ Connected; identity not exposed | ⏳ Pending | ⏳ Pending | ⏳ Pending | Sales collateral |
| **E-signature / contracts** | ❌ No dedicated provider | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prefer HighLevel contracts if sufficient |
| **Calling / voice** | ❌ No direct telephony route | ⏳ Pending | ⏳ Pending | ⏳ Pending | Prefer HighLevel telephony or one provider |
| **Meeting intelligence** | 🟨 Teams `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Read works; transcription automation unproven |
| **Paid advertising** | ❌ No ads-platform control | ⏳ Pending | ⏳ Pending | ⏳ Pending | Phase 2 only after outbound conversion is proven |
| **Website / landing pages** | 🟨 HubSpot `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | HighLevel preferred; HubSpot page access needs reauthorisation |
| **Commercial analytics** | 🟨 Multiple readable systems | ⏳ Pending | ⏳ Pending | ⏳ Pending | Start with HighLevel + DRF |
| **Gmail** | ✅ `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Alternative sender mailbox |
| **Google Calendar** | ✅ `implementai.ae@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | iMPLEMENTAi calendar identity |
| **Google Drive** | ✅ `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Google file access |
| **Microsoft Teams** | ✅ `info@talentbridgedubai.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Messaging/search/read |
| **HubSpot** | ✅ `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Secondary CRM; multiple writes available |
| **Zoho Books** | 🟨 Connected; organisation identity unresolved | ⏳ Pending | ⏳ Pending | ⏳ Pending | Block financial writes until identity confirmed |
| **Asana** | ✅ `talentbridgedubai@gmail.com` | ⏳ Pending | ⏳ Pending | ⏳ Pending | Available but not required for DRF control |
| **Hindsight Memory** | ✅ Shared FolderDesk memory | ⏳ Pending | ⏳ Pending | ⏳ Pending | Continuity layer only |

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

**Status: ⏳ not yet tested.**

| Integration | Status | Authenticated account / identity | Read | Write / send |
|---|---|---|---|---|
| GoHighLevel | ⏳ | Pending | Pending | Test location identity + CRM writes |
| Outlook Email | ⏳ | Pending | Pending | Pending |
| Outlook Calendar | ⏳ | Pending | Pending | Pending |
| LinkedIn | ⏳ | Pending | Pending | Pending |
| WhatsApp Business | ⏳ | Pending | Pending | Pending |
| Stripe | ⏳ | Pending | Pending | Test CLI/MCP + account identity |
| Web research | ⏳ | Pending | Pending | N/A |
| Lead enrichment | ⏳ | Pending | Pending | Pending |
| OneDrive / SharePoint | ⏳ | Pending | Pending | Pending |
| FolderDesk | ⏳ | Pending | Pending | Pending |
| GitHub / DRF | ⏳ | Pending | Pending | Pending |
| ATS / recruitment database | ⏳ | Pending | Pending | Pending |
| GulfTalent | ⏳ | Pending | Pending | Pending |
| Google Contacts | ⏳ | Pending | Pending | Pending |
| Canva | ⏳ | Pending | Pending | Pending |
| E-signature / contracts | ⏳ | Pending | Pending | Pending |
| Calling / voice | ⏳ | Pending | Pending | Pending |
| Meeting intelligence | ⏳ | Pending | Pending | Pending |
| Paid advertising | ⏳ | Pending | Pending | Pending |
| Website / landing pages | ⏳ | Pending | Pending | Pending |
| Commercial analytics | ⏳ | Pending | Pending | Pending |
| Gmail | ⏳ | Pending | Pending | Pending |
| Google Calendar | ⏳ | Pending | Pending | Pending |
| Google Drive | ⏳ | Pending | Pending | Pending |
| Microsoft Teams | ⏳ | Pending | Pending | Pending |
| HubSpot | ⏳ | Pending | Pending | Pending |
| Zoho Books | ⏳ | Pending | Pending | Pending |
| Asana | ⏳ | Pending | Pending | Pending |
| Hindsight Memory | ⏳ | Pending | Pending | Pending |

---

# 4. Surface — Hermes

**Status: ⏳ not yet tested.** Test local CLI, MCP, browser, API, credential and scheduled-agent capabilities.

| Integration | Status | Authenticated account / identity | Read | Write / send |
|---|---|---|---|---|
| GoHighLevel | ⏳ | Pending | Pending | Test location identity + CRM writes |
| Outlook Email | ⏳ | Pending | Pending | Pending |
| Outlook Calendar | ⏳ | Pending | Pending | Pending |
| LinkedIn | ⏳ | Pending | Pending | Pending |
| WhatsApp Business | ⏳ | Pending | Pending | Pending |
| Stripe | ⏳ | Pending | Pending | Test CLI/API + account identity |
| Web research | ⏳ | Pending | Pending | N/A |
| Lead enrichment | ⏳ | Pending | Pending | Pending |
| OneDrive / SharePoint | ⏳ | Pending | Pending | Pending |
| FolderDesk | ⏳ | Pending | Pending | Pending |
| GitHub / DRF | ⏳ | Pending | Pending | Pending |
| ATS / recruitment database | ⏳ | Pending | Pending | Pending |
| GulfTalent | ⏳ | Pending | Pending | Pending |
| Google Contacts | ⏳ | Pending | Pending | Pending |
| Canva | ⏳ | Pending | Pending | Pending |
| E-signature / contracts | ⏳ | Pending | Pending | Pending |
| Calling / voice | ⏳ | Pending | Pending | Pending |
| Meeting intelligence | ⏳ | Pending | Pending | Pending |
| Paid advertising | ⏳ | Pending | Pending | Pending |
| Website / landing pages | ⏳ | Pending | Pending | Pending |
| Commercial analytics | ⏳ | Pending | Pending | Pending |
| Gmail | ⏳ | Pending | Pending | Pending |
| Google Calendar | ⏳ | Pending | Pending | Pending |
| Google Drive | ⏳ | Pending | Pending | Pending |
| Microsoft Teams | ⏳ | Pending | Pending | Pending |
| HubSpot | ⏳ | Pending | Pending | Pending |
| Zoho Books | ⏳ | Pending | Pending | Pending |
| Asana | ⏳ | Pending | Pending | Pending |
| Hindsight Memory | ⏳ | Pending | Pending | Pending |

---

# 5. Surface — Claude

**Status: ⏳ not yet tested.** Test Claude as its own operating surface, including direct connectors, MCPs, browser/computer-use where available, and exact authenticated account/location identity.

| Integration | Status | Authenticated account / identity | Read | Write / send |
|---|---|---|---|---|
| GoHighLevel | ⏳ | Pending | Pending | Test OAuth/MCP location identity + CRM writes |
| Outlook Email | ⏳ | Pending | Pending | Pending |
| Outlook Calendar | ⏳ | Pending | Pending | Pending |
| LinkedIn | ⏳ | Pending | Pending | Pending |
| WhatsApp Business | ⏳ | Pending | Pending | Pending |
| Stripe | ⏳ | Pending | Pending | Test MCP/API + account identity |
| Web research | ⏳ | Pending | Pending | N/A |
| Lead enrichment | ⏳ | Pending | Pending | Pending |
| OneDrive / SharePoint | ⏳ | Pending | Pending | Pending |
| FolderDesk | ⏳ | Pending | Pending | Pending |
| GitHub / DRF | ⏳ | Pending | Pending | Pending |
| ATS / recruitment database | ⏳ | Pending | Pending | Pending |
| GulfTalent | ⏳ | Pending | Pending | Pending |
| Google Contacts | ⏳ | Pending | Pending | Pending |
| Canva | ⏳ | Pending | Pending | Pending |
| E-signature / contracts | ⏳ | Pending | Pending | Pending |
| Calling / voice | ⏳ | Pending | Pending | Pending |
| Meeting intelligence | ⏳ | Pending | Pending | Pending |
| Paid advertising | ⏳ | Pending | Pending | Pending |
| Website / landing pages | ⏳ | Pending | Pending | Pending |
| Commercial analytics | ⏳ | Pending | Pending | Pending |
| Gmail | ⏳ | Pending | Pending | Pending |
| Google Calendar | ⏳ | Pending | Pending | Pending |
| Google Drive | ⏳ | Pending | Pending | Pending |
| Microsoft Teams | ⏳ | Pending | Pending | Pending |
| HubSpot | ⏳ | Pending | Pending | Pending |
| Zoho Books | ⏳ | Pending | Pending | Pending |
| Asana | ⏳ | Pending | Pending | Pending |
| Hindsight Memory | ⏳ | Pending | Pending | Pending |

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
Claude → NOT YET TESTED
```

# Current biggest CCO gaps

1. **HighLevel:** exact location/sub-account identity + bounded CRM write capability.
2. **WhatsApp Business:** official operating route.
3. **LinkedIn:** approved authenticated operating route.
4. **Stripe:** bounded sales/collection actions with confirmed account identity.
5. **Lead enrichment:** only if existing data proves insufficient.

# Surface test progress

- [x] **ChatGPT Web / CCO** tested and recorded.
- [ ] **ChatGPT Desktop / Codex** pending.
- [ ] **Hermes** pending.
- [ ] **Claude** pending.

Keep GitHub Issue #5 open until Desktop/Codex, Hermes and Claude are tested and reconciled against the unified table.

## Governing rule

**Do not add integrations for completeness. Add them only when they unblock a measurable part of the commercial loop.**