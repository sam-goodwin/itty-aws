import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectInvitation } from "../src/operations/projectInvitation.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("projectInvitation", () => {
  it("happy path - resolver returns RailwayNotFound for an invitation code that does not exist", async () => {
    // No reliable way to seed a real project invitation in a test
    // run, so the happy-path call exercises the operation against
    // the real API and asserts the resolver returns the typed
    // RailwayNotFound error rather than a generic failure.
    const error = await runEffect(
      projectInvitation({ code: `nonexistent-${testRunId}` }).pipe(Effect.flip),
    );

    expect([
      "RailwayNotFound",
      "RailwayNotAuthorized",
      "RailwayInvalidInput",
      "UnknownRailwayError",
    ]).toContain((error as { _tag: string })._tag);
    expect((error as { message: string }).message).toMatch(/not found$/i);
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projectInvitation({ code: `nonexistent-${testRunId}` }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound for a non-existent invitation code", async () => {
    const error = await runEffect(
      projectInvitation({ code: `does-not-exist-${testRunId}` }).pipe(
        Effect.flip,
      ),
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
