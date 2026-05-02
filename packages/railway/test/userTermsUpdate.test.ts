import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { userTermsUpdate } from "../src/operations/userTermsUpdate.ts";
import { runEffect } from "./setup.ts";

describe("userTermsUpdate", () => {
  it(
    "happy path - records terms agreement for the authenticated user (returns user struct, or RailwayInvalidInput if the credentials cannot record agreement)",
    async () => {
      await runEffect(
        userTermsUpdate({}).pipe(
          Effect.matchEffect({
            onSuccess: (result) =>
              Effect.sync(() => {
                if (result === null) return;
                expect(typeof result.id).toBe("string");
                expect(result.id.length).toBeGreaterThan(0);
                expect(typeof result.email).toBe("string");
              }),
            onFailure: (e) =>
              Effect.sync(() => {
                expect((e as { _tag: string })._tag).toBe(
                  "RailwayInvalidInput",
                );
              }),
          }),
        ),
      );
    },
    30_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        userTermsUpdate({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput when called with credentials that cannot record terms agreement",
    async () => {
      const error = await runEffect(
        userTermsUpdate({}).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
