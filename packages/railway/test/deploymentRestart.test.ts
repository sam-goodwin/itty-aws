import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { deploymentRestart } from "../src/operations/deploymentRestart.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("deploymentRestart", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayNotFound for a non-existent deployment id",
    async () => {
      // Restarting a real deployment causes downtime on a running production
      // service in the shared test workspace, which is destructive beyond test
      // data. Exercise the API with a fabricated id and assert the typed
      // RailwayNotFound instead.
      const error = await runEffect(
        deploymentRestart({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
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
      deploymentRestart({ id: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound for a non-existent deployment id", async () => {
    const error = await runEffect(
      deploymentRestart({ id: NON_EXISTENT_UUID }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
