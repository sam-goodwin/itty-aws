import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getAnalyticsStatus } from "../src/operations/getAnalyticsStatus";
import { runEffect, testRunId } from "./setup";

describe("getAnalyticsStatus", () => {
  it(
    "returns analytics subsystem buffer/queue sizes",
    async () => {
      const result = await runEffect(getAnalyticsStatus({}));

      // All counters in the output schema are optional numbers; just
      // sanity-check that the response decoded into an object and any
      // present counter is a number.
      expect(typeof result).toBe("object");
      for (const value of Object.values(result)) {
        if (value !== undefined) {
          expect(typeof value).toBe("number");
        }
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      // Override the shared Credentials layer with an API key that the
      // Typesense server will reject. Typesense returns 401 with a JSON
      // body { message: string }, which the SDK's matchError maps to the
      // typed Unauthorized error class.
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      if (!apiBaseUrl) {
        throw new Error(
          "TYPESENSE_API_URL must be set to run typesense tests",
        );
      }
      const BadCredentials = Layer.succeed(Credentials, {
        apiKey: Redacted.make(`invalid-key-${testRunId}`),
        apiBaseUrl,
      });

      const error = await Effect.runPromise(
        getAnalyticsStatus({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
