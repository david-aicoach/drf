# GHL Setup Guide — iMPLEMENTAi.ae Business Development

**Status:** Founder setup guide — live setup pending  
**Owner:** DRF Business Development  
**Configuration contract:** [`GHL-BD-CONFIG.md`](GHL-BD-CONFIG.md)  
**Governing programme:** [DRF #150](https://github.com/tbhrc/drf-main/issues/150)  
**Future platform Skill:** [tbhrc/skills#159 — `ghl-operator`](https://github.com/tbhrc/skills/issues/159)

This guide is the durable human setup sequence for David to configure the first iMPLEMENTAi.ae GHL Business Development location.

It does **not** contain API keys, passwords, OAuth secrets or MCP credentials.

## Target outcome

When this guide is complete, GHL should provide the human-operable BD surface required before the AI control plane is connected:

```text
company/contact
→ opportunity
→ pipeline stage
→ email/conversation
→ task / next action
→ appointment
→ Won / Lost / Nurture
```

AI control is added later through the verified `ghl-operator` Skill.

---

## Phase 1 — Confirm the correct GHL location

1. Open the GHL account intended for iMPLEMENTAi.ae.
2. Confirm the exact location/sub-account that will own iMPLEMENTAi.ae Business Development.
3. Keep one primary location for the first implementation unless a real business reason requires more.
4. Record the exact non-secret account/location identity in this repository only after it is stable and verified.

**Do not:**
- paste API keys or tokens into GitHub;
- create duplicate locations just to separate campaigns;
- assume an existing connector points to the correct location.

**Done when:** the intended iMPLEMENTAi.ae location is unambiguous to David and can later be identified by the MCP/API.

---

## Phase 2 — Create the BD pipeline

Create a pipeline named:

**`iMPLEMENTAi Business Development`**

Recommended stages:

1. `Target`
2. `Qualified`
3. `Value Upfront Ready`
4. `Contacted`
5. `Engaged`
6. `Meeting Booked`
7. `Discovery`
8. `Recommendation / Proposal`
9. `Won`
10. `Nurture`
11. `Lost`

### Rule

Keep the pipeline focused on the commercial relationship state.

Do **not** add separate columns for every action such as `Researching`, `Follow-up`, `Audit Sent` or `Waiting 3 Days`. Those belong in tasks, activity, tags or fields.

**Done when:** a test opportunity can be moved cleanly through every commercial state.

---

## Phase 3 — Configure minimum fields

Use native GHL fields first. Add only missing business fields.

Recommended initial custom fields:

- `DRF Offer`
- `Vertical / Niche`
- `Why Fit / Trigger`
- `BD Priority`
- `Value-Upfront Type`
- `Value-Upfront Status`
- `Value-Upfront Link`
- `Research Date`
- `Campaign ID`
- `Estimated Setup Revenue`
- `Estimated MRR`
- `Lost / Hold Reason`

Suggested values:

### BD Priority
- `Priority`
- `Qualified`
- `Hold`

### Value-Upfront Type
- `None`
- `Digital Presence Brief Audit`

### Value-Upfront Status
- `Not needed`
- `Planned`
- `In progress`
- `Ready`
- `Sent`

### Field-design rule

Do not create custom fields for information already handled well by native contact, company, opportunity, owner, source, value or stage fields.

**Done when:** one opportunity contains enough structured context for a fresh human or agent to understand why it exists and what the next action is.

---

## Phase 4 — Add only the initial tags

Create only these initial tags unless a later proven workflow requires more:

- `drf-bd`
- `value-upfront`
- `audit-prepared`
- `audit-sent`
- `positive-reply`
- `nurture`

Use fields for stable structured categories such as niche, offer or priority.

**Done when:** tags represent temporary/action signals rather than becoming a second field system.

---

## Phase 5 — Connect the approved iMPLEMENTAi.ae email

Connect the mailbox David wants to use for BD.

Before any AI or workflow automation, manually verify:

1. outbound email sends from the expected address;
2. sender name is correct;
3. signature is correct;
4. replies return to the same GHL conversation/thread;
5. inbound replies are visible in Conversations;
6. failed/bounced delivery is visible;
7. a test contact's message history is readable from the intended GHL location.

### Do not activate yet

- bulk cold email sequences;
- auto-resend after uncertain delivery;
- SMS prospecting;
- WhatsApp prospecting;
- mass workflow enrolment.

**Done when:** one manually controlled test thread can be sent, replied to and reviewed end-to-end.

---

## Phase 6 — Create the discovery calendar

Create/select a calendar named:

**`iMPLEMENTAi Discovery`**

Recommended starting configuration:

- 30-minute appointment;
- UAE timezone correctly represented;
- David's real availability;
- sensible buffer between meetings;
- simple human booking confirmation/reminder copy.

Do not hard-code a calendar ID into repository docs or Skills. The future MCP/API must discover and verify the real ID.

**Done when:** a test booking appears correctly in GHL and any connected calendar with the correct date/time/timezone.

---

## Phase 7 — Create one disposable test opportunity

Create one harmless internal/test contact and opportunity.

Verify manually:

1. contact/company association;
2. pipeline assignment;
3. stage movement;
4. owner/source where relevant;
5. custom fields;
6. note/task creation;
7. email conversation;
8. appointment link or booking;
9. Won/Lost/Nurture state.

Delete/close the disposable record only through normal GHL UI controls after the test if appropriate.

**Done when:** the human workflow works before AI is introduced.

---

## Phase 8 — Configure safe internal automations only

The first workflows may be created in **inactive/test state** before the MCP exists.

Recommended first four:

### 1. Audit sent → follow-up task

```text
Value-Upfront Status = Sent
→ create internal follow-up task
```

No automatic prospect message yet.

### 2. Positive reply → human attention

```text
positive reply
→ tag positive-reply
→ stop prospecting sequence if one exists
→ move to Engaged when appropriate
→ create next-action task / notify owner
```

### 3. Meeting booked → meeting prep

```text
appointment booked
→ move to Meeting Booked
→ stop prospecting sequence
→ create meeting-prep task
```

### 4. Won → AI Ops handoff task

```text
opportunity = Won
→ verify explicit engagement authority
→ create internal AI Ops handoff task
```

Do not automate client onboarding itself until the manual handoff has been proven.

**Done when:** workflows can be inspected/tested without uncontrolled external sends.

---

## Phase 9 — Create the master AI MCP/API control route

This is the dependency for [`tbhrc/skills#159`](https://github.com/tbhrc/skills/issues/159).

The control route should expose only real supported GHL capabilities. Do not design the Skill around imagined tool names.

Minimum capability families to make available where GHL supports them:

- location/account identity;
- contacts/companies;
- pipelines/stages;
- opportunities;
- conversations/messages;
- email send/reply;
- tasks/notes;
- tags/custom fields;
- calendars/appointments;
- workflows/automation state.

### Credential rule

Store master credentials only in the approved secret/runtime store.

GitHub may document:
- secret name;
- purpose;
- scope;
- where it is stored.

GitHub must never contain the actual secret value.

**Done when:** the MCP/API can identify the exact GHL location and perform harmless reads without ambiguity.

---

## Phase 10 — Hand over to `ghl-operator`

Once the MCP/API exists, the `ghl-operator` implementation must verify capabilities rather than trust documentation.

Required first verification sequence:

```text
identify exact location
→ read pipelines/stages
→ search/read test contact
→ bounded contact upsert/update
→ bounded opportunity create/update
→ fresh-read verification
→ task/note/tag test if supported
→ appointment test if authorised
→ one explicit-authority email test
→ reconcile duplicate/retry behaviour
```

Do not promote the operator to general use until the tested behaviour is documented in the canonical Skill.

---

## Phase 11 — Activate Pilot 001 only after readiness

Pilot:
[`campaigns/001-uae-multi-location-restaurants-visibility.md`](campaigns/001-uae-multi-location-restaurants-visibility.md)

Activation gate:

- [ ] correct GHL location verified;
- [ ] pipeline works;
- [ ] minimum fields exist;
- [ ] email send/reply works;
- [ ] discovery calendar works;
- [ ] master MCP/API reads the correct location;
- [ ] `ghl-operator` can safely operate tested actions;
- [ ] founder approves the first external outbound batch.

Then:

```text
10 target companies
→ qualification
→ value-upfront reports for suitable Priority targets
→ founder review
→ controlled first outreach
→ measure reply → meeting → opportunity → proposal → Won
```

---

## What not to build yet

Do not add these until a real pilot proves the need:

- dozens of pipeline stages;
- dozens of tags;
- a parallel GitHub CRM;
- custom middleware that duplicates GHL/MCP functions;
- mass autonomous cold outreach;
- multiple GHL locations for the same first BD operation;
- complex lead scoring engines;
- automatic proposal generation/sending;
- autonomous cross-system onboarding.

KISSS: prove the smallest revenue-producing loop first.

## Completion record

After David completes the human setup, update this file or the governing Issue with only non-secret verified state:

```text
GHL location: <verified name/id reference>
Pipeline: verified
Email: verified
Calendar: verified
MCP/API: pending / verified
GHL operator: pending / verified
Pilot 001: inactive / approved / active
```
