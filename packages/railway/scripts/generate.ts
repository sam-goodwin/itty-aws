/**
 * Railway SDK Code Generator
 *
 * Generates one Effect-based operation per GraphQL query and per GraphQL
 * mutation from the Railway introspection schema mirrored in the
 * specs/distilled-spec-railway submodule (specs/schema.json).
 *
 * Error patching
 * --------------
 * Railway's schema does not declare errors, so typed errors are discovered by
 * live testing and recorded as patches in `patches/{operationName}.json`:
 *
 * ```json
 * {
 *   "errors": {
 *     "ProjectNotFound": {
 *       "category": "notFound",
 *       "matchers": [{ "message": { "includes": "Project not found" } }]
 *     }
 *   }
 * }
 * ```
 *
 * Each named error becomes a `Schema.TaggedErrorClass` in
 * `src/operations/errors.ts` (annotated with its matchers via
 * `T.applyErrorMatchers`) and is added to the operation's `errors: [...]`
 * array so it appears in the operation's typed error channel. At runtime the
 * client (`src/client.ts`) tests the matchers against the observed GraphQL
 * error (`extensions.code`, `message`, HTTP status).
 *
 * The same error name may appear in multiple operation patches as long as the
 * definitions are identical — the class is emitted once and shared.
 */
import * as fs from "fs";
import * as path from "path";
import { generateFromGraphQL } from "@distilled.cloud/core/graphql/generate";

const rootDir = path.join(import.meta.dir, "..");
const patchesDir = path.join(rootDir, "patches");
const operationsDir = path.join(rootDir, "src/operations");

// ============================================================================
// Patch Loading
// ============================================================================

interface ErrorMatcher {
  code?: string;
  status?: number;
  message?: string | { includes: string };
}

interface PatchedError {
  /** Semantic category — drives retry behavior and error grouping. */
  category:
    | "notFound"
    | "auth"
    | "badRequest"
    | "conflict"
    | "alreadyExists"
    | "throttling"
    | "quota"
    | "server";
  /** Matchers tested against the observed GraphQL error (OR semantics). */
  matchers: ErrorMatcher[];
  /** Optional doc comment for the generated class. */
  description?: string;
}

interface OperationPatch {
  errors: Record<string, PatchedError>;
}

/** operationName → error names declared on that operation */
const operationErrors = new Map<string, string[]>();
/** error name → definition (shared across operations, must be identical) */
const errorDefs = new Map<string, PatchedError>();

if (fs.existsSync(patchesDir)) {
  const files = fs
    .readdirSync(patchesDir)
    .filter((f) => f.endsWith(".json"))
    .sort();
  for (const file of files) {
    const operationName = path.basename(file, ".json");
    const patch = JSON.parse(
      fs.readFileSync(path.join(patchesDir, file), "utf-8"),
    ) as OperationPatch;

    const names: string[] = [];
    for (const [name, def] of Object.entries(patch.errors ?? {})) {
      const existing = errorDefs.get(name);
      if (existing && JSON.stringify(existing) !== JSON.stringify(def)) {
        throw new Error(
          `Patch error "${name}" is defined differently in ${file} than in an earlier patch — definitions must be identical`,
        );
      }
      errorDefs.set(name, def);
      names.push(name);
    }
    if (names.length > 0) {
      operationErrors.set(operationName, names.sort());
    }
  }
}

// ============================================================================
// Generated Error Classes (src/operations/errors.ts)
// ============================================================================

const CATEGORY_PIPE: Record<PatchedError["category"], string> = {
  notFound: "Category.withNotFoundError",
  auth: "Category.withAuthError",
  badRequest: "Category.withBadRequestError",
  conflict: "Category.withConflictError",
  alreadyExists:
    "Category.withCategory(Category.ConflictError, Category.AlreadyExistsError)",
  throttling:
    "Category.withThrottlingError, Category.withRetryable({ throttling: true })",
  // Rate limits that penalize failed attempts (e.g. Railway's project-create
  // limiter) must NOT be auto-retried by the SDK's burst policy — callers
  // retry deliberately with a wide spacing.
  quota: "Category.withQuotaError",
  server: "Category.withServerError, Category.withRetryable()",
};

function generateErrorsFile(): string {
  const fileDoc = `/**
 * Typed Railway error classes generated from \`patches/{operationName}.json\`.
 *
 * DO NOT HAND-EDIT — add or update a patch and run \`bun run generate\`.
 */
`;
  const header = `${fileDoc}import * as Schema from "effect/Schema";
import * as Category from "../category.ts";
import * as T from "../traits.ts";
`;

  const blocks: string[] = [];
  for (const [name, def] of [...errorDefs.entries()].sort(([a], [b]) =>
    a.localeCompare(b),
  )) {
    const pipe = CATEGORY_PIPE[def.category];
    if (!pipe) {
      throw new Error(
        `Patch error "${name}" has unknown category "${def.category}" — expected one of ${Object.keys(CATEGORY_PIPE).join(", ")}`,
      );
    }
    const doc = def.description ? `/** ${def.description} */\n` : "";
    blocks.push(
      `${doc}export class ${name} extends Schema.TaggedErrorClass<${name}>()(
  "${name}",
  {
    message: Schema.String,
    code: Schema.optional(Schema.String),
  },
).pipe(${pipe}) {}
T.applyErrorMatchers(${name}, ${JSON.stringify(def.matchers)});`,
    );
  }

  if (blocks.length === 0) {
    return `${fileDoc}export {};\n`;
  }
  return `${header}\n${blocks.join("\n\n")}\n`;
}

// ============================================================================
// Verb-first Operation Naming
// ============================================================================
//
// Railway's schema names operations resource-first (`trustedDomainCreate`,
// `apiTokenDelete`). We rename to verb-first (`createTrustedDomain`,
// `deleteApiToken`):
//
// - Mutations: the verb word is moved to the front. The last word wins if it
//   is a verb (`usageLimitSet` → `setUsageLimit`), otherwise the first verb
//   found from the left (`customerCreateFreePlanSubscription` →
//   `createCustomerFreePlanSubscription`). Mutations with no recognizable
//   verb are left unchanged.
// - Queries: prefixed with `get` (`workspacePolicy` → `getWorkspacePolicy`).
//
// `RENAME_OVERRIDES` pins names where the heuristic reads wrong.

const VERBS = new Set([
  "accept", "add", "agree", "apply", "approve", "build", "cancel", "change",
  "claim", "clear", "clone", "commit", "configure", "confirm", "connect",
  "consume", "create", "delete", "deploy", "destroy", "disable", "disconnect",
  "eject", "enable", "exec", "generate", "import", "initiate", "invite",
  "leave", "lock", "mark", "merge", "override", "patch", "preview",
  "publish", "purge", "upgrade",
  "redeploy", "remove", "rename", "resend", "reset", "restart", "restore",
  "retrigger", "rollback", "search", "set", "stage", "stop", "test", "toggle",
  "track", "transfer", "unpublish", "unskip", "update", "upsert", "use",
  "validate", "verify",
]);

/** Schema name → verb-first name, where the heuristic gets it wrong. */
const RENAME_OVERRIDES: Record<string, string> = {
  // "set" is the last word but the real verb acts on a ChangeSet
  environmentApplyChangeSet: "applyEnvironmentChangeSet",
  environmentPreviewChangeSet: "previewEnvironmentChangeSet",
  // commits staged changes of an environment patch — "patch" is the resource
  environmentPatchCommitStaged: "commitStagedEnvironmentPatch",
  // create-or-get compound verbs
  privateNetworkCreateOrGet: "createOrGetPrivateNetwork",
  privateNetworkEndpointCreateOrGet: "createOrGetPrivateNetworkEndpoint",
  // force-delete compound verb
  projectScheduleDeleteForce: "forceDeleteProjectSchedule",
};

/** Split a camelCase identifier into words, keeping acronyms intact. */
const splitWords = (name: string): string[] =>
  name.split(/(?<=[a-z0-9])(?=[A-Z])|(?<=[A-Z])(?=[A-Z][a-z])/);

const lowerFirst = (s: string): string => s.charAt(0).toLowerCase() + s.slice(1);
const upperFirst = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

const renamed = new Map<string, string>();
const unrenamedMutations: string[] = [];

const verbFirst = (name: string, type: "query" | "mutation"): string => {
  const result = (() => {
    const override = RENAME_OVERRIDES[name];
    if (override) return override;

    if (type === "query") {
      return name.startsWith("get") ? name : `get${upperFirst(name)}`;
    }

    // Mutation: the last word wins if it's a verb (`inviteCodeUse` →
    // `useInviteCode`); otherwise keep names that already start with a verb
    // (`purgeServiceCache`); otherwise the first verb from the left.
    const words = splitWords(name);
    let verbIndex = -1;
    if (VERBS.has(words[words.length - 1].toLowerCase())) {
      verbIndex = words.length - 1;
    } else if (VERBS.has(words[0].toLowerCase())) {
      return name; // already verb-first
    } else {
      verbIndex = words.findIndex((w) => VERBS.has(w.toLowerCase()));
    }
    if (verbIndex === -1) {
      unrenamedMutations.push(name);
      return name;
    }

    const rest = [...words.slice(0, verbIndex), ...words.slice(verbIndex + 1)];
    return (
      lowerFirst(words[verbIndex]) + rest.map((w) => upperFirst(w)).join("")
    );
  })();

  const existing = renamed.get(result);
  if (existing && existing !== name) {
    throw new Error(
      `Operation rename collision: both "${existing}" and "${name}" map to "${result}"`,
    );
  }
  renamed.set(result, name);
  return result;
};

// ============================================================================
// Generation
// ============================================================================

// Start from a clean slate so removed schema fields / patches don't leave
// stale operation files behind.
fs.rmSync(operationsDir, { recursive: true, force: true });

generateFromGraphQL({
  schemaPath: path.join(
    rootDir,
    "specs/distilled-spec-railway/specs/schema.json",
  ),
  outputDir: operationsDir,
  endpoint: "/graphql/v2",
  maxDepth: 3,
  clientImport: "../client",
  traitsImport: "../traits",
  skipDeprecated: true,
  // tcpProxyCreate is deprecated in favor of staged environment changes,
  // but it remains the only direct API for creating TCP proxies — the
  // deprecation caveat (service must be redeployed afterwards) is handled
  // by the IaC engine, which controls deploys anyway.
  includeDeprecated: ["tcpProxyCreate"],
  // Railway declares a number of custom scalars; map them to sensible Effect
  // Schema primitives so generated operations don't dissolve into
  // Schema.Unknown.
  customScalars: {
    BigInt: "Schema.String",
    DateTime: "Schema.String",
    JSON: "Schema.Unknown",
    Upload: "Schema.Unknown",
    CanvasConfig: "Schema.Unknown",
    DeploymentDiagnosis: "Schema.Unknown",
    DeploymentMeta: "Schema.Unknown",
    DisplayConfig: "Schema.Unknown",
    EnvironmentConfig: "Schema.Unknown",
    EnvironmentVariables: "Schema.Unknown",
    NotificationChannelConfig: "Schema.Unknown",
    NotificationPayload: "Schema.Unknown",
    RailpackInfo: "Schema.Unknown",
    SerializedTemplateConfig: "Schema.Unknown",
    ServiceInstanceLimit: "Schema.Unknown",
    SkippedResourceIds: "Schema.Unknown",
    SpendCommitmentFeatureId: "Schema.Unknown",
    SubscriptionPlanLimit: "Schema.Unknown",
    SupportHealthMetrics: "Schema.Unknown",
    TemplateConfig: "Schema.Unknown",
    TemplateMetadata: "Schema.Unknown",
    TemplateServiceConfig: "Schema.Unknown",
    TemplateVolume: "Schema.Unknown",
  },
  // Railway's API fails resolving `Deployment.sockets` with a generic
  // "Problem processing request" (observed live on deployments created via
  // the `up` endpoint), poisoning every query that selects it
  // (deployment, serviceInstance, ...). Exclude it from selection sets.
  skipField: (parentTypeName, fieldName) =>
    parentTypeName === "Deployment" && fieldName === "sockets",
  renameOperation: verbFirst,
  operationErrors: (operationName) => {
    const names = operationErrors.get(operationName);
    if (!names || names.length === 0) return undefined;
    return {
      imports: [`import { ${names.join(", ")} } from "./errors.ts";`],
      errors: names,
    };
  },
});

// Emit the shared error classes and surface them through the barrel.
fs.writeFileSync(path.join(operationsDir, "errors.ts"), generateErrorsFile());
fs.appendFileSync(
  path.join(operationsDir, "index.ts"),
  `export * from "./errors.ts";\n`,
);

// Warn about patches that don't correspond to any generated operation.
const generated = new Set(
  fs
    .readdirSync(operationsDir)
    .filter((f) => f.endsWith(".ts"))
    .map((f) => path.basename(f, ".ts")),
);
for (const operationName of operationErrors.keys()) {
  if (!generated.has(operationName)) {
    console.warn(
      `⚠️  patches/${operationName}.json does not match any generated operation`,
    );
  }
}

if (unrenamedMutations.length > 0) {
  console.warn(
    `⚠️  ${unrenamedMutations.length} mutation(s) without a recognizable verb (left unchanged): ${unrenamedMutations.join(", ")}`,
  );
}
