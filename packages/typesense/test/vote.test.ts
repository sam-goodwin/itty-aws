import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { vote } from "../src/operations/vote";
import { runEffect, testRunId } from "./setup";

describe("vote", () => {
  it(
    "triggers a raft vote",
    async () => {
      // Triggering a re-election on a single-node test cluster will
      // typically return `success: false` (no quorum, no other voters),
      // but the operation itself should still respond with a typed body.
      // We assert only on the shape of the response, not the boolean,
      // so the test is stable across single-node and multi-node setups.
      const result = await runEffect(vote({}));

      expect(result).toBeDefined();
      expect(typeof result.success).toBe("boolean");
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
        vote({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
