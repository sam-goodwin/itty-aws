import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { templateSearch } from "../src/operations/templateSearch.ts";
import { runEffect } from "./setup.ts";

describe("templateSearch", () => {
  it("happy path - searches published templates by query", async () => {
    const result = await runEffect(
      templateSearch({ query: "postgres", limit: 10, verified: true }),
    );

    expect(Array.isArray(result)).toBe(true);
    for (const entry of result) {
      expect(typeof entry.id).toBe("string");
      expect(typeof entry.code).toBe("string");
      expect(typeof entry.name).toBe("string");
      expect(typeof entry.deploymentCount).toBe("number");
      expect(entry.deploymentCount).toBeGreaterThanOrEqual(0);
      if (entry.creatorName !== null) {
        expect(typeof entry.creatorName).toBe("string");
      }
      if (entry.description !== null) {
        expect(typeof entry.description).toBe("string");
      }
      if (entry.healthScore !== null) {
        expect(typeof entry.healthScore).toBe("number");
      }
      if (entry.image !== null) {
        expect(typeof entry.image).toBe("string");
      }
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      templateSearch({ query: "postgres", limit: 1 }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
