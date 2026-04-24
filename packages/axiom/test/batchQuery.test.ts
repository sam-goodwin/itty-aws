import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { batchQuery } from "../src/operations/v1-edge-query/batchQuery";
import { runEffect, testRunId } from "./setup";

describe("batchQuery", () => {
  it(
    "invokes the batch query endpoint with the documented options",
    async () => {
      // The generated batchQuery input schema only models query-level
      // options; there is no body field for the array of queries.
      // `buildRequestParts` therefore cannot carry the queries array in the
      // request body. We cast through `unknown` to include a realistic
      // `queries` payload — a signal that the input schema needs a body
      // field — and assert the operation resolves without raising.
      const result = await runEffect(
        batchQuery({
          "apl-source": "console",
          "apl-source-id": `distilled-axiom-batch-${testRunId}`,
          nocache: true,
          queries: [],
        } as unknown as Record<string, never>),
      );

      // BatchQueryOutput is Void — axiom returns an empty/ignored body.
      expect(result).toBeUndefined();
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

      const error = await Effect.runPromise(
        batchQuery({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
