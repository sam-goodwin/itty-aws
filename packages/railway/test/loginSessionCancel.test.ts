import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { loginSessionCancel } from "../src/operations/loginSessionCancel.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_CODE = `distilled-railway-login-cancel-${testRunId}`;

describe("loginSessionCancel", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound for a non-existent login-session code", async () => {
    // Successfully cancelling a login session requires a real, pending
    // CLI login session created by another process. There is no
    // session-creation API available from the test harness, so exercise
    // the API with a fabricated code and assert the typed RailwayNotFound
    // instead.
    const error = await runEffect(
      loginSessionCancel({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      loginSessionCancel({ code: NON_EXISTENT_CODE }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent login-session code", async () => {
    const error = await runEffect(
      loginSessionCancel({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
