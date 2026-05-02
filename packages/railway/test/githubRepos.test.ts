import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { githubRepos } from "../src/operations/githubRepos.ts";
import { runEffect } from "./setup.ts";

describe("githubRepos", () => {
  it(
    "happy path - returns the list of GitHub repos accessible to Railway",
    async () => {
      const result = await runEffect(githubRepos({}));

      expect(Array.isArray(result)).toBe(true);
      for (const r of result) {
        expect(typeof r.id).toBe("number");
        expect(typeof r.fullName).toBe("string");
        expect(typeof r.name).toBe("string");
        expect(typeof r.defaultBranch).toBe("string");
        expect(typeof r.installationId).toBe("string");
        expect(typeof r.isPrivate).toBe("boolean");
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
        githubRepos({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
