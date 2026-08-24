import { site, cta } from "@/data/content";
import CtaButton from "@/components/CtaButton";

export default function Colophon() {
  return (
    <footer id="contact" className="colophon">
      <div className="wrap">
        <p className="big reveal">
          One engineer, a bias for shipping, and a stubborn belief that{" "}
          <em>quality compounds</em>.
        </p>

        <div className="cta invert reveal">
          <div className="cta-row">
            <CtaButton item={cta.email} variant="primary" />
            <CtaButton item={cta.resume} />
            <CtaButton item={cta.linkedin} variant="ghost" />
          </div>
          <p className="cta-note">{cta.footerNote}</p>
        </div>

        <div className="colo-grid reveal">
          <div>
            <div className="k">Issue</div>
            <div className="v">
              {site.issue}
              <br />
              Remote, worldwide
            </div>
          </div>
          <div>
            <div className="k">Email</div>
            <div className="v">
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </div>
          <div>
            <div className="k">GitHub</div>
            <div className="v">
              <a href={site.github} target="_blank" rel="noopener noreferrer">
                github.com/raghavg27
              </a>
            </div>
          </div>
          <div>
            <div className="k">LinkedIn</div>
            <div className="v">
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                in/raghavg27
              </a>
            </div>
          </div>
          <div>
            <div className="k">Phone</div>
            <div className="v">
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </div>
          </div>
        </div>

        <div className="colo-foot">
          <span>© {site.year} Raghav Gupta</span>
          <span>Set in Fraunces, Newsreader &amp; Space Mono</span>
        </div>
      </div>
    </footer>
  );
}
