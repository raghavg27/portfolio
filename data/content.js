// -----------------------------------------------------------------------------
// Edit everything about the site from this one file.
// Text, ventures, roles, skills and contacts all live here.
// In role bullets, wrap emphasis in **double asterisks** to render it bold.
// -----------------------------------------------------------------------------

export const site = {
  name: { first: "Raghav", last: "Gupta" },
  tagline: "Engineer · Builder · Remote, worldwide",
  issue: "Vol. 01 · No. 02",
  github: "https://github.com/raghavg27",
  email: "raghavg2705@gmail.com",
  linkedin: "https://linkedin.com/in/raghavg27/",
  phone: "+91 98184 76527",
  phoneHref: "+919818476527",
  year: 2026,
};

export const nav = [
  { label: "Believe", href: "#believe" },
  { label: "Building", href: "#building" },
  { label: "Record", href: "#record" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const ticker = [
  { strong: "Open to select engagements", rest: " — Remote, worldwide", dot: true },
  { rest: "Delhi–NCR · India" },
  { rest: "SDET → Solo builder" },
  { rest: "Vol. 01 · No. 02" },
];

export const hero = {
  eyebrowLeft: "SDET → Solo builder",
  eyebrowRight: "Remote · Worldwide",
  lede:
    "Software quality engineer by training — automation, load, and release readiness at scale. Now I build and ship AI products end-to-end: agentic RAG systems, WhatsApp automations, and UPI-native tools.",
  figures: [
    { n: "4 yrs", lines: ["Owning quality", "across QA & SDET roles"] },
    { n: "0", lines: ["Critical production defects", "across feature releases"] },
    { n: "60–70%", lines: ["Manual test effort removed", "through automation"] },
  ],
  nowBuilding: [
    { label: "Squared Up", href: "#building" },
    { label: "Git Guide", href: "#building" },
    { label: "Agent Intelligence", href: "#building" },
  ],
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

export const ventures = [
  {
    status: "In design",
    name: "Squared Up",
    tag: "UPI expense-splitting",
    desc:
      "A UPI-native app for splitting group expenses without the awkward chase. Monzo-inspired design system, built around how people actually settle up.",
    meta: [
      ["Stage", "Design system · prototyping"],
      ["For", "Groups splitting costs"],
    ],
    repo: null,
  },
  {
    status: "Shipped · open source",
    name: "Git Guide",
    tag: "Agentic RAG · GitLab docs",
    desc:
      "A production-grade multi-agent RAG assistant that answers GitLab questions straight from the official docs — grounded, cited, and hallucination-free. CrewAI agents, local ChromaDB retrieval, async smart routing, Streamlit UI — and it runs entirely on free tiers.",
    meta: [
      ["Stack", "Python · CrewAI · ChromaDB"],
      ["Cost", "$0 to operate"],
    ],
    repo: "https://github.com/raghavg27/git-guide",
  },
  {
    status: "Nearest revenue",
    name: "Agent Intelligence",
    tag: "WhatsApp AI agents",
    desc:
      "An AI receptionist and sales agent for local service businesses — productized on WhatsApp, with UPI deposit collection and a consultative conversation flow. The agent is its own live demo.",
    meta: [
      ["Stage", "Building · early customers"],
      ["For", "Local service businesses"],
    ],
    repo: null,
  },
];

export const roles = [
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
        "JUnit",
        "Page Object Model",
        "JMeter",
        "Postman / RestAssured",
      ],
    },
    {
      h: "AI / Backend",
      items: ["CrewAI · Agentic RAG", "ChromaDB", "Django", "Node.js", "REST / OpenAPI"],
    },
    {
      h: "DevOps & CI/CD",
      items: [
        "Jenkins",
        "Docker",
        "Kubernetes",
        "Git / GitHub",
        "Grafana",
        "JIRA · TestRail · Confluence",
      ],
    },
  ],
};

export const contact = {
  closing: "One engineer, a bias for shipping, and a stubborn belief that quality compounds.",
};
