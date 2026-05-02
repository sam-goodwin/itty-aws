import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { egressGatewayAssociationsClear } from "../src/operations/egressGatewayAssociationsClear.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("egressGatewayAssociationsClear", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayNotFound when the referenced service/environment do not exist",
    async () => {
      // Egress gateway associations are a Pro-plan networking feature that
      // require a deployed service in a real environment to attach to, which
      // is not available in the shared test environment. Exercise the API
      // with fabricated ids and assert the typed RailwayNotFound instead.
      const error = await runEffect(
        egressGatewayAssociationsClear({
          input: {
            environmentId: NON_EXISTENT_UUID,
            serviceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    60_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      egressGatewayAssociationsClear({
        input: {
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent service/environment", async () => {
    const error = await runEffect(
      egressGatewayAssociationsClear({
        input: {
          environmentId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
