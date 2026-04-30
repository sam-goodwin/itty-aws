import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { account } from "../src/operations/account.ts";
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

describe("account", () => {
  it(
    "happy path - executes the account mutation and returns a result",
    async () => {
      const result = await runEffect(account({}));
      expect(result).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "error - Unauthorized when called with an invalid bearer token",
    async () => {
      const error = await Effect.runPromise(
        account({}).pipe(
          Effect.flip,
          Effect.provide(BadAuthLayer),
        ) as Effect.Effect<{ readonly _tag: string }, never, never>,
      );

      expect(error._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasValidationError for an invalid accountName argument",
    async () => {
      // Account names on Expo must match a slug pattern; invalid characters
      // (whitespace, leading hyphen, etc.) cause the server to reject the
      // GraphQL variable with extensions.errorCode = VALIDATION_ERROR.
      const error = await runEffect(
        account({
          accountName: `invalid name with spaces ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasValidationError");
    },
    { timeout: 30_000 },
  );

  it(
    "error - EasUnauthorizedOperation when targeting an account the caller cannot mutate",
    async () => {
      // `expo` is the canonical Expo-owned account slug. Any access token that
      // is not a member of that org will be rejected with extensions.errorCode
      // = UNAUTHORIZED_ERROR when attempting to invoke an account mutation
      // wrapper against it.
      const error = await runEffect(
        account({ accountName: "expo" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasUnauthorizedOperation");
    },
    { timeout: 30_000 },
  );
});
