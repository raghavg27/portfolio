"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cta, nav, site } from "@/data/content";
import CtaButton from "@/components/CtaButton";

// The only navigation available below 560px, where nav.main is hidden.
// The panel carries its own close button and brand because it is fixed-position:
// the masthead toggle scrolls away with the page. Smooth scrolling is handled
// here rather than in Motion.jsx, which binds `nav.main a` once at mount.
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const panelRef = useRef(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus({ preventScroll: true });
  }, []);

  // Lock background scroll and close on Escape while the panel is open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    panelRef.current?.focus({ preventScroll: true });

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.removeProperty("overflow");
    };
  }, [open, close]);

  const onLinkClick = (e) => {
    const id = e.currentTarget.getAttribute("href");
    if (!id || !id.startsWith("#")) return; // real route: let it navigate

    const target = document.querySelector(id);
    if (!target) return;

    e.preventDefault();
    close();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Measure after the scroll lock has lifted.
    requestAnimationFrame(() => {
      const y = target.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
    });
  };

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className="menu-btn"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        <span className="bars" aria-hidden="true">
          <span />
          <span />
        </span>
        Menu
      </button>

      <div
        id="mobile-nav"
        ref={panelRef}
        tabIndex={-1}
        inert={!open}
        className={open ? "mobile-nav open" : "mobile-nav"}
      >
        <div className="mobile-nav-head">
          <span className="wordmark">
            <span className="a1">{site.name.first}</span>
            <span className="a2">{site.name.last}</span>
          </span>
          <button
            type="button"
            className="menu-btn is-open"
            aria-label="Close menu"
            onClick={close}
          >
            <span className="bars" aria-hidden="true">
              <span />
              <span />
            </span>
            Close
          </button>
        </div>

        <div className="mobile-nav-inner">
          <nav className="mobile-links" aria-label="Sections">
            {nav.map((n, i) => (
              <a key={n.href} href={n.href} onClick={onLinkClick}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                {n.label}
              </a>
            ))}
            <a href="/work">
              <span className="idx">{String(nav.length + 1).padStart(2, "0")}</span>
              Case studies
            </a>
            <a href={site.resume} download>
              <span className="idx">{String(nav.length + 2).padStart(2, "0")}</span>
              CV
            </a>
          </nav>

          <div className="mobile-cta">
            <CtaButton item={cta.upgrade} variant="primary" />
            <CtaButton item={cta.whatsapp} />
          </div>

          <div className="mobile-meta">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          </div>
        </div>
      </div>
    </>
  );
}
