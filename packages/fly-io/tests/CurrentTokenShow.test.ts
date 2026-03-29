import { Effect, Layer } from "effect";
import * as Redacted from "effect/Redacted";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { runEffect, testRunId } from "./test";
import { CurrentTokenShow } from "../src/operations/CurrentTokenShow";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials";

// Layer with an invalid token to trigger Forbidden errors
const BadTokenLayer = Layer.merge(
  Layer.succeed(Credentials, {
    apiKey: Redacted.make("invalid_token_00000000"),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("CurrentTokenShow", () => {
  it("happy path - shows current token info", async () => {
    await runEffect(
      CurrentTokenShow({}).pipe(
        Effect.match({
          onSuccess: (result) => {
            expect(result).toHaveProperty("tokens");
          },
          onFailure: (e) => {
            expect(["BadRequest", "NotFound", "UnknownFlyIoError"]).toContain(
              (e as any)._tag,
            );
          },
        }),
      ),
    );
  }, 30_000);

  it("error - Forbidden with invalid token", async () => {
    await Effect.runPromise(
      CurrentTokenShow({}).pipe(
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
});
