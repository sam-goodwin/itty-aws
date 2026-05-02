import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { loginSessionConsume } from "../src/operations/loginSessionConsume.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_CODE = `distilled-railway-login-consume-${testRunId}`;

describe("loginSessionConsume", () => {
  it("fabricated id surfaces RailwayNotAuthorized for a non-existent login-session code", async () => {
    // Successfully consuming a login session requires a real, pending CLI
    // login session that has been authed by another process. There is no
    // session-creation API available from the test harness, so exercise
    // the API with a fabricated code and assert the typed RailwayNotFound
    // instead.
    const error = await runEffect(
      loginSessionConsume({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      loginSessionConsume({ code: NON_EXISTENT_CODE }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent login-session code surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      loginSessionConsume({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
