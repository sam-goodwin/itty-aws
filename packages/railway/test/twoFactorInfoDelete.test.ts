import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { twoFactorInfoDelete } from "../src/operations/twoFactorInfoDelete.ts";
import { runEffect } from "./setup.ts";

describe("twoFactorInfoDelete", () => {
  it(
    "happy path - invokes 2FA deletion (returns true if enrolled, RailwayNotFound otherwise)",
    async () => {
      await runEffect(
        twoFactorInfoDelete({}).pipe(
          Effect.matchEffect({
            onSuccess: (result) =>
              Effect.sync(() => {
                expect(result).toBe(true);
              }),
            onFailure: (e) =>
              Effect.sync(() => {
                expect((e as { _tag: string })._tag).toBe("RailwayNotFound");
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
        twoFactorInfoDelete({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayNotFound when the authenticated account has no 2FA enrolled",
    async () => {
      const error = await runEffect(
        twoFactorInfoDelete({}).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayNotFound");
    },
    30_000,
  );
});
