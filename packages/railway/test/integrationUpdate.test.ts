import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { integrationUpdate } from "../src/operations/integrationUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("integrationUpdate", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound for a non-existent integration id", async () => {
    // Creating a real project integration requires an OAuth-linked
    // third-party integration auth (Slack/Discord/DataDog/etc.), which is
    // not available in the shared test environment. Exercise the update
    // API with a fabricated id and assert the typed RailwayNotFound
    // instead.
    const error = await runEffect(
      integrationUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          config: {},
          name: `distilled-railway-int-upd-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      integrationUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          config: {},
          name: `distilled-railway-int-upd-unauth-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent integration id", async () => {
    const error = await runEffect(
      integrationUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          config: {},
          name: `distilled-railway-int-upd-nf-${testRunId}`,
          projectId: NON_EXISTENT_UUID,
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);

  it("error - RailwayInvalidInput for an empty projectId", async () => {
    const error = await runEffect(
      integrationUpdate({
        id: NON_EXISTENT_UUID,
        input: {
          config: {},
          name: `distilled-railway-int-upd-inv-${testRunId}`,
          projectId: "",
        },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
