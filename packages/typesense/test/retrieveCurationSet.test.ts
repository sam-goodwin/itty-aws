import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { retrieveCurationSet } from "../src/operations/retrieveCurationSet";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { runEffect, testRunId } from "./setup";

describe("retrieveCurationSet", () => {
  it(
    "retrieves a curation set by name",
    async () => {
      const curationSetName = `distilled-typesense-retcuration-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertCurationSet({
          curationSetName,
          items: [
            {
              rule: { query: "shoe", match: "exact" },
              includes: [{ id: "doc-1", position: 1 }],
            },
          ],
          description: "test curation set",
        });

        const result = yield* retrieveCurationSet({ curationSetName });

        expect(result.name).toBe(curationSetName);
        expect(Array.isArray(result.items)).toBe(true);
        expect(result.items.length).toBe(1);
        expect(result.items[0]?.rule.query).toBe("shoe");
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
    "fails with NotFound when the curation set does not exist",
    async () => {
      const error = await runEffect(
        retrieveCurationSet({
          curationSetName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
