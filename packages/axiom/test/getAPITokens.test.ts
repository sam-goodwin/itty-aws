import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getAPITokens } from "../src/operations/v2/getAPITokens";
import { runEffect, testRunId } from "./setup";

describe("getAPITokens", () => {
  it(
    "returns an array of API tokens for the authenticated org",
    async () => {
      const tokens = await runEffect(getAPITokens({}));

      expect(Array.isArray(tokens)).toBe(true);

      for (const token of tokens) {
        expect(typeof token.id).toBe("string");
        expect(typeof token.name).toBe("string");
        expect(typeof token.orgCapabilities).toBe("object");
        expect(typeof token.datasetCapabilities).toBe("object");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack apiTokens read access",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-token-${testRunId}`),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const error = await Effect.runPromise(
        getAPITokens({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
