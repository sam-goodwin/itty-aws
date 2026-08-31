#!/usr/bin/env bun
/**
 * Mirrors Grafana's HTTP API description into ../specs/.
 *
 * Only the files the distilled grafana generator actually reads are
 * downloaded, straight from raw.githubusercontent.com — grafana/grafana is
 * never cloned, so the mirror stays as large as the spec and the vendor
 * docs snapshot.
 *
 * Usage:
 *   bun run fetch-specs.ts
 *
 * Specs are saved to:
 *   ../specs/openapi3.json
 *   ../specs/*.grafana.app-*.json
 *   ../specs/docs/*.md
 */

import { mkdirSync } from "fs";

/** Upstream repository, as `<owner>/<repo>`. */
const REPO = "grafana/grafana";
/** Upstream branch mirrored by the existing Grafana SDK. */
const REF = "main";

interface SpecFile {
  readonly path: string;
  readonly output: string;
}

const API_FILES: readonly SpecFile[] = [
  {
    path: "packages/grafana-openapi/src/apis/dashboard.grafana.app-v2.json",
    output: "dashboard.grafana.app-v2.json",
  },
  {
    path: "packages/grafana-openapi/src/apis/folder.grafana.app-v1.json",
    output: "folder.grafana.app-v1.json",
  },
  {
    path: "packages/grafana-openapi/src/apis/playlist.grafana.app-v1.json",
    output: "playlist.grafana.app-v1.json",
  },
  {
    path: "packages/grafana-openapi/src/apis/rules.alerting.grafana.app-v0alpha1.json",
    output: "rules.alerting.grafana.app-v0alpha1.json",
  },
  {
    path: "packages/grafana-openapi/src/apis/notifications.alerting.grafana.app-v1beta1.json",
    output: "notifications.alerting.grafana.app-v1beta1.json",
  },
];

/**
 * These APIs publish their OpenAPI documents from Grafana's API-discovery
 * endpoint rather than as files in the Grafana source tree.
 */
const RUNTIME_API_FILES: readonly SpecFile[] = [
  {
    path: "alertenrichment.grafana.app/v1beta1",
    output: "alertenrichment.grafana.app-v1beta1.json",
  },
  {
    path: "banners.grafana.app/v0alpha1",
    output: "banners.grafana.app-v0alpha1.json",
  },
  {
    path: "secret.grafana.app/v1beta1",
    output: "secret.grafana.app-v1beta1.json",
  },
];

const SPECS_DIR = "../specs";
const DOCS_DIR = `${SPECS_DIR}/docs`;

/**
 * Vendor HTTP API markdown pages under
 * `docs/sources/developer-resources/api-reference/http-api/`.
 * Snapshotted at fetch time so convert/generate never crawl live docs.
 */
const DOC_FILES: ReadonlyArray<{ path: string; output: string }> = [
  {
    path: "docs/sources/developer-resources/api-reference/http-api/_index.md",
    output: "_index.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/authentication.md",
    output: "authentication.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/apis.md",
    output: "apis.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/apis-migration.md",
    output: "apis-migration.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/dashboard.md",
    output: "dashboard.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/folder.md",
    output: "folder.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/playlist.md",
    output: "playlist.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/resource-history.md",
    output: "resource-history.md",
  },
  {
    path: "docs/sources/developer-resources/api-reference/http-api/secrets_management.md",
    output: "secrets_management.md",
  },
];

mkdirSync(SPECS_DIR, { recursive: true });
mkdirSync(DOCS_DIR, { recursive: true });

/**
 * The raw URL for a path in {@link REPO}. Each segment is encoded
 * individually so paths containing characters like `(` survive the round
 * trip while the separators do not.
 */
const rawUrl = (path: string) =>
  `https://raw.githubusercontent.com/${REPO}/${REF}/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;

const runtimeSpecUrl = (api: string) =>
  `https://play.grafana.org/openapi/v3/apis/${api}`;

const headers = {
  accept: "application/json, text/plain;q=0.9, */*;q=0.8",
  "user-agent": "distilled.cloud-grafana-spec-mirror",
};

async function fetchResponse(url: string): Promise<Response> {
  console.log(`Fetching ${url}...`);
  const response = await fetch(url, { headers });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`,
    );
  }
  return response;
}

async function main() {
  const specUrl = rawUrl("public/openapi3.json");
  const spec = (await (await fetchResponse(specUrl)).json()) as Record<
    string,
    unknown
  >;

  // Fail here rather than three steps later in the generator: a login page or
  // a gutted response is still valid JSON, but it is not an OpenAPI document.
  if (typeof spec.openapi !== "string" || spec.paths === undefined) {
    throw new Error(
      `${specUrl} returned JSON without \`openapi\`/\`paths\` — not an OpenAPI document`,
    );
  }

  const outputPath = `${SPECS_DIR}/openapi3.json`;
  console.log(`Writing ${outputPath}...`);
  await Bun.write(outputPath, JSON.stringify(spec, null, 2) + "\n");

  for (const file of API_FILES) {
    const url = rawUrl(file.path);
    const apiSpec = (await (await fetchResponse(url)).json()) as Record<
      string,
      unknown
    >;
    if (typeof apiSpec.openapi !== "string" || apiSpec.paths === undefined) {
      throw new Error(
        `${url} returned JSON without \`openapi\`/\`paths\` — not an OpenAPI document`,
      );
    }
    const outputPath = `${SPECS_DIR}/${file.output}`;
    console.log(`Writing ${outputPath}...`);
    await Bun.write(outputPath, JSON.stringify(apiSpec, null, 2) + "\n");
  }

  for (const file of RUNTIME_API_FILES) {
    const url = runtimeSpecUrl(file.path);
    const apiSpec = (await (await fetchResponse(url)).json()) as Record<
      string,
      unknown
    >;
    if (typeof apiSpec.openapi !== "string" || apiSpec.paths === undefined) {
      throw new Error(
        `${url} returned JSON without \`openapi\`/\`paths\` — not an OpenAPI document`,
      );
    }
    const outputPath = `${SPECS_DIR}/${file.output}`;
    console.log(`Writing ${outputPath}...`);
    await Bun.write(outputPath, JSON.stringify(apiSpec, null, 2) + "\n");
  }

  for (const file of DOC_FILES) {
    const url = rawUrl(file.path);
    const text = await (await fetchResponse(url)).text();
    if (text.trim().length === 0 || text.startsWith("404:")) {
      throw new Error(`${url} returned an empty or 404 body`);
    }
    const docPath = `${DOCS_DIR}/${file.output}`;
    console.log(`Writing ${docPath}...`);
    await Bun.write(docPath, text.endsWith("\n") ? text : `${text}\n`);
  }

  console.log(
    `Done! OpenAPI ${spec.openapi} — ${Object.keys(spec.paths as object).length} paths, ${DOC_FILES.length} docs`,
  );
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
