/**
 * Clerk SDK Code Generator
 *
 * Clerk publishes two distinct OpenAPI specs:
 *   - Platform API  (workspace/application management, "platform_api_access_token" bearer)
 *   - Backend API   (per-instance resources, "bearerAuth" with secret key)
 *
 * Both live at https://api.clerk.com/v1 but require different credentials and
 * have largely disjoint operation sets, so we generate them into separate
 * subdirectories and wire each subdirectory to its own API client instance:
 *
 *   src/operations/platform/*  ->  imports { API } from ../../../platform-client
 *   src/operations/backend/*   ->  imports { API } from ../../../backend-client
 *
 * Within each spec, operations are further grouped using Clerk's Speakeasy
 * vendor extensions:
 *   - `x-speakeasy-group`         -> the subdirectory + namespace the operation
 *                                    lives under (e.g. "sessions", "users")
 *   - `x-speakeasy-name-override` -> the operation's function/file name within
 *                                    that group (e.g. "createToken", "revoke")
 *
 * So `CreateSessionToken` (group "sessions", name "createToken") becomes
 * `src/operations/backend/sessions/createToken.ts` and is reachable as
 * `Backend.sessions.createToken`.
 *
 * The shared OpenAPI generator names operations purely off `operationId` and
 * emits a flat directory, so we implement grouping the simplest way possible:
 * split each spec into one sub-spec per group (rewriting each operation's
 * `operationId` to its name override) and run the generator once per group.
 */
import { generateFromOpenAPI } from "@distilled.cloud/core/openapi/generate";
import { applyAllPatches } from "@distilled.cloud/core/json-patch";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

const HTTP_METHODS = ["get", "post", "put", "patch", "delete"] as const;
type HttpMethod = (typeof HTTP_METHODS)[number];

const rootDir = path.join(import.meta.dir, "..");
const specDir = path.join(rootDir, "specs/distilled-spec-clerk/specs");
const patchDir = path.join(rootDir, "patches");
const operationsRoot = path.join(rootDir, "src/operations");

interface SpecConfig {
  name: "platform" | "backend";
  specPath: string;
  /** Bare client module name under `src/` (e.g. "backend-client"). */
  clientModule: string;
  /**
   * How to bucket operations into groups/namespaces:
   *   - "group" -> by `x-speakeasy-group` (falls back to tag, then "misc")
   *   - "tag"   -> by the first OpenAPI tag (falls back to group, then "misc")
   *
   * The Backend spec authors a distinct `x-speakeasy-group` per resource, but
   * the Platform spec lumps everything under a single `platform` group, so we
   * fan that one out by tag instead.
   */
  groupBy: "group" | "tag";
}

const SPECS: SpecConfig[] = [
  {
    name: "platform",
    specPath: path.join(specDir, "openapi.json"),
    clientModule: "platform-client",
    groupBy: "tag",
  },
  {
    name: "backend",
    specPath: path.join(specDir, "spec-1.json"),
    clientModule: "backend-client",
    groupBy: "group",
  },
];

const STATUS_TO_ERROR_CLASS: Record<string, string> = {
  "400": "BadRequest",
  "402": "PaymentRequired",
  "403": "Forbidden",
  "404": "NotFound",
  "409": "Conflict",
  "410": "Gone",
  "413": "PayloadTooLarge",
  "422": "UnprocessableEntity",
};

// Wipe a dir so stale files from removed operations/groups don't accumulate.
function resetDir(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
  fs.mkdirSync(dir, { recursive: true });
}

/** Strip characters that aren't valid in a JS identifier; prefix if leading digit. */
function sanitizeIdentifier(s: string): string {
  const cleaned = s.replace(/[^a-zA-Z0-9$_]/g, "");
  return /^[0-9]/.test(cleaned) ? `_${cleaned}` : cleaned || "misc";
}

/**
 * camelCase a human label like "API Keys" / "Instance Settings" into a valid
 * identifier ("apiKeys" / "instanceSettings"). Used only for the tag fallback;
 * Speakeasy groups are already valid camelCase and are passed through as-is so
 * we don't mangle e.g. "oauthAccessTokens" into "oauthaccesstokens".
 */
function camelCaseLabel(s: string): string {
  // Tag labels are human Title Case ("JWT Templates", "Redirect URLs"), so we
  // fully normalize each word — lowercasing acronyms — to match the camelCase
  // conventions the Backend spec's own groups use (jwtTemplates, redirectUrls).
  const words = s.split(/[-_\s]+/).filter(Boolean);
  const camel = words
    .map((w, i) => {
      const lower = w.toLowerCase();
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join("");
  return sanitizeIdentifier(camel);
}

function speakeasyGroup(operation: Record<string, unknown>): string | undefined {
  const group = operation["x-speakeasy-group"];
  return typeof group === "string" && group.length > 0
    ? sanitizeIdentifier(group)
    : undefined;
}

function firstTagGroup(operation: Record<string, unknown>): string | undefined {
  const tags = operation["tags"];
  return Array.isArray(tags) && typeof tags[0] === "string" && tags[0].length
    ? camelCaseLabel(tags[0])
    : undefined;
}

/**
 * Determine the group a given operation belongs to, per the spec's `groupBy`
 * strategy. Each strategy has a fallback to the other signal, then to "misc".
 */
function groupOf(
  operation: Record<string, unknown>,
  groupBy: SpecConfig["groupBy"],
): string {
  const byGroup = speakeasyGroup(operation);
  const byTag = firstTagGroup(operation);
  const primary = groupBy === "tag" ? byTag : byGroup;
  const secondary = groupBy === "tag" ? byGroup : byTag;
  return primary ?? secondary ?? "misc";
}

type PathItem = Record<string, unknown> & {
  parameters?: unknown;
};

for (const spec of SPECS) {
  const raw = JSON.parse(fs.readFileSync(spec.specPath, "utf-8")) as {
    paths: Record<string, PathItem>;
    [key: string]: unknown;
  };

  // Apply patches once against the full spec (refs resolve against the whole
  // document), then split — so per-group generation never re-patches and patch
  // targets are never "missing" just because they live in another group.
  const { errors: patchErrors } = applyAllPatches(raw, patchDir);
  if (patchErrors.length > 0) {
    console.error("Patch errors:");
    for (const msg of patchErrors) console.error(`  ✗ ${msg}`);
    process.exit(1);
  }

  // Bucket each operation under its group, rewriting the operationId to the
  // name override so the generator derives function/file/schema names from it.
  const groups = new Map<string, Record<string, PathItem>>();
  for (const [pathTemplate, pathItem] of Object.entries(raw.paths)) {
    const pathLevelParams = pathItem.parameters;
    for (const method of HTTP_METHODS) {
      const operation = pathItem[method] as
        | (Record<string, unknown> & { operationId?: string })
        | undefined;
      if (!operation) continue;

      const nameOverride = operation["x-speakeasy-name-override"];
      if (typeof nameOverride === "string" && nameOverride.length > 0) {
        operation.operationId = nameOverride;
      }

      const group = groupOf(operation, spec.groupBy);
      let groupPaths = groups.get(group);
      if (!groupPaths) {
        groupPaths = {};
        groups.set(group, groupPaths);
      }
      if (!groupPaths[pathTemplate]) {
        groupPaths[pathTemplate] = pathLevelParams
          ? ({ parameters: pathLevelParams } as PathItem)
          : ({} as PathItem);
      }
      (groupPaths[pathTemplate] as Record<string, unknown>)[method] = operation;
    }
  }

  const specOutputDir = path.join(operationsRoot, spec.name);
  resetDir(specOutputDir);

  // Write each group's sub-spec to a temp dir and generate from it. Passing a
  // non-existent patch dir makes the generator skip re-patching (already done).
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), `clerk-${spec.name}-`));
  const noPatchDir = path.join(tmpDir, "__no_patches__");

  const allGroupNames = [...groups.keys()].sort();
  // Track only groups that actually emitted operations — a group whose ops are
  // all deprecated produces an empty dir we shouldn't barrel-export.
  const emittedGroups: string[] = [];
  for (const group of allGroupNames) {
    const subSpec = { ...raw, paths: groups.get(group)! };
    const subSpecPath = path.join(tmpDir, `${group}.json`);
    fs.writeFileSync(subSpecPath, JSON.stringify(subSpec));

    const groupOutputDir = path.join(specOutputDir, group);

    generateFromOpenAPI({
      specPath: subSpecPath,
      patchDir: noPatchDir,
      outputDir: groupOutputDir,
      // operations/<spec>/<group>/*.ts -> ../../../ reaches src/
      importPrefix: "../../..",
      clientImport: `../../../${spec.clientModule}`,
      traitsImport: "../../../traits",
      sensitiveImport: "../../../sensitive",
      errorsImport: "../../../errors",
      includeOperationErrors: true,
      // Extend the generator's default status->error-class map with the
      // Clerk-specific HTTP codes the spec actually documents but that
      // sdk-core's generic map doesn't cover. Without these, 402/410/413
      // responses would fall through to UnknownClerkError instead of
      // surfacing as PaymentRequired / Gone / PayloadTooLarge.
      statusToErrorClass: STATUS_TO_ERROR_CLASS,
      skipDeprecated: true,
    });

    const emittedOps = fs
      .readdirSync(groupOutputDir)
      .some((f) => f.endsWith(".ts") && f !== "index.ts");
    if (emittedOps) {
      emittedGroups.push(group);
    } else {
      fs.rmSync(groupOutputDir, { recursive: true, force: true });
    }
  }

  fs.rmSync(tmpDir, { recursive: true, force: true });

  // Per-spec barrel: re-export each group as its own namespace, e.g.
  // `export * as sessions from "./sessions/index.ts";`
  const specBarrel =
    emittedGroups.map((g) => `export * as ${g} from "./${g}/index.ts";`).join("\n") + "\n";
  fs.writeFileSync(path.join(specOutputDir, "index.ts"), specBarrel);
}

// Top-level barrel re-exports both specs as namespaces so callers can write
// `import { Platform, Backend } from "@distilled.cloud/clerk/operations"` and
// then reach a grouped op via `Backend.sessions.createToken`.
const barrelPath = path.join(operationsRoot, "index.ts");
fs.writeFileSync(
  barrelPath,
  [
    `export * as Platform from "./platform/index.ts";`,
    `export * as Backend from "./backend/index.ts";`,
    "",
  ].join("\n"),
);
