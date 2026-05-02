import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { canvasViewMerge } from "../src/operations/canvasViewMerge.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("canvasViewMerge", () => {
  it(
    "happy path - merges canvas layout from a source environment into the base environment",
    async () => {
      const projName = projectName("canvas-merge");
      const newEnvName = envName("staging");

      await runEffect(
        Effect.gen(function* () {
          const project = yield* projectCreate({
            input: { name: projName },
          });
          return yield* Effect.gen(function* () {
            const baseEnvId = project.baseEnvironmentId;
            if (!baseEnvId) {
              throw new Error(
                "test setup: created project has no baseEnvironmentId",
              );
            }

            // Create a fork of the base environment
            const newEnv = yield* environmentCreate({
              input: {
                name: newEnvName,
                projectId: project.id,
                sourceEnvironmentId: baseEnvId,
                skipInitialDeploys: true,
              },
            });

            // Merge canvas layout from the new env back into the base env
            const result = yield* canvasViewMerge({
              sourceEnvironmentId: newEnv.id,
              targetEnvironmentId: baseEnvId,
            });
            expect(result).toBe(true);
          }).pipe(
            Effect.ensuring(
              projectDelete({ id: project.id }).pipe(Effect.ignore),
            ),
          );
        }),
      );
    },
    180_000,
  );

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

  it("error - RailwayNotFound for non-existent environment ids", async () => {
    const error = await runEffect(
      canvasViewMerge({
        sourceEnvironmentId: NON_EXISTENT_UUID,
        targetEnvironmentId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
