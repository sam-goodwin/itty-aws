import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { upsertCurationSetItem } from "../src/operations/upsertCurationSetItem";
import { runEffect, testRunId } from "./setup";

describe("upsertCurationSetItem", () => {
  it(
    "creates a curation set item",
    async () => {
      const curationSetName = `distilled-typesense-upscurationitem-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Parent curation set must exist before items can be added.
        yield* upsertCurationSet({
          curationSetName,
          items: [],
          description: "test curation set",
        });

        const result = yield* upsertCurationSetItem({
          curationSetName,
          itemId,
          rule: { query: "shoe", match: "exact" },
          includes: [{ id: "doc-1", position: 1 }],
        });

        expect(result.id).toBe(itemId);
        expect(result.rule.query).toBe("shoe");
        expect(result.rule.match).toBe("exact");
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
    "fails with BadRequest when the item's rule has no condition",
    async () => {
      const curationSetName = `distilled-typesense-upscurationitem-bad-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* upsertCurationSet({
          curationSetName,
          items: [],
        });

        // A curation rule must have at least one condition (query+match,
        // tags, or filter_by). An empty rule body triggers a 400 from
        // Typesense.
        const error = yield* upsertCurationSetItem({
          curationSetName,
          itemId,
          rule: {},
          includes: [{ id: "doc-1", position: 1 }],
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
      }).pipe(
        Effect.ensuring(
          deleteCurationSet({ curationSetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
