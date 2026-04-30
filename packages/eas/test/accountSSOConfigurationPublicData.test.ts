import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { accountSSOConfigurationPublicData } from "../src/operations/accountSSOConfigurationPublicData.ts";
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

describe("accountSSOConfigurationPublicData", () => {
  it(
    "happy path - executes the accountSSOConfigurationPublicData query and returns a result",
    async () => {
      const result = await runEffect(accountSSOConfigurationPublicData({}));
      expect(result).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "error - Unauthorized when called with an invalid bearer token",
    async () => {
      const error = await Effect.runPromise(
        accountSSOConfigurationPublicData({}).pipe(
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
      // The accountSSOConfigurationPublicData query wrapper has no input
      // variables, so the only server-side rejection path is GraphQL document
      // validation. The EAS backend emits extensions.errorCode =
      // VALIDATION_ERROR for any server-side schema/argument validation
      // failure on this operation.
      const error = await runEffect(
        accountSSOConfigurationPublicData({}).pipe(Effect.flip),
      );

      expect(error._tag).toBe("EasValidationError");
    },
    { timeout: 30_000 },
  );
});
