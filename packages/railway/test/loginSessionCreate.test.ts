import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { loginSessionCreate } from "../src/operations/loginSessionCreate.ts";
import { runEffect } from "./setup.ts";

describe("loginSessionCreate", () => {
  it("happy path - returns a string login-session code", async () => {
    const result = await runEffect(loginSessionCreate({}));
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      loginSessionCreate({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput is surfaced when the server rejects the session-create request", async () => {
    // loginSessionCreate has no client-side input fields (Schema.Struct({})),
    // so the only path to RailwayInvalidInput is a server-side rejection
    // (e.g. account state, rate-limit). Exercise the API and assert the
    // typed RailwayInvalidInput when the server takes that path. If the
    // operation succeeds for the test account, this assertion will fail
    // and the metadata heuristic should be revisited.
    const error = await runEffect(loginSessionCreate({}).pipe(Effect.flip));
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
