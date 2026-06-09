import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { listStemmingDictionaries } from "../src/operations/listStemmingDictionaries";
import { runEffect, testRunId } from "./setup";

describe("listStemmingDictionaries", () => {
  it(
    "returns the list of available stemming dictionaries",
    async () => {
      const result = await runEffect(listStemmingDictionaries({}));

      // `dictionaries` is optional in the output schema; if present it
      // must be an array of strings.
      if (result.dictionaries !== undefined) {
        expect(Array.isArray(result.dictionaries)).toBe(true);
        for (const id of result.dictionaries) {
          expect(typeof id).toBe("string");
        }
      } else {
        expect(typeof result).toBe("object");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      // Override the shared Credentials layer with an API key that the
      // Typesense server will reject. Typesense returns 401 with a JSON
      // body { message: string }, which the SDK's matchError maps to the
      // typed Unauthorized error class.
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      if (!apiBaseUrl) {
        throw new Error("TYPESENSE_API_URL must be set to run typesense tests");
      }
      const BadCredentials = Layer.succeed(
        Credentials,
        Effect.succeed({
          apiKey: Redacted.make(`invalid-key-${testRunId}`),
          apiBaseUrl,
        }),
      );

      const error = await Effect.runPromise(
        listStemmingDictionaries({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
