# Shared SEO + AI Discovery / GEO Evidence Playbook

**Date:** 29 August 2026  
**Governing issue:** #46  
**Scope:** Shared evidence and implementation rules used by all DRF niche dossiers. Each niche dossier must still contain a niche-specific SEO/AI-discovery section.

## Executive rule

There is no verified universal shortcut that guarantees recommendation in ChatGPT, Gemini/Google AI Mode, Perplexity or other answer engines.

The controllable strategy is:

```text
crawlable + indexable
→ clearly defined entity/service/location
→ useful sourceable pages answering real buyer questions
→ original evidence/case studies/data
→ trustworthy third-party mentions/reviews/citations
→ strong standard SEO/local-search fundamentals
→ repeated measurement across search + answer engines
```

## Google generative search — official guidance

Google Search Central states that the same foundational SEO best practices apply to AI Overviews and AI Mode. There are no extra technical requirements or special AI markup. To be eligible as a supporting link, a page must be indexed and eligible to appear in normal Google Search with a snippet.

Google specifically recommends:

- allow crawling in robots.txt/CDN/security layers;
- make important pages discoverable through internal links;
- provide useful people-first content;
- keep important content available as text;
- use high-quality images/video where relevant;
- make structured data match visible page content;
- keep Business Profile / merchant information current;
- do not create special AI text files or assume special schema is required.

Google's 2026 generative-AI optimization guide also reiterates that AI features are rooted in core Search ranking/quality systems and use retrieval from the Search index.

Google launched limited Search Console reporting for generative-AI Search visibility in June 2026, providing another measurement channel where available.

Sources:
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search
- https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- https://developers.google.com/search/docs/appearance/structured-data/search-gallery

## ChatGPT Search — official OpenAI guidance

OpenAI states that any public website can appear in ChatGPT Search. To help content be discovered, surfaced, clearly cited and linked:

- do not block **OAI-SearchBot** for pages intended for ChatGPT Search summaries/snippets;
- ensure CDN/bot protection does not accidentally block OpenAI's published crawler traffic;
- use `noindex` when a page should not appear;
- ChatGPT referral traffic can be tracked because outbound search links include `utm_source=chatgpt.com`;
- placement is not guaranteed and ranking uses multiple relevance/reliability factors.

OpenAI also distinguishes Search crawling from GPTBot training controls, so discovery policy should be configured deliberately rather than treating all OpenAI crawlers as equivalent.

Sources:
- https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- https://help.openai.com/en/articles/9237897-chatgpt-search

## Perplexity — official guidance

Perplexity says `PerplexityBot` follows robots.txt and will not index the full/partial page text when disallowed. It may still retain limited domain/headline/factual information from other sources. Allow the crawler for pages intended to be searchable/citable.

Source:
- https://www.perplexity.ai/help-center/en/articles/10354969-how-does-perplexity-follow-robots-txt

## Fast discovery / IndexNow

IndexNow allows participating search engines to be notified when a URL is added, changed or deleted. Submission to a participating endpoint can be shared with other IndexNow participants. This can accelerate discovery but does not guarantee indexing or ranking.

Sources:
- https://www.indexnow.org/faq
- https://www.indexnow.org/documentation

## Shared technical checklist

1. HTTPS, mobile usable, fast enough, no accidental `noindex`.
2. XML sitemap and logical internal linking.
3. Google Search Console and Bing Webmaster Tools configured.
4. Allow Googlebot/Bingbot and legitimate answer-engine search crawlers on public commercial/research pages.
5. Explicitly allow `OAI-SearchBot` and `PerplexityBot` when discovery in those systems is desired.
6. Do not let Cloudflare/WAF/bot rules return 403 challenges to desired crawlers.
7. Use canonical URLs and avoid dozens of near-duplicate doorway/location pages.
8. Use IndexNow for genuine URL updates where supported.
9. Structured data must describe visible reality; use relevant types such as `Organization`, `LocalBusiness`, `Service`, `Product`, `Article`, `BreadcrumbList`, `JobPosting` or sector-specific supported types where applicable.
10. Keep name/address/phone/service/location facts consistent across first-party site, Google Business Profile and trusted directories.

## Content architecture for citation-worthiness

Create pages that answer prompts an actual buyer asks an AI assistant:

- What is the problem and what does it cost?
- What is the best way to solve it in this exact vertical/location?
- What software/options exist and what do they cost?
- What should a buyer compare before choosing?
- What local regulation/licensing/consent rule matters?
- What results can reasonably be measured?
- What is the implementation process?
- What are the limitations and situations where the product should not be used?

Strong citation candidates are usually more useful than generic marketing pages because they contain:

- named facts;
- current dates;
- explicit methodology;
- source links;
- tables/comparisons;
- original statistics/case studies;
- clear definitions;
- transparent pricing/ranges;
- direct answers with minimal fluff.

## Entity + authority strategy

For each niche, establish iMPLEMENTAi/the relevant offer as a consistent entity connected to the problem:

- one canonical offer page;
- consistent brand/service descriptions;
- author/company expertise pages where appropriate;
- genuine client case studies;
- Google Business Profile and local citations for UAE service delivery;
- relevant chamber/association/vendor marketplace profiles where legitimately available;
- third-party reviews on authentic platforms;
- guest/industry contributions or data citations from credible sites;
- original benchmark reports that others can reference.

Do not manufacture directory listings, reviews or editorial 'best' pages that pretend to be independent.

## Competitive AI-answer research method

For each niche maintain a fixed prompt set such as:

1. `What is the best [outcome/service] for [ICP] in Dubai/UAE?`
2. `How should a [vertical] fix [pain]?`
3. `What software solves [pain] for [vertical]?`
4. `[Competitor A] vs [Competitor B] vs managed service for [vertical]`
5. `How much does [problem/service] cost in Dubai/UAE?`

Record monthly:

- whether an AI answer is shown;
- named recommended vendors/sites;
- cited URLs/domains;
- whether iMPLEMENTAi/offer is cited;
- share of cited sources that are vendor, government, directory, media, Reddit/forum or review sites;
- claims/pages repeatedly used as evidence.

This turns AI discoverability into an observable competitive surface rather than a vague objective.

## Shared anti-patterns

Do not:

- promise guaranteed ChatGPT/Gemini/Perplexity placement;
- mass-produce thin AI-written city pages;
- publish fabricated statistics;
- use fake reviews or fake third-party listicles;
- add irrelevant schema solely for rankings;
- create `llms.txt` or other special files as though Google requires them for AI inclusion—Google explicitly says no special AI machine-readable file is required;
- confuse crawler access with guaranteed citation or recommendation.

## DRF application

Every niche dossier must use this shared methodology but tailor:

- the buyer prompts;
- SERP competitors;
- likely directories/regulators/marketplaces;
- money page and content cluster;
- entity/review strategy;
- local SEO requirements;
- sourceable data/case-study opportunity;
- monthly AI-answer benchmark prompts.