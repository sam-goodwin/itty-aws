import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { userActorPublicData } from "../src/operations/userActorPublicData.ts";
import { runEffect, testRunId } from "./setup.ts";

const BadAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(`invalid-token-${testRunId}`),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("userActorPublicData", () => {
  it("happy path - executes the userActorPublicData query and returns a result", async () => {
    const result = await runEffect(userActorPublicData({}));
    expect(result).toBeDefined();
  }, { timeout: 30_000 });

  it("error - Unauthorized when called with an invalid bearer token", async () => {
    const error = await Effect.runPromise(
      userActorPublicData({}).pipe(
        Effect.flip,
        Effect.provide(BadAuthLayer),
      ) as Effect.Effect<{ readonly _tag: string }, never, never>,
    );
    expect(error._tag).toBe("Unauthorized");
  }, { timeout: 30_000 });

  it("error - EasValidationError when the GraphQL operation is rejected by the server", async () => {
    const error = await runEffect(userActorPublicData({}).pipe(Effect.flip));
    expect(error._tag).toBe("EasValidationError");
  }, { timeout: 30_000 });
});
