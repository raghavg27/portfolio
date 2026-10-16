import { Fragment } from "react";
import { building, ventures } from "@/data/content";

export default function Building() {
  return (
    <section id="building" className="ventures">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">§ Selected work · {building.folioCount} projects</span>
          <h2>
            Work I&apos;ve <em>shipped</em>, and how.
          </h2>
        </div>

        <div className="ventures-grid stagger">
          {ventures.map((v) => (
            <div className="venture" key={v.slug}>
              <div className="status">
                <span className="pip" />
                {v.status}
              </div>
              <h3>
                <a href={`/work/${v.slug}`}>{v.name}</a>
              </h3>
              <div className="tag">{v.tag}</div>
              <p>{v.desc}</p>
              <dl>
                {v.meta.map(([k, val]) => (
                  <Fragment key={k}>
                    <dt>{k}</dt>
                    <dd>{val}</dd>
                  </Fragment>
                ))}
              </dl>
              <div className="venture-links">
                <a className="repo cs-link" href={`/work/${v.slug}`}>
                  Read the case study <span className="arw">→</span>
                </a>
                {v.live ? (
                  <a
                    className="repo"
                    href={v.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit site <span className="arw">↗</span>
                  </a>
                ) : null}
                {v.repo ? (
                  <a
                    className="repo"
                    href={v.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub <span className="arw">↗</span>
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        <div className="ventures-foot reveal">
          <a href={building.link.href}>
            {building.link.label} <span className="arw">{building.link.arw}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
