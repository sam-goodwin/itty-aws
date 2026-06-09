import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { deletePreset } from "../src/operations/deletePreset";
import { retrieveAllPresets } from "../src/operations/retrieveAllPresets";
import { upsertPreset } from "../src/operations/upsertPreset";
import { runEffect, testRunId } from "./setup";

describe("retrieveAllPresets", () => {
  it(
    "lists all presets including ones we just created",
    async () => {
      const presetId = `distilled-typesense-allpresets-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertPreset({
          presetId,
          value: {
            searches: [{ collection: "products", q: "shoe", query_by: "name" }],
          },
        });

        const result = yield* retrieveAllPresets({});
        expect(Array.isArray(result.presets)).toBe(true);

        const ours = result.presets.find((p) => p.name === presetId);
        expect(ours).toBeDefined();
      }).pipe(Effect.ensuring(deletePreset({ presetId }).pipe(Effect.ignore)));

      await runEffect(effect);
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
        retrieveAllPresets({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
