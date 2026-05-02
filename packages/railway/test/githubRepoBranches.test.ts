import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { githubRepoBranches } from "../src/operations/githubRepoBranches.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("githubRepoBranches", () => {
  it("happy path - returns branches for a public GitHub repo", async () => {
    const result = await runEffect(
      githubRepoBranches({ owner: "railwayapp", repo: "cli" }),
    );

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    for (const b of result) {
      expect(typeof b.name).toBe("string");
    }
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      githubRepoBranches({ owner: "railwayapp", repo: "cli" }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent repo surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      githubRepoBranches({
        owner: "distilled-railway-nonexistent",
        repo: `${testRunId}-no-such-repo`,
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
