# Week 9 Persona Test

## Test status

- This is an explicitly synthetic persona walkthrough, not user research. Luis is fictional, and no interview or external persona supplied these observations.
- Browser automation was not available. Screenshots were not available.
- Method: trace the actual landing, create-task, talent submission, review, validation and proof states in `app/page.tsx`; inspect schemas and proof/evaluation logic in `lib/domain.ts` and `lib/proof.ts`; compare them with `docs/PACKET.md` and existing UI tests. After the copy fix, re-run the validated-proof UI test and inspect the resulting state branch in source.
- No fabricated clicks, screenshots, visual observations, or quotations are included. “Interpretation” and “hesitation” below are reasoned predictions from Luis's supplied profile and questions, not observed reactions.

## Persona

Luis Hernández — fictional / synthetic; age 42; lives in Estado de México; owner / operations manager of a 12-person distribution SME with no HR team. Comfortable with WhatsApp, Excel, email and basic web apps; prefers referrals and distrusts complicated recruiting platforms. He has useful small backlog tasks but does not want a full recruiting process for each one. He needs exact payment, output, time commitment, evidence traceability and a clear boundary between AI assistance and his decision. He is wary of cheap labor replacing a real job.

## Walkthrough

### 1. Landing / explanation

- **Expectation:** Decide quickly whether this is a lightweight way to get a real backlog item done and what it costs.
- **Interpretation:** The product proposes short, paid, bounded work with employer validation. A demo task displays MXN, hours and a deadline; demo/synthetic labels and “no real payments” caveat signal this instance is not a real transaction.
- **Hesitation / ambiguous wording:** “Prueba verificable” and “trabajo real” sound stronger than a local simulated demo can deliver. It is not yet explicit that “verificable” means an employer marked the submitted evidence, not independent verification. No estimate of Luis's own review time appears.
- **Expects next:** A simple PyME route and a way to define one deliverable, budget and time cap.
- **MONEY proposition:** Partly clear: paid work and visible MXN are prominent; who actually transfers money and what the demo does not do require reading the caveat.
- **Human / AI boundary:** Clear at a high level: people decide and no global person score is created.
- **Severity:** Medium.

### 2. PyME path

- **Expectation:** A short, direct setup rather than a recruiting funnel or account creation.
- **Interpretation:** “Soy PyME” leads to a single task form; no account is required.
- **Hesitation / ambiguous wording:** The button does not preview that the task and worker are simulated or that this is only a local demo until the form screen. “Publica” may imply an actual public listing.
- **Expects next:** Fields for deliverable, hours, budget and deadline, with clear guardrails.
- **MONEY proposition:** Not fully clear at this transition; no cost or fee to Luis is explained, and the label “publica” could imply a real service.
- **Human / AI boundary:** Not prominent on this step, but no automated decision is implied.
- **Severity:** Medium.

### 3. Paid micro-task creation

- **Expectation:** Enter only enough information to scope a useful small distribution task and cap spending.
- **Interpretation:** Required title, description/deliverable, hour min/max, MXN payment, due date, skills and exactly three criteria. Payment must be at least MXN 100; hours are bounded to 1–80. The screen says this demo does not process payments.
- **Hesitation / ambiguous wording:** Default hours and amount are prefilled (10–20 hours and MXN 2,500), which can look like recommended commercial terms. No service fee, payment timing, or employer review-time estimate is given. “Publicar tarea pagada” still sounds operational even though only browser state changes.
- **Expects next:** A saved task card showing scope, total payment and the three review criteria before any work starts.
- **MONEY proposition:** The worker's agreed amount is clear; Luis's total outlay and payment mechanics are not applicable/implemented in the demo and could be mistaken as defined.
- **Human / AI boundary:** The form states criteria are reviewed separately and do not create a person rating; human responsibility is reasonably clear.
- **Severity:** Medium.

### 4. Scope / hours / payment / rubric

- **Expectation:** Confirm exactly what output the worker returns, maximum hours, agreed pay and how Luis decides whether it is useful.
- **Interpretation:** The created task appears in the talent state with description, hours, MXN total, deadline, skills and three published criteria. The work is explicitly labeled paid and demo.
- **Hesitation / ambiguous wording:** The app does not define whether payment is fixed even if actual hours differ, how Luis pays, or how to resolve work outside the scope. Three generic rubric labels can be less concrete than the task deliverable.
- **Expects next:** Submission that can be compared to the promised deliverable and criteria.
- **MONEY proposition:** Strong for amount and hour range; weak for payment logistics and Luis's own time.
- **Human / AI boundary:** The three criteria preview an evidence review, but AI's later role is not yet explained on this card.
- **Severity:** Medium.

### 5. Synthetic worker evidence

- **Expectation:** Receive the agreed work output, not just a recruiting profile or another test request.
- **Interpretation:** The demo presents Mariana as a simulated worker and asks for a written summary and one or more evidence lines; it explicitly says not to enter real personal data. Luis will see the summary and evidence lines in review.
- **Hesitation / ambiguous wording:** There are no actual file attachments or captured deliverables in this slice. The form accepts text or example links, so a claim can be typed but its origin or correspondence to the task is not independently established. Luis's question “how do I know it corresponds?” remains open.
- **Expects next:** See the original submission beside each criterion and make his own decision.
- **MONEY proposition:** The task card keeps payment visible, but the demo does not deliver real work or payment.
- **Human / AI boundary:** Worker AI-use disclosure is explicit; this is separate from the evaluator's AI explanation and may take a moment to distinguish.
- **Severity:** High for evidence traceability; medium for the AI disclosure distinction.

### 6. Rubric evaluation

- **Expectation:** Get a concise aid that organizes evidence without making a hiring decision.
- **Interpretation:** Three criterion-level statuses appear with explanations; the original summary and evidence lines remain visible. The deterministic evaluator searches for words from rubric labels, and its explanation calls the result simulated.
- **Hesitation / ambiguous wording:** “Con evidencia” may imply evidence was substantively checked, although the fallback uses keyword matching. Luis may over-trust a status. “Análisis con IA” versus “Evaluación simulada” identifies mode, but does not by itself explain reliability limits.
- **Expects next:** Inspect the original, then explicitly validate or defer.
- **MONEY proposition:** Shows how the task output maps to criteria, but does not quantify value or review effort.
- **Human / AI boundary:** Clear in the surrounding copy: AI explains and cannot validate; still, status wording risks implying stronger verification than occurred.
- **Severity:** High.

### 7. AI / simulated-evaluation disclosure

- **Expectation:** Know whether an algorithm is evaluating the worker and whether it can decide who gets hired.
- **Interpretation:** Results say “Evaluación simulada” when no live AI is used; the review header says the final decision is human and the AI cannot validate. AI-use disclosure from the worker is displayed separately.
- **Hesitation / ambiguous wording:** “Evaluación simulada” may sound like simulated worker data rather than a simulated evaluator. When live AI is available, “Análisis con IA” could make its influence on criterion statuses unclear because the statuses still come from local deterministic logic.
- **Expects next:** Read evidence and choose whether to validate it.
- **MONEY proposition:** The AI explanation adds no clear cost/value detail; likely no per-task fee is explained.
- **Human / AI boundary:** Explicit and strong; buttons preserve the human decision.
- **Severity:** Medium.

### 8. Human validation

- **Expectation:** Confirm this one deliverable, or request more work/revision, without accidentally hiring someone.
- **Interpretation:** “Validar evidencia” or “Todavía no validar” records a human state and opens the proof state. AI output has no validation field.
- **Hesitation / ambiguous wording:** “Todavía no validar” does not specify how Luis asks for a correction or returns to the worker; the demo has no messaging loop. Both choices lead to a proof record, although its state is shown.
- **Expects next:** A clear record of what was decided and a practical next action.
- **MONEY proposition:** Validation does not trigger payment or explain payment follow-through.
- **Human / AI boundary:** Very clear: Luis chooses; AI cannot validate.
- **Severity:** Medium.

### 9. Portable worker proof

- **Expectation:** Know what Luis's validation means, what the worker can share, and what happens next.
- **Interpretation:** The record includes task, hours, agreed amount, criteria evidence, AI-use disclosure and employer status. It can be printed/saved as PDF and shared.
- **Hesitation / ambiguous wording:** Before the fix, nothing explained whether “validada” meant hiring, confirmed payment, an independently verifiable credential, or merely Luis's review decision. It also did not spell out the next step.
- **Expects next:** Shareable proof for the worker; if appropriate, a separate discussion about a longer role. No guaranteed hire.
- **MONEY proposition:** Amount is preserved as “acordado,” but proof does not confirm payment occurred.
- **Human / AI boundary:** The employer status is explicit; no global score appears.
- **Severity:** High.

### 10. Shadow / anti-exploitation rule

- **Expectation:** Ensure a small paid task does not become repeated cheap auditions or substitute indefinitely for a job.
- **Interpretation:** Landing warning says micro-experience should open the next rung, not become endless temporary work; each task is paid and bounded; no endless task feed is offered.
- **Hesitation / ambiguous wording:** The warning is a principle, not an enforced limit or conversion path. Nothing tracks repeat tasks or requires an opportunity beyond task work.
- **Expects next:** If the task goes well, a direct conversation about a longer opportunity rather than another audition.
- **MONEY proposition:** Paid/bounded framing is strong, but real payment remains outside this demo.
- **Human / AI boundary:** Human decision is reinforced; the shadow warning does not alter AI behavior.
- **Severity:** Medium.

## Confusion Log

| State | Confusion | Severity | Why it matters | Candidate fix |
|---|---|---|---|---|
| Landing / PyME path | “Trabajo real”, “prueba verificable” and “publica” can sound live, while the product is simulated and does not process payments. | Medium | Luis may mistake demo behavior for a functioning marketplace and infer payment execution. | Keep demo label near the PyME action; state plainly that payment is agreed directly and not processed here. |
| Task creation | Prefilled MXN 2,500 and 10–20 hours may be read as recommended rates; total cost, fees and review time are unstated. | Medium | Luis needs a predictable commitment before publishing. | Label values as editable examples and clarify there is no platform fee/payment processing in the demo. |
| Scope / rubric | Three criteria may not be concrete enough to tell if the output solves Luis's distribution backlog task. | Medium | Weak criteria make usefulness and acceptance subjective. | Add a short example of a measurable deliverable in task guidance. |
| Evidence submission / review | Typed summaries and text/link lines do not prove origin or correspondence; no file artifact or chain of custody is captured. | High | Luis could treat an unsupported claim or keyword match as verified task work. | Call the content submitted evidence, keep original visible, and state that the employer must inspect the underlying work; consider actual artifacts in a future scope. |
| Evaluation | “Con evidencia” is generated by keyword matching and may sound like substantive verification. | High | Over-trust could cause a poor validation decision and misrepresent the quality of evidence. | Label this as a rough simulated text match and tell employer to inspect the original. |
| AI disclosure | “Evaluación simulada” could mean simulated data, and the relationship between live explanation and deterministic statuses is not obvious. | Medium | Luis is skeptical of algorithms and needs to know exactly what influenced the result. | Say which component is generated by rules/AI and keep human validation separate. |
| Human validation | “Todavía no validar” has no correction/message loop; both actions move to proof. | Medium | Luis may expect to request a revision and not know what a pending proof signifies. | State that follow-up happens outside this demo and status remains unvalidated. |
| Portable proof / next step | Before fix, “validada” did not explicitly mean only this task's evidence; it could imply hiring, payment or an externally verified credential. Next step was unstated. | High | It risks overstating worker outcomes and the meaning of portable proof. | Explain the limited meaning of validation and offer the actual PDF/share action without promising employment. |
| Shadow rule | Anti-endless-audition warning has no enforced repeat limit or longer-opportunity conversion. | Medium | A stated value alone cannot prevent exploitative repeated tasks. | Keep tasks bounded and make future progression explicit; do not imply the current demo enforces it. |

## Worst Confusion

The proof screen's validated status lacked a plain-language definition. A skeptical SME could read validation as a hire, payment confirmation, or platform-verifiable credential, while the product only stores the employer's decision about one evidence submission. This is the highest-impact confusion because it distorts both the worker's portable-proof promise and what Luis is committing to after reviewing work.

## Fix Applied

Added a state-specific note on the proof screen. For validated evidence, it says the PyME validated this task's evidence, this is not a hire and does not guarantee more work, and the summary can be saved/shared as PDF. For pending or not-yet-validated evidence, it says it is still unvalidated and should be shared as pending. This is a narrow copy change; it does not change the human decision or simulate payment.

## Re-test

- Re-traced the validated state: the existing human “Validar evidencia” action sets `validation` to `validated`, creates the proof view, and the new note describes that limited state and the available next action (PDF/share).
- The existing UI workflow regression test now also asserts the new validated-state copy after the human action.
- No browser automation or screenshot was available; this re-test is source and automated-test based.

## Remaining Confusions

- Payment is agreed but never executed in the demo; no fee, transfer timing or payment mechanism is implemented.
- Evidence is typed text/example links. Source correspondence is not independently proven, and the fallback's keyword matching is only a rough aid.
- There is no revision conversation, repeat-task safeguard, or integrated path to a longer opportunity. The shadow warning is not enforcement.
- “Portable” means a printable/shareable summary, not a cryptographically or independently verified credential.
- Luis's time to define scope and review evidence is not estimated.
