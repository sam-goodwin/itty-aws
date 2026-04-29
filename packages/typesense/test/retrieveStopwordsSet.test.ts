import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteStopwordsSet } from "../src/operations/deleteStopwordsSet";
import { retrieveStopwordsSet } from "../src/operations/retrieveStopwordsSet";
import { upsertStopwordsSet } from "../src/operations/upsertStopwordsSet";
import { runEffect, testRunId } from "./setup";

describe("retrieveStopwordsSet", () => {
  it(
    "retrieves a stopwords set by id",
    async () => {
      const setId = `distilled-typesense-retstop-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertStopwordsSet({
          setId,
          stopwords: ["the", "a", "an"],
          locale: "en",
        });

        const result = yield* retrieveStopwordsSet({ setId });
        expect(result.stopwords.id).toBe(setId);
        expect(Array.isArray(result.stopwords.stopwords)).toBe(true);
        expect(result.stopwords.stopwords).toContain("the");
        expect(result.stopwords.stopwords).toContain("a");
        expect(result.stopwords.locale).toBe("en");
      }).pipe(
        Effect.ensuring(deleteStopwordsSet({ setId }).pipe(Effect.ignore)),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the stopwords set does not exist",
    async () => {
      const error = await runEffect(
        retrieveStopwordsSet({
          setId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
