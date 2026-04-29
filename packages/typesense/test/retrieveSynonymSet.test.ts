import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { retrieveSynonymSet } from "../src/operations/retrieveSynonymSet";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { runEffect, testRunId } from "./setup";

describe("retrieveSynonymSet", () => {
  it(
    "retrieves a synonym set by name",
    async () => {
      const synonymSetName = `distilled-typesense-retsyn-${testRunId}`;
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

        const result = yield* retrieveSynonymSet({ synonymSetName });
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
    "fails with NotFound when the synonym set does not exist",
    async () => {
      const error = await runEffect(
        retrieveSynonymSet({
          synonymSetName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
