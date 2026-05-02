import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { functionRuntime } from "../src/operations/functionRuntime.ts";
import { runEffect } from "./setup.ts";

describe("functionRuntime", () => {
  it("happy path - returns runtime info for the bun runtime", async () => {
    const result = await runEffect(functionRuntime({ name: "bun" }));

    expect(result.name).toBe("bun");
    expect(typeof result.image).toBe("string");
    expect(typeof result.latestVersion.image).toBe("string");
    expect(typeof result.latestVersion.tag).toBe("string");
    expect(Array.isArray(result.versions)).toBe(true);
    for (const v of result.versions) {
      expect(typeof v.image).toBe("string");
      expect(typeof v.tag).toBe("string");
    }
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      functionRuntime({ name: "bun" }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - non-existent runtime name surfaces RailwayNotAuthorized", async () => {
    const error = await runEffect(
      functionRuntime({
        name: "does-not-exist" as "bun",
      }).pipe(Effect.flip),
    );

    expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
  }, 30_000);
});
