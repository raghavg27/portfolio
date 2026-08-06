"use client";

import { useEffect } from "react";

export default function Motion() {
  useEffect(() => {
    const bar = document.getElementById("progress");

    const onScroll = () => {
      if (!bar) return;
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      bar.style.width = p * 100 + "%";
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealables = document.querySelectorAll(".reveal, .stagger, .ruled");
    if (reduced) {
      revealables.forEach((el) => el.classList.add("in"));
    } else {
      revealables.forEach((el) => io.observe(el));
    }

    const onNavClick = (ev) => {
      const a = ev.currentTarget;
      const id = a.getAttribute("href");
      if (id && id.startsWith("#")) {
        const t = document.querySelector(id);
        if (t) {
          ev.preventDefault();
          const y = t.getBoundingClientRect().top + window.scrollY - 64;
          window.scrollTo({ top: y, behavior: reduced ? "auto" : "smooth" });
        }
      }
    };
    const navLinks = document.querySelectorAll(
      'nav.main a, .nowline a[href^="#"]'
    );
    navLinks.forEach((a) => a.addEventListener("click", onNavClick));

    return () => {
      document.removeEventListener("scroll", onScroll);
      io.disconnect();
      navLinks.forEach((a) => a.removeEventListener("click", onNavClick));
    };
  }, []);

  return <div id="progress" />;
}
