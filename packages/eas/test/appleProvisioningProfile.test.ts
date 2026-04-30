import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { appleProvisioningProfile } from "../src/operations/appleProvisioningProfile.ts";
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

// Layer that injects a syntactically-valid-looking but non-functional bearer
// token (proper PAT prefix). The EAS backend treats this as an actor token
// without the privilege to invoke provisioning profile mutations and emits
// extensions.errorCode = UNAUTHORIZED_ERROR (→ EasUnauthorizedOperation).
const RestrictedAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(
      `expo_00000000000000000000000000000000${testRunId}`,
    ),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("appleProvisioningProfile", () => {
  it(
    "happy path - executes the appleProvisioningProfile mutation and returns a result",
    async () => {
      const result = await runEffect(appleProvisioningProfile({}));
      expect(result).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "error - Unauthorized when called with an invalid bearer token",
    async () => {
      const error = await Effect.runPromise(
        appleProvisioningProfile({}).pipe(
          Effect.flip,
          Effect.provide(BadAuthLayer),
        ) as Effect.Effect<{ readonly _tag: string }, never, never>,
      );

      expect(error._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasValidationError when the GraphQL operation is rejected by the server",
    async () => {
      // The appleProvisioningProfile mutation wrapper has no input variables,
      // so the only server-side rejection path is GraphQL document validation.
      // The EAS backend emits extensions.errorCode = VALIDATION_ERROR for any
      // server-side schema/argument validation failure on this operation.
      const error = await runEffect(
        appleProvisioningProfile({}).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasValidationError");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasUnauthorizedOperation when the actor lacks permission to manage provisioning profiles",
    async () => {
      // A token that authenticates as a real actor but does not carry the
      // role/grant required to invoke the appleProvisioningProfile mutation
      // wrapper is rejected with extensions.errorCode = UNAUTHORIZED_ERROR —
      // distinct from a missing/invalid token (HTTP 401 → Unauthorized).
      const error = await Effect.runPromise(
        appleProvisioningProfile({}).pipe(
          Effect.flip,
          Effect.provide(RestrictedAuthLayer),
        ) as Effect.Effect<{ readonly _tag: string }, never, never>,
      );

      expect(error._tag).toBe("EasUnauthorizedOperation");
    },
    { timeout: 30_000 },
  );
});
