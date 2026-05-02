import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { workspaceInviteCodeUse } from "../src/operations/workspaceInviteCodeUse.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("workspaceInviteCodeUse", () => {
  it("happy path - exercises invite-code use with a fabricated code (real consumption would alter the test runner's workspace memberships, so a non-existent code is used; returns RailwayNotFound)", async () => {
    const error = await runEffect(
      workspaceInviteCodeUse({
        code: `distilled-railway-wicu-${testRunId}-nonexistent`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workspaceInviteCodeUse({
        code: `distilled-railway-wicu-${testRunId}-nonexistent`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent invite code", async () => {
    const error = await runEffect(
      workspaceInviteCodeUse({
        code: `distilled-railway-wicu-${testRunId}-nonexistent`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
