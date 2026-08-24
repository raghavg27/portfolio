import { Fragment } from "react";
import richText from "@/components/richText";

// Renders one entry from `allStudies` in data/content.js. Every block below the
// header is optional: a study with no diagram, plate, scope or repo simply
// omits those elements rather than rendering an empty shell.
export default function CaseStudy({ study, index, total, prev, next }) {
  const { links = {} } = study;
  const hasLinks = Boolean(links.live || links.repo);

  return (
    <article className="study">
      <header className="study-head">
        <div className="study-folio">
          <span className="folio">
            § Case study {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="study-status">{study.status}</span>
        </div>

        <h1>{study.name}</h1>
        <div className="rl">{study.tag}</div>
        <p className="study-lede">{study.lede}</p>

        <dl className="study-meta">
          {study.meta.map(([k, v]) => (
            <Fragment key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </Fragment>
          ))}
        </dl>

        {hasLinks ? (
          <div className="study-links">
            {links.live ? (
              <a
                className="btn btn-primary"
                href={links.live}
                data-arw="↗"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit the site <span className="arw">↗</span>
              </a>
            ) : null}
            {links.repo ? (
              <a
                className="btn btn-secondary"
                href={links.repo}
                data-arw="↗"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the code <span className="arw">↗</span>
              </a>
            ) : null}
          </div>
        ) : null}
      </header>

      {study.problem ? (
        <section className="study-sec">
          <h2>The problem</h2>
          {study.problem.map((p, i) => (
            <p key={i}>{richText(p)}</p>
          ))}
        </section>
      ) : null}

      {study.approach ? (
        <section className="study-sec">
          <h2>How it works</h2>
          {study.approach.p.map((p, i) => (
            <p key={i}>{richText(p)}</p>
          ))}
          {study.approach.diagram ? (
            <figure className="diagram">
              <pre>{study.approach.diagram}</pre>
            </figure>
          ) : null}
        </section>
      ) : null}

      {study.shot ? (
        <figure className={study.shot.portrait ? "plate plate-portrait" : "plate"}>
          <img
            src={study.shot.src}
            alt={study.shot.alt}
            width={study.shot.w}
            height={study.shot.h}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{study.shot.cap}</figcaption>
        </figure>
      ) : null}

      {study.decisions ? (
        <section className="study-sec">
          <h2>Decisions worth defending</h2>
          <ol className="decisions">
            {study.decisions.map((d) => (
              <li key={d.n}>
                <span className="n">{d.n}</span>
                <h3>{d.h}</h3>
                <p>{richText(d.p)}</p>
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      {study.proof ? (
        <section className="study-sec">
          <h2>Proving it works</h2>
          {study.proof.p ? <p>{richText(study.proof.p)}</p> : null}
          <ul className="proof">
            {study.proof.bullets.map((b, i) => (
              <li key={i}>{richText(b)}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {study.scope ? (
        <section className="study-sec">
          <h2>What shipped, what did not</h2>
          <div className="scope">
            <div>
              <div className="h">Built</div>
              <ul>
                {study.scope.built.map((s, i) => (
                  <li key={i}>{richText(s)}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="h">Deferred</div>
              <ul>
                {study.scope.deferred.map((s, i) => (
                  <li key={i}>{richText(s)}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <nav className="study-foot" aria-label="More case studies">
        {prev ? (
          <a className="prev" href={`/work/${prev.slug}`}>
            <span className="k">← Previous</span>
            <span className="v">{prev.name}</span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a className="next" href={`/work/${next.slug}`}>
            <span className="k">Next →</span>
            <span className="v">{next.name}</span>
          </a>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
