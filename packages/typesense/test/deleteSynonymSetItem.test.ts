import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { deleteSynonymSetItem } from "../src/operations/deleteSynonymSetItem";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { runEffect, testRunId } from "./setup";

describe("deleteSynonymSetItem", () => {
  it(
    "deletes an existing synonym set item and returns its id",
    async () => {
      const synonymSetName = `distilled-typesense-delsynitem-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Provision a synonym set that contains the item we'll delete.
        yield* upsertSynonymSet({
          synonymSetName,
          items: [
            {
              id: itemId,
              synonyms: ["sneaker", "running shoe", "trainer"],
            },
          ],
        });

        const result = yield* deleteSynonymSetItem({
          synonymSetName,
          itemId,
        });

        expect(result.id).toBe(itemId);
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
    "fails with NotFound when the synonym set / item does not exist",
    async () => {
      const error = await runEffect(
        deleteSynonymSetItem({
          synonymSetName: `does-not-exist-set-${testRunId}`,
          itemId: `does-not-exist-item-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
