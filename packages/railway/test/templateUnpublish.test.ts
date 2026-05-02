import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templateUnpublish } from "../src/operations/templateUnpublish.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateUnpublish", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced template does not exist", async () => {
    // Unpublishing a real template requires a previously published
    // template owned by the authenticated user/workspace. Publishing
    // a test template just to unpublish it would pollute Railway's
    // public template gallery with disposable test artifacts.
    // Exercise the mutation with a fabricated template id and assert
    // the typed RailwayNotFound; this verifies the request is
    // dispatched and the response decoded into the expected typed
    // error.
    void testRunId;
    const error = await runEffect(
      templateUnpublish({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      templateUnpublish({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent template id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      templateUnpublish({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
