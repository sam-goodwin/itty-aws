import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { environmentPatchCommit } from "../src/operations/environmentPatchCommit.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("environmentPatchCommit", () => {
  it("happy path - commits an empty patch on a freshly forked environment", async () => {
    const projName = projectName("env-patch");
    const newEnvName = envName("staging-patch");

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

          const result = yield* environmentPatchCommit({
            environmentId: env.id,
            commitMessage: `distilled-railway-epc-${testRunId}`,
            patch: null,
          });

          expect(typeof result).toBe("string");
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
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
      environmentPatchCommit({
        environmentId: NON_EXISTENT_UUID,
        commitMessage: `distilled-railway-epc-unauth-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent environment id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      environmentPatchCommit({
        environmentId: NON_EXISTENT_UUID,
        commitMessage: `distilled-railway-epc-nf-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty environmentId", async () => {
    const error = await runEffect(
      environmentPatchCommit({
        environmentId: "",
        commitMessage: `distilled-railway-epc-inv-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
