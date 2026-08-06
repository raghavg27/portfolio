import { site, nav } from "@/data/content";

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
        <nav className="main" aria-label="Primary">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
