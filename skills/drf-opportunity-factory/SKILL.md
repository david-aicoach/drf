---
name: drf-opportunity-factory
description: Run David's Revenue Factory business-opportunity intake and market intelligence A-Z. Use whenever David says new business opportunity, Revenue Factory opportunity intake, DRF opportunity, assess/research/score this business idea, run market intelligence, find the best niche, build the business case, or refresh a material opportunity. This is the canonical Skill for founder intake, Layer 1 opportunity selection, Layer 2 niche/commercial underwriting, Layer 3 structured business case, and V3 write-back.
---

# DRF Opportunity Factory

## Purpose
Turn a rough business idea into one evidence-backed founder decision and durable DRF record. This Skill owns the complete opportunity workflow; do not create a parallel prompt, template, SOP, or workflow file elsewhere.

## Number-one operating rule
**Skill first.** Read this `SKILL.md` before opportunity work. Load only the bundled references needed for the current stage. If a repeatable lesson changes how opportunity work should run, improve this Skill or its references instead of creating a loose global workflow/template.

## Invocation examples
Treat all of these as direct triggers:
- “Use the Revenue Factory opportunity intake skill.”
- “Here is a new business opportunity.”
- “Run this through DRF A-Z.”
- “Complete market intelligence on this business idea.”
- “Research, score, niche and underwrite this opportunity.”

## Founder intake
For a new founder-supplied opportunity, begin with a short adaptive intake when important context is missing. Do not present a hidden form or require the founder to know repository paths.

Ask only decision-useful questions, preferably in one compact batch; if the founder wants a conversational intake, ask them one at a time. Cover only what is not already known:
1. What is the business idea/outcome in plain sales language?
2. Who do you think pays, and in what geography?
3. What inspired it: operator, product, link, post, existing asset, client pain, or lived experience?
4. What revenue model do you imagine: upfront, recurring, usage, commission, licence, royalty, other?
5. What DRF/Talent Bridge/iMPLEMENTAi assets or constraints matter?
6. Any niche hypothesis, capital/time boundary, or non-negotiable?

Do not block on optional answers. Preserve founder context, label assumptions, research missing facts, and proceed. Escalate only genuine founder decisions, material spend, legal/security commitments, or irreconcilable evidence conflicts.

## Stage 0 — Control and classify
Before substantive research or file mutation:
1. Read root `AGENTS.md` and this Skill.
2. Search `businesses/OPPORTUNITIES.md`, `businesses/NICHES.md`, `businesses/PORTFOLIO-V3.md`, and `businesses/` for duplicates/current truth.
3. Classify input as new parent opportunity, new niche, delivery/vendor variant, commercial-model change, evidence refresh, or duplicate.
4. Resolve/create the governing GitHub Issue with founder context, implementation checklist, verification checklist, and acceptance criteria.
5. Define the business by buyer + pain/outcome + revenue mechanism, not the current AI/CRM/vendor unless that platform itself is what customers buy.

Canonical commercial sentence:
> We sell `<outcome/offer>` to `<payer>` for `<price/basis>` because `<pain/value>`. Revenue arrives as `<upfront / recurring / usage / licence / commission / royalty / other>`.

## Layer 1 — Select the business
Core question: **Do we want this kind of business?**

Research current market evidence before scoring. Use multiple successful comparable operators where practical and deliberately seek counter-evidence/failures.

Required outputs:
- Business Opportunity + pain/outcome
- payer/buyer/user
- revenue streams and likely payment basis
- successful comparable operators and transferability
- counter-evidence/failure modes
- Opportunity Score /100
- MRR /10
- AI Autonomy /100
- Evidence Confidence /100%
- Research Completeness /100%
- External Market Proof EMP0–EMP4 + confidence
- execution velocity/time estimates where decision-useful
- Reject / Hold / Advance / Golden Priority

Default Advance: Opportunity Score ≥75, Evidence ≥60%, Research ≥70%, no fatal gate, and EMP2+ or documented evidence-backed innovation rationale. Golden Priority normally requires Opportunity Score ≥85 plus strong recurring/AI leverage and a plausible positive-contribution acquisition route.

If Layer 1 fails, record why and stop cheaply. Do not add a rejected candidate as a ranked parent.

Load `references/business-opportunity-scoring.md` when detailed factor definitions/weights are needed.

## External Market Proof vs DRF Proof
Never collapse these:
- **EMP0–EMP4** = how strongly materially similar businesses are proven externally.
- **DRF Proof P0–P6** = how far our adaptation has progressed.

Valid state: `EMP3 Market Proven · DRF Proof P1 Desk Underwritten`.

External proof can support scores, offer, pricing, GTM and backtesting. It cannot prove our CAC, delivery quality, unit economics or repeatability.

## Layer 2 — Select the niche and commercial model
If Layer 1 advances, continue automatically.

1. Generate atomic Business × Niche combinations: outcome/product × vertical × sub-niche × geography × ICP × trigger/problem.
2. Score and rank niches; select a recommended beachhead.
3. Reverse-engineer successful operators in the selected Business × Niche.
4. Define market-ready offer, setup/upfront price, recurring price, usage/commission/licence logic, and upsells.
5. Define first-10 and first-100 acquisition plan where defensible.
6. Define GTM funnel/channels, sales motion, and success metrics.
7. Define minimum viable delivery architecture with replaceable technology rails.
8. Calculate RBS and Return Profile.
9. Assign DRF Proof, Stage, Capital and Next Proof.
10. Test only the largest remaining DRF-specific uncertainty; do not spend money re-proving strong external facts.

Load `references/niche-scoring.md`, `references/commercial-underwriting-proof-capital.md`, and `references/outcome-first-architecture.md` as needed.

## Layer 3 — Structure the business case and write V3
Create/update one founder-readable current dossier containing the complete Layer 1 + Layer 2 state, evidence, counter-evidence, economics, risks, source register, readiness and one Next Proof.

Use `references/business-case-output-contract.md` for the detailed output structure.

Mandatory write-back order for material changes:
```text
new evidence/result
→ authoritative opportunity source/dossier
→ specialised register(s) whose fields changed
→ current Layer 3 dossier/CURRENT pointer where applicable
→ review V3 founder fields
→ either update businesses/PORTFOLIO-V3.md LAST
   or record businesses/V3-RECONCILIATIONS.md NO FIELD CHANGE
→ validate
→ only then close Issue / merge PR
```

Load `references/v3-writeback.md` for detailed field/preference rules.

## Copy before invent
For every material opportunity:
1. find multiple successful comparable operators where practical;
2. capture offer, price, recurring model, acquisition, proof and delivery;
3. capture failures, complaints, churn, margin/support pressure and restrictions;
4. identify what transfers to DRF's geography/niche/channel/assets;
5. adapt/improve the proven pattern;
6. test only remaining DRF-specific uncertainty.

One successful operator is a signal, not a base rate.

## Evidence discipline
Separate:
- verified fact;
- credible estimate;
- inference;
- External Market Proof;
- DRF actual.

Never invent traffic, customers, revenue, prices, proof, deployment or tests. `Pending` is not zero.

## Founder boundary
Research, scoring, calculations, reversible repository updates and recommendations can proceed. Founder approval is required before material capital/spend, paid ads, outreach, public claims, legal/commercial commitments, security/auth changes, or material guarantees.

## Final handover
Report:
A. Founder decision summary  
B. Layer 1 assessment  
C. External Market Proof + comparable operators  
D. Ranked niches + beachhead  
E. Offer + pricing + revenue streams  
F. GTM/customer acquisition  
G. Delivery architecture  
H. RBS + Return + DRF Proof + Stage + Capital  
I. Risks/counter-evidence  
J. Canonical files updated  
K. One Next Proof + stop condition  
L. Issue/PR/commit/check status

## Self-improvement rule
When execution reveals a repeatable improvement to opportunity intake, research, scoring, niche selection, underwriting or V3 close-out:
1. record the evidence in the governing Issue;
2. update this Skill or the owning reference in the same/next governed change;
3. do not create a new loose template/workflow/SOP for the same capability.
