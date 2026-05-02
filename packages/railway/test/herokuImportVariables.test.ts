import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { herokuImportVariables } from "../src/operations/herokuImportVariables.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("herokuImportVariables", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced project/service/environment/heroku-app are not accessible", async () => {
    // Importing variables from a Heroku app requires an OAuth-linked
    // Heroku account with access to the named app, plus a real Railway
    // service to write the variables into. None of that is available in
    // the shared test environment; exercise the API with fabricated ids
    // and assert the typed RailwayInvalidInput instead.
    const error = await runEffect(
      herokuImportVariables({
        input: {
          environmentId: NON_EXISTENT_UUID,
          herokuAppId: `distilled-railway-hiv-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      herokuImportVariables({
        input: {
          environmentId: NON_EXISTENT_UUID,
          herokuAppId: `distilled-railway-hiv-unauth-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      herokuImportVariables({
        input: {
          environmentId: NON_EXISTENT_UUID,
          herokuAppId: `distilled-railway-hiv-inv-${testRunId}`,
          projectId: "",
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
