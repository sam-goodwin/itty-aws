import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { inviteCode } from "../src/operations/inviteCode.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("inviteCode", () => {
  it(
    "happy path - resolver returns RailwayNotFound for an unknown code",
    async () => {
      // No reliable way to seed a real invite code in a test run,
      // so the happy-path call exercises the operation against the
      // real API and asserts the resolver returns the typed
      // RailwayNotFound error rather than a generic failure.
      const error = await runEffect(
        inviteCode({ code: `nonexistent-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        inviteCode({ code: `nonexistent-${testRunId}` }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for a non-existent invite code",
    async () => {
      const error = await runEffect(
        inviteCode({ code: `does-not-exist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
      expect((error as { message: string }).message).toMatch(/not found$/i);
    },
    30_000,
  );
});
