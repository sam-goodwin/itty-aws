import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { serviceDomainAvailable } from "../src/operations/serviceDomainAvailable.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("serviceDomainAvailable", () => {
  it("happy path - returns availability for a candidate domain", async () => {
    const domain = `distilled-railway-svc-${testRunId}.up.railway.app`;
    const result = await runEffect(serviceDomainAvailable({ domain }));

    expect(result).toBeDefined();
    expect(typeof result.available).toBe("boolean");
    expect(typeof result.message).toBe("string");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      serviceDomainAvailable({
        domain: `distilled-railway-svc-${testRunId}.up.railway.app`,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);
});
