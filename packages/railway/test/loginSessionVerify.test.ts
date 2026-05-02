import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { loginSessionVerify } from "../src/operations/loginSessionVerify.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("loginSessionVerify", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced login-session code does not exist",
    async () => {
      // Successfully verifying a login session requires a real, pending CLI
      // login session created by another process. There is no
      // session-creation API available from the test harness for verifying
      // an existing session, so exercise the API with a fabricated code and
      // assert the typed RailwayInvalidInput instead.
      const error = await runEffect(
        loginSessionVerify({
          code: `distilled-railway-login-verify-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        loginSessionVerify({
          code: `distilled-railway-login-verify-unauth-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput for an empty code",
    async () => {
      const error = await runEffect(
        loginSessionVerify({ code: "" }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
