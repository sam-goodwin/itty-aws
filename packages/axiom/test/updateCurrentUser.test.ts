import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getCurrentUser } from "../src/operations/v2/getCurrentUser";
import { updateCurrentUser } from "../src/operations/v2/updateCurrentUser";
import { runEffect, testRunId } from "./setup";

describe("updateCurrentUser", () => {
  it(
    "updates the current user's name and restores the original value",
    async () => {
      const original = await runEffect(getCurrentUser({}));
      const newName = `distilled-axiom-user-${testRunId}`;

      const effect = Effect.gen(function* () {
        const updated = yield* updateCurrentUser({ name: newName });

        expect(updated.id).toBe(original.id);
        expect(updated.name).toBe(newName);
        expect(updated.email).toBe(original.email);
      }).pipe(
        Effect.ensuring(
          updateCurrentUser({ name: original.name }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
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
        updateCurrentUser({ name: `distilled-axiom-user-${testRunId}` }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
