import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { emailChangeConfirm } from "../src/operations/emailChangeConfirm.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("emailChangeConfirm", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput for an invalid confirmation nonce", async () => {
    // Confirming an email change rotates the test account's email address,
    // which would break authentication for the shared test workspace.
    // Furthermore, the nonce is a one-time secret delivered via email and
    // is not listable through the API. Exercise the API with a fabricated
    // nonce and assert the typed RailwayInvalidInput instead.
    const error = await runEffect(
      emailChangeConfirm({
        nonce: `distilled-railway-ecc-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      emailChangeConfirm({
        nonce: `distilled-railway-ecc-unauth-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty nonce", async () => {
    const error = await runEffect(
      emailChangeConfirm({ nonce: "" }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
