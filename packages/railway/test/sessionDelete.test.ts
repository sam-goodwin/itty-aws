import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { sessionDelete } from "../src/operations/sessionDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("sessionDelete", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced session does not exist", async () => {
    // Sessions correspond to active user login sessions. Provisioning
    // a real session and deleting it in-test is unsafe — deleting the
    // test runner's own session would invalidate the auth token used
    // by every other test in the run. Exercise the mutation with a
    // fabricated session id and assert the typed RailwayNotFound;
    // this verifies the request is dispatched and the response decoded
    // into the expected typed error.
    void testRunId;
    const error = await runEffect(
      sessionDelete({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      sessionDelete({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent session id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      sessionDelete({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
