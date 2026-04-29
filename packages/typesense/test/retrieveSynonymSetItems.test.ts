import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { retrieveSynonymSetItems } from "../src/operations/retrieveSynonymSetItems";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { upsertSynonymSetItem } from "../src/operations/upsertSynonymSetItem";
import { runEffect, testRunId } from "./setup";

describe("retrieveSynonymSetItems", () => {
  it(
    "lists all items in a synonym set",
    async () => {
      const synonymSetName = `distilled-typesense-retsynitems-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertSynonymSet({
          synonymSetName,
          items: [],
        });

        yield* upsertSynonymSetItem({
          synonymSetName,
          itemId,
          synonyms: ["sneaker", "shoe", "trainer"],
        });

        const result = yield* retrieveSynonymSetItems({ synonymSetName });

        expect(Array.isArray(result)).toBe(true);
        const ours = result.find((i) => i.id === itemId);
        expect(ours).toBeDefined();
        expect(ours?.synonyms).toContain("sneaker");
        expect(ours?.synonyms).toContain("shoe");
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
    "fails with NotFound when the synonym set does not exist",
    async () => {
      const error = await runEffect(
        retrieveSynonymSetItems({
          synonymSetName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
