import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { allPlatformFeatureFlags } from "../src/operations/allPlatformFeatureFlags.ts";
import { runEffect } from "./setup.ts";

describe("allPlatformFeatureFlags", () => {
  it(
    "happy path - returns array of platform feature flags",
    async () => {
      const result = await runEffect(allPlatformFeatureFlags({}));

      expect(Array.isArray(result)).toBe(true);
      for (const f of result) {
        expect(typeof f.flag).toBe("string");
        expect(typeof f.rolloutPercentage).toBe("number");
        expect(typeof f.status).toBe("boolean");
        expect(["BOOLEAN", "PERCENTAGE"]).toContain(f.type);
      }
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
        allPlatformFeatureFlags({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
