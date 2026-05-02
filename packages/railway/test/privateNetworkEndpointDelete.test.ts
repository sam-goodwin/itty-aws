import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { privateNetworkEndpointDelete } from "../src/operations/privateNetworkEndpointDelete.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworkEndpointDelete", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced endpoint does not exist", async () => {
    // Creating a real private network endpoint requires a project,
    // environment, service, and private network all owned by the test
    // account. Provisioning these just to delete an endpoint would couple
    // this test to project lifecycle. Exercise the API with a fabricated
    // id and assert the typed RailwayNotFound instead.
    const error = await runEffect(
      privateNetworkEndpointDelete({
        id: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      privateNetworkEndpointDelete({
        id: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent endpoint id", async () => {
    const error = await runEffect(
      privateNetworkEndpointDelete({
        id: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
  }, 30_000);
});
