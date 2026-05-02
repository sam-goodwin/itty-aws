import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { githubIsRepoNameAvailable } from "../src/operations/githubIsRepoNameAvailable.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("githubIsRepoNameAvailable", () => {
  it("happy path - returns boolean availability for a candidate repo name", async () => {
    const result = await runEffect(
      githubIsRepoNameAvailable({
        fullRepoName: `distilled-railway-test/${testRunId}-repo`,
      }),
    );

    expect(typeof result).toBe("boolean");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      githubIsRepoNameAvailable({
        fullRepoName: `distilled-railway-test/${testRunId}-repo`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
