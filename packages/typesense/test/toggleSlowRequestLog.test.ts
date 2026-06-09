import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { toggleSlowRequestLog } from "../src/operations/toggleSlowRequestLog";
import { runEffect, testRunId } from "./setup";

describe("toggleSlowRequestLog", () => {
  it(
    "enables slow-request logging by setting the threshold",
    async () => {
      // Set a very high threshold so we don't actually flood the log;
      // -1 disables logging again, which we restore at the end.
      const effect = Effect.gen(function* () {
        const enabled = yield* toggleSlowRequestLog({
          "log-slow-requests-time-ms": 60_000,
        });
        expect(enabled.success).toBe(true);
      }).pipe(
        Effect.ensuring(
          toggleSlowRequestLog({
            "log-slow-requests-time-ms": -1,
          }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      if (!apiBaseUrl) {
        throw new Error("TYPESENSE_API_URL must be set to run typesense tests");
      }
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-key-${testRunId}`),
          apiBaseUrl,
        }),
      );

      const error = await Effect.runPromise(
        toggleSlowRequestLog({
          "log-slow-requests-time-ms": -1,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
