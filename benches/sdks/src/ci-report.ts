/**
 * Markdown for the `Benchmarks` CI job: a PR run against the main run it is
 * compared with. GitHub renders the Mermaid `xychart-beta` blocks as charts in
 * PR comments and job summaries.
 */
import { fmtBytes, fmtMs } from "./util.ts";

export const MARKER = "<!-- distilled-bench -->";

export interface CiProgram {
  readonly pkg: string;
  readonly protocol: string;
  readonly label: string;
  bundle?: {
    readonly gzip: number;
    readonly bytes: number;
    readonly modules: number;
    readonly composition: { effect: number; core: number; sdk: number; other: number };
  };
  runtime?: {
    readonly importMs: number;
    readonly importHeap: number;
    readonly importObjects?: number;
    readonly firstCallMs: number;
    readonly firstCallHeap: number;
    readonly addedP50Us: number;
    readonly p50Us: number;
    readonly gcPer1k: number;
    readonly maxRss: number;
  };
}

export interface CiRun {
  readonly version: 1;
  readonly sha: string;
  readonly ref: string;
  readonly createdAt: string;
  /** `same-job` when a PR job measured main itself because no cached run existed. */
  readonly source?: string;
  readonly durationMs: number;
  readonly timings: Record<string, number>;
  readonly env: { node: string; cpus: number; cpu: string };
  readonly scope: {
    wide: boolean;
    changed: string[];
    bundle: string[];
    runtime: string[];
    untargeted: string[];
  };
  readonly baselines: {
    bundle: Record<string, { gzip: number; bytes: number }>;
    runtime: { effectImportMs: number; effectHeap: number; mockRoundtripP50Us: number };
  };
  readonly sizes: Record<string, { tarball: number; unpacked: number; files: number }>;
  readonly programs: Record<string, CiProgram>;
  readonly errors: string[];
}

interface Metric {
  readonly id: string;
  readonly title: string;
  readonly get: (p: CiProgram) => number | undefined;
  readonly fmt: (n: number) => string;
  /** A change is reported when both are exceeded: relative (fraction) and absolute. */
  readonly rel: number;
  readonly abs: number;
  /** Timings vary between runners; their changes are shown but never flagged red. */
  readonly noisy?: boolean;
}

const us = (n: number) => `${n.toFixed(1)} µs`;
const count = (n: number) => n.toLocaleString("en-US");

/**
 * Thresholds: sizes are deterministic, so any real change shows. Heap and
 * object counts move a little with GC timing. Latency and cold-start times
 * are measured on a different runner than main's, so only large moves count.
 */
export const METRICS: Metric[] = [
  {
    id: "bundle",
    title: "Bundle (gzip)",
    get: (p) => p.bundle?.gzip,
    fmt: fmtBytes,
    rel: 0.002,
    abs: 20,
  },
  {
    id: "heap",
    title: "Import heap",
    get: (p) => p.runtime?.importHeap,
    fmt: fmtBytes,
    rel: 0.08,
    abs: 32 * 1024,
  },
  {
    id: "objects",
    title: "Objects at import",
    get: (p) => p.runtime?.importObjects,
    fmt: count,
    rel: 0.01,
    abs: 20,
  },
  {
    id: "added",
    title: "Added latency (p50)",
    get: (p) => p.runtime?.addedP50Us,
    fmt: us,
    rel: 0.3,
    abs: 3,
    noisy: true,
  },
  {
    id: "import",
    title: "Import time",
    get: (p) => p.runtime?.importMs,
    fmt: fmtMs,
    rel: 0.25,
    abs: 2,
    noisy: true,
  },
  {
    id: "first",
    title: "First call",
    get: (p) => p.runtime?.firstCallMs,
    fmt: fmtMs,
    rel: 0.25,
    abs: 1,
    noisy: true,
  },
];

const pct = (head: number, base: number) =>
  base === 0 ? 0 : ((head - base) / Math.abs(base)) * 100;
const signed = (x: number, digits = 1) =>
  `${x > 0 ? "+" : x < 0 ? "−" : "±"}${Math.abs(x).toFixed(digits)}`;

type Verdict = "better" | "worse" | "same";
const verdict = (m: Metric, head: number, base: number): Verdict => {
  const d = head - base;
  if (Math.abs(d) < m.abs || Math.abs(d) < Math.abs(base) * m.rel) return "same";
  return d < 0 ? "better" : "worse";
};
const mark = (m: Metric, v: Verdict) =>
  v === "better" ? " 🟢" : v === "worse" ? (m.noisy ? " 🟡" : " 🔴") : "";

const cell = (m: Metric, head: CiProgram | undefined, base: CiProgram | undefined): string => {
  const h = head && m.get(head);
  if (h === undefined) return "—";
  const b = base && m.get(base);
  if (b === undefined) return m.fmt(h);
  const v = verdict(m, h, b);
  if (v === "same") return m.fmt(h);
  return `${m.fmt(h)} (${signed(pct(h, b))}%)${mark(m, v)}`;
};

const short = (sha: string) => sha.slice(0, 9);

/** One bar per changed program: PR as a percentage of main; 100 = unchanged. */
const chart = (m: Metric, rows: Array<[name: string, head: number, base: number]>): string => {
  const values = rows.map(([, h, b]) => Math.round((h / b) * 1000) / 10);
  const lo = Math.floor(Math.min(100, ...values) - 1);
  const hi = Math.ceil(Math.max(100, ...values) + 1);
  return [
    "```mermaid",
    "xychart-beta",
    `  title "${m.title}: PR as % of main (bar below the line = smaller)"`,
    `  x-axis [${rows.map(([n]) => JSON.stringify(n)).join(", ")}]`,
    `  y-axis "% of main" ${lo} --> ${hi}`,
    `  bar [${values.join(", ")}]`,
    `  line [${values.map(() => 100).join(", ")}]`,
    "```",
  ].join("\n");
};

export const report = (head: CiRun, base: CiRun | undefined, opts: { runUrl?: string } = {}) => {
  const names = Object.keys(head.programs).sort();
  const out: string[] = [MARKER, "## Benchmarks", ""];
  const took = `${(head.durationMs / 1000).toFixed(0)} s on ${head.env.cpus} vCPU`;
  out.push(
    base
      ? `PR \`${short(head.sha)}\` against main \`${short(base.sha)}\` (${base.source === "same-job" ? "measured in this job, on the same runner" : `main's cached run from ${base.createdAt.slice(0, 16).replace("T", " ")} UTC`}). ${names.length} programs, measured in ${took}.`
      : `PR \`${short(head.sha)}\`. No main run is cached yet, so there is nothing to compare with. ${names.length} programs, measured in ${took}.`,
    "",
  );

  // Headline: per metric, how many programs moved.
  const charts: string[] = [];
  if (base) {
    const lines: string[] = [];
    for (const m of METRICS) {
      const rows: Array<[string, number, number]> = [];
      let better = 0;
      let worse = 0;
      let compared = 0;
      for (const n of names) {
        const h = m.get(head.programs[n]!);
        const b = base.programs[n] && m.get(base.programs[n]!);
        if (h === undefined || b === undefined) continue;
        compared++;
        const v = verdict(m, h, b);
        if (v === "same") continue;
        if (v === "better") better++;
        else worse++;
        rows.push([n, h, b]);
      }
      if (compared === 0) continue;
      const moved = better + worse;
      lines.push(
        `| ${m.title}${m.noisy ? " ¹" : ""} | ${moved === 0 ? "no change" : `${better ? `${better} better` : ""}${better && worse ? ", " : ""}${worse ? `${worse} worse` : ""}`} | ${compared} |`,
      );
      if (moved > 0 && !m.noisy) charts.push(chart(m, rows));
    }
    out.push("| Metric | Change vs main | Programs |", "| --- | --- | ---: |", ...lines, "");
  }
  out.push(...charts.flatMap((c) => [c, ""]));

  // Per-program table.
  const cols = METRICS.filter((m) => names.some((n) => m.get(head.programs[n]!) !== undefined));
  out.push(
    `| Program | Call | ${cols.map((m) => m.title).join(" | ")} |`,
    `| --- | --- | ${cols.map(() => "---:").join(" | ")} |`,
  );
  for (const n of names) {
    const h = head.programs[n]!;
    const b = base?.programs[n];
    out.push(`| ${n} | \`${h.label}\` | ${cols.map((m) => cell(m, h, b)).join(" | ")} |`);
  }
  out.push("");

  // Download size, baselines and scope.
  const sizeRows = Object.keys(head.sizes)
    .sort()
    .map((pkg) => {
      const h = head.sizes[pkg]!;
      const b = base?.sizes[pkg];
      const d = (x: number, y: number | undefined) =>
        y === undefined || x === y ? fmtBytes(x) : `${fmtBytes(x)} (${signed(pct(x, y))}%)`;
      return `| ${pkg} | ${d(h.tarball, b?.tarball)} | ${d(h.unpacked, b?.unpacked)} | ${h.files} |`;
    });
  const bl = head.baselines;
  out.push(
    "<details><summary>Download size, baselines, scope</summary>",
    "",
    "| Package | Tarball | Unpacked | Files |",
    "| --- | ---: | ---: | ---: |",
    ...sizeRows,
    "",
    `Effect alone: \`effect-minimal\` bundle ${fmtBytes(bl.bundle["effect-minimal"]?.gzip)} gzip, hand-written \`effect-http\` call ${fmtBytes(bl.bundle["effect-http"]?.gzip)} gzip; effect import ${fmtMs(bl.runtime?.effectImportMs)} and ${fmtBytes(bl.runtime?.effectHeap)} heap; bare mocked HTTP roundtrip ${us(bl.runtime?.mockRoundtripP50Us ?? NaN)} p50.`,
    "",
    `Bundled (from \`src/\`): ${head.scope.bundle.join(", ")}. Built and probed (from \`lib/\`): ${head.scope.runtime.join(", ")}.${head.scope.changed.length ? ` Changed in this PR: ${head.scope.changed.join(", ")}.` : ""}${head.scope.untargeted.length ? ` No target in targets.json: ${head.scope.untargeted.join(", ")}.` : ""}`,
    "",
    `Job time: ${Object.entries(head.timings)
      .map(([k, v]) => `${k} ${(v / 1000).toFixed(1)} s`)
      .join(", ")}.`,
    "",
    "</details>",
    "",
  );
  if (head.errors.length)
    out.push(
      "<details><summary>⚠️ " + head.errors.length + " error(s)</summary>",
      "",
      ...head.errors.map((e) => `- ${e.replaceAll("\n", " ")}`),
      "",
      "</details>",
      "",
    );
  out.push(
    `¹ Timings run on a different runner than main's, so 🟡 marks a large move that may still be noise. Sizes, heap and object counts are stable. Offline: every call hits a canned in-memory response. Full suite: \`node benches/sdks/run.ts\`.${opts.runUrl ? ` [Job log](${opts.runUrl})` : ""}`,
  );
  return `${out.join("\n")}\n`;
};
