import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { importStemmingDictionary } from "../src/operations/importStemmingDictionary";
import { runEffect, testRunId } from "./setup";

const apiBaseUrl = process.env.TYPESENSE_API_URL;
const apiKey = process.env.TYPESENSE_API_KEY;

describe("importStemmingDictionary", () => {
  it(
    "imports a stemming dictionary and returns undefined (Schema.Void)",
    async () => {
      const dictionaryId = `distilled-typesense-impstem-${testRunId}`;

      // Output schema is Schema.Void → SDK returns undefined.
      // Extra (unannotated) fields are JSON-serialized as the body, which
      // Typesense parses as a single-line JSONL stream of word/root pairs.
      const result = await runEffect(
        importStemmingDictionary({
          id: dictionaryId,
          word: "people",
          root: "person",
        } as never),
      );
      expect(result).toBeUndefined();

      // Cleanup the imported dictionary out-of-band.
      if (apiBaseUrl && apiKey) {
        await fetch(
          `${apiBaseUrl}/stemming/dictionaries/${encodeURIComponent(dictionaryId)}`,
          {
            method: "DELETE",
            headers: { "X-TYPESENSE-API-KEY": apiKey },
          },
        ).catch(() => {});
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when the request body is malformed / missing word mappings",
    async () => {
      // Sending only `id` with no word/root pairs results in an empty
      // (or malformed) JSONL stream from Typesense's perspective → 400.
      const error = await runEffect(
        importStemmingDictionary({
          id: `distilled-typesense-impstem-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
