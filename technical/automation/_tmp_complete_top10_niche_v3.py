from pathlib import Path

CONFIG = {
    "research/niches/01-whatsapp-crm-hvac-service-contractors.md": {
        "terms": ["HVAC CRM UAE", "WhatsApp CRM for AC maintenance companies", "HVAC lead management software", "HVAC quotation follow-up software", "HVAC AMC renewal software", "AC maintenance CRM", "field service CRM UAE"],
        "competition": "Generic CRM and field-service vendors such as HighLevel, Zoho, HubSpot and Odoo compete with HVAC/FSM products. The positioning gap is enquiry, quote and AMC revenue control rather than generic CRM features.",
        "money": "/solutions/hvac-revenue-crm-uae/ — WhatsApp Revenue CRM for UAE HVAC Contractors",
        "cluster": "HVAC quote follow-up; AMC renewal system; HVAC WhatsApp CRM; CRM vs field-service software; UAE HVAC response benchmark; recovered-revenue case studies.",
        "prompts": ["best CRM for an HVAC company in UAE", "how do AC maintenance companies manage WhatsApp leads", "how to stop HVAC quotes going cold", "best way to automate AMC renewals in Dubai"],
        "asset": "UAE HVAC Enquiry & Quote Leakage Benchmark using real response-time, quote-ageing, AMC renewal and recovered-gross-profit data."
    },
    "research/niches/02-ai-voice-emergency-hvac-contractors.md": {
        "terms": ["AI receptionist for HVAC", "HVAC answering service UAE", "24/7 AC call answering Dubai", "HVAC AI voice agent", "missed call automation HVAC", "after-hours AC booking service"],
        "competition": "Generic AI-voice platforms, BPO/call-answering providers and field-service/CRM voice products compete directly. The page should sell measurable urgent-job capture, not AI voice novelty.",
        "money": "/solutions/hvac-missed-call-booking-uae/ — 24/7 HVAC Missed-Call & Booking Recovery",
        "cluster": "after-hours HVAC call benchmark; AI voice vs human answering; call-cost/booking ROI; safe call flows; multilingual UAE handling; overflow-only case study.",
        "prompts": ["best AI receptionist for HVAC companies", "how can an AC company answer calls after hours", "AI voice agent for emergency AC bookings UAE", "HVAC answering service vs AI receptionist"],
        "asset": "UAE HVAC Missed Call & Booking Benchmark based on instrumented contractors, with answer rate, qualified-call mix, booked jobs and cost per incremental booking."
    },
    "research/niches/03-revenue-recovery-hvac-maintenance-contractors.md": {
        "terms": ["HVAC quote follow up software", "recover lost HVAC quotes", "HVAC sales follow up", "AMC renewal software UAE", "AC maintenance contract renewal reminders", "stale quotation recovery", "HVAC customer reactivation"],
        "competition": "Most search competition is broader CRM/FSM, sales-follow-up content and HVAC marketing services rather than a precise quote-ageing plus AMC-renewal product, leaving a useful long-tail outcome gap.",
        "money": "/solutions/hvac-revenue-recovery-uae/ — HVAC Quote & AMC Revenue Recovery",
        "cluster": "quote-ageing calculator; AMC renewal checklist; why HVAC quotes go cold; 7/14/30-day follow-up; stale-customer reactivation; CRM/FSM boundaries; recovery case studies.",
        "prompts": ["how do HVAC companies follow up quotes", "best way to automate AC maintenance contract renewals", "how much revenue do HVAC companies lose from stale quotes", "HVAC reactivation system UAE"],
        "asset": "UAE HVAC Quote Ageing & AMC Renewal Benchmark with transparent recoverable-pool definitions and case-study methodology."
    },
    "research/niches/04-whatsapp-crm-specialist-mep-contractors.md": {
        "terms": ["MEP CRM UAE", "contractor CRM Dubai", "MEP quotation management software", "MEP sales pipeline", "contractor WhatsApp CRM", "construction quotation follow up", "MEP tender CRM"],
        "competition": "Odoo, qaflo and other contracting/construction systems plus generic CRM vendors already own broad ERP/CRM intent. qaflo explicitly covers quote-to-ledger for UAE project businesses. The wedge is commercial next-action control before and around ERP.",
        "money": "/solutions/mep-revenue-pipeline-uae/ — MEP RFQ, Quote & Follow-Up Revenue Pipeline",
        "cluster": "CRM vs ERP for MEP; quotation ageing; WhatsApp/email RFQ capture; tender-to-quote pipeline; MEP follow-up benchmark; Odoo/qaflo integration; case studies.",
        "prompts": ["best CRM for MEP contractors UAE", "do MEP contractors need CRM if they use Odoo", "how to track MEP quotations and follow ups", "best WhatsApp pipeline for contractors Dubai"],
        "asset": "UAE MEP Commercial Leakage Benchmark using quote turnaround, stale quotation value, channel fragmentation and next-action compliance."
    },
    "research/niches/05-whatsapp-crm-dubai-car-rental.md": {
        "terms": ["car rental software Dubai", "car rental CRM Dubai", "WhatsApp CRM car rental", "rent a car management software UAE", "car rental booking management system", "car rental lead management"],
        "competition": "UAE/GCC rental operating systems such as Settli, Cardash, PRO-VIA, Fleexa, Charm and Floti make broad car-rental-software intent highly competitive. The defensible search wedge is pre-booking WhatsApp enquiry conversion around the incumbent rental OS.",
        "money": "/solutions/car-rental-lead-conversion-dubai/ — Car Rental WhatsApp Lead Conversion Overlay",
        "cluster": "rental OS vs CRM; response-time benchmark; availability-enquiry leakage; WhatsApp follow-up; UAE rental software comparison; integration case study.",
        "prompts": ["best car rental software in Dubai", "how should Dubai car rental companies manage WhatsApp leads", "CRM vs rental management software", "how to improve car rental enquiry conversion"],
        "asset": "Current UAE car-rental software comparison plus a Dubai response-time and booking benchmark using operator timestamps."
    },
    "research/niches/06-whatsapp-crm-dubai-aesthetic-clinics.md": {
        "terms": ["aesthetic clinic CRM Dubai", "WhatsApp CRM for clinics UAE", "clinic lead management Dubai", "cosmetic clinic CRM", "aesthetic clinic lead follow up", "clinic consultation booking automation"],
        "competition": "Clinic-management/PMS vendors, generic CRM tools and specialised WhatsApp CRM marketers already target this intent; current 2026 Dubai clinic/salon CRM comparison content confirms active SEO competition. Position around paid-lead-to-consultation visibility and conversion.",
        "money": "/solutions/aesthetic-clinic-lead-conversion-dubai/ — Aesthetic Clinic Lead-to-Consultation Revenue System",
        "cluster": "WhatsApp CRM comparison; response benchmark; paid-lead leakage calculator; consultation/no-show recovery; clinic CRM vs PMS; compliant messaging; case studies.",
        "prompts": ["best CRM for aesthetic clinics in Dubai", "WhatsApp CRM for cosmetic clinic UAE", "how to convert aesthetic clinic leads faster", "clinic CRM vs practice management software"],
        "asset": "Dubai Aesthetic Lead Response & Consultation Benchmark with facility/credential-safe methodology and real funnel data."
    },
    "research/niches/07-missed-lead-dubai-car-rental.md": {
        "terms": ["car rental lead follow up", "WhatsApp car rental booking automation", "car rental enquiry response software", "missed lead recovery car rental", "car rental speed to lead", "abandoned car rental quote follow up"],
        "competition": "Rental OS vendors, CRM/WhatsApp tools and agencies solve parts of the workflow. Outcome-specific response-to-booking content is less crowded than generic rental software.",
        "money": "/solutions/car-rental-missed-lead-recovery-dubai/ — Car Rental Missed-Lead & Quote Recovery",
        "cluster": "first-response benchmark; quote follow-up sequences; comparison-shopping behaviour; rental-OS integration; WhatsApp consent; recovered-booking cases.",
        "prompts": ["how quickly should a car rental company reply in Dubai", "how to automate WhatsApp car rental enquiries", "best missed lead system for car rental", "how to recover unbooked rental quotes"],
        "asset": "Dubai Car Rental Response & Booking Benchmark using real timestamp-to-booking distributions."
    },
    "research/niches/08-revenue-recovery-automotive-workshops.md": {
        "terms": ["garage customer reactivation UAE", "auto workshop declined estimate follow up", "car service reminder software UAE", "garage CRM follow up", "automotive workshop revenue recovery", "declined repair recovery"],
        "competition": "UAE-native DMS products GRX, Garij and AutoFixia already cover customers, vehicles, estimates, jobs, reminders, invoicing and WhatsApp. The search wedge is managed recovered gross profit through incumbent data, not feature duplication.",
        "money": "/solutions/garage-revenue-recovery-uae/ — Declined Work & Service Revenue Recovery for UAE Workshops",
        "cluster": "declined-estimate recovery; overdue-service campaigns; DMS vs managed recovery; recovery ROI; GRX/Garij/AutoFixia integration; case study.",
        "prompts": ["how do garages recover declined repair estimates", "best customer reactivation system for UAE workshops", "does garage software already send service reminders", "how to improve workshop repeat revenue"],
        "asset": "UAE Workshop Declined-Estimate Recovery Benchmark with completed gross profit, not message or appointment vanity metrics."
    },
    "research/niches/09-whatsapp-crm-dental-implant-clinics.md": {
        "terms": ["dental CRM Dubai", "WhatsApp CRM for dentists UAE", "dental implant lead management", "dental patient follow up software", "implant consultation CRM", "dental lead conversion Dubai"],
        "competition": "Dental-practice software, generic WhatsApp CRM vendors and dental marketing agencies compete strongly. The B2B page should own implant lead-to-consultation pipeline intent rather than consumer treatment searches.",
        "money": "/solutions/dental-implant-lead-crm-dubai/ — Dental Implant Lead-to-Consultation CRM",
        "cluster": "implant lead funnel; CRM vs dental PMS; WhatsApp consent; no-show rescue; treatment-acceptance follow-up; pipeline benchmark; case study.",
        "prompts": ["best CRM for a dental implant clinic in Dubai", "WhatsApp CRM for dentists UAE", "how to follow up dental implant leads", "dental CRM vs practice management software"],
        "asset": "Dubai Implant Lead-to-Consultation Benchmark with DHA/licensing-aware entity evidence and accepted-case attribution."
    },
    "research/niches/10-whatsapp-crm-automotive-workshops.md": {
        "terms": ["garage management software UAE", "workshop management software Dubai", "auto repair software UAE", "garage CRM Dubai", "workshop WhatsApp software", "digital job cards UAE"],
        "competition": "This is a heavily contested UAE SERP. GRX, Garij and AutoFixia have dedicated local pages, trials and broad operational suites. GRX currently publishes annual UAE plan pricing on its Dubai page. iMPLEMENTAi should rank as an independent selection/implementation/outcome layer, not another generic DMS.",
        "money": "/solutions/uae-workshop-digital-revenue-layer/ — UAE Workshop Software Selection, Migration & Revenue Layer",
        "cluster": "UAE garage-software comparison; Excel/WhatsApp migration; DMS selection; customer-recovery integration; AI voice integration; implementation checklist.",
        "prompts": ["best garage management software UAE 2026", "Garij vs GRX vs AutoFixia", "best workshop CRM Dubai", "how to digitise a UAE auto workshop"],
        "asset": "Dated UAE Garage Software Comparison plus migration/adoption benchmark and outcome-module compatibility matrix."
    },
}

COMMON = """

### AI-discovery execution rules

Use the shared DRF playbook rather than claiming a special AI-ranking hack: keep important pages indexable, allow legitimate search crawlers and `OAI-SearchBot` where ChatGPT Search discovery is desired, maintain consistent organisation/service/location entity facts, use accurate structured data only for visible facts, and build third-party authority through genuine reviews, directories, partners and client evidence. Publish dated methodology, comparisons and original local benchmark data that an answer engine can quote. Monitor the prompt set monthly across ChatGPT, Gemini and Perplexity and record cited domains/share-of-answer.

Reference: `research/niches/_shared/seo-ai-discovery-playbook-2026-08-29.md`.
"""

for path, cfg in CONFIG.items():
    p = Path(path)
    text = p.read_text()
    if "SEO + AI discovery v3 addendum" in text:
        continue
    text = text.replace("**Research version:** 2.0 — comprehensive dossier", "**Research version:** 3.0 — comprehensive dossier")
    text = text.replace("**Governing issue:** #44", "**Governing issue:** #46")
    text = text.replace("research/niches/_research-standard-v2.md", "research/niches/_research-standard-v3.md")
    terms = "\n".join(f"- {x};" for x in cfg["terms"])
    prompts = "\n".join(f"- \"{x}\";" for x in cfg["prompts"])
    add = f"""

## SEO + AI discovery v3 addendum

### SEO opportunity and competition

High-intent B2B themes:

{terms}

**Competitive read:** {cfg['competition']}

**Recommended money page:** `{cfg['money']}`.

**Supporting content cluster:** {cfg['cluster']}

Do not invent search-volume or CPC numbers. Treat current SERPs as competitive surfaces; validate demand separately through Search Console/keyword tools and live enquiries.

### AI discovery / GEO

Priority buyer prompts to monitor:

{prompts}

**Best authority asset to build:** {cfg['asset']}
{COMMON}
"""
    p.write_text(text.rstrip() + add + "\n")
    print("updated", path)
