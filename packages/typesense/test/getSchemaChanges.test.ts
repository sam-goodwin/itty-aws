import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { getSchemaChanges } from "../src/operations/getSchemaChanges";
import { runEffect, testRunId } from "./setup";

describe("getSchemaChanges", () => {
  it(
    "returns the in-progress schema changes as an array",
    async () => {
      const result = await runEffect(getSchemaChanges({}));

      // No schema change is in progress on a fresh test cluster, so the
      // array is typically empty. Either way, the response must be an
      // array of objects with optional collection/validated_docs/altered_docs.
      expect(Array.isArray(result)).toBe(true);
      for (const entry of result) {
        if (entry.collection !== undefined) {
          expect(typeof entry.collection).toBe("string");
        }
        if (entry.validated_docs !== undefined) {
          expect(typeof entry.validated_docs).toBe("number");
        }
        if (entry.altered_docs !== undefined) {
          expect(typeof entry.altered_docs).toBe("number");
        }
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
        getSchemaChanges({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
