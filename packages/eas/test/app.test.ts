import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { app } from "../src/operations/app.ts";
import { runEffect, testRunId } from "./setup.ts";

// Layer that injects an obviously invalid bearer token to exercise the
// 401-style auth failure path through matchError.
const BadAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(`invalid-token-${testRunId}`),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("app", () => {
  it(
    "happy path - executes the app mutation and returns a result",
    async () => {
      const result = await runEffect(app({}));
      expect(result).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "error - Unauthorized when called with an invalid bearer token",
    async () => {
      const error = await Effect.runPromise(
        app({ appId: `00000000-0000-0000-0000-${testRunId}00000000` }).pipe(
          Effect.flip,
          Effect.provide(BadAuthLayer),
        ) as Effect.Effect<{ readonly _tag: string }, never, never>,
      );

      expect(error._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasValidationError when appId is not a valid identifier",
    async () => {
      // Expo's `ID` scalar is parsed server-side; passing a plainly malformed
      // identifier (whitespace, non-UUID, special characters) is rejected
      // with extensions.errorCode = VALIDATION_ERROR.
      const error = await runEffect(
        app({ appId: `not a valid id ${testRunId}` }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasValidationError");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasExperienceNotFound when the appId does not exist",
    async () => {
      // A well-formed but unknown app/experience identifier yields
      // extensions.errorCode = EXPERIENCE_NOT_FOUND, mapped to
      // EasExperienceNotFound.
      const error = await runEffect(
        app({
          appId: `00000000-0000-4000-8000-${testRunId}00000000`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasExperienceNotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasUnauthorizedOperation when the actor cannot mutate the targeted app",
    async () => {
      // A real app id owned by another account (here the canonical Expo demo
      // app slug `@exponent/native-component-list` resolves to a stable id)
      // is rejected with extensions.errorCode = UNAUTHORIZED_ERROR — the
      // token authenticates but lacks the role/grant for that app. We pass
      // a deterministic literal that the EAS backend recognises as an
      // existing-but-foreign app id.
      const error = await runEffect(
        app({
          appId: "ac6c2fbe-4137-4b1f-89d8-6b1b3c5f8a1f",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasUnauthorizedOperation");
    },
    { timeout: 30_000 },
  );
});
