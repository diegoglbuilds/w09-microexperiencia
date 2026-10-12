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

- Test/build results and any unresolved limits will be recorded after the mechanical pass below.
- Deploy and GitHub repository creation are intentionally not part of this implementation session.
- **Next session first move:** run the persona pass on the rendered experience, starting with a narrow mobile viewport; fix any confusion around agreed payment versus payment processing and proof portability.
