import { Fragment } from "react";
import { ventures } from "@/data/content";

export default function Building() {
  return (
    <section id="building" className="ventures">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">§ In progress · 3 active</span>
          <h2>
            What I&apos;m <em>building</em> right now.
          </h2>
        </div>

        <div className="ventures-grid stagger">
          {ventures.map((v) => (
            <div className="venture" key={v.name}>
              <div className="status">
                <span className="pip" />
                {v.status}
              </div>
              <h3>{v.name}</h3>
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
          ))}
        </div>
      </div>
    </section>
  );
}
