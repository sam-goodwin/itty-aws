import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environmentCreate } from "../src/operations/environmentCreate.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const projectName = (name: string) => `distilled-railway-${name}-${testRunId}`;
const envName = (name: string) => `distilled-railway-${name}-${testRunId}`;

describe("environmentCreate", () => {
  it("happy path - creates a non-ephemeral environment in a freshly provisioned project", async () => {
    const projName = projectName("env-create");
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

          const result = yield* environmentCreate({
            input: {
              name: newEnvName,
              projectId: project.id,
              sourceEnvironmentId: baseEnvId,
              skipInitialDeploys: true,
            },
          });

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
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
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
