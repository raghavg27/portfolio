import { roles } from "@/data/content";
import withBold from "@/components/withBold";

export default function Record() {
  return (
    <section id="record">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">§ The record</span>
          <h2>
            Where I&apos;ve <em>shipped quality</em>.
          </h2>
        </div>

        <div className="record stagger">
          {roles.map((r) => (
            <article className="role" key={r.co}>
              <div className="meta">
                <div className="co">{r.co}</div>
                <div className="rl">{r.role}</div>
                <div className="dt">{r.dates}</div>
                <div className="loc">{r.loc}</div>
              </div>
              <ul>
                {r.bullets.map((b, i) => (
                  <li key={i}>{withBold(b)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
