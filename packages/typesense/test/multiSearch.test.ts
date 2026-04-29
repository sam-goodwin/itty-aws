import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { indexDocument } from "../src/operations/indexDocument";
import { multiSearch } from "../src/operations/multiSearch";
import { runEffect, testRunId } from "./setup";

describe("multiSearch", () => {
  it(
    "executes a federated multi-search and returns one result per search",
    async () => {
      const collectionName = `distilled-typesense-multi-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        yield* indexDocument({
          collectionName,
          id: `doc-${testRunId}`,
          title: "Hello, multi-search world",
        } as never);

        const result = yield* multiSearch({
          multiSearchParameters: "",
          searches: [
            {
              collection: collectionName,
              q: "hello",
              query_by: "title",
            },
          ],
        });

        expect(Array.isArray(result.results)).toBe(true);
        expect(result.results.length).toBe(1);
        const first = result.results[0];
        expect(first.found).toBeGreaterThanOrEqual(1);
        expect(first.hits?.[0]?.document?.title).toBe(
          "Hello, multi-search world",
        );
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
    "fails with BadRequest when the searches array is empty",
    async () => {
      // Typesense returns 400 with { message: "Found no search parameters" }
      // when `searches` is empty.
      const error = await runEffect(
        multiSearch({
          multiSearchParameters: "",
          searches: [],
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
