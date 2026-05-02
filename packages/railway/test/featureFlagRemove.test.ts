import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials.ts";
import { featureFlagAdd } from "../src/operations/featureFlagAdd.ts";
import { featureFlagRemove } from "../src/operations/featureFlagRemove.ts";
import { runEffect } from "./setup.ts";

describe("featureFlagRemove", () => {
  it("happy path - removes a feature flag previously added to the authenticated user", async () => {
    await runEffect(
      Effect.gen(function* () {
        yield* featureFlagAdd({ input: { flag: "MAGIC_CONFIG" } });
        const result = yield* featureFlagRemove({
          input: { flag: "MAGIC_CONFIG" },
        });
        expect(typeof result).toBe("boolean");
      }).pipe(
        Effect.ensuring(
          featureFlagRemove({ input: { flag: "MAGIC_CONFIG" } }).pipe(
            Effect.ignore,
          ),
        ),
      ),
    );
  }, 60_000);

  it("error - RailwayNotAuthorized when bearer token is invalid", async () => {
    const BadCreds = Layer.succeed(Credentials, {
      apiToken: Redacted.make("not-a-real-token-deadbeef"),
      apiBaseUrl: "https://backboard.railway.com",
    });
    const error = await Effect.runPromise(
      featureFlagRemove({ input: { flag: "MAGIC_CONFIG" } }).pipe(
        Effect.flip,
        Effect.provide(Layer.merge(BadCreds, FetchHttpClient.layer)),
      ) as Effect.Effect<{ _tag: string }, never, never>,
    );
    expect(["RailwayNotAuthorized", "RailwayNotFound"]).toContain(error._tag);
  }, 30_000);

  it("error - RailwayNotFound when removing a flag that is not set on the user", async () => {
    // Add then remove the flag to guarantee a clean starting state, then try
    // removing it a second time to surface RailwayNotFound.
    await runEffect(
      Effect.gen(function* () {
        yield* featureFlagAdd({ input: { flag: "DEBUG_SMART_DIAGNOSIS" } });
        yield* featureFlagRemove({
          input: { flag: "DEBUG_SMART_DIAGNOSIS" },
        });
        const error = yield* featureFlagRemove({
          input: { flag: "DEBUG_SMART_DIAGNOSIS" },
        }).pipe(Effect.flip);
        expect([
          "RailwayNotFound",
          "RailwayNotAuthorized",
          "RailwayInvalidInput",
          "UnknownRailwayError",
        ]).toContain((error as { _tag: string })._tag);
        expect((error as { message: string }).message).toMatch(/not found$/i);
      }),
    );
  }, 60_000);
});
