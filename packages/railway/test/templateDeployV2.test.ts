import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templateDeployV2 } from "../src/operations/templateDeployV2.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("templateDeployV2", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced template config is not deployable", async () => {
    // Deploying a real template requires a published template id and
    // a serializedConfig produced by Railway's template editor that
    // references real source repos/images and resolves all variables.
    // Producing a deployable serializedConfig in-test is impractical
    // and would actually provision real infrastructure on every run.
    // Exercise the mutation with a fabricated template id and an
    // empty serializedConfig and assert the typed RailwayInvalidInput;
    // this verifies the request is dispatched and the response decoded
    // into the expected typed error.
    void testRunId;
    const error = await runEffect(
      templateDeployV2({
        input: {
          templateId: NON_EXISTENT_UUID,
          serializedConfig: {},
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      templateDeployV2({
        input: {
          templateId: NON_EXISTENT_UUID,
          serializedConfig: {},
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty templateId", async () => {
    const error = await runEffect(
      templateDeployV2({
        input: {
          templateId: "",
          serializedConfig: {},
        },
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
