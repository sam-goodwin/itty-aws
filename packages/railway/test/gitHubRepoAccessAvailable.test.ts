import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { gitHubRepoAccessAvailable } from "../src/operations/gitHubRepoAccessAvailable.ts";
import { runEffect } from "./setup.ts";

describe("gitHubRepoAccessAvailable", () => {
  it("happy path - returns access info for a public GitHub repo", async () => {
    const result = await runEffect(
      gitHubRepoAccessAvailable({ fullRepoName: "railwayapp/cli" }),
    );

    expect(typeof result.hasAccess).toBe("boolean");
    expect(typeof result.isPublic).toBe("boolean");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      gitHubRepoAccessAvailable({
        fullRepoName: "railwayapp/cli",
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
