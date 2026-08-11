#!/usr/bin/env bun
/**
 * Download every Vercel REST API doc page as Markdown.
 *
 * Vercel serves a Markdown twin of every docs page at `<page>.md`, and the
 * REST API index page — https://vercel.com/docs/rest-api.md — is the whole
 * sidebar in one file: a `## <group>` heading per sidebar section followed by
 * a `| Method | Endpoint | Description |` table whose Endpoint cell links the
 * group's every endpoint page. That is the only crawl seed we need; the
 * RENDERED sidebar at /docs/rest-api is worse (it expands client-side, so the
 * HTML carries just one link per group — 40 of 365 pages).
 *
 * So: fetch the index, parse its tables, download each linked `.md`, and
 * mirror the URL path under ./specs:
 *   page: https://vercel.com/docs/rest-api/access-groups/reads-an-access-group
 *   md:   https://vercel.com/docs/rest-api/access-groups/reads-an-access-group.md
 *   file: specs/rest-api/access-groups/reads-an-access-group.md
 *
 * The index itself and the shared `errors` page come along too — the index is
 * what `docs-to-openapi.ts` reads to recover each endpoint's group (an
 * endpoint page's own front matter doesn't name it), and errors.md documents
 * the `{ error: { code, message } }` envelope the protocol decodes.
 *
 * A failed download logs a warning and the run continues. A manifest of every
 * page URL → markdown URL → group → local file is written to
 * specs/_manifest.json.
 *
 * Usage:
 *   bun scripts/download-api-docs.ts
 *   bun scripts/download-api-docs.ts --concurrency 16
 *   bun scripts/download-api-docs.ts --limit 20        # smoke test
 *   bun scripts/download-api-docs.ts --out ./specs --force
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Data, Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Argument, Command, Flag } from "effect/unstable/cli";

const ORIGIN = "https://vercel.com";

/** Docs pages that aren't endpoints but the pipeline still mirrors. */
const EXTRA_PAGES = ["/docs/rest-api/errors", "/docs/rest-api/sdk"];

// ============================================================================
// Errors
// ============================================================================

class FetchError extends Data.TaggedError("FetchError")<{
  readonly url: string;
  readonly status?: number;
  readonly cause?: unknown;
}> {}

// ============================================================================
// HTTP
// ============================================================================

/** Fetch a URL as text, failing with FetchError on a network error or non-2xx. */
const fetchText = (url: string): Effect.Effect<string, FetchError> =>
  Effect.tryPromise({
    try: async () => {
      const res = await fetch(url, {
        headers: { "user-agent": "vercel-api-docs-downloader" },
      });
      if (!res.ok) {
        throw new FetchError({ url, status: res.status });
      }
      return await res.text();
    },
    catch: (cause) =>
      cause instanceof FetchError ? cause : new FetchError({ url, cause }),
  });

// ============================================================================
// Index extraction
// ============================================================================

export interface IndexEntry {
  /** The `## <group>` section the endpoint is listed under, e.g. `projects`. */
  readonly group: string;
  /** Page path without the `.md`, e.g. /docs/rest-api/projects/create-a-project. */
  readonly pagePath: string;
  /** HTTP method from the table row, e.g. `GET`. */
  readonly method: string;
  /** Route template from the table row, e.g. `/v9/projects/{idOrName}`. */
  readonly route: string;
  /** The row's Description cell — the operation summary. */
  readonly description: string;
}

/**
 * Pull every endpoint row out of the index markdown.
 *
 * Rows look like:
 *   | **GET** | [`/v1/access-groups/{idOrName}`](/docs/rest-api/access-groups/reads-an-access-group.md) | Reads an access group |
 *
 * The group is the nearest preceding `## ` heading. The trailing `## Related`
 * section has no endpoint rows, so it drops out on its own.
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
      group = heading[1];
      continue;
    }
    const m = row.exec(line.trim());
    if (!m) continue;
    const pagePath = m[3];
    if (seen.has(pagePath)) continue;
    seen.add(pagePath);
    entries.push({
      group,
      pagePath,
      method: m[1],
      route: m[2],
      description: m[4].trim(),
    });
  }
  return entries;
};

interface PageEntry {
  readonly group: string;
  readonly pagePath: string; // e.g. /docs/rest-api/projects/create-a-project
  readonly pageUrl: string; // full page URL
  readonly markdownUrl: string; // page URL + .md
  readonly localPath: string; // absolute path of the saved .md file
}

// ============================================================================
// Download
// ============================================================================

const downloadPage = (entry: PageEntry, force: boolean) =>
  Effect.gen(function* () {
    const fs = yield* FileSystem.FileSystem;
    const path = yield* Path.Path;

    if (!force && (yield* fs.exists(entry.localPath))) {
      return true; // already downloaded; skip silently
    }

    const result = yield* fetchText(entry.markdownUrl).pipe(
      Effect.map((text) => ({ ok: true as const, text })),
      Effect.catch((err) => {
        const detail =
          err.status !== undefined
            ? `HTTP ${err.status}`
            : `${err.cause ?? "network error"}`;
        return Console.warn(
          `⚠️  Failed to download ${entry.markdownUrl} (${detail}) — skipping`,
        ).pipe(Effect.as({ ok: false as const }));
      }),
    );

    if (!result.ok) {
      return false;
    }

    yield* fs.makeDirectory(path.dirname(entry.localPath), { recursive: true });
    yield* fs.writeFileString(entry.localPath, result.text);
    return true;
  });

// ============================================================================
// CLI command
// ============================================================================

const downloadApiDocs = Command.make(
  "download-api-docs",
  {
    indexUrl: Argument.string("index-url").pipe(
      Argument.withDefault(`${ORIGIN}/docs/rest-api.md`),
      Argument.withDescription(
        "The API index markdown to crawl (default: the Vercel REST API index)",
      ),
    ),
    out: Flag.string("out").pipe(
      Flag.withDefault("specs"),
      Flag.withDescription(
        "Output directory for downloaded markdown (relative to the vercel folder)",
      ),
    ),
    concurrency: Flag.integer("concurrency").pipe(
      Flag.withDefault(12),
      Flag.withDescription("Number of pages to download in parallel"),
    ),
    limit: Flag.integer("limit").pipe(
      Flag.withDefault(0),
      Flag.withDescription(
        "Only download the first N endpoint pages (0 = all). For testing.",
      ),
    ),
    force: Flag.boolean("force").pipe(
      Flag.withDefault(false),
      Flag.withDescription("Re-download pages even if the file already exists"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;

      // The vercel/ folder is the parent of this scripts/ dir.
      const root = path.resolve(import.meta.dir, "..");
      const outDir = path.resolve(root, config.out);

      const localPathFor = (pagePath: string) =>
        path.join(outDir, ...pagePath.replace(/^\/docs\//, "").split("/")) +
        ".md";

      yield* Console.log(`▲  Vercel REST API docs downloader`);
      yield* Console.log(`   Index source: ${config.indexUrl}`);
      yield* Console.log(`   Output:       ${outDir}`);

      // 1. Fetch the index and extract every endpoint row.
      yield* Console.log(`\n📥 Fetching index from ${config.indexUrl} ...`);
      const indexMarkdown = yield* fetchText(config.indexUrl);
      let indexEntries = extractIndexEntries(indexMarkdown);
      const groups = new Set(indexEntries.map((e) => e.group));
      yield* Console.log(
        `   Found ${indexEntries.length} endpoints across ${groups.size} groups.`,
      );
      if (indexEntries.length === 0) {
        return yield* Effect.die(
          new Error(
            `no endpoint rows found in ${config.indexUrl} — the index format changed`,
          ),
        );
      }

      if (config.limit > 0) {
        indexEntries = indexEntries.slice(0, config.limit);
        yield* Console.log(
          `   --limit set: only downloading ${indexEntries.length} endpoint pages.`,
        );
      }

      // The index page itself is part of the mirror: docs-to-openapi reads it
      // back for the group of each endpoint (and the route/method/summary).
      yield* fs.makeDirectory(outDir, { recursive: true });
      yield* fs.writeFileString(
        path.join(outDir, "rest-api.md"),
        indexMarkdown,
      );

      // 2. Build the download list: endpoint pages + the non-endpoint extras.
      const entries: PageEntry[] = [
        ...indexEntries.map((e) => ({
          group: e.group,
          pagePath: e.pagePath,
          pageUrl: `${ORIGIN}${e.pagePath}`,
          markdownUrl: `${ORIGIN}${e.pagePath}.md`,
          localPath: localPathFor(e.pagePath),
        })),
        ...EXTRA_PAGES.map((p) => ({
          group: "$shared",
          pagePath: p,
          pageUrl: `${ORIGIN}${p}`,
          markdownUrl: `${ORIGIN}${p}.md`,
          localPath: localPathFor(p),
        })),
      ];

      yield* fs.writeFileString(
        path.join(outDir, "_manifest.json"),
        JSON.stringify(
          {
            source: config.indexUrl,
            count: entries.length,
            groups: [...groups].sort(),
            pages: entries.map((e) => ({
              group: e.group,
              page: e.pageUrl,
              markdown: e.markdownUrl,
              file: path.relative(outDir, e.localPath).replaceAll("\\", "/"),
            })),
          },
          null,
          2,
        ) + "\n",
      );
      yield* Console.log(
        `   Wrote manifest: ${path.join(outDir, "_manifest.json")}`,
      );

      // 3. Download every markdown page, warning + continuing on failure.
      yield* Console.log(
        `\n⬇️  Downloading ${entries.length} markdown pages (concurrency ${config.concurrency}) ...\n`,
      );

      const results = yield* Effect.forEach(
        entries,
        (entry) => downloadPage(entry, config.force),
        { concurrency: config.concurrency },
      );

      const ok = results.filter(Boolean).length;
      const failed = results.length - ok;

      yield* Console.log(
        `\n✅ Done. ${ok} downloaded${failed > 0 ? `, ⚠️  ${failed} failed (see warnings above)` : ""}.`,
      );
      yield* Console.log(`   Output saved under: ${outDir}`);
    }),
).pipe(
  Command.withDescription(
    "Crawl the Vercel REST API index and download every endpoint page's markdown into ./specs",
  ),
);

// ============================================================================
// Entry point
// ============================================================================

const program = Command.run(downloadApiDocs, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
