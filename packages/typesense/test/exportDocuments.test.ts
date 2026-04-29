import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { exportDocuments } from "../src/operations/exportDocuments";
import { indexDocument } from "../src/operations/indexDocument";
import { runEffect, testRunId } from "./setup";

describe("exportDocuments", () => {
  it(
    "exports documents from an existing collection",
    async () => {
      const collectionName = `distilled-typesense-export-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        yield* indexDocument({
          collectionName,
          id: `doc-${testRunId}`,
          title: "Hello, world",
        } as never);

        // Output schema is Schema.Void — the SDK returns undefined when
        // the response is non-JSON (export returns JSONL text).
        const result = yield* exportDocuments({ collectionName });
        expect(result).toBeUndefined();
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
        exportDocuments({
          collectionName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
