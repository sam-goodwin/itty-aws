import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getDocument } from "../src/operations/getDocument";
import { indexDocument } from "../src/operations/indexDocument";
import { runEffect, testRunId } from "./setup";

describe("getDocument", () => {
  it(
    "retrieves an existing document by id",
    async () => {
      const collectionName = `distilled-typesense-getdoc-${testRunId}`;
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
          title: "The Hitchhiker's Guide",
          year: 1979,
        } as never);

        const result = yield* getDocument({ collectionName, documentId });
        const doc = result as { id: string; title: string; year: number };

        expect(doc.id).toBe(documentId);
        expect(doc.title).toBe("The Hitchhiker's Guide");
        expect(doc.year).toBe(1979);
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
      const collectionName = `distilled-typesense-getdoc-nf-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        return yield* getDocument({
          collectionName,
          documentId: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip);
      }).pipe(
        Effect.ensuring(
          deleteCollection({ collectionName }).pipe(Effect.ignore),
        ),
      );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
