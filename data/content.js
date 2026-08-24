// -----------------------------------------------------------------------------
// Edit everything about the site from this one file.
// Text, ventures, roles, skills and contacts all live here.
// In role bullets, wrap emphasis in **double asterisks** to render it bold.
// -----------------------------------------------------------------------------

export const site = {
  name: { first: "Raghav", last: "Gupta" },
  tagline: "Engineer · Builder · Remote, worldwide",
  issue: "Vol. 01 · No. 03",
  github: "https://github.com/raghavg27",
  email: "raghavg2705@gmail.com",
  linkedin: "https://linkedin.com/in/raghavg27/",
  phone: "+91 98184 76527",
  phoneHref: "+919818476527",
  url: "https://build-with-raghav.vercel.app",
  location: "Delhi–NCR, India",
  resume: "/Raghav-Gupta-Resume.pdf",
  year: 2026,
};

export const nav = [
  { label: "Now", href: "#now" },
  { label: "Building", href: "#building" },
  { label: "Believe", href: "#believe" },
  { label: "Record", href: "#record" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Call-to-action buttons. `download` renders the anchor with a download attribute;
// `external` opens in a new tab. Used by Hero, Masthead, MobileNav and Colophon.
export const cta = {
  email: {
    label: "Email me",
    href:
      "mailto:raghavg2705@gmail.com?subject=Work%20with%20Raghav&body=Hi%20Raghav%2C%0A%0A",
    arw: "↗",
  },
  resume: {
    label: "Download CV",
    href: "/Raghav-Gupta-Resume.pdf",
    download: true,
    arw: "↓",
  },
  resumeShort: { label: "CV", href: "/Raghav-Gupta-Resume.pdf", download: true, arw: "↓" },
  linkedin: {
    label: "Message on LinkedIn",
    href: "https://linkedin.com/in/raghavg27/",
    external: true,
    arw: "↗",
  },
  work: { label: "Read the case studies", href: "/work", arw: "→" },
  heroNote: "Open to select engagements — remote, worldwide. Replies within a day.",
  footerNote: "Contract, EOR or full-time via an India-registered entity.",
};

export const ticker = [
  { strong: "Open to select engagements", rest: " — Remote, worldwide", dot: true },
  { rest: "Delhi–NCR · India" },
  { rest: "SDET → AI eval · Solo builder" },
  { rest: "Vol. 01 · No. 03" },
];

export const hero = {
  eyebrowLeft: "SDET → AI eval · Solo builder",
  eyebrowRight: "Remote · Worldwide",
  lede:
    "Software quality engineer by training — automation, load, and release readiness at scale. Now I evaluate AI coding agents for a living, and I build the kind of system I would otherwise be asked to test: agentic RAG, multi-agent research, and a UPI-native payments core proved out with property-based tests.",
  figures: [
    { n: "5 yrs", lines: ["Owning quality", "across QA, SDET & AI eval roles"] },
    { n: "0", lines: ["Critical production defects", "across feature releases"] },
    { n: "60–70%", lines: ["Manual test effort removed", "through automation"] },
  ],
  nowBuilding: [
    { label: "Squared Up", href: "/work/squared-up" },
    { label: "Equity Crew", href: "/work/equity-crew" },
    { label: "Git Guide", href: "/work/git-guide" },
    { label: "Steno", href: "/work/steno" },
  ],
};

// -----------------------------------------------------------------------------
// The "Now" band — sits directly under the hero so the AI-evaluation work, which
// is the whole SDET → AI-eval pivot, is the first concrete thing on the page.
// It links to the `evaluation` case study below, which is its artifact.
// -----------------------------------------------------------------------------
export const now = {
  folio: "§ Current assignment",
  meta: "Handshake AI · Contract · Since March 2026 · Remote",
  lede:
    "Correctness used to be binary: run it twice, get the same answer. AI coding agents broke that assumption, and I moved toward the break rather than away from it. I design the evaluation environments that decide whether an agent actually did the job — and the hard part is not the agent, it is making a red run mean exactly one thing.",
  anatomy: [
    { k: "Specification", v: "The task in prose, the way a ticket would arrive." },
    { k: "Environment", v: "Dockerised, pinned, no network at solve time." },
    { k: "Reference", v: "A known-good solution — the control on the verifier." },
    { k: "Verifier", v: "Objective pass/fail on outcomes, never on the transcript." },
  ],
  link: { label: "How I test an agent", href: "/work/ai-agent-evaluation", arw: "→" },
};

export const believe = {
  folio: "§ What I believe",
  intro:
    "Testing taught me the cheapest bug is the one you design out before it exists. The same instinct now runs my products: ship small, watch it break, fix the loop — then add scope. Taste and tight feedback beat headcount.",
  principles: [
    {
      no: "Principle 01",
      h: "Break it before your users do.",
      p: "Every feature earns a way to fail loudly in staging first. Confidence at release is built, never assumed.",
    },
    {
      no: "Principle 02",
      h: "Automate the boring, own the judgement.",
      p: "Machines run the regression pass. I keep the calls that need context — what to test, what to ship, what to hold.",
    },
    {
      no: "Principle 03",
      h: "Grounded beats clever.",
      p: "Whether it's a test suite or a RAG agent, I'd rather ship something cited, predictable, and honest than a demo that hallucinates.",
    },
  ],
};

// -----------------------------------------------------------------------------
// Case studies. Each one is both a card in the Building grid and a page at
// /work/<slug>. Shape (every field except `slug`, `name`, `tag`, `status`,
// `card`, `meta`, `links` and `lede` is optional and skipped when absent):
//
//   slug     URL segment. Also the React key.
//   card     the ~70-word blurb used by the Building grid.
//   meta     [key, value] pairs, rendered into a <dl> on the card and the page.
//   links    { live, repo } — null, not "", when a link does not exist.
//   lede     the standfirst under the case-study headline.
//   problem  array of paragraphs.
//   approach { p: [paragraphs], diagram: string } — diagram renders in <pre>.
//   decisions[] { n, h, p } — the engineering-judgement section.
//   proof    { p, bullets[] } — how the thing is proved to work. **bold** works.
//   scope    { built[], deferred[] } — honest shipped-vs-parked.
//   shot     { src, w, h, alt, cap, portrait? } — a real screenshot, framed as a
//            plate; `portrait: true` caps the plate width for tall images.
// -----------------------------------------------------------------------------
export const caseStudies = [
  {
    slug: "squared-up",
    name: "Squared Up",
    tag: "UPI-native expense splitting",
    status: "Shipped · open source",
    card:
      "An India-first Splitwise alternative: split the bill, settle in one UPI tap. Django/DRF over PostgreSQL with a framework-free money core held in integer paise, plus an installable React PWA. The correctness layer is proved against spec vectors and Hypothesis property tests before it ever touches a database.",
    meta: [
      ["Stack", "Django · DRF · PostgreSQL · React PWA"],
      ["Money", "Integer paise · no floats"],
      ["Proved with", "Spec vectors + Hypothesis"],
    ],
    links: { live: null, repo: "https://github.com/raghavg27/squared-up" },
    lede:
      "Splitwise got worse and it never understood UPI. Squared Up is the version I wanted. The interesting part is not the app — it is that the money math is a framework-free Python package, proved out before Django ever sees it.",
    problem: [
      "Group expenses are a rounding problem wearing a social costume. ₹1,000 split three ways is not ₹333.33 each — it is 33,334 paise and 33,333 and 33,333, and whoever gets the spare paise has to be decided by a rule that gives the same answer every time or the balances quietly drift apart. Splitwise handles this and hides it.",
      "What it does not handle is the settlement. In India the money moves over UPI, and every existing app stops at “you owe Aarav ₹412” and leaves the chase to WhatsApp. So the product bet is small — carry the split all the way to a payable intent — and the engineering bet is that the money core has to be provably right, because a payments app that is 99% right is a payments app people stop trusting.",
    ],
    approach: {
      p: [
        "`backend/domain/` is a plain Python package with no Django import anywhere in it. It takes numbers and returns numbers. Models, serialisers and views call into it and never re-derive a split themselves, so there is exactly one place in the system where money math happens — and exactly one place to test it.",
        "Everything above that is an ordinary modular monolith: phone-OTP to JWT, group membership, expenses, balances, settlements. The frontend is a separate Vite app that talks to `/api/v1` and installs as a PWA. `docker compose up --build` brings up Postgres, Django behind gunicorn, and an nginx-served frontend in one command.",
      ],
      diagram: `frontend-monzo/    React · Vite · Tailwind · installable PWA
       │
       │  fetch /api/v1   (JWT bearer, Idempotency-Key)
       ▼
backend/           Django + DRF — modular monolith
  core/            auth · directory · groups · expenses
                   balances · turn · settlements · AI entry
       │
       │  calls into, never re-implements
       ▼
backend/domain/    pure Python — zero Django imports
  money.py         integer paise, no floats anywhere
  split.py         largest-remainder allocation
  balance.py       balances derived from the ledger
  simplify.py      debt minimisation
  turn.py          "Turn to Pay" fairness rotation
  upi.py           upi://pay intent builder
       ▲
       └── tests/test_vectors.py    every worked spec example
           tests/test_property.py   Hypothesis invariants
                                    (both run with no database)`,
    },
    decisions: [
      {
        n: "01",
        h: "Money is an integer, or it is a bug.",
        p: "Every amount is paise, as an `int`, end to end: request body, domain, ORM column, response. No floats, no `Decimal`, no currency library. Rounding is not the database's problem or the serialiser's problem — it happens once, in `split.py`, by largest remainder: leftover paise go to the largest fractional remainders, ties broken `(frac DESC, user_id ASC)` so identical input always produces an identical allocation. `SUM(paid) = SUM(owed) = amount` is asserted before anything is persisted.",
      },
      {
        n: "02",
        h: "Balances are derived, never stored.",
        p: "There is no `balance` column to drift out of sync. Balances are computed from the expense ledger on read, and debt simplification runs on top of that. It costs a query and it removes a whole class of bug — the one where a half-failed write leaves two people disagreeing about what they owe and no way to tell which of them is right.",
      },
      {
        n: "03",
        h: "The server never touches the money.",
        p: "Settlement builds a `upi://pay?…` intent and hands it to the phone. The user pays in their own UPI app, comes back, and confirms; the counterparty confirms or disputes. Squared Up is a ledger with a deep link, not a payment processor — which is the difference between shipping this and needing a licence to ship it. Manual settlement is the fallback when someone has no VPA on file.",
      },
      {
        n: "04",
        h: "Outsiders get 404, not 403.",
        p: "Every group-scoped read and write requires active membership, and a non-member gets 404 rather than 403 so group ids cannot be found by enumeration. Expenses are visible to their group; personal ones only to the creator and participants. A settlement can only be confirmed or disputed by the two parties in it. `GET /users` returns only people you already know. The whole matrix is pinned in `tests/test_authz.py` rather than living in a reviewer's memory.",
      },
      {
        n: "05",
        h: "Idempotency keys on every mutation.",
        p: "Mobile networks retry, and a retried “add expense” must not create a second expense. An `Idempotency-Key` header on mutating requests means a replay returns the stored response and creates nothing new. That is invariant I9, and it is a test rather than an assumption.",
      },
      {
        n: "06",
        h: "Invited placeholders and real accounts are the same user.",
        p: "Invites are by phone number, normalised to E.164 and deduped, so the placeholder you invited last month and the account that later signs in with that number resolve to one identity. Get this wrong and balances fork silently — the worst failure mode a splitting app has, because nobody notices until settlement.",
      },
    ],
    proof: {
      p: "This is the part I would want to read first if I were reviewing someone else's payments code.",
      bullets: [
        "**Spec vectors.** The Core Domain Specification carries a §14 table of worked examples. Every one is a passing test in `tests/test_vectors.py`, so the spec and the code cannot disagree quietly.",
        "**Hypothesis property tests.** `tests/test_property.py` generates arbitrary amounts and participant sets and asserts what must hold for all of them: the allocation sums to the total, nobody is allocated negative paise, and re-running an allocation is stable.",
        "**Invariants I1–I9** are enforced in `core/services.py` and asserted **before** persist, not audited afterwards.",
        "**The authorization matrix is a test file** — `tests/test_authz.py` — not a convention that erodes.",
        "**The domain tests need no database.** `pytest tests/test_vectors.py tests/test_property.py` runs in about a second against pure functions, which is why nobody is ever tempted to skip them.",
        "**The API tests do use Postgres**, and they cover authz, membership, itemisation, categories, export, insights and hardening as separate suites rather than one god-file.",
      ],
    },
    scope: {
      built: [
        "Phone-OTP → JWT auth, registration and onboarding",
        "All five split types, multiple payers, expense create / edit / delete",
        "Balances, debt simplification and “Turn to Pay” fairness rotation",
        "UPI settle with confirm-after-pay and manual fallback",
        "Friends, group membership, activity feed, natural-language entry and auto-categorise",
        "Offline-ready PWA across 10+ screens, Dockerised deployment",
      ],
      deferred: [
        "Real SMS and Google/Apple OAuth — the seams exist (`core/sms.py`, stub buttons); a Twilio provider is already wired behind an env var",
        "Splitwise import, FX conversion, realtime WebSocket sync",
        "Hindi i18n strings, receipt OCR, bank linking, native apps",
      ],
    },
    shot: null,
  },

  {
    slug: "equity-crew",
    name: "Equity Crew",
    tag: "Multi-agent equity research",
    status: "Shipped · open source",
    card:
      "Five CrewAI agents research a listed stock the way a desk would: fundamentals across eight yfinance endpoints, neural news search, technical indicators written from scratch in pandas, and a dynamically chosen peer set — fused into a BUY/HOLD/SELL call with a confidence score and a generated PDF report.",
    meta: [
      ["Stack", "Python · CrewAI · OpenRouter · EXA"],
      ["Agents", "6 defined · 4 run in parallel"],
      ["Output", "Validated schema + PDF report"],
    ],
    links: { live: null, repo: "https://github.com/raghavg27/equity-crew" },
    lede:
      "An LLM that says “BUY” is worthless. An LLM that says BUY at 0.78 confidence, with a 12-month target, two named reasons and two named risks — and gets retried when it fails to produce them — is at least something you can argue with.",
    problem: [
      "Every “AI stock analyst” demo is one prompt over a price feed. The output is fluent and unfalsifiable: no sources, no structure, no way to separate a well-supported answer from a confident invention. That is a test-design problem before it is a modelling problem — if the output has no schema, there is nothing to assert against.",
      "So Equity Crew was built backwards from the assertion. Decide what a defensible recommendation must contain, make that a type, put a guardrail in front of the type, and only then work out which agents have to exist to fill it in.",
    ],
    approach: {
      p: [
        "Four independent crews run concurrently in a `ThreadPoolExecutor` — fundamentals, news, technicals, peers. Each writes a markdown artifact. A synthesis agent then reads all four, and an advisor agent turns the synthesis into a structured recommendation that has to survive a guardrail before anything downstream sees it.",
        "At the end of every run the system reports what parallelism actually bought — phase 1 wall-clock against an estimated sequential baseline — rather than claiming a number once in a README and never measuring it again.",
      ],
      diagram: `                 CLI  ·  main.py --stock SYRMA.NS
                          │
                 startup validation
                 env vars · symbol format · live API reachability
                          │
   ╔══════════════════════▼══════════════════════════════╗
   ║   PHASE 1 — four crews, ThreadPoolExecutor(4)       ║
   ╚══╤═══════════╤════════════╤════════════╤════════════╝
      │           │            │            │
 ┌────▼────┐ ┌────▼────┐ ┌─────▼─────┐ ┌────▼─────────┐
 │Financial│ │  News   │ │ Technical │ │    Peers     │
 │8 yfinance│ │ EXA     │ │ RSI MACD  │ │ LLM picks   │
 │tools     │ │ neural  │ │ BB SMA    │ │ 4–5 comps,  │
 │          │ │ search  │ │ volume    │ │ no hardcode │
 └────┬─────┘ └────┬────┘ └─────┬─────┘ └────┬─────────┘
      └────────────┴────────────┴────────────┘
                          │
   ╔══════════════════════▼══════════════════════════════╗
   ║   PHASE 2 — sequential                              ║
   ╚══════════════════════╤══════════════════════════════╝
                          │
              analyst   ·  no tools by design
                          │
              fin_expert ·  InvestmentRecommendation
                          │  ├─ action: BUY | HOLD | SELL
                          │  ├─ confidence: 0.0–1.0
                          │  ├─ target_price, current_price
                          │  ├─ reasons: ≥ 2
                          │  └─ risks:   ≥ 1
                          │
                 guardrail fails ──► CrewAI retries the task
                          │           with the error as feedback
                          ▼
              markdown artifacts + [SYMBOL]_Report.pdf`,
    },
    decisions: [
      {
        n: "01",
        h: "The output schema came before the agents.",
        p: "`InvestmentRecommendation` is a Pydantic model: a `Literal[\"BUY\",\"HOLD\",\"SELL\"]`, a confidence bounded to 0–1, a target and current price, at least two reasons and at least one risk. A guardrail function returns `(False, message)` when any of that is missing, and CrewAI re-runs the task with the message as feedback. The model does not get to decide what a complete answer looks like.",
      },
      {
        n: "02",
        h: "The synthesiser is given no tools, deliberately.",
        p: "The `analyst` agent has zero tools. It cannot go back and re-fetch; it has to reason from the structured phase-1 context it was handed. That keeps the synthesis step reproducible from its inputs, and it stops the agent papering over a gap in the data by quietly pulling more of it — which is exactly the behaviour that makes an agent's output impossible to review.",
      },
      {
        n: "03",
        h: "Technical indicators written from scratch.",
        p: "RSI, MACD, Bollinger bands, the 50/200 SMA cross and volume ratio are about forty lines of vectorised pandas rather than a TA library. One dependency fewer, and every number in the report traces to arithmetic that lives in this repo and is unit-tested directly in `tests/test_tools.py`. A borrowed indicator you cannot assert on is a number you are trusting for no reason.",
      },
      {
        n: "04",
        h: "Peers are chosen at runtime, not hardcoded.",
        p: "The sector analyst uses the model's own market knowledge to name four or five comparables, then pulls a compact valuation snapshot for each. No peer map to go stale, and it works for any ticker on any exchange — which matters when the same tool has to handle an NSE small-cap and a US mega-cap.",
      },
      {
        n: "05",
        h: "Failures are told to the operator, not the log.",
        p: "401s, 429s, agent timeouts and interrupts are caught and converted into a message that names the cause and the fix, with the traceback kept to the log file. `python main.py --validate` is the preflight: it checks credentials and live API reachability before a run spends twenty minutes and a token budget on something that was going to fail authentication at minute one.",
      },
      {
        n: "06",
        h: "Retry logic is fifteen lines, not a dependency.",
        p: "`_with_retry` wraps every yfinance call with exponential backoff — 1.5s, 3s, 6s — and every tool follows the same shape: validate input, retry, return structured JSON, or return a descriptive error string the agent can actually reason about. Agents recover from a legible error; they flail on a stack trace.",
      },
    ],
    proof: {
      p: "The agents are the interesting part and the tests are the part that makes them reviewable.",
      bullets: [
        "**`tests/test_tools.py`** asserts the RSI, MACD and Bollinger arithmetic against known series, with yfinance mocked — the maths is under test, not the network.",
        "**`tests/test_tasks.py`** tests the schema and the guardrail itself: a confidence of 1.4, a single reason and an empty risks list all have to be rejected.",
        "**`tests/test_validators.py`** covers symbol format, env-var presence and API resolution.",
        "**GitHub Actions** runs the suite on Python 3.11 and 3.12 on every push.",
        "**The guardrail is the runtime assertion.** Validation is not a test that runs in CI and then trusts production — it is in the path of every single recommendation the system emits.",
      ],
    },
    scope: null,
    shot: {
      src: "/work/equity-crew-report.png",
      w: 1120,
      h: 1589,
      portrait: true,
      alt: "Page one of a generated equity research report for SYRMA.NS, showing a green BUY recommendation badge, 78% confidence, current price and 12-month target, key reasons and key risks side by side, and a key financial metrics grid.",
      cap: "Page 1 of 15 from a generated run — SYRMA.NS, 01 May 2026. The badge, the confidence, the target and the reasons/risks columns are the guardrailed schema, rendered.",
    },
  },

  {
    slug: "git-guide",
    name: "Git Guide",
    tag: "Agentic RAG over GitLab docs",
    status: "Shipped · open source",
    card:
      "A multi-agent RAG assistant that answers GitLab questions straight from the official documentation — grounded, cited, and thrown away when the retrieved chunks are not good enough to support an answer. CrewAI agents, local ChromaDB retrieval, async smart routing, Streamlit UI, and it runs entirely on free tiers.",
    meta: [
      ["Stack", "Python · CrewAI · ChromaDB · Streamlit"],
      ["Embeddings", "BAAI/bge-small · local CPU"],
      ["Cost", "$0 to operate"],
    ],
    links: { live: null, repo: "https://github.com/raghavg27/git-guide" },
    lede:
      "A documentation assistant that would rather say nothing than guess. Every answer is retrieved from GitLab's own docs, cited back to a source URL, and refused outright when retrieval cannot clear a relevance floor.",
    problem: [
      "Docs chatbots fail in one specific way: they answer. Ask about a feature that was removed two releases ago and a naive RAG pipeline finds something adjacent, and the model stitches it into fluent prose. The failure is silent — plausible, well-formatted, wrong, and indistinguishable from a good answer unless you already knew the answer, in which case you did not need to ask.",
      "So the design target was never “answer more questions”. It was “make the failure loud”: ground every claim, cite every source, and drop weak retrieval before the writer ever sees it.",
    ],
    approach: {
      p: [
        "Ingestion is a one-time phase — sparse-checkout the GitLab docs, chunk them header-aware, embed locally, persist to ChromaDB. Runtime is two CrewAI agents behind a router: a retriever with four search tools, and a synthesiser whose only job is to write from what it was given and cite it.",
        "The router is the cheap trick that pays for itself. Short or ambiguous queries go through the full pipeline; everything else skips straight to retrieval.",
      ],
      diagram: `User query
   │
   ▼
Smart Router
   ├─ under ~4 words / ambiguous ──► FULL pipeline
   │                                   intent classify ─┐ asyncio
   │                                   query rewrite  ──┘ .gather()
   └─ clear, 5+ words ──────────────► straight to retrieval
   │
   ▼
Retriever Agent  (CrewAI)
   semantic_search · filtered_search · multi_query_search
   ChromaDB cosine similarity · RRF fusion
   │
   │  heuristic validation: drop every chunk below 0.40 relevance
   │  (nothing clears it → no answer, which is the correct outcome)
   ▼
Synthesiser Agent  (CrewAI)
   writes only from surviving chunks · cites every claim
   flags deprecated features · never extrapolates
   │
   ▼
Cited answer + source URLs + route pill + response time`,
    },
    decisions: [
      {
        n: "01",
        h: "A relevance floor instead of a validator agent.",
        p: "The obvious design adds an LLM validator to judge whether the retrieved chunks support an answer. That costs five to eight seconds and adds another call that can itself hallucinate. Instead, chunks below 0.40 cosine relevance are dropped before the synthesiser ever sees them — a threshold, not an opinion. Answer quality held; the latency did not come back.",
      },
      {
        n: "02",
        h: "Route around the pipeline when it is not needed.",
        p: "A clear, well-formed question does not need intent classification and query rewriting; running them anyway is latency spent to reformulate something that was already fine. The router sends short or ambiguous queries through the full pipeline and everything else straight to retrieval, taking 30–50% off average latency.",
      },
      {
        n: "03",
        h: "The two pre-processing steps do not depend on each other.",
        p: "Intent classification and query rewriting are independent, so they run under `asyncio.gather()` instead of one after the other. Pre-processing went from roughly eight seconds to four. Cheap, and only visible if you look at what the steps actually need from one another.",
      },
      {
        n: "04",
        h: "Asymmetric embeddings, used asymmetrically.",
        p: "`BAAI/bge-small-en-v1.5` is trained with a query prefix — `Represent this sentence for searching relevant passages:` — that goes on the query and *not* on the documents. Getting that backwards costs retrieval accuracy and produces no error, no warning and no obvious symptom. It is exactly the kind of defect that only shows up if you read the model card instead of the quickstart.",
      },
      {
        n: "05",
        h: "Local embeddings and a free-tier LLM, so it stays up.",
        p: "Embeddings run on CPU and cache to disk, ChromaDB is a local persistent client, and the LLM is OpenRouter's free tier behind LiteLLM with three retries. Total operating cost is $0.00 — which is the reason this is a project you can still run today rather than a demo I took down when the bill arrived.",
      },
    ],
    proof: {
      p: "Grounding is not a claim in the README here; it is visible in the interface on every answer.",
      bullets: [
        "**Source chips on every answer**, linking back to the GitLab doc the claim came from. A claim without a citation is a defect you can see.",
        "**The relevance floor is the assertion.** If nothing clears 0.40, there is nothing to write from, and refusing is the correct behaviour rather than a bug to route around.",
        "**The synthesiser is instructed to flag deprecated features** and to never extrapolate past the retrieved chunks — the two failure modes that make a docs bot actively harmful.",
        "**Route and response time are surfaced per answer**, so a mis-routed or slow query is observable instead of something you infer from feel.",
      ],
    },
    scope: null,
    shot: {
      src: "/work/git-guide-app.png",
      w: 1600,
      h: 866,
      alt: "The Git Guide Streamlit interface: a dark sidebar showing the pipeline diagram from user query through smart router, retriever and synthesiser to a cited answer, alongside a chat panel answering a question about caching npm dependencies in GitLab CI.",
      cap: "The Streamlit UI. The sidebar carries the live pipeline; the chat carries source chips, the route the query took, and the time it took.",
    },
  },

  {
    slug: "steno",
    name: "Steno",
    tag: "Writing standard for AI prose",
    status: "Shipped · on sale",
    card:
      "A writing standard that makes AI-generated prose read as though a person wrote it — used as a checklist while drafting, or as an editing pass over text that already sounds machine-written. Rules are tiered so structure and stance get fixed before cosmetic tells. Product, copy, brand and front end built end to end by one person.",
    meta: [
      ["Ships as", "Claude skill · portable prompt"],
      ["Model", "One-time purchase"],
      ["Built", "Product · copy · brand · front end"],
    ],
    links: { live: "https://steno-ai.vercel.app", repo: "https://github.com/raghavg27/steno" },
    lede:
      "A product, not a repository. Steno is a writing standard that stops AI prose announcing itself — sold as a one-time purchase, with the rules, the copy, the brand, the landing page and the payment flow all built by the person who wrote the rules.",
    problem: [
      "Everyone can tell when something was written by a language model and almost nobody can say why. It is not grammar. It is inflated openers, the rule of three, participial padding, uniform sentence rhythm, em dashes at twice human density — a dozen habits the model reaches for when it has nothing specific to say.",
      "The advice that exists is vague: “write naturally”, “add personality”. Steno names twelve families of tells and gives each one a concrete substitution, so the fix is mechanical rather than a matter of taste you either have or do not.",
    ],
    approach: {
      p: [
        "Two artifacts. An instruction layer that sits in custom instructions, project instructions or a system prompt, so the model writes clean text from the start instead of you fixing it afterwards — shipped in four versions for ChatGPT, Claude projects and styles, a short variant for character limits, and a per-message variant for any chat. And a skills file that runs as an editing pass over text you already have, in the Claude Skills format, working as a plain prompt if you do not use skills.",
      ],
      diagram: null,
    },
    decisions: [
      {
        n: "01",
        h: "Two hard constraints hold the whole thing together.",
        p: "Nothing invented, nothing dropped. An edit changes how the prose reads, never what it says. That single rule is what makes the standard safe to run over someone else's copy, and it is why the editing pass returns text unchanged when the text is already clean instead of finding something to do.",
      },
      {
        n: "02",
        h: "Tiered rules, not a flat checklist.",
        p: "Fixing em-dash density in a paragraph that has no stance is polish applied to a broken thing. The tiers force structure and stance first and leave cosmetic tells last, so the pass cannot produce prose that is locally clean and globally empty.",
      },
      {
        n: "03",
        h: "No claim about beating detectors.",
        p: "Detector scores move and none of them publish their method, so any promise about them is a promise you cannot keep. Steno targets the part a writer can actually control — the patterns that make a human reader stop and think a bot wrote this. Refusing the easy marketing claim is the reason the honest one is worth something.",
      },
      {
        n: "04",
        h: "No app, no login, no subscription.",
        p: "The product is text. Payment runs through Buy Me a Coffee — card or UPI — files unlock on the page as soon as it clears, and a copy goes to email. Wrapping an account system around it would have added a database, a support surface and a churn problem, for no benefit to anyone buying it.",
      },
      {
        n: "05",
        h: "The site is written in the standard it sells.",
        p: "Three long-form guide pages double as the SEO surface and as the proof. If the copy read like AI output, the product would be its own counter-example — which is a useful kind of pressure to put on your own landing page.",
      },
    ],
    proof: {
      p: "The demonstration is the landing page, and it is falsifiable in one click.",
      bullets: [
        "**A live before/after the visitor can toggle.** On the full sample: 11 tells found, 118 words became 51, every claim kept.",
        "**Hand-written HTML and CSS**, no build step and no dependencies — original SVG logo mark rendered out to a full favicon and app-icon set.",
        "**Structured data for Product, FAQ, Article and breadcrumbs**, plus a sitemap and crawl rules that admit assistant bots.",
        "**The Open Graph card is generated from source HTML** rather than hand-edited in an image tool, so it regenerates instead of drifting.",
        "**Deployed on Vercel** with clean URLs, an explicit cache policy and security headers.",
      ],
    },
    scope: null,
    shot: null,
  },
];

// The AI-evaluation writeup is a case study but not a venture: it has no repo to
// link (client work) and does not belong in the Building grid. The writeup is
// itself the artifact for that work.
export const evaluation = {
  slug: "ai-agent-evaluation",
  name: "Evaluating AI coding agents",
  tag: "Test design for non-deterministic systems",
  status: "Current assignment · Handshake AI",
  card:
    "How I design reproducible evaluation environments for AI coding agents — and what five years of deterministic test design does and does not survive when correctness stops being a single value.",
  meta: [
    ["Role", "QA Engineer — AI Agent Evaluation (contract)"],
    ["Since", "March 2026"],
    ["Unit of work", "A Dockerised task with a verifier"],
  ],
  links: { live: null, repo: null },
  lede:
    "Five years of test design rest on one assumption: run it twice, get the same answer. Coding agents break that assumption. Most of what a tester knows survives the break — but only after you rewrite what “pass” means.",
  problem: [
    "A deterministic system has one correct output per input, so a test is an equality check. An agent has a set of correct outputs. Two agents can solve the same task by different routes, with different intermediate commands, different file layouts and different orderings, and both be right. Assert on the transcript and you fail correct work. Assert on nothing and you are measuring vibes.",
    "The second problem is worse, because it is invisible. A failed evaluation is ambiguous by default: when a run goes red, the honest question is whether the agent was wrong or the environment was — a flaky network call, a file leaked from a previous trial, a clock, a version that floated. Until that ambiguity is engineered out, the score is a measurement of your harness rather than of the model.",
  ],
  approach: {
    p: [
      "The unit of work is a task, and a task is four things that ship together: a written specification, a Dockerised environment, a reference implementation, and an automated verification suite that defines objective pass/fail. Miss any one of them and what you have is not an evaluation, it is an anecdote.",
      "The reference implementation is not documentation. It is the control. If the verifier does not pass against a known-good solution, the verifier is wrong — and you find that out before an agent's failure gets misattributed to the agent.",
    ],
    diagram: `task/
├── spec.md            what the agent is asked to do, in prose,
│                      the way a ticket would actually arrive
│
├── environment/
│   └── Dockerfile     pinned base image, pinned dependencies,
│                      clean container per trial,
│                      no network access at solve time
│
├── solution/          reference implementation — proof the task
│                      is solvable, and the control the verifier
│                      is run against first
│
└── tests/             the verifier
                       asserts on outcomes and artifacts
                       never on the transcript or the route
                       deterministic, or it does not ship`,
  },
  decisions: [
    {
      n: "01",
      h: "Assert on outcomes, never on the route.",
      p: "The verifier checks what is true once the agent has stopped — the endpoint returns the right shape, the file has the right contents, the process exits clean, the migration applied. Not which commands got it there. That is the whole trick that lets two valid approaches both pass while a wrong outcome still fails, and it is the direct analogue of testing behaviour instead of implementation.",
    },
    {
      n: "02",
      h: "Determinism is a property you build, not one you hope for.",
      p: "Pinned base images, pinned dependency versions, no network at solve time, a clean container per trial, and no state carried between runs. Every source of variance that is not the agent gets removed. The payoff is narrow and total: a red run means one thing.",
    },
    {
      n: "03",
      h: "Failure modes are the design target, not a side effect.",
      p: "Boundary, negative and exploratory cases are aimed at where agents actually break — long-horizon planning that loses the thread halfway, environment state the agent assumed instead of checked, and recovery after a tool call fails. A task that only exercises the happy path tells you nothing you did not already know about a model that was trained on happy paths.",
    },
    {
      n: "04",
      h: "A flaky verifier is a broken verifier.",
      p: "A test that fails one run in twenty is worse than no test, because it launders environment noise into a capability measurement and does it with a straight face. Flakes get fixed or the task gets pulled. They do not get re-run until green.",
    },
    {
      n: "05",
      h: "Difficulty is calibrated against the reference.",
      p: "A task every agent trivially passes and a task nothing can pass carry the same amount of signal: none. The reference implementation is the yardstick for how much work a task actually is, which is what lets a set spread across difficulty instead of quietly clustering at whatever was easy to author.",
    },
  ],
  proof: {
    p: "What carries over from deterministic testing, and what does not.",
    bullets: [
      "**Carries over:** boundary analysis, negative cases, equivalence partitioning — the discipline of asking what the input space actually looks like before writing a single assertion.",
      "**Carries over:** treating the test environment as production code. Pinned, reproducible, reviewed, and owned.",
      "**Carries over:** distrusting a green run you have never watched fail. A test that has not been proved capable of failing is not evidence.",
      "**Does not carry over:** exact-match assertions. Correctness is a set, not a value.",
      "**Does not carry over:** a single run as evidence. When the system under test is probabilistic, the pass/fail criterion has to be stable across runs before any individual result means anything.",
      "**New:** the reference implementation as a control on the verifier — the closest thing this discipline has to a unit test for the test.",
    ],
  },
  scope: null,
  shot: null,
};

// Every case study, in reading order. `/work` lists these; `/work/[slug]` routes them.
export const allStudies = [evaluation, ...caseStudies];

// -----------------------------------------------------------------------------
// The Building grid is a projection of `caseStudies`, so a card and its case
// study can never drift apart. `live` / `repo` are null (not "") when absent.
// -----------------------------------------------------------------------------
export const building = {
  folioCount: caseStudies.length,
  link: { label: "All case studies", href: "/work", arw: "→" },
};

export const ventures = caseStudies.map((c) => ({
  slug: c.slug,
  name: c.name,
  tag: c.tag,
  status: c.status,
  desc: c.card,
  meta: c.meta,
  live: c.links.live,
  repo: c.links.repo,
}));

export const roles = [
  {
    co: "Handshake AI",
    role: "QA Engineer — AI Agent Evaluation (Contract)",
    dates: "Mar 2026 — Present",
    loc: "Remote",
    bullets: [
      "Designed end-to-end test scenarios for **AI coding agents** — each packaged as a reproducible **Dockerised environment** with a written specification, a reference implementation, and an automated verification suite defining objective pass/fail criteria.",
      "Applied **boundary, negative and exploratory testing** to surface agent failure modes in long-horizon planning, environment state handling, and recovery from failed tool calls.",
      "Enforced **determinism** and eliminated flaky verification so results measure agent capability rather than environment defects.",
      "Extended five years of test-design discipline to **non-deterministic systems**, where correctness is probabilistic and assertions must tolerate valid variation in approach while still catching wrong outcomes.",
    ],
  },
  {
    co: "Grey Orange",
    role: "Software Engineer — QA / SDET",
    dates: "Sep 2025 — Dec 2025",
    loc: "Gurugram, India",
    bullets: [
      "Owned end-to-end sprint QA — planning, test design, automation, defect tracking and retrospectives — landing **on-time releases** with improved defect containment.",
      "Built automated regression suites for warehouse and robot workflows in **PyTest, Selenium, Playwright and Page Object Model**, cutting manual effort **60–70%**.",
      "Ran performance and load testing for high-throughput bulk operations with **JMeter** and REST API testing, validating SLA compliance under peak load.",
      "Published pipeline metrics to **Grafana** for coverage, failure-trend and release-readiness visibility across stakeholders.",
      "Triaged nightly automated pipelines — isolating flaky tests and coordinating fixes via JIRA — reducing false positives **25%**.",
    ],
  },
  {
    co: "Shway",
    role: "Software Engineer — Quality Assurance",
    dates: "Jun 2023 — Sep 2025",
    loc: "Remote",
    bullets: [
      "Led functional, system and regression testing across **iOS and Android** using manual QA plus Selenium/Appium — **zero critical production defects** across releases.",
      "Ran end-to-end API testing with Postman, RestAssured, Requests and Swagger, cutting backend defect leakage **40%**.",
      "Executed load testing for high-traffic flows with JMeter, improving response times under peak load **30%**.",
      "Designed an in-house data-driven automation framework (PyTest, Page Object Model) that reduced test maintenance **35%**.",
      "Integrated test execution into CI/CD with **Jenkins, Git, Docker and Kubernetes** for quality checks on every build.",
    ],
  },
  {
    co: "Yellow.ai",
    role: "Customer Success Engineer",
    dates: "Jul 2021 — Jun 2023",
    loc: "Remote",
    bullets: [
      "Acted as **quality gatekeeper** for enterprise clients — owning pre-release validation, defect triage and go-live sign-offs for conversational workflows.",
      "Triaged incidents, set severity, and verified fixes in staging and production, lifting CSAT and reducing repeat incidents.",
      "Led technical UAT sessions with enterprise customers, converting business feedback into product improvements.",
    ],
  },
];

export const skills = {
  note:
    "Full-stack on quality and delivery — from writing the framework to reading the Grafana board at 2 a.m. Comfortable across languages, test tooling, AI/RAG systems, and the DevOps chain that ships it.",
  education: {
    school: "SRM Institute of Science and Technology",
    detail: "B.E. Computer Engineering · 2017–2021",
  },
  groups: [
    {
      h: "Languages & Data",
      items: ["Python", "JavaScript", "SQL", "PostgreSQL", "MongoDB / NoSQL", "Bash"],
    },
    {
      h: "Test & Automation",
      items: [
        "Selenium",
        "Playwright",
        "Appium",
        "PyTest",
        "Hypothesis",
        "JUnit",
        "Page Object Model",
        "JMeter",
        "Postman / RestAssured",
      ],
    },
    {
      h: "AI / Backend",
      items: [
        "CrewAI · Agentic RAG",
        "ChromaDB",
        "Django / DRF",
        "React",
        "Node.js",
        "REST / OpenAPI",
      ],
    },
    {
      h: "DevOps & CI/CD",
      items: [
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Git / GitHub Actions",
        "Grafana",
        "JIRA · TestRail · Confluence",
      ],
    },
  ],
};

export const contact = {
  closing: "One engineer, a bias for shipping, and a stubborn belief that quality compounds.",
};

// -----------------------------------------------------------------------------
// /resume — the printable CV. Reuses `roles` and `skills` above; everything
// unique to the CV page lives here. Regenerate the PDF after editing this:
// see "Resume PDF" in CLAUDE.md.
// -----------------------------------------------------------------------------
export const resume = {
  headline: "SDET who extended test-design discipline from deterministic systems to AI agents",
  summary:
    "Five years proving out other people's systems — mobile, web, warehouse robotics — then AI agents arrived and broke the assumption test engineering was built on: that correctness is binary. At Handshake AI I design reproducible evaluation environments for coding agents; on my own time I build the agent systems themselves, the way a tester would. Looking for the role where those two halves are the same job.",
  strengths: [
    "Test design that survives non-determinism — objective pass/fail criteria for AI agents whose correctness is probabilistic.",
    "Owning test infrastructure end to end: in-house PyTest + Page Object Model frameworks, CI/CD-integrated, flake-free.",
    "Builds the systems he evaluates — multi-agent LLM applications designed around grounding, validation and citation.",
    "Full-stack quality range: functional, API, mobile, and JMeter performance/load testing under peak throughput.",
  ],
  projects: [
    {
      name: "squared-up",
      tag: "India-first expense splitter · Django/DRF + React PWA",
      url: "https://github.com/raghavg27/squared-up",
      line: "Money core held in integer paise and verified with Hypothesis property-based tests; UPI one-tap settlement, installable PWA, Dockerised.",
    },
    {
      name: "equity-crew",
      tag: "Multi-agent equity research · CrewAI",
      url: "https://github.com/raghavg27/equity-crew",
      line: "Five specialised agents fusing fundamentals, neural news search, from-scratch technical indicators and sector peer benchmarking into a validated BUY/HOLD/SELL PDF report.",
    },
    {
      name: "git-guide",
      tag: "Agentic RAG over GitLab docs",
      url: "https://github.com/raghavg27/git-guide",
      line: "CrewAI + ChromaDB + Streamlit; async parallel processing and smart routing, with every answer grounded and citation-enforced against source docs.",
    },
    {
      name: "Steno",
      tag: "Writing standard for AI prose",
      url: "https://steno-ai.vercel.app",
      line: "A tiered editing standard that makes AI-generated prose read as though a person wrote it. Ships as a Claude skill and a portable prompt.",
    },
  ],
  availability: [
    ["Engagement", "Independent contractor / B2B · EOR · full-time via an India-registered entity"],
    ["Location", "Delhi, India · remote worldwide, any timezone"],
    ["Work authorisation", "Indian citizen. No visa or sponsorship required for contract engagements."],
  ],
};
