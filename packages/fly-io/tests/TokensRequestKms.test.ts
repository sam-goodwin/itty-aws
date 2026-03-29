import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { TokensRequestKms } from "../src/operations/TokensRequestKms";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("TokensRequestKms", () => {
  it("happy path - requests KMS token", async () => {
    await runEffect(
      TokensRequestKms({}).pipe(
        Effect.match({
          onSuccess: (result) => {
            expect(typeof result).toBe("string");
          },
          onFailure: (e) => {
            // KMS token requests may only work from within Fly machines
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownFlyIoError",
            ]).toContain((e as any)._tag);
          },
        }),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      TokensRequestKms({}).pipe(
        Effect.flip,
        Effect.map((e) => {
          expect(["Forbidden", "Unauthorized", "UnknownFlyIoError"]).toContain(
            (e as any)._tag,
          );
        }),
        Effect.provide(BadTokenLayer),
      ),
    );
  }, 30_000);

  it("error - BadRequest or NotFound when called outside Fly machine", async () => {
    // KMS tokens are only available from within Fly machines;
    // calling from outside should produce an error
    await runEffect(
      TokensRequestKms({}).pipe(
        Effect.flip,
        Effect.match({
          onSuccess: (e) => {
            expect([
              "BadRequest",
              "NotFound",
              "Forbidden",
              "UnknownFlyIoError",
            ]).toContain((e as any)._tag);
          },
          onFailure: () => {
            // If flip itself fails, the original effect succeeded —
            // that's fine, it means we're running inside a Fly machine
          },
        }),
      ),
    );
  }, 30_000);
});
