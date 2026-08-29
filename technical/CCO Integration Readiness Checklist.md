# CCO Integration Readiness Checklist

**Role:** CCO — Chief Commercial Officer  
**Purpose:** Track every integration required for AI-operated business development and sales, what is already available from the current ChatGPT surface, and what still needs connecting.

## Status key

- [x] **Live — direct:** available to the CCO from this ChatGPT surface now.
- [~] **Available — indirect:** infrastructure exists, but this surface does not have a direct operating connector/action yet.
- [ ] **Not connected:** required capability still needs a connector, MCP, API, browser route or approved integration.

## Minimum commercial operating stack

| Status | Integration | CCO use | Access from current surface | Next action |
|---|---|---|---|---|
| [ ] | **GoHighLevel** | CRM, contacts, companies, opportunities, pipeline, conversations, workflows, forms, calendars, reporting | No direct HighLevel connector/MCP is exposed on this ChatGPT surface | Connect HighLevel MCP/API to the CCO surface; this is the highest-priority gap |
| [x] | **Microsoft Outlook Email** | Read inbound leads, search history, replies, follow-ups, proposals | ChatGPT connector: `Microsoft_Outlook_Email` | Use as primary CCO mailbox surface where appropriate |
| [x] | **Microsoft Outlook Calendar** | Availability, booking, rescheduling, meeting management | ChatGPT connector: `Microsoft_Outlook_Calendar` | Use for CCO meeting orchestration |
| [ ] | **LinkedIn** | Relationship intelligence, prospect research, warm-path discovery, content and high-value outreach | No direct authenticated LinkedIn operating connector on this surface; public web research is available | Add an approved LinkedIn route; avoid unauthorised scraping/bot messaging |
| [ ] | **WhatsApp Business** | Inbound enquiries, follow-up, booking links, proposal/payment links | No direct WhatsApp connector on this surface | Prefer official WhatsApp Business through HighLevel when HighLevel is connected |
| [~] | **Stripe** | Customers, invoices, payment links, subscriptions, payment status | Stripe CLI exists in the wider operating infrastructure, but no direct Stripe action is exposed on this ChatGPT surface | Expose the bounded Stripe actions required for sales/collections; do not grant unrestricted financial control |
| [x] | **Web research** | Companies, decision-makers, competitors, buying signals, news, public evidence | Native ChatGPT web research/search surface | Use for prospect and account intelligence |
| [ ] | **Lead enrichment provider** | Verified company/contact enrichment, emails, phones, firmographics | No dedicated Apollo/Clay/Hunter/RocketReach/Snov/PDL connector is currently exposed | Select one only when existing data is insufficient; avoid redundant subscriptions |
| [x] | **OneDrive / SharePoint** | Proposals, agreements, pricing, case studies, commercial files, client materials | ChatGPT connector: `Microsoft_SharePoint` including OneDrive content | Use as commercial document source of truth where appropriate |
| [x] | **FolderDesk** | Durable projects, tasks, files, operating truth and coordination | ChatGPT connector: `FD0-FolderDesk` | Use where DRF needs FolderDesk-owned durable/local coordination |
| [x] | **GitHub / DRF** | Commercial factory control plane, Issues, Projects, Actions, agents, workflows, research, experiments | ChatGPT connector: `GitHub` | Canonical control plane for DRF work |
| [~] | **ATS / recruitment database** | Existing client/contact history, cross-sell intelligence and recruitment signals | Business infrastructure exists, but no dedicated ATS connector is exposed on this surface | Connect only if needed for commercial intelligence; recruitment is not the first DRF business |
| [~] | **GulfTalent** | Market/hiring signals and existing lead ecosystem | Account exists, but no direct GulfTalent connector is exposed on this surface | Use browser/manual or approved integration only if commercially useful |
| [x] | **Microsoft / Google contacts capability** | Resolve people, emails, organisations and warm relationships | ChatGPT connector: `Google_Contacts`; Outlook relationship data can also be searched through Outlook email | Use as supporting relationship-resolution layer |
| [x] | **Canva** | Sales collateral, one-pagers, visual proposals and campaign assets | ChatGPT connector: `Canva` | Use only when visual collateral directly supports sales |
| [ ] | **E-signature / contracts** | Send, track, remind and detect signed agreements | No dedicated DocuSign/PandaDoc/Adobe Sign action is exposed on this surface | Prefer HighLevel documents/contracts if sufficient once HighLevel is live; otherwise add one e-sign provider |
| [ ] | **Calling / voice** | Place/receive/log calls, transcription, CRM updates | No direct telephony/Vapi/Twilio/Aircall operating connector exposed on this surface | Prefer HighLevel telephony or one approved voice provider |
| [~] | **Meeting intelligence** | Transcript → summary → objections → next action → CRM | Microsoft Teams connector is available, but no general meeting-recording/transcription control is confirmed from this surface | Use Teams/native transcripts where available; add a specialist only if there is a proven gap |
| [ ] | **Paid advertising** | LinkedIn/Google/Meta campaign execution and attribution | No direct ads-platform operating connectors exposed on this surface | Phase 2 only after warm/outbound channels prove conversion |
| [ ] | **Website / landing-page control** | Offer pages, forms, conversion fixes, lead routing | Public web access exists, but no confirmed authenticated CMS control for the CCO on this surface | Prefer HighLevel sites/funnels when practical; connect site admin only when required |
| [~] | **Commercial analytics** | Leads, replies, meetings, proposals, wins, revenue, CAC, pipeline and conversion | GitHub/DRF and connected business systems are available, but unified commercial telemetry is not yet connected because HighLevel is not live | Start with HighLevel + DRF; do not add a BI platform until a real gap appears |

## Additional connected capabilities already available on this surface

These are not all required for the first CCO loop, but they are already available and can be used when relevant:

- [x] **Gmail** — `Gmail`
- [x] **Google Calendar** — `Google_Calendar`
- [x] **Google Drive** — `Google_Drive`
- [x] **Microsoft Teams** — `Microsoft_Teams`
- [x] **HubSpot** — `HubSpot`
- [x] **Zoho Books** — `Zoho_Books_MCP`
- [x] **Slack** — `Slack`
- [x] **Asana** — `Asana`
- [x] **Hindsight memory** — `Hindsight-Memory`

These should not be introduced into the CCO workflow unless they solve a real commercial need. DRF remains GitHub-native and HighLevel is intended to become the primary commercial operating spine.

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

## Current readiness

### Directly usable now

```text
GitHub / DRF
Outlook Email
Outlook Calendar
OneDrive / SharePoint
FolderDesk
Web research
Google Contacts
Canva
```

### Biggest blockers to full CCO autonomy

```text
1. GoHighLevel MCP/API
2. Official WhatsApp Business route
3. LinkedIn operating route
4. Stripe bounded sales/collection actions
5. Lead enrichment source, only if existing data proves insufficient
```

## Governing rule

**Do not add integrations for completeness. Add them only when they unblock a measurable part of the commercial loop.**
