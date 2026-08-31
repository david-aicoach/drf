from pathlib import Path
import re

ROOT = Path('.')


def read(path):
    return Path(path).read_text()


def write(path, text):
    p = Path(path)
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(text)


def replace_required(path, old, new):
    s = read(path)
    if old not in s:
        raise SystemExit(f"Expected text not found in {path}: {old[:100]}")
    write(path, s.replace(old, new))


# -----------------------------------------------------------------------------
# 1. Replace the active Whop-named worked example with a Business Blueprints one
# -----------------------------------------------------------------------------
worked = """# Worked Example — Business Blueprints

**Status:** Current worked example for RBF-7  
**Date:** 31 August 2026  
**Issues:** #60, #67, #72  
**Purpose:** Demonstrate how DRF underwrites one platform-neutral Business Blueprints opportunity while keeping product format and distribution channel downstream.

Canonical live opportunity:

- `businesses/business-blueprints/README.md`
- `businesses/business-blueprints/RESEARCH.md`
- `businesses/business-blueprints/RBF-ASSESSMENT.md`
- `businesses/business-blueprints/PRODUCT-TYPES.md`
- `businesses/business-blueprints/DISTRIBUTION-CHANNELS.md`

---

# 1. Founder investment summary

> **Revenue Blueprint Score: 82/100 · Proof: P2 Backtested · Gate: FORWARD TEST · Capital unlocked: up to $3,000 · Investor-ready: No**

## The business

Create or prove a useful revenue-producing operating system, package the reusable IP as a **Business Blueprint**, then distribute the compatible SKU through several worthwhile channels.

```text
Outcome × Niche
→ prove the business logic
→ package reusable operating IP
→ choose product format(s)
→ choose compatible channels
→ sell / deploy
→ measure contribution + activation
→ improve / syndicate / retire
```

**The business is Business Blueprints.**

Whop, Gumroad, Contra, Notion Marketplace, Lemon Squeezy, Payhip, Shopify, Framer and Webflow are possible distribution or checkout channels. None of them defines the parent business.

## Current decision

**GO to a bounded forward test. Do not fund scale.**

Why:

- digital replication and multi-channel distribution are structurally attractive;
- DRF already has high-scoring underlying Outcome × Niche candidates;
- channel concentration can be reduced by syndicating compatible SKUs;
- DRF still lacks live Blueprint buyer conversion, activation, support and retention proof.

---

# 2. What can become a Blueprint SKU

Product format is downstream of the business.

| Product type | Example |
|---|---|
| Complete operating-business Blueprint | SOPs + pricing + scripts + workflows + implementation instructions |
| Website + revenue launch kit | Reusable site/landing assets + lead capture + CRM/quote/booking flow |
| Notion/database operating system | CRM/project/recruitment databases + dashboards + instructions |
| Workflow / automation pack | Automations + recipes + configuration + SOPs |
| Prompt / agent / Skill pack | Prompts + Skills + agent operating instructions |
| Software / licence / API component | Reusable software or machine-consumable capability |
| Playbook / guide / checklist bundle | Documented operating knowledge + deployment assets |

A website template is therefore **not another DRF parent opportunity**. It is one possible component or SKU format inside Business Blueprints when it carries useful, reusable commercial IP.

---

# 3. Money model

| # | Revenue stream | Who pays | Calculation basis | Type | Platform dependence |
|---:|---|---|---|---|---|
| **1** | **Blueprint sale** | Buyer/operator | Our chosen price for the packaged Blueprint/IP | Upfront | Low by design |
| **2** | **Bundle / licence / update / subscription** | Buyer/operator | Product-specific recurring or higher-value pricing where justified | Upfront or recurring | Medium; choose suitable checkout |
| **3** | **Channel-specific upside** | Marketplace/platform | Royalty, referral, affiliate or partner economics where separately available | Usually recurring/commission | Channel-specific |
| **4** | **Implementation / customisation** | Buyer/operator | iMPLEMENTAi fee for deployment or adaptation | Upfront / managed MRR | Platform-independent service upsell |
| **5** | **Underlying service/software expansion** | Buyer/operator or end customer | Price of attached proven revenue module/service | Upfront / MRR / usage | Depends on underlying business |

## Channel example — Whop

Whop is valuable because it may add:

- marketplace discovery;
- Blueprint-specific creator economics where eligible;
- Whop Partner/referral economics where separately eligible;
- agent-operable commerce infrastructure.

Those are **Whop-channel economics**, not the definition of Business Blueprints.

Do not assume platform-specific revenue automatically stacks. Verify current terms and attribution before modelling it.

---

# 4. Current underlying Blueprint candidates

The productisation layer should follow business proof rather than invent generic digital products first.

| Underlying Outcome × Niche | Niche score | Why it is a candidate |
|---|---:|---|
| Enquiry-to-Revenue Control × UAE HVAC/AC service contractors | **92/100** | Strong pain, measurable revenue flow and reusable operating logic |
| Fast Quote-to-Cash × UAE drywall/gypsum/false-ceiling installers | **87/100** | Strong speed/quote pain and deterministic reusable workflow potential |

A candidate becomes a Blueprint only after its reusable operating IP is clear enough to package without pretending unproven outcomes are proven.

---

# 5. Distribution model

## Wrong model

```text
Build a Whop business
→ publish only on Whop
→ depend on one platform for demand and economics
```

## Correct model

```text
Build one canonical Blueprint SKU
→ map buyer intent + product format
→ publish to compatible discovery marketplace(s)
→ add independent/hybrid storefront where useful
→ add specialist marketplace only when format fits
→ track contribution separately by channel
```

Examples:

- complete business system → Whop + Gumroad/Contra + owned checkout where fit;
- website/launch-kit SKU → Framer/Webflow + general digital-product channels;
- Notion OS → Notion Marketplace + general storefronts;
- software/licence → Lemon Squeezy/Shopify + relevant marketplace;
- API → RapidAPI / enterprise marketplaces where mature enough.

Multi-platform does **not** mean blind duplication. Every listing must justify its maintenance burden and comply with channel rules.

---

# 6. Revenue Blueprint Score

Use the current parent RBF rather than creating a score for every file format or marketplace.

| Factor | Weight | Score /10 | Weighted points |
|---|---:|---:|---:|
| Demand, market and timing | 15 | 8 | 12.0 |
| Pain, willingness to pay and pricing power | 10 | 8 | 8.0 |
| Revenue quality and retention | 10 | 8 | 8.0 |
| Unit economics and margin | 15 | 9 | 13.5 |
| Customer acquisition and paid growth | 10 | 7 | 7.0 |
| Delivery repeatability and customer outcome | 10 | 8 | 8.0 |
| Scalability, leverage and founder independence | 10 | 10 | 10.0 |
| Capital efficiency, payback and ROI | 10 | 9 | 9.0 |
| Durability, moat and concentration | 5 | 6 | 3.0 |
| Operational, legal and platform risk | 5 | 7 | 3.5 |
| **RBS** | **100** | | **82/100** |

The score belongs to **Business Blueprints** as the productisation/distribution business. The underlying Outcome × Niche and each major distribution channel keep separate evidence and economics.

---

# 7. Proof level

## Current level: P2 — Backtested

### What is supported

- large digital-product and service marketplaces already exist;
- DRF can package digital IP at low marginal replication cost;
- multiple channels support paid digital products, templates, software or business systems;
- Whop provides a live Blueprint surface and separate channel-specific upside;
- specialist marketplaces such as Notion, Framer and Webflow validate product-format-specific demand;
- DRF has underlying business candidates with strong niche evidence.

### What is not yet proven for DRF

- paid Blueprint buyer conversion at target price;
- acquisition cost by channel;
- buyer activation/use rate;
- refund/support burden;
- cross-channel incremental demand versus duplicated buyers;
- retention/update/subscription demand;
- repeatable contribution after all fees and support;
- downstream business outcome attributable to a Blueprint.

---

# 8. Tier 1 — bounded forward test

**Maximum test capital:** $3,000  
**Founder-time cap:** 80 hours  
**Timebox:** 30 days after the first sellable SKU is live

## Test design

1. Select one proven or strongly underwritten DRF Outcome × Niche.
2. Package the smallest complete Business Blueprint.
3. Choose the correct product format; do not add a website/template merely because it is easy to generate.
4. Publish through at least **two compatible but meaningfully different endpoints** where terms allow — preferably one discovery-led marketplace and one independent/hybrid storefront.
5. Use one canonical product source so channel copies do not drift.
6. Track traffic, qualified intent, conversion, fees, refunds, CAC, activation, support minutes and contribution by channel.
7. Verify any channel-specific royalty/referral economics separately.
8. Record buyer objections and activation failures before expanding the catalogue.

## Pass threshold

Move to **P3 Forward Tested** when the test produces:

- genuine paid demand at the target price or a deliberately approved validation price;
- measurable acquisition source and conversion;
- at least one buyer who actually deploys/uses the Blueprint;
- recorded delivery/support cost;
- no fatal rights, terms or platform dependency problem.

Move to **P4 Revenue Proven** only after payment, delivery, activation and actual contribution are reconciled.

---

# 9. Stop / recycle conditions

Pause or recycle the SKU if:

- demand only exists because of one platform subsidy or temporary programme incentive;
- buyers want bespoke consulting rather than the repeatable product;
- support destroys digital-product margins;
- cross-channel listings produce maintenance but no incremental demand;
- the underlying business system lacks genuine proof or reusable IP;
- the product format becomes the idea instead of the customer outcome;
- terms, rights or attribution make the intended distribution model unsafe or uneconomic.

---

# 10. Founder lesson

The Revenue Factory should not create a new “business opportunity” every time the same IP is expressed as a website, Notion template, workflow pack, Skill, software component or marketplace listing.

The stable commercial hierarchy is:

> **Outcome × Niche → Business Blueprint → Product Format → Distribution Channels → Revenue Streams**

That keeps the portfolio small enough to reason about while allowing the same proven IP to be monetised widely.
"""
write('knowledge/templates/business-opportunity-worked-example-business-blueprints.md', worked)
old_worked = Path('knowledge/templates/business-opportunity-worked-example-whop-blueprints.md')
if not old_worked.exists():
    raise SystemExit('Expected old Whop worked example is missing')
old_worked.unlink()

# Update templates index.
p = Path('knowledge/templates/README.md')
s = p.read_text()
s = s.replace(
    '[`business-opportunity-worked-example-whop-blueprints.md`](./business-opportunity-worked-example-whop-blueprints.md) — Whop example showing why a promising opportunity can remain P1, test-only and not investor-ready.',
    '[`business-opportunity-worked-example-business-blueprints.md`](./business-opportunity-worked-example-business-blueprints.md) — platform-neutral Business Blueprints example showing Outcome × Niche → product format → channel portfolio, with proof and capital gates kept separate.'
)
if 'business-opportunity-worked-example-whop-blueprints' in s:
    raise SystemExit('Old worked-example link remains in templates README')
p.write_text(s)

# -----------------------------------------------------------------------------
# 2. Current lesson: make Business Blueprints the example; Whop is only a channel
# -----------------------------------------------------------------------------
p = Path('knowledge/lessons/revenue-documentation-must-speak-sales-language.md')
s = p.read_text()
s = s.replace('**Origin:** Issue #50 / Whop Business Blueprints clarification', '**Origin:** Issue #50 / Blueprint revenue clarification; taxonomy aligned by Issues #67 and #72')
pattern = r'## Example — Whop Business Blueprints\n.*?\n## Evidence discipline still applies'
replacement = '''## Example — Business Blueprints

The confusing version starts with a marketplace programme or a file format. The founder version starts with the actual business and then separates optional revenue layers:

```text
1. BUSINESS BLUEPRINT SALES
Upfront cash from selling packaged, reusable operating IP.

2. BUNDLE / LICENCE / UPDATE / SUBSCRIPTION REVENUE
Additional or recurring buyer revenue only where the product genuinely supports it.

3. CHANNEL-SPECIFIC UPSIDE
Royalty, referral, affiliate or partner income where a selected channel offers it.
Whop Blueprint/Partner economics are one example.

4. OPTIONAL IMPLEMENTATION
iMPLEMENTAi setup, customisation or managed service when the buyer wants help deploying the Blueprint.
```

The platform or product format does not become the parent opportunity. Website/launch-kit, Notion, workflow, Skill and software variants remain Business Blueprint product types.

## Evidence discipline still applies'''
s2, count = re.subn(pattern, replacement, s, count=1, flags=re.S)
if count != 1:
    raise SystemExit(f'Could not replace sales-language worked example: {count}')
p.write_text(s2)

# -----------------------------------------------------------------------------
# 3. Canonical marketplace map: route the asset, not the parent business name
# -----------------------------------------------------------------------------
p = Path('research/ai-first-digital-marketplaces-and-service-platforms.md')
s = p.read_text()
s = s.replace(
    '| Proven business configuration | Whop Business Blueprints |',
    '| Proven business configuration | Business Blueprints → Whop + Gumroad/Contra + owned/specialist channels by product fit |'
)
p.write_text(s)

# -----------------------------------------------------------------------------
# 4. Old portfolio validation: preserve evidence, remove claim of current truth
# -----------------------------------------------------------------------------
p = Path('research/business-opportunity-validation-2026-08-29.md')
s = p.read_text()
s = s.replace('**Status:** Current portfolio validation', '**Status:** Historical portfolio-validation snapshot — **superseded for current taxonomy and scores**')
anchor = '**Portfolio index:** `businesses/OPPORTUNITIES.md`\n'
notice = '''**Portfolio index:** `businesses/OPPORTUNITIES.md`

> **Current mapping — 31 August 2026 / Issues #67 and #72:** This report predates the current 27-parent portfolio and the platform-neutral **Business Blueprints** model. Its Whop analysis is retained as historical **channel evidence**, not as a Whop-named parent opportunity. Current parent truth is `businesses/business-blueprints/`; current Whop-specific evidence is under `businesses/business-blueprints/channels/whop/`. Do not use the old 83/100 score or the statement that the repository contains only two first-class opportunities as current portfolio truth.
'''
if anchor not in s:
    raise SystemExit('Validation portfolio-index anchor missing')
s = s.replace(anchor, notice, 1)
s = s.replace('The repository currently contains two first-class opportunities:', 'At the time of this 29 August validation snapshot, the report evaluated two first-class hypotheses:')
s = s.replace('Whop Business Blueprints', 'Business Blueprints — Whop-channel validation (historical)')
p.write_text(s)

# -----------------------------------------------------------------------------
# 5. Old dashboard audit: clearly superseded, point to current parent paths
# -----------------------------------------------------------------------------
p = Path('research/public-dashboard-rbf-alignment-audit-2026-08-31.md')
s = p.read_text()
s = s.replace(
    '# DRF Public Dashboard vs Revenue Blueprint Factory — Alignment Audit\n\n**Date:** 31 August 2026',
    '# DRF Public Dashboard vs Revenue Blueprint Factory — Alignment Audit\n\n**Status:** Historical audit — **superseded by later RBF V2 integration and Business Blueprints taxonomy changes**  \n**Date:** 31 August 2026'
)
anchor = '**Decision:** inspect and preserve current website; do not integrate RBF in this issue.\n'
notice = '''**Decision at Issue #62:** inspect and preserve the then-current website; RBF integration was deliberately deferred in that issue.

> **Current mapping:** Subsequent work integrated RBF V2 and generalised the digital-product parent to **Business Blueprints**. Whop is a distribution channel, not the parent business. Current sources are `businesses/business-blueprints/`, `businesses/INVESTMENT-READINESS.md`, and the live `index.html`. Read the body below as a historical design audit, not the current dashboard state.
'''
if anchor not in s:
    raise SystemExit('Dashboard audit decision anchor missing')
s = s.replace(anchor, notice, 1)
s = s.replace('businesses/whop-business-blueprints/RBF-ASSESSMENT.md', 'businesses/business-blueprints/RBF-ASSESSMENT.md')
s = s.replace('Whop Business Blueprints', 'Business Blueprints (historical Whop-focused example)')
s = s.replace('WHOP BUSINESS BLUEPRINTS', 'BUSINESS BLUEPRINTS — HISTORICAL WHOP-FOCUSED EXAMPLE')
p.write_text(s)

# -----------------------------------------------------------------------------
# 6. Historical ranking files: remove retired duplicate row and map Whop to parent
# -----------------------------------------------------------------------------
exec_path = Path('research/opportunity-execution-velocity-and-staircase-2026-08-29.md')
s = exec_path.read_text()
s = s.replace('**Latest targeted update:** 30 August 2026 — Whop Business Blueprints 79→82', '**Latest targeted update:** 31 August 2026 — Issue #72 Business Blueprints taxonomy consolidation')
s = s.replace('Whop Business Blueprints', 'Business Blueprints')
s = s.replace('## Whop distribution lane', '## Business Blueprints productisation + distribution lane')
s = s.replace('businesses/whop-business-blueprints/research/', 'businesses/business-blueprints/channels/whop/research/')
# Remove the retired duplicate website-format row from both ranking tables.
s = '\n'.join(line for line in s.splitlines() if 'website/launch-kit product type (historical working thesis)' not in line) + '\n'
# First priority table historically had the retired row at rank 19. Close the numeric gap.
for n in range(28, 19, -1):
    s = s.replace(f'| **{n}** |', f'| **{n-1}** |')
# The document is still historical but no longer carries the duplicate as a ranked parent.
notice_old = '> **Current taxonomy notice — 31 August 2026 / Issue #72:** Website/template/launch-kit assets are **not a standalone DRF parent opportunity**. They are a product type inside **Business Blueprints**. Any scores or rankings below that treat the website/launch-kit thesis separately are preserved only as historical research and must not be read as a current portfolio row.'
notice_new = '> **Current taxonomy notice — 31 August 2026 / Issue #72:** Current DRF has **27 parent opportunities**. Website/template/launch-kit assets are a **Business Blueprints product type**, not a ranked parent. Whop is a **channel**, not the parent. This file preserves the 29–30 August execution study while mapping its live terminology to the current taxonomy.'
s = s.replace(notice_old, notice_new)
exec_path.write_text(s)

# Portfolio rescore: same parent consolidation.
p = Path('research/opportunity-portfolio-rescore-after-niche-v3-2026-08-29.md')
s = p.read_text()
s = s.replace('Whop Business Blueprints', 'Business Blueprints')
s = '\n'.join(line for line in s.splitlines() if 'website/launch-kit product type (historical working thesis)' not in line) + '\n'
notice_old = '> **Current taxonomy notice — 31 August 2026 / Issue #72:** Website/template/launch-kit assets are **not a standalone DRF parent opportunity**. They are a product type inside **Business Blueprints**. Any scores or rankings below that treat the website/launch-kit thesis separately are preserved only as historical research and must not be read as a current portfolio row.'
notice_new = '> **Current taxonomy notice — 31 August 2026 / Issue #72:** Current DRF has **27 parent opportunities**. Website/template/launch-kit assets are consolidated under **Business Blueprints** and are not separately ranked. Whop is a channel. The scoring below remains a historical recalculation snapshot where otherwise unchanged.'
s = s.replace(notice_old, notice_new)
p.write_text(s)

# Five-golden research: keep the useful product-format research but make its status explicit.
p = Path('research/five-golden-business-opportunities-2026-08-29.md')
s = p.read_text()
s = s.replace(
    '# 5. Business Blueprints — website/launch-kit product type (historical working thesis)',
    '# 5. Business Blueprints product-type research — Website & Revenue Launch Kits'
)
s = s.replace(
    '## 5. Business Blueprints — website/launch-kit product type (historical working thesis)',
    '## 5. Business Blueprints product-type research — Website & Revenue Launch Kits'
)
# Ensure the current note is unambiguous if this historical file is opened directly.
s = s.replace(
    '> **Current taxonomy notice — 31 August 2026 / Issue #72:** Website/template/launch-kit assets are **not a standalone DRF parent opportunity**. They are a product type inside **Business Blueprints**. Any scores or rankings below that treat the website/launch-kit thesis separately are preserved only as historical research and must not be read as a current portfolio row.',
    '> **Current taxonomy notice — 31 August 2026 / Issue #72:** Of the original five working theses in this 29 August document, the website/template/launch-kit thesis is now **product-type research inside Business Blueprints**, not a fifth standalone parent opportunity. The original evidence is preserved below because it still informs Framer/Webflow and launch-kit SKU decisions.'
)
p.write_text(s)

# -----------------------------------------------------------------------------
# 7. General stale-path and terminology cleanup outside the deliberate Whop archive
# -----------------------------------------------------------------------------
for root_name in ('knowledge', 'research'):
    root = Path(root_name)
    for p in root.rglob('*.md'):
        s = p.read_text()
        s = s.replace('businesses/whop-business-blueprints/README.md', 'businesses/business-blueprints/README.md')
        s = s.replace('businesses/whop-business-blueprints/RESEARCH.md', 'businesses/business-blueprints/RESEARCH.md')
        s = s.replace('businesses/whop-business-blueprints/RBF-ASSESSMENT.md', 'businesses/business-blueprints/RBF-ASSESSMENT.md')
        s = s.replace('businesses/whop-business-blueprints/research/', 'businesses/business-blueprints/channels/whop/research/')
        s = s.replace('AI Website Template & Launch Kit Factory', 'Business Blueprints — website/launch-kit product type')
        s = s.replace('AI Website Template Factory', 'Business Blueprints website/launch-kit product type')
        p.write_text(s)

# -----------------------------------------------------------------------------
# 8. Assertions: active/current surfaces can no longer teach the wrong hierarchy
# -----------------------------------------------------------------------------
assert Path('knowledge/templates/business-opportunity-worked-example-business-blueprints.md').exists()
assert not Path('knowledge/templates/business-opportunity-worked-example-whop-blueprints.md').exists()

for p in [
    Path('knowledge/templates/README.md'),
    Path('knowledge/lessons/revenue-documentation-must-speak-sales-language.md'),
    Path('research/ai-first-digital-marketplaces-and-service-platforms.md'),
    Path('research/business-opportunity-validation-2026-08-29.md'),
    Path('research/public-dashboard-rbf-alignment-audit-2026-08-31.md'),
    Path('research/opportunity-execution-velocity-and-staircase-2026-08-29.md'),
    Path('research/opportunity-portfolio-rescore-after-niche-v3-2026-08-29.md'),
]:
    text = p.read_text()
    if 'businesses/whop-business-blueprints/' in text:
        raise SystemExit(f'Stale retired Whop-parent path remains in {p}')
    if 'AI Website Template & Launch Kit Factory' in text:
        raise SystemExit(f'Retired website parent name remains in {p}')

if 'Whop Business Blueprints' in read('knowledge/templates/business-opportunity-worked-example-business-blueprints.md'):
    raise SystemExit('New worked example still defines Whop as parent')
if 'Whop Business Blueprints' in read('knowledge/templates/README.md'):
    raise SystemExit('Template index still teaches Whop parent')

print('Issue #72 holistic second pass completed')
