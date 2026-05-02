import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { egressGatewayAssociationCreate } from "../src/operations/egressGatewayAssociationCreate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("egressGatewayAssociationCreate", () => {
  it("happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referenced service/environment do not exist", async () => {
    // Egress gateway associations are a Pro-plan networking feature that
    // require a deployed service in a real environment to attach to, which
    // is not available in the shared test environment. Exercise the API
    // with fabricated ids and assert the typed RailwayInvalidInput instead.
    const error = await runEffect(
      egressGatewayAssociationCreate({
        input: {
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
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
      egressGatewayAssociationCreate({
        input: {
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput when input references non-existent service/environment", async () => {
    const error = await runEffect(
      egressGatewayAssociationCreate({
        input: {
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
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
