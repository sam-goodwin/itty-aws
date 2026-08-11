#!/usr/bin/env bun
/**
 * docs-to-openapi — turn the downloaded Vercel REST API markdown into OpenAPI
 * 3.0 documents, one per sidebar group.
 *
 * Input:  specs/rest-api.md              (the sidebar index; groups the pages)
 *         specs/rest-api/<dir>/<slug>.md (one page per endpoint)
 * Output: .openapi/<group_slug>.json     (one OpenAPI 3.0 document per group)
 *
 * ─── Why an OpenAPI document and not Smithy directly ────────────────────────
 * Cloudflare's docs describe payloads as prose tables, so its pipeline parses
 * markdown straight into Smithy. Vercel's docs don't: every request and
 * response body on an endpoint page is a fenced ```json block holding the
 * FULL, already-dereferenced JSON Schema for that body — `oneOf`, `anyOf`,
 * `nullable`, `enum`, `additionalProperties` and all. That is 95% of an
 * OpenAPI operation already, so the honest shape of this converter is
 * "reassemble the OpenAPI document the docs were rendered from", after which
 * the mature shared `convertOpenApiToSmithy` does the modelling work.
 *
 * The source of truth is still the docs mirror in specs/ — never
 * https://openapi.vercel.sh.
 *
 * ─── Page anatomy ───────────────────────────────────────────────────────────
 *   ---                        YAML front matter (title/url/summary) — unused
 *   ---
 *   # Reads an access group    → summary
 *   ```http                    → method + route template
 *   GET /v1/access-groups/{idOrName}
 *   ```
 *   Allows to read…            → description (prose up to the first `##`)
 *   ## Authentication          → always "bearerToken: HTTP bearer"; ignored,
 *                                the protocol owns auth
 *   ## Path parameters         → | Name | Type | Required | Description |
 *   ## Query parameters        → same table shape
 *   ## Header parameters       → same table shape
 *   ## Request body            → Required: Yes|No, Content-Type, ```json
 *   ## Responses               → ### <status>: <text>, Content-Type, ```json
 *   ## Related                 → link footer; ignored
 *
 * ─── Where the docs are lossy (and what we do about it) ─────────────────────
 * The parameter TABLES are a rendering of each parameter's schema, so they
 * lose things the JSON fences keep:
 *
 *   • A parameter with no single `type` — a `oneOf` of string|number, say —
 *     renders as `object`. There is no way back to the arms, so a typeless
 *     `object` parameter becomes `{ type: "string" }`: every one of these is
 *     a path/query/header parameter, where the wire form is a string
 *     regardless, so the bytes are right even when the arms were richer.
 *   • `array` parameters render without their `items`; they become arrays of
 *     string, which is what all of them are.
 *   • `pattern:` cells are truncated by the table renderer whenever the regex
 *     contains a `|` (it reads as a cell separator upstream), so patterns are
 *     dropped wholesale rather than half-applied. They constrain nothing in
 *     the generated surface anyway.
 *
 * Both fallbacks are counted and reported at the end of the run. Anything
 * that needs to be sharper than the docs allow belongs in an RFC-6902 patch
 * under patches/<group_slug>/ — those apply to THESE documents, in
 * scripts/convert.ts.
 *
 * Non-JSON bodies (`application/octet-stream` uploads, the `x-ndjson` /
 * `jsonl` / `stream+json` log streams) are emitted under their real content
 * type. The shared converter models `application/json` only, so those
 * operations surface without a typed body — faithful beats invented. They too
 * are listed at the end of the run.
 *
 * Usage:
 *   bun scripts/docs-to-openapi.ts
 *   bun scripts/docs-to-openapi.ts --group projects   # one group
 *   bun scripts/docs-to-openapi.ts --specs specs --out .openapi
 */

import * as fs from "node:fs";
import * as path from "node:path";

const rootDir = path.resolve(import.meta.dir, "..");

const argOf = (flag: string, fallback: string): string => {
  const i = process.argv.indexOf(`--${flag}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1]! : fallback;
};

const specsDir = path.resolve(rootDir, argOf("specs", "specs"));
const outDir = path.resolve(rootDir, argOf("out", ".openapi"));
const onlyGroup = argOf("group", "");

// ============================================================================
// Naming
// ============================================================================

/** Sidebar group label → model/module slug (`projectMembers` → `project_members`). */
export const groupSlug = (group: string): string =>
  group
    // Split camel humps first so `projectMembers` doesn't collapse to one word.
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase();

/** `access_groups` → `AccessGroups` (the OpenAPI service name). */
export const pascal = (slug: string): string =>
  slug
    .split("_")
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");

/**
 * Page slug → operationId (`reads-an-access-group` → `readsAnAccessGroup`).
 *
 * The docs never print the API's own operationId, and the page slug is the
 * only per-endpoint identifier they do expose — it's the canonical URL, it is
 * unique within a group, and upstream already disambiguates collisions with a
 * numeric suffix (`list-flags`, `list-flags-1`). So it is the name.
 */
export const operationId = (slug: string): string => {
  const parts = slug.split(/[^a-zA-Z0-9]+/).filter(Boolean);
  return parts
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join("");
};

// ============================================================================
// Index parsing
// ============================================================================

export interface IndexEntry {
  readonly group: string;
  readonly pagePath: string;
  readonly method: string;
  readonly route: string;
  readonly description: string;
}

/**
 * Endpoint rows out of specs/rest-api.md — `| **GET** | [`/route`](page.md) |
 * description |`, filed under the nearest preceding `## <group>` heading.
 */
export const extractIndexEntries = (markdown: string): IndexEntry[] => {
  const entries: IndexEntry[] = [];
  const seen = new Set<string>();
  let group = "other";
  const row =
    /^\|\s*\*\*([A-Z]+)\*\*\s*\|\s*\[`([^`]+)`\]\((\/docs\/rest-api\/[^)]+?)\.md\)\s*\|([^|]*)\|/;
  for (const line of markdown.split("\n")) {
    const heading = /^##\s+(.+?)\s*$/.exec(line);
    if (heading) {
      group = heading[1]!;
      continue;
    }
    const m = row.exec(line.trim());
    if (!m) continue;
    if (seen.has(m[3]!)) continue;
    seen.add(m[3]!);
    entries.push({
      group,
      pagePath: m[3]!,
      method: m[1]!,
      route: m[2]!,
      description: m[4]!.trim(),
    });
  }
  return entries;
};

// ============================================================================
// Page parsing — sections
// ============================================================================

interface Fence {
  readonly lang: string;
  readonly body: string;
}

interface Section {
  readonly title: string;
  readonly lines: string[];
}

interface Page {
  /** Prose before the first `##` (minus the front matter, h1 and http fence). */
  readonly summary: string;
  readonly description: string;
  readonly method?: string;
  readonly route?: string;
  readonly sections: Map<string, Section>;
}

/** Strip leading YAML front matter (`---` … `---`). */
const stripFrontMatter = (md: string): string => {
  if (!md.startsWith("---")) return md;
  const end = md.indexOf("\n---", 3);
  if (end === -1) return md;
  const nl = md.indexOf("\n", end + 1);
  return nl === -1 ? "" : md.slice(nl + 1);
};

/**
 * Walk the body, tracking fenced-code state so a ``` block's contents can
 * never be mistaken for a heading, and split it into `## ` sections.
 */
const parsePage = (md: string): Page => {
  const lines = stripFrontMatter(md).split("\n");
  const sections = new Map<string, Section>();
  const preamble: string[] = [];
  let current: Section | undefined;
  let fenceLang: string | undefined;
  let summary = "";
  let method: string | undefined;
  let route: string | undefined;
  const httpFence: string[] = [];

  for (const line of lines) {
    const fence = /^```(\w*)/.exec(line);
    if (fence) {
      if (fenceLang === undefined) {
        fenceLang = fence[1] || "text";
        (current ? current.lines : preamble).push(line);
        continue;
      }
      // Closing fence.
      (current ? current.lines : preamble).push(line);
      fenceLang = undefined;
      continue;
    }
    if (fenceLang === undefined) {
      const h2 = /^##\s+(.+?)\s*$/.exec(line);
      if (h2) {
        current = { title: h2[1]!, lines: [] };
        // A repeated heading would be a docs bug; last one wins.
        sections.set(current.title, current);
        continue;
      }
      const h1 = /^#\s+(.+?)\s*$/.exec(line);
      if (h1 && current === undefined) {
        summary = h1[1]!;
        continue;
      }
    }
    if (current) current.lines.push(line);
    else preamble.push(line);
  }

  // The single ```http fence in the preamble holds `METHOD /route`.
  {
    let inHttp = false;
    for (const line of preamble) {
      if (/^```http\s*$/.test(line)) {
        inHttp = true;
        continue;
      }
      if (inHttp) {
        if (line.startsWith("```")) break;
        httpFence.push(line);
      }
    }
    const m = /^([A-Z]+)\s+(\S+)/.exec(httpFence.join("\n").trim());
    if (m) {
      method = m[1]!.toLowerCase();
      route = m[2]!;
    }
  }

  // Description: preamble prose with the http fence removed.
  const description = (() => {
    const out: string[] = [];
    let inFence = false;
    for (const line of preamble) {
      if (line.startsWith("```")) {
        inFence = !inFence;
        continue;
      }
      if (!inFence) out.push(line);
    }
    return out.join("\n").trim();
  })();

  return { summary, description, method, route, sections };
};

/** Every fenced block inside a section, in order. */
const fencesOf = (lines: readonly string[]): Fence[] => {
  const out: Fence[] = [];
  let lang: string | undefined;
  let buf: string[] = [];
  for (const line of lines) {
    const fence = /^```(\w*)/.exec(line);
    if (fence && lang === undefined) {
      lang = fence[1] || "text";
      buf = [];
      continue;
    }
    if (line.startsWith("```") && lang !== undefined) {
      out.push({ lang, body: buf.join("\n") });
      lang = undefined;
      continue;
    }
    if (lang !== undefined) buf.push(line);
  }
  return out;
};

// ============================================================================
// Page parsing — parameter tables
// ============================================================================

export interface ParamRow {
  readonly name: string;
  readonly type: string;
  readonly required: boolean;
  readonly description: string;
}

/**
 * Parse a `| Name | Type | Required | Description |` table.
 *
 * Cells are NOT split naively: a `pattern:` regex containing `|` produces
 * extra pipes, so the Required cell — always exactly `Yes` or `No` — is used
 * as the anchor and the cells on either side of it are rejoined.
 */
export const parseParamTable = (lines: readonly string[]): ParamRow[] => {
  const rows: ParamRow[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line.startsWith("|")) continue;
    if (/^\|[\s|:-]+\|$/.test(line)) continue; // separator row
    const cells = line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (cells.length < 4) continue;
    const reqIdx = cells.findIndex((c) => c === "Yes" || c === "No");
    if (reqIdx < 2) continue; // header row, or a shape we don't recognize
    rows.push({
      name: cells[0]!.replace(/`/g, "").replace(/^'|'$/g, "").trim(),
      type: cells.slice(1, reqIdx).join("|").trim(),
      required: cells[reqIdx] === "Yes",
      description: cells
        .slice(reqIdx + 1)
        .join("|")
        .trim(),
    });
  }
  return rows;
};

/** Counters for the lossy fallbacks, reported at the end of the run. */
const stats = {
  typelessParams: 0,
  arrayParams: 0,
  nonJsonRequestBodies: [] as string[],
  nonJsonResponses: [] as string[],
};

/**
 * Coerce the docs' `enum: a, b, c` list into JSON values.
 *
 * A declared base type wins: `string. enum: 1, 0` really is the strings
 * `"1"`/`"0"`. Only a typeless (`object`) cell — the renderer's stand-in for
 * a schema with no single `type` — gets its literals inferred, and even then
 * they stay strings for path/query/header use, where the wire form is a
 * string either way.
 */
const coerceEnum = (values: readonly string[], base: string): unknown[] =>
  values.map((v) => {
    const t = v.trim().replace(/^"|"$/g, "");
    if (base === "number" || base === "integer") {
      const n = Number(t);
      return Number.isNaN(n) ? t : n;
    }
    if (base === "boolean") return t === "true";
    return t;
  });

/**
 * `string. maxLength: 255; enum: a, b; default: "a"` → a JSON Schema.
 *
 * `pattern:` is deliberately not read — see the lossy-docs note in the header.
 */
export const typeCellToSchema = (
  cell: string,
): Record<string, unknown> & { $typeless?: true } => {
  const base = (/^([a-zA-Z]+)/.exec(cell.trim())?.[1] ?? "").toLowerCase();
  const schema: Record<string, unknown> = {};

  // `object` is what the renderer prints for a schema with no single `type`
  // (a oneOf, or a bare `enum`). Treat it as typeless and fall back to string.
  const typeless = base === "" || base === "object";
  if (typeless) {
    stats.typelessParams++;
    schema.type = "string";
  } else if (base === "array") {
    stats.arrayParams++;
    schema.type = "array";
    schema.items = { type: "string" };
  } else {
    schema.type = base;
  }

  const enumMatch = /(?:^|[.;]\s*)enum:\s*(.+?)\s*(?:;\s*default:|$)/.exec(
    cell,
  );
  if (enumMatch) {
    schema.enum = coerceEnum(
      enumMatch[1]!.split(",").map((s) => s.trim()),
      typeless ? "string" : base,
    );
  }
  const maxLength = /(?:^|[.;]\s*)maxLength:\s*(\d+)/.exec(cell);
  if (maxLength) schema.maxLength = Number(maxLength[1]);
  const minLength = /(?:^|[.;]\s*)minLength:\s*(\d+)/.exec(cell);
  if (minLength) schema.minLength = Number(minLength[1]);
  const min = /(?:^|[.;]\s*)min:\s*(-?[\d.]+)/.exec(cell);
  if (min) schema.minimum = Number(min[1]);
  const max = /(?:^|[.;]\s*)max:\s*(-?[\d.]+)/.exec(cell);
  if (max) schema.maximum = Number(max[1]);
  const def = /(?:^|[.;]\s*)default:\s*("[^"]*"|[^;]+?)\s*(?:;|$)/.exec(cell);
  if (def) {
    const raw = def[1]!.trim();
    schema.default =
      raw.startsWith('"') && raw.endsWith('"')
        ? raw.slice(1, -1)
        : raw === "true"
          ? true
          : raw === "false"
            ? false
            : Number.isNaN(Number(raw))
              ? raw
              : Number(raw);
  }

  return typeless ? { ...schema, $typeless: true } : schema;
};

const toParameter = (
  row: ParamRow,
  location: "path" | "query" | "header",
): Record<string, unknown> => {
  const { $typeless: _typeless, ...schema } = typeCellToSchema(row.type);
  return {
    name: row.name,
    in: location,
    ...(row.description ? { description: row.description } : {}),
    // Path parameters are required by definition, whatever the table says.
    required: location === "path" ? true : row.required,
    schema,
  };
};

// ============================================================================
// Page parsing — bodies and responses
// ============================================================================

const CONTENT_TYPE_RE = /^Content-Type:\s*`([^`]+)`/;

const parseJsonFence = (
  fence: Fence | undefined,
  where: string,
): unknown | undefined => {
  if (!fence || fence.lang !== "json") return undefined;
  try {
    return JSON.parse(fence.body);
  } catch (e) {
    console.warn(
      `   ⚠️  ${where}: unparseable JSON schema block — skipping (${e instanceof Error ? e.message : e})`,
    );
    return undefined;
  }
};

const buildRequestBody = (
  section: Section,
  where: string,
): Record<string, unknown> | undefined => {
  const required = section.lines.some((l) => /^Required:\s*Yes\s*$/.test(l));
  const contentType =
    section.lines
      .map((l) => CONTENT_TYPE_RE.exec(l.trim())?.[1])
      .find((c) => c !== undefined) ?? "application/json";
  const schema = parseJsonFence(fencesOf(section.lines)[0], where);
  if (schema === undefined) return undefined;
  if (contentType !== "application/json") {
    stats.nonJsonRequestBodies.push(`${where} (${contentType})`);
  }
  return { required, content: { [contentType]: { schema } } };
};

/** `## Responses` → `{ "200": { description, content? }, … }`. */
const buildResponses = (
  section: Section,
  where: string,
): Record<string, unknown> => {
  const responses: Record<string, unknown> = {};
  // Split the section into `### <status>: <text>` blocks, fence-aware so a
  // `###` inside a schema's description can't open a new block.
  const blocks: Array<{ status: string; text: string; lines: string[] }> = [];
  let inFence = false;
  let block: (typeof blocks)[number] | undefined;
  for (const line of section.lines) {
    if (line.startsWith("```")) inFence = !inFence;
    if (!inFence) {
      const h3 = /^###\s+(\d{3}):\s*(.*)$/.exec(line);
      if (h3) {
        block = { status: h3[1]!, text: h3[2]!.trim(), lines: [] };
        blocks.push(block);
        continue;
      }
    }
    if (block) block.lines.push(line);
  }

  for (const b of blocks) {
    // Upstream prints "No description" where the spec had none. A status the
    // API can reach several ways (403: spend cap / usage limit / no
    // permission) spills the rest of its text onto the lines below the
    // heading — keep those too, they're the only thing distinguishing the
    // cases.
    const trailing: string[] = [];
    {
      let inFence = false;
      for (const line of b.lines) {
        if (line.startsWith("```")) {
          inFence = !inFence;
          continue;
        }
        if (inFence) continue;
        if (line.startsWith("---")) break; // the page's link footer
        if (CONTENT_TYPE_RE.test(line.trim())) continue;
        if (line.trim()) trailing.push(line.trim());
      }
    }
    const description =
      b.text === "No description"
        ? trailing.join("\n")
        : [b.text, ...trailing].join("\n");
    const contentType = b.lines
      .map((l) => CONTENT_TYPE_RE.exec(l.trim())?.[1])
      .find((c) => c !== undefined);
    const schema = parseJsonFence(
      fencesOf(b.lines)[0],
      `${where} ${b.status} response`,
    );
    if (contentType !== undefined && contentType !== "application/json") {
      stats.nonJsonResponses.push(`${where} ${b.status} (${contentType})`);
    }
    responses[b.status] = {
      description,
      ...(contentType !== undefined && schema !== undefined
        ? { content: { [contentType]: { schema } } }
        : {}),
    };
  }
  return responses;
};

// ============================================================================
// Page → OpenAPI operation
// ============================================================================

const SECTION_LOCATIONS = {
  "Path parameters": "path",
  "Query parameters": "query",
  "Header parameters": "header",
} as const;

interface BuiltOperation {
  readonly route: string;
  readonly method: string;
  readonly operation: Record<string, unknown>;
}

const buildOperation = (
  entry: IndexEntry,
  markdown: string,
): BuiltOperation | undefined => {
  const slug = entry.pagePath.split("/").pop()!;
  const where = `${entry.group}/${slug}`;
  const page = parsePage(markdown);

  // The page's own `http` fence is authoritative; the index row is the
  // cross-check. A disagreement means one of the two is stale upstream.
  const method = page.method ?? entry.method.toLowerCase();
  const route = page.route ?? entry.route;
  if (page.route !== undefined && page.route !== entry.route) {
    console.warn(
      `   ⚠️  ${where}: route differs between page (${page.route}) and index (${entry.route}) — using the page`,
    );
  }

  const parameters: Array<Record<string, unknown>> = [];
  const declaredPathParams = new Set<string>();
  for (const [title, location] of Object.entries(SECTION_LOCATIONS)) {
    const section = page.sections.get(title);
    if (!section) continue;
    for (const row of parseParamTable(section.lines)) {
      if (!row.name) continue;
      if (location === "path") declaredPathParams.add(row.name);
      parameters.push(toParameter(row, location));
    }
  }

  // Every `{placeholder}` in the route must have a declared path parameter or
  // the operation can't build a URL — synthesize the missing ones as strings.
  for (const m of route.matchAll(/\{([^}]+)\}/g)) {
    const name = m[1]!;
    if (declaredPathParams.has(name)) continue;
    console.warn(
      `   ⚠️  ${where}: route placeholder {${name}} has no Path parameters row — assuming a required string`,
    );
    parameters.push({
      name,
      in: "path",
      required: true,
      schema: { type: "string" },
    });
  }

  const bodySection = page.sections.get("Request body");
  const requestBody = bodySection
    ? buildRequestBody(bodySection, where)
    : undefined;

  const responseSection = page.sections.get("Responses");
  const responses = responseSection
    ? buildResponses(responseSection, where)
    : {};
  if (Object.keys(responses).length === 0) {
    console.warn(`   ⚠️  ${where}: no responses documented`);
  }

  return {
    route,
    method,
    operation: {
      operationId: operationId(slug),
      summary: page.summary || entry.description,
      ...(page.description ? { description: page.description } : {}),
      tags: [entry.group],
      "x-docs-url": `https://vercel.com${entry.pagePath}`,
      ...(parameters.length ? { parameters } : {}),
      ...(requestBody ? { requestBody } : {}),
      responses,
    },
  };
};

// ============================================================================
// Main
// ============================================================================

const indexPath = path.join(specsDir, "rest-api.md");
if (!fs.existsSync(indexPath)) {
  throw new Error(
    `${indexPath} not found — run \`bun run download-api-docs\` to mirror the docs first`,
  );
}

console.log("📖 vercel docs → openapi");
console.log(`   Docs:   ${specsDir}`);
console.log(`   Output: ${outDir}`);

const indexEntries = extractIndexEntries(fs.readFileSync(indexPath, "utf-8"));
if (indexEntries.length === 0) {
  throw new Error(`no endpoint rows found in ${indexPath}`);
}

/** group slug → { group label, paths } */
const buckets = new Map<
  string,
  { label: string; paths: Record<string, Record<string, unknown>> }
>();

let parsed = 0;
let missing = 0;
const collisions: string[] = [];

for (const entry of indexEntries) {
  const slug = groupSlug(entry.group);
  if (onlyGroup && slug !== groupSlug(onlyGroup)) continue;

  const file = path.join(
    specsDir,
    ...entry.pagePath.replace(/^\/docs\//, "").split("/"),
  );
  const md = `${file}.md`;
  if (!fs.existsSync(md)) {
    console.warn(`   ⚠️  missing page: ${path.relative(rootDir, md)}`);
    missing++;
    continue;
  }

  const built = buildOperation(entry, fs.readFileSync(md, "utf-8"));
  if (!built) continue;

  let bucket = buckets.get(slug);
  if (!bucket) {
    bucket = { label: entry.group, paths: {} };
    buckets.set(slug, bucket);
  }
  const pathItem = (bucket.paths[built.route] ??= {});
  if (pathItem[built.method]) {
    // Two doc pages claiming the same METHOD + route in the same group — the
    // second would silently overwrite the first, so say so.
    collisions.push(`${slug}: ${built.method.toUpperCase()} ${built.route}`);
  }
  pathItem[built.method] = built.operation;
  parsed++;
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

let written = 0;
for (const slug of [...buckets.keys()].sort()) {
  const bucket = buckets.get(slug)!;
  const doc = {
    openapi: "3.0.3",
    info: {
      title: `Vercel ${bucket.label}`,
      version: "1.0.0",
      description:
        `Generated by scripts/docs-to-openapi.ts from the Vercel REST API ` +
        `documentation mirrored in specs/. Do not edit — regenerate, or add ` +
        `an RFC-6902 patch under patches/${slug}/.`,
    },
    servers: [{ url: "https://api.vercel.com" }],
    paths: bucket.paths,
  };
  fs.writeFileSync(
    path.join(outDir, `${slug}.json`),
    JSON.stringify(doc, null, 2) + "\n",
  );
  written++;
}

console.log(
  `\n✅ ${parsed} operations → ${written} OpenAPI documents in ${path.relative(rootDir, outDir)}`,
);
if (missing) console.warn(`   ⚠️  ${missing} page(s) missing from the mirror`);
if (collisions.length) {
  console.warn(`   ⚠️  ${collisions.length} method+route collision(s):`);
  for (const c of collisions) console.warn(`      ${c}`);
}
console.log(
  `   ℹ️  docs-table fallbacks: ${stats.typelessParams} typeless param(s) → string, ` +
    `${stats.arrayParams} array param(s) → string[]`,
);
if (stats.nonJsonRequestBodies.length || stats.nonJsonResponses.length) {
  console.log(
    `   ℹ️  non-JSON bodies (no typed surface — the shared converter models application/json only):`,
  );
  for (const b of stats.nonJsonRequestBodies) console.log(`      body: ${b}`);
  for (const r of stats.nonJsonResponses) console.log(`      resp: ${r}`);
}
