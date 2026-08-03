#!/usr/bin/env bun
/**
 * generate — turn the AWS Smithy models into an Effect SDK.
 *
 * Input:  specs/api-models-aws/models/<service>/service/<version>/<service>-<version>.json
 *         manual-specs/<service>.json  (hand-authored models for APIs AWS
 *         never published a Smithy model for — see manual-specs/README.md)
 * Output: src/services/<sdkId>.ts  +  services/index.ts
 *
 * The smithy→SDK compiler lives in `@distilled.cloud/core/codegen`; the
 * AWS provider spec (shape/error/operation emission, service consts,
 * spec-patch application) lives in `./spec.ts`. This script is only the
 * model pipeline: walk the models directory, validate each model against
 * the SmithyModel schema, load the service's spec patches, compile through
 * `generateService`, and write the service modules plus the barrel.
 *
 * Flags: `--sdk <service>` generates a single service (directory name).
 */
import { BunRuntime, BunServices } from "@effect/platform-bun";
import { Console, Effect, Option, Schema as S } from "effect";
import * as FileSystem from "effect/FileSystem";
import * as Path from "effect/Path";
import { barrel } from "@distilled.cloud/core/codegen/emit";
import { generateService } from "@distilled.cloud/core/codegen/generator";
import { loadServiceSpecPatch } from "./spec-schema.ts";
import { SmithyModel, type ServiceShape } from "./model-schema.ts";
import { awsSpec } from "./spec.ts";
//todo(pear): swap out for effect platform path
import path from "pathe";

const AWS_MODELS_PATH = "specs/api-models-aws";
const MANUAL_SPECS_PATH = "manual-specs";
const RESULT_ROOT_PATH = path.resolve("src", "services");

function getSdkFlag(): Option.Option<string> {
  const idx = process.argv.indexOf("--sdk");
  const arg = process.argv[idx + 1];
  return idx !== -1 && arg !== undefined ? Option.some(arg) : Option.none();
}

const generateClient = Effect.fn(function* (
  modelPath: string,
  outputRootPath: string,
) {
  const fs = yield* FileSystem.FileSystem;
  const p = yield* Path.Path;

  const model = yield* fs
    .readFileString(modelPath)
    .pipe(Effect.flatMap(S.decodeUnknownEffect(S.fromJsonString(SmithyModel))));

  const serviceShape = Object.values(model.shapes).find(
    (s) => s.type === "service",
  ) as ServiceShape | undefined;
  if (!serviceShape) {
    return yield* Effect.fail(
      new Error(`service shape not found: ${modelPath}`),
    );
  }
  const sdkId = serviceShape.traits["aws.api#service"].sdkId;
  const serviceSpec = loadServiceSpecPatch(sdkId);

  // awsSpec mutates the model (spec patches, materialized errors) and must
  // run before generateService on the same instance. Both are sync; failures
  // become typed failures so one bad service doesn't kill the run.
  const generated = yield* Effect.suspend(() => {
    try {
      const spec = awsSpec(model, serviceSpec);
      return Effect.succeed(generateService(model, spec));
    } catch (error) {
      return Effect.fail(
        error instanceof Error ? error : new Error(String(error)),
      );
    }
  });

  if (generated.operations === 0) return;

  yield* fs.writeFileString(
    p.join(outputRootPath, `${sdkId.toLowerCase().replaceAll(" ", "-")}.ts`),
    generated.code,
  );
});

BunRuntime.runMain(
  Effect.gen(function* () {
    const p = yield* Path.Path;
    const fs = yield* FileSystem.FileSystem;

    // Copy partitions.json from Smithy to rules-engine (if available)
    const partitionsSrc = p.join(
      "specs",
      "smithy",
      "smithy-aws-endpoints",
      "src",
      "main",
      "resources",
      "software",
      "amazon",
      "smithy",
      "rulesengine",
      "aws",
      "language",
      "functions",
      "partition",
      "partitions.json",
    );
    const partitionsExists = yield* fs
      .exists(partitionsSrc)
      .pipe(Effect.catch(() => Effect.succeed(false)));
    if (partitionsExists) {
      yield* fs.makeDirectory(p.join("src", "rules-engine"), {
        recursive: true,
      });
      yield* fs.copyFile(
        partitionsSrc,
        p.join("src", "rules-engine", "partitions.json"),
      );
      yield* Console.log("✅ partitions.json");
    } else {
      yield* Console.log(
        "⚠️  partitions.json not found (smithy submodule not initialized)",
      );
    }

    const rootModelsPath = p.join(AWS_MODELS_PATH, "models");
    const folders = yield* fs.readDirectory(rootModelsPath);

    yield* fs.makeDirectory(RESULT_ROOT_PATH, { recursive: true });

    const sdkFlag = Option.getOrNull(getSdkFlag());

    yield* Effect.forEach(
      folders.filter((service) => sdkFlag == null || sdkFlag === service),
      (service) =>
        Effect.gen(function* () {
          const baseModelPath = p.join(rootModelsPath, service, "service");
          const folder = (yield* fs.readDirectory(baseModelPath))[0]!;
          const modelPath = p.join(
            baseModelPath,
            folder,
            `${service}-${folder}.json`,
          );
          yield* generateClient(modelPath, RESULT_ROOT_PATH);
        }).pipe(
          Effect.andThen(() => Console.log(`✅ ${service}`)),
          Effect.catch((error) =>
            Console.error(
              `❌ ${service}\n\tUnable to generate client: ${error}`,
            ),
          ),
        ),
    );

    // Hand-authored models for APIs `specs/api-models-aws` doesn't cover.
    // They compile through the identical path — same SdkSpec, same patch
    // chain — so a manual spec is a MODEL, never a hand-written module.
    const manualExists = yield* fs.exists(MANUAL_SPECS_PATH);
    const manualFiles = manualExists
      ? (yield* fs.readDirectory(MANUAL_SPECS_PATH)).filter((f) =>
          f.endsWith(".json"),
        )
      : [];
    for (const file of manualFiles) {
      const service = file.replace(/\.json$/, "");
      if (folders.includes(service)) {
        return yield* Effect.die(
          new Error(
            `${MANUAL_SPECS_PATH}/${file} shadows a published model — rename or delete it`,
          ),
        );
      }
    }
    yield* Effect.forEach(
      manualFiles.filter(
        (file) => sdkFlag == null || sdkFlag === file.replace(/\.json$/, ""),
      ),
      (file) =>
        generateClient(p.join(MANUAL_SPECS_PATH, file), RESULT_ROOT_PATH).pipe(
          Effect.andThen(() => Console.log(`✅ ${file} (manual)`)),
          Effect.catch((error) =>
            Console.error(`❌ ${file}\n\tUnable to generate client: ${error}`),
          ),
        ),
    );

    // Barrel — namespace per service to avoid op-name collisions.
    const generatedFiles = yield* fs.readDirectory(RESULT_ROOT_PATH);
    const serviceFiles = generatedFiles
      .filter((f) => f.endsWith(".ts") && f !== "index.ts")
      .sort();

    yield* fs.writeFileString(
      p.join(RESULT_ROOT_PATH, "index.ts"),
      barrel(
        "",
        serviceFiles.map((file) => {
          const baseName = file.replace(/\.ts$/, "");
          // File name → valid JS identifier ("amazon-s3" → "S3",
          // "api-gateway" → "ApiGateway")
          const exportName = baseName
            .replace(/^amazon-/, "")
            .replace(/^aws-/, "")
            .split("-")
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join("");
          return { name: exportName, path: `./${baseName}.ts` };
        }),
      ),
    );

    yield* Console.log(`✅ index.ts`);
  }).pipe(Effect.provide(BunServices.layer)),
);
