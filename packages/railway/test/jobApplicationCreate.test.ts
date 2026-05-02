import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { jobApplicationCreate } from "../src/operations/jobApplicationCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("jobApplicationCreate", () => {
  it("fabricated id surfaces RailwayInvalidInput when the referenced job does not exist", async () => {
    // Successfully creating a job application would file a real submission
    // against Railway's HR system, which is not appropriate from automated
    // tests. Exercise the API with a fabricated jobId and assert the typed
    // RailwayInvalidInput instead.
    const error = await runEffect(
      jobApplicationCreate({
        input: {
          email: `distilled-railway-job-${testRunId}@example.com`,
          jobId: `distilled-railway-job-${testRunId}`,
          name: `distilled-railway-job-${testRunId}`,
          why: `distilled-railway-job-${testRunId}`,
        },
        resume: null,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      jobApplicationCreate({
        input: {
          email: `distilled-railway-job-unauth-${testRunId}@example.com`,
          jobId: `distilled-railway-job-unauth-${testRunId}`,
          name: `distilled-railway-job-unauth-${testRunId}`,
          why: `distilled-railway-job-unauth-${testRunId}`,
        },
        resume: null,
      }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an empty jobId", async () => {
    const error = await runEffect(
      jobApplicationCreate({
        input: {
          email: `distilled-railway-job-inv-${testRunId}@example.com`,
          jobId: "",
          name: `distilled-railway-job-inv-${testRunId}`,
          why: `distilled-railway-job-inv-${testRunId}`,
        },
        resume: null,
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
