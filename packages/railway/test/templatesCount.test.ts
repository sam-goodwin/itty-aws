import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templatesCount } from "../src/operations/templatesCount.ts";
import { runEffect } from "./setup.ts";

describe("templatesCount", () => {
  it(
    "happy path - returns count of published templates",
    async () => {
      const result = await runEffect(templatesCount({}));

      expect(typeof result).toBe("number");
      expect(result).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(result)).toBe(true);
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });

      const error = await Effect.runPromise(
        templatesCount({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
