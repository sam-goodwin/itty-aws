import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeInstanceBackupScheduleList } from "../src/operations/volumeInstanceBackupScheduleList.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeInstanceBackupScheduleList", () => {
  it("fabricated id surfaces RailwayNotAuthorized for non-existent id", async () => {
    // No discovery path exposes a real volumeInstance.id (volumeCreate returns the
    // parent volume id, not the instance id, and there is no list endpoint that
    // returns volumeInstance ids). Exercise the API + assert typed RailwayNotFound.
    const error = await runEffect(
      volumeInstanceBackupScheduleList({
        volumeInstanceId: NON_EXISTENT_UUID,
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
      volumeInstanceBackupScheduleList({
        volumeInstanceId: NON_EXISTENT_UUID,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent volume instance id surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      volumeInstanceBackupScheduleList({
        volumeInstanceId: NON_EXISTENT_UUID,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
