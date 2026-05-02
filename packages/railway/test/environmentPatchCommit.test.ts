import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { environmentDelete } from "../src/operations/environmentDelete.ts";
import { environmentPatchCommit } from "../src/operations/environmentPatchCommit.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("environmentPatchCommit", () => {
  it("happy path - commits an empty patch on a freshly forked environment", async () => {
    const project = await getSharedProject();
    const newEnvName = envName("env-patch-c");

    await runEffect(
      Effect.gen(function* () {
        const env = yield* environmentCreate({
          input: {
            name: newEnvName,
            projectId: project.id,
            sourceEnvironmentId: project.baseEnvironmentId,
            skipInitialDeploys: true,
          },
        });

        return yield* Effect.gen(function* () {
          const result = yield* environmentPatchCommit({
            environmentId: env.id,
            commitMessage: `distilled-railway-epc-${testRunId}`,
            patch: null,
          });

          expect(typeof result).toBe("string");
        }).pipe(
          Effect.ensuring(
            environmentDelete({ id: env.id }).pipe(Effect.ignore),
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
