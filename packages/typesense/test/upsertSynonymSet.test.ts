import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { runEffect, testRunId } from "./setup";

describe("upsertSynonymSet", () => {
  it(
    "creates a synonym set with one item",
    async () => {
      const synonymSetName = `distilled-typesense-upssyn-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        const result = yield* upsertSynonymSet({
          synonymSetName,
          items: [
            {
              id: itemId,
              synonyms: ["sneaker", "shoe", "trainer"],
            },
          ],
        });

        expect(result.name).toBe(synonymSetName);
        expect(Array.isArray(result.items)).toBe(true);
        expect(result.items.length).toBe(1);
        expect(result.items[0]?.id).toBe(itemId);
        expect(result.items[0]?.synonyms).toContain("sneaker");
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
    "fails with BadRequest when an item's synonyms array is empty",
    async () => {
      const synonymSetName = `distilled-typesense-upssyn-bad-${testRunId}`;
      const itemId = `item-${testRunId}`;

      // Typesense requires each synonym item to contain at least one
      // synonym; an empty `synonyms` array triggers a 400 with a
      // validation message.
      const effect = upsertSynonymSet({
        synonymSetName,
        items: [
          {
            id: itemId,
            synonyms: [],
          },
        ],
      })
        .pipe(Effect.flip)
        .pipe(
          Effect.ensuring(
            deleteSynonymSet({ synonymSetName }).pipe(Effect.ignore),
          ),
        );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
