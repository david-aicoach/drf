# GHL Business Development Configuration — iMPLEMENTAi.ae

**Status:** Target configuration only — not proof that GHL is the current live CRM  
**Governing programme:** [DRF #150](https://github.com/tbhrc/drf-main/issues/150)  
**Current CRM selection/proof:** [DRF #157](https://github.com/tbhrc/drf-main/issues/157)  
**Canonical BD Skill:** [`tbhrc/skills/drf-business-development`](https://github.com/tbhrc/skills/tree/main/drf-business-development)  
**Future GHL operator:** [tbhrc/skills#159](https://github.com/tbhrc/skills/issues/159)

This file defines the **preferred GHL target configuration if/when GHL is selected and proven**. It is DRF domain configuration, not reusable GHL operating HOW and not a prerequisite for using another currently selected live CRM.

Current live-CRM truth is governed by #157. Do not buy/upgrade GHL or stall BD solely to satisfy this target configuration.

## 1. Account / location

Use one clearly identifiable iMPLEMENTAi.ae GHL location.

Before agent writes are promoted, prove from the live account that the available route can resolve the intended location and perform the required operations. Do not infer account/API authority from UI access or plan marketing.

Never store API keys, tokens or secret values here.

## 2. Recommended pipeline

**Suggested pipeline:** `iMPLEMENTAi Business Development`

Keep the relationship-state model compact:

| # | Stage | Meaning |
|---:|---|---|
| 1 | **Target** | Account identified; research/qualification may still be in progress. |
| 2 | **Qualified** | ICP/offer fit and a credible reason to contact are established. |
| 3 | **Value Upfront Ready** | Audit/brief/diagnostic is ready when the motion requires it. |
| 4 | **Contacted** | First approved outreach was actually sent. |
| 5 | **Engaged** | Real two-way commercial engagement exists. |
| 6 | **Meeting Booked** | Discovery/commercial meeting is scheduled. |
| 7 | **Discovery** | Discovery is underway/complete. |
| 8 | **Recommendation / Proposal** | Commercial recommendation/scope/proposal is being decided. |
| 9 | **Won** | Explicit acquisition/engagement authority exists; AI Ops handoff is allowed. |
| 10 | **Nurture** | Valid fit but timing is not active; a future next action exists. |
| 11 | **Lost** | Opportunity is closed with a useful reason. |

Exact live labels may differ. Preserve the business states rather than forcing unnecessary customisation.

## 3. Minimum useful data

Prefer native GHL fields where they already fit. Add custom fields only when needed.

Minimum useful identity/context:
- company name and website/domain;
- primary contact name/role and legitimate contact route;
- geography;
- source/campaign;
- DRF offer;
- vertical/niche;
- why fit / trigger;
- priority;
- current stage;
- one next action;
- value-upfront status/link where relevant;
- grounded setup revenue/MRR estimate only when useful;
- Lost/Hold reason where applicable.

Do not require every optional field before a clearly qualified opportunity can advance.

## 4. Email and calendar

If GHL becomes the selected live CRM:

- connect only the approved iMPLEMENTAi business-development sender identity;
- verify send/receive/reply threading before relying on automation;
- verify delivery/failure visibility;
- use the approved discovery calendar and discover real IDs from live state;
- never guess account, pipeline, calendar, user or location IDs.

Connecting a mailbox does not authorise bulk or autonomous outbound.

## 5. Automation policy

Safe first internal proofs:

1. value-upfront asset sent → follow-up task;
2. positive reply → stop outbound + Engaged + owner task;
3. meeting booked → stop prospecting + meeting-prep task;
4. Won → verified AI Ops handoff task.

Keep OFF until separately proven/authorised:
- automatic cold-email sequences;
- automatic SMS/WhatsApp prospecting;
- bulk enrolment;
- retrying indeterminate external sends without fresh-read reconciliation;
- automatic material commercial commitments;
- destructive cleanup/merges.

## 6. Required agent-control proof

Before GHL can be declared the live agent-operated CRM, verify the actual available route for the needed actions, proportionally including:

- exact account/location identity;
- contacts search/read/create/update;
- duplicate prevention/upsert behaviour;
- pipelines/stages read;
- opportunities search/read/create/update/move stage;
- notes/tasks/next action where needed;
- conversations/activity read where exposed;
- calendar/appointments where needed;
- fresh-read verification after material writes;
- timeout/indeterminate-write reconciliation;
- no secret exposure.

Platform mechanics belong in the future canonical `ghl-operator` once the live interface is genuinely proven.

## 7. Reporting

If GHL is selected, derive campaign metrics from GHL wherever possible:
- targets and qualified accounts;
- value assets prepared/sent;
- contacted/engaged;
- meetings/discovery;
- proposals;
- Won/Lost/Nurture;
- setup revenue/MRR;
- cycle time and conversion by campaign/offer/vertical/source.

DRF receives aggregate campaign proof, not a manually duplicated per-lead CRM table.

## 8. No-shadow-CRM and migration rule

If #157 selects HubSpot as interim live CRM, keep HubSpot authoritative until a later explicit decision promotes GHL. Do not dual-maintain.

When migration is justified:

1. define source/destination ownership;
2. pause competing writes;
3. deduplicate company/contact/opportunity records;
4. migrate only decision-useful current state/history;
5. verify the destination;
6. declare the new single live CRM owner;
7. stop dual maintenance.

## 9. First controlled proof

Once the **selected live CRM** and approved email route are operational:

```text
1 selected UAE vertical
→ 10 targeted companies
→ qualify all 10
→ prepare value-upfront assets for suitable targets
→ founder-review first outbound batch
→ send only under current authority
→ track reply → meeting → opportunity → proposal → Won
```

Pilot 001 is defined separately at [`campaigns/001-uae-multi-location-restaurants-visibility.md`](campaigns/001-uae-multi-location-restaurants-visibility.md).
