import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { twoFactorInfoValidate } from "../src/operations/twoFactorInfoValidate.ts";
import { runEffect } from "./setup.ts";

describe("twoFactorInfoValidate", () => {
  it("happy path - exercises 2FA validation with a fabricated TOTP code (returns RailwayInvalidInput because no matching authenticator secret is enrolled)", async () => {
    const error = await runEffect(
      twoFactorInfoValidate({ input: { token: "123456" } }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      twoFactorInfoValidate({ input: { token: "123456" } }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty TOTP token", async () => {
    const error = await runEffect(
      twoFactorInfoValidate({ input: { token: "" } }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
