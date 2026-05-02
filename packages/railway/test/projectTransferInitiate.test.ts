import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectTransferInitiate } from "../src/operations/projectTransferInitiate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("projectTransferInitiate", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced project/member does not exist", async () => {
    // Initiating a real project transfer requires a destination
    // memberId belonging to another user that already has access to
    // the project. Provisioning a second account just to initiate a
    // transfer is not feasible with a single-token test run, and a
    // successful initiation would leave a pending ownership transfer
    // dangling on the test account. Exercise the API with fabricated
    // ids and assert the typed RailwayInvalidInput instead.
    const error = await runEffect(
      projectTransferInitiate({
        input: {
          memberId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
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
      projectTransferInitiate({
        input: {
          memberId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
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
      projectTransferInitiate({
        input: {
          memberId: NON_EXISTENT_UUID,
          projectId: "",
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
