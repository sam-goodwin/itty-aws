import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteStopwordsSet } from "../src/operations/deleteStopwordsSet";
import { upsertStopwordsSet } from "../src/operations/upsertStopwordsSet";
import { runEffect, testRunId } from "./setup";

describe("deleteStopwordsSet", () => {
  it(
    "deletes an existing stopwords set and returns its id",
    async () => {
      const setId = `distilled-typesense-delstop-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertStopwordsSet({
          setId,
          stopwords: ["a", "an", "the"],
          locale: "en",
        });

        const result = yield* deleteStopwordsSet({ setId });
        expect(result.id).toBe(setId);
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the stopwords set does not exist",
    async () => {
      const error = await runEffect(
        deleteStopwordsSet({
          setId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
