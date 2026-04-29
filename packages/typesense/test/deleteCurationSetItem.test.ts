import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { deleteCurationSetItem } from "../src/operations/deleteCurationSetItem";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { runEffect, testRunId } from "./setup";

describe("deleteCurationSetItem", () => {
  it(
    "deletes an existing curation set item and returns its id",
    async () => {
      const curationSetName = `distilled-typesense-delcuritem-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Provision a curation set that contains the item we'll delete.
        yield* upsertCurationSet({
          curationSetName,
          items: [
            {
              id: itemId,
              rule: { query: "apple", match: "exact" },
              includes: [{ id: "doc-1", position: 1 }],
            },
          ],
          description: "test curation set",
        });

        // The actual operation under test.
        const result = yield* deleteCurationSetItem({
          curationSetName,
          itemId,
        });

        expect(result.id).toBe(itemId);
      }).pipe(
        // Cleanup the parent curation set regardless of test outcome.
        Effect.ensuring(
          deleteCurationSet({ curationSetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the curation set / item does not exist",
    async () => {
      const error = await runEffect(
        deleteCurationSetItem({
          curationSetName: `does-not-exist-set-${testRunId}`,
          itemId: `does-not-exist-item-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
