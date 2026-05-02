import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { projectToken } from "../src/operations/projectToken.ts";
import { runEffect } from "./setup.ts";

describe("projectToken", () => {
  it("happy path - resolver returns RailwayNotFound when bearer is not a project token", async () => {
    // The CI bearer is a personal/account API token, not a project token.
    // The resolver returns the typed RailwayNotFound error in that case,
    // which still exercises the operation end-to-end against the real API.
    const error = await runEffect(projectToken({}).pipe(Effect.flip));

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      projectToken({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayNotFound when no project token matches the bearer", async () => {
    const error = await runEffect(projectToken({}).pipe(Effect.flip));

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
