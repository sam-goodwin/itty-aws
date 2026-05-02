import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { preferencesUpdate } from "../src/operations/preferencesUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("preferencesUpdate", () => {
  it(
    "happy path - returns the authenticated user's preferences after a no-op update",
    async () => {
      // Passing an empty input is a valid no-op that exercises the API
      // end-to-end and returns the current preferences without mutating
      // the test account's email-preference state.
      const result = await runEffect(preferencesUpdate({ input: {} }));

      expect(typeof result.id).toBe("string");
      expect(typeof result.buildFailedEmail).toBe("boolean");
      expect(typeof result.changelogEmail).toBe("boolean");
      expect(typeof result.communityEmail).toBe("boolean");
      expect(typeof result.deployCrashedEmail).toBe("boolean");
      expect(typeof result.ephemeralEnvironmentEmail).toBe("boolean");
      expect(typeof result.marketingEmail).toBe("boolean");
      expect(typeof result.subprocessorUpdatesEmail).toBe("boolean");
      expect(typeof result.templateQueueEmail).toBe("boolean");
      expect(typeof result.usageEmail).toBe("boolean");
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
        preferencesUpdate({ input: {} }).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );
      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );

  it(
    "error - RailwayInvalidInput when the confirmation token is invalid",
    async () => {
      // The `token` field is a confirmation token (e.g. for changes
      // requiring re-auth). A fabricated value should trip the typed
      // RailwayInvalidInput path.
      const error = await runEffect(
        preferencesUpdate({
          input: {
            token: `distilled-railway-prefs-inv-${testRunId}`,
          },
        }).pipe(Effect.flip),
      );
      expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
    },
    30_000,
  );
});
