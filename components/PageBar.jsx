// The slim bar at the top of the pages that sit outside the long scroll
// (/work and /work/[slug]). Reuses the `.resume-bar` styles from globals.css —
// the CV page has the same job and the same shape.
export default function PageBar({
  backHref = "/",
  backLabel = "← Back to the site",
  children,
}) {
  return (
    <div className="resume-bar">
      <div className="wrap">
        <a className="resume-back" href={backHref}>
          {backLabel}
        </a>
        {children ? <div className="cta-row">{children}</div> : null}
      </div>
    </div>
  );
}
