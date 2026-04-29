import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteAlias } from "../src/operations/deleteAlias";
import { deleteCollection } from "../src/operations/deleteCollection";
import { upsertAlias } from "../src/operations/upsertAlias";
import { runEffect, testRunId } from "./setup";

describe("deleteAlias", () => {
  it(
    "deletes an existing alias and returns its name + target collection",
    async () => {
      const collectionName = `distilled-typesense-delalias-col-${testRunId}`;
      const aliasName = `distilled-typesense-delalias-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Provision a target collection and the alias that points at it.
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });
        yield* upsertAlias({
          aliasName,
          collection_name: collectionName,
        });

        // The actual operation under test.
        const result = yield* deleteAlias({ aliasName });

        expect(result.name).toBe(aliasName);
        expect(result.collection_name).toBe(collectionName);
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
    "fails with NotFound when the alias does not exist",
    async () => {
      const error = await runEffect(
        deleteAlias({
          aliasName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
