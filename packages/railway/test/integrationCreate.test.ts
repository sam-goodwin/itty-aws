import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { integrationCreate } from "../src/operations/integrationCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("integrationCreate", () => {
  it("fabricated id surfaces RailwayInvalidInput when the referenced project/integration-auth do not exist", async () => {
    // Creating a project integration requires an OAuth-linked third-party
    // integration auth (Slack/Discord/DataDog/etc.) and a real project,
    // neither of which is available in the shared test environment.
    // Exercise the API with fabricated ids and assert the typed
    // RailwayInvalidInput instead.
    const error = await runEffect(
      integrationCreate({
        input: {
          config: {},
          integrationAuthId: NON_EXISTENT_UUID,
          name: `distilled-railway-int-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      integrationCreate({
        input: {
          config: {},
          name: `distilled-railway-int-unauth-${testRunId}`,
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
      integrationCreate({
        input: {
          config: {},
          name: `distilled-railway-int-inv-${testRunId}`,
          projectId: "",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
