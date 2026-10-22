/**
 * The PR benchmark comment as one PNG, drawn in distilled.cloud/bench's
 * style (cream panels, Fraunces headline, teal bars). Rendered with a local
 * headless Chrome, like the website's social cards (website/scripts/og.ts).
 *
 * Every block has a fixed height, so the page height is known before Chrome
 * runs and `--window-size` captures it exactly.
 */
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { delimiter, join } from "node:path";
import type { CiProgram, CiRun } from "./ci-report.ts";
import { fmtBytes, fmtMs, median, REPO } from "./util.ts";

const C = {
  bg: "#fbf7f2",
  panel: "#f4eee6",
  line: "#e3d8c9",
  line2: "#cdbfab",
  fg: "#1d1620",
  fg2: "#5b4f62",
  fg3: "#8b7f94",
  teal: "#1f8f80",
  teal2: "#176e62",
  rose: "#c2453a",
  rose2: "#e07a62",
};

const WIDTH = 920;
const PAD = 40;
const SCALE = 2;
const MAX_ROWS = 24;

const H = {
  top: 32,
  head: 150,
  stats: 104,
  gap: 26,
  title: 40,
  bundleRow: 58,
  runtimeHeader: 30,
  runtimeRow: 46,
  footer: 44,
};

const FONT = join(
  REPO,
  "website/node_modules/@fontsource-variable/fraunces/files/fraunces-latin-full",
);

const esc = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");

/** Relative change in percent, or undefined when main has no number. */
const change = (head: number | undefined, base: number | undefined) =>
  head === undefined || base === undefined || base === 0 ? undefined : ((head - base) / base) * 100;

const pctText = (p: number) => `${p > 0 ? "+" : p < 0 ? "−" : "±"}${Math.abs(p).toFixed(1)}%`;

/** Same thresholds as the report: sizes are exact, heap moves a little with GC. */
const moved = (kind: "bundle" | "heap", head?: number, base?: number) => {
  if (head === undefined || base === undefined) return false;
  const d = Math.abs(head - base);
  return kind === "bundle" ? d >= 20 && d >= base * 0.002 : d >= 32 * 1024 && d >= base * 0.08;
};

const chip = (p: number | undefined, isMoved: boolean, hasBase: boolean) => {
  if (!hasBase) return "";
  if (p === undefined) return `<span class="chip">new</span>`;
  if (!isMoved) return `<span class="chip good">same</span>`;
  return `<span class="chip ${p > 0 ? "bad" : "good"}">${pctText(p)}</span>`;
};

const bar = (head: number, base: number | undefined, max: number, worse: boolean) => {
  const w = (n: number) => `${Math.max(1.5, (n / max) * 100).toFixed(2)}%`;
  return `<div class="bar">${base !== undefined ? `<span class="ghost" style="width:${w(base)}"></span>` : ""}<span class="fill ${worse ? "worse" : ""}" style="width:${w(head)}"></span></div>`;
};

interface Row {
  readonly name: string;
  readonly h: CiProgram;
  readonly b?: CiProgram;
}

export const imageHtml = (
  head: CiRun,
  base: CiRun | undefined,
): { html: string; height: number } => {
  const all: Row[] = Object.keys(head.programs)
    .sort()
    .map((name) => ({ name, h: head.programs[name]!, b: base?.programs[name] }));

  const rank = (get: (p: CiProgram) => number | undefined) => (a: Row, b: Row) =>
    Math.abs(change(get(b.h), b.b && get(b.b)) ?? 0) -
      Math.abs(change(get(a.h), a.b && get(a.b)) ?? 0) || (get(b.h) ?? 0) - (get(a.h) ?? 0);

  const gz = (p: CiProgram) => p.bundle?.gzip;
  const heap = (p: CiProgram) => p.runtime?.importHeap;
  const bundled = all.filter((r) => gz(r.h) !== undefined).sort(rank(gz));
  const probed = all.filter((r) => heap(r.h) !== undefined).sort(rank(heap));
  const bundleRows = bundled.slice(0, MAX_ROWS);
  const runtimeRows = probed.slice(0, MAX_ROWS);

  // Headline numbers.
  const summary = (
    rows: Row[],
    get: (p: CiProgram) => number | undefined,
    kind: "bundle" | "heap",
  ) => {
    const changes = rows.flatMap((r) => {
      const c = change(get(r.h), r.b && get(r.b));
      return c === undefined ? [] : [c];
    });
    const hit = rows.filter((r) => moved(kind, get(r.h), r.b && get(r.b)));
    const worst = hit.reduce<number | undefined>((m, r) => {
      const c = change(get(r.h), get(r.b!))!;
      return m === undefined || Math.abs(c) > Math.abs(m) ? c : m;
    }, undefined);
    return { compared: changes.length, hit: hit.length, worst };
  };
  const sb = summary(bundled, gz, "bundle");
  const sh = summary(probed, heap, "heap");
  const worse = (sb.worst ?? 0) > 0 && sb.hit > 0 ? true : (sh.worst ?? 0) > 0 && sh.hit > 0;
  const better = ((sb.worst ?? 0) < 0 && sb.hit > 0) || ((sh.worst ?? 0) < 0 && sh.hit > 0);

  const headline = !base
    ? `Benchmarks for <em class="t">this PR</em>.`
    : worse && better
      ? `Some SDKs got <em class="r">bigger</em>.`
      : worse
        ? `This PR makes SDKs <em class="r">bigger</em>.`
        : better
          ? `This PR makes SDKs <em class="t">smaller</em>.`
          : `Same size as <em class="t">main</em>.`;

  const stat = (s: ReturnType<typeof summary>, label: string, abs: string) => {
    if (!base || s.compared === 0)
      return `<div class="stat"><b>${abs}</b><small>${label}</small></div>`;
    if (s.hit === 0)
      return `<div class="stat"><b class="t">same</b><small>${label} · all ${s.compared} unchanged</small></div>`;
    return `<div class="stat"><b class="${s.worst! > 0 ? "r" : "t"}">${pctText(s.worst!)}</b><small>${label} · ${s.hit} of ${s.compared} ${s.worst! > 0 ? "bigger" : "smaller"}, max</small></div>`;
  };
  const medGz = median(bundled.map((r) => gz(r.h)!));
  const medHeap = median(probed.map((r) => heap(r.h)!));
  const medAdded = median(probed.flatMap((r) => (r.h.runtime ? [r.h.runtime.addedP50Us] : [])));

  const sha = (s: string) => s.slice(0, 9);
  const sub = base
    ? `PR ${sha(head.sha)} vs main ${sha(base.sha)} · ${all.length} programs · offline, canned responses`
    : `PR ${sha(head.sha)} · ${all.length} programs · no main run to compare yet`;

  const maxGz = Math.max(...bundleRows.flatMap((r) => [gz(r.h)!, (r.b && gz(r.b)) ?? 0]));
  const maxHeap = Math.max(...runtimeRows.flatMap((r) => [heap(r.h)!, (r.b && heap(r.b)) ?? 0]));

  const bundleHtml = bundleRows
    .map((r) => {
      const h = gz(r.h)!;
      const b = r.b && gz(r.b);
      const p = change(h, b);
      const m = moved("bundle", h, b);
      return `<li class="row" style="height:${H.bundleRow - 6}px">
  <div class="name"><code>${esc(r.name)}</code><span>${esc(r.h.label)}</span></div>
  ${bar(h, b, maxGz, m && (p ?? 0) > 0)}
  <div class="num"><b>${fmtBytes(h)}</b>${chip(p, m, !!base)}</div>
</li>`;
    })
    .join("\n");

  const runtimeHtml = runtimeRows
    .map((r) => {
      const rt = r.h.runtime!;
      const b = r.b?.runtime?.importHeap;
      const p = change(rt.importHeap, b);
      const m = moved("heap", rt.importHeap, b);
      return `<li class="rrow" style="height:${H.runtimeRow}px">
  <div class="name"><code>${esc(r.name)}</code></div>
  <div class="cell"><b>${fmtBytes(rt.importHeap)}</b>${chip(p, m, !!base)}</div>
  <div class="cell">${rt.addedP50Us.toFixed(1)} µs</div>
  <div class="cell">${fmtMs(rt.firstCallMs)}</div>
  ${bar(rt.importHeap, b, maxHeap, m && (p ?? 0) > 0)}
</li>`;
    })
    .join("\n");

  const more = (shown: number, total: number) =>
    total > shown ? ` · ${total - shown} more in the numbers below` : "";

  const height =
    H.top +
    H.head +
    H.stats +
    H.gap +
    H.title +
    bundleRows.length * H.bundleRow +
    (runtimeRows.length
      ? H.gap + H.title + H.runtimeHeader + runtimeRows.length * H.runtimeRow
      : 0) +
    H.footer;

  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Fraunces;font-weight:100 900;src:url("file://${FONT}-normal.woff2") format("woff2")}
@font-face{font-family:Fraunces;font-style:italic;font-weight:100 900;src:url("file://${FONT}-italic.woff2") format("woff2")}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:${WIDTH}px;height:${height}px;overflow:hidden}
body{background:${C.bg};background-image:radial-gradient(${C.line} 1px,transparent 1.2px);background-size:22px 22px;color:${C.fg};
  font-family:ui-sans-serif,system-ui,"Segoe UI",Inter,Roboto,"Helvetica Neue",sans-serif;padding:${H.top}px ${PAD}px 0;-webkit-font-smoothing:antialiased}
code,.mono,.chip,.num,.cell,.foot,.eyebrow,small{font-family:ui-monospace,"SF Mono","JetBrains Mono","DejaVu Sans Mono",Menlo,monospace}
.head{height:${H.head}px}
.eyebrow{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:${C.fg3}}
h1{font-family:Fraunces,Georgia,serif;font-variation-settings:"WONK" 0,"SOFT" 0;font-weight:400;font-size:46px;letter-spacing:-.02em;line-height:1.1;margin:14px 0 12px}
em{font-style:italic}.t{color:${C.teal}}.r{color:${C.rose}}
.sub{font-size:15px;color:${C.fg2}}
.stats{height:${H.stats - 8}px;display:grid;grid-template-columns:repeat(3,1fr);border:1px solid ${C.line};border-radius:10px;background:${C.panel};overflow:hidden}
.stat{padding:16px 18px;border-left:1px solid ${C.line}}.stat:first-child{border-left:0}
.stat b{display:block;font-family:Fraunces,Georgia,serif;font-variation-settings:"WONK" 0;font-weight:400;font-size:34px;color:${C.teal};line-height:1.1}
.stat b.r{color:${C.rose}}
.stat small{display:block;margin-top:6px;font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:${C.fg3};white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.gap{height:${H.gap}px}
.title{height:${H.title}px;display:flex;align-items:baseline;gap:12px}
.title h2{font-family:Fraunces,Georgia,serif;font-variation-settings:"WONK" 0;font-weight:400;font-size:24px}
.title span{font-family:ui-monospace,monospace;font-size:11px;color:${C.fg3}}
ul{list-style:none}
.row{margin-bottom:6px;display:grid;grid-template-columns:270px 1fr 170px;align-items:center;gap:18px;padding:0 16px;background:${C.panel};border:1px solid ${C.line};border-radius:10px}
.name{display:flex;flex-direction:column;gap:3px;min-width:0}
.name code{font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.name span{font-family:ui-monospace,monospace;font-size:11px;color:${C.fg3};white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bar{position:relative;height:9px;border-radius:99px;border:1px solid ${C.line};background:${C.bg};overflow:hidden}
.bar span{position:absolute;top:0;bottom:0;left:0;border-radius:99px}
.bar .ghost{background:color-mix(in oklab,${C.teal} 26%,transparent)}
.bar .fill{background:linear-gradient(90deg,${C.teal2},${C.teal})}
.bar .fill.worse{background:linear-gradient(90deg,${C.rose},${C.rose2})}
.num{display:flex;align-items:center;justify-content:flex-end;gap:10px;font-size:13px}
.num b,.cell b{font-weight:600}
.chip{display:inline-block;font-size:11px;padding:2px 8px;border-radius:99px;border:1px solid ${C.line2};color:${C.fg2}}
.chip.good{border-color:color-mix(in oklab,${C.teal} 45%,${C.line2});color:${C.teal2}}
.chip.bad{border-color:color-mix(in oklab,${C.rose} 55%,${C.line2});color:${C.rose};font-weight:600}
.panel{border:1px solid ${C.line};border-radius:10px;background:${C.panel};overflow:hidden}
.rhead,.rrow{display:grid;grid-template-columns:230px 170px 90px 80px 1fr;align-items:center;gap:14px;padding:0 16px}
.rhead{height:${H.runtimeHeader}px;font-family:ui-monospace,monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:${C.fg3};border-bottom:1px solid ${C.line}}
.rrow{border-bottom:1px solid ${C.line}}.rrow:last-child{border-bottom:0}
.cell{display:flex;align-items:center;gap:8px;font-size:13px}
.foot{height:${H.footer}px;display:flex;align-items:center;font-size:11px;color:${C.fg3}}
</style></head><body>
<div class="head">
  <div class="eyebrow">Distilled benchmarks · ${base ? "this PR vs main" : "this PR"}</div>
  <h1>${headline}</h1>
  <div class="sub mono">${esc(sub)}</div>
</div>
<div class="stats">
  ${stat(sb, "Bundle, gzip", fmtBytes(medGz))}
  ${stat(sh, "Import heap", fmtBytes(medHeap))}
  <div class="stat"><b>${Number.isFinite(medAdded) ? `${medAdded.toFixed(1)} µs` : "—"}</b><small>Added latency · median p50</small></div>
</div>
<div class="gap"></div>
<div class="title"><h2>Bundle size</h2><span>1 auth + 1 operation · gzip · faint bar = main${more(bundleRows.length, bundled.length)}</span></div>
<ul>${bundleHtml}</ul>
${
  runtimeRows.length
    ? `<div class="gap"></div>
<div class="title"><h2>Memory and latency</h2><span>import heap bar · faint bar = main${more(runtimeRows.length, probed.length)}</span></div>
<div class="panel"><div class="rhead"><span>Program</span><span>Import heap</span><span>Added p50</span><span>1st call</span><span></span></div>
<ul>${runtimeHtml}</ul></div>`
    : ""
}
<div class="foot">${esc(`${head.env.node} · ${head.env.cpus} vCPU · ${head.createdAt.slice(0, 10)} · measured in ${(head.durationMs / 1000).toFixed(0)} s`)}</div>
</body></html>`;
  return { html, height };
};

const findChrome = (): string => {
  if (process.env.CHROMIUM) return process.env.CHROMIUM;
  for (const dir of (process.env.PATH ?? "").split(delimiter))
    for (const bin of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser"])
      if (dir && existsSync(join(dir, bin))) return join(dir, bin);
  const cache = join(process.env.HOME ?? "", ".cache", "puppeteer", "chrome");
  if (existsSync(cache))
    for (const v of readdirSync(cache).sort().reverse()) {
      const bin = join(cache, v, "chrome-linux64", "chrome");
      if (existsSync(bin)) return bin;
    }
  throw new Error("no Chrome found; set CHROMIUM=/path/to/chrome");
};

export const renderImage = async (head: CiRun, base: CiRun | undefined, out: string) => {
  const { html, height } = imageHtml(head, base);
  const dir = mkdtempSync(join(tmpdir(), "bench-img-"));
  const src = join(dir, "index.html");
  writeFileSync(src, html);
  const args = [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    `--force-device-scale-factor=${SCALE}`,
    "--disable-lcd-text",
    "--font-render-hinting=none",
    "--allow-file-access-from-files",
    `--window-size=${WIDTH},${height}`,
    `--screenshot=${out}`,
    "--virtual-time-budget=2000",
    `--user-data-dir=${join(dir, "profile")}`,
    `file://${src}`,
  ];
  await new Promise<void>((resolve, reject) => {
    const proc = spawn(findChrome(), args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (d) => (stderr += d));
    proc.on("error", reject);
    proc.on("close", (code) =>
      code === 0 && existsSync(out)
        ? resolve()
        : reject(new Error(stderr.slice(-2000) || `chrome exited ${code}`)),
    );
  });
  rmSync(dir, { recursive: true, force: true });
};
