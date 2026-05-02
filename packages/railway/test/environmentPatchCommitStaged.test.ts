import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { environmentPatchCommitStaged } from "../src/operations/environmentPatchCommitStaged.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("environmentPatchCommitStaged", () => {
  it(
    "happy path - commits staged changes on a freshly forked environment",
    async () => {
      const projName = projectName("env-patch-staged");
      const newEnvName = envName("staging-staged");

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

            // Fork with stageInitialChanges so the new environment has staged
            // changes ready to be committed.
            const env = yield* environmentCreate({
              input: {
                name: newEnvName,
                projectId: project.id,
                sourceEnvironmentId: baseEnvId,
                skipInitialDeploys: true,
                stageInitialChanges: true,
              },
            });

            const result = yield* environmentPatchCommitStaged({
              environmentId: env.id,
              commitMessage: `distilled-railway-epcs-${testRunId}`,
              skipDeploys: true,
            });

            expect(typeof result).toBe("string");
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
      environmentPatchCommitStaged({
        environmentId: NON_EXISTENT_UUID,
        commitMessage: `distilled-railway-epcs-unauth-${testRunId}`,
        skipDeploys: true,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment id", async () => {
    const error = await runEffect(
      environmentPatchCommitStaged({
        environmentId: NON_EXISTENT_UUID,
        commitMessage: `distilled-railway-epcs-nf-${testRunId}`,
        skipDeploys: true,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty environmentId", async () => {
    const error = await runEffect(
      environmentPatchCommitStaged({
        environmentId: "",
        commitMessage: `distilled-railway-epcs-inv-${testRunId}`,
        skipDeploys: true,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
