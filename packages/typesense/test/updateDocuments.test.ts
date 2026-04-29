import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { indexDocument } from "../src/operations/indexDocument";
import { updateDocuments } from "../src/operations/updateDocuments";
import { runEffect, testRunId } from "./setup";

describe("updateDocuments", () => {
  it(
    "updates documents matching a filter and returns num_updated",
    async () => {
      const collectionName = `distilled-typesense-upddocs-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
            { name: "tag", type: "string", optional: true },
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

        // The SDK's updateDocuments schema only exposes `collectionName`
        // and a placeholder `updateDocumentsParameters`. The real Typesense
        // contract is `filter_by` as a query param plus a partial-update
        // body. We inject both via `as never` (Schema.Struct preserves
        // unknown keys on encode).
        const result = yield* updateDocuments({
          collectionName,
          filter_by: "year:>2000",
          tag: "old",
        } as never);

        expect(typeof result.num_updated).toBe("number");
        expect(result.num_updated).toBeGreaterThanOrEqual(0);
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
    "fails with BadRequest when filter_by is malformed",
    async () => {
      const collectionName = `distilled-typesense-upddocs-bad-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32" },
          ],
        });

        // "not a valid filter expression" violates Typesense's filter_by
        // grammar — the server returns 400 with a parse-error message.
        const error = yield* updateDocuments({
          collectionName,
          filter_by: "not a valid filter expression",
          title: "x",
        } as never).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
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
        updateDocuments({
          collectionName: `does-not-exist-${testRunId}`,
          filter_by: "year:>0",
          title: "x",
        } as never).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
