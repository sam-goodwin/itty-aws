/**
 * The generic generator CLI harness (dev-time only).
 *
 * Owns the smithy-model pipeline every SDK package shares: scan the model
 * directory (plus optional hand-authored manual specs), apply the RFC-6902
 * patch chain (`patches/<resource>/*.json`, `*.manual.json` last; stale
 * targets warn, malformed patches fail the run), compile each model through
 * {@link generateService} with the provider's {@link SdkSpec}, write the
 * service modules and the namespaced barrel.
 *
 * A provider's `scripts/generate.ts` is: trait consts + an SdkSpec + a
 * `runGeneratorCli` call.
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
} from "../json-patch.ts";
import { barrel } from "./emit.ts";
import { generateService, type SdkSpec } from "./generator.ts";

export interface GeneratorCliOptions {
  /** Command description shown in --help. */
  readonly description: string;
  /** Absolute package root (usually `path.resolve(import.meta.dir, "..")`). */
  readonly root: string;
  /** Model directory default (relative to root). Default `.generated-specs`. */
  readonly smithyDir?: string;
  /** Output directory default (relative to root). Default `src/services`. */
  readonly outDir?: string;
  /** Model files to skip (e.g. a shared protocols model). */
  readonly excludeModel?: (file: string) => boolean;
  /** Directory of hand-authored models merged after the generated ones. */
  readonly manualSpecsDir?: string;
  /** RFC-6902 patch chain root. Default `patches`; `false` disables. */
  readonly patchesDir?: string | false;
  /**
   * Model transform applied AFTER the patch chain, before generation —
   * for whole-model rewrites that must see post-patch shape names (e.g.
   * cloudflare's scope-twin structural dedup). May mutate the model;
   * a returned log line is printed.
   */
  readonly transformModel?: (model: any, resource: string) => string | void;
  /** The provider spec — built per model (metadata may vary per model). */
  readonly spec: (model: any) => SdkSpec;
}

/** Run the generator CLI (BunRuntime main — call at module top level). */
export const runGeneratorCli = (options: GeneratorCliOptions): void => {
  const command = Command.make(
    "generate",
    {
      smithy: Flag.string("smithy").pipe(
        Flag.withDefault(options.smithyDir ?? ".generated-specs"),
        Flag.withDescription("Directory of Smithy JSON models"),
      ),
      out: Flag.string("out").pipe(
        Flag.withDefault(options.outDir ?? "src/services"),
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
        const root = options.root;
        const smithyDir = path.resolve(root, config.smithy);
        const outDir = path.resolve(root, config.out);

        yield* Console.log("⚙️  generate");
        yield* Console.log(`   Smithy: ${smithyDir}`);
        yield* Console.log(`   Output: ${outDir}`);

        // Generated models plus optional manual-specs (hand-authored models
        // for APIs the provider's spec source doesn't cover). A manual model
        // must not shadow a generated one.
        const generated = (yield* fs.readDirectory(smithyDir))
          .filter(
            (f) => f.endsWith(".json") && !(options.excludeModel?.(f) ?? false),
          )
          .map((f) => ({ file: f, dir: smithyDir }));
        const manualDir = options.manualSpecsDir
          ? path.resolve(root, options.manualSpecsDir)
          : undefined;
        const manual =
          manualDir && (yield* fs.exists(manualDir))
            ? (yield* fs.readDirectory(manualDir))
                .filter((f) => f.endsWith(".json"))
                .map((f) => ({ file: f, dir: manualDir }))
            : [];
        for (const m of manual) {
          if (generated.some((g) => g.file === m.file)) {
            return yield* Effect.die(
              new Error(
                `${options.manualSpecsDir}/${m.file} shadows a generated model — rename or delete it`,
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

        // Orphan check: a patch directory matching no smithy model would be
        // silently dropped — flag it instead.
        const patchRoot =
          options.patchesDir === false
            ? undefined
            : path.join(root, options.patchesDir ?? "patches");
        if (patchRoot && (yield* fs.exists(patchRoot))) {
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

          // Apply the RFC-6902 patch chain before generating. Hand-written
          // *.manual.json patches apply after the generated ones — they
          // usually target post-rename shape names.
          const patchDir = patchRoot && path.join(patchRoot, resource);
          if (patchDir && (yield* fs.exists(patchDir))) {
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

          if (options.transformModel) {
            const note = options.transformModel(model, resource);
            if (note) yield* Console.log(`   ${note}`);
          }

          const { code, operations } = generateService(
            model,
            options.spec(model),
            limitRef,
          );
          if (operations === 0) continue;

          yield* fs.writeFileString(path.join(outDir, `${resource}.ts`), code);
          written.push(resource);
          totalOps += operations;
        }

        if (badPatches.length) {
          for (const b of badPatches) {
            yield* Console.error(`❌ bad patch: ${b}`);
          }
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
  ).pipe(Command.withDescription(options.description));

  BunRuntime.runMain(
    Effect.provide(
      Command.run(command, { version: "1.0.0" }),
      BunServices.layer,
    ),
  );
};
