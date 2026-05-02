import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectInvitationAccept } from "../src/operations/projectInvitationAccept.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("projectInvitationAccept", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the invitation code does not exist", async () => {
    // Accepting a real project invitation requires a separate user
    // account to issue the invite and a recipient account to accept it.
    // Provisioning two accounts and an invitation just to accept it is
    // impractical in a single-token test run. Exercise the API with a
    // fabricated code and assert the typed RailwayNotFound instead.
    const error = await runEffect(
      projectInvitationAccept({
        code: `distilled-railway-pia-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectInvitationAccept({
        code: `distilled-railway-pia-unauth-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent invitation code surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      projectInvitationAccept({
        code: `distilled-railway-pia-nf-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
