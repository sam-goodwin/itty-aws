import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { recoveryCodeValidate } from "../src/operations/recoveryCodeValidate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("recoveryCodeValidate", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayInvalidInput when the recovery code is not valid",
    async () => {
      // Validating a real recovery code requires a fresh, unused
      // recovery code from the test account, and consuming it would
      // strip a code from the user's set. Recovery codes also cannot be
      // round-tripped through the API on a fresh fabricated value.
      // Exercise the API with a fabricated code and assert the typed
      // RailwayInvalidInput instead.
      const error = await runEffect(
        recoveryCodeValidate({
          input: {
            code: `distilled-railway-rcv-${testRunId}`,
          },
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
        recoveryCodeValidate({
          input: {
            code: `distilled-railway-rcv-unauth-${testRunId}`,
          },
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
        recoveryCodeValidate({
          input: {
            code: "",
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
