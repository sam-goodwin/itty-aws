/**
 * The PR benchmark comment as one PNG that looks like the bench dashboard
 * (benches/dashboard): the same stylesheet, the same `lineChart`, the same
 * headline cards. Each chart is main's recent runs (from the CI history the
 * push-to-main job keeps) with this PR as the last point, in the shaded
 * branch zone.
 *
 * Rendered with a local headless Chrome, like the website's social cards:
 * one `--dump-dom` pass reads the page height, a second takes the shot.
 */
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { delimiter, join } from "node:path";
import { barChart, lineChart } from "../../dashboard/src/charts.js";
import type { CiProgram, CiRun } from "./ci-report.ts";
import { median, REPO } from "./util.ts";

const DASH = join(REPO, "benches", "dashboard");
const WIDTH = 1240;
const SCALE = 2;

// Formatting and noise exactly as the dashboard's METRICS (src/main.js).
const fmtBytes = (n: number | undefined) => {
  if (n === undefined || !Number.isFinite(n)) return "—";
  const a = Math.abs(n);
  if (a < 1000) return `${Math.round(n)} B`;
  if (a < 1e6) return `${(n / 1e3).toFixed(1)} KB`;
  return `${(n / 1e6).toFixed(a < 1e7 ? 2 : 1)} MB`;
};
const fmtUs = (n: number | undefined) =>
  n === undefined || !Number.isFinite(n) ? "—" : `${n.toFixed(1)} µs`;
const fmtCount = (n: number | undefined) =>
  n === undefined || !Number.isFinite(n) ? "—" : Math.round(n).toLocaleString("en-US");

interface Metric {
  readonly id: string;
  readonly label: string;
  readonly how: string;
  readonly read: (p: CiProgram) => number | undefined;
  readonly format: (n: number | undefined) => string;
  readonly noise: (prev: number) => number;
}

const METRICS: Metric[] = [
  {
    id: "bundle",
    label: "Bundle size",
    how: "Minified rolldown bundle of a program that sets up auth and calls 1 operation, gzip -9.",
    read: (p) => p.bundle?.gzip,
    format: fmtBytes,
    noise: (prev) => prev * 0.003,
  },
  {
    id: "speed",
    label: "Runtime speed",
    how: "Added latency: p50 of a call against a mocked HTTP response minus p50 of a bare mocked round trip.",
    read: (p) => p.runtime?.addedP50Us,
    format: fmtUs,
    // CI runners are noisier than the dashboard's machine.
    noise: (prev) => Math.max(3, prev * 0.3),
  },
  {
    id: "memory",
    label: "Runtime memory",
    how: "Import heap: V8 heapUsed after importing the SDK modules, minus before (fresh Node, gc twice, Effect preloaded).",
    read: (p) => p.runtime?.importHeap,
    format: fmtBytes,
    noise: (prev) => Math.max(32 * 1024, prev * 0.08),
  },
  {
    id: "objects",
    label: "Objects at import",
    how: "Live JS objects added by importing credentials + 1 service module (v8.queryObjects(Object) after gc, in its own process).",
    read: (p) => p.runtime?.importObjects,
    format: fmtCount,
    noise: (prev) => prev * 0.01,
  },
];

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);
const short = (sha: string) => sha.slice(0, 9);

/** Median per program, over `keys` the run has. */
const valueOf = (run: CiRun, m: Metric, keys: string[]) => {
  const values = keys.flatMap((k) => {
    const p = run.programs[k];
    const v = p && m.read(p);
    return v === undefined || !Number.isFinite(v) ? [] : [v];
  });
  return values.length ? median(values) : undefined;
};

interface Change {
  from: number;
  to: number;
  diff: number;
  pct: number;
  noise: boolean;
}

/** Change from `before` to `run`, over the programs both have (as the dashboard does). */
const change = (run: CiRun, before: CiRun | undefined, m: Metric, keys: string[]) => {
  if (!before) return undefined;
  const shared = keys.filter((k) => run.programs[k] && before.programs[k]);
  const from = valueOf(before, m, shared);
  const to = valueOf(run, m, shared);
  if (from === undefined || to === undefined) return undefined;
  return {
    from,
    to,
    diff: to - from,
    pct: from ? ((to - from) / from) * 100 : 0,
    noise: Math.abs(to - from) < m.noise(from),
  } satisfies Change;
};

const deltaHtml = (c: Change | undefined, m: Metric, big = false) => {
  if (!c) return `<span class="delta">—</span>`;
  const cls = c.noise ? "flat" : c.diff < 0 ? "good" : "bad";
  const sign = c.diff > 0 ? "+" : c.diff < 0 ? "−" : "±";
  const arrow = c.noise ? "≈" : c.diff < 0 ? "▼" : "▲";
  return `<span class="delta ${cls}${big ? " big" : ""}">${arrow} ${sign}${Math.abs(c.pct).toFixed(1)}%<small>${sign}${m.format(Math.abs(c.diff))}</small></span>`;
};

export interface ImageMeta {
  readonly pr?: string;
  readonly title?: string;
}

export const imageHtml = (
  head: CiRun,
  base: CiRun | undefined,
  history: CiRun[],
  meta: ImageMeta = {},
): string => {
  // Main's runs oldest first, ending at the base this PR is compared with.
  const mains = [...history, ...(base ? [base] : [])].filter(
    (r, i, all) => all.findIndex((x) => x.sha === r.sha) === i,
  );
  if (base)
    mains.push(
      mains.splice(
        mains.findIndex((r) => r.sha === base.sha),
        1,
      )[0]!,
    );
  const runs = [...mains.slice(-30), head];
  // Every point is the median over the programs this PR measured, so the line
  // compares like with like even though main measures every SDK.
  const keys = Object.keys(head.programs);
  const branch = meta.pr ? `PR #${meta.pr}` : "this PR";
  // The PR is one column wide: keep the zone label short.
  const zone = "PR";

  const cards = METRICS.map((m) => {
    const v = valueOf(head, m, keys);
    return `<div class="card">
      <div class="label">${esc(m.label)}</div>
      <div class="value">${esc(m.format(v))}</div>
      <div class="sub">median per program</div>
      ${base ? `<div class="vs"><span>since main <code>${esc(short(base.sha))}</code></span>${deltaHtml(change(head, base, m, keys), m, true)}</div>` : `<div class="vs"><span>no main run to compare yet</span></div>`}
    </div>`;
  }).join("");

  const charts = METRICS.map((m) => {
    const points = runs.map((r, i) => {
      const c = change(r, runs[i - 1], m, keys);
      return {
        value: valueOf(r, m, keys),
        label: r === head ? branch : short(r.sha).slice(0, 7),
        branch: r === head,
        cls: !c ? "" : c.noise ? "flat" : c.diff < 0 ? "good" : "bad",
        tip: "",
        id: r.sha,
      };
    });
    return `<section class="panel chart-panel">
      <div class="chart-head">
        <h3>${esc(m.label)} <span class="muted">· median per program · lower is better</span></h3>
        <div class="how">${esc(m.how)}</div>
      </div>
      <div class="chart">${lineChart(points, { format: m.format, branchLabel: zone })}</div>
    </section>`;
  }).join("");

  // Per program, as the dashboard's bar panels: what moved vs main, or every
  // program's size when nothing did.
  const bars = METRICS.filter((m) => m.id === "bundle" || m.id === "memory")
    .map((m) => {
      const names = keys.filter((k) => m.read(head.programs[k]!) !== undefined);
      const moved = names.flatMap((k) => {
        const h = m.read(head.programs[k]!)!;
        const b = base?.programs[k] && m.read(base.programs[k]!);
        if (b === undefined || Math.abs(h - b) < m.noise(b)) return [];
        const pct = ((h - b) / b) * 100;
        return [
          {
            label: k,
            value: Math.abs(h - b),
            sub: `${h > b ? "+" : "−"}${Math.abs(pct).toFixed(1)}% · ${h > b ? "bigger" : "smaller"}`,
            color: h > b ? "var(--rose)" : "var(--teal)",
          },
        ];
      });
      moved.sort((x, y) => y.value - x.value);
      const rows = moved.length
        ? moved
        : names
            .map((k) => ({
              label: k,
              value: m.read(head.programs[k]!)!,
              sub: "",
              color: undefined,
            }))
            .sort((x, y) => y.value - x.value);
      const title = moved.length
        ? `${m.label} <span class="muted">· ${moved.length} program${moved.length === 1 ? "" : "s"} changed vs main</span>`
        : `${m.label} <span class="muted">· per program${base ? " · none changed vs main" : ""}</span>`;
      return `<section class="panel chart-panel">
      <div class="chart-head"><h3>${title}</h3></div>
      <div class="chart bars">${barChart(rows, { format: m.format })}</div>
    </section>`;
    })
    .join("");

  const css = readFileSync(join(DASH, "src", "style.css"), "utf8").replaceAll(
    'url("/fonts/',
    `url("file://${join(DASH, "public", "fonts")}/`,
  );

  return `<!doctype html><html data-theme="light"><head><meta charset="utf-8"><style>${css}
html,body{width:${WIDTH}px;overflow:hidden}
header{position:static}
.charts{grid-template-columns:1fr 1fr}
.foot{font-family:var(--font-mono,ui-monospace,monospace);font-size:11px;color:var(--fg-3);padding:4px 28px 20px}
</style></head><body>
<header><div class="bar"><span class="brand"><svg class="mark" viewBox="0 0 32 32" aria-hidden="true"> <path d="M 6.00 6.00 L 12.60 6.00 L 12.60 3.50 L 10.10 3.50 L 10.10 1.00 L 21.90 1.00 L 21.90 3.50 L 19.40 3.50 L 19.40 6.00 L 26.00 6.00 L 26.00 12.60 L 28.50 12.60 L 28.50 10.10 L 31.00 10.10 L 31.00 21.90 L 28.50 21.90 L 28.50 19.40 L 26.00 19.40 L 26.00 26.00 L 19.40 26.00 L 19.40 28.50 L 21.90 28.50 L 21.90 31.00 L 10.10 31.00 L 10.10 28.50 L 12.60 28.50 L 12.60 26.00 L 6.00 26.00 L 6.00 19.40 L 3.50 19.40 L 3.50 21.90 L 1.00 21.90 L 1.00 10.10 L 3.50 10.10 L 3.50 12.60 L 6.00 12.60 Z" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linejoin="miter" /> <circle cx="16" cy="16" r="1.9" fill="var(--accent)" /> </svg><span class="word">Distilled</span><span class="eyebrow">benchmarks · ${esc(branch)} vs main</span></span></div></header>
<main id="app">
  <section class="latest">
    <div class="latest-run">
      <div class="eyebrow">${esc(branch)}</div>
      <div class="commit"><span class="sha">${esc(short(head.sha))}</span><span class="tag branch">${esc(branch)}</span></div>
      <div class="subject">${esc(meta.title ?? head.ref)}</div>
      <div class="when">${keys.length} programs · ${mains.length} main run${mains.length === 1 ? "" : "s"} on the chart · offline, canned responses</div>
    </div>
    <div class="cards">${cards}</div>
  </section>
  <div class="charts">${charts}</div>
  <div class="charts bars-grid">${bars}</div>
</main>
<div class="foot">${esc(`node ${head.env.node} · ${head.env.cpus} vCPU · ${head.createdAt.slice(0, 10)} · measured in ${(head.durationMs / 1000).toFixed(0)} s`)}</div>
<script>document.title = "h=" + Math.ceil(document.querySelector(".foot").getBoundingClientRect().bottom + scrollY)</script>
</body></html>`;
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

const chrome = (args: string[]) =>
  new Promise<string>((resolve, reject) => {
    const proc = spawn(findChrome(), args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    proc.stdout.on("data", (d) => (stdout += d));
    proc.stderr.on("data", (d) => (stderr += d));
    proc.on("error", reject);
    proc.on("close", (code) =>
      code === 0
        ? resolve(stdout)
        : reject(new Error(stderr.slice(-2000) || `chrome exited ${code}`)),
    );
  });

export const renderImage = async (
  head: CiRun,
  base: CiRun | undefined,
  history: CiRun[],
  out: string,
  meta: ImageMeta = {},
) => {
  const dir = mkdtempSync(join(tmpdir(), "bench-img-"));
  const src = join(dir, "index.html");
  writeFileSync(src, imageHtml(head, base, history, meta));
  const common = [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--hide-scrollbars",
    "--disable-lcd-text",
    "--font-render-hinting=none",
    "--allow-file-access-from-files",
    "--virtual-time-budget=2000",
    `--user-data-dir=${join(dir, "profile")}`,
  ];
  const dom = await chrome([
    ...common,
    `--window-size=${WIDTH},2000`,
    "--dump-dom",
    `file://${src}`,
  ]);
  const height = Number(/<title>h=(\d+)<\/title>/.exec(dom)?.[1] ?? 2000);
  await chrome([
    ...common,
    `--force-device-scale-factor=${SCALE}`,
    `--window-size=${WIDTH},${height}`,
    `--screenshot=${out}`,
    `file://${src}`,
  ]);
  rmSync(dir, { recursive: true, force: true });
  if (!existsSync(out)) throw new Error(`chrome wrote no screenshot to ${out}`);
};
