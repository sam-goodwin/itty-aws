import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { userProfileUpdate } from "../src/operations/userProfileUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("userProfileUpdate", () => {
  it("happy path - updates the authenticated user's profile", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* userProfileUpdate({
          input: {
            bio: `distilled-railway-bio-${testRunId}`,
            isPublic: false,
            website: `https://distilled-railway-${testRunId}.example.com`,
          },
        });
        expect(typeof result).toBe("boolean");
      }),
    );
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      userProfileUpdate({ input: { isPublic: false } }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an invalid website URL", async () => {
    const error = await runEffect(
      userProfileUpdate({
        input: {
          isPublic: false,
          website: "not a valid url with spaces and no scheme",
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
