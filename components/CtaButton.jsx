// Shared button-styled anchor for every call to action on the site.
// `item` is one of the entries in `cta` in data/content.js.
export default function CtaButton({ item, variant = "secondary", className = "" }) {
  const attrs = item.download
    ? { download: true }
    : item.external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

  return (
    <a
      className={["btn", `btn-${variant}`, className].filter(Boolean).join(" ")}
      href={item.href}
      data-arw={item.arw}
      {...attrs}
    >
      {item.label}
      {item.arw ? <span className="arw">{item.arw}</span> : null}
    </a>
  );
}
