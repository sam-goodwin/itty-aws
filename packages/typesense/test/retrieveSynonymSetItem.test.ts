import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { retrieveSynonymSetItem } from "../src/operations/retrieveSynonymSetItem";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { upsertSynonymSetItem } from "../src/operations/upsertSynonymSetItem";
import { runEffect, testRunId } from "./setup";

describe("retrieveSynonymSetItem", () => {
  it(
    "retrieves a synonym set item by id",
    async () => {
      const synonymSetName = `distilled-typesense-retsynitem-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Create parent synonym set first.
        yield* upsertSynonymSet({
          synonymSetName,
          items: [],
        });

        // Add a synonym item to it.
        yield* upsertSynonymSetItem({
          synonymSetName,
          itemId,
          synonyms: ["sneaker", "shoe", "trainer"],
        });

        const result = yield* retrieveSynonymSetItem({
          synonymSetName,
          itemId,
        });

        expect(result.id).toBe(itemId);
        expect(Array.isArray(result.synonyms)).toBe(true);
        expect(result.synonyms).toContain("sneaker");
        expect(result.synonyms).toContain("shoe");
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
    "fails with NotFound when the synonym set item does not exist",
    async () => {
      const synonymSetName = `distilled-typesense-retsynitem-nf-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Seed parent set so the 404 is specifically about the missing item.
        yield* upsertSynonymSet({
          synonymSetName,
          items: [],
        });

        const error = yield* retrieveSynonymSetItem({
          synonymSetName,
          itemId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("NotFound");
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
