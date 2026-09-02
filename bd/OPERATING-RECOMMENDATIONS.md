# DRF Business Development — Operating Recommendations

**Status:** Durable recommendations — implementation governed by DRF #150  
**Governing programme:** [DRF #150](https://github.com/tbhrc/drf-main/issues/150)  
**BD Skill:** [tbhrc/skills#158](https://github.com/tbhrc/skills/issues/158)  
**GHL operator:** [tbhrc/skills#159](https://github.com/tbhrc/skills/issues/159)  
**Lifecycle ownership correction:** [tbhrc/skills#161](https://github.com/tbhrc/skills/issues/161)

This file records the practical recommendations identified while designing the DRF → GHL → AI Ops Business Development operating model.

These are domain/architecture recommendations, not reusable workflow instructions. Reusable HOW belongs in `tbhrc/skills`.

## 1. Keep the system split simple

Recommended ownership:

```text
DRF
= pre-sale campaign strategy, offer/niche choice, experiments and aggregate proof

GHL
= live CRM state, conversations, tasks, appointments and opportunity progression

Skills
= reusable HOW and operating capability

AI Ops
= acquired-client operating canon after genuine Won

OneDrive
= private/client-facing files when required
```

### Recommendation

Do not create a second lead database in GitHub.

Ordinary live records such as:
- contacts;
- companies;
- opportunities;
- next actions;
- email history;
- appointments;
- Won/Lost/Nurture state

should remain in GHL once the live system is verified.

GitHub should hold the campaign logic, decisions, system changes, experiments and aggregate evidence.

---

## 2. Use GHL as the tool-operations interface plane

Once the master MCP/API is verified, GHL should become the primary operational interface used by authorised agents for commercial execution.

Recommended pattern:

```text
business/domain request
→ canonical business Skill
→ ghl-operator
→ GHL MCP/API
→ live GHL state
→ fresh-read verification
```

### Recommendation

Do not let every future Skill learn GHL independently.

`ghl-operator` should own platform mechanics. Domain Skills should own business decisions and call the operator when GHL action is required.

This keeps future replacement/upgrades of GHL tooling isolated to one reusable operator capability.

---

## 3. Make the pipeline commercially meaningful, not operationally noisy

Use a compact relationship-state pipeline:

```text
Target
→ Qualified
→ Value Upfront Ready
→ Contacted
→ Engaged
→ Meeting Booked
→ Discovery
→ Recommendation / Proposal
→ Won / Nurture / Lost
```

### Recommendation

Do not create pipeline stages for every internal action.

Use:
- tasks for next actions;
- activity/conversations for history;
- fields for stable structured state;
- tags for temporary/action signals.

The pipeline should answer:

> Where is this commercial relationship now?

---

## 4. Prove the value-upfront acquisition motion before scaling automation

The VB World work demonstrated a credible first acquisition mechanism:

```text
public evidence
→ useful numbers
→ clickable sources
→ specific findings
→ 3+ immediate Quick Wins
→ concise client-facing audit
→ commercial conversation
```

### Recommendation

Test this on a very small cohort first rather than building a large prospecting factory immediately.

Current recommended proof:

**10 UAE multi-location restaurant companies** under Pilot 001.

Measure:
- targets qualified;
- reports prepared;
- reports sent;
- replies;
- positive engagement;
- meetings;
- qualified opportunities;
- proposals;
- wins;
- setup revenue;
- MRR;
- cycle time.

If the motion fails, improve the offer/targeting/report/outreach before adding automation volume.

---

## 5. Start human-controlled; promote autonomy from evidence

Recommended progression:

### Stage A — manual external action

AI may:
- research;
- qualify;
- prepare CRM records;
- draft reports;
- draft outreach;
- prepare follow-up tasks.

Founder approves the first external sends.

### Stage B — bounded automation

After clean tests, automate low-risk internal state changes such as:
- follow-up task creation;
- positive-reply routing;
- meeting-prep task creation;
- stage hygiene;
- Won handoff task creation.

### Stage C — bounded external autonomy

Only after real evidence should selected external actions be promoted, for example:
- a proven first-touch email pattern;
- a proven follow-up interval;
- automatic stop-on-reply;
- safe booking reminders.

### Recommendation

Do not equate possession of the master GHL credential with blanket authority.

Authority is per action class and should expand only after proven execution.

---

## 6. Build `ghl-operator` from the real interface, not assumptions

The future Skill should be written only after the master MCP/API is available.

### Recommendation

Verify actual capability families:
- location/account identity;
- contacts/companies;
- pipelines/stages;
- opportunities;
- conversations/messages;
- email;
- tasks/notes;
- tags/custom fields;
- calendar/appointments;
- workflows.

Record unsupported areas explicitly.

Do not invent tool names, IDs, scopes or write behaviour.

---

## 7. Make identity verification mandatory before material GHL writes

The master AI route may eventually have broad access.

### Recommendation

Before a material write, verify:
- exact GHL location;
- correct contact/company;
- correct opportunity;
- correct pipeline/stage;
- correct calendar/user where relevant.

Never guess IDs.

This is especially important if the master MCP later controls multiple GHL locations or client accounts.

---

## 8. Design for idempotency and uncertain external actions

External systems can time out after performing the action.

### Recommendation

For contact/opportunity creation and especially email sends:

```text
attempt action
→ response uncertain?
→ inspect live GHL state
→ determine whether action already happened
→ retry only if safe
```

Never blindly resend an email because the API timed out.

Prefer provider-supported upsert/idempotency or stable dedupe rules wherever available.

---

## 9. Keep secrets completely outside GitHub

### Recommendation

GitHub may store:
- secret reference/name;
- intended scope;
- setup instructions;
- verification result.

GitHub must not store:
- API keys;
- OAuth refresh tokens;
- MCP bearer tokens;
- webhook signing secrets;
- passwords.

The master GHL credential should live only in the approved runtime/secret manager.

---

## 10. Separate prospect operations from acquired-client operations

The clean lifecycle boundary is:

```text
prospect
= DRF + GHL

Won client
= AI Ops + GHL commercial history
```

### Recommendation

Do not create AI Ops client canon merely because a company was researched or sent a report.

On genuine Won, transfer only useful validated context:
- company/contact/stakeholder identity;
- agreed commercial authority/scope;
- material discovery facts;
- commitments;
- relevant externally shared report/artifact references;
- stable GHL record reference.

Do not copy the entire CRM event stream into AI Ops.

---

## 11. Keep detailed GitHub prospect evidence selective

The no-shadow-CRM rule does not mean GitHub can never contain prospect research.

### Recommendation

Persist detailed Markdown only when it is materially useful, for example:
- a substantial public audit was produced;
- a campaign hypothesis requires durable evidence;
- a high-value prospect requires deeper analysis;
- research produced reusable market learning.

Do not create one GitHub folder/file per ordinary target by default.

---

## 12. Use OneDrive only for the private/client-facing file layer

### Recommendation

When a prospect-facing DOCX/PDF or private evidence is needed:
- source operating logic stays in Skills;
- live CRM state stays in GHL;
- campaign truth stays in DRF;
- the private/client-facing file can live in the approved OneDrive location.

Avoid turning OneDrive into the operating control plane.

---

## 13. The first four automations should be internal, not marketing blasts

Recommended first proofs:

1. **Audit sent → follow-up task**
2. **Positive reply → stop outbound + Engaged + owner task**
3. **Meeting booked → stop prospecting + meeting-prep task**
4. **Won → AI Ops handoff task**

### Recommendation

These provide meaningful operational leverage while limiting external risk.

Only after these are reliable should mass sequences, outbound autonomy or automatic cross-system changes be considered.

---

## 14. Build campaign reporting from GHL, not manual GitHub tables

### Recommendation

Derive campaign evidence from GHL wherever possible:
- target count;
- qualified count;
- reports prepared/sent;
- contacted;
- engaged;
- meetings;
- discoveries;
- proposals;
- Won/Lost/Nurture;
- setup revenue;
- MRR;
- cycle times;
- conversion by offer, vertical, campaign and source.

Write aggregate evidence/conclusions back into DRF.

Do not manually reconcile individual lead rows in GitHub every day.

---

## 15. Build toward a reusable BD engine, but sell the outcome first

Longer-term DRF opportunity:

```text
use BD engine internally
→ prove meetings and revenue
→ improve it from real execution
→ package the proven capability
→ deploy for clients
```

### Recommendation

Do not productise the engine before it reliably produces commercial outcomes for iMPLEMENTAi.ae.

The strongest product evidence will be:
- our own response rates;
- booked meetings;
- wins;
- revenue/MRR;
- reduced manual effort;
- repeatable vertical/offer patterns.

---

## 16. Keep implementation KISSS

Do not build yet:
- a second CRM;
- a custom GHL wrapper app without a demonstrated API gap;
- elaborate lead-scoring code;
- dozens of tags/stages;
- complex multi-agent routing for a 10-company pilot;
- autonomous mass outreach;
- speculative dashboards that duplicate GHL.

Recommended order:

```text
configure GHL
→ connect email/calendar
→ verify human workflow
→ connect master MCP/API
→ build ghl-operator from real capability
→ integrate drf-business-development
→ run 10-account Pilot 001
→ measure
→ improve Skills
→ promote bounded automation
→ scale only what works
```

## Current decisions / dependencies

| Item | Current state |
|---|---|
| DRF as pre-sale control plane | Confirmed |
| Skills as reusable HOW | Confirmed |
| GHL as intended live BD CRM/tool-ops plane | Confirmed direction; setup/verification pending |
| AI Ops starts after genuine Won | Confirmed direction; lifecycle Skill correction tracked in `tbhrc/skills#161` |
| `drf-business-development` | Drafted under `tbhrc/skills#158` / PR #160 |
| `ghl-operator` | Specification tracked under `tbhrc/skills#159`; waits for live master MCP/API |
| First pilot | Draft Pilot 001; not activated |
| Autonomous outbound | Not authorised by this document |

## Next human dependency

David:

1. configure the GHL location using [`GHL-SETUP-GUIDE.md`](GHL-SETUP-GUIDE.md);
2. connect the approved email;
3. create/verify the discovery calendar;
4. create the master MCP/API route.

Then agents can verify the live control surface and finish `ghl-operator` against reality.

## Durable-change rule

When a recommendation here becomes a proven reusable operating method, promote it into the correct canonical Skill rather than allowing this file to become a second workflow manual.
