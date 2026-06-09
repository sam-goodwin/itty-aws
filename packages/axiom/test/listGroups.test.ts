import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { listGroups } from "../src/operations/v2/listGroups";
import { runEffect, testRunId } from "./setup";

describe("listGroups", () => {
  it(
    "returns an array of group configurations",
    async () => {
      const groups = await runEffect(listGroups({}));

      expect(Array.isArray(groups)).toBe(true);

      for (const g of groups) {
        expect(typeof g.id).toBe("string");
        expect(typeof g.name).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack rbac read access",
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
        listGroups({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
