import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { webhookTest } from "../src/operations/webhookTest.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("webhookTest", () => {
  it("happy path - sends a sample payload to a public webhook URL and returns an HTTP status code", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* webhookTest({
          url: "https://httpbin.org/post",
          payload: JSON.stringify({ test: `distilled-${testRunId}` }),
        });
        expect(typeof result).toBe("number");
        expect(result).toBeGreaterThanOrEqual(100);
        expect(result).toBeLessThan(600);
      }),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      webhookTest({
        url: "https://httpbin.org/post",
        payload: JSON.stringify({ test: `distilled-${testRunId}` }),
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for a malformed webhook URL", async () => {
    const error = await runEffect(
      webhookTest({
        url: "not a valid url with spaces and no scheme",
        payload: JSON.stringify({ test: `distilled-${testRunId}` }),
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
