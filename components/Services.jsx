import { services, servicesSection } from "@/data/content";

// First section under the hero. Each card carries its own prefilled email and,
// where one exists, a link to the work on this site that proves the service.
export default function Services() {
  const { link } = servicesSection;

  return (
    <section id="services" className="services">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">{servicesSection.folio}</span>
          <h2>
            What I can <em>build for you</em>.
          </h2>
        </div>

        <div className="services-grid stagger">
          {services.map((s, i) => (
            <article className="service" key={s.slug}>
              <span className="ix">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.name}</h3>
              <p>{s.line}</p>
              <ul>
                {s.deliverables.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              {s.turnaround ? (
                <div className="turn">Typical turnaround · {s.turnaround}</div>
              ) : null}
              <div className="service-links">
                {s.proof ? (
                  <a className="proof-link" href={s.proof.href}>
                    {s.proof.label} <span className="arw">→</span>
                  </a>
                ) : null}
                <a className="ask" href={s.href}>
                  Ask about this <span className="arw">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="ventures-foot reveal">
          <a href={link.href}>
            {link.label} <span className="arw">{link.arw}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
