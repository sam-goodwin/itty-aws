import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { referralInfoUpdate } from "../src/operations/referralInfoUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

const NON_EXISTENT_UUID = "00000000-0000-0000-0000-000000000000";

describe("referralInfoUpdate", () => {
  it(
    "happy path - exercises the API and surfaces a typed RailwayInvalidInput when the referral code/workspace is not valid",
    async () => {
      // Updating the authenticated user's referral info requires a real
      // referral code from another user, plus the test account being
      // eligible (e.g. not already referred). Setting this on the test
      // account would also persist a referrer attribution. Exercise the
      // API with a fabricated referral code and assert the typed
      // RailwayInvalidInput instead.
      const error = await runEffect(
        referralInfoUpdate({
          input: {
            code: `distilled-railway-riu-${testRunId}`,
            workspaceId: NON_EXISTENT_UUID,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    60_000,
  );

  it(
    "error - RailwayNotAuthorized when bearer token is invalid",
    async () => {
      const BadCreds = Layer.succeed(Credentials, {
        apiToken: Redacted.make("not-a-real-token-deadbeef"),
        apiBaseUrl: "https://backboard.railway.com",
      });
      const error = await Effect.runPromise(
        referralInfoUpdate({
          input: {
            code: `distilled-railway-riu-unauth-${testRunId}`,
            workspaceId: NON_EXISTENT_UUID,
          },
        }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput for an empty workspaceId",
    async () => {
      const error = await runEffect(
        referralInfoUpdate({
          input: {
            code: `distilled-railway-riu-inv-${testRunId}`,
            workspaceId: "",
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
