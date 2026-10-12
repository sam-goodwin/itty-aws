#!/usr/bin/env node
/**
 * Mirrors Scaleway's OpenAPI documents into ../specs/.
 *
 * Scaleway publishes one OpenAPI 3.1 document per API — the proto service
 * `scaleway.<product>.<version>.<Api>` its SDKs are generated from — through
 * its developer portal (https://www.scaleway.com/en/developers/api/). The
 * portal is a Zudoku SPA, so there is no index file: the list of documents
 * lives in the portal's client bundle, one
 * `downloadUrl: "/en/developers/api/<route>/<version>/schema.yml"` per API
 * version beside the processed module named after the proto service. This
 * script reads the landing page, follows it to the bundle, extracts those
 * pairs, and downloads every `schema.yml`. The older
 * `/en/developers/static/scaleway.<…>.Api.yml` URLs answer 404.
 *
 * Every published version is kept — `instance` v1 beside v2alpha1, `block`
 * v1 beside v1alpha1 — because Scaleway serves all of them and its own SDKs
 * generate one client per version. A product added to the portal is picked
 * up on the next daily refetch.
 *
 * Usage:
 *   node fetch-specs.ts
 *
 * Specs are saved to:
 *   ../specs/<product>[_<api>]_<version>.json
 *   ../specs/_manifest.json
 */

import { mkdirSync } from "fs";
import { writeFile } from "fs/promises";
import YAML from "yaml";

const ORIGIN = "https://www.scaleway.com";
const PORTAL = `${ORIGIN}/en/developers/api/`;

const SPECS_DIR = "../specs";
const USER_AGENT = "distilled.cloud-scaleway-spec-mirror";

/**
 * Fewer documents than this means the bundle changed shape (or the portal
 * served something else), not that Scaleway retired most of its APIs.
 */
const MIN_DOCUMENTS = 60;

mkdirSync(SPECS_DIR, { recursive: true });

async function fetchOk(url: string, accept: string): Promise<Response> {
  const response = await fetch(url, {
    headers: { "user-agent": USER_AGENT, accept },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return response;
}

/** `/en/developers/api/<route>/<version>/schema.yml` + `scaleway.<product>.<version>.<Api>` */
const ENTRY =
  /downloadUrl:`(\/en\/developers\/api\/[^`]+\/schema\.yml)`[^}]*?input:`[^`]*?scaleway\.([a-z0-9_]+)\.(v\d+(?:(?:alpha|beta)\d*)?)\.([A-Za-z0-9]+)\.yml\.js`/g;

interface Document {
  readonly proto: string;
  readonly product: string;
  readonly version: string;
  readonly api: string;
  readonly url: string;
  readonly slug: string;
}

/** `FinOpsApi` → `fin_ops`; `Api` → `` */
const apiSlug = (api: string): string =>
  api
    .replace(/Api$/, "")
    .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
    .toLowerCase();

/** `scaleway.lb.v1.ZonedApi` → `lb_zoned_v1`; `scaleway.k8s.v1.Api` → `k8s_v1`. */
const toSlug = (product: string, api: string, version: string): string =>
  [product, apiSlug(api), version].filter(Boolean).join("_");

async function listDocuments(): Promise<Document[]> {
  console.log(`Reading ${PORTAL} …`);
  const html = await (await fetchOk(PORTAL, "text/html")).text();
  const scripts = [...html.matchAll(/<script[^>]+src="([^"]+\.js)"/g)].map((m) => m[1]!);
  if (scripts.length === 0) {
    throw new Error(`${PORTAL} has no <script src> — the portal changed shape`);
  }

  const documents = new Map<string, Document>();
  for (const script of scripts) {
    const url = new URL(script, PORTAL).href;
    console.log(`Scanning ${url} …`);
    const bundle = await (await fetchOk(url, "application/javascript")).text();
    for (const m of bundle.matchAll(ENTRY)) {
      const [, path, product, version, api] = m as unknown as [
        string,
        string,
        string,
        string,
        string,
      ];
      const proto = `scaleway.${product}.${version}.${api}`;
      const slug = toSlug(product, api, version);
      const existing = documents.get(slug);
      if (existing !== undefined && existing.proto !== proto) {
        throw new Error(`${existing.proto} and ${proto} both map to ${slug}`);
      }
      documents.set(slug, { proto, product, version, api, url: `${ORIGIN}${path}`, slug });
    }
  }

  if (documents.size < MIN_DOCUMENTS) {
    throw new Error(
      `found ${documents.size} schema.yml download(s) in the portal bundle (expected ≥ ${MIN_DOCUMENTS}) — ` +
        `the bundle no longer pairs downloadUrl with the proto service name`,
    );
  }
  return [...documents.values()].sort((a, b) => a.slug.localeCompare(b.slug));
}

async function main() {
  const documents = await listDocuments();
  const manifest: Array<{
    proto: string;
    product: string;
    version: string;
    api: string;
    url: string;
    output: string;
    title: string;
    openapi: string;
    paths: number;
  }> = [];

  for (const document of documents) {
    console.log(`Fetching ${document.url}...`);
    const text = await (await fetchOk(document.url, "application/yaml, text/yaml, */*")).text();
    let doc: Record<string, unknown> | null;
    try {
      doc = YAML.parse(text, { maxAliasCount: -1 }) as Record<string, unknown> | null;
    } catch (cause) {
      throw new Error(`${document.url} is not YAML (the portal answered with something else)`, {
        cause,
      });
    }
    if (
      doc === null ||
      typeof doc !== "object" ||
      typeof doc.openapi !== "string" ||
      doc.paths === undefined
    ) {
      throw new Error(
        `${document.url} parsed without \`openapi\`/\`paths\` — not an OpenAPI document`,
      );
    }

    const output = `${document.slug}.json`;
    const pathCount = Object.keys(doc.paths as object).length;
    console.log(`Writing ${SPECS_DIR}/${output} (${document.proto}, ${pathCount} paths)...`);
    await writeFile(`${SPECS_DIR}/${output}`, JSON.stringify(doc, null, 2) + "\n");
    manifest.push({
      proto: document.proto,
      product: document.product,
      version: document.version,
      api: document.api,
      url: document.url,
      output,
      title: String((doc.info as { title?: unknown } | undefined)?.title ?? ""),
      openapi: doc.openapi,
      paths: pathCount,
    });
  }

  await writeFile(`${SPECS_DIR}/_manifest.json`, JSON.stringify(manifest, null, 2) + "\n");
  console.log(`Done! ${manifest.length} Scaleway OpenAPI document(s) → ${SPECS_DIR}`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
