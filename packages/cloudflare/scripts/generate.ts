#!/usr/bin/env bun
/**
 * generate — turn the Smithy JSON models in .generated-specs into an Effect SDK.
 *
 * Input:  .generated-specs/<resource>.json  (Smithy 2.0 models, one per resource)
 * Output: src/services/<resource>.ts  +  services/index.ts
 *
 * The smithy→SDK compiler is `@distilled.cloud/core/codegen/generator`; this
 * script supplies Cloudflare's {@link SdkSpec} — the import header, the
 * envelope / form-data / key-dictionary / nullable trait vocabulary, opaque
 * union-cases, error matchers, protocol/retry names — plus Cloudflare's own
 * model pipeline: docs-derived specs, the RFC-6902 patch chain, manual
 * models, and route aliases.
 *
 * Compile-time performance (ported from distilled PR #360): the emitted
 * interfaces / type aliases and `as any as S.Schema<T>` casts carry the real
 * types, `S` is the `any`-collapsing `@distilled.cloud/core/schema` wrapper so
 * tsc never instantiates the heavy effect/Schema generics, and `S.suspend`
 * defers schema construction to the first call of an operation.
 *
 * Usage:
 *   bun scripts/generate.ts
 *   bun scripts/generate.ts --resource ai
 *   bun scripts/generate.ts --limit 100
 */

import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { Flag } from "effect/unstable/cli";
import { Command } from "effect/unstable/cli";
import {
  applyOperation,
  isStaleTargetError,
  type PatchFile,
} from "@distilled.cloud/core/json-patch";
import { camel } from "@distilled.cloud/core/codegen/naming";
import { barrel, PURE } from "@distilled.cloud/core/codegen/emit";
import {
  errorUnionAlias,
  generateService,
  operationConst,
  upperFirst,
  type SdkSpec,
} from "@distilled.cloud/core/codegen/generator";

const ENVELOPE_PAYLOAD_TRAIT = "com.cloudflare.protocols#envelopePayload";
const NULLABLE_TRAIT = "com.cloudflare.protocols#nullable";
const ERROR_MATCHERS_TRAIT = "com.cloudflare.protocols#errorMatchers";
const FORM_DATA_FILE_TRAIT = "com.cloudflare.protocols#formDataFile";
const KEY_DICTIONARY_TRAIT = "com.cloudflare.protocols#keyDictionary";

/** Cloudflare's provider spec for the shared smithy→SDK compiler. */
const makeCfSpec = (
  keyDictionary?: Record<string, string>,
  opAliases?: Array<{ alias: string; target: string }>,
): SdkSpec => ({
  // Docs wire names are snake_case; the TS surface is camelCase.
  memberName: camel,
  nullableTrait: NULLABLE_TRAIT,

  extraBinding: (traits) =>
    ENVELOPE_PAYLOAD_TRAIT in traits
      ? "payload"
      : FORM_DATA_FILE_TRAIT in traits
        ? "file"
        : undefined,

  memberExtraPipes: (info) => {
    switch (info.binding) {
      case "payload":
        return ["T.EnvelopePayload()"];
      case "file":
        return ["T.FormDataFile()"];
      case "body":
        return info.traits[KEY_DICTIONARY_TRAIT]
          ? [
              `T.KeyDictionary(${JSON.stringify(info.traits[KEY_DICTIONARY_TRAIT])})`,
            ]
          : [];
      default:
        return [];
    }
  },

  memberTsType: (info) =>
    info.binding === "file" ? "(File | Blob)[]" : undefined,

  // Op I/O roots carry the service key dictionary (inside the suspend, so it
  // survives core's Suspend resolution): the protocol reads it off the root
  // AST as the fallback wire mapping for opaque content.
  structPipes: ({ isOpIo, httpTrait }) => [
    ...(httpTrait ? [`T.Http(${JSON.stringify(httpTrait)})`] : []),
    ...(keyDictionary && isOpIo ? [`T.KeyDictionary(KEY_DICTIONARY)`] : []),
  ],

  barePayload: {
    trait: ENVELOPE_PAYLOAD_TRAIT,
    rootPipe: "T.EnvelopePayloadRoot()",
  },

  pagination: {
    itemsFallback: "result",
    syntheticOutputs: ["resultInfo"],
    // Paginated responses additionally carry the envelope's `result_info`
    // (see CloudflarePaginatedProtocol / the shared ResultInfo schema).
    injectOutputMember: {
      tsName: "resultInfo",
      interfaceLines: [
        `  /** Pagination info from the envelope's \`result_info\`. */`,
        `  resultInfo?: ResultInfo | null;`,
      ],
      structLine: `  "resultInfo": S.optional(S.NullOr(ResultInfo).pipe(T.ResultInfo())),`,
    },
  },

  // Discriminated union of object cases. The TS type is the case union; the
  // schema is opaque (S.Unknown) carrying each case's camelCase key set —
  // Cloudflare returns every case's keys (null for inactive ones), so the
  // protocol picks the active case by key-set.
  union: ({ name, caseTargets, caseKeys, tsRef }) => [
    `export type ${name} = ${caseTargets.map(tsRef).join(" | ") || "unknown"};`,
    `export const ${name} = ${PURE}S.Unknown.pipe(T.UnionCases(${JSON.stringify(caseKeys)}));\n`,
  ],

  errors: {
    wrap: (traits) => {
      const matchers = traits[ERROR_MATCHERS_TRAIT];
      return matchers
        ? (cls) =>
            `T.applyErrorMatchers(\n${cls},\n${JSON.stringify(matchers)},\n)`
        : undefined;
    },
  },

  operation: (ctx) => {
    const errList = [
      ...ctx.errorNames,
      "CloudflareRateLimited",
      "CloudflareError",
    ];
    const typeAnnotation = (method: string) =>
      `API.${method}<\n` +
      `  ${ctx.inputName},\n` +
      `  ${ctx.outputName},\n` +
      `  ${ctx.opName}Error,\n` +
      `  CloudflareOpContext\n` +
      `>`;
    const pieces = [
      errorUnionAlias(ctx.opName, ctx.errorNames, "CloudflareOpError"),
      ...(ctx.doc ? [`/** ${ctx.doc} */`] : []),
      ctx.pagination
        ? operationConst({
            exportName: ctx.exportName,
            typeAnnotation: typeAnnotation("PaginatedOperationMethod"),
            factory: "API.makePaginated",
            pure: PURE,
            extraArg: "cloudflarePaginate",
            config:
              `{\n` +
              `  input: ${ctx.inputName},\n` +
              `  output: ${ctx.outputName},\n` +
              `  errors: [${errList.join(", ")}],\n` +
              `  protocol: CloudflarePaginatedProtocol,\n` +
              `  retry: Retry.Retry,\n` +
              `  pagination: ${JSON.stringify(ctx.pagination)} as const,\n` +
              `}`,
          })
        : operationConst({
            exportName: ctx.exportName,
            typeAnnotation: typeAnnotation("OperationMethod"),
            factory: "API.make",
            pure: PURE,
            config:
              `{\n` +
              `  input: ${ctx.inputName},\n` +
              `  output: ${ctx.outputName},\n` +
              `  errors: [${errList.join(", ")}],\n` +
              `  protocol: CloudflareProtocol,\n` +
              `  retry: Retry.Retry,\n` +
              `}`,
          }),
    ];
    return pieces.join("\n");
  },

  // Route-alias exports: some routes exist under several distilled export
  // names; re-export the canonical op (and its types) under each alias.
  footer: ({ emittedOps }) => {
    const out: string[] = [];
    for (const { alias, target } of opAliases ?? []) {
      if (!emittedOps.has(target) || emittedOps.has(alias)) continue;
      emittedOps.add(alias);
      const A = upperFirst(alias);
      const T2 = upperFirst(target);
      out.push(
        `// Alias of ${target} (same route, alternate export name upstream).\n` +
          `export const ${alias} = ${target};\n` +
          `export type ${A}Request = ${T2}Request;\n` +
          `export type ${A}Response = ${T2}Response;\n` +
          `export type ${A}Error = ${T2}Error;\n`,
      );
    }
    return out;
  },

  header: ({ hasPaginated }) =>
    `// AUTO-GENERATED by scripts/generate.ts from .generated-specs. Do not edit.\n` +
    `import * as S from "@distilled.cloud/core/schema";\n` +
    `import * as API from "@distilled.cloud/core/api";\n` +
    `import * as T from "../traits.ts";\n` +
    `import {\n` +
    `  CloudflareProtocol,\n` +
    (hasPaginated ? `  CloudflarePaginatedProtocol,\n` : "") +
    `  type CloudflareOpError,\n` +
    `  type CloudflareOpContext,\n` +
    `} from "../protocol.ts";\n` +
    (hasPaginated
      ? `import { cloudflarePaginate, ResultInfo } from "../pagination.ts";\n`
      : "") +
    `import { CloudflareError, CloudflareRateLimited } from "../errors.ts";\n` +
    `import * as Retry from "../retry.ts";\n\n` +
    // Re-exported so inferred provider types downstream can always name them.
    `export type { CloudflareOpError, CloudflareOpContext };\n\n` +
    (keyDictionary
      ? `/** Fallback camelCase→wire mapping for opaque content (mined from the distilled SDK). */\n` +
        `const KEY_DICTIONARY: Record<string, string> = ${JSON.stringify(keyDictionary)};\n\n`
      : ""),
});

// ============================================================================
// CLI — Cloudflare's model pipeline (docs specs + RFC-6902 patches)
// ============================================================================

const command = Command.make(
  "generate",
  {
    smithy: Flag.string("smithy").pipe(
      Flag.withDefault(".generated-specs"),
      Flag.withDescription("Directory of Smithy JSON models"),
    ),
    out: Flag.string("out").pipe(
      Flag.withDefault("src/services"),
      Flag.withDescription("Output directory for generated service modules"),
    ),
    resource: Flag.string("resource").pipe(
      Flag.withDefault(""),
      Flag.withDescription("Only generate this resource (e.g. ai)"),
    ),
    limit: Flag.integer("limit").pipe(
      Flag.withDefault(0),
      Flag.withDescription("Only generate the first N operations (0 = all)"),
    ),
  },
  (config) =>
    Effect.gen(function* () {
      const fs = yield* FileSystem.FileSystem;
      const path = yield* Path.Path;
      const root = path.resolve(import.meta.dir, "..");
      const smithyDir = path.resolve(root, config.smithy);
      const outDir = path.resolve(root, config.out);

      yield* Console.log("⚙️  generate");
      yield* Console.log(`   Smithy: ${smithyDir}`);
      yield* Console.log(`   Output: ${outDir}`);

      // Models come from the generated smithy dir plus manual-specs/ —
      // hand-authored models for APIs the Cloudflare docs don't cover
      // (e.g. Containers). A manual model must not shadow a generated one.
      const manualDir = path.resolve(root, "manual-specs");
      const generated = (yield* fs.readDirectory(smithyDir))
        .filter((f) => f.endsWith(".json") && f !== "cloudflare.protocols.json")
        .map((f) => ({ file: f, dir: smithyDir }));
      const manual = (yield* fs.exists(manualDir))
        ? (yield* fs.readDirectory(manualDir))
            .filter((f) => f.endsWith(".json"))
            .map((f) => ({ file: f, dir: manualDir }))
        : [];
      for (const m of manual) {
        if (generated.some((g) => g.file === m.file)) {
          return yield* Effect.die(
            new Error(
              `manual-specs/${m.file} shadows a generated model — rename or delete it`,
            ),
          );
        }
      }
      const entries = [...generated, ...manual].sort((a, b) =>
        a.file.localeCompare(b.file),
      );

      yield* fs.makeDirectory(outDir, { recursive: true });

      const limitRef = {
        remaining: config.limit > 0 ? config.limit : Infinity,
      };
      const written: string[] = [];
      let totalOps = 0;
      let totalPatches = 0;
      let staleOps = 0;
      const badPatches: string[] = [];

      // Orphan check: a patch directory that matches no smithy model would be
      // silently dropped — flag it instead.
      const patchRoot = path.join(root, "patches");
      if (yield* fs.exists(patchRoot)) {
        const resources = new Set(
          entries.map((e) => e.file.replace(/\.json$/, "")),
        );
        for (const dir of yield* fs.readDirectory(patchRoot)) {
          if (!resources.has(dir)) {
            yield* Console.warn(
              `⚠️  patches/${dir}/ matches no smithy model — orphaned?`,
            );
          }
        }
      }

      for (const { file, dir } of entries) {
        const resource = file.replace(/\.json$/, "");
        if (config.resource && resource !== config.resource) continue;
        if (limitRef.remaining <= 0) break;

        const model = JSON.parse(
          yield* fs.readFileString(path.join(dir, file)),
        );

        // Apply patches/<resource>/*.json (RFC 6902, one file per operation)
        // to the smithy model before generating. Operations whose target no
        // longer exists (spec drift) are skipped with a warning; malformed
        // patches fail the run.
        const patchDir = path.join(patchRoot, resource);
        if (yield* fs.exists(patchDir)) {
          // Hand-written *.manual.json patches apply after the generated
          // ones — they usually target post-rename shape names.
          const patchFiles = (yield* fs.readDirectory(patchDir))
            .filter((f) => f.endsWith(".json"))
            .sort(
              (a, b) =>
                Number(a.endsWith(".manual.json")) -
                  Number(b.endsWith(".manual.json")) || a.localeCompare(b),
            );
          for (const pf of patchFiles) {
            const parsed = JSON.parse(
              yield* fs.readFileString(path.join(patchDir, pf)),
            ) as PatchFile;
            for (const patchOp of parsed.patches ?? []) {
              try {
                applyOperation(model, patchOp);
              } catch (e) {
                const msg = e instanceof Error ? e.message : String(e);
                if (isStaleTargetError(msg)) {
                  staleOps++;
                  yield* Console.warn(
                    `   ⚠️  stale: ${resource}/${pf} [${patchOp.op} ${patchOp.path}]`,
                  );
                } else {
                  badPatches.push(
                    `${resource}/${pf} [${patchOp.op} ${patchOp.path}]: ${msg}`,
                  );
                }
              }
            }
            totalPatches++;
          }
        }

        // Per-service fallback key dictionary and route aliases, patched
        // into the model's metadata by patches/<resource>/_metadata.json
        // (written by import-distilled-patches.ts).
        const keyDictionary = model.metadata?.keyDictionary as
          | Record<string, string>
          | undefined;
        const opAliases = model.metadata?.opAliases as
          | Array<{ alias: string; target: string }>
          | undefined;

        const { code, operations } = generateService(
          model,
          makeCfSpec(keyDictionary, opAliases),
          limitRef,
        );
        if (operations === 0) continue;

        yield* fs.writeFileString(path.join(outDir, `${resource}.ts`), code);
        written.push(resource);
        totalOps += operations;
      }

      if (badPatches.length) {
        for (const b of badPatches) yield* Console.error(`❌ bad patch: ${b}`);
        return yield* Effect.die(
          new Error(
            `${badPatches.length} malformed patch operation(s) — fix or remove them`,
          ),
        );
      }

      // Barrel — namespace per resource to avoid op-name collisions.
      yield* fs.writeFileString(
        path.join(outDir, "index.ts"),
        barrel(
          `// AUTO-GENERATED by scripts/generate.ts. Do not edit.\n`,
          written.map((r) => ({ name: r, path: `./${r}.ts` })),
        ),
      );

      yield* Console.log(
        `\n✅ Generated ${totalOps} operations across ${written.length} resource modules` +
          (totalPatches
            ? ` (${totalPatches} patch files applied${staleOps ? `, ${staleOps} stale op(s) skipped` : ""}).`
            : "."),
      );
      yield* Console.log(`   ${path.join(outDir, "index.ts")}`);
    }),
).pipe(
  Command.withDescription(
    "Generate the Cloudflare Effect SDK from the Smithy models",
  ),
);

const program = Command.run(command, { version: "1.0.0" });

BunRuntime.runMain(Effect.provide(program, BunServices.layer));
