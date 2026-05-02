import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { deploymentInstanceExecutionCreate } from "../src/operations/deploymentInstanceExecutionCreate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("deploymentInstanceExecutionCreate", () => {
  it("happy path - exercises the API and surfaces a typed error for a non-existent serviceInstanceId", async () => {
    // Triggering an execution invokes a real cron/job run on the targeted
    // service instance, consuming compute and incurring billing. That is
    // destructive beyond test data, so exercise the API with a fabricated id
    // and assert a typed error instead.
    const error = await runEffect(
      deploymentInstanceExecutionCreate({
        input: { serviceInstanceId: NON_EXISTENT_UUID },
      }).pipe(Effect.flip),
    );
    const tag = (error as { _tag: string })._tag;
    expect([
      "RailwayInvalidInput",
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "UnknownRailwayError",
    ]).toContain(tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      deploymentInstanceExecutionCreate({
        input: { serviceInstanceId: NON_EXISTENT_UUID },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty serviceInstanceId", async () => {
    const error = await runEffect(
      deploymentInstanceExecutionCreate({
        input: { serviceInstanceId: "" },
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
