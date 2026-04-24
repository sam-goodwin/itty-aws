import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createStarred } from "../src/operations/v2/createStarred";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteStarred } from "../src/operations/v2/deleteStarred";
import { getStarred } from "../src/operations/v2/getStarred";
import { runEffect, testRunId } from "./setup";

describe("deleteStarred", () => {
  it(
    "deletes an existing starred query and subsequent fetches return NotFound",
    async () => {
      const datasetName = `distilled-axiom-delstarred-${testRunId}`;
      const queryName = `distilled-axiom-delstarred-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteStarred test fixture",
        });

        const created = yield* createStarred({
          name: queryName,
          dataset: datasetName,
          kind: "apl",
          metadata: {},
          query: {
            apl: `['${datasetName}'] | summarize count()`,
          },
          who: "user",
        });

        createdId = created.id;

        // Destructive op under test. Output schema is Void — completing
        // without error is the success signal.
        const result = yield* deleteStarred({ id: created.id });
        expect(result).toBeUndefined();

        // Verify removal: a subsequent fetch must now surface NotFound.
        const error = yield* getStarred({ id: created.id }).pipe(Effect.flip);
        expect((error as { _tag: string })._tag).toBe("NotFound");

        // Clear the id so the ensuring cleanup doesn't try to delete twice.
        createdId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteStarred({ id: createdId }).pipe(Effect.ignore);
            }
            yield* deleteDataset({ dataset_id: datasetName }).pipe(
              Effect.ignore,
            );
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a starred-query id that does not exist",
    async () => {
      // A syntactically-valid but non-existent starred-query id should
      // produce a 404 → NotFound.
      const error = await runEffect(
        deleteStarred({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
