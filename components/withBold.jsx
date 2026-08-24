import { Fragment } from "react";

// Render **bold** markers inside a bullet string as <b> nodes.
// Asterisks must be balanced: odd-index parts are the emphasised ones.
export default function withBold(str) {
  const parts = str.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>
  );
}
