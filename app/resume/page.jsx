import { Fragment } from "react";

import { cta, resume, roles, site, skills } from "@/data/content";
import CtaButton from "@/components/CtaButton";
import PrintButton from "@/components/PrintButton";
import withBold from "@/components/withBold";

export const metadata = {
  title: "Raghav Gupta — CV",
  description:
    "Curriculum vitae for Raghav Gupta — SDET and AI agent evaluation engineer. Five years of test design across mobile, web and warehouse robotics; now evaluating and building AI systems.",
  alternates: { canonical: "/resume" },
};

export default function Resume() {
  return (
    <>
      <div className="resume-bar">
        <div className="wrap">
          <a className="resume-back" href="/">
            ← Back to the site
          </a>
          <div className="cta-row">
            <CtaButton item={cta.resume} variant="primary" />
            <PrintButton />
          </div>
        </div>
      </div>

      <article className="cv">
        <header className="cv-head">
          <h1>
            {site.name.first} {site.name.last}
          </h1>
          <div className="rl">{resume.headline}</div>
          <div className="contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              in/raghavg27
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              github.com/raghavg27
            </a>
            <span>{site.location}</span>
          </div>
        </header>

        <section className="cv-sec">
          <h2>Profile</h2>
          <p>{resume.summary}</p>
        </section>

        <section className="cv-sec">
          <h2>What I bring</h2>
          <ul>
            {resume.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section className="cv-sec">
          <h2>Experience</h2>
          {roles.map((r) => (
            <div className="cv-job" key={r.co}>
              <div className="top">
                <span className="co">{r.co}</span>
                <span className="when">
                  {r.dates} · {r.loc}
                </span>
              </div>
              <div className="rl">{r.role}</div>
              <ul>
                {r.bullets.map((b, i) => (
                  <li key={i}>{withBold(b)}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="cv-sec">
          <h2>Selected projects</h2>
          {resume.projects.map((p) => (
            <div className="cv-proj" key={p.name}>
              <div className="top">
                <span className="nm">{p.name}</span>
                <span className="tg">{p.tag}</span>
                <a
                  className="lk"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.url.replace(/^https?:\/\//, "")} ↗
                </a>
              </div>
              <p>{p.line}</p>
            </div>
          ))}
        </section>

        <section className="cv-sec">
          <h2>Toolkit</h2>
          <div className="cv-skills">
            {skills.groups.map((g) => (
              <div key={g.h}>
                <div className="h">{g.h}</div>
                <div className="items">{g.items.join(" · ")}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="cv-sec">
          <h2>Education</h2>
          <dl className="cv-grid">
            <dt>Degree</dt>
            <dd>
              {skills.education.detail}
              <br />
              {skills.education.school}
            </dd>
          </dl>
        </section>

        <section className="cv-sec">
          <h2>Availability</h2>
          <dl className="cv-grid">
            {resume.availability.map(([k, v]) => (
              <Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </Fragment>
            ))}
          </dl>
        </section>
      </article>
    </>
  );
}
