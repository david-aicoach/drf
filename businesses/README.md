# Businesses

`businesses/` is the canonical DRF opportunity library: **one folder per parent business opportunity**.

## Start here

- **Dashboard V3 joined portfolio:** [`PORTFOLIO-V3.md`](./PORTFOLIO-V3.md)
- **Layer 1 structural portfolio and factor history:** [`OPPORTUNITIES.md`](./OPPORTUNITIES.md)
- **Ranked Business × Niche relationships:** [`NICHES.md`](./NICHES.md)
- **Business × Niche RBS, DRF Proof, Stage, Capital and Return migration:** [`INVESTMENT-READINESS.md`](./INVESTMENT-READINESS.md)
- **V3 no-field-change reconciliation ledger:** [`V3-RECONCILIATIONS.md`](./V3-RECONCILIATIONS.md)
- **Opportunity operating Skill:** [`../skills/drf-opportunity-factory/SKILL.md`](../skills/drf-opportunity-factory/SKILL.md)
- **V3 data contract:** [`../skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md`](../skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md)
- **V3 write-back reference:** [`../skills/drf-opportunity-factory/references/v3-writeback.md`](../skills/drf-opportunity-factory/references/v3-writeback.md)

`PORTFOLIO-V3.md` is the joined founder-comparison register for Dashboard Version 3. It does not replace the detailed dossiers or the complete ranked niche register.

## Critical distinction

- Workflow Layer 1, Layer 2 and Layer 3 describe the process applied to an opportunity.
- Dashboard Version 1, Version 2 and Version 3 describe website evolution.
- Dashboard V3 combines all three workflow layers.

## Parent opportunity rule

Create one parent folder for the service/product/outcome and pain solved.

Do not create a new parent merely because the delivery changes between HighLevel, HubSpot, WhatsApp providers, Grok Bot, ChatGPT, Claude or another system. Vendors and models are normally replaceable implementation components.

Canonical deployment model:

`Outcome × Niche × Customer Channel × System of Record × Agent Layer`

For digital products, marketplaces/storefronts are distribution endpoints rather than parent opportunities.

## Current file pattern

A mature opportunity may contain:

```text
businesses/<opportunity-id>/
├── CURRENT.md                 # optional pointer to the current dossier
├── README.md                  # founder summary/evidence history
├── RESEARCH.md                # detailed research/evidence history
├── V3-BUSINESS-CASE-*.md      # current three-layer dossier where produced
├── financial-model.xlsx       # when Stage requires it
├── investment-memo.md         # when capital detail is required
├── evidence/                  # actual tests/operating evidence only
└── blueprint.md               # honestly labelled by current DRF Proof
```

Create only files required by the current stage. `CURRENT.md`, when present, identifies the governing dossier without deleting useful history.

Reusable operating structures belong in the Opportunity Factory Skill; do not create global templates for these files.

## Source precedence

```text
live evidence
→ CURRENT.md pointer
→ current dossier
→ specialised registers
→ PORTFOLIO-V3.md
→ dashboard
```

If a newer current dossier conflicts with an older summary, reconcile the register. Never let the dashboard become a competing truth source.

## Mandatory V3 close-out

Every **material** business, niche, score, proof, pricing, GTM, delivery, economics or evidence update must finish through the [`DRF Opportunity Factory Skill`](../skills/drf-opportunity-factory/SKILL.md) before its Issue/run is considered complete.

Required order:

```text
current evidence / dossier
→ specialised register(s) whose field families changed
→ review the parent row in PORTFOLIO-V3.md
→ either update PORTFOLIO-V3.md last
   OR record an evidence-backed NO FIELD CHANGE in V3-RECONCILIATIONS.md
→ validation
→ close Issue/run
```

Do not manufacture a score or freshness change merely to touch V3. Do not leave material new evidence stranded only in a business folder, research file or automation run history.

## Current active parent opportunity directory

| Rank | Opportunity ID | Parent opportunity | Opportunity Score | Best current niche | Folder |
|---:|---|---|---:|---|---|
| 1 | `whatsapp-crm-revenue-core` | WhatsApp + CRM Revenue Core | 95 | UAE HVAC/AC service contractors 92 | [`whatsapp-crm-revenue-core/`](./whatsapp-crm-revenue-core/) |
| 2 | `revenue-recovery-reactivation-engine` | Revenue Recovery & Reactivation Engine | 94 | UAE HVAC maintenance contractors 91 | [`revenue-recovery-reactivation-engine/`](./revenue-recovery-reactivation-engine/) |
| 3 | `ai-voice-receptionist-booking-agent` | AI Voice Receptionist & Booking Agent | 94 | Emergency HVAC/AC repair 91 | [`ai-voice-receptionist-booking-agent/`](./ai-voice-receptionist-booking-agent/) |
| 4 | `missed-lead-appointment-conversion-engine` | Missed Lead & Appointment Conversion Engine | 93 | Dubai aesthetic clinics 88 | [`missed-lead-appointment-conversion-engine/`](./missed-lead-appointment-conversion-engine/) |
| 5 | `instant-quote-quote-to-cash` | Instant Quote Generator & Quote-to-Cash System | 91 | Drywall/gypsum/false-ceiling installers 87 | [`instant-quote-quote-to-cash/`](./instant-quote-quote-to-cash/) |
| 6 | `ai-support-sales-assistant` | AI Support & Sales Assistant | 90 | Dubai holiday-home operators 78 | [`ai-support-sales-assistant/`](./ai-support-sales-assistant/) |
| 7 | `talent-bridge-assessment-ai-interview-platform` | Talent Bridge Assessment & AI Interview Platform | 89 | UAE/GCC boutique recruitment agencies/RPOs 87 | [`talent-bridge-assessment-ai-interview-platform/`](./talent-bridge-assessment-ai-interview-platform/) |
| 8 | `agentic-commerce-visibility-conversion-engine` | Agentic Commerce Visibility & Conversion Engine | 89 | UAE/GCC multi-channel retailers/DTC 83 | [`agentic-commerce-visibility-conversion-engine/`](./agentic-commerce-visibility-conversion-engine/) |
| 9 | `vertical-ai-operating-systems-agent-integration-packs` | Vertical AI Operating Systems & Agent Integration Packs | 88 | Pending | [`vertical-ai-operating-systems-agent-integration-packs/`](./vertical-ai-operating-systems-agent-integration-packs/) |
| 10 | `ai-recommendation-visibility-geo-engine` | AI Recommendation Visibility & GEO Engine | 88 | Dubai company-formation/business-setup consultancies 86 | [`ai-recommendation-visibility-geo-engine/`](./ai-recommendation-visibility-geo-engine/) |
| 11 | `recruitment-os-hiring-intelligence-saas` | Recruitment OS / Hiring Intelligence SaaS | 87 | UAE/GCC boutique recruitment agencies/RPOs 81 | [`recruitment-os-hiring-intelligence-saas/`](./recruitment-os-hiring-intelligence-saas/) |
| 12 | `grok-bot-ai-revenue-operations` | Autonomous AI Revenue Operations Business-in-a-Box | 87 | MEP/HVAC tender and RFQ operations 84 (delivery-rail evidence) | [`grok-bot-ai-revenue-operations/`](./grok-bot-ai-revenue-operations/) |
| 13 | `assessment-as-a-service-managed-retainer` | Assessment-as-a-Service Managed Retainer | 85 | Pending | [`assessment-as-a-service-managed-retainer/`](./assessment-as-a-service-managed-retainer/) |
| 14 | `reputation-local-visibility-engine` | Reputation & Local Visibility Engine | 85 | Dubai dental/aesthetic clinics 79 | [`reputation-local-visibility-engine/`](./reputation-local-visibility-engine/) |
| 15 | `white-label-hiring-portal` | White-Label Hiring Portal for Employers/Agencies | 85 | Pending | [`white-label-hiring-portal/`](./white-label-hiring-portal/) |
| 16 | `partner-delivered-recruitment-score-hire` | Partner-Delivered Recruitment / Score Hire Model | 85 | Pending | [`partner-delivered-recruitment-score-hire/`](./partner-delivered-recruitment-score-hire/) |
| 17 | `uae-gcc-talent-intelligence-salary-data` | UAE/GCC Talent Intelligence & Salary Data Subscription | 85 | Pending | [`uae-gcc-talent-intelligence-salary-data/`](./uae-gcc-talent-intelligence-salary-data/) |
| 18 | `niche-api-data-product-factory` | Niche API & Data Product Factory | 84 | Pending | [`niche-api-data-product-factory/`](./niche-api-data-product-factory/) |
| 19 | `local-seo-rank-and-rent` | Local SEO Rank-and-Rent Lead Asset Portfolio | 84 | Pending | [`local-seo-rank-and-rent/`](./local-seo-rank-and-rent/) |
| 20 | `business-blueprints` | Business Blueprints | 82 | HVAC/AC Enquiry-to-Revenue Blueprint 92 | [`business-blueprints/`](./business-blueprints/) |
| 21 | `executive-career-accelerator-job-search-platform` | Executive Career Accelerator / Job Search Platform | 81 | Pending | [`executive-career-accelerator-job-search-platform/`](./executive-career-accelerator-job-search-platform/) |
| 22 | `pre-assessed-talent-pool-subscription` | Pre-Assessed Talent Pool Subscription | 81 | Pending | [`pre-assessed-talent-pool-subscription/`](./pre-assessed-talent-pool-subscription/) |
| 23 | `chatgpt-plugin-app-factory` | ChatGPT Plugin / App Factory | 79 | Pending | [`chatgpt-plugin-app-factory/`](./chatgpt-plugin-app-factory/) |
| 24 | `how-to-find-a-job-in-uae-media-funnel` | HowToFindAJobInUAE Media + Recruitment Funnel | 78 | Pending | [`how-to-find-a-job-in-uae-media-funnel/`](./how-to-find-a-job-in-uae-media-funnel/) |
| 25 | `ai-job-board-screened-talent-marketplace` | AI Job Board + Screened Talent Marketplace | 76 | Pending | [`ai-job-board-screened-talent-marketplace/`](./ai-job-board-screened-talent-marketplace/) |
| 26 | `saffa-ae-community-marketplace` | Saffa.ae Community + Trusted Local Business Marketplace | 76 | Pending | [`saffa-ae-community-marketplace/`](./saffa-ae-community-marketplace/) |
| 27 | `ai-first-marketplace-directory` | AI-First Marketplace Directory | 72 | Pending | [`ai-first-marketplace-directory/`](./ai-first-marketplace-directory/) |

### Retired parent / delivery-rail history

| Opportunity ID | Historical parent | Historical score | Current treatment | Folder |
|---|---|---:|---|---|
| `highlevel-vertical-saas-snapshot` | HighLevel Vertical SaaS Snapshot Business-in-a-Box | 89 | **Retired 5 September 2026.** Preserve HighLevel snapshots, SaaS Mode, rebilling, AI and Marketplace economics as implementation evidence inside outcome-first parents. | [`highlevel-vertical-saas-snapshot/`](./highlevel-vertical-saas-snapshot/) |

## Interpretation

- Opportunity Score remains the Layer 1 business-attractiveness score.
- Niche Score remains a separate target-market score.
- RBS applies after a Business × Niche is commercially designed.
- External Market Proof and DRF Proof remain separate.
- `Pending` means required work has not yet been completed; it does not mean zero or rejected.
- Capital and public claims require the appropriate Stage/DRF Proof and founder approval.
- Retired vendor-defined parents remain as research history and delivery-rail evidence; they are excluded from active portfolio calibration counts.