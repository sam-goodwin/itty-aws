import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { upsertSynonymSetItem } from "../src/operations/upsertSynonymSetItem";
import { runEffect, testRunId } from "./setup";

describe("upsertSynonymSetItem", () => {
  it(
    "creates a synonym set item",
    async () => {
      const synonymSetName = `distilled-typesense-upssynitem-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Parent synonym set must exist before items can be added.
        yield* upsertSynonymSet({
          synonymSetName,
          items: [],
        });

        const result = yield* upsertSynonymSetItem({
          synonymSetName,
          itemId,
          synonyms: ["sneaker", "shoe", "trainer"],
        });

        expect(result.id).toBe(itemId);
        expect(Array.isArray(result.synonyms)).toBe(true);
        expect(result.synonyms).toContain("sneaker");
        expect(result.synonyms).toContain("shoe");
        expect(result.synonyms).toContain("trainer");
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
    "fails with BadRequest when the synonyms array is empty",
    async () => {
      const synonymSetName = `distilled-typesense-upssynitem-bad-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertSynonymSet({
          synonymSetName,
          items: [],
        });

        // Typesense requires each synonym item to contain at least one
        // synonym; an empty `synonyms` array triggers a 400 with a
        // validation message.
        const error = yield* upsertSynonymSetItem({
          synonymSetName,
          itemId,
          synonyms: [],
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
      }).pipe(
        Effect.ensuring(
          deleteSynonymSet({ synonymSetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
