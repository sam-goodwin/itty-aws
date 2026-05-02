import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { canvasViewMerge } from "../src/operations/canvasViewMerge.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { environmentDelete } from "../src/operations/environmentDelete.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("canvasViewMerge", () => {
  it("happy path - merges canvas layout from a source environment into the base environment", async () => {
    const project = await getSharedProject();
    const newEnvName = envName("canvas-merge");

    await runEffect(
      Effect.gen(function* () {
        const newEnv = yield* environmentCreate({
          input: {
            name: newEnvName,
            projectId: project.id,
            sourceEnvironmentId: project.baseEnvironmentId,
            skipInitialDeploys: true,
          },
        });

        return yield* Effect.gen(function* () {
          const result = yield* canvasViewMerge({
            sourceEnvironmentId: newEnv.id,
            targetEnvironmentId: project.baseEnvironmentId,
          });
          expect(result).toBe(true);
        }).pipe(
          Effect.ensuring(
            environmentDelete({ id: newEnv.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );
  }, 180_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      canvasViewMerge({
        sourceEnvironmentId: NON_EXISTENT_UUID,
        targetEnvironmentId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent environment ids surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      canvasViewMerge({
        sourceEnvironmentId: NON_EXISTENT_UUID,
        targetEnvironmentId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
