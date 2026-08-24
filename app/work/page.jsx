import { Fragment } from "react";

import { allStudies, cta, site } from "@/data/content";
import Colophon from "@/components/Colophon";
import CtaButton from "@/components/CtaButton";
import Motion from "@/components/Motion";
import PageBar from "@/components/PageBar";

export const metadata = {
  title: "Case studies — Raghav Gupta",
  description:
    "How five systems were built and proved: AI agent evaluation environments, a UPI-native payments core tested with Hypothesis, multi-agent equity research, agentic RAG over GitLab docs, and a writing standard for AI prose.",
  alternates: { canonical: "/work" },
  openGraph: {
    type: "website",
    url: "/work",
    siteName: `${site.name.first} ${site.name.last}`,
    title: "Case studies — Raghav Gupta",
    description:
      "Long-form writeups of the systems behind the portfolio — the decisions, the trade-offs, and how each one is proved to work.",
  },
};

export default function WorkIndex() {
  return (
    <>
      <Motion />
      <PageBar backLabel="← Raghav Gupta">
        <CtaButton item={cta.email} />
        <CtaButton item={cta.resumeShort} variant="primary" />
      </PageBar>

      <div className="worklist">
        <div className="wrap">
          <header className="worklist-head">
            <span className="folio">§ Case studies · {allStudies.length}</span>
            <h1>
              The long version of <em>what I build</em>.
            </h1>
            <p className="study-lede">
              Cards are for scanning. These are the writeups — what the problem
              actually was, which decisions were load-bearing, and how each system
              is proved to work rather than asserted to.
            </p>
          </header>

          <div className="worklist-rows stagger">
            {allStudies.map((s, i) => (
              <a className="workrow" href={`/work/${s.slug}`} key={s.slug}>
                <div className="meta">
                  <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                  <span className="nm">{s.name}</span>
                  <span className="tg">{s.tag}</span>
                  <span className="st">{s.status}</span>
                </div>
                <div className="body">
                  <p>{s.lede}</p>
                  <dl>
                    {s.meta.map(([k, v]) => (
                      <Fragment key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </Fragment>
                    ))}
                  </dl>
                  <span className="go">
                    Read the case study <span className="arw">→</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Colophon />
    </>
  );
}
