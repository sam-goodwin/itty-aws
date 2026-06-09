import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createKey } from "../src/operations/createKey";
import { deleteKey } from "../src/operations/deleteKey";
import { getKeys } from "../src/operations/getKeys";
import { runEffect, testRunId } from "./setup";

describe("getKeys", () => {
  it(
    "lists all API keys including ones we just created",
    async () => {
      let createdKeyId: number | undefined;
      const description = `distilled-typesense-getkeys-${testRunId}`;

      const effect = Effect.gen(function* () {
        const created = yield* createKey({
          description,
          actions: ["documents:search"],
          collections: ["*"],
        });

        if (created.id === undefined) {
          throw new Error("expected created key to have an id");
        }
        createdKeyId = created.id;

        const result = yield* getKeys({});
        expect(Array.isArray(result.keys)).toBe(true);

        const ours = result.keys.find((k) => k.id === created.id);
        expect(ours).toBeDefined();
        expect(ours?.description).toBe(description);
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdKeyId === undefined
              ? Effect.void
              : deleteKey({ keyId: createdKeyId }).pipe(Effect.ignore),
          ),
        ),
      );

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
        getKeys({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
