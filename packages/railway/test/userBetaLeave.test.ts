import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { userBetaLeave } from "../src/operations/userBetaLeave.ts";
import { runEffect } from "./setup.ts";

describe("userBetaLeave", () => {
  it("happy path - unsubscribes the authenticated user from the Beta program", async () => {
    await runEffect(
      Effect.gen(function* () {
        const result = yield* userBetaLeave({});
        expect(typeof result).toBe("boolean");
      }),
    );
  }, 30_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      userBetaLeave({}).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);
});
