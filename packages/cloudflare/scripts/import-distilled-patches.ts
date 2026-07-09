#!/usr/bin/env bun
/**
 * import-distilled-patches — mechanically author patches/<service>/<op>.json
 * by mining a local checkout of the distilled repo.
 *
 * For every operation in distilled's generated cloudflare SDK
 * (packages/cloudflare/src/services/*.ts) this script:
 *
 *   1. extracts its export name and HTTP route (method + path),
 *   2. matches it against our smithy models by (method, path) with the path
 *      placeholders normalized (parameter names differ between sources),
 *   3. emits one RFC 6902 patch file that
 *        • renames our operation (and its Request/Response shapes) to
 *          distilled's name, so the generated exports line up, and
 *        • adds distilled's typed error shapes + the operation's `errors`
 *          list (matcher data comes from distilled's patches/<svc>/<op>.json).
 *
 * The patches then apply at generate time (see generate.ts), keeping our
 * docs → smithy → SDK pipeline intact — distilled is only used as a naming /
 * error-metadata oracle, never as the type source.
 *
 * Usage:
 *   bun scripts/import-distilled-patches.ts [--distilled D:/code/alchemy/distilled]
 */

import * as fs from "node:fs";
import * as path from "node:path";

const args = process.argv.slice(2);
const flag = (name: string, dflt: string): string => {
  const i = args.indexOf(`--${name}`);
  return i >= 0 && args[i + 1] ? args[i + 1] : dflt;
};

const DISTILLED = flag("distilled", "D:/code/alchemy/distilled");
const ROOT = path.resolve(import.meta.dir, "..");
const SMITHY_DIR = path.join(ROOT, ".generated-specs");
const PATCH_DIR = path.join(ROOT, "patches");

const DIST_SERVICES = path.join(DISTILLED, "packages/cloudflare/src/services");
const DIST_PATCHES = path.join(DISTILLED, "packages/cloudflare/patches");

const upperFirst = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const lowerFirst = (s: string): string =>
  s.charAt(0).toLowerCase() + s.slice(1);
const normPath = (p: string): string => p.replace(/\{[^}]+\}/g, "{}");

// ============================================================================
// 1. Mine distilled: op export name → { method, path, service, errors }
// ============================================================================

interface DistilledOp {
  service: string; // distilled service file stem, e.g. "kv"
  exportName: string; // e.g. "getNamespace"
  method: string;
  path: string;
  /** error class name → matcher list (from distilled patches/<svc>/<op>.json) */
  errors: Record<string, unknown[]>;
  /** pagination config (from the makePaginated call), if the op is paginated */
  pagination?: Record<string, unknown>;
}

const distilledOps = new Map<string, DistilledOp>(); // key: METHOD normPath

let dupRoutes = 0;
for (const file of fs.readdirSync(DIST_SERVICES)) {
  if (!file.endsWith(".ts")) continue;
  const service = file.replace(/\.ts$/, "");
  const src = fs.readFileSync(path.join(DIST_SERVICES, file), "utf8");

  // Request schema consts carry the route: `const <Name>Request = ... T.Http({ method: "GET", path: "..." })`
  const httpFor = new Map<string, { method: string; path: string }>();
  const reqRe =
    /const (\w+)Request(?::[^=]+)? =[\s\S]*?T\.Http\(\{\s*method:\s*"(\w+)",\s*path:\s*"([^"]+)"/g;
  for (const m of src.matchAll(reqRe)) {
    httpFor.set(m[1], { method: m[2], path: m[3] });
  }

  // Paginated ops carry their config in the makePaginated call right after
  // the export: `export const <name>: API.PaginatedOperationMethod<
  //   ... pagination: { mode: "page", ... } as const`.
  const paginationFor = new Map<string, Record<string, unknown>>();
  const pagRe =
    /export const (\w+): API\.PaginatedOperationMethod<[\s\S]*?pagination:\s*(\{[\s\S]*?\})\s*as const/g;
  for (const m of src.matchAll(pagRe)) {
    try {
      paginationFor.set(
        m[1],
        new Function(`return (${m[2]})`)() as Record<string, unknown>,
      );
    } catch {
      console.warn(`⚠️  unparsable pagination config: ${service}/${m[1]}`);
    }
  }

  // Operation exports: `export const <name>: API.(Paginated)OperationMethod<`
  const opRe = /export const (\w+): API\.(?:Paginated)?OperationMethod</g;
  for (const m of src.matchAll(opRe)) {
    const exportName = m[1];
    const http = httpFor.get(upperFirst(exportName));
    if (!http) continue;

    // Typed-error metadata lives in distilled's own per-op patch file.
    let errors: Record<string, unknown[]> = {};
    const pf = path.join(DIST_PATCHES, service, `${exportName}.json`);
    if (fs.existsSync(pf)) {
      try {
        const parsed = JSON.parse(fs.readFileSync(pf, "utf8"));
        if (parsed.errors && typeof parsed.errors === "object") {
          errors = parsed.errors;
        }
      } catch {
        console.warn(
          `⚠️  unparsable distilled patch: ${service}/${exportName}.json`,
        );
      }
    }

    const key = `${http.method} ${normPath(http.path)}`;
    if (distilledOps.has(key)) {
      dupRoutes++;
      continue; // first definition wins; duplicates are aliases
    }
    distilledOps.set(key, {
      service,
      exportName,
      method: http.method,
      path: http.path,
      errors,
      pagination: paginationFor.get(exportName),
    });
  }
}

console.log(
  `📖 distilled: ${distilledOps.size} routed operations (${dupRoutes} duplicate routes skipped)`,
);

// ============================================================================
// 2. Walk our smithy models and emit patch files
// ============================================================================

let matched = 0;
let unmatched = 0;
let renames = 0;
let withErrors = 0;
let collisions = 0;
let filesWritten = 0;
const writtenFiles = new Set<string>();
/** distilled service name → { our resource → matched op count } */
const serviceVotes = new Map<string, Map<string, number>>();

for (const file of fs.readdirSync(SMITHY_DIR)) {
  if (!file.endsWith(".json") || file === "cloudflare.protocols.json") continue;
  const resource = file.replace(/\.json$/, "");
  const model = JSON.parse(
    fs.readFileSync(path.join(SMITHY_DIR, file), "utf8"),
  );
  const shapes: Record<string, any> = model.shapes;
  const shapeNames = new Set(Object.keys(shapes).map((id) => id.split("#")[1]));

  for (const [opId, def] of Object.entries<any>(shapes)) {
    if (def.type !== "operation") continue;
    const http = def.traits?.["smithy.api#http"];
    if (!http) continue;

    const key = `${http.method} ${normPath(http.uri)}`;
    const dist = distilledOps.get(key);
    if (!dist) {
      unmatched++;
      continue;
    }
    matched++;

    const votes = serviceVotes.get(dist.service) ?? new Map<string, number>();
    votes.set(resource, (votes.get(resource) ?? 0) + 1);
    serviceVotes.set(dist.service, votes);

    const ns = opId.split("#")[0];
    const ourOpName = opId.split("#")[1];
    const wantOpName = upperFirst(dist.exportName);

    const patches: Array<Record<string, unknown>> = [];

    // Our merged services (e.g. zero_trust) can map to several distilled
    // services whose export names overlap — the first op keeps distilled's
    // name; later ones keep their docs-derived name but still get errors and
    // pagination (their patch file is keyed by our op name instead).
    const fileKey = `${resource}/${dist.exportName}`;
    const isDuplicate = writtenFiles.has(fileKey);
    if (isDuplicate) collisions++;

    // --- Renames: operation + Request/Response shapes -----------------------
    if (!isDuplicate && ourOpName !== wantOpName) {
      // Skip the rename if the target names already exist as different shapes.
      const wanted = [
        wantOpName,
        `${wantOpName}Request`,
        `${wantOpName}Response`,
      ];
      if (wanted.some((n) => shapeNames.has(n))) {
        collisions++;
      } else {
        patches.push({
          op: "move",
          from: `/shapes/${ns}#${ourOpName}`,
          path: `/shapes/${ns}#${wantOpName}`,
        });
        const input = def.input?.target as string | undefined;
        const output = def.output?.target as string | undefined;
        if (input && shapes[input]) {
          patches.push(
            {
              op: "move",
              from: `/shapes/${input}`,
              path: `/shapes/${ns}#${wantOpName}Request`,
            },
            {
              op: "replace",
              path: `/shapes/${ns}#${wantOpName}/input/target`,
              value: `${ns}#${wantOpName}Request`,
            },
          );
        }
        if (output && shapes[output]) {
          patches.push(
            {
              op: "move",
              from: `/shapes/${output}`,
              path: `/shapes/${ns}#${wantOpName}Response`,
            },
            {
              op: "replace",
              path: `/shapes/${ns}#${wantOpName}/output/target`,
              value: `${ns}#${wantOpName}Response`,
            },
          );
        }
        renames++;
      }
    }

    // The op shape id the error patches must target (post-rename or original).
    const finalOp = patches.length ? wantOpName : ourOpName;

    // --- Pagination trait ----------------------------------------------------
    if (dist.pagination) {
      patches.push({
        op: "add",
        path: `/shapes/${ns}#${finalOp}/traits/smithy.api#paginated`,
        value: dist.pagination,
      });
    }

    // --- Typed errors --------------------------------------------------------
    const errorNames = Object.keys(dist.errors);
    if (errorNames.length) {
      for (const errName of errorNames) {
        // Avoid clobbering an existing non-error shape of the same name.
        const existing = shapes[`${ns}#${errName}`];
        const safeName =
          existing &&
          existing.traits?.["smithy.api#error"] === undefined &&
          !patches.some((p) => p.path === `/shapes/${ns}#${errName}`)
            ? shapeNames.has(`${errName}Error`)
              ? null
              : `${errName}Error`
            : errName;
        if (safeName === null) {
          collisions++;
          continue;
        }
        patches.push({
          op: "add",
          path: `/shapes/${ns}#${safeName}`,
          value: {
            type: "structure",
            members: {
              code: { target: "smithy.api#Integer" },
              message: { target: "smithy.api#String" },
            },
            traits: {
              "smithy.api#error": "client",
              "com.cloudflare.protocols#errorMatchers": dist.errors[errName],
            },
          },
        });
      }
      patches.push({
        op: "add",
        path: `/shapes/${ns}#${finalOp}/errors`,
        value: errorNames.map((n) => ({ target: `${ns}#${n}` })),
      });
      withErrors++;
    }

    if (!patches.length) continue;

    writtenFiles.add(fileKey);
    const fileName = isDuplicate ? lowerFirst(ourOpName) : dist.exportName;

    const dir = path.join(PATCH_DIR, resource);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(
      path.join(dir, `${fileName}.json`),
      JSON.stringify(
        {
          description: `Align ${resource}#${ourOpName} with distilled cloudflare/${dist.service} ${dist.exportName}${isDuplicate ? " (duplicate export name — errors/pagination only, no rename)" : ""}`,
          patches,
        },
        null,
        2,
      ) + "\n",
    );
    filesWritten++;
  }
}

console.log(
  `✅ matched ${matched} ops (${unmatched} ours-only), wrote ${filesWritten} patch files`,
);
console.log(
  `   renames: ${renames}, ops with typed errors: ${withErrors}, name collisions skipped: ${collisions}`,
);

// ============================================================================
// 3. Export aliases: distilled service names → our service files, so
//    `@distilled.cloud/cloudflare/zero-trust` (their kebab-case naming)
//    resolves to our snake_case module. Majority vote when one distilled
//    service's operations land across several of our resources.
// ============================================================================

const pkgPath = path.join(ROOT, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const target = (p: string) => ({ types: p, bun: p, default: p });

const aliases: Record<string, ReturnType<typeof target>> = {};
let aliasCount = 0;
for (const [service, votes] of [...serviceVotes.entries()].sort()) {
  const [best] = [...votes.entries()].sort((a, b) => b[1] - a[1]);
  if (!best) continue;
  if (service !== best[0]) {
    aliases[`./${service}`] = target(`./src/services/${best[0]}.ts`);
    aliasCount++;
  }
}

pkg.exports = {
  // Named hand-written modules first, then the aliases, then the wildcard
  // (Node picks the most specific match regardless of order).
  "./Credentials": target("./src/credentials.ts"),
  "./Errors": target("./src/errors.ts"),
  "./Traits": target("./src/traits.ts"),
  "./Pagination": target("./src/pagination.ts"),
  ...aliases,
  ".": target("./src/index.ts"),
  "./*": target("./src/services/*.ts"),
};
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n");
console.log(`   wrote ${aliasCount} service export aliases to package.json`);
