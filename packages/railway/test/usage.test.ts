import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { usage } from "../src/operations/usage.ts";
import { runEffect } from "./setup.ts";

const ALL_MEASUREMENTS = [
  "BACKUP_USAGE_GB",
  "CPU_LIMIT",
  "CPU_USAGE",
  "CPU_USAGE_2",
  "DISK_USAGE_GB",
  "EPHEMERAL_DISK_USAGE_GB",
  "MEASUREMENT_UNSPECIFIED",
  "MEMORY_LIMIT_GB",
  "MEMORY_USAGE_GB",
  "NETWORK_RX_GB",
  "NETWORK_TX_GB",
  "UNRECOGNIZED",
] as const;

describe("usage", () => {
  it("happy path - returns usage measurements for the authenticated user", async () => {
    const result = await runEffect(
      usage({ measurements: ["CPU_USAGE", "MEMORY_USAGE_GB"] }),
    );

    expect(Array.isArray(result)).toBe(true);
    for (const point of result) {
      expect(typeof point.value).toBe("number");
      expect(ALL_MEASUREMENTS).toContain(point.measurement);
      expect(point.tags).toBeDefined();
      // All tag fields are NullOr<string> — verify shape on populated values.
      for (const value of [
        point.tags.deploymentId,
        point.tags.deploymentInstanceId,
        point.tags.environmentId,
        point.tags.pluginId,
        point.tags.projectId,
        point.tags.region,
        point.tags.serviceId,
        point.tags.volumeId,
        point.tags.volumeInstanceId,
      ]) {
        if (value !== null) {
          expect(typeof value).toBe("string");
        }
      }
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      usage({ measurements: ["CPU_USAGE"] }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
