# Revenue Blueprint Financial Model

**Status:** Canonical template guide  
**Version:** 1.0  
**Date:** 31 August 2026  
**Governing issue:** #60  
**Companion workbook:** `revenue-blueprint-financial-model.xlsx`

## Purpose

Show, in plain money terms:

- how much cash and founder time the business needs;
- what each investment tier buys;
- how revenue is produced month by month;
- what remains after fees, delivery, customer acquisition and fixed costs;
- when the business breaks even;
- monthly and annual ROI;
- maximum downside and runway;
- which evidence milestone unlocks the next capital tranche.

Do not forecast one annual total and hide the cash path. Year one must be monthly.

---

## 1. Model identity

**Opportunity:** <name>  
**Business model card:** <Digital Product / SaaS / Marketplace / Service / AI Outcome>  
**Revenue Blueprint Score:** <0-100>  
**Proof Level:** <P0-P6>  
**Investment Gate:** <Research / Test / Pilot / Fund / Scale / Blueprint Certified>  
**Currency:** <USD/AED/etc.>  
**Forecast start:** <date>  
**Owner monthly-income target:** <amount>  
**Founder-hour value:** <amount/hour>

---

## 2. Three capital tiers

| Tier | New capital | Cumulative capital | Exact use of funds | Founder hours | Evidence milestone | Stop condition |
|---|---:|---:|---|---:|---|---|
| **Tier 1 — Validate** | **$3,000** | **$3,000** | <offer/test/acquisition/delivery/reserve> | <hours> | P3–P4 | <date/result> |
| **Tier 2 — Launch** | **+$7,000** | **$10,000** | <repeat acquisition/delivery/automation> | <hours> | P5 | <date/result> |
| **Tier 3 — Scale** | **+$20,000** | **$30,000** | <proven channel/capacity/working capital/reliability> | <hours> | P6 | <date/result> |

Capital is released sequentially. The fact that $30,000 is available does not justify spending it before P5.

---

## 3. Revenue streams

Model each revenue stream separately.

| Revenue stream | Type | Price / calculation basis | New-customer trigger | Recurring/retention rule | Evidence class |
|---|---|---:|---|---|---|
| <stream 1> | Upfront sale | | | — | |
| <stream 2> | Subscription/retainer | | | <churn/retention> | |
| <stream 3> | Royalty/commission/usage | | | <activity/retention> | |
| <optional upsell> | Optional | | | | |

Never merge unrelated streams into one ARPU when the drivers differ.

---

## 4. Core assumptions — downside, base and upside

| Assumption | Downside | Base | Upside | Unit | Evidence/source | Sensitivity rank |
|---|---:|---:|---:|---|---|---:|
| Qualified leads in month 1 | | | | leads | | |
| Monthly lead growth | | | | % | | |
| Lead-to-paid conversion | | | | % | | |
| Upfront sale price | | | | currency | | |
| Recurring fee / monthly revenue per active customer | | | | currency | | |
| Recurring attach rate | | | | % | | |
| Monthly churn | | | | % | | |
| Royalty/commission per active customer or transaction | | | | currency/% | | |
| Refund/credit rate | | | | % | | |
| Payment/platform fee | | | | % | | |
| Variable delivery cost per new customer | | | | currency | | |
| Variable monthly cost per active customer | | | | currency | | |
| CAC | | | | currency | | |
| Fixed monthly cost | | | | currency | | |
| Founder hours per new customer | | | | hours | | |
| Founder hours per active customer/month | | | | hours | | |
| Fixed founder hours/month | | | | hours | | |

Highlight the three assumptions that move year-one cash the most.

---

## 5. Monthly forecast rows

Build 12 columns, Month 1 to Month 12, for each scenario.

### Demand and customers

- qualified leads;
- new paid customers;
- active recurring customers;
- churned customers;
- transactions/usage units where relevant.

### Revenue

- upfront sale revenue;
- recurring/subscription/retainer revenue;
- royalty/commission/usage revenue;
- optional upsell revenue;
- **total revenue**.

### Direct and variable costs

- refunds/credits;
- payment/platform fees;
- variable product/fulfilment cost;
- software/AI/provider/telephony cost;
- support/recovery cost;
- affiliate/commission cost;
- **gross profit**;
- **contribution before CAC**;
- acquisition cost;
- **contribution after CAC**.

### Operating cash

- fixed operating costs;
- founder labour value, shown separately;
- **net cash flow**;
- capital injected;
- **cumulative cash position**;
- founder hours;
- cash per founder hour;
- employment-replacement ratio.

---

## 6. Required formulas

```text
New customers
= qualified leads × paid conversion

Active recurring customers
= previous active customers × (1 - churn)
+ new customers × recurring attach rate

Upfront revenue
= new customers × upfront price × (1 - refund rate)

Recurring revenue
= active recurring customers × monthly recurring revenue per customer

Royalty/commission revenue
= qualifying active customers/transactions × payment basis

Gross profit
= total revenue
- refunds
- payment/platform fees
- direct fulfilment/provider costs

Contribution before CAC
= gross profit - variable support/servicing cost

Contribution after CAC
= contribution before CAC - acquisition cost

Net cash flow
= contribution after CAC - fixed cash operating costs

Break-even customers/month
= fixed cash operating costs ÷ contribution before fixed costs per customer

Break-even ROAS
= 1 ÷ contribution margin before advertising

Monthly cash-on-cash ROI
= monthly net cash flow ÷ cumulative capital invested

Year-one ROI
= total year-one net cash flow ÷ cumulative capital invested

Founder hourly return
= monthly net cash flow ÷ founder hours

Employment-replacement ratio
= monthly net cash flow ÷ owner monthly-income target
```

Do not count the same cost in gross margin and contribution twice.

---

## 7. Investor return summary

| Metric | Downside | Base | Upside | Evidence class |
|---|---:|---:|---:|---|
| Capital invested | | | | |
| Year-one revenue | | | | |
| Year-one gross profit | | | | |
| Year-one net cash flow | | | | |
| Gross margin | | | | |
| Contribution margin after CAC | | | | |
| Break-even month | | | | |
| Maximum cash loss | | | | |
| Runway | | | | |
| Monthly ROI at Month 12 | | | | |
| Year-one ROI | | | | |
| Founder hours in Year 1 | | | | |
| Cash per founder hour | | | | |
| Employment-replacement month | | | | |

If the model cannot produce these numbers responsibly, the opportunity is not ready for an investment decision.

---

## 8. Sensitivity and downside

Test the effect of at least:

- conversion 50% below base;
- CAC 50% above base;
- price 20% below base;
- churn/refunds materially above base;
- platform/provider costs above base;
- founder/fulfilment hours double base;
- launch delayed by one to three months;
- a primary channel or platform becoming unavailable.

State:

- the assumption that breaks the business first;
- the cash loss if the test fails;
- the earliest warning metric;
- the action that stops further loss.

---

## 9. Investment decision

```text
CAPITAL REQUEST
<amount and tranche>

USE OF FUNDS
<exact allocation>

PROOF PURCHASED
<what uncertainty/evidence this money buys>

EXPECTED BASE RETURN
<monthly and annual>

MAXIMUM DOWNSIDE
<cash + founder hours>

PAYBACK
<month/range>

GATE
GO · KILL · HOLD · RECYCLE

NEXT CAPITAL UNLOCK
<exact evidence threshold>
```

## Model discipline

- Blue cells/fields are inputs.
- Black cells are formulas.
- Green cells link to another worksheet.
- Yellow cells are assumptions requiring current evidence.
- Zero displays as a dash.
- Negative figures display in red parentheses.
- Every imported input has a source/date.
- Every scenario uses the same formula structure.
- No hidden optimistic assumptions.
