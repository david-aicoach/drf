# DRF Outcome-First Modular Revenue Architecture

**Owner:** `skills/drf-opportunity-factory/SKILL.md`

## Principle
Do not define the business by the current AI model, CRM, messaging provider, marketplace or automation vendor.

Define the commercial system in this order:

```text
1. Outcome — measurable result customers buy
2. Niche — who has the pain and will pay
3. Customer Channel — where the customer/prospect interaction happens
4. System of Record — where durable commercial state lives
5. Agent Layer — where AI judgement/orchestration materially improves value
```

Canonical deployment unit:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

## Rules
1. Sell the outcome, not the vendor.
2. Select the niche before scaling distribution.
3. Follow the customer's real communication/buying channel.
4. Keep one clear system of record for durable lifecycle state.
5. Keep agents/models/vendors replaceable unless that technology itself is the product.
6. Keep predictable calculations, routing and state transitions deterministic where practical.
7. Use agents for judgement, research, exceptions and orchestration where value exceeds cost/reliability burden.
8. Avoid duplicate workflow-state ownership across two CRMs/systems.
9. Integrate a capable incumbent instead of replacing it merely to force DRF's preferred stack.
10. Use the minimum viable stack required to produce/prove the outcome.

## System-of-record decision
A system of record should own the durable customer/revenue state relevant to the outcome: contacts, opportunities, stage, consent, attribution, booking/order/payment state where applicable.

Choose based on current client reality and operating value, not tool preference. HighLevel, HubSpot, an ERP/PMS/DMS or another incumbent may be correct.

## Customer-channel decision
Use evidence for where customers already interact: WhatsApp, voice, email, web forms/chat, social messaging, marketplace inbox or another channel.

For UAE service businesses, default hypothesis unless niche evidence says otherwise:

`WhatsApp → CRM/system of record → deterministic lifecycle automation → native AI → external agent where materially useful`

## Deterministic vs agentic
Prefer deterministic execution for:
- calculations;
- eligibility/validation rules;
- routing;
- status changes;
- scheduled sequences;
- fixed notifications;
- idempotent API actions.

Use an agent where:
- research/synthesis is required;
- documents/unstructured information must be interpreted;
- cross-system context matters;
- judgement/exception handling creates material value;
- the task cannot be reliably expressed as fixed rules.

Browser/computer-use is a last-mile option when no robust native/API route exists, not the default architecture for high-volume recurring work.

## Revenue architecture
For the selected Business × Niche, explicitly map:
- what is sold;
- payer and economic value;
- setup/upfront revenue;
- recurring/usage/licence/commission/royalty/upsell revenue;
- acquisition channel;
- delivery channel/system;
- marginal delivery cost;
- human exception/support burden;
- retention/repeat mechanism;
- replaceable vendor dependencies.

## Architecture test
Before implementation ask:
1. Does each component have one clear job?
2. Is durable state owned in one place?
3. Is the agent doing judgement rather than avoidable deterministic work?
4. Can a vendor/model be replaced without redefining the business?
5. Does this architecture preserve/raise gross contribution at representative workload?
6. Can it be onboarded/delivered repeatedly for the selected niche?
7. What is the smallest architecture required for the next proof?

## Examples
### Enquiry-to-Revenue Control
`Enquiry capture/follow-up outcome × UAE HVAC × WhatsApp/phone/web × CRM × bounded AI qualification/follow-up judgement`

### Revenue Recovery
`Recovered stale revenue × UAE HVAC × WhatsApp/email/SMS × existing CRM/quote/AMC data × bounded AI for message/context exceptions`

### Autonomous Revenue Operations
`Revenue-linked autonomous work × selected niche × existing operational channels × incumbent systems of record × replaceable agent runtime`

Grok Bot, ChatGPT, Claude, Gemini or HighLevel-native AI may be delivery rails; they are not automatically separate parent businesses.

## Handoff
Architecture follows opportunity + niche selection and feeds:
- offer/pricing;
- GTM;
- RBS/Return;
- AI Deliverability/Autonomy evidence;
- support/reliability risk;
- Next Proof design.
