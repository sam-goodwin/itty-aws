import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getViews } from "../src/operations/v2/getViews";
import { runEffect, testRunId } from "./setup";

describe("getViews", () => {
  it(
    "returns an array of views",
    async () => {
      const views = await runEffect(getViews({}));

      expect(Array.isArray(views)).toBe(true);

      for (const view of views) {
        expect(typeof view.name).toBe("string");
        expect(typeof view.aplQuery).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials are invalid",
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
        getViews({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
