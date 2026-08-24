"use client";

// Save-as-PDF fallback for anyone who lands on /resume instead of taking the
// pre-rendered PDF in /public. The print stylesheet in globals.css strips the
// page chrome before printing.
export default function PrintButton() {
  return (
    <button type="button" className="btn btn-secondary" onClick={() => window.print()}>
      Print
    </button>
  );
}
