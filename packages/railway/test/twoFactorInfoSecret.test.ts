import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { twoFactorInfoSecret } from "../src/operations/twoFactorInfoSecret.ts";
import { runEffect } from "./setup.ts";

describe("twoFactorInfoSecret", () => {
  it(
    "happy path - generates a 2FA secret and otpauth URI",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* twoFactorInfoSecret({});
          expect(typeof result.secret).toBe("string");
          expect(result.secret.length).toBeGreaterThan(0);
          expect(typeof result.uri).toBe("string");
          expect(result.uri.length).toBeGreaterThan(0);
        }),
      );
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
        twoFactorInfoSecret({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
