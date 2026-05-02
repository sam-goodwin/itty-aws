import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { customerCreateFreePlanSubscription } from "../src/operations/customerCreateFreePlanSubscription.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("customerCreateFreePlanSubscription", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput for a non-existent customer id", async () => {
    // Customer ids identify stripe-backed billing customers tied to a real
    // workspace. Calling this mutation against the authenticated workspace's
    // customer would alter its real subscription, which is destructive beyond
    // test data. Exercise the API + assert the typed RailwayInvalidInput for
    // a fabricated id instead.
    const error = await runEffect(
      customerCreateFreePlanSubscription({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
      ),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      customerCreateFreePlanSubscription({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty customer id", async () => {
    const error = await runEffect(
      customerCreateFreePlanSubscription({ id: "" }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
