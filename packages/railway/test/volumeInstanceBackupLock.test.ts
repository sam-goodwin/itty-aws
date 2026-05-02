import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { volumeInstanceBackupLock } from "../src/operations/volumeInstanceBackupLock.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("volumeInstanceBackupLock", () => {
  it(
    "happy path - exercises volume instance backup lock with fabricated ids (returns RailwayNotFound)",
    async () => {
      const error = await runEffect(
        volumeInstanceBackupLock({
          volumeInstanceId: NON_EXISTENT_UUID,
          volumeInstanceBackupId: NON_EXISTENT_UUID,
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        volumeInstanceBackupLock({
          volumeInstanceId: NON_EXISTENT_UUID,
          volumeInstanceBackupId: NON_EXISTENT_UUID,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound for non-existent volumeInstanceId + volumeInstanceBackupId",
    async () => {
      const error = await runEffect(
        volumeInstanceBackupLock({
          volumeInstanceId: NON_EXISTENT_UUID,
          volumeInstanceBackupId: NON_EXISTENT_UUID,
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
