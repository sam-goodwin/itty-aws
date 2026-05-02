import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { apiTokens } from "../src/operations/apiTokens.ts";
import { runEffect } from "./setup.ts";

describe("apiTokens", () => {
  it("happy path - returns paginated list of api tokens for the authenticated user", async () => {
    const result = await runEffect(apiTokens({ first: 10 }));

    expect(Array.isArray(result.edges)).toBe(true);
    expect(typeof result.pageInfo.hasNextPage).toBe("boolean");
    expect(typeof result.pageInfo.hasPreviousPage).toBe("boolean");
    for (const edge of result.edges) {
      expect(typeof edge.cursor).toBe("string");
      expect(typeof edge.node.id).toBe("string");
      expect(typeof edge.node.name).toBe("string");
      expect(typeof edge.node.displayToken).toBe("string");
    }
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      apiTokens({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
