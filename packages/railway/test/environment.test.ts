import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { environment } from "../src/operations/environment.ts";
import { getSharedProject, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("environment", () => {
  it("happy path - returns environment details by id", async () => {
    const project = await getSharedProject();

    const result = await runEffect(
      Effect.gen(function* () {
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

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent environment id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      environment({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
