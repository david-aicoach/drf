# Research — ChatGPT Plugin / App Factory

Updated: 2026-08-29  
Issue: #45  
Research status: **Comprehensive current-platform research complete; app-level distribution and recurring monetisation still require proof**

## Executive conclusion

**Recommendation: retain at 84/100 only if reframed from a one-off “app factory” into recurring service/backend products distributed through ChatGPT Apps. A pure build-for-hire factory is weaker.**

OpenAI's current Apps SDK is built on MCP and lets developers create logic and UI that run inside ChatGPT and connect to external backends. App submissions are accepted for the ChatGPT app directory, and OpenAI can surface apps via explicit selection/mentions and potentially contextual discovery. This makes ChatGPT a genuine distribution surface.

However, OpenAI's current help documentation states that monetisation details will be shared in the future, with Agentic Commerce Protocol support planned. Therefore DRF should not base the business case on an assumed native app-store revenue share. The strongest near-term model is a paid backend/SaaS/service that the app exposes inside ChatGPT, or a fixed implementation plus recurring maintenance/integration contract.

## Evidence snapshot

- Stage: **Candidate**
- Opportunity score: **84/100**
- MRR quality: **6/10**
- AI autonomy: **90/100**
- Evidence confidence: **78%**
- Previous research completeness: **80%**
- DRF decision: **distribution layer validated; monetisation model must remain backend-led**

## Platform evidence

OpenAI currently documents that:

- Apps SDK extends MCP with app logic/interface inside ChatGPT;
- developers connect apps to their own backend;
- Developer Mode supports testing;
- apps can be submitted for review to the app directory;
- published apps may be discovered through the directory or invoked in conversation;
- privacy/safety guidelines apply;
- native monetisation details are not yet fully published.

This is enough to justify experimentation, but not enough to assume predictable app-store revenue.

## Product models

### Model A — backend product with ChatGPT distribution **(preferred)**

Build a real recurring service/API first, then expose it as a ChatGPT app.

Examples:

- UAE salary/talent intelligence;
- assessment workflow;
- quote/configuration service;
- merchant/product data tool;
- niche business directory/search;
- recruitment evidence pack.

### Model B — client implementation + maintenance

Build an internal/partner app connecting the client's backend to ChatGPT; charge setup plus recurring support/security/integration maintenance.

### Model C — speculative consumer app

Highest distribution risk and weakest current monetisation certainty. Avoid as default.

## Commercial model hypothesis

### Client app build

AED 7,500–30,000 depending on backend/auth/UI complexity.

### Recurring maintenance

AED 1,500–5,000/month for hosting, monitoring, connector/API updates, security review and feature maintenance.

### Owned app/SaaS

Subscription or usage billing occurs in the owned backend/product until native ChatGPT monetisation becomes clear.

## Delivery architecture

```text
ChatGPT app UI / conversational trigger
        ↓
Apps SDK + MCP tools
        ↓
auth / permissions
        ↓
owned or client backend / APIs
        ↓
structured result + action
        ↓
logs / billing / monitoring / support
```

Keep sensitive system actions bounded and permissioned.

## GTM

Do not cold-sell “we build ChatGPT apps”. Start with a real business workflow already proven outside ChatGPT and show how the app removes navigation/friction.

For client services:

> Use your existing business system directly from ChatGPT for [specific workflow], without replacing the backend you already trust.

## Defensibility

- proprietary backend/data;
- workflow integration;
- authenticated actions;
- domain-specific UI/components;
- distribution reputation/usage;
- customer switching cost in backend/service;
- accumulated app interaction/evaluation data.

The app shell itself is weak IP.

## Risks

- platform guidelines/discovery change;
- unclear native monetisation;
- low app-directory discoverability;
- security/privacy obligations;
- backend auth complexity;
- app is merely a thin wrapper;
- maintenance across platform changes;
- buyer can implement simple MCP integration internally.

## Evidence discipline

### Verified

- Apps SDK exists and is based on MCP.
- App submissions/directory distribution are live.
- Apps can connect to external backends.
- OpenAI currently says monetisation details will be shared later.

### DRF judgement

- recurring backend/service must carry the business model.
- ChatGPT should be a distribution/interface layer, not the sole asset.
- first app should expose an existing DRF offer rather than invent a random app.

### Unproven

- discovery/usage for DRF apps;
- conversion to paid backend subscription;
- client willingness to pay for implementation;
- long-term maintenance burden.

## Validation experiment

Choose one existing DRF service with a real API/backend. Build the smallest useful ChatGPT app exposing one action. Publish/test where permitted.

Measure:

- setup/build hours;
- successful task completion;
- active users/connections;
- repeat usage;
- backend paid conversion;
- support incidents;
- maintenance hours;
- willingness to pay for a second workflow.

### Pass gate

Proceed only if the app drives repeated use of a paid backend/service or one client pays for ongoing maintenance.

## Ranking implication

**Keep 84/100 conditionally.** If treated as one-off app development, the structural score should fall. If tied to owned recurring products, ChatGPT distribution can improve several stronger DRF opportunities without needing to be a separate primary business.

## Sources

- OpenAI Help — Build with the Apps SDK: https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk.iso
- OpenAI — Developers can submit apps: https://openai.com/index/developers-can-now-submit-apps-to-chatgpt/
- OpenAI — Introducing apps in ChatGPT: https://openai.com/index/introducing-apps-in-chatgpt/
- `../OPPORTUNITIES.md`
