import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials, DEFAULT_API_BASE_URL } from "../src/credentials.ts";
import { keystoreGenerationUrl } from "../src/operations/keystoreGenerationUrl.ts";
import { runEffect, testRunId } from "./setup.ts";

const BadAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(`invalid-token-${testRunId}`),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

const RestrictedAuthLayer = Layer.merge(
  Layer.succeed(Credentials, {
    accessToken: Redacted.make(`expo_00000000000000000000000000000000${testRunId}`),
    apiBaseUrl: DEFAULT_API_BASE_URL,
  }),
  FetchHttpClient.layer,
);

describe("keystoreGenerationUrl", () => {
  it("happy path - executes the keystoreGenerationUrl mutation and returns a result", async () => {
    const result = await runEffect(keystoreGenerationUrl({}));
    expect(result).toBeDefined();
    expect(typeof result.createKeystoreGenerationUrl.id).toBe("string");
    expect(typeof result.createKeystoreGenerationUrl.url).toBe("string");
  }, { timeout: 30_000 });

  it("error - Unauthorized when called with an invalid bearer token", async () => {
    const error = await Effect.runPromise(
      keystoreGenerationUrl({}).pipe(
        Effect.flip,
        Effect.provide(BadAuthLayer),
      ) as Effect.Effect<{ readonly _tag: string }, never, never>,
    );
    expect(error._tag).toBe("Unauthorized");
  }, { timeout: 30_000 });

  it("error - EasValidationError when the GraphQL operation is rejected by the server", async () => {
    const error = await runEffect(keystoreGenerationUrl({}).pipe(Effect.flip));
    expect(error._tag).toBe("EasValidationError");
  }, { timeout: 30_000 });

  it("error - EasUnauthorizedOperation when the actor lacks permission for the operation", async () => {
    const error = await Effect.runPromise(
      keystoreGenerationUrl({}).pipe(
        Effect.flip,
        Effect.provide(RestrictedAuthLayer),
      ) as Effect.Effect<{ readonly _tag: string }, never, never>,
    );
    expect(error._tag).toBe("EasUnauthorizedOperation");
  }, { timeout: 30_000 });
});
