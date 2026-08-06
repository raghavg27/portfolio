import { ticker } from "@/data/content";

function Item({ item }) {
  return (
    <span>
      {item.dot ? <span className="dot" /> : null}
      {item.strong ? <span className="b">{item.strong}</span> : null}
      {item.rest}
    </span>
  );
}

export default function Ribbon() {
  // duplicated once for a seamless loop
  const loop = [...ticker, ...ticker];
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="marquee">
        {loop.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
