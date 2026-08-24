import { now } from "@/data/content";

// Sits directly under the hero. The AI-evaluation work is the pivot the whole
// site argues for, so it gets the first section slot rather than waiting for
// the Record section three screens down.
export default function Now() {
  return (
    <section id="now" className="nowsec">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">{now.folio}</span>
          <h2>
            I test the AI coding agents <em>other people are about to trust</em>.
          </h2>
        </div>

        <div className="now-grid">
          <div className="now-lede reveal">
            <div className="now-meta">{now.meta}</div>
            <p>{now.lede}</p>
            <a className="now-link" href={now.link.href}>
              {now.link.label} <span className="arw">{now.link.arw}</span>
            </a>
          </div>

          <ol className="now-anatomy stagger ruled">
            {now.anatomy.map((a, i) => (
              <li key={a.k}>
                <span className="ix">{String(i + 1).padStart(2, "0")}</span>
                <span className="k">{a.k}</span>
                <span className="v">{a.v}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
