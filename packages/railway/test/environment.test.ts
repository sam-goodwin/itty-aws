import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environment } from "../src/operations/environment.ts";
import { projectCreate } from "../src/operations/projectCreate.ts";
import { projectDelete } from "../src/operations/projectDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environment", () => {
  it("happy path - returns environment details by id", async () => {
    const projectName = `distilled-railway-environment-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const project = yield* projectCreate({
          input: { name: projectName },
        });

        return yield* Effect.gen(function* () {
          const env = yield* environment({
            id: project.baseEnvironmentId!,
            projectId: project.id,
          });

          expect(env.id).toBe(project.baseEnvironmentId);
          expect(env.projectId).toBe(project.id);
          expect(typeof env.name).toBe("string");
          expect(typeof env.canAccess).toBe("boolean");
          expect(typeof env.isEphemeral).toBe("boolean");
          expect(typeof env.createdAt).toBe("string");
          expect(typeof env.updatedAt).toBe("string");
          return env;
        }).pipe(
          Effect.ensuring(
            projectDelete({ id: project.id }).pipe(Effect.ignore),
          ),
        );
      }),
    );

    expect(result.id).toBeDefined();
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      environment({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent environment id", async () => {
    const error = await runEffect(
      environment({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
