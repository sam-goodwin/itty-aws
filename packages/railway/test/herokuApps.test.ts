import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { herokuApps } from "../src/operations/herokuApps.ts";
import { runEffect } from "./setup.ts";

describe("herokuApps", () => {
  it("happy path - returns the list of Heroku apps for the current user", async () => {
    const result = await runEffect(herokuApps({}));

    expect(Array.isArray(result)).toBe(true);
    for (const app of result) {
      expect(typeof app.id).toBe("string");
      expect(typeof app.name).toBe("string");
    }
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      herokuApps({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
