import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { health } from "../src/operations/health";
import { runEffect, testRunId } from "./setup";

describe("health", () => {
  it(
    "returns ok: true when the Typesense server is reachable",
    async () => {
      const result = await runEffect(health({}));

      expect(result.ok).toBe(true);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the request hits an unknown path",
    async () => {
      // /health does not require auth, so bad credentials still return 200.
      // Instead, point the client at a bogus URL prefix so the eventual
      // request URL (`<base>/nonexistent-${testRunId}/health`) returns 404
      // with a JSON `{message}` body, which the SDK's matchError maps to
      // the typed NotFound error class.
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      const apiKey = process.env.TYPESENSE_API_KEY;
      if (!apiBaseUrl || !apiKey) {
        throw new Error(
          "TYPESENSE_API_URL and TYPESENSE_API_KEY must be set to run typesense tests",
        );
      }
      const BogusBase = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(apiKey),
          apiBaseUrl: `${apiBaseUrl}/nonexistent-${testRunId}`,
        }),
      );

      const error = await Effect.runPromise(
        health({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BogusBase, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
