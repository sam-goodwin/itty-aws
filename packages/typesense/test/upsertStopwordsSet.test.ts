import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteStopwordsSet } from "../src/operations/deleteStopwordsSet";
import { upsertStopwordsSet } from "../src/operations/upsertStopwordsSet";
import { runEffect, testRunId } from "./setup";

describe("upsertStopwordsSet", () => {
  it(
    "creates a stopwords set",
    async () => {
      const setId = `distilled-typesense-upsstop-${testRunId}`;

      const effect = Effect.gen(function* () {
        const result = yield* upsertStopwordsSet({
          setId,
          stopwords: ["the", "a", "an"],
          locale: "en",
        });

        expect(result.id).toBe(setId);
        expect(Array.isArray(result.stopwords)).toBe(true);
        expect(result.stopwords).toContain("the");
        expect(result.stopwords).toContain("a");
        expect(result.locale).toBe("en");
      }).pipe(
        Effect.ensuring(deleteStopwordsSet({ setId }).pipe(Effect.ignore)),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when stopwords is empty",
    async () => {
      const setId = `distilled-typesense-upsstop-bad-${testRunId}`;

      // Typesense rejects an empty stopwords array — a stopwords set must
      // contain at least one entry, so the server returns 400 with a
      // validation message.
      const effect = upsertStopwordsSet({
        setId,
        stopwords: [],
      })
        .pipe(Effect.flip)
        .pipe(
          Effect.ensuring(deleteStopwordsSet({ setId }).pipe(Effect.ignore)),
        );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
