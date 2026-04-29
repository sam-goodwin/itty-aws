import { Effect, Layer, Redacted } from "effect";
import * as FetchHttpClient from "effect/unstable/http/FetchHttpClient";
import { describe, expect, it } from "vitest";
import { Credentials } from "../src/credentials";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { retrieveSynonymSets } from "../src/operations/retrieveSynonymSets";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { runEffect, testRunId } from "./setup";

describe("retrieveSynonymSets", () => {
  it(
    "lists all synonym sets including ones we just created",
    async () => {
      const synonymSetName = `distilled-typesense-retsynsets-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertSynonymSet({
          synonymSetName,
          items: [
            {
              id: itemId,
              synonyms: ["sneaker", "shoe", "trainer"],
            },
          ],
        });

        const result = yield* retrieveSynonymSets({});
        expect(Array.isArray(result)).toBe(true);

        const ours = result.find((s) => s.name === synonymSetName);
        expect(ours).toBeDefined();
        expect(Array.isArray(ours?.items)).toBe(true);
      }).pipe(
        Effect.ensuring(
          deleteSynonymSet({ synonymSetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "returns Unauthorized when the X-TYPESENSE-API-KEY is invalid",
    async () => {
      const apiBaseUrl = process.env.TYPESENSE_API_URL;
      if (!apiBaseUrl) {
        throw new Error(
          "TYPESENSE_API_URL must be set to run typesense tests",
        );
      }
      const BadCredentials = Layer.succeed(Credentials, {
        apiKey: Redacted.make(`invalid-key-${testRunId}`),
        apiBaseUrl,
      });

      const error = await Effect.runPromise(
        retrieveSynonymSets({}).pipe(
          Effect.flip,
          Effect.provide(Layer.merge(BadCredentials, FetchHttpClient.layer)),
        ) as Effect.Effect<unknown, never, never>,
      );

      expect((error as { _tag: string })._tag).toBe("Unauthorized");
    },
    { timeout: 30_000 },
  );
});
