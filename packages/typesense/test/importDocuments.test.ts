import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getDocument } from "../src/operations/getDocument";
import { importDocuments } from "../src/operations/importDocuments";
import { runEffect, testRunId } from "./setup";

describe("importDocuments", () => {
  it(
    "imports a JSON document into an existing collection",
    async () => {
      const collectionName = `distilled-typesense-import-${testRunId}`;
      const documentId = `doc-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
          ],
        });

        // Output schema is Schema.Void → SDK returns undefined.
        // Extra (unannotated) fields are JSON-serialized as the body, which
        // Typesense parses as a single-line JSONL stream.
        const result = yield* importDocuments({
          collectionName,
          id: documentId,
          title: "Hello, world",
          year: 2024,
        } as never);
        expect(result).toBeUndefined();

        // Confirm the document made it in.
        const doc = (yield* getDocument({
          collectionName,
          documentId,
        })) as { id: string; title: string; year: number };
        expect(doc.id).toBe(documentId);
        expect(doc.title).toBe("Hello, world");
        expect(doc.year).toBe(2024);
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
    "fails with BadRequest when the request body is empty / missing documents",
    async () => {
      const collectionName = `distilled-typesense-import-bad-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        // No document fields → empty body → Typesense returns 400.
        return yield* importDocuments({ collectionName }).pipe(Effect.flip);
      }).pipe(
        Effect.ensuring(
          deleteCollection({ collectionName }).pipe(Effect.ignore),
        ),
      );

      const error = await runEffect(effect);
      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when the collection does not exist",
    async () => {
      const error = await runEffect(
        importDocuments({
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
