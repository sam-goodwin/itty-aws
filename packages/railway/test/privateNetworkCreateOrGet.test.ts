import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { privateNetworkCreateOrGet } from "../src/operations/privateNetworkCreateOrGet.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworkCreateOrGet", () => {
  it("fabricated id surfaces RailwayInvalidInput when the referenced project/environment do not exist", async () => {
    // Creating a real private network requires a project plus an
    // environment owned by the test account; provisioning these just to
    // attach a network would couple this test to project lifecycle.
    // Exercise the API with fabricated ids and assert the typed
    // RailwayInvalidInput instead.
    const error = await runEffect(
      privateNetworkCreateOrGet({
        input: {
          environmentId: NON_EXISTENT_UUID,
          name: `distilled-railway-pn-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
          tags: [],
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
      privateNetworkCreateOrGet({
        input: {
          environmentId: NON_EXISTENT_UUID,
          name: `distilled-railway-pn-unauth-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
          tags: [],
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
      privateNetworkCreateOrGet({
        input: {
          environmentId: NON_EXISTENT_UUID,
          name: `distilled-railway-pn-inv-${testRunId}`,
          projectId: "",
          tags: [],
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
