import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { environmentDelete } from "../src/operations/environmentDelete.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("environmentCreate", () => {
  it("happy path - creates a non-ephemeral environment in the shared project", async () => {
    const project = await getSharedProject();
    const newEnvName = envName("env-create");

    await runEffect(
      Effect.gen(function* () {
        const result = yield* environmentCreate({
          input: {
            name: newEnvName,
            projectId: project.id,
            sourceEnvironmentId: project.baseEnvironmentId,
            skipInitialDeploys: true,
          },
        });

        return yield* Effect.gen(function* () {
          expect(typeof result.id).toBe("string");
          expect(result.id.length).toBeGreaterThan(0);
          expect(result.name).toBe(newEnvName);
          expect(result.projectId).toBe(project.id);
          expect(result.isEphemeral).toBe(false);
          expect(typeof result.canAccess).toBe("boolean");
          expect(typeof result.createdAt).toBe("string");
          expect(typeof result.updatedAt).toBe("string");
          expect(result.deletedAt).toBeNull();
        }).pipe(
          Effect.ensuring(
            environmentDelete({ id: result.id }).pipe(Effect.ignore),
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
      environmentCreate({
        input: {
          name: envName("env-unauth"),
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      environmentCreate({
        input: { name: envName("env-invalid"), projectId: "" },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
