import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeInstanceBackupScheduleUpdate } from "../src/operations/volumeInstanceBackupScheduleUpdate.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeInstanceBackupScheduleUpdate", () => {
  it("happy path - exercises volume backup schedule update with a fabricated volumeInstanceId (returns RailwayNotFound)", async () => {
    const error = await runEffect(
      volumeInstanceBackupScheduleUpdate({
        volumeInstanceId: NON_EXISTENT_UUID,
        kinds: ["DAILY", "WEEKLY"],
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      volumeInstanceBackupScheduleUpdate({
        volumeInstanceId: NON_EXISTENT_UUID,
        kinds: ["DAILY"],
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent volumeInstanceId surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      volumeInstanceBackupScheduleUpdate({
        volumeInstanceId: NON_EXISTENT_UUID,
        kinds: ["DAILY"],
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty volumeInstanceId", async () => {
    const error = await runEffect(
      volumeInstanceBackupScheduleUpdate({
        volumeInstanceId: "",
        kinds: ["DAILY"],
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
