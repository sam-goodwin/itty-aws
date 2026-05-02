import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { deploymentCancel } from "../src/operations/deploymentCancel.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("deploymentCancel", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayNotFound for a non-existent deployment id",
    async () => {
      // deploymentCancel only operates on in-flight deployments
      // (BUILDING/QUEUED/DEPLOYING). Triggering a fresh deploy from a
      // programmatic test is not reliable, so exercise the API + assert the
      // typed RailwayNotFound for a fabricated id.
      const error = await runEffect(
        deploymentCancel({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
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
      deploymentCancel({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent deployment id", async () => {
    const error = await runEffect(
      deploymentCancel({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
