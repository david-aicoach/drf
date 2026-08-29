# GoHighLevel AI Employee — Usage, Limits and Economics

**Research date:** 29 August 2026  
**Governing issue:** #39  
**Purpose:** Establish the real cost and consumption model of HighLevel's AI stack so DRF can compare it properly with Grok Bot and other autonomous-agent delivery options.

> **Current-source rule:** HighLevel changes AI pricing quickly. The most recent official AI pricing article used here was modified **21 August 2026**. Confirm in-app pricing before quoting a client.

---

## Executive conclusion

HighLevel's economics are structurally stronger than a token-limited general computer-use agent for **high-volume, repeatable customer-facing CRM work**, but the phrase **AI Employee Unlimited** must not be interpreted as unlimited autonomous computer use.

HighLevel currently has three distinct AI economic classes:

### 1. Unlimited domain AI for $97/month per enabled location, subject to fair use

AI Employee Unlimited covers:

- Conversation AI;
- Conversation AI Prompt Optimizer;
- Voice AI — inbound, outbound and widget;
- Voice AI Prompt Optimizer;
- Reviews AI;
- Content AI.

These products are described by HighLevel as **unlimited subject to fair use**, rather than as a finite weekly token bucket.

### 2. Included AI with explicit rate windows or fair-use limits

Examples:

- **Ask AI** — Growth includes usage; Unlimited includes **3× Growth usage**, measured in rolling **5-hour windows**;
- **AI Studio** — same 5-hour-window structure;
- Funnel & Website AI — **1,000 prompts/day/location**;
- Workflow AI Builder / Generate with AI — free with daily fair-use reset;
- Email AI and Knowledge Base — included, subject to fair use.

### 3. Metered AI that remains chargeable even on AI Employee Unlimited

Examples:

- **Agent Studio / Managed Agents — always pay-per-use**;
- Agent Studio LLM tokens, web search and generated media;
- premium Workflow AI actions;
- external AI models called from workflows;
- phone, SMS, email and WhatsApp transport/provider charges.

## Most important DRF finding

HighLevel now has its own **general browser-control agent inside Ask AI**.

Ask AI Browser Control can:

- open webpages;
- read pages visually;
- navigate tabs;
- click;
- type;
- scroll/drag;
- fill forms;
- execute multi-step browser workflows.

Ask AI also supports:

- MCP connectors;
- reusable Markdown Skills;
- scheduled recurring tasks;
- HighLevel-native actions and data.

This creates genuine functional overlap with Grok Bot.

However:

> **Ask AI browser control is not documented as unlimited.** It consumes Ask AI usage, which is governed by the 5-hour-window allowance. HighLevel does not currently publish the exact numeric allowance.

Therefore the economic advantage is not “HighLevel gives infinite computer use for $97”. The advantage is:

> **HighLevel can avoid computer use for most revenue operations because CRM, messaging, voice, workflows, knowledge, contact state and lifecycle actions are native.**

The optimal DRF architecture is consequently:

```text
customer channel
→ HighLevel system of record
→ deterministic native workflow for predictable work
→ unlimited Conversation/Voice AI for high-volume customer interaction
→ $0.01 bounded AI actions / Agent Studio where judgement is required
→ Ask AI/browser control for bounded operator tasks
→ external general-purpose computer-use agent only where native actions cannot do the job
```

---

# 1. HighLevel platform cost before AI

Current public HighLevel agency pricing:

| Agency plan | Monthly price | Sub-accounts | Relevant commercial capability |
|---|---:|---:|---|
| Starter | **$97** | 3 | Core platform |
| Unlimited | **$297** | Unlimited | Unlimited sub-accounts; rebill phone/email without markup; basic API |
| Agency Pro | **$497** | Unlimited | SaaS Mode; automatic sub-account creation; rebill with markup; advanced API |
| Enterprise | Custom | Custom | High-volume/custom requirements |

**Important:** unlimited sub-accounts does **not** mean unlimited AI across all client locations. AI Employee Growth and AI Employee Unlimited are billed **per enabled location**.

Official source:  
https://www.gohighlevel.com/pricing

Pricing/rebilling guide:  
https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide

---

# 2. AI Employee plan matrix

| Feature | Pay-Per-Use | AI Employee Growth | AI Employee Unlimited |
|---|---:|---:|---:|
| Monthly AI subscription | **$0** | **$50/location** | **$97/location** |
| Conversation AI | Token cost | **1,000 agent responses/month** | **Unlimited*** |
| Conversation Prompt Optimizer | 100/day then token cost | 100/day + 500 extra/month, then token cost | **Unlimited*** |
| Voice AI — inbound/outbound/widget | Voice + token cost | **100 AI-agent minutes/month** | **Unlimited*** |
| Voice Prompt Optimizer | Token cost | 100 minutes/month then PPU | **Unlimited*** |
| Reviews AI | $0.01/review | **Unlimited*** | **Unlimited*** |
| Content AI | $0.063/image; $0.0945/1,000 words | **Unlimited*** | **Unlimited*** |
| Ask AI | Token/resource cost | Included allocation | **3× Growth allocation** |
| AI Studio | Token/resource cost | Included allocation | **3× Growth allocation** |
| Funnel & Website AI | Included | Included | Included |
| Workflow AI | Included/action-specific | Included/action-specific | Included/action-specific |
| Email AI | Included | Included | Included |
| Agent Studio | **Pay-per-use** | **Pay-per-use** | **Pay-per-use** |

\* Subject to HighLevel fair-use protections.

Current official pricing source, modified 21 August 2026:  
https://help.gohighlevel.com/support/solutions/articles/155000006652

## What “unlimited” means

HighLevel states that Unlimited usage is subject to its Terms of Service and excessive-use protections. It may throttle, limit, require an upgrade or terminate access if usage is excessive, abusive or negatively affects platform performance.

HighLevel currently publishes **no numeric fair-use ceiling** for Unlimited Conversation AI, Voice AI, Reviews AI or Content AI.

That is materially different from Grok Bot's finite weekly usage pool.

---

# 3. Conversation AI — high-volume sales/support layer

**Primary job:** text conversations, FAQs, lead qualification, appointment booking and customer support using HighLevel context and knowledge.

### Pricing model

- Pay-Per-Use: token based.
- Growth: **1,000 AI agent responses/month**; further usage can be charged PPU.
- Unlimited: **unlimited subject to fair use**.

Current listed Conversation AI model pricing includes:

| Model | Input / 1M tokens | Output / 1M tokens |
|---|---:|---:|
| GPT-5 | $1.25 | $10.00 |
| GPT-5 Mini | $0.25 | $2.00 |
| GPT-4.1 | $2.00 | $8.00 |
| GPT-4.1 Mini | $0.40 | $1.60 |

Input can include customer messages, conversation history, AI instructions, contact details and knowledge-base content.

### DRF implication

For products such as:

- AI support assistant;
- speed-to-lead;
- qualification;
- appointment booking;
- reactivation;
- nurture/follow-up;

Conversation AI is normally a much better execution layer than asking a general computer-use agent to navigate UI for each interaction.

At high volume, AI Employee Unlimited can turn variable LLM consumption into a predictable **$97/location/month** AI-compute line item, while channel transport charges remain separate.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000006652

---

# 4. Voice AI — receptionist, booking and outbound calling

HighLevel's Unlimited plan currently covers **inbound, outbound and widget Voice AI**, subject to fair use.

## Growth allowance

Growth includes **100 combined AI Agent minutes/month** across inbound, outbound and widget calls.

## Pay-per-use formula

```text
Voice AI cost
= call minutes × Voice Engine rate
+ call minutes × selected TTS rate
+ LLM token cost
+ separate Phone System charges
```

Current Voice Engine rate:

- **$0.045/minute** from 20 May 2026 onward.

Current TTS rates:

| TTS | Rate/minute |
|---|---:|
| OpenAI | $0.015 |
| Cartesia | $0.015 |
| ElevenLabs V2.5 | $0.035 |
| ElevenLabs V3 | $0.170 |

Therefore the minimum AI voice cost before LLM tokens and telephony is:

| Configuration | Minimum AI cost/minute before LLM + phone |
|---|---:|
| Voice Engine + OpenAI/Cartesia | **$0.060** |
| Voice Engine + ElevenLabs V2.5 | **$0.080** |
| Voice Engine + ElevenLabs V3 | **$0.215** |

## Growth vs Unlimited rough voice break-even floor

Unlimited costs **$47/month more than Growth**.

Growth already includes 100 minutes. Ignoring LLM tokens and carrier charges, an additional $47 of PPU Voice AI represents approximately:

| Configuration | Extra PPU minutes for $47 | Approx. total monthly minutes incl. Growth's 100 |
|---|---:|---:|
| OpenAI/Cartesia | 783 | **883 min** |
| ElevenLabs V2.5 | 588 | **688 min** |
| ElevenLabs V3 | 219 | **319 min** |

Because PPU also incurs LLM tokens, the **true break-even occurs sooner** than these floor calculations.

## Critical exclusion

Even on AI Employee Unlimited:

> **Phone System/carrier charges still apply.**

Unlimited removes covered Voice AI compute charges; it does not make calling infrastructure free.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000006652

---

# 5. Ask AI — closest HighLevel equivalent to a general AI employee

Ask AI has become an operating agent rather than merely a support chatbot. Current capabilities include:

- reason over HighLevel data;
- create/update supported assets;
- execute supported platform actions;
- retrieve external information;
- use MCP connectors;
- use reusable Skills;
- operate a web browser;
- run scheduled recurring tasks.

Ask AI support hub:  
https://help.gohighlevel.com/support/solutions/folders/155000001210

## Ask AI is not unlimited

The latest official AI pricing page says:

- Pay-Per-Use: token/resource cost;
- Growth: included usage allocation;
- Unlimited: **3× Growth's included usage**;
- usage measured in **5-hour windows**;
- if the allowance is reached, access resets at the end of the 5-hour window unless additional billable usage is permitted.

**Exact numeric Ask AI allowance:** not publicly stated in the current pricing article.

This is the main unknown if DRF wants to use Ask AI as an always-on general computer worker.

Official sources:

https://help.gohighlevel.com/support/solutions/articles/155000006652  
https://help.gohighlevel.com/support/solutions/articles/155000007813-ai-usage-limits

## Documentation inconsistency noted

HighLevel's Ask AI session-example article from 27 June 2026 uses loose wording that an AI Employee subscription provides “unlimited access under the plan's included usage and features”. The newer official pricing article modified 21 August 2026 is more precise and explicitly defines Ask AI as a finite 5-hour-window allowance, with Unlimited receiving 3× Growth.

For DRF costing, use the **newer 21 August pricing article**.

---

# 6. Published real Ask AI workload costs

HighLevel publishes actual example PPU session costs:

| Example workload | User messages | Work performed | Published session cost |
|---|---:|---|---:|
| Product import + currency update | 2 | External retrieval, variant analysis, approvals, product creation, pricing and currency changes | **$1.1757** |
| Fitness funnel + email templates | 3 | Business discovery, funnel/form plan, nurture sequence, 3 email templates | **$0.6992** |
| Multi-channel event campaign | 6 | Research, image, email/SMS/WhatsApp/social assets, planning and approvals | **$2.9271** |

This is important comparative evidence: HighLevel's broad agentic/operator work can consume **dollars per complex session** under PPU. It is not inherently “free AI”.

However, the economics differ from Grok Bot because many subsequent operational events can be executed by deterministic workflows or Unlimited Conversation/Voice AI instead of repeating a broad reasoning/browser session.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000007818-ask-ai-session-examples-usage-costs

---

# 7. Ask AI Browser Control — direct Grok Bot overlap

HighLevel's Ask AI Browser Control extension can autonomously:

- open webpages;
- navigate forwards/backwards and across tabs;
- read pages via screenshots/page text;
- click visual coordinates;
- type;
- scroll/drag;
- fill forms;
- perform multi-step browser workflows;
- display live screenshots while working.

It runs in a managed tab group in Chrome-based browsers. Sensitive credential/payment values are entered locally rather than exposed to the model.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000008339-ai-browser-control-extension

## Functional comparison

| Capability | HighLevel Ask AI Browser Control | Grok Bot |
|---|---|---|
| Visual browser operation | Yes | Yes |
| Click/type/forms | Yes | Yes |
| Multi-step web tasks | Yes | Yes |
| Scheduled work | Yes | Yes |
| MCP/connectors | Yes | Plugins/connectors |
| Reusable Skills/instructions | Yes | Persistent agent/context |
| Computer environment | User's managed Chromium tab group | Dedicated Grok Bot cloud computer |
| Native HighLevel CRM actions | **Yes** | Via integration/browser/plugin |
| Consumption model | Ask AI 5-hour allowance / PPU | Separate weekly Grok Bot pool / on-demand |
| Exact base allowance publicly quantified | **No** | **No** |

### Economic distinction

The key advantage for HighLevel is not cheaper pixels/clicks.

It is that **browser control can be avoided** when the required action exists natively in HighLevel.

For example:

```text
BAD ECONOMICS
agent opens CRM UI
→ visually finds lead
→ reads record
→ decides
→ clicks fields
→ types message
→ repeats for every lead

BETTER ECONOMICS
HighLevel workflow trigger
→ native contact/opportunity data
→ deterministic branch
→ $0.01 AI judgement if needed
→ native Conversation AI / messaging action
→ browser agent only for true exception
```

This is the most important architectural lesson for DRF.

---

# 8. Ask AI Skills, MCP connectors and schedules

Ask AI currently supports connectors to services including GitHub, HubSpot, Notion, Canva and MCP-compatible applications. Permissions can be controlled by connector/tool.

Ask AI Skills are reusable Markdown instruction sets that can be uploaded/generated and invoked automatically or manually.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000008434-ask-ai-skills-and-connectors

## Scheduled Ask AI work

Scheduled Tasks can run prompts:

- hourly;
- daily;
- weekdays;
- weekly;
- via custom cron schedules.

Examples documented by HighLevel include hourly failed-appointment checks, daily contact summaries and weekly pipeline reports.

**Every scheduled run counts as an Ask AI session and consumes Ask AI usage/billing.**

Therefore frequent schedules can burn the 5-hour-window allowance and should not be treated as free infinite background labour.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000007966-how-to-use-scheduled-tasks-in-ask-ai-to-automate-prompts

---

# 9. Agent Studio / Managed Agents — autonomous but always metered

Agent Studio is HighLevel's agent/workflow builder. It supports:

- AI reasoning nodes;
- deterministic/sequential nodes;
- knowledge bases;
- CRM actions;
- external API calls;
- web search;
- event triggers;
- scheduled Managed Agent runs;
- reusable agents deployable through snapshots.

Managed Agents can run once or recurrently on interval/cron schedules and execute their instructions, Skills and CRM actions without a manual kickoff.

Official sources:

https://help.gohighlevel.com/support/solutions/folders/155000001368  
https://help.gohighlevel.com/support/solutions/articles/155000008245-scheduled-triggers-for-super-agents-in-highlevel

## Critical pricing rule

> **Agent Studio is not included in AI Employee Growth or Unlimited. It remains pay-per-use on every plan.**

Current Agent Studio response-model prices include:

| Model | Input / 1M tokens | Output / 1M tokens |
|---|---:|---:|
| GPT-5 | $1.25 | $10.00 |
| GPT-5 Mini | $0.25 | $2.00 |
| GPT-5 Nano | $0.05 | $0.40 |
| GPT-4.1 | $2.00 | $8.00 |
| GPT-4.1 Mini | $0.40 | $1.60 |
| GPT-4.1 Nano | $0.10 | $0.40 |

Additional Agent Studio costs can include:

- Tavily web search: **$0.01/search**;
- Veo3 Fast video: **$0.15/second**;
- Veo3 video: **$0.40/second**;
- DALL-E 3 images: **$0.04-$0.12/image** depending on configuration;
- other multimodal/provider consumption at listed rates.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000006652

## Workflow AI Agent executions

When an AI Agent is invoked from a workflow, HighLevel states that total execution cost is:

```text
total LLM tokens across calls
+ any premium tool/action executions
```

Normal native tools such as Send SMS, Update Contact Field or Add Tag do not add a premium-action fee beyond their normal platform/transport usage.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000007600-workflow-action-ai-agent

---

# 10. Workflow AI — the cheap deterministic/near-deterministic layer

HighLevel Workflow AI includes free/fair-use builder functions and metered premium actions.

## Premium AI actions

| Action | Current price |
|---|---:|
| Decision Maker | **$0.01/execution** |
| Intent Detection | **$0.01/execution** |
| Summarise Text | **$0.01/execution** |
| Translate | **$0.01/execution** |

## Free AI tools

- Workflow AI Builder — free; limit resets within 24 hours.
- Generate with AI for SMS/email/code etc. — free; limit resets within 24 hours.

## Workflow Pro bulk pricing

| Plan | Monthly | Included executions | Overage |
|---|---:|---:|---:|
| Free | $0 | 100 lifetime | $0.01 |
| Starter | $10 | 10,000/month | $0.008 |
| Growth | $25 | 30,000/month | $0.006 |
| Scale | $50 | 65,000/month | $0.004 |

External AI models used inside workflows remain separately usage-based.

Official sources:

https://help.gohighlevel.com/support/solutions/articles/155000006652  
https://help.gohighlevel.com/support/solutions/articles/155000003971

## DRF rule

```text
predictable state transition
→ deterministic workflow/native action

bounded judgement
→ $0.01 AI action or small Agent Studio call

high-volume customer conversation
→ Conversation AI Unlimited

high-volume voice interaction
→ Voice AI Unlimited

broad operator/browser task
→ Ask AI Browser Control

open-ended cross-system computer work
→ Grok Bot / other external agent where justified
```

---

# 11. Other AI layers

## Funnel & Website AI

- **1,000 prompts/day/location**;
- included across PPU, Growth and Unlimited.

## Email AI

- included across plans;
- subject to fair use.

## Knowledge Base

- included across plans;
- subject to fair use.

## Content AI

Growth and Unlimited:

- unlimited subject to fair use.

PPU:

- $0.063/image;
- $0.0945/1,000 words.

## Reviews AI

Growth and Unlimited:

- unlimited subject to fair use.

PPU:

- $0.01/review.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000006652

---

# 12. AI Studio is not Agent Studio

The names are easy to confuse.

- **AI Studio:** AI website/front-end builder.
- **Agent Studio:** agent/workflow automation platform.

AI Studio currently uses the same broad plan pattern as Ask AI:

- Growth: included allowance;
- Unlimited: 3× included allowance;
- PPU: token/resource cost;
- usage measured in 5-hour windows.

As of 29 August 2026, AI Studio is temporarily free under the Summer of AI promotion until **1 September 2026**. Do not model that promotion as permanent economics.

Official sources:

https://help.gohighlevel.com/support/solutions/articles/155000008322-ai-studio-pricing  
https://help.gohighlevel.com/support/solutions/articles/155000006652

---

# 13. Spending controls and overages

HighLevel now supports AI usage limits at agency, sub-account and user level.

Important details:

- included usage does **not** count toward billable spending limits;
- PPU and overage usage does;
- by default, there may be no spending limit;
- an agency can configure whether usage continues with a warning or stops at a limit;
- on AI Employee plans, extra usage beyond an included allowance must be enabled/funded before it can continue as billable extra usage.

This is important for DRF margin control: metered Agent Studio/Ask AI usage should have explicit spend limits rather than an open agency wallet.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000007813-ai-usage-limits

---

# 14. Rebilling and agency economics

HighLevel's current pricing guide states that AI Employee rebilling requires the **$497/month Agency Pro plan**.

That means a productised DRF offer can separate:

```text
DRF platform/managed-service MRR
+ AI Employee subscription/rebilling
+ phone/SMS/email/WhatsApp transport
+ metered Agent Studio / premium workflow usage
+ optional markup
```

Illustrative raw supplier-side fixed AI cost before channel usage:

| AI-enabled client locations | Growth AI cost | Unlimited AI cost |
|---:|---:|---:|
| 1 | $50 | $97 |
| 5 | $250 | $485 |
| 10 | $500 | $970 |
| 25 | $1,250 | $2,425 |
| 50 | $2,500 | $4,850 |

If Agency Pro is being carried specifically for SaaS/rebilling capability, add the **$497/month agency platform cost** before calculating gross margin. Do not allocate that entire shared platform cost to one client once multiple client accounts share it.

Official source:  
https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide

---

# 15. GoHighLevel vs Grok Bot: consumption model

Current Grok Bot official documentation says:

- paid access includes a **weekly usage pool**;
- work is metered by **agent steps and tokens**, not simply message count;
- larger/longer agent jobs consume more;
- once included weekly usage is exhausted, further use can spill into paid on-demand usage if enabled;
- Cursor Pro has its own separate included Grok Bot weekly pool.

Cursor also publicly acknowledged on 26 August 2026 that in some cases Grok Bot limits were **depleting quickly** and that the team was working on it.

Official/current sources:

https://cursor.com/help/grok-bot/plans  
https://forum.cursor.com/t/anyone-used-grokbot-on-the-api-very-high-costs/169551/7  
https://forum.cursor.com/t/grok-bot-spend-cursor-usage-i-cant-accept-it/169796/9

## Economic comparison

| Work type | HighLevel best layer | Consumption behaviour | Grok Bot behaviour |
|---|---|---|---|
| High-volume chat support | Conversation AI Unlimited | Flat $97/location AI layer, fair use | Every agent step/token draws weekly pool |
| High-volume AI calling | Voice AI Unlimited | Covered AI compute; phone charges remain | General computer agent is wrong layer |
| Lead follow-up state machine | Workflow | Often deterministic / cents per premium action | Repeated agent reasoning wastes quota |
| Simple intent/summarisation | Workflow AI | ~$0.01 execution | Agent steps/tokens |
| Event-driven CRM reasoning | Agent Studio | Token/action PPU | Agent steps/tokens |
| Recurring CRM report | Ask AI / Managed Agent / workflow | Windowed Ask AI or metered Agent Studio | Weekly agent pool |
| General browser operation | Ask AI Browser Control | Windowed Ask AI allowance / PPU | Core Grok Bot usage pool |
| Cross-system open-ended computer work | Ask AI connectors/browser or external agent | Depends on path | Grok Bot strength |

### Current judgement

For a DRF revenue product delivered inside HighLevel:

> **Do not use Grok Bot as the transaction engine when HighLevel can perform the action natively.**

Grok Bot should sit above/beside HighLevel for open-ended research, exception handling, cross-system work, browser-only systems and supervisory/operator work.

HighLevel should own the repetitive customer lifecycle because it can execute those actions with substantially more predictable unit economics.

---

# 16. Example DRF product economics

## A. AI support / sales assistant

Recommended stack:

```text
WhatsApp/web/SMS
→ HighLevel Conversation AI Unlimited
→ native CRM state
→ workflows
→ human escalation
```

Supplier AI compute baseline: **$97/location/month**, plus messaging/provider charges.

A Grok Bot is not required for every conversation.

## B. AI voice receptionist

Recommended stack:

```text
phone
→ HighLevel Voice AI Unlimited
→ Conversation/Knowledge Base
→ calendar/pipeline workflows
→ human transfer/escalation
```

Supplier AI compute baseline: **$97/location/month**, plus telephony/provider charges.

This is potentially one of the strongest HighLevel economics because voice AI compute is currently included as unlimited subject to fair use.

## C. Revenue recovery / reactivation

Recommended stack:

```text
stale lead/payment/quote trigger
→ deterministic workflow
→ bounded intent/decision AI where needed
→ Conversation AI follow-up
→ opportunity/payment update
```

This minimises broad agent usage almost completely.

## D. General “AI employee” operating a client's websites

Recommended stack:

```text
Ask AI + Browser Control
→ native connector where available
→ browser only where no native action exists
```

This **must be benchmarked** before promising unlimited labour because Ask AI uses a finite 5-hour-window allowance whose numeric size is not currently published.

---

# 17. What is genuinely unlimited vs not

## ✅ Documented unlimited subject to fair use on AI Employee Unlimited

- Conversation AI
- Conversation AI Prompt Optimizer
- Voice AI — inbound
- Voice AI — outbound
- Voice AI widget
- Voice AI Prompt Optimizer
- Reviews AI
- Content AI

## ⚠️ Included but not unlimited

- Ask AI — 3× Growth allowance per 5-hour window
- AI Studio — 3× Growth allowance per 5-hour window
- Funnel & Website AI — 1,000 prompts/day/location
- Workflow AI Builder / Generate with AI — daily fair-use reset
- Email AI — included/fair use
- Knowledge Base — included/fair use

## 💵 Always/commonly metered

- Agent Studio / Managed Agents
- AI Agent workflow LLM calls
- Agent Studio web search/media
- premium Workflow AI actions
- external models/APIs
- telephony
- SMS/email/WhatsApp transport/provider fees

---

# 18. Research gaps requiring live benchmark

There are still material unknowns that official documentation does not quantify.

## Gap 1 — Ask AI exact 5-hour allowance

HighLevel says Growth includes usage and Unlimited includes 3× usage, but does not publish the actual numeric unit/credit ceiling.

**Required test:** run identical Ask AI workloads on Growth and Unlimited and measure usage depletion / throttle point.

## Gap 2 — Ask AI Browser Control consumption

The Browser Control article documents capability but not an action-to-credit conversion.

**Required test:** repeat a standard browser benchmark and log number of steps, duration and remaining Ask AI capacity.

## Gap 3 — AI Employee Unlimited fair-use ceiling

No public numeric ceiling is stated for Conversation/Voice AI Unlimited.

**Required test:** only becomes relevant once real client volume approaches abnormal/high-volume levels. Do not manufacture load merely to discover a ceiling.

## Gap 4 — Grok Bot vs Ask AI browser cost per completed job

Both vendors currently hide the exact included quota conversion.

**Recommended common benchmark:**

1. company research + structured CRM update;
2. login/navigation task across a third-party portal;
3. find 25 records and update HighLevel;
4. recurring daily operational report;
5. exception-handling task requiring browser + CRM action.

Record:

```text
completion success
human interventions
wall-clock time
agent/browser steps
input/output token telemetry where exposed
included allowance depletion
PPU/on-demand cost
cost per successful completed job
```

This is the benchmark that matters for DRF, not nominal subscription price.

---

# 19. DRF decision rules

1. **Native first.** If HighLevel has a native deterministic action, use it before computer use.
2. **Unlimited customer AI second.** Route high-volume text/voice work through Conversation AI/Voice AI Unlimited when economics justify the $97 location fee.
3. **Cheap bounded judgement third.** Use Workflow AI premium actions where a $0.01 decision can replace a large agent loop.
4. **Agent Studio selectively.** Use metered agents only for tasks whose value materially exceeds token/tool cost.
5. **Browser control as exception.** Ask AI Browser Control is useful but must not become the default transaction mechanism.
6. **Grok Bot above the system, not inside every transaction.** Use it for broad research, cross-system work, exceptions and supervisory/operator tasks.
7. **Set spending caps.** Never leave open-ended Agent Studio/Ask AI overage/on-demand spend on an unproven client workflow.
8. **Rebill consumption.** DRF pricing should separate recurring platform/value MRR from channel/AI variable usage where appropriate.
9. **Benchmark completed work.** Compare cost per successful business outcome, not token count alone.

---

# 20. Bottom line for DRF

The initial concern is valid: a general computer-use agent can consume a finite allowance surprisingly quickly because every visual navigation step, reasoning loop and context turn costs compute.

HighLevel changes the economics because most revenue operations do **not** require general computer use once the client is operating inside HighLevel.

For a client-facing AI employee product, the strongest current economic pattern is:

```text
$97/location AI Employee Unlimited
        ↓
unlimited* customer chat + voice AI
        ↓
native CRM + workflows
        ↓
cheap bounded AI decisions
        ↓
Ask AI / Agent Studio only for exceptions
        ↓
Grok Bot/external computer agent only when genuinely required

* subject to HighLevel fair use and separate channel/provider charges
```

**DRF position:** HighLevel currently looks materially stronger than Grok Bot as the **transactional revenue-operations employee layer**. Grok Bot remains stronger as a flexible general-purpose computer worker. The two are complementary, but putting routine CRM work through Grok Bot would waste its scarce weekly computer-use budget.

The next useful proof is a controlled **Ask AI Browser Control vs Grok Bot completed-job benchmark** rather than more desk research.

---

# Primary sources

1. HighLevel public pricing  
   https://www.gohighlevel.com/pricing
2. HighLevel AI Products Pricing — modified 21 Aug 2026  
   https://help.gohighlevel.com/support/solutions/articles/155000006652
3. HighLevel Pricing & Billing / Rebilling  
   https://help.gohighlevel.com/support/solutions/articles/155000001156-highlevel-pricing-guide
4. Ask AI Browser Control  
   https://help.gohighlevel.com/support/solutions/articles/155000008339-ai-browser-control-extension
5. Ask AI Skills and Connectors  
   https://help.gohighlevel.com/support/solutions/articles/155000008434-ask-ai-skills-and-connectors
6. Ask AI Scheduled Tasks  
   https://help.gohighlevel.com/support/solutions/articles/155000007966-how-to-use-scheduled-tasks-in-ask-ai-to-automate-prompts
7. Ask AI session examples and costs  
   https://help.gohighlevel.com/support/solutions/articles/155000007818-ask-ai-session-examples-usage-costs
8. HighLevel AI Usage Limits  
   https://help.gohighlevel.com/support/solutions/articles/155000007813-ai-usage-limits
9. Agent Studio documentation  
   https://help.gohighlevel.com/support/solutions/folders/155000001368
10. Managed Agent scheduled triggers  
    https://help.gohighlevel.com/support/solutions/articles/155000008245-scheduled-triggers-for-super-agents-in-highlevel
11. Workflow AI Agent action pricing behaviour  
    https://help.gohighlevel.com/support/solutions/articles/155000007600-workflow-action-ai-agent
12. Workflow Pro volume tiers  
    https://help.gohighlevel.com/support/solutions/articles/155000003971
13. AI Studio pricing  
    https://help.gohighlevel.com/support/solutions/articles/155000008322-ai-studio-pricing
14. Cursor Grok Bot plans and billing  
    https://cursor.com/help/grok-bot/plans
15. Cursor staff clarification on Grok Bot weekly pool / on-demand spillover  
    https://forum.cursor.com/t/grok-bot-spend-cursor-usage-i-cant-accept-it/169796/9
16. Cursor acknowledgement of fast Grok Bot depletion reports  
    https://forum.cursor.com/t/anyone-used-grokbot-on-the-api-very-high-costs/169551/7
