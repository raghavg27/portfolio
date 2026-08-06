import { hero, site } from "@/data/content";

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrap stagger">
        <div className="kicker">
          <span className="eyebrow">{hero.eyebrowLeft}</span>
          <span className="eyebrow accent">{hero.eyebrowRight}</span>
        </div>

        <h1>
          I spent years being the last thing between a bug and production. Now I{" "}
          <em>ship the whole thing</em>.
        </h1>

        <p className="lede">{hero.lede}</p>

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
