import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteCollection } from "../src/operations/deleteCollection";
import { runEffect, testRunId } from "./setup";

describe("createCollection", () => {
  it(
    "creates a collection with the given fields and returns its metadata",
    async () => {
      const collectionName = `distilled-typesense-create-${testRunId}`;
      const result = await runEffect(
        createCollection({
          name: collectionName,
          fields: [
            { name: "title", type: "string" },
            { name: "year", type: "int32", facet: true },
          ],
        }).pipe(
          Effect.ensuring(
            deleteCollection({ collectionName }).pipe(Effect.ignore),
          ),
        ),
      );

      expect(result.name).toBe(collectionName);
      expect(result.fields.length).toBe(2);
      expect(result.fields.map((f) => f.name)).toEqual(["title", "year"]);
      expect(result.num_documents).toBe(0);
      expect(typeof result.created_at).toBe("number");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when a field has an invalid type",
    async () => {
      // Typesense returns 400 with a message like
      // `Field \`title\` has an invalid data type \`bogus_type\``.
      const collectionName = `distilled-typesense-badreq-${testRunId}`;
      const error = await runEffect(
        createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "bogus_type" }],
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when a collection with the same name already exists",
    async () => {
      const collectionName = `distilled-typesense-conflict-${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          yield* createCollection({
            name: collectionName,
            fields: [{ name: "title", type: "string" }],
          });
          return yield* createCollection({
            name: collectionName,
            fields: [{ name: "title", type: "string" }],
          }).pipe(Effect.flip);
        }).pipe(
          Effect.ensuring(
            deleteCollection({ collectionName }).pipe(Effect.ignore),
          ),
        ),
      );

      expect((error as { _tag: string })._tag).toBe("Conflict");
    },
    { timeout: 30_000 },
  );
});
