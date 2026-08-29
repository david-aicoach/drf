# CCO Integration Readiness Checklist

**Role:** CCO — Chief Commercial Officer  
**Purpose:** Track the integrations required for BD/Sales, the exact authenticated account available to the CCO, and which capabilities are proven on each operating surface.

## Status key

- [x] **Verified:** harmless read/search/profile action succeeded on this surface and the operating identity is sufficiently known.
- [~] **Partial:** connector/infrastructure exists, but access is incomplete, blocked, identity is unresolved, or the required commercial capability is not yet proven.
- [ ] **Not connected:** no direct operating route is available on this surface.
- **Write exposed:** the connector exposes a write/send action, but no live external write was performed unless explicitly stated.
- **Desktop/Codex:** intentionally left pending until tested from ChatGPT Desktop / Codex.

## Core CCO commercial stack — surface verification

| Current ChatGPT | Integration | Authenticated account / sender identity | Read test | Write / send availability | ChatGPT Desktop / Codex | Commercial note |
|---|---|---|---|---|---|---|
| [~] | **GoHighLevel** | **Connected HighLevel CRM, but authenticated location/sub-account name and ID are not exposed by this connector** | ✅ Contacts read succeeded: **0 contacts**. ✅ Opportunities read succeeded: **0 opportunities**. Repeated location/profile probes did not expose identity | ❌ Current ChatGPT HighLevel connector exposes only `search` and `fetch`; no CRM write actions are exposed | ⏳ Pending | Connection is live but not yet sufficient for CCO operation. Need exact location identity plus bounded contact/opportunity/conversation/calendar/workflow write capability |
| [x] | **Microsoft Outlook Email** | **Careers & Job Portal of Talent Bridge — `careers@talentbridgedubai.com`** | ✅ Mailbox read/list succeeded | ✅ Send, reply, forward and draft actions exposed; **no live send performed** | ⏳ Pending | Critical: normal sends through this connector originate from the careers mailbox unless a delegated/shared mailbox is explicitly selected |
| [x] | **Microsoft Outlook Calendar** | **Talent Bridge Dubai — `info@talentbridgedubai.com`** | ✅ Calendar search succeeded | 🟨 Calendar write capability exists; not exercised in this test | ⏳ Pending | Different authenticated Microsoft account from Outlook Email; never assume the same identity |
| [ ] | **LinkedIn** | No authenticated LinkedIn operating account exposed | Public web research only | No approved direct posting/DM route exposed | ⏳ Pending | Relationship intelligence, content and manual high-value engagement; no unauthorised scraping/bot messaging |
| [ ] | **WhatsApp Business** | Not connected | Not available | Not available | ⏳ Pending | Prefer official WhatsApp Business through HighLevel |
| [~] | **Stripe** | Wider Stripe CLI/infrastructure exists; no authenticated Stripe action exposed on this ChatGPT surface | Not tested here | No direct bounded payment/sales action exposed here | ⏳ Pending | Need payment links, invoices, subscriptions and payment status only; no unrestricted financial control |
| [x] | **Web research** | N/A — native public web surface | ✅ Available | N/A | ⏳ Pending | Company, competitor, decision-maker, news and buying-signal research |
| [ ] | **Lead enrichment provider** | None connected | Not available | Not available | ⏳ Pending | Add only when existing lead data proves insufficient |
| [x] | **OneDrive / SharePoint** | **Talent Bridge Dubai — `info@talentbridgedubai.com`** | ✅ Search returned OneDrive/SharePoint documents | ✅ Exact-file update action exposed; not exercised in this test | ⏳ Pending | Commercial source files, proposals, agreements, pricing and collateral |
| [x] | **FolderDesk** | Connector account identity not exposed | ✅ `find/recent` succeeded | Bounded operating actions available; no new write needed for this test | ⏳ Pending | FolderDesk-owned durable/local coordination only |
| [x] | **GitHub / DRF** | **GitHub `tbhrc` — `talentbridgedubai@gmail.com`** | ✅ Repo/file/profile access succeeded | ✅ Writes proven in this session: Issues and DRF file updates | ⏳ Pending | Canonical DRF control plane |
| [~] | **ATS / recruitment database** | Existing business system; no dedicated connector exposed here | Not tested | Not available from this surface | ⏳ Pending | Use for legitimate commercial intelligence only when relevant |
| [~] | **GulfTalent** | Existing account; no direct connector exposed here | Not tested | Not available from this surface | ⏳ Pending | Browser/manual route only if commercially useful |
| [x] | **Google Contacts** | **Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com`** | ✅ Contact search succeeded | Read-focused connector | ⏳ Pending | Warm relationship/contact resolution |
| [x] | **Canva** | Authenticated Canva connection; **account email/username not exposed by connector** | ✅ Existing-design search succeeded | Design creation/edit actions exposed; not exercised in this test | ⏳ Pending | Sales collateral only when directly useful |
| [ ] | **E-signature / contracts** | No dedicated e-sign account exposed | Not available | Not available | ⏳ Pending | Prefer HighLevel contracts/documents if sufficient; otherwise add one provider only |
| [ ] | **Calling / voice** | No direct telephony account exposed | Not available | Not available | ⏳ Pending | Prefer HighLevel telephony or one approved provider |
| [~] | **Meeting intelligence** | **Microsoft Teams: Talent Bridge Dubai — `info@talentbridgedubai.com`** | ✅ Teams search/read access succeeded | Teams messaging actions exposed; meeting recording/transcription control not proven | ⏳ Pending | Meeting → transcript/notes → CRM remains partially proven |
| [ ] | **Paid advertising** | No LinkedIn Ads / Google Ads / Meta Ads operating connector exposed | Not available | Not available | ⏳ Pending | Phase 2 after warm/outbound conversion is proven |
| [~] | **Website / landing-page control** | **HubSpot: Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com`** | ✅ HubSpot account/profile and permissions returned | 🟨 Landing-page capability exists but currently requires reauthorisation; portal reports onboarding incomplete | ⏳ Pending | HighLevel remains preferred commercial site/funnel route unless evidence says otherwise |
| [~] | **Commercial analytics** | Multiple authenticated systems; no single unified identity | DRF/GitHub + HubSpot + HighLevel read access + connected business-system reads available | No unified CCO telemetry yet | ⏳ Pending | Start with HighLevel + DRF; do not add another BI layer without a proven need |

## Additional useful connectors already verified on current ChatGPT surface

| Current ChatGPT | Connector | Authenticated account / identity | Test result | Write availability | ChatGPT Desktop / Codex |
|---|---|---|---|---|---|
| [x] | **Gmail** | **Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com`** | ✅ Profile + mailbox labels succeeded | ✅ Send and draft actions exposed; **no live send performed** | ⏳ Pending |
| [x] | **Google Calendar** | **iMPLEMENTAi — `implementai.ae@gmail.com`** | ✅ Connector search succeeded; no matching event in test window | ✅ Calendar write actions exposed; not exercised | ⏳ Pending |
| [x] | **Google Drive** | **Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com`** | ✅ Drive search succeeded | Google Drive write capabilities are available through the connector; not exercised here | ⏳ Pending |
| [x] | **Microsoft Teams** | **Talent Bridge Dubai — `info@talentbridgedubai.com`** | ✅ Search returned Teams data | ✅ Messaging/reply actions exposed; no live message sent | ⏳ Pending |
| [x] | **HubSpot** | **Talent Bridge HR Consultancy — `talentbridgedubai@gmail.com`** | ✅ Profile/permission test succeeded | ✅ Contact, company, deal, ticket, task, call, meeting, email, note, product and line-item writes report available; writes require normal connector confirmation rules | ⏳ Pending |
| [~] | **Zoho Books** | Connected MCP exists; exact organisation/account identity not yet resolved from this surface | Connector schema available; no safe organisation-scoped read completed because organisation ID was not resolved | Financial write actions exist; not to be used until organisation identity and commercial need are explicit | ⏳ Pending |
| [x] | **Asana** | **Talent Bridge — `talentbridgedubai@gmail.com`** | ✅ Authenticated user lookup succeeded | ✅ Task/project actions exposed; not exercised | ⏳ Pending |
| [x] | **Hindsight Memory** | Shared FolderDesk memory bank; no user email identity exposed | ✅ Recall succeeded | ✅ Memory retain actions exposed; not needed for this test | ⏳ Pending |

**Slack is intentionally not part of the CCO stack and is not tracked.**

## Confirmed account map — current ChatGPT surface

| System | Authenticated identity |
|---|---|
| GoHighLevel | Connected; location/sub-account identity **not exposed** by current connector |
| Outlook Email | `careers@talentbridgedubai.com` |
| Outlook Calendar | `info@talentbridgedubai.com` |
| OneDrive / SharePoint | `info@talentbridgedubai.com` |
| Microsoft Teams | `info@talentbridgedubai.com` |
| Gmail | `talentbridgedubai@gmail.com` |
| Google Contacts | `talentbridgedubai@gmail.com` |
| Google Drive | `talentbridgedubai@gmail.com` |
| Google Calendar | `implementai.ae@gmail.com` |
| HubSpot | `talentbridgedubai@gmail.com` |
| Asana | `talentbridgedubai@gmail.com` |
| GitHub | username `tbhrc`; email `talentbridgedubai@gmail.com` |
| Canva | Connected; identity not exposed |
| FolderDesk | Connected; identity not exposed |
| Hindsight | Connected shared memory bank; identity not exposed |
| Zoho Books | Connector present; organisation/account identity unresolved |

## CCO sender / account rule

Before any outbound message, invitation, CRM mutation or customer-facing write, the CCO must identify the authenticated account that will perform the action.

**Never infer sender or CRM location identity from the brand, conversation, another connector, or a different Microsoft/Google/HighLevel connection.**

Examples from the current surface:

```text
Outlook Email send → careers@talentbridgedubai.com
Gmail send         → talentbridgedubai@gmail.com
Outlook Calendar   → info@talentbridgedubai.com
Google Calendar    → implementai.ae@gmail.com
GoHighLevel CRM    → connected, but location identity unresolved
```

If the required sender/account differs, use an explicitly authorised delegated/shared mailbox or another confirmed connection rather than silently sending or mutating the wrong identity/location.

## CCO minimum viable operating loop

```text
RESEARCH
   ↓
PROSPECT / RELATIONSHIP INTELLIGENCE
   ↓
OUTREACH
   ↓
FOLLOW-UP
   ↓
QUALIFY
   ↓
BOOK
   ↓
DAVID MEETS / CLOSES
   ↓
PROPOSAL / CONTRACT / PAYMENT
   ↓
CRM + NEXT ACTION
   ↓
REACTIVATE / UPSELL / REPEAT
```

## Current ChatGPT surface — verified core capabilities

```text
GitHub / DRF              → tbhrc / talentbridgedubai@gmail.com
HighLevel                 → READ LIVE; contacts 0; opportunities 0; location identity unresolved
Outlook Email             → careers@talentbridgedubai.com
Outlook Calendar          → info@talentbridgedubai.com
OneDrive / SharePoint     → info@talentbridgedubai.com
Microsoft Teams           → info@talentbridgedubai.com
Gmail                     → talentbridgedubai@gmail.com
Google Contacts           → talentbridgedubai@gmail.com
Google Drive              → talentbridgedubai@gmail.com
Google Calendar           → implementai.ae@gmail.com
HubSpot                   → talentbridgedubai@gmail.com
FolderDesk                → connected; identity not exposed
Canva                     → connected; identity not exposed
Web research              → native
Asana                     → talentbridgedubai@gmail.com
Hindsight                 → connected shared memory bank
```

## Biggest blockers to full CCO autonomy

```text
1. HighLevel — expose exact authenticated location/sub-account identity + bounded CRM write actions
2. Official WhatsApp Business route
3. Approved LinkedIn operating route
4. Stripe bounded sales/collection actions
5. Lead enrichment source — only if existing data proves insufficient
```

## Surface test progress

- [x] **Current ChatGPT surface** — core and useful connected integrations tested and identities recorded. HighLevel read access verified; identity/write scope remains partial.
- [ ] **ChatGPT Desktop / Codex** — pending. Test the same matrix from that surface and record its local/MCP/CLI access separately.

Do not close the surface-verification Issue until the Desktop/Codex pass is complete.

## Governing rule

**Do not add integrations for completeness. Add them only when they unblock a measurable part of the commercial loop.**
