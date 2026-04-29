import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { indexDocument } from "../src/operations/indexDocument";
import { searchCollection } from "../src/operations/searchCollection";
import { runEffect, testRunId } from "./setup";

describe("searchCollection", () => {
  it(
    "searches documents in a collection",
    async () => {
      const collectionName = `distilled-typesense-search-${testRunId}`;

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
          title: "Hello World",
          year: 2024,
        } as never);

        // searchParameters is a single string field on the SDK's input
        // schema, but Typesense expects standard query params (q, query_by,
        // per_page, …). For GET, the SDK puts non-PathParam fields into the
        // query string, so we inject the real params via `as never`.
        const result = yield* searchCollection({
          collectionName,
          searchParameters: "",
          q: "hello",
          query_by: "title",
        } as never);

        expect(typeof result.found).toBe("number");
        expect(result.found).toBeGreaterThanOrEqual(1);
        expect(Array.isArray(result.hits)).toBe(true);
        expect(result.hits?.length ?? 0).toBeGreaterThanOrEqual(1);
        expect(result.hits?.[0]?.document?.title).toBe("Hello World");
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
    "fails with BadRequest when required search parameters are missing",
    async () => {
      const collectionName = `distilled-typesense-search-bad-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        // Searching with `q` but no `query_by` triggers a 400
        // "Parameter `query_by` is required." from Typesense.
        const error = yield* searchCollection({
          collectionName,
          searchParameters: "",
          q: "hello",
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
        searchCollection({
          collectionName: `does-not-exist-${testRunId}`,
          searchParameters: "",
          q: "hello",
          query_by: "title",
        } as never).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
