import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { retrieveAPIStats } from "../src/operations/retrieveAPIStats";
import { runEffect, testRunId } from "./setup";

describe("retrieveAPIStats", () => {
  it(
    "retrieves API stats",
    async () => {
      const result = await runEffect(retrieveAPIStats({}));

      expect(result).toBeDefined();
      expect(typeof result).toBe("object");
      // All fields are optional so we just sanity-check that any present
      // numeric fields are actually numbers.
      if (result.total_requests_per_second !== undefined) {
        expect(typeof result.total_requests_per_second).toBe("number");
      }
      if (result.search_latency_ms !== undefined) {
        expect(typeof result.search_latency_ms).toBe("number");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
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
        retrieveAPIStats({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
