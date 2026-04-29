import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { deleteDocument } from "../src/operations/deleteDocument";
import { indexDocument } from "../src/operations/indexDocument";
import { runEffect, testRunId } from "./setup";

describe("deleteDocument", () => {
  it(
    "deletes an existing document and returns its body",
    async () => {
      const collectionName = `distilled-typesense-deldoc-${testRunId}`;
      const documentId = `doc-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
          ],
        });

        // Index a document with a known id. The Typesense REST endpoint
        // expects the JSON document as the request body — extra keys are
        // preserved when encoded by Schema.Struct.
        yield* indexDocument({
          collectionName,
          id: documentId,
          title: "The Hitchhiker's Guide",
          year: 1979,
        } as never);

        const result = yield* deleteDocument({
          collectionName,
          documentId,
        });

        // Typesense returns the deleted document body, including its id.
        expect((result as { id: string }).id).toBe(documentId);
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
      const collectionName = `distilled-typesense-deldoc-nf-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        return yield* deleteDocument({
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
