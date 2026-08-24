import { Fragment } from "react";

// Case-study prose markers. A superset of components/withBold.jsx:
// **double asterisks** render bold, `backticks` render inline code, and the two
// nest — **`path/to/file.py`** is a bold code span. Bold is split first so an
// asterisk pair wrapping a code span is not swallowed by the backtick pass.
// Both markers must be balanced: odd-index parts are the marked ones.
function code(str, keyPrefix) {
  return str.split("`").map((chunk, i) =>
    i % 2 === 1 ? (
      <code className="ic" key={`${keyPrefix}-${i}`}>
        {chunk}
      </code>
    ) : (
      <Fragment key={`${keyPrefix}-${i}`}>{chunk}</Fragment>
    )
  );
}

export default function richText(str) {
  return str.split("**").map((part, i) =>
    i % 2 === 1 ? (
      <b key={i}>{code(part, i)}</b>
    ) : (
      <Fragment key={i}>{code(part, i)}</Fragment>
    )
  );
}
