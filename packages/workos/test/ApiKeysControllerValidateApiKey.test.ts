import { Effect, Redacted } from "effect";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { ApiKeysControllerValidateApiKey } from "../src/operations/ApiKeysControllerValidateApiKey.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("ApiKeysControllerValidateApiKey", () => {
  it(
    "validates the current API key and returns the api_key object",
    async () => {
      const result = await runEffect(
        Effect.gen(function* () {
          const creds = yield* Credentials;
          const apiKey = Redacted.value(creds.apiKey);
          return yield* ApiKeysControllerValidateApiKey({ value: apiKey });
        }),
      );

      expect(result).toBeDefined();
      expect(result.api_key).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when validating an invalid api key value",
    async () => {
      const error = await runEffect(
        ApiKeysControllerValidateApiKey({
          value: `sk_test_invalid_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
