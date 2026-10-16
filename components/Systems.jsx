import { systems, systemDesigns } from "@/data/content";

// The system-design showcase. Native <details> keeps it a server component:
// the first system is open, the rest expand on click with no JavaScript.
export default function Systems() {
  return (
    <section id="systems" className="systems">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">{systems.folio}</span>
          <h2>
            How the pieces <em>fit</em>.
          </h2>
        </div>

        <p className="intro reveal">{systems.intro}</p>

        <div className="systems-list reveal">
          {systemDesigns.map((s, i) => (
            <details className="system" key={s.slug} open={i === 0}>
              <summary>
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                <span className="nm">{s.name}</span>
                <span className="tg">{s.tag}</span>
                <span className="tog" aria-hidden="true" />
              </summary>

              <div className="system-body">
                <ul className="concerns">
                  {s.concerns.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>

                <figure className="diagram">
                  <pre>{s.diagram}</pre>
                </figure>

                <ol className="system-decisions">
                  {s.decisions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ol>

                <a className="now-link" href={`/work/${s.slug}`}>
                  The full case study <span className="arw">→</span>
                </a>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
