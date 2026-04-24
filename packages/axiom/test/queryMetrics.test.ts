import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { queryMetrics } from "../src/operations/v1-edge-query/queryMetrics";
import { runEffect, testRunId } from "./setup";

describe("queryMetrics", () => {
  it(
    "runs an MPL query over a 24h window and returns a response body",
    async () => {
      const endTime = new Date().toISOString();
      const startTime = new Date(
        Date.now() - 24 * 60 * 60 * 1000,
      ).toISOString();

      const result = await runEffect(
        queryMetrics({
          startTime,
          endTime,
          format: "metrics-v2",
          mpl: "axiom.datasets",
        }),
      );

      // QueryMetricsOutput is a loosely-typed body; axiom returns a JSON
      // object with at least a top-level container for the query result.
      expect(result).toBeDefined();
      expect(typeof result).toBe("object");
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials are invalid",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(Credentials, {
        apiKey: Redacted.make(`invalid-token-${testRunId}`),
        apiBaseUrl: "https://api.axiom.co",
      });

      const endTime = new Date().toISOString();
      const startTime = new Date(
        Date.now() - 24 * 60 * 60 * 1000,
      ).toISOString();

      const error = await Effect.runPromise(
        queryMetrics({
          startTime,
          endTime,
          format: "metrics-v2",
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
