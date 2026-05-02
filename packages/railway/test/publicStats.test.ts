import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { publicStats } from "../src/operations/publicStats.ts";
import { runEffect } from "./setup.ts";

describe("publicStats", () => {
  it("happy path - returns Railway public stats", async () => {
    const stats = await runEffect(publicStats({}));

    expect(stats).toBeDefined();
    expect(typeof stats.totalDeploymentsLastMonth).toBe("number");
    expect(typeof stats.totalLogsLastMonth).toBe("string");
    expect(typeof stats.totalProjects).toBe("number");
    expect(typeof stats.totalRequestsLastMonth).toBe("string");
    expect(typeof stats.totalServices).toBe("number");
    expect(typeof stats.totalUsers).toBe("number");

    expect(stats.totalDeploymentsLastMonth).toBeGreaterThanOrEqual(0);
    expect(stats.totalProjects).toBeGreaterThanOrEqual(0);
    expect(stats.totalServices).toBeGreaterThanOrEqual(0);
    expect(stats.totalUsers).toBeGreaterThanOrEqual(0);
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      publicStats({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
