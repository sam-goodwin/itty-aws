#!/usr/bin/env bun
/**
 * convert — turn Fly.io specs into Smithy JSON models.
 *
 *   machines  OpenAPI  specs/distilled-spec-fly-io/specs/openapi.json
 *             → .generated-specs/machines.json
 *             patches: patches/*.patch.json then patches/machines/*.patch.json
 *
 *   sprites   OpenAPI  specs/sprites/openapi.json (hand-authored; no
 *             published OpenAPI at api.sprites.dev)
 *             → .generated-specs/sprites.json
 *             patches: patches/sprites/*.patch.json
 *
 *   mpg       OpenAPI  specs/mpg/openapi.json (hand-authored from flyctl
 *             UI-EX REST /api/v1/.../postgresv2)
 *             → .generated-specs/mpg.json
 *             patches: patches/mpg/*.patch.json
 *
 *   addons    GraphQL  scripts/addons-introspection.ts (thin flyctl add-on
 *             schema for Tigris + Upstash Redis)
 *             → .generated-specs/addons.json
 *
 * `scripts/generate.ts` also runs with `patchesDir: false` — OpenAPI patches
 * apply here; GraphQL extra ops (agreedToProviderTos) are injected below.
 */
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { runOpenApiConvert } from "@distilled.cloud/core/codegen/openapi-cli";
import {
  convertGraphQLToSmithy,
  PRELUDE,
} from "@distilled.cloud/core/codegen/graphql";
import {
  applyOperation,
  isStaleTargetError,
  type PatchFile,
} from "@distilled.cloud/core/json-patch";
import { addonsIntrospection } from "./addons-introspection.ts";

const root = `${import.meta.dir}/..`;
const patchesRoot = path.join(root, "patches");
const generatedDir = path.join(root, ".generated-specs");

const listPatchFiles = async (dir: string): Promise<string[]> => {
  try {
    return (await fs.readdir(dir))
      .filter((f) => f.endsWith(".patch.json"))
      .sort((a, b) => a.localeCompare(b))
      .map((f) => path.join(dir, f));
  } catch (e) {
    if ((e as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw e;
  }
};

const loadPatch = async (
  file: string,
): Promise<{ file: string; parsed: PatchFile }> => ({
  file,
  parsed: JSON.parse(await fs.readFile(file, "utf8")) as PatchFile,
});

const STATUS_TO_ERROR = {
  400: "BadRequest",
  403: "Forbidden",
  404: "NotFound",
  408: "GatewayTimeout",
  409: "Conflict",
  422: "UnprocessableEntity",
} as const;

const DEFAULT_ERROR_STATUSES = ["401", "429", "500", "502", "503", "504"];

// ---------------------------------------------------------------------------
// machines — existing dual-layer OpenAPI patch walk
// ---------------------------------------------------------------------------

const machinesPatchFiles = [
  ...(await listPatchFiles(patchesRoot)),
  ...(await listPatchFiles(path.join(patchesRoot, "machines"))),
];
const machinesPatches = await Promise.all(machinesPatchFiles.map(loadPatch));

await runOpenApiConvert({
  root,
  specs: [
    {
      name: "machines",
      specPath: "specs/distilled-spec-fly-io/specs/openapi.json",
      preprocess: (spec) => {
        let staleOps = 0;
        const badPatches: string[] = [];
        for (const { file, parsed } of machinesPatches) {
          const label = path.relative(patchesRoot, file);
          for (const patchOp of parsed.patches ?? []) {
            try {
              applyOperation(spec, patchOp);
            } catch (e) {
              const msg = e instanceof Error ? e.message : String(e);
              if (isStaleTargetError(msg)) {
                staleOps++;
                console.warn(
                  `   ⚠️  stale: machines/${label} [${patchOp.op} ${patchOp.path}]`,
                );
              } else {
                badPatches.push(
                  `${label} [${patchOp.op} ${patchOp.path}]: ${msg}`,
                );
              }
            }
          }
        }
        if (badPatches.length) {
          for (const b of badPatches) console.error(`❌ bad patch: ${b}`);
          throw new Error(
            `${badPatches.length} malformed patch operation(s) — fix or remove them`,
          );
        }
        if (machinesPatches.length > 0) {
          console.log(
            `   applied ${machinesPatches.length} OpenAPI patch file(s) (flat + patches/machines)` +
              (staleOps ? `, ${staleOps} stale op(s) skipped` : ""),
          );
        }
      },
    },
  ],
  patchesDir: false,
  options: {
    namespace: "com.flyio.machines",
    serviceName: "FlyMachines",
    statusToErrorClass: STATUS_TO_ERROR,
    defaultErrorStatuses: DEFAULT_ERROR_STATUSES,
    skipDeprecated: true,
  },
});

// ---------------------------------------------------------------------------
// sprites + mpg — per-spec OpenAPI under patches/{sprites,mpg}/
// ---------------------------------------------------------------------------

await runOpenApiConvert({
  root,
  specs: [
    {
      name: "sprites",
      specPath: "specs/sprites/openapi.json",
      options: {
        namespace: "com.flyio.sprites",
        serviceName: "FlySprites",
        successStatuses: ["200", "201", "204"],
      },
    },
    {
      name: "mpg",
      specPath: "specs/mpg/openapi.json",
      options: {
        namespace: "com.flyio.mpg",
        serviceName: "FlyMpg",
        successStatuses: ["200", "201", "204", "202"],
      },
    },
  ],
  patchesDir: "patches",
  options: {
    namespace: "com.flyio",
    serviceName: "Fly",
    statusToErrorClass: STATUS_TO_ERROR,
    defaultErrorStatuses: DEFAULT_ERROR_STATUSES,
    skipDeprecated: true,
  },
});

// Stamp cursor pagination on listSprites (continuation_token). The OpenAPI
// converter's auto-detect looks for next_token / NextToken, not Sprites'
// next_continuation_token.
{
  const spritesPath = path.join(generatedDir, "sprites.json");
  const model = JSON.parse(await fs.readFile(spritesPath, "utf8")) as {
    shapes: Record<string, any>;
  };
  const op = model.shapes["com.flyio.sprites#ListSprites"];
  if (op?.type === "operation") {
    op.traits = {
      ...(op.traits ?? {}),
      "smithy.api#paginated": {
        inputToken: "continuation_token",
        outputToken: "next_continuation_token",
        items: "sprites",
        pageSize: "max_results",
        mode: "cursor",
      },
    };
    await fs.writeFile(spritesPath, JSON.stringify(model, null, 2) + "\n");
    console.log("   stamped listSprites cursor pagination");
  } else {
    console.warn(
      "   ⚠️  com.flyio.sprites#ListSprites not found — pagination not stamped",
    );
  }
}

// ---------------------------------------------------------------------------
// addons — GraphQL thin client
// ---------------------------------------------------------------------------

const graphqlTraits = {
  operation: "com.flyio.graphql#operation",
  responsePath: "com.flyio.graphql#responsePath",
  nullable: "com.flyio.graphql#nullable",
  nullableItems: "com.flyio.graphql#nullableItems",
  payload: "com.flyio.graphql#payload",
} as const;

const addonsResult = convertGraphQLToSmithy({
  schema: addonsIntrospection(),
  namespace: "com.flyio.addons",
  serviceName: "FlyAddons",
  serviceTitle: "Fly GraphQL add-ons",
  serviceDocumentation:
    "Thin Fly.io GraphQL client for managed extensions (Tigris, Upstash Redis) " +
    "at POST https://api.fly.io/graphql. Auth is the same FLY_API_TOKEN bearer " +
    "as Machines. Documents are baked from flyctl's add-on operations.",
  endpoint: "/graphql",
  traits: graphqlTraits,
  maxDepth: 2,
  maxNamespaceDepth: 1,
  skipDeprecated: true,
  customScalars: {
    JSON: PRELUDE.Document,
    ISO8601DateTime: PRELUDE.String,
  },
  relay: { after: "after", first: "first" },
});

// Inject agreedToProviderTos — the real field lives on Organization and
// takes an argument, so the generic walker cannot select it. Baked document
// matches flyctl's AgreedToProviderTos query (org-scoped).
{
  const ns = "com.flyio.addons";
  const model = addonsResult.model;
  const opName = "AgreedToProviderTos";
  const reqId = `${ns}#${opName}Request`;
  const resId = `${ns}#${opName}Response`;
  const opId = `${ns}#${opName}`;
  model.shapes[reqId] = {
    type: "structure",
    members: {
      slug: {
        target: "smithy.api#String",
        traits: { "smithy.api#required": {} },
      },
      providerName: {
        target: "smithy.api#String",
        traits: { "smithy.api#required": {} },
      },
    },
    traits: {
      "smithy.api#input": {},
      [graphqlTraits.operation]: {
        query:
          "query agreedToProviderTos($slug: String!, $providerName: String!) {\n" +
          "  organization(slug: $slug) {\n" +
          "    agreedToProviderTos(providerName: $providerName)\n" +
          "  }\n" +
          "}",
        operationName: "agreedToProviderTos",
        type: "query",
      },
    },
  };
  model.shapes[resId] = {
    type: "structure",
    members: {
      result: {
        target: "smithy.api#Boolean",
        traits: {
          [graphqlTraits.payload]: {},
          "smithy.api#required": {},
          [graphqlTraits.nullable]: {},
        },
      },
    },
    traits: {
      "smithy.api#output": {},
      [graphqlTraits.responsePath]: "organization.agreedToProviderTos",
    },
  };
  model.shapes[opId] = {
    type: "operation",
    input: { target: reqId },
    output: { target: resId },
    traits: {
      "smithy.api#http": { method: "POST", uri: "/graphql", code: 200 },
      "smithy.api#readonly": {},
      "smithy.api#documentation":
        "Whether the organization has agreed to an add-on provider's ToS.",
    },
  };
  const serviceId = `${ns}#FlyAddons`;
  const service = model.shapes[serviceId];
  if (service?.type === "service") {
    service.operations = [...(service.operations ?? []), { target: opId }];
  }
}

const addonsOut = path.join(generatedDir, "addons.json");
await fs.mkdir(generatedDir, { recursive: true });
await fs.writeFile(
  addonsOut,
  `${JSON.stringify(addonsResult.model, null, 2)}\n`,
);
console.log(
  `✅ addons: ${addonsResult.converted} GraphQL operations ` +
    `(${addonsResult.paginated} paginated, ${addonsResult.failed} failed, ` +
    `${addonsResult.shapeCount} shapes) + agreedToProviderTos → ${addonsOut}`,
);
