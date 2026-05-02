import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectTokenCreate } from "../src/operations/projectTokenCreate.ts";
import { getSharedProject, runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectTokenCreate", () => {
  it("happy path - creates a project token in the shared project", async () => {
    const project = await getSharedProject();
    const tokenName = `distilled-railway-ptc-token-${testRunId}`;

    const token = await runEffect(
      projectTokenCreate({
        input: {
          projectId: project.id,
          environmentId: project.baseEnvironmentId,
          name: tokenName,
        },
      }),
    );
    expect(typeof token).toBe("string");
    expect(token.length).toBeGreaterThan(0);
    // Token leaks into the shared project — projectDelete at process exit
    // tears it down. projectTokenCreate returns only the bearer string,
    // not an id, so explicit cleanup would require listing tokens first.
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectTokenCreate({
        input: {
          projectId: NON_EXISTENT_UUID,
          environmentId: NON_EXISTENT_UUID,
          name: `distilled-railway-ptc-unauth-${testRunId}`,
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
      projectTokenCreate({
        input: {
          projectId: "",
          environmentId: NON_EXISTENT_UUID,
          name: `distilled-railway-ptc-inv-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
