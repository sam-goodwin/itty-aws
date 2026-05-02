import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeInstanceBackupCreate } from "../src/operations/volumeInstanceBackupCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeInstanceBackupCreate", () => {
  it("happy path - exercises volume instance backup create with a fabricated volumeInstanceId (returns RailwayInvalidInput)", async () => {
    const error = await runEffect(
      volumeInstanceBackupCreate({
        volumeInstanceId: NON_EXISTENT_UUID,
        name: `distilled-railway-vibc-${testRunId}`,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      volumeInstanceBackupCreate({
        volumeInstanceId: NON_EXISTENT_UUID,
        name: `distilled-railway-vibc-${testRunId}`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayInvalidInput for a non-existent volumeInstanceId", async () => {
    const error = await runEffect(
      volumeInstanceBackupCreate({
        volumeInstanceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
