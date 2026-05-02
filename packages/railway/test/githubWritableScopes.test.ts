import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { githubWritableScopes } from "../src/operations/githubWritableScopes.ts";
import { runEffect } from "./setup.ts";

describe("githubWritableScopes", () => {
  it("happy path - returns the list of writable GitHub scopes for the user", async () => {
    const result = await runEffect(githubWritableScopes({}));

    expect(Array.isArray(result)).toBe(true);
    for (const s of result) {
      expect(typeof s).toBe("string");
    }
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      githubWritableScopes({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
