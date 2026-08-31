#!/usr/bin/env bun
/**
 * Fetches the Cloudflare API method-page markdown the generator reads
 * to ../specs/.
 *
 * Cloudflare's API reference lives at developers.cloudflare.com/api/. Each
 * operation is a page under /api/resources/.../methods/..., and the docs
 * host serves a markdown twin at `<page>/index.md`. Resource *index* pages
 * (`/api/resources/<name>/index.md`) still return the full HTML document
 * (~MB each), so they are not fetched — `spec-to-smithy.ts` only walks
 * method pages anyway.
 *
 * The page list is the sidebar of https://developers.cloudflare.com/api/,
 * which server-renders the whole navigation tree into one HTML page.
 *
 * A page that is not markdown (HTML slipped through, empty body) is
 * skipped. A run that loses more than 5% of the crawl skips the prune, so a
 * docs host having a bad day cannot empty the corpus.
 *
 * Usage:
 *   bun run fetch-specs.ts
 *
 * The specs are saved to:
 *   ../specs/api/resources/**\/methods/**\/index.md
 *   ../specs/_manifest.json
 */

import { existsSync, mkdirSync } from "fs";
import { mkdir, readdir, rm, writeFile } from "fs/promises";
import { dirname, join, relative } from "path";

const ORIGIN = "https://developers.cloudflare.com";
const INDEX_URL = `${ORIGIN}/api/`;
const SPECS_DIR = "../specs";
const RESOURCES_DIR = `${SPECS_DIR}/api/resources`;
const CONCURRENCY = 12;
const USER_AGENT = "distilled.cloud-cloudflare-spec-mirror";

/**
 * Refuse to prune when more than this fraction of the crawl failed. A docs
 * host having a bad day must not be able to delete the mirrored corpus.
 */
const MAX_FAILURE_RATE_FOR_PRUNE = 0.05;

/** A page bigger than this is HTML we failed to reject by content-type. */
const MAX_MARKDOWN_BYTES = 512 * 1024;

// ============================================================================
// HTTP
// ============================================================================

class FetchError extends Error {
  constructor(
    readonly url: string,
    readonly status?: number,
    readonly reason?: unknown,
  ) {
    super(
      `${url} — ${status !== undefined ? `HTTP ${status}` : `${reason ?? "network error"}`}`,
    );
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Fetch a URL as text. The docs host answers a burst of concurrent requests
 * with the odd 5xx, so those and network failures are retried; a 404 is
 * genuinely gone and retrying it only slows the run down.
 */
async function fetchText(url: string, attempts = 4): Promise<string> {
  let lastError: FetchError | undefined;
  for (let attempt = 0; attempt < attempts; attempt++) {
    let error: FetchError;
    try {
      const response = await fetch(url, {
        headers: { "user-agent": USER_AGENT },
      });
      if (response.ok) return await response.text();
      error = new FetchError(url, response.status);
      if (response.status < 500) throw error;
    } catch (cause) {
      error =
        cause instanceof FetchError
          ? cause
          : new FetchError(url, undefined, cause);
      if (error.status !== undefined && error.status < 500) throw error;
    }
    lastError = error;
    if (attempt < attempts - 1) await sleep(500 * 2 ** attempt);
  }
  throw lastError;
}

// ============================================================================
// Sidebar
// ============================================================================

/**
 * Pull every API *method* page path out of the rendered sidebar HTML.
 *
 * The sidebar lists pages as `href="/api/..."`. Resource indexes are skipped
 * — they still serve HTML at `index.md`. We drop file extensions and Astro
 * assets, normalize away trailing slashes, and dedupe.
 */
function extractMethodPaths(html: string): string[] {
  const seen = new Set<string>();
  const re = /href="(\/api\/resources\/[^"#?]*)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(html)) !== null) {
    let path = match[1]!;
    if (path.includes("/_astro/")) continue;
    if (!path.includes("/methods/")) continue;
    const lastSegment = path.split("/").pop() ?? "";
    if (lastSegment.includes(".")) continue;
    if (path.length > "/api".length && path.endsWith("/")) {
      path = path.slice(0, -1);
    }
    seen.add(path);
  }
  return Array.from(seen).sort();
}

function isHtml(text: string): boolean {
  const start = text.trimStart().slice(0, 32).toLowerCase();
  return start.startsWith("<!doctype") || start.startsWith("<html");
}

const decodeEntities = (s: string): string =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const stripTags = (s: string): string =>
  decodeEntities(
    s
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/<svg[\s\S]*?<\/svg>/gi, "")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();

interface ClassHit {
  readonly inner: string;
  readonly end: number;
}

/**
 * Inner HTML of the first element whose class list contains `className`,
 * starting at `from`. Class match is a token match so `stldocs-property`
 * does not hit `stldocs-property-info`.
 */
function innerByClass(
  html: string,
  className: string,
  from = 0,
): ClassHit | undefined {
  const re = /<([a-z][a-z0-9]*)\b[^>]*\bclass="([^"]*)"[^>]*>/gi;
  re.lastIndex = from;
  let open: RegExpExecArray | null;
  while ((open = re.exec(html)) !== null) {
    const classes = open[2]!.split(/\s+/);
    if (!classes.includes(className)) continue;
    const tag = open[1]!;
    const innerStart = open.index + open[0].length;
    let depth = 1;
    const finder = new RegExp(`<(/)?${tag}\\b[^>]*>`, "gi");
    const rest = html.slice(innerStart);
    let m: RegExpExecArray | null;
    while ((m = finder.exec(rest)) !== null) {
      if (m[0].startsWith("</")) depth--;
      else if (!m[0].endsWith("/>")) depth++;
      if (depth === 0) {
        return {
          inner: rest.slice(0, m.index),
          end: innerStart + m.index + m[0].length,
        };
      }
    }
  }
  return undefined;
}

const HTTP_METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"] as const;

/**
 * Some method pages still return the full HTML document at index.md (the
 * markdown converter gives up on the heavier ones — Workers, DNS, Zero
 * Trust). The page has structured `stldocs-*` markup, so we turn THAT into
 * the pre-Starlight markdown dialect spec-to-smithy already parses, using
 * the real DOM nesting the Starlight dump loses.
 */
function htmlToLegacyMarkdown(html: string): string | undefined {
  const paneStart = html.indexOf('class="stldocs-method-title"');
  if (paneStart < 0) return undefined;
  const pane = html.slice(Math.max(0, paneStart - 800));
  const titleHit = innerByClass(pane, "stldocs-method-title");
  const uriHit = innerByClass(pane, "stldocs-method-route-endpoint");
  const title = titleHit ? stripTags(titleHit.inner) : "";
  const uri = uriHit ? stripTags(uriHit.inner) : "";
  if (!title || !uri.startsWith("/")) return undefined;
  let method: string | undefined;
  const badge = innerByClass(pane, "stl-ui-badge__content");
  const badgeText = badge ? stripTags(badge.inner).toUpperCase() : "";
  if ((HTTP_METHODS as readonly string[]).includes(badgeText)) {
    method = badgeText;
  }
  if (!method) {
    const m = pane.match(/stl-ui-badge--http-(get|post|put|patch|delete)/i);
    if (m) method = m[1]!.toUpperCase();
  }
  if (!method) return undefined;

  const descHtml = innerByClass(pane, "stldocs-method-description");
  const descMd = descHtml
    ? innerByClass(descHtml.inner, "stldocs-markdown")
    : undefined;
  const doc = descMd
    ? stripTags(descMd.inner)
    : descHtml
      ? stripTags(descHtml.inner)
      : "";

  const emitProperties = (container: string, indent: number): string[] => {
    const out: string[] = [];
    let cursor = 0;
    while (true) {
      const hit = innerByClass(container, "stldocs-property", cursor);
      if (hit === undefined) break;
      const decl = innerByClass(hit.inner, "stldocs-property-declaration");
      const declText = decl ? stripTags(decl.inner) : "";
      const colon = declText.indexOf(":");
      if (colon > 0) {
        const name = declText.slice(0, colon).trim();
        const typeStr = declText.slice(colon + 1).trim();
        const pad = "  ".repeat(indent);
        out.push(`${pad}- \`${name}: ${typeStr}\``);
        const desc = innerByClass(hit.inner, "stldocs-property-description");
        if (desc) {
          const prose = stripTags(desc.inner);
          if (prose) out.push(`${pad}  ${prose}`);
        }
        const nested = innerByClass(hit.inner, "stldocs-properties");
        if (nested) out.push(...emitProperties(nested.inner, indent + 1));
      }
      cursor = hit.end;
    }
    return out;
  };

  const sections: string[] = [];
  const params = innerByClass(pane, "stldocs-method-parameters");
  if (params) {
    const headingRe = /<h5\b[^>]*>([\s\S]*?)<\/h5>/gi;
    let heading: RegExpExecArray | null;
    const headings: Array<{ name: string; index: number }> = [];
    while ((heading = headingRe.exec(params.inner)) !== null) {
      const name = stripTags(heading[1]!)
        .replace(/\s*(Expand|Collapse|JSON)\s*/gi, " ")
        .trim();
      if (/parameters$/i.test(name)) {
        headings.push({ name, index: heading.index });
      }
    }
    for (let i = 0; i < headings.length; i++) {
      const chunk = params.inner.slice(
        headings[i]!.index,
        headings[i + 1]?.index ?? params.inner.length,
      );
      const body = emitProperties(chunk, 0);
      if (body.length === 0) continue;
      sections.push(`### ${headings[i]!.name}`, "", ...body, "");
    }
  }

  const returns = innerByClass(pane, "stldocs-method-returns");
  if (returns) {
    const body = emitProperties(returns.inner, 0);
    if (body.length) sections.push("### Returns", "", ...body, "");
  }

  return [
    `## ${title}`,
    "",
    `**${method.toLowerCase()}** \`${uri}\``,
    "",
    ...(doc ? [doc, ""] : []),
    ...sections,
  ].join("\n");
}

/** A method page we will actually convert: a heading plus an HTTP method line. */
function looksLikeMethodMarkdown(text: string): boolean {
  if (isHtml(text)) return false;
  if (text.length > MAX_MARKDOWN_BYTES) return false;
  return (
    (/^#{1,3}\s+\S/m.test(text) &&
      /^(GET|POST|PUT|PATCH|DELETE)\s*\//m.test(text)) ||
    /^\*\*(get|post|put|patch|delete)\*\*/im.test(text)
  );
}

interface PageEntry {
  readonly pagePath: string;
  readonly pageUrl: string;
  readonly markdownUrl: string;
  readonly localPath: string;
}

/** Run `worker` over `items`, at most `limit` at a time, in order. */
async function mapConcurrent<T, R>(
  items: readonly T[],
  limit: number,
  worker: (item: T) => Promise<R>,
): Promise<R[]> {
  const results = Array.from<R>({ length: items.length });
  let next = 0;
  const runners = Array.from(
    { length: Math.min(limit, items.length) },
    async () => {
      while (true) {
        const index = next++;
        if (index >= items.length) return;
        results[index] = await worker(items[index]!);
      }
    },
  );
  await Promise.all(runners);
  return results;
}

/**
 * Delete mirrored markdown that the sidebar no longer lists. `git add -A` in
 * the update workflow turns that into a real deletion, so a page removed
 * from the docs site does not linger here forever.
 */
async function prune(keep: ReadonlySet<string>) {
  if (!existsSync(RESOURCES_DIR)) return;
  const stale: string[] = [];
  const walk = async (dir: string): Promise<void> => {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (entry.name.endsWith(".md") && !keep.has(full)) {
        stale.push(full);
      }
    }
  };
  await walk(RESOURCES_DIR);

  for (const file of stale) await rm(file);
  if (stale.length > 0) {
    console.log(`  Pruned ${stale.length} page(s) no longer listed upstream`);
  }
}

async function main() {
  if (!existsSync(SPECS_DIR)) {
    mkdirSync(SPECS_DIR, { recursive: true });
  }

  console.log(`Fetching sidebar from ${INDEX_URL}...`);
  const html = await fetchText(INDEX_URL);
  const pagePaths = extractMethodPaths(html);
  console.log(`  ${pagePaths.length} method pages in the sidebar`);

  if (pagePaths.length === 0) {
    throw new Error(
      `${INDEX_URL} listed no method pages under /api/resources — refusing to continue`,
    );
  }

  const entries: PageEntry[] = pagePaths.map((pagePath) => {
    const pageUrl = `${ORIGIN}${pagePath}`;
    return {
      pagePath,
      pageUrl,
      markdownUrl: `${pageUrl}/index.md`,
      localPath: join(
        SPECS_DIR,
        ...pagePath.replace(/^\//, "").split("/"),
        "index.md",
      ),
    };
  });

  await mkdir(SPECS_DIR, { recursive: true });
  await writeFile(
    join(SPECS_DIR, "_manifest.json"),
    JSON.stringify(
      {
        source: INDEX_URL,
        count: entries.length,
        pages: entries.map((e) => ({
          page: e.pageUrl,
          markdown: e.markdownUrl,
          file: relative(SPECS_DIR, e.localPath),
        })),
      },
      null,
      2,
    ) + "\n",
  );

  console.log(
    `\nDownloading ${entries.length} markdown pages (concurrency ${CONCURRENCY})...`,
  );

  const saved = await mapConcurrent(entries, CONCURRENCY, async (entry) => {
    let markdown: string;
    try {
      markdown = await fetchText(entry.markdownUrl);
    } catch (cause) {
      console.warn(
        `  Failed to download ${entry.markdownUrl} (${cause}) — skipping`,
      );
      return undefined;
    }
    if (isHtml(markdown)) {
      const converted = htmlToLegacyMarkdown(markdown);
      if (!converted) {
        console.warn(
          `  ${entry.markdownUrl} returned HTML that did not parse as a method page — skipping`,
        );
        return undefined;
      }
      markdown = converted;
    }
    if (!looksLikeMethodMarkdown(markdown)) {
      console.warn(
        `  ${entry.markdownUrl} is not method-page markdown — skipping`,
      );
      return undefined;
    }
    await mkdir(dirname(entry.localPath), { recursive: true });
    await writeFile(entry.localPath, markdown);
    return entry.localPath;
  });

  const kept = saved.filter((path): path is string => path !== undefined);
  const failed = entries.length - kept.length;
  console.log(
    `  ${kept.length} downloaded` + (failed > 0 ? `, ${failed} failed` : ""),
  );

  if (kept.length === 0) {
    throw new Error(
      `Every method page failed to download as markdown — refusing to continue`,
    );
  }

  if (failed / entries.length > MAX_FAILURE_RATE_FOR_PRUNE) {
    console.warn(
      `  ${failed}/${entries.length} pages failed — skipping the prune this run`,
    );
    return;
  }
  await prune(new Set(kept));
  console.log("\nDone!");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
