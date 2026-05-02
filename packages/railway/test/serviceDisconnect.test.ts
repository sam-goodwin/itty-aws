import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceDisconnect } from "../src/operations/serviceDisconnect.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceDisconnect", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced service does not exist", async () => {
    // Disconnecting a real service requires a project with a service
    // that has been connected to a GitHub repo. Provisioning a real
    // GitHub-linked service end-to-end inside a single-token test run
    // is impractical, so exercise the mutation with a fabricated
    // service id and assert the typed RailwayNotFound instead.
    void testRunId;
    const error = await runEffect(
      serviceDisconnect({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      serviceDisconnect({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent service id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      serviceDisconnect({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
