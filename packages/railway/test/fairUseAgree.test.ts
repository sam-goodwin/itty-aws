import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { fairUseAgree } from "../src/operations/fairUseAgree.ts";
import { runEffect } from "./setup.ts";

describe("fairUseAgree", () => {
  it(
    "happy path - records fair-use agreement for the currently authenticated user",
    async () => {
      // Idempotent per-user consent flag — calling with agree: true on the
      // test account is safe and does not affect other test data.
      const result = await runEffect(fairUseAgree({ agree: true }));
      expect(typeof result).toBe("boolean");
    },
    60_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      fairUseAgree({ agree: true }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
