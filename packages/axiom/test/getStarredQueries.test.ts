import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getStarredQueries } from "../src/operations/v2/getStarredQueries";
import { runEffect, testRunId } from "./setup";

describe("getStarredQueries", () => {
  it(
    "returns an array of starred queries",
    async () => {
      // `who` is required by the server (spec lists it as optional but the
      // backend rejects requests without one of a user ID / "team" / "all").
      const starred = await runEffect(getStarredQueries({ who: "all" }));

      expect(Array.isArray(starred)).toBe(true);

      for (const q of starred) {
        expect(typeof q.id).toBe("string");
        expect(typeof q.name).toBe("string");
        expect(q.kind).toBe("apl");
        expect(typeof q.who).toBe("string");
        expect(typeof q.query.apl).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "accepts limit and offset pagination parameters",
    async () => {
      // Pagination params are optional query params; a small page should
      // still produce a well-typed array.
      const starred = await runEffect(
        getStarredQueries({ limit: 1, offset: 0, who: "all" }),
      );

      expect(Array.isArray(starred)).toBe(true);
      expect(starred.length).toBeLessThanOrEqual(1);
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack starred-queries read access",
    async () => {
      // Override the shared Credentials layer with a Bearer token that is
      // authenticated but not authorized. Axiom surfaces this as a 401, which the SDK's matchError maps to the typed Unauthorized class.
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-token-${testRunId}`),
          apiBaseUrl: "https://api.axiom.co",
        }),
      );

      const error = await Effect.runPromise(
        getStarredQueries({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
