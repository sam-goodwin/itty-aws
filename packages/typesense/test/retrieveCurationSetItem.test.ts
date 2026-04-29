import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { deleteCurationSet } from "../src/operations/deleteCurationSet";
import { retrieveCurationSetItem } from "../src/operations/retrieveCurationSetItem";
import { upsertCurationSet } from "../src/operations/upsertCurationSet";
import { upsertCurationSetItem } from "../src/operations/upsertCurationSetItem";
import { runEffect, testRunId } from "./setup";

describe("retrieveCurationSetItem", () => {
  it(
    "retrieves a curation set item by id",
    async () => {
      const curationSetName = `distilled-typesense-retcurationitem-${testRunId}`;
      const itemId = `item-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Create parent curation set first.
        yield* upsertCurationSet({
          curationSetName,
          items: [],
          description: "test curation set",
        });

        // Add a curation item to it.
        yield* upsertCurationSetItem({
          curationSetName,
          itemId,
          rule: { query: "shoe", match: "exact" },
          includes: [{ id: "doc-1", position: 1 }],
        });

        const result = yield* retrieveCurationSetItem({
          curationSetName,
          itemId,
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
    "fails with NotFound when the curation set item does not exist",
    async () => {
      const curationSetName = `distilled-typesense-retcurationitem-nf-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Seed a parent set so the 404 is specifically about the missing item.
        yield* upsertCurationSet({
          curationSetName,
          items: [],
        });

        const error = yield* retrieveCurationSetItem({
          curationSetName,
          itemId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("NotFound");
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
