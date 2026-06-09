import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createCollection } from "../src/operations/createCollection";
import { deleteAlias } from "../src/operations/deleteAlias";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getAliases } from "../src/operations/getAliases";
import { upsertAlias } from "../src/operations/upsertAlias";
import { runEffect, testRunId } from "./setup";

describe("getAliases", () => {
  it(
    "lists all aliases including ones we just created",
    async () => {
      const collectionName = `distilled-typesense-getaliases-col-${testRunId}`;
      const aliasName = `distilled-typesense-getaliases-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });
        yield* upsertAlias({
          aliasName,
          collection_name: collectionName,
        });

        const result = yield* getAliases({});
        expect(Array.isArray(result.aliases)).toBe(true);

        const ours = result.aliases.find((a) => a.name === aliasName);
        expect(ours).toBeDefined();
        expect(ours?.collection_name).toBe(collectionName);
      }).pipe(
        Effect.ensuring(
          Effect.all([
            deleteAlias({ aliasName }).pipe(Effect.ignore),
            deleteCollection({ collectionName }).pipe(Effect.ignore),
          ]),
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
        getAliases({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
