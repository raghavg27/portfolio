import { method } from "@/data/content";

export default function Method() {
  return (
    <section id="method" className="credo">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">{method.folio}</span>
          <h2>
            AI for the speed. <em>Proof</em> for the rest.
          </h2>
        </div>

        <p className="intro reveal">{method.intro}</p>

        <div className="laws steps stagger ruled">
          {method.steps.map((step) => (
            <div className="law" key={step.no}>
              <div className="no">{step.no}</div>
              <h3>{step.h}</h3>
              <p>{step.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
