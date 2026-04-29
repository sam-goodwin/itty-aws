import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getDocument } from "../src/operations/getDocument";
import { indexDocument } from "../src/operations/indexDocument";
import { runEffect, testRunId } from "./setup";

describe("indexDocument", () => {
  it(
    "indexes a new document into an existing collection",
    async () => {
      const collectionName = `distilled-typesense-idxdoc-${testRunId}`;
      const documentId = `doc-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
          ],
        });

        // Extra (unannotated) fields are JSON-serialized as the body, which
        // Typesense treats as the document payload.
        const result = (yield* indexDocument({
          collectionName,
          id: documentId,
          title: "The Hitchhiker's Guide",
          year: 1979,
        } as never)) as { id: string; title: string; year: number };

        expect(result.id).toBe(documentId);
        expect(result.title).toBe("The Hitchhiker's Guide");
        expect(result.year).toBe(1979);

        // Sanity check: the document is retrievable.
        const fetched = (yield* getDocument({
          collectionName,
          documentId,
        })) as { id: string; title: string; year: number };
        expect(fetched.id).toBe(documentId);
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
        indexDocument({
          collectionName: `does-not-exist-${testRunId}`,
          id: `doc-${testRunId}`,
          title: "Hello",
        } as never).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
