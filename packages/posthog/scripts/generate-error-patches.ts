/**
 * Generates per-service JSON Patch files that add observed PostHog error
 * responses (400, 403, 404) to operations in the OpenAPI spec.
 *
 * Background: PostHog's auto-generated OpenAPI spec only declares 2xx
 * responses. Live API testing (.ai-workspace/posthog-probe*.ts) shows
 * every endpoint can return:
 *   - 400 — DRF validation_error / invalid_request (when request has body or query)
 *   - 403 — authentication_error / permission_denied (Personal API Key
 *           scope/feature checks apply across the surface)
 *   - 404 — invalid_request / not_found (any op with a path parameter)
 *
 * Per-operation rules:
 *   - Always add 403
 *   - Add 404 iff the path template contains a {param}
 *   - Add 400 iff the operation has a requestBody or any non-trivial
 *     query/header parameter
 *
 * Output: one `<tag-slug>-errors.patch.json` per tag under packages/posthog/patches/.
 * The posthog generator slices the spec per-tag and applies all patches to
 * each slice; patches that target paths outside their slice fail-and-log
 * harmlessly thanks to applyAllPatches' per-file try/catch.
 */
import * as fs from "fs";
import * as path from "path";

const rootDir = path.join(import.meta.dir, "..");
const specPath = path.join(
  rootDir,
  "specs/distilled-spec-posthog/specs/openapi.json",
);
const patchDir = path.join(rootDir, "patches");

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;

function toSlug(tag: string): string {
  return tag
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function jsonPointerEscape(s: string): string {
  return s.replace(/~/g, "~0").replace(/\//g, "~1");
}

interface JsonPatchOp {
  op: "add";
  path: string;
  value: unknown;
}

const drfErrorContent = {
  "application/json": {
    schema: {
      type: "object",
      properties: {
        type: { type: "string" },
        code: { type: "string" },
        detail: { type: "string" },
        attr: { type: "string", nullable: true },
      },
    },
  },
};

const errorResponses: Record<string, { description: string }> = {
  "400": { description: "Validation or parse error (PostHog DRF response)." },
  "403": { description: "Permission denied or insufficient scope." },
  "404": { description: "Resource not found." },
};

function buildResponseValue(status: keyof typeof errorResponses) {
  return {
    description: errorResponses[status].description,
    content: drfErrorContent,
  };
}

const fullSpec = JSON.parse(fs.readFileSync(specPath, "utf-8"));

const patchesByTag = new Map<string, JsonPatchOp[]>();
const tagDisplayNames = new Map<string, string>();

let opsTotal = 0;
let added400 = 0;
let added403 = 0;
let added404 = 0;
let skippedOps = 0;

for (const [pathTemplate, pathItem] of Object.entries<Record<string, any>>(
  fullSpec.paths,
)) {
  const pathLevelParams = Array.isArray(pathItem.parameters)
    ? pathItem.parameters
    : [];
  const hasPathParam = /\{[^}]+\}/.test(pathTemplate);

  for (const method of HTTP_METHODS) {
    const op = pathItem[method];
    if (!op) continue;
    if (op.deprecated) {
      skippedOps++;
      continue;
    }
    opsTotal++;

    const tagRaw: string =
      Array.isArray(op.tags) && op.tags.length > 0 ? op.tags[0] : "default";
    const slug = toSlug(tagRaw) || "default";
    if (!tagDisplayNames.has(slug)) tagDisplayNames.set(slug, tagRaw);
    if (!patchesByTag.has(slug)) patchesByTag.set(slug, []);
    const ops = patchesByTag.get(slug)!;

    const responses = op.responses ?? {};
    const opParams: any[] = Array.isArray(op.parameters) ? op.parameters : [];
    const allParams = [...pathLevelParams, ...opParams];
    const hasBody = !!op.requestBody;
    const hasQuery = allParams.some((p) => p?.in === "query");

    const escPath = jsonPointerEscape(pathTemplate);
    const basePath = `/paths/${escPath}/${method}/responses`;

    // 400 — operations with body or query input can fail validation.
    if ((hasBody || hasQuery) && !("400" in responses)) {
      ops.push({
        op: "add",
        path: `${basePath}/400`,
        value: buildResponseValue("400"),
      });
      added400++;
    }

    // 403 — Personal API Key scope checks apply across the surface.
    if (!("403" in responses)) {
      ops.push({
        op: "add",
        path: `${basePath}/403`,
        value: buildResponseValue("403"),
      });
      added403++;
    }

    // 404 — any operation that targets a specific resource (path param).
    if (hasPathParam && !("404" in responses)) {
      ops.push({
        op: "add",
        path: `${basePath}/404`,
        value: buildResponseValue("404"),
      });
      added404++;
    }
  }
}

// Reset patches dir (only remove files we own).
if (fs.existsSync(patchDir)) {
  for (const f of fs.readdirSync(patchDir)) {
    if (f.endsWith("-errors.patch.json")) {
      fs.unlinkSync(path.join(patchDir, f));
    }
  }
} else {
  fs.mkdirSync(patchDir, { recursive: true });
}

const sortedSlugs = [...patchesByTag.keys()].sort();
let filesWritten = 0;
for (const slug of sortedSlugs) {
  const patches = patchesByTag.get(slug)!;
  if (patches.length === 0) continue;
  const tagDisplay = tagDisplayNames.get(slug) ?? slug;
  const file = path.join(patchDir, `${slug}-errors.patch.json`);
  const content = {
    description: `Auto-generated PostHog error responses (400/403/404) for tag "${tagDisplay}". See generate-error-patches.ts.`,
    patches,
  };
  fs.writeFileSync(file, JSON.stringify(content, null, 2) + "\n");
  filesWritten++;
}

console.log(
  `\n✨ Wrote ${filesWritten} patch file(s) to ${path.relative(process.cwd(), patchDir)}`,
);
console.log(
  `   ops considered: ${opsTotal}, deprecated skipped: ${skippedOps}`,
);
console.log(
  `   responses added — 400: ${added400}, 403: ${added403}, 404: ${added404}`,
);
