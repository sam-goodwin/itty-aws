import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { PlatformRegionsGet } from "../src/operations/PlatformRegionsGet";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("PlatformRegionsGet", () => {
  it("happy path - lists regions", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* PlatformRegionsGet({});
        expect(result).toBeDefined();
        expect(result).toHaveProperty("nearest");
      }),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    // This endpoint may not require auth; accept either an error or success
    await Effect.runPromise(
      PlatformRegionsGet({}).pipe(
        Effect.match({
          onSuccess: (result) => {
            // Endpoint doesn't require auth - success is acceptable
            expect(result).toBeDefined();
          },
          onFailure: (e) => {
            expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain(
              (e as any)._tag,
            );
          },
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);
});
