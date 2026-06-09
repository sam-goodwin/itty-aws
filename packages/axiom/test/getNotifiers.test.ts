import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getNotifiers } from "../src/operations/v2/getNotifiers";
import { runEffect, testRunId } from "./setup";

describe("getNotifiers", () => {
  it(
    "returns an array of notifier configurations",
    async () => {
      const notifiers = await runEffect(getNotifiers({}));

      // The output schema is Schema.Array(...). Result must be an array; the
      // account may or may not have notifiers configured, so we only assert
      // the shape of any entries that are present rather than a minimum
      // length.
      expect(Array.isArray(notifiers)).toBe(true);

      for (const n of notifiers) {
        expect(typeof n.name).toBe("string");
        expect(typeof n.properties).toBe("object");
        expect(n.properties).not.toBeNull();
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the caller's credentials lack notifier read access",
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
        getNotifiers({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
