import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getCurrentUser } from "../src/operations/v2/getCurrentUser";
import { runEffect, testRunId } from "./setup";

describe("getCurrentUser", () => {
  it(
    "returns the authenticated user's profile and role",
    async () => {
      const user = await runEffect(getCurrentUser({}));

      expect(typeof user.id).toBe("string");
      expect(user.id.length).toBeGreaterThan(0);
      expect(typeof user.email).toBe("string");
      expect(user.email.length).toBeGreaterThan(0);
      expect(typeof user.name).toBe("string");
      expect(typeof user.role).toBe("object");
      expect(typeof user.role.id).toBe("string");
      expect(typeof user.role.name).toBe("string");
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
        getCurrentUser({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
