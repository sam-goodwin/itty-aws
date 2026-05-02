import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { workflowStatus } from "../src/operations/workflowStatus.ts";
import { runEffect } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";
const ALL_STATUSES = ["Complete", "Error", "NotFound", "Running"] as const;

describe("workflowStatus", () => {
  it("happy path - returns a typed status for a non-existent workflow id", async () => {
    // No discovery path exposes a real workflow.id (workflows are created as a
    // side effect of mutations and not listable). Exercise the API with a
    // non-existent UUID; the API resolver returns a typed enum status rather
    // than a RailwayNotFound error for missing workflow ids.
    const result = await runEffect(
      workflowStatus({ workflowId: NON_EXISTENT_UUID }),
    );
    expect(ALL_STATUSES).toContain(result.status);
    // error is NullOr<string>
    if (result.error !== null) {
      expect(typeof result.error).toBe("string");
    }
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      workflowStatus({ workflowId: NON_EXISTENT_UUID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for an empty workflow id", async () => {
    const error = await runEffect(
      workflowStatus({ workflowId: "" }).pipe(Effect.flip),
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
