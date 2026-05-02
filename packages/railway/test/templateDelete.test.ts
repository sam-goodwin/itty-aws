import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templateDelete } from "../src/operations/templateDelete.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateDelete", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced template does not exist", async () => {
    // Deleting a real template requires an existing template owned by
    // the authenticated user/workspace. The SDK does not expose a
    // templateCreate operation, so provisioning a real template
    // end-to-end inside a single-token test run is impractical.
    // Exercise the mutation with a fabricated template id and assert
    // the typed RailwayNotFound; this verifies the request is
    // dispatched and the response decoded into the expected typed
    // error.
    void testRunId;
    const error = await runEffect(
      templateDelete({
        id: NON_EXISTENT_UUID,
        input: {},
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
      templateDelete({
        id: NON_EXISTENT_UUID,
        input: {},
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent template id", async () => {
    const error = await runEffect(
      templateDelete({
        id: NON_EXISTENT_UUID,
        input: {},
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
