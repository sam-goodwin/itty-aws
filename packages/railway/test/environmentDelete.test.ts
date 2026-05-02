import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { environmentDelete } from "../src/operations/environmentDelete.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("environmentDelete", () => {
  it(
    "happy path - deletes a non-base environment from a freshly provisioned project",
    async () => {
      const projName = projectName("env-delete");
      const newEnvName = envName("staging-del");

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

            const env = yield* environmentCreate({
              input: {
                name: newEnvName,
                projectId: project.id,
                sourceEnvironmentId: baseEnvId,
                skipInitialDeploys: true,
              },
            });

            const result = yield* environmentDelete({ id: env.id });
            expect(result).toBe(true);

            // Deleting again should now surface RailwayNotFound
            const error = yield* environmentDelete({ id: env.id }).pipe(
              Effect.flip,
            );
            expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
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
      environmentDelete({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment id", async () => {
    const error = await runEffect(
      environmentDelete({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
