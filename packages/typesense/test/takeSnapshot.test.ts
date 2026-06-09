import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { takeSnapshot } from "../src/operations/takeSnapshot";
import { runEffect, testRunId } from "./setup";

describe("takeSnapshot", () => {
  it(
    "creates a point-in-time snapshot at the given path",
    async () => {
      // Snapshots are written to a directory on the Typesense server. The
      // test container's filesystem must be writable at this path; /tmp is
      // the standard convention for Typesense Docker images.
      const result = await runEffect(
        takeSnapshot({
          snapshot_path: `/tmp/typesense-snapshot-${testRunId}`,
        }),
      );

      expect(result.success).toBe(true);
    },
    { timeout: 60_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      if (!apiBaseUrl) {
        throw new Error("TYPESENSE_API_URL must be set to run typesense tests");
      }
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-key-${testRunId}`),
          apiBaseUrl,
        }),
      );

      const error = await Effect.runPromise(
        takeSnapshot({
          snapshot_path: `/tmp/typesense-snapshot-noauth-${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
