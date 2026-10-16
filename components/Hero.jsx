import { hero, site, cta } from "@/data/content";
import CtaButton from "@/components/CtaButton";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap stagger">
        <div className="kicker">
          <span className="eyebrow">{hero.eyebrowLeft}</span>
          <span className="eyebrow accent">{hero.eyebrowRight}</span>
        </div>

        <h1>
          AI made building fast. I make it fast <em>and right</em>.
        </h1>

        <p className="lede">{hero.lede}</p>

        <div className="cta">
          <div className="cta-row">
            <CtaButton item={cta.upgrade} variant="primary" />
            <CtaButton item={cta.whatsapp} />
            <CtaButton item={cta.services} variant="ghost" />
          </div>
          <p className="cta-note">{cta.heroNote}</p>
        </div>

        <div className="figures ruled">
          {hero.figures.map((f) => (
            <div className="fig" key={f.n}>
              <div className="n">
                <span>{f.n}</span>
              </div>
              <div className="l">
                {f.lines.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < f.lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="nowline">
          <div className="row">
            <b>Now building</b>
            {hero.nowBuilding.map((item, i) => (
              <span key={item.label}>
                <a href={item.href}>{item.label}</a>
                {i < hero.nowBuilding.length - 1 ? " · " : ""}
              </span>
            ))}
          </div>
          <div className="row">
            <b>Selected work</b>
            <a
              className="ghlink"
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/raghavg27 <span className="arw">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
