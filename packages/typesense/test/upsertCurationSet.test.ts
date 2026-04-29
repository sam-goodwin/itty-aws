import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { runEffect, testRunId } from "./setup";

describe("upsertCurationSet", () => {
  it(
    "creates a curation set with one rule item",
    async () => {
      const curationSetName = `distilled-typesense-upscuration-${testRunId}`;

      const effect = Effect.gen(function* () {
        const result = yield* upsertCurationSet({
          curationSetName,
          items: [
            {
              rule: { query: "shoe", match: "exact" },
              includes: [{ id: "doc-1", position: 1 }],
            },
          ],
          description: "test curation set",
        });

        expect(result.name).toBe(curationSetName);
        expect(Array.isArray(result.items)).toBe(true);
        expect(result.items.length).toBe(1);
        expect(result.items[0]?.rule.query).toBe("shoe");
        expect(result.items[0]?.rule.match).toBe("exact");
      }).pipe(
        Effect.ensuring(
          deleteCurationSet({ curationSetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when an item's rule has no condition",
    async () => {
      const curationSetName = `distilled-typesense-upscuration-bad-${testRunId}`;

      // A curation rule must have at least one condition (query+match,
      // tags, or filter_by). An empty rule body triggers a 400 from
      // Typesense.
      const effect = upsertCurationSet({
        curationSetName,
        items: [
          {
            rule: {},
            includes: [{ id: "doc-1", position: 1 }],
          },
        ],
      })
        .pipe(Effect.flip)
        .pipe(
          Effect.ensuring(
            deleteCurationSet({ curationSetName }).pipe(Effect.ignore),
          ),
        );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
