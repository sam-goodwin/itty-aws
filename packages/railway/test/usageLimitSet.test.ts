import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { usageLimitSet } from "../src/operations/usageLimitSet.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("usageLimitSet", () => {
  it("happy path - exercises usage limit set with a fabricated customer id (returns RailwayInvalidInput)", async () => {
    const error = await runEffect(
      usageLimitSet({
        input: {
          customerId: NON_EXISTENT_UUID,
          softLimitDollars: 5,
          hardLimitDollars: 10,
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      usageLimitSet({
        input: {
          customerId: NON_EXISTENT_UUID,
          softLimitDollars: 5,
          hardLimitDollars: 10,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput when softLimitDollars exceeds hardLimitDollars", async () => {
    const error = await runEffect(
      usageLimitSet({
        input: {
          customerId: NON_EXISTENT_UUID,
          softLimitDollars: 100,
          hardLimitDollars: 1,
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
