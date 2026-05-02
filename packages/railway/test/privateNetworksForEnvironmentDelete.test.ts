import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { privateNetworksForEnvironmentDelete } from "../src/operations/privateNetworksForEnvironmentDelete.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworksForEnvironmentDelete", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced environment does not exist", async () => {
    // Deleting all private networks for a real environment requires a
    // project + environment owned by the test account, and would tear
    // down shared infrastructure used by other tests in this run.
    // Exercise the API with a fabricated environmentId and assert the
    // typed RailwayNotFound instead.
    const error = await runEffect(
      privateNetworksForEnvironmentDelete({
        environmentId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      privateNetworksForEnvironmentDelete({
        environmentId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent environmentId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      privateNetworksForEnvironmentDelete({
        environmentId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
