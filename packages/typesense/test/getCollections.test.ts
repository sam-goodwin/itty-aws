import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getCollections } from "../src/operations/getCollections";
import { runEffect, testRunId } from "./setup";

describe("getCollections", () => {
  it(
    "lists all collections including ones we just created",
    async () => {
      const collectionName = `distilled-typesense-getcols-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        const result = yield* getCollections({});
        expect(Array.isArray(result)).toBe(true);

        const ours = result.find((c) => c.name === collectionName);
        expect(ours).toBeDefined();
        expect(ours?.fields.map((f) => f.name)).toEqual(["title"]);
      }).pipe(
        Effect.ensuring(
          deleteCollection({ collectionName }).pipe(Effect.ignore),
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
        getCollections({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
