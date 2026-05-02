import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { githubRepo } from "../src/operations/githubRepo.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("githubRepo", () => {
  it("happy path - returns repo details for a public GitHub repo", async () => {
    const result = await runEffect(
      githubRepo({ fullRepoName: "railwayapp/cli" }),
    );

    expect(result.fullName).toBe("railwayapp/cli");
    expect(typeof result.id).toBe("number");
    expect(typeof result.name).toBe("string");
    expect(typeof result.defaultBranch).toBe("string");
    expect(typeof result.isPrivate).toBe("boolean");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      githubRepo({ fullRepoName: "railwayapp/cli" }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent repo name", async () => {
    const error = await runEffect(
      githubRepo({
        fullRepoName: `distilled-railway-nonexistent/${testRunId}-no-such-repo`,
      }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);
});
