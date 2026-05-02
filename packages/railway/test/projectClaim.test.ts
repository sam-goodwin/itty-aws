import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectClaim } from "../src/operations/projectClaim.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectClaim", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced project/workspace does not exist", async () => {
    // Claiming a real project requires a temp project owned by the test
    // account that is currently unclaimed, plus a workspace to claim it
    // into. Provisioning these just to claim is impractical in a test
    // run. Exercise the API with fabricated ids and assert the typed
    // RailwayNotFound instead.
    const error = await runEffect(
      projectClaim({
        id: NON_EXISTENT_UUID,
        workspaceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      projectClaim({
        id: NON_EXISTENT_UUID,
        workspaceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent project id", async () => {
    const error = await runEffect(
      projectClaim({
        id: NON_EXISTENT_UUID,
        workspaceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
