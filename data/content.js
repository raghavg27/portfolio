// -----------------------------------------------------------------------------
// Edit everything about the site from this one file.
// Text, ventures, roles, skills and contacts all live here.
// In role bullets, wrap emphasis in **double asterisks** to render it bold.
// -----------------------------------------------------------------------------

export const site = {
  name: { first: "Raghav", last: "Gupta" },
  tagline: "Websites · Software · AI systems",
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
  { label: "Services", href: "#services" },
  { label: "Work", href: "#building" },
  { label: "Systems", href: "#systems" },
  { label: "Method", href: "#method" },
  { label: "Record", href: "#record" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// A prefilled email. Every service card gets its own subject line from this.
const mailto = (subject) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Hi Raghav,\n\n")}`;

// Call-to-action buttons. `download` renders the anchor with a download attribute;
// `external` opens in a new tab. Used by Hero, Masthead, MobileNav and Colophon.
export const cta = {
  // The hook. Primary button in the hero and the mobile menu.
  upgrade: { label: "Get yourself upgraded", href: mailto("Get me upgraded"), arw: "↗" },
  email: { label: "Contact me", href: mailto("Work with Raghav"), arw: "↗" },
  whatsapp: {
    label: "WhatsApp",
    href: `https://wa.me/${site.phoneHref.replace("+", "")}`,
    external: true,
    arw: "↗",
  },
  services: { label: "See services", href: "#services", arw: "↓" },
  hire: { label: "Hire me", href: "#contact", arw: "→" },
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
  heroNote: "Taking new projects — remote, worldwide. Replies within a day.",
  footerNote: "Remote, worldwide · Independent contractor, invoiced from India.",
};

export const ticker = [
  { strong: "Taking new projects", rest: " — Remote, worldwide", dot: true },
  { rest: "Websites · Full-stack apps · RAG · AI automation" },
  { rest: "AEO · Security audits · AI evaluation" },
  { rest: "Delhi–NCR · India" },
];

export const hero = {
  eyebrowLeft: "Full-stack & AI engineer",
  eyebrowRight: "Remote · Worldwide",
  lede:
    "I design and build websites, full apps, RAG pipelines and AI automation — with AI deep in my workflow, so one engineer covers what used to need a team. Five years as the last quality gate before release is why it holds up after launch: everything below was built to be proved, not just demoed.",
  figures: [
    { n: "5 yrs", lines: ["Owning quality", "across QA, SDET & AI eval roles"] },
    { n: "4", lines: ["Products shipped solo", "from spec to working software"] },
    { n: "0", lines: ["Critical production defects", "across feature releases"] },
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

// -----------------------------------------------------------------------------
// Services — the first section under the hero. Every card's `proof` points at
// work that already exists on this site; a service with nothing to point at
// gets `proof: null` rather than an invented example. `turnaround` is optional
// and rendered only when present — only put a number here you can stand behind.
// `href` (a prefilled email) is added below from the service name.
// -----------------------------------------------------------------------------
const serviceList = [
  {
    slug: "websites",
    name: "Website design & build",
    line: "Editorial, fast, hand-tuned sites — designed, written and built by the same person, so nothing gets lost between the mockup and the code.",
    deliverables: [
      "Design and front end in Next.js / React",
      "Motion with GSAP, Framer Motion or three.js",
      "Structured data, sitemap and social cards",
      "Deployed on Vercel",
    ],
    proof: { label: "Shway — GSAP landing page", href: "/work/shway" },
    turnaround: "1–3 weeks",
  },
  {
    slug: "apps",
    name: "Software & apps from scratch",
    line: "Spec to working product: backend, database, frontend and the tests that keep it honest — one engineer owning the whole stack.",
    deliverables: [
      "Django / DRF or Node.js APIs",
      "PostgreSQL, Supabase, Redis",
      "React / Next.js web apps and installable PWAs",
      "Dockerised, with the test suite in CI",
    ],
    proof: { label: "Squared Up — payments app", href: "/work/squared-up" },
    turnaround: "4–8 weeks to a first release",
  },
  {
    slug: "automation",
    name: "AI automation workflows",
    line: "Multi-step work an LLM can do reliably — research, triage, reporting — built as agents with schemas, guardrails and retries, so the output is something you can check.",
    deliverables: [
      "Multi-agent pipelines",
      "Validated, structured output — not free text",
      "Retries and failures a person can read",
      "Generated reports — PDF, markdown",
    ],
    proof: { label: "Equity Crew — research agents", href: "/work/equity-crew" },
    turnaround: "1–3 weeks",
  },
  {
    slug: "rag",
    name: "RAG pipelines",
    line: "Assistants that answer from your own documents, cite their sources, and refuse when retrieval is too weak to support an answer.",
    deliverables: [
      "Ingestion, chunking and embeddings",
      "Vector store setup and retrieval tuning",
      "Citations on every answer, relevance floors",
      "Latency work: routing, parallel pre-processing",
    ],
    proof: { label: "Git Guide — docs assistant", href: "/work/git-guide" },
    turnaround: "2–4 weeks",
  },
  {
    slug: "aeo",
    name: "AEO — answer-engine optimisation",
    line: "Make your site legible to ChatGPT, Claude, Perplexity and AI search answers: structured data, crawl rules that admit assistant bots, and pages written to be quoted.",
    deliverables: [
      "Schema.org structured data",
      "robots, sitemap and llms.txt",
      "Long-form pages written to be cited",
    ],
    proof: { label: "Steno — structured data & crawl rules", href: "/work/steno" },
    turnaround: "1–2 weeks",
  },
  {
    slug: "security",
    name: "Security & compliance audit",
    line: "An application security review from someone who has spent five years breaking software before users could — plus readiness reviews against SOC 2, ISO 27001, GDPR and India's DPDP Act, so the formal audit holds no surprises.",
    deliverables: [
      "Authorization matrix, tested rather than assumed",
      "IDOR / enumeration and replay checks",
      "Security headers and dependency review",
      "SOC 2 · ISO 27001 · GDPR · DPDP gap assessment",
    ],
    proof: { label: "Squared Up — authz matrix", href: "/work/squared-up" },
    turnaround: "1–3 weeks",
  },
  {
    slug: "evaluation",
    name: "AI agent & LLM evaluation",
    line: "Before your AI feature ships, find out whether it actually works: reproducible eval environments, objective verifiers, and failure modes hunted on purpose.",
    deliverables: [
      "Dockerised, deterministic eval tasks",
      "Reference solutions as verifier controls",
      "Boundary and negative cases aimed at agents",
      "Pass/fail you can trust — no flakes",
    ],
    proof: { label: "How I test an agent", href: "/work/ai-agent-evaluation" },
    turnaround: "2–4 weeks for a first eval suite",
  },
  {
    slug: "testing",
    name: "Test automation",
    line: "Regression suites that run themselves and stay green for the right reasons — web, mobile and API, wired into CI.",
    deliverables: [
      "Playwright (web) and Maestro (mobile)",
      "PyTest frameworks, Page Object Model",
      "API and JMeter load testing",
      "CI integration and flake triage",
    ],
    proof: { label: "Record — 60–70% less manual effort", href: "#record" },
    turnaround: "2–4 weeks for a first suite in CI",
  },
];

export const services = serviceList.map((s) => ({
  ...s,
  href: mailto(`Project: ${s.name}`),
}));

export const servicesSection = {
  folio: `§ Services · ${services.length}`,
  link: { ...cta.upgrade, label: "Not sure which? Get yourself upgraded" },
};

// -----------------------------------------------------------------------------
// The Method band — how the speed and the proof fit together. AI is named in
// the Build step and nowhere else on purpose: it is the tool, not the pitch.
// -----------------------------------------------------------------------------
export const method = {
  folio: "§ How I work",
  intro:
    "AI writes a lot of my first drafts — code, tests, copy. That is what lets one engineer move at the pace of a team. What it does not do is decide when the work is right. That part is five years of test engineering, and it is built into every step.",
  steps: [
    {
      no: "Step 01 · Spec",
      h: "Pin down what done means.",
      p: "Before any code: the outcome, the edge cases, and the check that will prove it. On Squared Up that was a written domain spec whose worked examples later became the test suite.",
    },
    {
      no: "Step 02 · Build",
      h: "Build with Claude in the loop.",
      p: "Claude Code is my main engineering tool, set up per project: context engineering in a project memory file that records the architecture and its contracts, custom skills, MCP servers for the browser and outside tools, and sub-agents for parallel research and review. Plan first, then build, then check the result in a real browser. It is how a solo build covers frontend, backend and infrastructure without cutting corners.",
    },
    {
      no: "Step 03 · Verify",
      h: "Prove it, don't eyeball it.",
      p: "Property-based tests on money math, schema guardrails on agent output, relevance floors on retrieval, verifiers checked against a reference solution. AI speeds up the writing; the checks make it safe to ship.",
    },
    {
      no: "Step 04 · Ship",
      h: "Ship small, then widen.",
      p: "Dockerised, deployed, observable — and honest about scope: what shipped, what is parked, and why. Then the next loop starts from real use instead of guesses.",
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
    slug: "shway",
    name: "Shway",
    tag: "Landing page for a social-plans app",
    status: "Live · letshway.com",
    card:
      "The marketing site for Shway, “Tinder for your plans”. The hero is a swipe deck you can actually drag, flick and match with, followed by scroll-driven storytelling and an autoplay gallery that pauses when you look at it. GSAP with ScrollTrigger, Draggable and SplitText over Lenis smooth scroll, in hand-written HTML, CSS and JavaScript with no build step.",
    meta: [
      ["Stack", "HTML · CSS · vanilla JS · GSAP"],
      ["Motion", "ScrollTrigger · Draggable · SplitText · Lenis"],
      ["Hosted", "Vercel"],
    ],
    links: { live: "https://www.letshway.com", repo: null },
    lede:
      "A landing page that makes the pitch by letting you do it. Shway is “Tinder for your plans”, so the hero is a deck of plan cards you can drag, flick and match with — the product's core gesture, playable before the download.",
    problem: [
      "An app-store landing page has one job, getting the download, and one problem: the product lives on a phone, and a visitor on a laptop has never touched it. Screenshots describe the swipe; they do not let you feel it.",
      "The rebuild also had to be a drop-in replacement for the page before it: the same contact endpoint and fields, the same `/event-details/` share links that open the app, analytics on the store buttons — while getting faster, more accessible and properly marked up for search.",
    ],
    approach: {
      p: [
        "No framework and no build step: one HTML document, one stylesheet, one `main.js`, and GSAP's plugins loaded as vendor scripts. Every effect is progressive enhancement — each init function checks for GSAP and for `prefers-reduced-motion` first, so the page is complete and usable before, or without, any animation.",
        "Lenis handles smooth scrolling and is driven from GSAP's own ticker, with `ScrollTrigger.update` on every Lenis scroll event — one clock for both, so scroll-linked animation never drifts against the scroll position.",
      ],
      diagram: `index.html · site.css · main.js       no build step
      │
      │  vendor: gsap · ScrollTrigger · Draggable · SplitText
      │          lenis · canvas-confetti
      ▼
main.js — one IIFE, one init per section
  guard:  hasGsap?   prefers-reduced-motion?
      │
      ├─ initDeck      Draggable swipe deck · velocity flick
      │                JOIN / NOPE stamps · "You Matched!" reveal
      ├─ introHero     SplitText word reveal after fonts.ready
      ├─ initHow       IntersectionObserver drives the phone screen
      ├─ initGallery   autoplay belt with named pause "holds"
      ├─ initStats     ScrollTrigger count-up, once
      ├─ initStories   CSS animationend is the autoplay timer
      ├─ initNavSpy    scroll-spy + sliding nav indicator
      ├─ initVideo     Vimeo iframe loads only while open
      └─ initContact   validate, then POST to the existing backend
      │
      ▼
Lenis smooth scroll ── driven by gsap.ticker ── ScrollTrigger.update

/event-details/:slug ──► shway:// deep link ──► store fallback after 2s`,
    },
    decisions: [
      {
        n: "01",
        h: "The hero is the product's gesture, not a picture of it.",
        p: "The deck is six plan cards on GSAP `Draggable`. Release velocity is smoothed on every drag frame (`0.8 × current + 0.2 × previous`), so a short, fast flick decides a card just as a long drag past 110px does. Drag right and a JOIN stamp fades in, left and NOPE does; a miss snaps back on an elastic ease. A match opens a “You Matched!” card through a `clip-path` circle reveal with confetti — and fires an analytics event, so the toy is also measured.",
      },
      {
        n: "02",
        h: "Motion is an enhancement, never a dependency.",
        p: "Every animated init checks `hasGsap` and `prefers-reduced-motion` before doing anything. With reduced motion the deck still works — buttons and arrow keys decide cards instantly — the gallery becomes a plain snap carousel with no autoplay, the testimonials stop rotating, and the typed text appears whole. Nothing is hidden behind an animation that might not run.",
      },
      {
        n: "03",
        h: "Autoplay that knows when to stop.",
        p: "The gallery belt scrolls itself and pauses for named reasons — hover, touch, keyboard focus, mouse drag, an arrow nudge, the tab being hidden, the belt being off-screen. Each reason is held and released independently, so one ending never restarts the belt while another still applies. Keyboard focus only counts when it is `:focus-visible`, because a tap also focuses the track and would otherwise freeze it.",
      },
      {
        n: "04",
        h: "One clock for scroll and animation.",
        p: "Lenis is advanced from `gsap.ticker` with lag smoothing off, and every Lenis scroll event calls `ScrollTrigger.update`. Two independent animation loops would let scroll-triggered motion run a frame behind the scroll; one shared ticker keeps them in step. The video modal stops Lenis while it is open and restarts it on close.",
      },
      {
        n: "05",
        h: "A redesign that breaks nothing it replaced.",
        p: "The contact form posts the same fields to the same backend endpoint as before, and `/event-details/<slug>` share links still try the `shway://` deep link first, falling back to the App Store or Play Store after two seconds. A redesign that quietly breaks inbound links and lead capture is a regression, however good it looks.",
      },
      {
        n: "06",
        h: "Heavy assets load on demand.",
        p: "The Vimeo iframe has no `src` until the modal opens and is blanked again on close. Gallery and section images are lazy-loaded; only the first deck card's image is preloaded, because it is the largest thing above the fold.",
      },
    ],
    proof: {
      p: "The page is live, and everything here can be checked in its source.",
      bullets: [
        "**Structured data** — a JSON-LD graph with `Organization`, `WebSite`, `MobileApplication` and an eight-question `FAQPage` that matches the eight FAQ entries on the page.",
        "**Crawl surface** — `robots.txt`, `sitemap.xml`, a canonical URL and full Open Graph tags.",
        "**Accessible interaction** — the deck is a labelled, focusable region that answers to arrow keys; only the top card is exposed to assistive tech; a polite live region announces skips and matches; Escape closes the match dialog.",
        "**Form validation without a library** — required fields are checked on submit and marked `aria-invalid`, focus moves to the first problem, and the status line says what to fix.",
        "**Deployed on Vercel** behind HSTS.",
      ],
    },
    scope: null,
    shot: {
      src: "/work/shway-site.png",
      w: 1600,
      h: 866,
      alt: "The Shway landing page hero: the headline “Done going solo?”, App Store and Google Play badges, and a draggable plan card for morning tennis in Cubbon Park, Bengaluru, with skip and like buttons beneath it.",
      cap: "The live hero. The card is the top of a six-card deck — drag it, flick it, or use the buttons and arrow keys.",
    },
  },

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
    "This is how I build test tasks for AI coding agents that give the same result every time. I also talk about which parts of my five years in testing still help when there is more than one right answer.",
  meta: [
    ["Role", "QA Engineer for AI Agent Evaluation (contract)"],
    ["Since", "March 2026"],
    ["Unit of work", "A task in Docker with a verifier"],
  ],
  links: { live: null, repo: null },
  lede:
    "For five years all my tests used one simple rule. If you run a test two times you get the same answer. Coding agents do not follow that rule. Most of what I know as a tester still works but first I had to change what a pass means.",
  problem: [
    "So the first thing you asked is why agents are hard to test. With normal software one input gives one correct output. That makes a test a simple check that two values are equal. An agent can give many correct outputs. Two agents can solve the same task in different ways with different commands and different files and both can be right. If I check the transcript I fail good work. If I check nothing I only measure a feeling.",
    "The second problem is worse to me because you cannot see it. When a run fails you do not know at first who is wrong. It can be the agent or it can be the environment. Maybe a network call was flaky or a file stayed behind from the last trial. Maybe the clock was off or a version moved. If I do not remove these things the score tells you about my setup and not about the model.",
  ],
  approach: {
    p: [
      "You also asked what I actually make. I make tasks and each task has four parts which always go together. There is a written spec and a Docker environment. There is a reference solution and a set of automated tests that decide pass or fail. If one part is missing it is not an evaluation. It is only a story.",
      "The reference solution is not there as documentation. It is the control. I run the tests against a solution that I know is good. If the tests fail on it then the tests are wrong and not the agent. I find that out before anyone blames the agent for my mistake.",
    ],
    diagram: `task/
├── spec.md            what the agent must do in plain words
│                      the way a real ticket would read
│
├── environment/
│   └── Dockerfile     pinned base image
│                      pinned dependencies
│                      a clean container for each trial
│                      no network while the agent works
│
├── solution/          the reference solution which shows
│                      the task can be solved and which
│                      the tests run against first
│
└── tests/             the verifier
                       checks the result and the files
                       never the transcript or the route
                       same result every run or it does not ship`,
  },
  decisions: [
    {
      n: "01",
      h: "How do I check the work when there is more than one right way?",
      p: "I check the result and not the steps. When the agent stops my tests look at what is true. Does the endpoint give back the right shape? Does the file have the right content? Did the process exit clean and did the migration run? I do not care which commands got it there. This lets two good approaches both pass and a wrong result still fails. It is the same idea as when you test behaviour and not the implementation.",
    },
    {
      n: "02",
      h: "How do I make the results the same every time?",
      p: "I do not hope for it. I build it. I pin the base image and the version of every dependency. The agent gets no network while it works. Each trial gets a clean container and nothing carries over from the last run. I take out every cause of change that is not the agent. So when a run fails it can only mean one thing.",
    },
    {
      n: "03",
      h: "What kind of cases do I write?",
      p: "I aim at the places where agents really break. One is a long task where the agent loses track halfway through. Another is when the agent guesses the state of the environment and does not check it. The third is how it recovers when a tool call fails. I write boundary and negative and exploratory cases for these. A task that only tests the happy path tells you nothing new because the model was already trained on happy paths.",
    },
    {
      n: "04",
      h: "What do I do with a flaky test?",
      p: "To me a flaky test is a broken test. If a test fails one run in twenty it is worse than no test. It turns noise from the environment into a score and the score looks real. So I fix the flake or I pull the task out. I do not run it again and again until it goes green.",
    },
    {
      n: "05",
      h: "How do I know a task is not too easy or too hard?",
      p: "I use the reference solution to measure it. If every agent passes a task with no effort it tells you nothing. If no agent can pass it that also tells you nothing. The reference shows how much work the task really is. That way my set has easy and hard tasks and does not all sit at the easy end which is what happens when you only write what is quick to write.",
    },
  ],
  proof: {
    p: "The last thing you asked was what still works from normal testing and what does not. Here is my honest list.",
    bullets: [
      "**Still works:** boundary analysis and negative cases and equivalence partitioning. I still ask what the inputs really look like before I write a single check.",
      "**Still works:** I treat the test environment like production code. It is pinned and you can reproduce it. Someone reviews it and someone owns it.",
      "**Still works:** I do not trust a green run that I never saw fail. If a test has not shown that it can fail it is not proof of anything.",
      "**Does not work:** exact match checks. There is a set of right answers and not only one value.",
      "**Does not work:** one run as proof. The agent does not give the same output each time so the pass or fail rule must stay stable across many runs. Only then does one result mean something.",
      "**New for me:** the reference solution as a control on the tests. It is the closest thing I have to a unit test for the test.",
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

// -----------------------------------------------------------------------------
// The Systems band — the system-design showcase. Like `ventures`, it is a
// projection of `caseStudies`: the diagram and the decision headlines are read
// from the case study, so the two cannot drift apart. Only `concerns` (the
// chips) is written here, and each one names something the case study covers.
// -----------------------------------------------------------------------------
export const systems = {
  folio: "§ System design",
  intro:
    "Fast is only useful if the shape is right. Three of the systems above, drawn out — the boundaries, the data flow, and the decisions that hold them together. Each links to the full case study.",
  picks: [
    {
      slug: "squared-up",
      concerns: [
        "Modular monolith",
        "Framework-free domain core",
        "Idempotent mutations",
        "Derived, never stored, state",
        "Authz matrix as tests",
      ],
    },
    {
      slug: "equity-crew",
      concerns: [
        "Parallel fan-out",
        "Schema-first output",
        "Guardrail and retry loop",
        "Preflight validation",
      ],
    },
    {
      slug: "git-guide",
      concerns: [
        "Query routing",
        "Async pre-processing",
        "Relevance floor",
        "Local embeddings · $0 to run",
      ],
    },
  ],
};

export const systemDesigns = systems.picks.map(({ slug, concerns }) => {
  const c = caseStudies.find((s) => s.slug === slug);
  return {
    slug,
    name: c.name,
    tag: c.tag,
    concerns,
    diagram: c.approach.diagram,
    decisions: c.decisions.map((d) => d.h),
  };
});

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
    "Full-stack, end to end: the interface, the API, the data, the AI layer, and the test-and-deploy chain that keeps it all running.",
  education: {
    school: "SRM Institute of Science and Technology",
    detail: "B.E. Computer Engineering · 2017–2021",
  },
  groups: [
    {
      h: "Frontend",
      items: ["Next.js", "React", "GSAP · ScrollTrigger", "Lenis", "three.js", "Framer Motion", "HTML / CSS"],
    },
    {
      h: "Backend",
      items: ["Python", "Django / DRF", "Node.js", "JavaScript", "REST / OpenAPI"],
    },
    {
      h: "Data",
      items: ["PostgreSQL", "Supabase", "Redis", "Vector DBs · ChromaDB", "MongoDB / NoSQL"],
    },
    {
      h: "AI",
      items: [
        "Claude Code · skills · MCP",
        "Sub-agents · context engineering",
        "Agentic RAG",
        "CrewAI multi-agent",
        "Embeddings",
        "LLM / agent evaluation",
      ],
    },
    {
      h: "Testing & Automation",
      items: [
        "Playwright",
        "Maestro",
        "PyTest · Hypothesis",
        "Selenium · Appium",
        "JMeter",
        "Postman / RestAssured",
      ],
    },
    {
      h: "DevOps & Delivery",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions · Jenkins",
        "Vercel",
        "Grafana",
        "JIRA · TestRail",
      ],
    },
  ],
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
