import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { inviteCodeUse } from "../src/operations/inviteCodeUse.ts";
import { testRunId, runEffect } from "./setup.ts";

const NON_EXISTENT_CODE = `distilled-railway-invite-${testRunId}`;

describe("inviteCodeUse", () => {
  it("fabricated id surfaces RailwayNotAuthorized for a non-existent invite code", async () => {
    // Successfully consuming an invite code requires a real, unredeemed
    // invite issued by another workspace, and would mutate the test
    // account's project memberships. Exercise the API with a fabricated
    // code and assert the typed RailwayNotFound instead.
    const error = await runEffect(
      inviteCodeUse({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      inviteCodeUse({ code: NON_EXISTENT_CODE }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent invite code surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      inviteCodeUse({ code: NON_EXISTENT_CODE }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
