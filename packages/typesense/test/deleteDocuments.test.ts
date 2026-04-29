import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { deleteDocuments } from "../src/operations/deleteDocuments";
import { indexDocument } from "../src/operations/indexDocument";
import { runEffect, testRunId } from "./setup";

describe("deleteDocuments", () => {
  it(
    "deletes documents matching a filter and returns num_deleted",
    async () => {
      const collectionName = `distilled-typesense-deldocs-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
          ],
        });

        // Seed two documents that will match our filter.
        yield* indexDocument({
          collectionName,
          id: `doc-a-${testRunId}`,
          title: "Alpha",
          year: 2001,
        } as never);
        yield* indexDocument({
          collectionName,
          id: `doc-b-${testRunId}`,
          title: "Beta",
          year: 2002,
        } as never);

        const result = yield* deleteDocuments({
          collectionName,
          filter_by: "year:>2000",
        } as never);

        expect(typeof result.num_deleted).toBe("number");
        expect(result.num_deleted).toBeGreaterThanOrEqual(0);
      }).pipe(
        Effect.ensuring(
          deleteCollection({ collectionName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the collection does not exist",
    async () => {
      const error = await runEffect(
        deleteDocuments({
          collectionName: `does-not-exist-${testRunId}`,
          filter_by: "year:>0",
        } as never).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
