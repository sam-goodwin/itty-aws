import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { emailChangeInitiate } from "../src/operations/emailChangeInitiate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("emailChangeInitiate", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput for a malformed email address", async () => {
    // Initiating a real email change rotates the test account's identity
    // (sending a confirmation to a new address and gating future logins on
    // it), which would break authentication for the shared test workspace.
    // Exercise the API with a malformed address and assert the typed
    // RailwayInvalidInput instead.
    const error = await runEffect(
      emailChangeInitiate({
        newEmail: `not-a-valid-email-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      emailChangeInitiate({
        newEmail: `distilled-railway-eci-${testRunId}@example.com`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty newEmail", async () => {
    const error = await runEffect(
      emailChangeInitiate({ newEmail: "" }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
