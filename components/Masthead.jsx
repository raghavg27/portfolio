import { site, nav, cta } from "@/data/content";
import CtaButton from "@/components/CtaButton";
import MobileNav from "@/components/MobileNav";

export default function Masthead() {
  return (
    <header className="masthead">
      <div className="wrap">
        <div>
          <span className="wordmark">
            <span className="a1">{site.name.first}</span>
            <span className="a2">{site.name.last}</span>
          </span>
          <span className="tagline">{site.tagline}</span>
        </div>
        <div className="mast-actions">
          <nav className="main" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>
          <CtaButton item={cta.hire} variant="primary" className="mast-cv" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
