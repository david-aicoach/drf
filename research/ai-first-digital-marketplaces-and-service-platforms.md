# AI-First Internet Revenue Marketplaces — Master Map

**Status:** Canonical macro research  
**Research date:** 29 August 2026  
**Governing issue:** #9  
**Purpose:** Map the main digital places where an AI-operated business can earn money from digital products, software, APIs, content, creative assets or client services.

## Executive conclusion

The internet already contains a large, fragmented distribution layer for AI-produced economic output. DRF should not think of each platform as a separate business. It should treat them as **revenue endpoints** for assets and capabilities produced by the Revenue Factory.

The operating model is:

```text
research demand
→ build or prove useful digital asset/capability
→ classify output
→ route to the best marketplace(s)
→ publish compliantly
→ use AI for optimisation, fulfilment and support where permitted
→ human handles identity, approvals, calls or judgement where required
→ measure revenue and contribution
→ double down / syndicate / retire
```

The macro opportunity is substantial:

- Goldman Sachs Research estimated the creator economy could grow from about **$250B to $480B by 2027**.
- Upwork describes flexible digital knowledge work as a **$1.3T market opportunity**.
- Etsy alone recorded **$10.5B Etsy-marketplace GMS in 2025** with **86.5M active buyers**.
- Whop currently displays **22.6M users**, **211,751 sellers** and **$3.44B+ made by sellers**.
- Shopify says merchants have collectively generated **$1.1T** in sales.
- Amazon KDP Select alone paid authors **$71M in July 2026**.

These numbers are not directly additive because they measure different things. They demonstrate that the economic surface area for digital creation, commerce and remote knowledge work is already very large.

## Core operating distinction

**AI-first does not mean violating marketplace identity, automation or authenticity rules.**

Use these operating modes:

| Mode | Meaning |
|---|---|
| **A0 — Agent-native** | The platform is designed for APIs, MCP, autonomous agents or machine-to-machine transactions. An agent can perform core work and commerce actions within the platform's rules. |
| **A1 — AI-direct** | A human/business may be required for KYC, payment ownership or initial account setup, but most creation, listing, fulfilment, maintenance and optimisation can be AI-operated afterwards. |
| **H1 — AI + human-assisted** | Human identity/account ownership and some communication, calls, approvals, sales or judgement are materially required. AI can still perform most backend research, production and delivery. |
| **H2 — Human-primary / AI-limited** | The platform expects substantial human creative/professional contribution or restricts AI-generated primary output. AI is a support tool, not the economic worker. |
| **W — Watch** | Strategically important but monetisation, liquidity or seller economics are not yet sufficiently mature/verified. |

### Non-negotiable compliance rule

Never use AI to impersonate a human, bypass KYC, share a personal account contrary to terms, mass-spam proposals, fabricate credentials/reviews, or automate restricted platform actions.

Examples:

- Upwork explicitly says accounts cannot be shared and unapproved bot/browser automation can trigger warnings or bans. Approved API use is possible for approved use cases.
- Fiverr permits AI-assisted content and services, but the freelancer remains accountable for customised, original work and AI is not treated as a substitute for the freelancer's own skill and judgement.
- Etsy permits seller-prompted AI creations with disclosure, but requires a human creative role and explicitly excludes AI prompt bundles from its designed-by-a-seller category.
- Envato currently prohibits AI-generated content as the primary component of products submitted to Market/Elements.

---

# Master marketplace table

**Priority:** A = research/activate soon; B = useful secondary channel; C = specialist/conditional; D = poor AI-first fit; W = watch.  
**Discovery:** Marketplace = platform supplies buyer discovery; Storefront = we must generate most traffic; Hybrid = both.

| Platform | Primary lane | Discovery | AI mode | What DRF/AI can sell | Current demand / scale signal | High-level economics | Human/compliance gate | Automation / agent fit | Priority |
|---|---|---|---|---|---|---|---|---|---|
| **Whop** | Digital businesses, Blueprints, software, services, courses, communities | Marketplace + hybrid | **A1 / moving toward A0** | Business Blueprints, AI systems, agency setups, software, communities, services | 22.6M users; 211,751 sellers; $3.44B+ made by sellers | Payments from 2.7% + $0.30 plus applicable add-ons | KYC/payment ownership; product-policy compliance | **Very high** — Whop CLI/MCP direction makes it unusually agent-friendly | **A** |
| **Contra** | Digital products + freelance/agency services | Marketplace + hybrid | **H1 for services; A1 for products** | AI workflows, templates, files, subscriptions, websites, design/dev, consulting deliverables | 50K+ teams stated; active creative/services marketplace | Freelancer earnings commission-free; product/platform and processing fees vary; Pro can waive some platform fees | Identity verification required for wallet; human portfolio/account | High backend AI fit; strong hybrid product + service profile | **A** |
| **Upwork** | Freelance and agency services | Marketplace | **H1** | Research, software, automation, marketing ops, data work, writing/editing, consulting deliverables | 785K active clients at end-2025; $5,129 GSV per active client Q4 2025; $1.3T stated flexible-work TAM | Freelancer service fee currently 0–15% per contract | Real identity; account cannot be shared; possible video/ID checks | **Medium** — AI backend strong, but unapproved bots/automation prohibited; API permission required | **A** |
| **Fiverr** | Productised digital services | Marketplace | **H1** | Fixed-scope design, automation, coding, research, content, AI implementation, editing | 3.1M annual active buyers at end-2025; $342 annual spend/buyer; spend/buyer +13.3% YoY | Freelancer receives 80% of completed order amount | ID/business verification; customised work; seller accountable for AI output | High backend fit; Fiverr itself offers AI Personal Assistant for eligible sellers | **A** |
| **Etsy** | Creative digital downloads | Marketplace | **H1** | Original digital designs, printables, planners, graphics, seller-prompted AI art | 86.5M active buyers; $10.5B Etsy marketplace GMS in 2025 | $0.20 listing; 6.5% transaction fee + payment processing; possible ads fees | Requires human creative role; AI use disclosure for seller-prompted creations; prompt bundles not allowed | Medium; good at scale for visual/download products, weaker for pure autonomous output | **A/B** |
| **Notion Marketplace** | Templates / operating systems | Marketplace | **A1** | Business OS templates, CRM, project systems, recruitment systems, trackers, databases | Native marketplace inside a globally used productivity platform; paid creator marketplace live | Notion merchant of record; 8% + $0.40 per transaction; +1% FX outside US | Creator profile, review, Stripe/payment onboarding where eligible | High — templated systems are naturally AI-buildable and maintainable | **A** |
| **Framer Marketplace** | Website templates, plugins, components | Marketplace | **A1** | Niche business sites, landing pages, components, plugins | Framer says creators keep 100%; reported $753K creator payout in one month on creator page | 0% Framer cut on paid Marketplace products; referral commissions possible | Quality/originality expectations; creator account | High — AI can generate, test and iterate web templates with human QA | **A** |
| **Webflow Templates** | Website templates | Marketplace | **A1/H1** | Niche sites, SaaS landing sites, service-business templates | Established Webflow template ecosystem | Webflow advertises **95% creator commissions** | Template review; Stripe onboarding after approval | High backend build fit; review/QA remains important | **A/B** |
| **PromptBase** | Prompts and agent skills | Marketplace | **A0/A1** | Prompts, agent skills / SKILL.md files, custom AI jobs | Specialist marketplace built around AI assets | 20% marketplace fee; 0% via referral link; 10% custom-job fee | Submission guidelines/payment onboarding | Very high — output is natively AI-oriented | **A/B** |
| **Gumroad** | General digital products | Marketplace + storefront | **A1** | Guides, templates, files, software, memberships, assets | Mature creator-commerce brand; discovery exists but direct audience remains important | Direct sales: 10% + $0.50 plus processing; Discover sales: 30% | Creator/payment verification | High operational fit; API/automation possible around owned funnel | **B** |
| **Lemon Squeezy** | Software / digital storefront | Storefront | **A1** | SaaS, software licences, digital downloads, subscriptions | Strong software-focused merchant-of-record infrastructure | 5% + $0.50 base transaction fee; some international/PayPal/subscription additions | Business/payment onboarding | **Very high technically** — API, subscriptions, usage billing; but little native demand generation | **A for checkout; B as marketplace** |
| **Payhip** | Digital storefront | Storefront | **A1** | Downloads, courses, memberships, templates | Accessible creator storefront; discovery weaker than marketplaces | Free: 5%; Plus $29/mo +2%; Pro $99/mo +0%, plus payment processor | Payment account | High operational fit; requires external traffic | **B** |
| **Shopify** | Owned commerce / agentic commerce | Storefront + channels | **A1** | Digital products, SaaS access, subscriptions, productised IP | Merchants collectively $1.1T sales; millions of merchants | UAE Basic from $24/mo annually; payment fees vary; **Agentic** plan shown at $0/mo for AI channels | Business/payment setup | **Very high** — APIs, apps, automation and AI-channel commerce | **A infrastructure** |
| **Contra Digital Products** | Digital files/workflows/subscriptions | Marketplace + profile storefront | **A1** | Templates, AI workflows, subscriptions, downloads | Launched as integrated product layer alongside service network | Seller product fee is tiered/capped + processing; Pro/Max can reduce fees depending plan | Identity/wallet verification | High; particularly valuable because product sales build service reputation | **A/B** |
| **Creative Market** | Design assets/templates/fonts | Marketplace | **H1/H2** | Original design systems, templates, graphics, fonts | Established creative asset marketplace | Default shops earn about 50% of list price; rates may vary | Shop/application/quality expectations | Medium; requires strong original creative direction | **B/C** |
| **Envato Market / Elements** | Themes, code, creative assets | Marketplace | **H2** | Human-created web templates, code, themes, creative assets | Large established design/developer marketplace | Current standard author fee shown as 50% | **AI-generated content cannot be primary component** of Market/Elements download | Low for pure AI-first creation; AI may support preview/workflow | **D for AI-generated products; B for human-led code/templates** |
| **Canva Creators** | Templates | Marketplace | **H1** | Presentation, social, business and local-market templates | Canva says millions use templates; Template Creator programme remains beta | Royalties based on template usage; rate formula not fixed publicly on surfaced page | Application and acceptance required | Medium-high; AI can assist creation but creator programme is curated | **B** |
| **Adobe Stock** | Stock images/video/vectors | Marketplace | **A1/H1** | Properly labelled generative AI images, vectors and video | Access to millions of Creative Cloud buyers | 33% royalties images/vectors/illustrations; 35% video | Rights, labelling and quality review; anti-spam rules | High production fit, but human curation/QA needed to avoid low-value spam | **B** |
| **Amazon KDP** | eBooks/books | Marketplace | **A1/H1** | High-quality niche guides, books, workbooks where rights and quality are clear | KDP Select paid **$71M in July 2026** alone | eBooks: 35% or 70% royalty options depending conditions/territory | Must disclose AI-generated text/images/translations; strict quality/IP rules | High creation fit, but human editorial QA essential | **B** |
| **Udemy** | Courses | Marketplace | **H1** | Practical AI/business/software courses with instructor-led structure | Global course marketplace with built-in demand | 97% instructor share via instructor promotion; 37% when Udemy drives sale | Instructor/content policy; human teaching quality and credibility matter | AI can produce curriculum/assets; human-led instruction strongly preferred | **B** |
| **Skillshare** | Classes | Marketplace/subscription | **H2** | Creative/business classes | Teacher royalty system active but 2026 changes prioritise smaller, engaged teacher base | Royalty/engagement model; eligibility requirements apply | Explicitly moving toward more human connection/engaged teachers | AI assists production; weak fit for autonomous catalogue flooding | **C** |
| **itch.io** | Games, tools, assets | Marketplace | **A1** | Indie games, tools, game assets, interactive experiments | Established indie developer marketplace | Seller chooses platform revenue share from 0–100%; 10% default example + payment processing | Creator/payment account | High for AI-assisted game/tool development | **B/C** |
| **Fab (Epic)** | 3D/game/digital assets | Marketplace | **A1/H1** | 3D models, environments, game assets, compatible digital files | Thousands of creators; multi-engine marketplace | Seller receives **88% revenue share** | Publisher onboarding, rights and quality compliance | Medium-high if DRF develops asset-generation capability | **C** |
| **RapidAPI** | APIs | Marketplace | **A0/A1** | AI APIs, data APIs, automation endpoints, niche intelligence services | RapidAPI vendor page claims 400K–500K developers and 350B API calls/month | Marketplace vendor page shows 20% listing share; providers set subscription/pay-per-use tiers | Provider/payment setup; API reliability | **Very high** — machine-consumable products with recurring usage economics | **A** |
| **GitHub Marketplace** | Developer apps | Marketplace | **A1** | GitHub Apps, developer tools, AI workflow apps | Direct access to GitHub developer ecosystem | Paid plans supported; verified publisher required for paid apps | Publisher verification + financial onboarding; app quality/security | Very high for DRF software/agent tooling | **A/B** |
| **AWS Marketplace** | SaaS/data/software/pro services | Enterprise marketplace | **H1/A1** | SaaS, APIs, data, AI tools, implementation services | Major enterprise procurement channel | Public SaaS/data offers generally 3%; professional-services private offers 0.5%; other deployment models vary | Seller onboarding, business/legal/security, enterprise requirements | High once product is enterprise-ready; not a quick-start channel | **B strategic** |
| **Microsoft Marketplace** | SaaS / enterprise apps | Enterprise marketplace | **H1/A1** | SaaS, AI apps, enterprise integrations | Major Microsoft enterprise procurement surface | Standard transact service fee **3%** | Publisher/business validation and technical certification | High for mature B2B software | **B strategic** |
| **Apple App Store** | Mobile apps | Marketplace | **H1/A1** | AI utilities, niche business apps, subscription software | Global iOS distribution | Small Business Program: **15% commission** up to $1M proceeds threshold; other rates/programmes may apply | Developer identity/business verification, review | High after app built; compliance/review human gate | **B** |
| **Google Play** | Mobile apps | Marketplace | **H1/A1** | AI utilities, niche apps, subscriptions | Global Android distribution | Fee structures vary; Google states 99% of fee-paying developers are eligible for 15% or less; 2026 regional changes apply | Developer verification, review/policy compliance | High after product creation | **B** |
| **ChatGPT App Directory** | Chat-native apps | AI-native directory | **W → A1** | MCP/Apps SDK tools, workflows, vertical apps | Apps can now be submitted and discovered inside ChatGPT | **Direct monetisation details not yet finalised**; OpenAI says Agentic Commerce Protocol support is planned | Developer review, privacy/safety standards | **Extremely high strategic fit**, but monetisation still emerging | **W / strategic A** |
| **Freelancer.com** | Freelance services/contests | Marketplace | **H1** | Coding, research, design, marketing, automation, data | Large long-running freelance marketplace | Freelancer project fee generally 10% or $5 minimum; hourly 10% | Human profile, bidding, verification; optional Verified badge | AI backend strong; human account/client communication prudent | **B** |
| **PeoplePerHour** | Freelance services | Marketplace | **H1** | Design, dev, marketing, content, automation services | Established UK/global freelancer marketplace | Published service fees historically tier from 20% down to 3.5% as lifetime buyer billing rises | Human profile/client relationship | AI backend good; marketplace interaction remains human-led | **C** |
| **Guru** | Freelance services | Marketplace | **H1** | Technical, creative, business services | Established freelancer marketplace | Freelancer job fee ~5–9% depending membership | Human profile/client relationship | AI backend useful, limited unique strategic advantage | **C** |
| **99designs** | Design services/contests | Marketplace | **H2** | Human-led brand/design projects with AI assistance where acceptable | Specialist design marketplace | Designer platform fee 5–15% depending level for 1-to-1 projects | Human design identity, client collaboration, quality | AI support only; poor autonomous fit | **C/D** |
| **Braintrust** | High-end digital talent / AI gigs | Marketplace | **H1/H2** | Senior engineering, design, product, AI-specialist work | Self-reports **2M+ members** and **10K+ active roles** | $0 talent platform fees | ID verification + skills interview/certification; real professional expertise required | AI supports work, but worker remains human professional | **B/C** |
| **Toptal** | Elite professional services | Curated marketplace | **H2** | Senior development/design/product/consulting | About **3% of applicants** pass screening | Talent sets rate; commercial structure mediated by Toptal | Rigorous interviews/live assessments, communication and experience | Backend AI helpful; fundamentally human-expert channel | **C/D** |
| **Agrenting** | Autonomous agent tasks | Agent marketplace | **A0** | Registered agents completing paid tasks | Emerging 2026 marketplace; site claims live autonomous-agent work | Site advertises 95% of completed-task revenue to agents | Early-market counterparty/liquidity/settlement risk; verify before reliance | Native REST/WebSocket/MCP-style agent workflow | **W** |
| **AgenticTrade** | Paid agent/API capabilities | Agent-to-agent marketplace | **A0** | Per-call AI/data/security/analysis capabilities | Emerging, visible paid per-call listings | Per-call USDC model; economics vary by service | Early-stage trust/liquidity/security risk | Native machine-to-machine | **W** |
| **SwarmBazaar** | Agent service discovery | Agent-readable marketplace/directory | **A0 / W** | Paid endpoints/services across x402/MCP/A2A ecosystems | Self-reports 15K+ live paid endpoints and 1K+ vendors | Varies by underlying endpoint/protocol | Directory rather than mature central marketplace; verify settlement evidence | MCP/agent-readable by design | **W** |

---

# Strategic segmentation

## 1. Digital product marketplaces — best for repeatable IP

Primary targets:

1. **Whop** — deployable businesses, software, services and Business Blueprints.
2. **Notion Marketplace** — operating-system templates.
3. **Framer / Webflow** — niche website templates.
4. **PromptBase** — prompts and agent skills.
5. **Etsy** — high-volume creative digital downloads where policy fit exists.
6. **Adobe Stock** — generative visual assets with strict labelling/quality.
7. **Amazon KDP** — durable knowledge products, not low-quality AI content farms.
8. **Contra Digital Products** — useful because the same profile can cross-sell services.

### DRF product syndication rule

A proven asset should be evaluated for **multi-market packaging**, not single-platform dependence.

Example:

```text
Recruitment Agency Operating System
├── Whop Business Blueprint
├── Notion operating template
├── Framer recruitment-agency website template
├── PromptBase recruiter agent skill
├── Gumroad/Contra implementation pack
└── custom implementation service on Upwork/Fiverr/Contra
```

One piece of proven operating IP can therefore produce multiple revenue SKUs.

## 2. Storefronts — best for control, weaker built-in discovery

- Shopify
- Lemon Squeezy
- Payhip
- Gumroad direct-link sales
- Contra product links

Use these when DRF already controls traffic through SEO, AI search, email, social, affiliates or marketplace cross-links.

**Do not confuse checkout infrastructure with demand.** A beautiful storefront with zero discovery is not a revenue channel by itself.

## 3. Service marketplaces — fastest route to cash and market intelligence

Primary targets:

- Upwork
- Fiverr
- Contra
- Freelancer.com

These can produce cash before a digital product has accumulated search ranking or marketplace reviews. They also reveal repeated client problems that can later be converted into products.

The service loop is:

```text
marketplace job
→ AI-heavy delivery + human account/client layer
→ record repeated problem
→ standardise delivery
→ turn into fixed service
→ turn into digital product
→ turn into software/Blueprint/API when justified
```

This is strategically important: **services are research for products.**

## 4. Developer/software marketplaces — highest scalability

Primary targets:

- RapidAPI
- GitHub Marketplace
- AWS Marketplace
- Microsoft Marketplace
- Apple App Store
- Google Play
- ChatGPT App Directory (watch until economics mature)

These require more build quality and technical compliance, but the unit of sale can become software usage rather than human labour.

## 5. Agent-to-agent marketplaces — potentially the purest future AI-income lane

Current examples found in the 2026 market include Agrenting, AgenticTrade and SwarmBazaar-like agent-readable directories.

These are **not yet comparable with Upwork, Fiverr, Whop or Etsy in proven demand/liquidity**. They belong in a watchlist, because the strategic model is important:

```text
agent publishes capability
→ another agent discovers capability
→ machine-readable scope + price
→ task/API call executed
→ machine settlement
→ rating / repeat usage
```

If this category develops liquidity, DRF should be able to route suitable agents and APIs into it quickly.

---

# Market economics and positioning

## Creator / digital-product economy

Goldman Sachs Research estimated that the creator economy could roughly double from **$250B to $480B by 2027**. The exact definition is broader than only digital products, but it demonstrates the continued expansion of individual/independent digital monetisation.

Source: https://www.goldmansachs.com/insights/articles/the-creator-economy-could-approach-half-a-trillion-dollars-by-2027

## Digital knowledge work

Upwork frames flexible digital knowledge work as a **$1.3T market opportunity**. Upwork finished 2025 with **785,000 active clients** and Q4 GSV per active client of **$5,129**.

Source: https://investors.upwork.com/news-releases/news-release-details/upwork-reports-fourth-quarter-and-full-year-2025-financial

## Product marketplace evidence

Etsy demonstrates the scale of a mature discovery marketplace:

- 86.5M active Etsy buyers at year-end 2025;
- 5.6M active Etsy sellers;
- $10.46B Etsy marketplace GMS in 2025;
- over 100M items for sale.

Source: https://investors.etsy.com/sec-filings/all-sec-filings/content/0001370637-26-000019/etsy-20251231.htm

Whop demonstrates the fast-growing digital-business marketplace model:

- 22,585,674 users displayed;
- 211,751 sellers;
- $3,444,115,721 made by sellers.

Source: https://whop.com/sell/

## Service marketplace evidence

Fiverr ended 2025 with:

- 3.1M annual active buyers;
- $342 annual spend per buyer, up 13.3% YoY;
- marketplace take rate 27.7%.

Buyer count declined 13.6% YoY, which means Fiverr remains large but should not be treated as an unquestioned growth story.

Source: https://investors.fiverr.com/news-releases/news-release-details/fiverr-announces-fourth-quarter-and-full-year-2025-results

## Software/API economics

RapidAPI is structurally attractive for AI-first products because the customer is often software itself. Its vendor page currently claims hundreds of thousands of developers and hundreds of billions of API calls monthly. Treat vendor-page scale claims as first-party marketing claims rather than audited market statistics.

Source: https://get.rapidapi.com/api-provider/

---

# AI-first opportunity ranking for DRF

## Tier 1 — activate / study deeply

| Platform | Why |
|---|---|
| **Whop** | High-growth digital-business platform + Business Blueprints + increasing agentic infrastructure. Already deep-researched separately. |
| **Contra** | Combines services + digital products + agencies/studios; useful bridge from custom work to productised IP. |
| **Upwork** | Large real client demand; ideal for AI-heavy backend services with a compliant human account/client layer. |
| **Fiverr** | Productised service catalogue maps naturally to repeatable AI-backed fulfilment. Native Fiverr AI assistant validates the hybrid model. |
| **Notion Marketplace** | Excellent fit for packaged operating systems generated from real DRF workflows. |
| **Framer** | Strong economics and highly reusable niche-site production. |
| **RapidAPI** | Native recurring machine-consumed product model; strong fit for reusable research/data/automation capabilities. |
| **Shopify + Lemon Squeezy** | Core owned-commerce infrastructure once DRF controls acquisition. |
| **PromptBase** | Direct marketplace for prompts and agent skills; immediate route for small reusable AI IP. |

## Tier 2 — product-dependent

- Etsy
- Adobe Stock
- Amazon KDP
- Webflow
- Gumroad
- Payhip
- Canva Creators
- Freelancer.com
- GitHub Marketplace
- Apple App Store
- Google Play

## Tier 3 — strategic / enterprise / selective

- AWS Marketplace
- Microsoft Marketplace
- Udemy
- Skillshare
- Braintrust
- Toptal
- PeoplePerHour
- Guru
- 99designs

## Watchlist — future agent economy

- ChatGPT App Directory monetisation
- autonomous agent task marketplaces
- x402 / agent-payment marketplaces
- MCP-native service directories
- WebMCP-enabled commercial discovery
- Agentic Commerce Protocol distribution

---

# The DRF marketplace router

When DRF produces something useful, route it by **economic form**:

| Output created | First marketplace candidates |
|---|---|
| Proven business configuration | Whop Business Blueprints |
| Business operating template | Notion, Whop, Contra, Gumroad |
| Website / landing-page system | Framer, Webflow, Contra, Gumroad |
| Agent skill / prompt | PromptBase, Whop, Contra |
| API / data capability | RapidAPI, AWS Marketplace, Microsoft Marketplace |
| GitHub developer tool | GitHub Marketplace, own checkout, Whop |
| SaaS / software | Shopify/Lemon Squeezy direct, Whop, AWS/Microsoft/GitHub as fit |
| Mobile utility | Apple App Store, Google Play |
| Course / training system | Udemy, Whop, Skillshare (if human-led fit) |
| eBook / structured guide | Amazon KDP, Gumroad, Whop |
| Visual asset | Etsy, Adobe Stock, Creative Market, Canva, Fab |
| Indie game/tool | itch.io, app stores, direct storefront |
| Bespoke research/analysis | Upwork, Fiverr, Contra |
| Automation implementation | Upwork, Fiverr, Contra, Freelancer |
| Design/dev execution | Contra, Upwork, Fiverr, Framer/Webflow ecosystem |
| Enterprise AI implementation | AWS/Microsoft marketplace + direct consulting |
| Autonomous machine capability | RapidAPI now; agent-to-agent marketplaces as they mature |

---

# Human-assistance architecture

For platforms requiring human identity or interaction, use the following compliant split:

```text
HUMAN
├── owns/verifies account
├── supplies truthful identity/credentials
├── handles required video calls/interviews
├── attends client calls where needed
├── approves high-risk commitments
└── remains accountable to platform/client

AI BACKEND
├── opportunity research
├── proposal draft
├── portfolio/case-study production support
├── scoping and estimation
├── research and analysis
├── code/design/content production where permitted
├── QA checklists
├── delivery packaging
├── documentation
├── follow-up drafts
├── productisation
└── cross-market syndication
```

This is the correct model for Upwork/Fiverr/Contra-like platforms. The AI is the production engine; the verified human/business remains the accountable market participant where the platform requires that.

---

# What DRF should measure

For every activated marketplace, track:

| Metric | Why |
|---|---|
| Time to first listing | Friction |
| Time to first qualified enquiry | Demand |
| Time to first revenue | Commercial speed |
| Revenue / 30 days | Initial traction |
| Gross margin | Economic quality |
| Human minutes per sale/project | Autonomy level |
| AI inference/compute cost | True delivery cost |
| Platform fee % | Channel cost |
| Refund/dispute rate | Quality/risk |
| Organic impressions/views | Marketplace discovery |
| External traffic required | Distribution dependence |
| Repeat purchase / recurring revenue | Compounding value |
| Upsell revenue | Service/product flywheel |
| Automation restrictions | Operational ceiling |
| KYC/human intervention frequency | Human bottleneck |

### Most important derived metric

```text
AI Contribution Margin
= revenue
- platform/payment fees
- inference/API/runtime cost
- paid acquisition
- value of required human time
- refund/support cost
```

The winner is not the platform with the highest gross sales. It is the platform where **AI Contribution Margin × repeatability × demand** is strongest.

---

# Macro → micro research hierarchy

This document is the **macro map**.

Do not bloat it with every platform's implementation detail.

Use this hierarchy:

```text
research/
├── ai-first-digital-marketplaces-and-service-platforms.md   ← MACRO
├── whop-business-blueprints-productisation.md               ← MICRO
├── [future]-upwork-ai-first-service-opportunity.md
├── [future]-fiverr-ai-first-service-opportunity.md
├── [future]-contra-ai-first-market-opportunity.md
├── [future]-notion-template-market-opportunity.md
└── [future]-rapidapi-ai-api-market-opportunity.md
```

Create micro research only when a platform reaches the threshold for action, experimentation or material investment.

---

# Recommended next sequence

Do **not** deep-research every platform immediately.

1. Keep this table current as the market map.
2. Whop micro research already exists and remains active.
3. Choose the next **three** platforms based on fastest credible revenue for current DRF assets.
4. Run small live experiments.
5. Let evidence decide which platforms earn deeper research and automation.

### Current recommended next three

1. **Contra** — because one profile can monetise both services and reusable digital products.
2. **Fiverr** — because repeatable services can be listed as fixed products and Fiverr explicitly supports AI-assisted workflows/native AI communication.
3. **Upwork** — because client budgets and high-value project demand are material, while AI can make delivery highly leveraged behind a compliant human account layer.

Parallel product channels should be chosen asset-by-asset: **Notion, Framer, PromptBase and RapidAPI** are particularly strong candidates.

---

# Sources — primary / high-value

## Macro

- Goldman Sachs creator economy: https://www.goldmansachs.com/insights/articles/the-creator-economy-could-approach-half-a-trillion-dollars-by-2027
- Upwork 2025 results: https://investors.upwork.com/news-releases/news-release-details/upwork-reports-fourth-quarter-and-full-year-2025-financial

## Whop

- Seller scale: https://whop.com/sell/
- Pricing: https://whop.com/network/pricing/

## Upwork

- Fees: https://support.upwork.com/hc/en-us/articles/211062538-Learn-about-the-Freelancer-Service-Fee
- Automation rules: https://support.upwork.com/hc/en-us/articles/43342677368467-Use-bots-and-other-automation-properly
- Authentic representation/account sharing: https://support.upwork.com/hc/en-us/articles/18513114070419-Represent-yourself-authentically
- Identity verification: https://support.upwork.com/hc/en-us/articles/211067798-How-Upwork-protects-your-personal-data

## Fiverr

- 2025 results: https://investors.fiverr.com/news-releases/news-release-details/fiverr-announces-fourth-quarter-and-full-year-2025-results
- Earnings: https://help.fiverr.com/hc/en-us/articles/9234443621137-Your-earnings-page
- AI guidelines: https://help.fiverr.com/hc/en-us/articles/37554976380177-Using-AI-on-Fiverr-Guidelines-for-freelancers-and-clients
- AI Personal Assistant: https://help.fiverr.com/hc/en-us/articles/32545737221649-Personal-Assistant-for-freelancers
- Identity verification: https://help.fiverr.com/hc/en-us/articles/13127850435345-Verify-your-identity

## Contra

- Service economics: https://contra.com/commission-free
- Pricing: https://contra.com/pricing
- Digital products: https://help.contra.com/en/articles/13604374-digital-products
- Identity: https://help.contra.com/en/articles/9322955-how-to-verify-your-identity-on-contra

## Etsy

- 2025 annual report: https://investors.etsy.com/sec-filings/all-sec-filings/content/0001370637-26-000019/etsy-20251231.htm
- Fees: https://www.etsy.com/uk/legal/fees/
- Creativity / AI standards: https://www.etsy.com/legal/creativity/

## Product / creator marketplaces

- Gumroad fees: https://gumroad.com/help/article/66-gumroads-fees
- Lemon Squeezy pricing: https://www.lemonsqueezy.com/pricing
- Payhip pricing: https://payhip.com/pricing
- Shopify UAE pricing: https://www.shopify.com/ae/pricing
- Notion Marketplace: https://www.notion.com/en-gb/help/selling-on-marketplace
- Framer Creator Program: https://www.framer.com/creators
- Webflow template creators: https://webflow.com/templates/applications
- Creative Market commissions: https://support.creativemarket.com/hc/en-us/articles/201193714-All-About-Shop-Sales-Analytics
- Envato earnings: https://help.author.envato.com/hc/en-us/articles/360000472943-Introduction-to-Earnings
- Envato AI policy: https://help.author.envato.com/hc/en-us/articles/13313674070681-AI-generated-content-policy-for-Market-and-Elements
- Canva Creators: https://www.canva.com/creators/templates/
- PromptBase: https://promptbase.com/support
- Amazon KDP AI guidelines: https://kdp.amazon.com/en_US/help/topic/G200672390
- Amazon KDP royalties: https://kdp.amazon.com/en_US/help/topic/G200634500
- Udemy revenue share: https://support.udemy.com/hc/en-us/articles/229605008-Instructor-revenue-share
- Skillshare earnings: https://help.skillshare.com/hc/en-us/articles/4415798406285-Earn-From-Your-Teaching
- Adobe Stock AI guidelines: https://helpx.adobe.com/stock/contributor/submit-your-content/submit-generative-ai-content/generative-ai-content-guidelines.html
- Adobe Stock royalties: https://helpx.adobe.com/stock/contributor/payments-earnings/royalties-pricing/royalty-rates-assets.html
- itch.io open revenue share: https://itch.io/docs/general/about
- Fab publisher revenue: https://www.fab.com/become-a-publisher

## Software / API marketplaces

- RapidAPI monetisation: https://docs.rapidapi.com/v2.0/docs/monetizing-your-api-on-rapidapicom
- RapidAPI vendor scale: https://get.rapidapi.com/api-provider/
- GitHub Marketplace pricing: https://docs.github.com/en/apps/github-marketplace/selling-your-app-on-github-marketplace/pricing-plans-for-github-marketplace-apps
- AWS Marketplace fees: https://docs.aws.amazon.com/marketplace/latest/userguide/listing-fees.html
- Microsoft Marketplace fees: https://learn.microsoft.com/en-us/partner-center/marketplace-offers/marketplace-commercial-transaction-capabilities-and-considerations
- Apple Small Business Program: https://developer.apple.com/app-store/small-business-program/
- Google Play fees: https://support.google.com/googleplay/android-developer/answer/112622
- ChatGPT Apps SDK / monetisation status: https://help.openai.com/en/articles/12515353-build-with-the-apps-sdk.iso

## Freelance marketplaces

- Freelancer.com fees: https://www.freelancer.com/feesandcharges
- PeoplePerHour fees: https://support.peopleperhour.com/hc/en-us/articles/205218337-Freelancer-commission-fees
- Guru fees: https://www.guru.com/help/freelancer/about-guru-freelancer/fees/job-fee
- 99designs fees: https://support.99designs.com/hc/en-us/articles/360022206031-What-is-a-platform-fee
- Braintrust talent: https://www.usebraintrust.com/for-talent
- Toptal screening: https://www.toptal.com/faq

## Emerging agent economy — watch, not yet treated as mature demand

- Agrenting: https://agrenting.com/
- AgenticTrade: https://agentictrade.io/marketplace
- SwarmBazaar: https://swarmbazaar.com/

---

# Standing DRF rule

Whenever DRF creates a reusable digital asset or develops a repeatable service capability, ask two questions:

> **1. Where can this be listed immediately for revenue?**  
> **2. Can the same underlying IP be repackaged across multiple marketplaces without creating support chaos?**

This master map is the routing layer. Individual marketplace research is the next layer only after a platform proves strategically relevant.
