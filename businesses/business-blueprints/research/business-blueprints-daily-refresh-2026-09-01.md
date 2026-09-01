# Business Blueprints — Daily Intelligence Refresh

**Date:** 1 September 2026  
**Run:** `REFR-20260901-1350Z-business-blueprints-manual-test`  
**Issue:** #115  
**Configuration:** `DRF-INTELLIGENCE-CONFIG-1.1`  
**Mode:** Manual test of the scheduled daily parent-opportunity loop

## Executive result

**Outcome: WEAKER at one channel-economics assumption; parent decision unchanged.**

The first manual run of the Business Blueprints daily intelligence profile successfully found a stale channel assumption in current DRF canon:

- DRF recorded **Notion Marketplace = 8% + $0.40 per transaction**.
- Current first-party Notion documentation states **10% + $0.40 per transaction** for sales processed through Notion Marketplace.
- Creators outside the United States also pay an additional **1% foreign-exchange fee** on payouts converted from USD.
- Funds are held for **14 days** before payout eligibility to account for refunds; current creator material also advertises a 14-day refund window.

This worsens the direct economics of the Notion-native channel relative to the stored assumption, but does **not** alter the Business Blueprints parent RBS, Proof, gate or capital decision because:

1. Notion is only one specialist distribution endpoint;
2. the parent is deliberately multi-platform;
3. Notion remains strategically useful when the Blueprint includes a genuine Notion-native operating system;
4. the parent score is still constrained mainly by missing DRF buyer conversion, CAC, deployment/activation, refund/support and contribution evidence.

## Live channel scan

### Whop

No new evidence in this run justified changing the current 1 September channel conclusion. Current official Whop referral documentation remains consistent with the existing first-party programme treatment. The public Blueprints page itself returned a fetch/cache failure during this run, so no absence-based conclusion was drawn.

Current decision: **no parent or Whop-channel score change**.

### Gumroad

Current official pricing remains consistent with DRF's stored model:

- direct/profile-link sales: **10% + $0.50**, plus card/payment processing where applicable;
- Discover marketplace sales: **30%**;
- high-volume direct sales receive a lower platform rate once monthly paid sales cross the current threshold.

No routing change.

### Contra Digital Products

Current first-party documentation confirms a commercially relevant product model:

- one-time and subscription digital products;
- seller-controlled tiers and delivery;
- merchant-of-record handling;
- seller product fees that are capped by price band, plus processing fees;
- current seller fee examples: $2/$5/$10/$29 on non-Pro products across increasing price bands, with lower current Pro fees.

This supports the existing **hybrid product/service channel** role. No parent score change.

### Notion Marketplace

**Material correction found.**

Current first-party seller economics:

- **10% + $0.40 per transaction**;
- +1% FX for creators outside the US when payout currency is converted;
- Notion acts as merchant of record for native Marketplace payments;
- 14-day payout eligibility hold;
- paid templates require approval and ongoing commercially reasonable creator support.

Implication: lower contribution than DRF's prior 8% + $0.40 assumption. Keep Notion **A when Notion-native** because native discovery, reviews, analytics, customer email/update tools and access locking remain valuable product-format advantages.

### Lemon Squeezy

Current first-party pricing remains **5% + $0.50** base transaction pricing with merchant-of-record tax handling. No material change.

### Payhip

Current first-party pricing remains:

- Free: 5% transaction fee;
- Plus: $29/month + 2%;
- Pro: $99/month + 0%;
- processor fees remain separate.

No material change.

### Framer

Current first-party Creator Program material still states creators keep **100% of paid Marketplace template revenue**. Template referral economics can provide additional platform-specific upside. No routing change.

### Webflow

Current first-party template-designer material still advertises **95% creator commissions**. No routing change.

## AI discovery / agentic commerce

The scan reconfirmed that AI-native product discovery is becoming a real distribution layer rather than only an SEO hypothesis:

- OpenAI's current shopping/product-discovery stack uses Agentic Commerce Protocol infrastructure for richer product discovery and eligible in-chat checkout.
- Shopify's 2026 Agentic Storefronts / UCP / Catalog API architecture distributes structured merchant product data into AI surfaces including ChatGPT, Google/Gemini and Microsoft Copilot, and its Spring 2026 developer release opened agentic-commerce infrastructure more broadly.
- Chrome WebMCP remains a separate browser-native website tool interface; it should not be conflated with platform MCP/API/CLI integrations.

This reinforces the existing strategic preference for **machine-readable product information + owned commerce + marketplace syndication**. It does not yet prove that a DRF Business Blueprint SKU will receive meaningful AI-referred traffic or conversion.

## Score / proof decision

- Parent Business Blueprints RBS: **82/100 → 82/100**.
- DRF Proof: **P2 Backtested → P2 Backtested**.
- Gate: **FORWARD TEST → FORWARD TEST**.
- Capital unlocked: **up to $3,000 → unchanged**.
- Next Proof: **unchanged** — package one proven Outcome × Niche Blueprint, syndicate across product-fit channels and measure real traffic, paid conversion, CAC, fees, refunds, activation, support and contribution by channel.

## Why no score change

The Notion fee correction is real but narrow. It does not move any parent RBS factor by enough to justify a 2+ point change. The largest remaining uncertainties are still live DRF execution variables rather than marketplace fee-table precision.

## Sources checked

### First-party

- https://www.notion.com/fi/help/selling-on-marketplace
- https://www.notion.com/en-gb/help/template-gallery-guidelines-and-terms
- https://www.notion.com/become-a-creator
- https://gumroad.com/help/article/66-gumroads-fees.html
- https://help.contra.com/en/articles/13604374-digital-products
- https://contra.com/pricing
- https://www.lemonsqueezy.com/pricing
- https://payhip.com/pricing
- https://www.framer.com/help/articles/how-the-creator-program-works/
- https://webflow.com/templates/applications
- https://docs.whop.com/refer-businesses-to-whop
- https://openai.com/index/powering-product-discovery-in-chatgpt/
- https://www.shopify.com/news/spring-26-edition-dev
- https://www.shopify.com/news/agentic-commerce-momentum
- https://developer.chrome.com/docs/ai/agents

## Persistence notes

The Business Blueprints detailed parent/channel files are the first canonical write targets for this finding. The reusable master marketplace map also contains the old Notion fee and should be reconciled as part of Issue #115 when safely editable; until then this dated evidence record is the newer source for the Notion correction.
