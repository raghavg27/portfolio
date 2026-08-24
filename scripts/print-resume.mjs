// Renders /resume to public/Raghav-Gupta-Resume.pdf using headless Chrome over
// the DevTools protocol. The CLI's --print-to-pdf ignores the CSS @page rule
// (it hardcodes US Letter), so the paper size is set through preferCSSPageSize.
//
//   npm run build && npx next start -p 3210 &
//   node scripts/print-resume.mjs            # optional arg: page URL
//
// Prints the laid-out CV height so the print block in app/globals.css can be
// tuned against a target page count.

import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const URL_TO_PRINT = process.argv[2] || "http://localhost:3210/resume";
const OUT = process.argv[3] || "public/Raghav-Gupta-Resume.pdf";
const PORT = 9333;
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const chrome = spawn(CHROME, [
  "--headless",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${PORT}`,
  "about:blank",
]);

async function waitForBrowser() {
  for (let i = 0; i < 100; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return;
    } catch {}
    await sleep(150);
  }
  throw new Error("Chrome did not expose a DevTools endpoint");
}

function connect(wsUrl) {
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();

  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    const entry = pending.get(msg.id);
    if (!entry) return;
    pending.delete(msg.id);
    msg.error ? entry.reject(new Error(msg.error.message)) : entry.resolve(msg.result);
  });

  const open = new Promise((resolve, reject) => {
    ws.addEventListener("open", resolve, { once: true });
    ws.addEventListener("error", reject, { once: true });
  });

  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const msgId = ++id;
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });

  return { open, send, close: () => ws.close() };
}

try {
  await waitForBrowser();

  const created = await fetch(
    `http://127.0.0.1:${PORT}/json/new?${URL_TO_PRINT}`,
    { method: "PUT" }
  ).then((r) => r.json());

  const { open, send, close } = connect(created.webSocketDebuggerUrl);
  await open;

  await send("Page.enable");
  for (let i = 0; i < 100; i++) {
    const { result } = await send("Runtime.evaluate", {
      expression: "document.readyState",
    });
    if (result.value === "complete") break;
    await sleep(100);
  }
  await send("Runtime.evaluate", {
    expression: "document.fonts.ready.then(() => true)",
    awaitPromise: true,
  });

  // A4 minus the 12mm @page margins, in CSS px at 96dpi.
  await send("Emulation.setDeviceMetricsOverride", {
    width: 703,
    height: 1032,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await send("Emulation.setEmulatedMedia", { media: "print" });
  await sleep(300);

  const { result: metrics } = await send("Runtime.evaluate", {
    expression:
      "JSON.stringify({h: Math.round(document.querySelector('.cv').getBoundingClientRect().height), w: window.innerWidth})",
    returnByValue: true,
  });
  const { h, w } = JSON.parse(metrics.value);

  const { data } = await send("Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: true,
  });
  writeFileSync(OUT, Buffer.from(data, "base64"));

  // A4 at 96dpi minus the 12mm @page margins ≈ 1032 CSS px of usable height.
  console.log(`cv height: ${h}px at ${w}px wide → ~${(h / 1032).toFixed(2)} A4 pages`);
  console.log(`wrote ${OUT}`);

  await send("Browser.close").catch(() => {});
  close();
} finally {
  chrome.kill();
}
