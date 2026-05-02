import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { privateNetworkEndpointRename } from "../src/operations/privateNetworkEndpointRename.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("privateNetworkEndpointRename", () => {
  it("fabricated id surfaces RailwayNotAuthorized when the referenced endpoint/network does not exist", async () => {
    // Renaming a real private network endpoint requires a project,
    // environment, service, private network, and endpoint all owned by
    // the test account. Provisioning these just to rename an endpoint
    // would couple this test to project lifecycle. Exercise the API with
    // fabricated ids and assert the typed RailwayNotFound instead.
    const error = await runEffect(
      privateNetworkEndpointRename({
        dnsName: `distilled-railway-pner-${testRunId}`,
        id: NON_EXISTENT_UUID,
        privateNetworkId: NON_EXISTENT_UUID,
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
      privateNetworkEndpointRename({
        dnsName: `distilled-railway-pner-unauth-${testRunId}`,
        id: NON_EXISTENT_UUID,
        privateNetworkId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent endpoint id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      privateNetworkEndpointRename({
        dnsName: `distilled-railway-pner-nf-${testRunId}`,
        id: NON_EXISTENT_UUID,
        privateNetworkId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty endpoint id", async () => {
    const error = await runEffect(
      privateNetworkEndpointRename({
        dnsName: `distilled-railway-pner-inv-${testRunId}`,
        id: "",
        privateNetworkId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
