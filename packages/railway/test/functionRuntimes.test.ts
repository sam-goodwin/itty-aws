import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { functionRuntimes } from "../src/operations/functionRuntimes.ts";
import { runEffect } from "./setup.ts";

describe("functionRuntimes", () => {
  it(
    "happy path - returns the list of available function runtimes",
    async () => {
      const result = await runEffect(functionRuntimes({}));

      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);
      for (const r of result) {
        expect(r.name).toBe("bun");
        expect(typeof r.image).toBe("string");
        expect(typeof r.latestVersion.image).toBe("string");
        expect(typeof r.latestVersion.tag).toBe("string");
        expect(Array.isArray(r.versions)).toBe(true);
        for (const v of r.versions) {
          expect(typeof v.image).toBe("string");
          expect(typeof v.tag).toBe("string");
        }
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
        functionRuntimes({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
