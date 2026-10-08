/**
 * Per-SDK benchmarks across every distilled package. Offline.
 *
 *   node benches/sdks/run.ts                       everything, every SDK
 *   node benches/sdks/run.ts --only aws,resend     some SDKs
 *   node benches/sdks/run.ts --suites size,bundle  some suites (size,bundle,runtime,typecheck)
 *   node benches/sdks/run.ts --history ~/bench/runs  also copy the run file there
 *   node benches/sdks/run.ts --rediscover          re-pick non-pinned targets
 *
 * Writes `.out/latest.json` (and `<history>/<timestamp>-<sha>.json`). See README.md.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { cpus, totalmem } from "node:os";
import { join, resolve } from "node:path";
import { BASELINES, bundle, fixtureSource } from "./src/bundle.ts";
import { discoverMissing } from "./src/discover.ts";
import { METRICS } from "./src/metrics.ts";
import type { ProbeRequest } from "./src/probe.ts";
import { effectSize, packSize, sizeOf } from "./src/size.ts";
import {
  listOperations,
  loadTargets,
  primaryOf,
  protocolsOf,
  resolveImports,
  saveTargets,
  type Target,
} from "./src/targets.ts";
import { BASELINE_TYPECHECK, typecheck, typecheckSource } from "./src/typecheck.ts";
import {
  BENCH_DIR,
  fmtBytes,
  fmtMs,
  lastJsonLine,
  listSdks,
  log,
  OUT,
  PACKAGES,
  packageVersion,
  pool,
  readJson,
  REPO,
  run,
} from "./src/util.ts";

type Suite = "size" | "bundle" | "runtime" | "typecheck";
const ALL_SUITES: Suite[] = ["size", "bundle", "runtime", "typecheck"];

const parseArgs = (argv: string[]) => {
  const opts = {
    only: undefined as string[] | undefined,
    suites: ALL_SUITES,
    jobs: Math.max(2, Math.min(8, cpus().length / 2)),
    runtimeJobs: 4,
    budgetMs: 1500,
    out: join(OUT, "latest.json"),
    history: process.env.DISTILLED_BENCH_HISTORY as string | undefined,
    rediscover: false,
    build: false,
    note: undefined as string | undefined,
  };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]!;
    const next = () => argv[++i]!;
    if (a === "--") continue;
    else if (a === "--only") opts.only = next().split(",");
    else if (a === "--suites") opts.suites = next().split(",") as Suite[];
    else if (a === "--jobs") opts.jobs = Number(next());
    else if (a === "--runtime-jobs") opts.runtimeJobs = Number(next());
    else if (a === "--budget") opts.budgetMs = Number(next());
    else if (a === "--out") opts.out = resolve(next());
    else if (a === "--history") opts.history = resolve(next());
    else if (a === "--note") opts.note = next();
    else if (a === "--rediscover") opts.rediscover = true;
    else if (a === "--build") opts.build = true;
    else if (a === "-h" || a === "--help") {
      console.log(readJson(join(BENCH_DIR, "package.json")).description);
      console.log(
        "flags: --only a,b --suites size,bundle,runtime,typecheck --jobs N --runtime-jobs N --budget ms --out file --history dir --note text --rediscover --build",
      );
      process.exit(0);
    } else throw new Error(`unknown flag ${a}`);
  }
  return opts;
};

const opts = parseArgs(process.argv.slice(2));
const started = new Date();
const t0 = performance.now();
const has = (s: Suite) => opts.suites.includes(s);
const sdks = listSdks().filter((p) => !opts.only || opts.only.includes(p));

const git = (...args: string[]) => {
  try {
    return execFileSync("git", args, { cwd: REPO, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
};

//#region lib/ build

const missingLib = [...sdks, "core"].filter(
  (p) => !existsSync(join(PACKAGES, p, "lib", "index.js")),
);
if (opts.build || missingLib.length > 0) {
  log(
    `build: tsc -b (${missingLib.length ? `lib/ missing for ${missingLib.slice(0, 5).join(", ")}…` : "--build"})`,
  );
  const res = await run(join(REPO, "node_modules", ".bin", "tsc"), ["-b"], { cwd: REPO });
  // Same post-build step `pnpm build` runs, when this checkout has it.
  if (res.code === 0 && existsSync(join(REPO, "scripts", "strip-lib-docs.ts")))
    await run("node", [join(REPO, "scripts", "strip-lib-docs.ts")], { cwd: REPO });
  if (res.code !== 0) {
    console.error(res.stdout.slice(-4000), res.stderr.slice(-4000));
    process.exit(1);
  }
}

//#endregion

//#region Targets

const targets = loadTargets();
const discoverErrors = await discoverMissing(sdks, targets, {
  rediscover: opts.rediscover,
  jobs: opts.jobs,
});
saveTargets(targets);

//#endregion

const PROBE = join(BENCH_DIR, "src", "probe.ts");
const probe = async (req: ProbeRequest): Promise<any> => {
  const res = await run("node", ["--expose-gc", PROBE, JSON.stringify(req)], {
    timeoutMs: 600_000,
  });
  const out = lastJsonLine<any>(res.stdout);
  if (!out)
    return {
      fatal: `probe crashed (exit ${res.code}): ${res.stderr.trim().split("\n").slice(-3).join(" | ").slice(0, 400)}`,
    };
  return out;
};

/**
 * One program per (SDK, protocol). The primary program's results are also
 * stored at the SDK level (`record[pkg].bundle`, `.runtime`, `.typecheck`),
 * which is what the SDK-level metrics and their history read.
 */
interface Program {
  readonly pkg: string;
  readonly protocol: string;
  readonly target: Target;
  readonly primary: boolean;
  /** Unique fixture name for bundle/typecheck output dirs. */
  readonly name: string;
}

const programs: Program[] = sdks.flatMap((pkg) =>
  Object.values(targets[pkg] ?? {}).map((target) => ({
    pkg,
    protocol: target.protocol,
    target,
    primary: !!target.primary,
    name: target.primary ? pkg : `${pkg}~${target.protocol}`,
  })),
);

const opsByProtocol = (pkg: string) => Object.fromEntries(protocolsOf(listOperations(pkg)));

const record: Record<string, any> = {};
for (const pkg of sdks) {
  const primary = primaryOf(targets[pkg]);
  const counts = opsByProtocol(pkg);
  const protocolNames = [
    ...new Set([...Object.keys(targets[pkg] ?? {}), ...Object.keys(counts)]),
  ];
  record[pkg] = {
    version: packageVersion(pkg),
    target: primary
      ? {
          label: primary.label,
          auth: primary.auth,
          call: primary.call,
          pinned: !!primary.pinned,
          protocol: primary.protocol,
        }
      : undefined,
    protocolCount: protocolNames.length,
    programs: Object.fromEntries(
      protocolNames.map((protocol) => {
        const t = targets[pkg]?.[protocol];
        return [
          protocol,
          {
            primary: !!t?.primary,
            operations: counts[protocol] ?? 0,
            target: t ? { label: t.label, call: t.call, pinned: !!t.pinned } : undefined,
            errors: discoverErrors[pkg]?.[protocol]
              ? { discover: discoverErrors[pkg][protocol] }
              : {},
          },
        ];
      }),
    ),
    errors: {} as Record<string, string>,
  };
  for (const [protocol, msg] of Object.entries(discoverErrors[pkg] ?? {}))
    record[pkg].errors[primary?.protocol === protocol || !primary ? "discover" : `discover [${protocol}]`] = msg;
}
const fail = (pkg: string, suite: string, msg: string, protocol?: string) => {
  const r = record[pkg];
  const isPrimary = !protocol || r.programs[protocol]?.primary;
  if (protocol && r.programs[protocol]) r.programs[protocol].errors[suite] = msg;
  r.errors[isPrimary ? suite : `${suite} [${protocol}]`] = msg;
  log(`  ${pkg}${protocol && !isPrimary ? ` [${protocol}]` : ""} ${suite}: ERROR ${msg}`);
};
/** Store a program's result for `suite`; the primary program's result is the SDK's. */
const put = (p: Program, suite: string, value: unknown) => {
  record[p.pkg].programs[p.protocol][suite] = value;
  if (p.primary) record[p.pkg][suite] = value;
};
const tag = (p: Program) => (p.primary ? p.pkg : `${p.pkg} [${p.protocol}]`);

const baselines: Record<string, any> = {};
const timings: Record<string, number> = {};
const phase = async (name: string, fn: () => Promise<void>) => {
  const t = performance.now();
  log(`\n== ${name}`);
  await fn();
  timings[name] = performance.now() - t;
  log(`== ${name} done in ${fmtMs(timings[name])}`);
};

//#region size

if (has("size")) {
  await phase("size", async () => {
    const core = await packSize(join(PACKAGES, "core"));
    const effect = effectSize();
    baselines.size = { core, effect };
    await pool(sdks, opts.jobs, async (pkg) => {
      try {
        const s = await sizeOf(pkg);
        record[pkg].size = {
          ...s,
          installBytes: s.unpacked + core.unpacked + effect.unpacked,
          bytesPerOp: s.operations ? Math.round(s.tarball / s.operations) : undefined,
        };
        log(
          `  ${pkg}: ${fmtBytes(s.tarball)} tarball, ${fmtBytes(s.unpacked)} unpacked, ${s.operations} ops`,
        );
      } catch (e) {
        fail(pkg, "size", String(e));
      }
    });
  });
}

//#endregion

//#region bundle

if (has("bundle")) {
  await phase("bundle", async () => {
    baselines.bundle = {};
    for (const [name, b] of Object.entries(BASELINES)) {
      baselines.bundle[name] = {
        ...(await bundle(`_${name}`, b.source)),
        description: b.description,
      };
      log(`  baseline ${name}: ${fmtBytes(baselines.bundle[name].gzip)} gzip`);
    }
    const ref = baselines.bundle["effect-http"];
    await pool(programs, opts.jobs, async (p) => {
      try {
        const r = await bundle(p.name, fixtureSource(p.target), p.pkg);
        put(p, "bundle", {
          ...r,
          overheadGzip: r.gzip - ref.gzip,
          overheadBytes: r.bytes - ref.bytes,
        });
        log(
          `  ${tag(p)}: ${fmtBytes(r.gzip)} gzip (+${fmtBytes(r.gzip - ref.gzip)} over effect-http)`,
        );
      } catch (e) {
        fail(p.pkg, "bundle", String(e).slice(0, 400), p.protocol);
      }
    });
  });
}

//#endregion

//#region runtime + memory

const STRICT_CORE = join(PACKAGES, "core", "lib", "response-validation.js");
const opRequest = (target: Target): ProbeRequest => ({
  mode: "op",
  imports: resolveImports(target),
  auth: target.auth,
  call: target.call,
  env: target.env,
  response: target.response,
  budgetMs: opts.budgetMs,
  // Older checkouts have no ResponseValidation; the strict series is skipped there.
  strictCore: existsSync(STRICT_CORE) ? STRICT_CORE : undefined,
});

if (has("runtime")) {
  await phase("runtime", async () => {
    baselines.runtime = await probe({ mode: "baseline", imports: [], budgetMs: opts.budgetMs });
    log(
      `  baseline: effect import ${fmtMs(baselines.runtime.effectImportMs)}, mock roundtrip p50 ${baselines.runtime.mockRoundtrip?.p50Us?.toFixed(1)} µs`,
    );
    await pool(programs, opts.runtimeJobs, async (p) => {
      const op = await probe(opRequest(p.target));
      if (op.fatal || op.error) fail(p.pkg, "runtime", op.fatal ?? op.error, p.protocol);
      put(p, "runtime", op);
      let barrel: any;
      // The package root import does not depend on the protocol: once per SDK.
      if (p.primary) {
        barrel = await probe({
          mode: "barrel",
          imports: [{ alias: "Barrel", lib: join(PACKAGES, p.pkg, "lib", "index.js"), src: "" }],
        });
        if (barrel.fatal) fail(p.pkg, "barrel", barrel.fatal);
        record[p.pkg].barrel = barrel;
      }
      if (!op.error && !op.fatal)
        log(
          `  ${tag(p)}: +${op.addedP50Us?.toFixed(1)} µs/call, import ${fmtMs(op.importMs)}, heap ${fmtBytes(op.importHeap?.heapUsed)}${barrel ? `; root ${fmtMs(barrel.importMs)} ${fmtBytes(barrel.heap?.heapUsed)}` : ""}`,
        );
    });
  });
}

//#endregion

//#region typecheck

if (has("typecheck")) {
  await phase("typecheck", async () => {
    baselines.typecheck = await typecheckSource("_effect-minimal", BASELINE_TYPECHECK);
    log(`  baseline effect-minimal: ${fmtMs(baselines.typecheck.wallMs)}`);
    await pool(programs, Math.max(1, Math.floor(opts.jobs / 2)), async (p) => {
      try {
        const r = await typecheck(p.target, p.name);
        put(p, "typecheck", r);
        if (r.errors) fail(p.pkg, "typecheck", r.firstError ?? `${r.errors} errors`, p.protocol);
        log(`  ${tag(p)}: ${fmtMs(r.wallMs)}, ${fmtBytes(r.peakRss)} RSS, ${r.types ?? "?"} types`);
      } catch (e) {
        fail(p.pkg, "typecheck", String(e), p.protocol);
      }
    });
  });
}

//#endregion

//#region Output

const sum = (f: (r: any) => number | undefined) =>
  Object.values(record).reduce((s, r) => s + (f(r) ?? 0), 0);
const medianOf = (f: (r: any) => number | undefined) => {
  const xs = Object.values(record)
    .map(f)
    .filter((x): x is number => typeof x === "number" && Number.isFinite(x))
    .sort((a, b) => a - b);
  return xs.length ? xs[Math.floor(xs.length / 2)] : undefined;
};

const hashTargets = (t: typeof targets) =>
  createHash("sha256").update(JSON.stringify(t)).digest("hex").slice(0, 12);

const sha = git("rev-parse", "HEAD");
const runFile = {
  schema: 1,
  id: `${started.toISOString().replace(/[:.]/g, "-")}-${sha.slice(0, 9)}`,
  startedAt: started.toISOString(),
  durationMs: Math.round(performance.now() - t0),
  note: opts.note,
  suites: opts.suites,
  partial: !!opts.only,
  git: {
    sha,
    branch: git("rev-parse", "--abbrev-ref", "HEAD"),
    subject: git("log", "-1", "--format=%s"),
    committedAt: git("log", "-1", "--format=%cI"),
    dirty: git("status", "--porcelain", "--", "packages").length > 0,
  },
  env: {
    node: process.version,
    platform: `${process.platform}-${process.arch}`,
    cpu: cpus()[0]?.model,
    cores: cpus().length,
    memory: totalmem(),
    effect: readJson(join(BENCH_DIR, "node_modules", "effect", "package.json")).version,
    rolldown: readJson(join(BENCH_DIR, "node_modules", "rolldown", "package.json")).version,
    typescript: readJson(join(BENCH_DIR, "node_modules", "typescript", "package.json")).version,
    runtimeJobs: opts.runtimeJobs,
    budgetMs: opts.budgetMs,
  },
  /** Fingerprint of the benchmark programs: runs with different values measured different code. */
  bench: { targets: hashTargets(targets) },
  timings,
  metrics: METRICS,
  baselines,
  summary: {
    sdks: sdks.length,
    errors: Object.values(record).filter((r) => Object.keys(r.errors).length > 0).length,
    totalTarball: sum((r) => r.size?.tarball),
    totalUnpacked: sum((r) => r.size?.unpacked),
    totalOperations: sum((r) => r.size?.operations),
    medianBundleGzip: medianOf((r) => r.bundle?.gzip),
    medianOverheadGzip: medianOf((r) => r.bundle?.overheadGzip),
    medianAddedP50Us: medianOf((r) => r.runtime?.addedP50Us),
    medianImportOpMs: medianOf((r) => r.runtime?.importMs),
    medianImportHeap: medianOf((r) => r.runtime?.importHeap?.heapUsed),
    medianTypecheckMs: medianOf((r) => r.typecheck?.wallMs),
    protocols: sum((r) => r.protocolCount),
    programs: programs.length,
    programErrors: programs.filter(
      (p) => Object.keys(record[p.pkg].programs[p.protocol]?.errors ?? {}).length > 0,
    ).length,
  },
  sdks: record,
};

mkdirSync(join(OUT), { recursive: true });
writeFileSync(opts.out, `${JSON.stringify(runFile, null, 1)}\n`);
log(`\nwrote ${opts.out}`);
if (opts.history) {
  mkdirSync(opts.history, { recursive: true });
  const dest = join(opts.history, `${runFile.id}.json`);
  copyFileSync(opts.out, dest);
  log(`copied to ${dest}`);
}
const s = runFile.summary;
log(
  `\n${s.sdks} SDKs, ${s.errors} with errors, ${fmtMs(runFile.durationMs)}\n` +
    `  ${s.programs} programs over ${s.protocols} protocols, ${s.programErrors} with errors\n` +
    `  total tarball ${fmtBytes(s.totalTarball)}, unpacked ${fmtBytes(s.totalUnpacked)}, ${s.totalOperations} ops\n` +
    `  median 1 auth + 1 op bundle ${fmtBytes(s.medianBundleGzip)} gzip (+${fmtBytes(s.medianOverheadGzip)} over effect-http)\n` +
    `  median added latency ${s.medianAddedP50Us?.toFixed(1)} µs/call, import ${fmtMs(s.medianImportOpMs)}, heap ${fmtBytes(s.medianImportHeap)}\n` +
    `  median consumer tsc ${fmtMs(s.medianTypecheckMs)}`,
);

//#endregion
