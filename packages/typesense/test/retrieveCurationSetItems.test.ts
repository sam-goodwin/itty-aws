import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { retrieveCurationSetItems } from "../src/operations/retrieveCurationSetItems";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { upsertCurationSetItem } from "../src/operations/upsertCurationSetItem";
import { runEffect, testRunId } from "./setup";

describe("retrieveCurationSetItems", () => {
  it(
    "lists all items in a curation set",
    async () => {
      const curationSetName = `distilled-typesense-retcurationitems-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertCurationSet({
          curationSetName,
          items: [],
          description: "test curation set",
        });

        yield* upsertCurationSetItem({
          curationSetName,
          itemId,
          rule: { query: "shoe", match: "exact" },
          includes: [{ id: "doc-1", position: 1 }],
        });

        const result = yield* retrieveCurationSetItems({ curationSetName });

        expect(Array.isArray(result)).toBe(true);
        const ours = result.find((i) => i.id === itemId);
        expect(ours).toBeDefined();
        expect(ours?.rule.query).toBe("shoe");
        expect(ours?.rule.match).toBe("exact");
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
        retrieveCurationSetItems({
          curationSetName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
