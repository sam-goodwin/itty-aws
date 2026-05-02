import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceInstanceDeployV2 } from "../src/operations/serviceInstanceDeployV2.ts";
import { getSharedService, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceDeployV2", () => {
  it("happy path - deploys the shared service and returns a deployment id", async () => {
    const service = await getSharedService();

    const deploymentId = await runEffect(
      serviceInstanceDeployV2({
        environmentId: service.environmentId,
        serviceId: service.id,
      }),
    );
    expect(typeof deploymentId).toBe("string");
    expect(deploymentId).toBeTruthy();
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      serviceInstanceDeployV2({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent serviceId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      serviceInstanceDeployV2({
        environmentId: NON_EXISTENT_UUID,
        serviceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
