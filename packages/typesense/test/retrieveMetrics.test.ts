import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { retrieveMetrics } from "../src/operations/retrieveMetrics";
import { runEffect, testRunId } from "./setup";

describe("retrieveMetrics", () => {
  it(
    "retrieves system metrics",
    async () => {
      const result = await runEffect(retrieveMetrics({}));

      expect(result).toBeDefined();
      expect(typeof result).toBe("object");
      // Typesense returns a flat object with keys like
      // system_cpu_active_percentage, system_memory_used_bytes, etc.
      // Schema.Unknown means the SDK doesn't validate the shape, so we
      // just sanity-check it's a plain object with at least one key.
      expect(
        Object.keys(result as Record<string, unknown>).length,
      ).toBeGreaterThan(0);
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
        retrieveMetrics({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
