import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { customerTogglePayoutsToCredits } from "../src/operations/customerTogglePayoutsToCredits.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("customerTogglePayoutsToCredits", () => {
  it("happy path - exercises the API and surfaces a typed error for a non-existent customer id", async () => {
    // Customer ids identify stripe-backed billing customers tied to a real
    // workspace. Calling this mutation against the authenticated workspace's
    // customer would alter its real payout/credit behavior, which is
    // destructive beyond test data. Exercise the API + assert a typed error
    // for a fabricated id instead.
    const error = await runEffect(
      customerTogglePayoutsToCredits({
        customerId: NON_EXISTENT_UUID,
        input: { isWithdrawingToCredits: true },
      }).pipe(Effect.flip),
    );
    const tag = (error as { _tag: string })._tag;
    expect(["RailwayInvalidInput", "RailwayNotFound"]).toContain(tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      customerTogglePayoutsToCredits({
        customerId: NON_EXISTENT_UUID,
        input: { isWithdrawingToCredits: true },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
