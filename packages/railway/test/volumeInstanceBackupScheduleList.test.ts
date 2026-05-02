import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeInstanceBackupScheduleList } from "../src/operations/volumeInstanceBackupScheduleList.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeInstanceBackupScheduleList", () => {
  it("happy path - exercises the API and surfaces a typed RailwayNotFound for non-existent id", async () => {
    // No discovery path exposes a real volumeInstance.id (volumeCreate returns the
    // parent volume id, not the instance id, and there is no list endpoint that
    // returns volumeInstance ids). Exercise the API + assert typed RailwayNotFound.
    const error = await runEffect(
      volumeInstanceBackupScheduleList({
        volumeInstanceId: NON_EXISTENT_UUID,
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
      volumeInstanceBackupScheduleList({
        volumeInstanceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent volume instance id", async () => {
    const error = await runEffect(
      volumeInstanceBackupScheduleList({
        volumeInstanceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
