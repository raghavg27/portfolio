import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="folio">§ Stack</span>
          <h2>
            The <em>stack</em> I build on.
          </h2>
        </div>

        <div className="skills-wrap">
          <div className="skills-note reveal">
            {skills.note}
            <div className="edu">
              <div className="d">{skills.education.school}</div>
              <div className="m">{skills.education.detail}</div>
            </div>
          </div>

          <div className="skill-cols stagger">
            {skills.groups.map((g) => (
              <div className="skill-group" key={g.h}>
                <div className="h">{g.h}</div>
                <ul>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
