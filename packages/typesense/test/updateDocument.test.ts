import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getDocument } from "../src/operations/getDocument";
import { indexDocument } from "../src/operations/indexDocument";
import { updateDocument } from "../src/operations/updateDocument";
import { runEffect, testRunId } from "./setup";

describe("updateDocument", () => {
  it(
    "partially updates a document by id",
    async () => {
      const collectionName = `distilled-typesense-upddoc-${testRunId}`;
      const documentId = `doc-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
          ],
        });

        yield* indexDocument({
          collectionName,
          id: documentId,
          title: "Original Title",
          year: 2020,
        } as never);

        // Schema.Struct preserves extra keys on encode, so we inject the
        // partial document fields via `as never`. PATCH on /documents/{id}
        // applies a partial update.
        yield* updateDocument({
          collectionName,
          documentId,
          title: "Updated Title",
        } as never);

        const fetched = yield* getDocument({
          collectionName,
          documentId,
        });
        const doc = fetched as { id: string; title: string; year: number };
        expect(doc.id).toBe(documentId);
        expect(doc.title).toBe("Updated Title");
        // Year was not in the patch — should be unchanged.
        expect(doc.year).toBe(2020);
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
    "fails with NotFound when the document does not exist",
    async () => {
      const collectionName = `distilled-typesense-upddoc-nf-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        const error = yield* updateDocument({
          collectionName,
          documentId: `does-not-exist-${testRunId}`,
          title: "Updated Title",
        } as never).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          deleteCollection({ collectionName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
