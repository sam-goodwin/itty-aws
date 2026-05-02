import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { preferences } from "../src/operations/preferences.ts";
import { runEffect } from "./setup.ts";

describe("preferences", () => {
  it(
    "happy path - returns email preferences for the authenticated user",
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const result = yield* preferences({});

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
        }),
      );
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
        preferences({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
        ) as Effect.Effect<{ _tag: string }, never, never>,
      );

      expect(error._tag).toBe("RailwayNotAuthorized");
    },
    30_000,
  );
});
