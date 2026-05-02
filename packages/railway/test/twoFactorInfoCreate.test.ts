import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { twoFactorInfoCreate } from "../src/operations/twoFactorInfoCreate.ts";
import { runEffect } from "./setup.ts";

describe("twoFactorInfoCreate", () => {
  it("happy path - exercises 2FA setup with a fabricated TOTP code (returns RailwayInvalidInput because no matching authenticator secret is enrolled)", async () => {
    const error = await runEffect(
      twoFactorInfoCreate({ input: { token: "123456" } }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      twoFactorInfoCreate({ input: { token: "123456" } }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty TOTP token", async () => {
    const error = await runEffect(
      twoFactorInfoCreate({ input: { token: "" } }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
