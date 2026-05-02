import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { deploymentTriggerCreate } from "../src/operations/deploymentTriggerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

const validInput = {
  branch: `distilled-railway-dtc-${testRunId}`,
  checkSuites: false,
  environmentId: NON_EXISTENT_UUID,
  projectId: NON_EXISTENT_UUID,
  provider: "github",
  repository: `distilled/railway-test-${testRunId}`,
  serviceId: NON_EXISTENT_UUID,
};

describe("deploymentTriggerCreate", () => {
  it("fabricated id surfaces RailwayInvalidInput when the referenced project/service/environment do not exist", async () => {
    // A real trigger requires a github repository attached to a service via
    // an OAuth-linked git provider in the workspace, which is not available
    // in the shared test environment. Exercise the API with fabricated ids
    // and assert the typed RailwayInvalidInput instead.
    const error = await runEffect(
      deploymentTriggerCreate({ input: validInput }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      deploymentTriggerCreate({ input: validInput }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput when input references non-existent project/service/environment", async () => {
    const error = await runEffect(
      deploymentTriggerCreate({ input: validInput }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
