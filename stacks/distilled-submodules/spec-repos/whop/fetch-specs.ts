#!/usr/bin/env bun
/**
 * Fetches Whop's two OpenAPI descriptions to ../specs/.
 *
 * Whop documents ONE HTTP API (`https://api.whop.com/api/v1`, one bearer key,
 * one error envelope) through TWO reference surfaces, and publishes a separate
 * OpenAPI 3.1 document behind each:
 *
 *   • VERSIONED — https://docs.whop.com/api-reference/beta/overview
 *     served from `/openapi/api-v1-native.json`
 *   • LEGACY — https://docs.whop.com/developer/api/getting-started
 *     served from `/openapi/api-v1-stable.json`
 *
 * Neither is a superset of the other, so the generator merges them (versioned
 * wins every route both describe) and BOTH are mirrored here. There is no git
 * repo or release tag to track — the documents are served straight off the
 * docs host — so the mirror snapshots them.
 *
 * Usage:
 *   bun run fetch-specs.ts
 *
 * The specs are saved to:
 *   ../specs/api-v1-native.json
 *   ../specs/api-v1-stable.json
 */

import { existsSync, mkdirSync } from "fs";

const ORIGIN = "https://docs.whop.com";
const SPECS_DIR = "../specs";

const DOCUMENTS = [
  {
    surface: "versioned",
    remote: "/openapi/api-v1-native.json",
    file: "api-v1-native.json",
  },
  {
    surface: "legacy",
    remote: "/openapi/api-v1-stable.json",
    file: "api-v1-stable.json",
  },
] as const;

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

/**
 * A quick count, so a truncated or gutted upstream response is obvious at the
 * point of download rather than three steps later in the generator.
 */
function census(spec: Record<string, any>) {
  const tags = new Set<string>();
  let operations = 0;
  for (const item of Object.values<any>(spec.paths)) {
    for (const method of HTTP_METHODS) {
      const op = item?.[method];
      if (!op) continue;
      operations++;
      tags.add(op.tags?.[0] ?? "(untagged)");
    }
  }
  return {
    paths: Object.keys(spec.paths).length,
    operations,
    tags: tags.size,
    schemas: Object.keys(spec.components?.schemas ?? {}).length,
    webhooks: Object.keys(spec.webhooks ?? {}).length,
  };
}

if (!existsSync(SPECS_DIR)) {
  mkdirSync(SPECS_DIR, { recursive: true });
}

async function main() {
  /** Surface → the `x-api-version-date` its document declares. */
  const versionDates: Record<string, string> = {};

  for (const doc of DOCUMENTS) {
    const url = `${ORIGIN}${doc.remote}`;
    console.log(`Fetching ${doc.surface} spec from ${url}...`);

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        "user-agent": "distilled.cloud-whop-spec-mirror",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${doc.file}: ${response.status} ${response.statusText}`,
      );
    }

    const spec = (await response.json()) as Record<string, any>;

    // Fail here rather than three steps later in the generator: a login page or
    // a gutted response is still valid JSON, but it is not an OpenAPI document.
    if (typeof spec.openapi !== "string" || spec.paths === undefined) {
      throw new Error(
        `${url} returned JSON without \`openapi\`/\`paths\` — not an OpenAPI document`,
      );
    }

    // The version pin the generated SDK sends on every request is read off
    // this field — a document without one would ship an SDK pinned to nothing.
    const date = spec.info?.["x-api-version-date"];
    if (typeof date !== "string") {
      throw new Error(
        `${url} has no \`info.x-api-version-date\` — nothing to pin the SDK to`,
      );
    }
    versionDates[doc.surface] = date;

    const outputPath = `${SPECS_DIR}/${doc.file}`;
    console.log(`Writing spec to ${outputPath}...`);
    // 2-space indent + trailing newline, matching the package's own downloader,
    // so a whitespace-only change upstream produces no diff.
    await Bun.write(outputPath, JSON.stringify(spec, null, 2) + "\n");

    const c = census(spec);
    console.log(
      `  OpenAPI ${spec.openapi}, api-version-date ${date} — ${c.paths} paths, ` +
        `${c.operations} operations, ${c.tags} tags, ${c.schemas} schemas, ` +
        `${c.webhooks} webhook events`,
    );
  }

  // The merged SDK sends ONE `Api-Version-Date` header for every call,
  // versioned and legacy alike. Upstream has always stamped both documents
  // with the same date; if that stops being true the merge no longer has one
  // pin to send, and the split has to be modeled rather than assumed. Fail
  // the nightly run so it is caught here and not in a mis-decoded response.
  const distinct = new Set(Object.values(versionDates));
  if (distinct.size > 1) {
    throw new Error(
      `The two surfaces no longer share one \`x-api-version-date\`: ` +
        `${JSON.stringify(versionDates)}. A merged client can send only one pin.`,
    );
  }

  console.log(`Done! Both surfaces at api-version-date ${[...distinct][0]}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
