import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { twoFactorInfo } from "../src/operations/twoFactorInfo.ts";
import { runEffect } from "./setup.ts";

describe("twoFactorInfo", () => {
  it("happy path - returns 2FA info for authenticated user", async () => {
    const result = await runEffect(twoFactorInfo({}));

    expect(result).toBeDefined();
    expect(typeof result.hasRecoveryCodes).toBe("boolean");
    expect(typeof result.isVerified).toBe("boolean");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      twoFactorInfo({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
