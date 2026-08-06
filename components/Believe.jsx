import { believe } from "@/data/content";

export default function Believe() {
  return (
    <section id="believe" className="credo">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">{believe.folio}</span>
          <h2>
            Quality is a <em>habit</em>, not a phase at the end.
          </h2>
        </div>

        <p className="intro reveal">{believe.intro}</p>

        <div className="laws stagger ruled">
          {believe.principles.map((law) => (
            <div className="law" key={law.no}>
              <div className="no">{law.no}</div>
              <h3>{law.h}</h3>
              <p>{law.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
