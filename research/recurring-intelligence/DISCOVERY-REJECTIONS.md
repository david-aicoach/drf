# DRF Discovery Rejection and Hold Register

**Status:** Canonical bounded candidate history  
**Governing stage:** [77.5] #82  
**Configuration:** `DRF-INTELLIGENCE-CONFIG-1.0`

No candidates are recorded at creation. Add one concise row only after a real candidate is screened.

| Candidate ID | Date | Candidate / outcome | Classification | Decision | Opportunity Score | Evidence | Research | EMP | Primary reason | Reconsideration trigger | Source / governing Issue | Last run ID |
|---|---|---|---|---|---:|---:|---:|---|---|---|---|---|

## Decision values

- `REJECT` — structurally weak or fatal gate.
- `HOLD` — one material evidence/timing gap.
- `DUPLICATE` — already represented without material new evidence.
- `DELIVERY_VARIANT` — route to an existing parent rather than create another.
- `NEW_NICHE` — route to the existing parent niche register.

## Rules

1. Rejected/held candidates do not enter `businesses/PORTFOLIO-V3.md`.
2. Do not create a parent business folder by default.
3. State one primary reason and a concrete reconsideration trigger.
4. Preserve the prior decision if reconsidered; create a new linked run/record rather than overwriting history.
5. Use `Pending` rather than zero for uncalculated scores.
6. Do not store credentials, personal/customer data or proprietary source content.
