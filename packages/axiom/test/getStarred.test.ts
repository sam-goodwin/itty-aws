import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createStarred } from "../src/operations/v2/createStarred";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteStarred } from "../src/operations/v2/deleteStarred";
import { getStarred } from "../src/operations/v2/getStarred";
import { runEffect, testRunId } from "./setup";

describe("getStarred", () => {
  it(
    "returns a starred query by id",
    async () => {
      const datasetName = `distilled-axiom-getstarred-${testRunId}`;
      const queryName = `distilled-axiom-getstarred-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getStarred test fixture",
        });

        const starred = yield* createStarred({
          name: queryName,
          dataset: datasetName,
          kind: "apl",
          metadata: {},
          query: { apl: `['${datasetName}'] | summarize count()` },
          who: "user",
        });
        createdId = starred.id;

        const fetched = yield* getStarred({ id: starred.id });

        expect(fetched.id).toBe(starred.id);
        expect(fetched.name).toBe(queryName);
        expect(fetched.kind).toBe("apl");
        expect(typeof fetched.query.apl).toBe("string");
        expect(typeof fetched.who).toBe("string");
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
    { timeout: 30_000 },
  );

  it(
    "returns NotFound for a starred-query id that does not exist",
    async () => {
      // A syntactically-valid but non-existent starred-query id should
      // produce a 404 → NotFound.
      const error = await runEffect(
        getStarred({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
