import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceInstanceAutoDeployUpdate } from "../src/operations/serviceInstanceAutoDeployUpdate.ts";
import { getSharedService, runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("serviceInstanceAutoDeployUpdate", () => {
  it("happy path - toggles auto-deploy on the shared service", async () => {
    const service = await getSharedService();

    const result = await runEffect(
      serviceInstanceAutoDeployUpdate({
        input: {
          enabled: true,
          environmentId: service.environmentId,
          projectId: service.projectId,
          serviceId: service.id,
        },
      }),
    );
    expect(result.enabled).toBe(true);
  }, 120_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      serviceInstanceAutoDeployUpdate({
        input: {
          enabled: true,
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent serviceId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      serviceInstanceAutoDeployUpdate({
        input: {
          enabled: true,
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty serviceId", async () => {
    const error = await runEffect(
      serviceInstanceAutoDeployUpdate({
        input: {
          enabled: true,
          environmentId: NON_EXISTENT_UUID,
          projectId: NON_EXISTENT_UUID,
          serviceId: "",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
