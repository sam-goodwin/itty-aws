import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { changelogBlockImage } from "../src/operations/changelogBlockImage.ts";
import { runEffect } from "./setup.ts";

const PLACEHOLDER_BLOCK_ID = "00000000000000000000000000000000";

describe("changelogBlockImage", () => {
  it("happy path - returns a string image URL for a Notion block id", async () => {
    const result = await runEffect(
      changelogBlockImage({ id: PLACEHOLDER_BLOCK_ID }),
    );

    expect(typeof result).toBe("string");
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });

    const error = await Effect.runPromise(
      changelogBlockImage({ id: PLACEHOLDER_BLOCK_ID }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );

    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
