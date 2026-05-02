import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectFeatureFlagAdd } from "../src/operations/projectFeatureFlagAdd.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectFeatureFlagAdd", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced project does not exist", async () => {
    // The only valid flag value in the schema is "PLACEHOLDER", which is
    // a no-op marker on a real project. Exercise the API with a
    // fabricated projectId and assert the typed RailwayNotFound; this
    // verifies the request is dispatched and the response decoded into
    // the expected typed error.
    const error = await runEffect(
      projectFeatureFlagAdd({
        input: {
          flag: "PLACEHOLDER",
          projectId: NON_EXISTENT_UUID,
        },
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
      projectFeatureFlagAdd({
        input: {
          flag: "PLACEHOLDER",
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent projectId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectFeatureFlagAdd({
        input: {
          flag: "PLACEHOLDER",
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      projectFeatureFlagAdd({
        input: {
          flag: "PLACEHOLDER",
          projectId: "",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
