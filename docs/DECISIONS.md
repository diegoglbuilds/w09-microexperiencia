# Implementation decisions

## Packet and scope

- Immutable planning packet committed first as `9dfff89` (`docs: establish week 9 packet before code`). `docs/PACKET.md` remains unchanged.
- Build a compact Spanish-first Next.js App Router slice. The supplied mockup informed the calm green palette, clear task panel, and prominent payment, evidence, and validation states.
- Use a focused single-demo-task workflow rather than a job feed. UI names, companies, work, and payments are fictional; browser local storage is demo convenience only, not secure or durable production persistence. No authentication is implied.

## Architecture and security

- React client flow, TypeScript domain types, Zod schemas, Next route handler for optional explanation, Tailwind CSS v4, Vitest and Testing Library.
- `OPENAI_API_KEY` is optional and read only by the server route. Task and submission are validated before bounded fields are sent. Model output is capped and displayed as explanation only. The deterministic path works without a key and is labeled `Evaluación simulada`.
- Structured task schema requires three rubric dimensions, bounded title/description/hours/payment/deadline/skills. Submission schema bounds summary and evidence items and constrains AI disclosure.
- No secrets, real identities, uploads, payment processing, fake auth, or production persistence. Future use of real people or multi-user durable storage requires real authentication and owner-scoped RLS first.
- Human validation is separate client state with two explicit SME actions; the evaluation schema has no validation property and model output cannot mutate that state.

## Shadow decisions

- UI repeatedly identifies work as paid, shows payment/hours/deadline before submission, and clarifies payment is agreed but not processed in demo.
- One focused task only; no endless feed. Product warning: “La microexperiencia debe abrir el siguiente escalón, no convertirse en trabajo temporal infinito.”
- Proof is shown as a worker-owned portable record. No global worker score; criteria describe the evidence, not a person.

## Test, deploy, and next session

- **Test:** `npm test` passes (8 tests across 2 files), covering task and submission validation, invalid money/hour ranges, deterministic rubric output, simulated explanation label, no global score/human decision in AI result, and portable proof behavior.
- **Build:** `npm run build` passes on Next.js 16.4.0 after fixing the review screen to display the validated submission `summary` field. Build statically prerenders `/`; `/api/evaluate` is dynamic.
- **Dependency audit:** `npm audit --json` returned 0 advisories after updating Next.js to 16.4.0 and Vitest to 5.0.3. The prior Vitest chain reported three advisories; the patched test runner removed them. A later audit retry could not reach npm's advisory endpoint, so that retry did not independently refresh the result.
- **Deploy notes:** no deployment performed, as requested. `OPENAI_API_KEY` is optional; without it, the product uses deterministic explanation. No other environment variable is required.
- **Unresolved limits:** browser local storage is neither secure nor durable; the demo uses synthetic identities and does not process payments. The employer validation control is a simulated SME action without real authentication. Evidence matching is intentionally simple keyword-based logic, not a claim of objective skill measurement. No global worker score is created.
- **Mechanical bug fixed:** the first production typecheck found the SME review screen reading `evidenceSummary`; submissions define that field as `summary`. The screen now renders the validated field and the production build passes.
- Deploy and GitHub repository creation are intentionally not part of this implementation session.
- **Next session first move:** run the persona pass on the rendered experience, starting with a narrow mobile viewport; fix any confusion around agreed payment versus payment processing and proof portability.

## Mechanical Test — Post Deploy #1

- **Date/session:** 2026-10-11, post Deploy #1 mechanical pass.
- **Production URL tested:** https://w09-microexperiencia.vercel.app. The available web fetch tool could not access the URL, so no production page behavior is claimed.
- **Exact testing method:** source review of `docs/PACKET.md`, app/domain/proof/API implementation, and tests; full `npm test`; `npm run build`; attempted production URL fetch through the available web tool.
- **Browser availability or limitation:** browser automation was not available in this session (no browser/Playwright tool exposed). No browser clicks, screenshots, or visual observations were made. Production fetch returned inaccessible via tool.
- **Tests performed:** mechanically reviewed task creation validation, positive/bounded MXN payment, hour bounds/order, exactly three rubric dimensions, evidence bounds, simulated task labels, simulated AI fallback labeling, separation of AI evaluation from human validation, explicit employer validation choices, proof state mapping, absence of global employability score, visible shadow warning, paid-work copy, browser-local persistence disclosure, Spanish labels, semantic labels/fieldset and responsive Tailwind breakpoints. Existing automated tests cover domain validation, evaluation/proof invariants and visible copy/workflow; date regression added below. Responsiveness and the production rendering remain source-inspected only.
- **REAL bug found:** task deadline validation accepted impossible calendar values such as `2026-02-31`. The schema only checked the `YYYY-MM-DD` shape and string comparison against today, which does not guarantee a real date.
- **Why it mattered:** users could publish a task with a deadline that no calendar contains, undermining task clarity and deadline validation despite a successful form submission.
- **Fix made:** added a UTC component round-trip calendar check to the deadline schema before the existing not-in-the-past check.
- **Regression coverage:** new test in `lib/domain-date.test.ts` proves the impossible date is rejected.
- **Final `npm test` result:** PASS, 3 test files and 9 tests.
- **Final `npm run build` result:** PASS, Next.js production build and TypeScript check completed.
- **Remaining risks:** no browser or production page verification; browser-local storage is not secure/durable; employer validation/payment remain simulated; deterministic rubric matching is simple keyword matching; responsive layout and assistive-technology behavior were not exercised in a browser.
- **Next session first move:** Persona test.
