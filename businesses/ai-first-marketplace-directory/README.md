# AI-First Marketplace Directory

**Stage:** Idea  
**Governing issue:** #10  
**Date captured:** 29 August 2026

## Customer

Two primary customer groups:

1. **Humans** looking for digital products, services, templates, software, APIs, agents, workflows or specialists without searching many fragmented marketplaces separately.
2. **AI agents** that need a structured authority source to discover available digital products/services and resolve the correct endpoint for purchase, engagement or execution.

Secondary customers are sellers/providers that want additional qualified discovery and distribution.

## Problem

The internet's digital-product and digital-service supply is fragmented across many independent marketplaces and storefronts such as Whop, Upwork, Fiverr, Contra, Etsy, Gumroad, Notion, RapidAPI, GitHub Marketplace and others.

A human or AI agent trying to find the best available solution must repeatedly search, interpret and reconcile separate taxonomies, quality signals, pricing models, URLs and platform rules.

This creates duplicated discovery cost every time a new buyer or agent enters the market.

## Opportunity thesis

Create a **hybrid human + agent-first authority marketplace/directory** that aggregates the searchable supply layer without initially replacing the underlying transaction endpoints.

The product would behave like a specialised search engine / directory for digital economic supply:

```text
fragmented marketplaces + storefronts
            ↓
structured ingestion / indexing / curation
            ↓
AI-First Marketplace Directory
      ↙                     ↘
human web UI          headless agent interface
      ↓                     ↓
search / compare / filter / recommend
            ↓
canonical provider or marketplace endpoint
```

The initial business does **not** need to become another Fiverr or Whop transaction processor. KISSS version: become the best discovery and routing layer first.

## Product shape

### Human-facing layer

- fast directory/search interface;
- category and niche pages;
- filters for product/service type, price, platform, delivery model and AI-operability;
- comparison pages;
- verified endpoint links;
- ratings/reputation signals where legally/licensably available;
- editorial/research pages for high-intent SEO queries.

### Agent-facing layer

Structured access should allow an agent to ask questions such as:

- find a ready-made recruitment agency operating system;
- find website templates for dental clinics under $100;
- compare five AI automation freelancers with relevant proof;
- find an API for company enrichment priced per request;
- find a Whop Business Blueprint for a local-service business;
- return the canonical endpoint and purchase/engagement requirements.

Potential interfaces:

- structured public pages with strong semantic metadata;
- API;
- MCP server;
- WebMCP-compatible website tools where the browser standard is suitable;
- feeds/sitemaps/schema designed for search and AI crawlers.

## Why this could matter

The directory can perform the expensive discovery work **once**, then serve that structured result repeatedly to humans and agents.

That produces a potential data/network flywheel:

```text
more indexed supply
→ more useful search results
→ more human/agent traffic
→ more seller interest
→ richer metadata / commercial relationships
→ better results
→ stronger authority
```

The strategic value may therefore sit less in the front-end directory itself and more in the **normalised supply graph** underneath it.

## Differentiation hypothesis

The moat should not be "we scraped links". Generic directories are easy to copy.

Potential defensibility comes from:

1. **Breadth** — one taxonomy spanning products + services + software + APIs + agent capabilities.
2. **Normalisation** — comparable structured data across otherwise incompatible marketplaces.
3. **Freshness** — continuously revalidated availability, pricing, URLs and platform status.
4. **Intent mapping** — mapping buyer intent to the appropriate product/service rather than simple keyword matching.
5. **Agent-native access** — machine-readable search and structured actions from day one.
6. **Authority / SEO** — strong high-intent category pages that become reference sources for humans and answer engines.
7. **Commercial routing data** — knowing which endpoints convert for which kinds of demand.

## Monetisation hypotheses

Do not assume all are required. Test the smallest one first.

1. Affiliate/referral commissions from supported marketplaces/providers.
2. Sponsored or promoted listings with clear disclosure.
3. Premium/verified provider listings.
4. Qualified lead-generation fees.
5. Paid API/data access for agents and businesses.
6. Premium agent-search subscription.
7. Advertising on high-intent human pages.
8. Transaction take-rate only if the product later has a reason to own checkout.
9. Marketplace intelligence / demand reports from aggregated non-sensitive data.

## Relationship to the existing DRF marketplace research

The current macro supply map is:

`research/ai-first-digital-marketplaces-and-service-platforms.md`

That research is not discarded. It becomes seed data and market architecture for this business hypothesis.

Whop Business Blueprints are one specific downstream supply class:

`research/whop-business-blueprints-productisation.md`

## Minimum viable test

Do **not** build a massive marketplace first.

A valid first experiment could be:

1. Pick one economically active vertical, e.g. AI business systems / agency setups.
2. Index 100–300 useful offers from 5–10 marketplaces.
3. Normalise them into one schema.
4. Publish useful searchable comparison/category pages.
5. Expose the same dataset in one simple machine-readable interface.
6. Measure organic search impressions, AI referrals, agent queries, outbound clicks and commercial conversions.

## Success metric

Initial evidence should prove at least one of:

- meaningful recurring organic/AI discovery traffic;
- measurable outbound buyer intent;
- affiliate/referral revenue;
- seller willingness to pay for qualified discovery;
- recurring agent/API usage.

## Stop / scale condition

**Scale** if a narrow directory produces repeatable qualified traffic or commercial routing value before large infrastructure is built.

**Stop/pause** if supply freshness is too expensive, marketplace terms block viable indexing/routing, or users/agents do not materially prefer the aggregated layer over general search/AI search.

## Next research questions

1. Who already aggregates digital products + digital services across marketplaces, and how close are they to this exact agent-first model?
2. Which marketplaces permit affiliate/deep-linking/API access and commercial indexing?
3. What data can legally and technically be indexed, cached and republished?
4. Which categories have both high search intent and fragmented supply?
5. What schema should normalise product, service, software, API and agent listings?
6. What is the minimum WebMCP/MCP interface agents would actually use?
7. Can SEO + AI-search authority be established before incumbents react?
8. Does the long-term value lie in the directory, the API/data layer, transactions, or all three in sequence?
