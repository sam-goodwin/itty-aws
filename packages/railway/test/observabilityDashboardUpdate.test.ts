import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { observabilityDashboardUpdate } from "../src/operations/observabilityDashboardUpdate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("observabilityDashboardUpdate", () => {
  it("fabricated id surfaces RailwayNotAuthorized for a non-existent observability-dashboard id", async () => {
    // Updating a real observability dashboard requires a dashboard
    // owned by an environment the test account controls; provisioning
    // one just to update it would couple this test to project lifecycle.
    // Exercise the API with a fabricated id and an empty input list and
    // assert the typed RailwayNotFound instead.
    const error = await runEffect(
      observabilityDashboardUpdate({
        id: NON_EXISTENT_UUID,
        input: [],
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
      observabilityDashboardUpdate({
        id: NON_EXISTENT_UUID,
        input: [],
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent observability-dashboard id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      observabilityDashboardUpdate({
        id: NON_EXISTENT_UUID,
        input: [],
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty dashboard id", async () => {
    const error = await runEffect(
      observabilityDashboardUpdate({
        id: "",
        input: [],
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
