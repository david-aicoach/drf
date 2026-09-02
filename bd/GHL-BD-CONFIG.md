# GHL Business Development Configuration — iMPLEMENTAi.ae

**Status:** Target configuration — founder setup pending  
**Governing programme:** [DRF #150](https://github.com/tbhrc/drf-main/issues/150)  
**BD Skill:** [tbhrc/skills#158](https://github.com/tbhrc/skills/issues/158)  
**GHL operator:** [tbhrc/skills#159](https://github.com/tbhrc/skills/issues/159)

This file defines **iMPLEMENTAi.ae's intended GHL business configuration**. It is domain configuration, not a reusable GHL operating workflow.

Reusable GHL HOW belongs in the future canonical `ghl-operator` Skill.

## 1. Location / account

Use one clearly identifiable iMPLEMENTAi.ae GHL location for the first BD implementation.

Record the exact live location/account identity after setup and MCP verification. Do not place API keys or secret values here.

Required before agent writes are promoted:
- correct iMPLEMENTAi.ae location confirmed;
- approved sender mailbox connected;
- pipeline created;
- calendar created/selected;
- master MCP/API can read the exact location identity;
- basic contact + opportunity reads/writes are verified.

## 2. Primary pipeline

**Recommended pipeline name:** `iMPLEMENTAi Business Development`

Keep stages simple. Do not encode every internal action as a pipeline stage.

| # | Stage | Meaning |
|---:|---|---|
| 1 | **Target** | Account identified; research/qualification may still be in progress. |
| 2 | **Qualified** | ICP/offer fit and a credible reason to contact are established. |
| 3 | **Value Upfront Ready** | Audit/brief/diagnostic or other useful first-touch asset is prepared when the motion requires it. |
| 4 | **Contacted** | First approved outreach was actually sent. |
| 5 | **Engaged** | Prospect replied positively or entered a real two-way commercial conversation. |
| 6 | **Meeting Booked** | Discovery/commercial meeting is scheduled. |
| 7 | **Discovery** | Discovery is underway/complete and the opportunity is being diagnosed. |
| 8 | **Recommendation / Proposal** | Commercial recommendation, scope or proposal is being presented/decided. |
| 9 | **Won** | Explicit engagement authority / acquisition confirmed. Handoff to AI Ops is allowed. |
| 10 | **Nurture** | Valid fit but timing is not active; future next action/date exists. |
| 11 | **Lost** | Opportunity closed with a useful reason. |

### Why this is shorter than the working process list

States such as `Researching`, `Audit prepared`, `Audit sent`, `Follow-up` and `Discovery completed` are better represented by fields/tags/activity/next action rather than 15+ pipeline columns.

The pipeline should answer one question quickly:

> **Where is this commercial relationship now?**

## 3. Minimum contact/company data

Use native GHL fields where they already exist. Add custom fields only for business information GHL does not already represent cleanly.

Minimum useful account/contact information:
- company name;
- website/domain;
- primary contact name;
- job title / role;
- email;
- phone when legitimately available;
- country / emirate;
- LinkedIn/company URL when useful;
- source.

Do not require every field before creating a legitimate qualified record.

## 4. Recommended BD custom fields

Map these to the simplest native/custom field type available in the live GHL UI.

| Field | Suggested type | Purpose |
|---|---|---|
| **DRF Offer** | dropdown/text | Outcome/offer being tested or sold. |
| **Vertical / Niche** | dropdown/text | Campaign/ICP grouping. |
| **Why Fit / Trigger** | long text | Specific reason this company is worth contacting. |
| **BD Priority** | dropdown | `Priority`, `Qualified`, `Hold`. |
| **Value-Upfront Type** | dropdown | `None`, `Digital Presence Brief Audit`, or later approved diagnostic type. |
| **Value-Upfront Status** | dropdown | `Not needed`, `Planned`, `In progress`, `Ready`, `Sent`. |
| **Value-Upfront Link** | URL/text | Stable report/file/reference link when appropriate. |
| **Research Date** | date | Last material qualification/public research date. |
| **Campaign ID** | text | Links the opportunity to a DRF campaign/experiment without duplicating CRM state in GitHub. |
| **Estimated Setup Revenue** | currency/number | Commercial estimate when sufficiently real. |
| **Estimated MRR** | currency/number | Recurring revenue estimate when sufficiently real. |
| **Lost / Hold Reason** | dropdown/text | Useful learning instead of unexplained dead opportunities. |

Do not create a custom field merely because it could exist. Prefer native fields where possible.

## 5. Tags — keep few

Suggested initial tags only:
- `drf-bd`
- `value-upfront`
- `audit-prepared`
- `audit-sent`
- `positive-reply`
- `nurture`

Use custom fields for stable structured categories such as offer and vertical rather than generating dozens of dynamic tags.

## 6. Opportunity minimum state

Every active opportunity should have:
- pipeline stage;
- company/contact link;
- offer;
- source/campaign when known;
- next action or task;
- owner when ownership matters;
- latest meaningful context;
- value estimate only when grounded enough to be useful.

Avoid empty active opportunities with no next action.

## 7. Email

Connect the approved **iMPLEMENTAi.ae business-development sender identity**.

Before any automation:
1. verify send and receive in the GHL UI;
2. verify reply threading/conversation history;
3. verify sender name/signature;
4. verify delivery/failure visibility;
5. verify the future MCP can read the resulting conversation state.

Do not enable bulk outbound simply because the mailbox is connected.

## 8. Calendar

Recommended initial calendar:

**`iMPLEMENTAi Discovery`**

Suggested default meeting type:
- 30 minutes;
- correct UAE timezone handling;
- buffer/availability chosen by David;
- booking confirmation/reminder copy kept simple and human.

The final calendar/user ID must be discovered from GHL after creation; never hard-code or guess it in a Skill.

## 9. Initial automation policy

### Safe to configure internally

These may be prepared, but external-action workflows should remain inactive until tested/authorised:
- internal task/reminder creation;
- owner notification;
- stage hygiene;
- audit-ready internal notification;
- meeting-prep task creation.

### Keep OFF initially

Do not activate by default:
- automatic cold email sequences;
- automatic SMS/WhatsApp prospecting;
- bulk contact enrolment;
- automatic follow-up after an indeterminate send;
- automatic proposal/commercial commitments;
- destructive cleanup/merges.

## 10. First automations to prove after MCP is operational

Promote one at a time after a bounded live test.

### A. Audit sent → follow-up task

```text
Value-Upfront Status = Sent
→ create follow-up task for approved interval
→ no automatic external message yet
```

### B. Positive reply → stop outbound + human attention

```text
positive reply detected/confirmed
→ tag positive-reply
→ move to Engaged when appropriate
→ stop any active outbound sequence
→ create next-action task / notify owner
```

### C. Meeting booked → meeting preparation

```text
appointment created
→ move to Meeting Booked
→ stop prospecting sequence
→ create meeting-prep task
→ surface latest report + thread + trigger
```

### D. Won → AI Ops handoff trigger

Initially create an **internal handoff task**, not an autonomous client onboarding mutation:

```text
opportunity = Won
→ verify explicit engagement authority
→ create AI Ops handoff task
→ authorised agent creates/updates client canon
```

Only automate the cross-system handoff after the manual handoff has been proven cleanly.

## 11. Reporting dashboard — minimum

GHL should make these visible/derivable:
- targets;
- qualified;
- value-upfront assets prepared/sent;
- contacted;
- engaged;
- meetings booked;
- discovery;
- proposals;
- Won/Lost/Nurture;
- setup revenue;
- MRR;
- conversion by campaign/offer/vertical/source;
- cycle time.

DRF should receive **aggregate campaign proof**, not a manually duplicated live lead table.

## 12. Master MCP/API readiness checklist

When David creates the master GHL control route, the `ghl-operator` implementation should verify:
- [ ] exact account/location identity;
- [ ] contacts read/search/create/update;
- [ ] duplicate prevention/upsert behaviour;
- [ ] pipelines/stages read;
- [ ] opportunities read/create/update;
- [ ] conversations/messages read;
- [ ] email send/reply only with explicit test authority;
- [ ] calendars/appointments read/create/update where required;
- [ ] tasks/notes/tags/custom fields where exposed;
- [ ] workflow read/update/activation scope where exposed;
- [ ] permission and rate-limit behaviour;
- [ ] fresh-read verification after material writes;
- [ ] timeout/indeterminate-write reconciliation;
- [ ] no secret value appears in GitHub or logs.

## 13. First live proof

After GHL + email + MCP are ready:

```text
1 selected UAE vertical
→ 10 targeted companies
→ qualify all 10
→ prepare value-upfront assets for suitable Priority accounts
→ founder-review first outbound batch
→ send controlled batch
→ track reply → meeting → opportunity → proposal → Won
```

Do not add more automation until this loop produces evidence about what actually works.
