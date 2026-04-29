import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { runEffect, testRunId } from "./setup";

describe("deleteCollection", () => {
  it(
    "deletes an existing collection and returns its full schema record",
    async () => {
      const collectionName = `distilled-typesense-delcol-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Provision the collection so deleteCollection has a real target.
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32", facet: true },
          ],
        });

        // The actual operation under test.
        const result = yield* deleteCollection({ collectionName });

        expect(result.name).toBe(collectionName);
        expect(result.fields.length).toBe(2);
        expect(result.fields.map((f) => f.name)).toEqual(["title", "year"]);
        expect(result.num_documents).toBe(0);
        expect(typeof result.created_at).toBe("number");
      }).pipe(
        // Defensive cleanup: if the test fails before the explicit delete,
        // attempt to remove the collection so the test run leaves no
        // residue. If the delete already happened, this is a no-op.
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
        deleteCollection({
          collectionName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
