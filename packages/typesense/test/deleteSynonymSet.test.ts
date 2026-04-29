import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteSynonymSet } from "../src/operations/deleteSynonymSet";
import { upsertSynonymSet } from "../src/operations/upsertSynonymSet";
import { runEffect, testRunId } from "./setup";

describe("deleteSynonymSet", () => {
  it(
    "deletes an existing synonym set and returns its name",
    async () => {
      const synonymSetName = `distilled-typesense-delsyn-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertSynonymSet({
          synonymSetName,
          items: [
            {
              id: `syn-${testRunId}`,
              synonyms: ["sneaker", "running shoe", "trainer"],
            },
          ],
        });

        const result = yield* deleteSynonymSet({ synonymSetName });
        expect(result.name).toBe(synonymSetName);
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the synonym set does not exist",
    async () => {
      const error = await runEffect(
        deleteSynonymSet({
          synonymSetName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
