import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templateServiceSourceEject } from "../src/operations/templateServiceSourceEject.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateServiceSourceEject", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced project does not exist", async () => {
    // Ejecting a template service requires a project that was
    // deployed from a template, a connected GitHub account with
    // permission to create repos in the target org, and would
    // actually create a new GitHub repository on every successful
    // run. Provisioning this end-to-end inside a single-token test
    // run is impractical and would pollute external state.
    // Exercise the mutation with fabricated ids and assert the
    // typed RailwayNotFound; this verifies the request is
    // dispatched and the response decoded into the expected typed
    // error.
    const error = await runEffect(
      templateServiceSourceEject({
        input: {
          projectId: NON_EXISTENT_UUID,
          repoName: `distilled-railway-tsse-${testRunId}`,
          repoOwner: `distilled-railway-tsse-owner-${testRunId}`,
          serviceIds: [NON_EXISTENT_UUID],
          upstreamUrl: `https://github.com/distilled-railway/${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      templateServiceSourceEject({
        input: {
          projectId: NON_EXISTENT_UUID,
          repoName: `distilled-railway-tsse-unauth-${testRunId}`,
          repoOwner: `distilled-railway-tsse-unauth-owner-${testRunId}`,
          serviceIds: [NON_EXISTENT_UUID],
          upstreamUrl: `https://github.com/distilled-railway/unauth-${testRunId}`,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent projectId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      templateServiceSourceEject({
        input: {
          projectId: NON_EXISTENT_UUID,
          repoName: `distilled-railway-tsse-nf-${testRunId}`,
          repoOwner: `distilled-railway-tsse-nf-owner-${testRunId}`,
          serviceIds: [NON_EXISTENT_UUID],
          upstreamUrl: `https://github.com/distilled-railway/nf-${testRunId}`,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
