import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { featureFlagAdd } from "../src/operations/featureFlagAdd.ts";
import { featureFlagRemove } from "../src/operations/featureFlagRemove.ts";
import { runEffect } from "./setup.ts";

describe("featureFlagAdd", () => {
  it(
    "happy path - adds a feature flag for the authenticated user",
    async () => {
      // Per-user flag; remove via featureFlagRemove in cleanup so we leave
      // the test account in its original state.
      await runEffect(
        Effect.gen(function* () {
          const result = yield* featureFlagAdd({
            input: { flag: "BUCKET_FILE_BROWSER" },
          });
          expect(typeof result).toBe("boolean");
        }).pipe(
          Effect.ensuring(
            featureFlagRemove({
              input: { flag: "BUCKET_FILE_BROWSER" },
            }).pipe(Effect.ignore),
          ),
        ),
      );
    },
    60_000,
  );

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      featureFlagAdd({ input: { flag: "BUCKET_FILE_BROWSER" } }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(error._tag).toBe("RailwayNotAuthorized");
  }, 30_000);

  it("error - RailwayInvalidInput for an unrecognized feature flag value", async () => {
    const error = await runEffect(
      featureFlagAdd({
        // Sending a value outside the GraphQL enum to trigger server-side
        // input validation. Cast to bypass the literal-union compile check.
        input: { flag: "NOT_A_REAL_FLAG" as never },
      }).pipe(Effect.flip),
    );
    expect((error as { _tag: string })._tag).toBe("RailwayInvalidInput");
  }, 30_000);
});
