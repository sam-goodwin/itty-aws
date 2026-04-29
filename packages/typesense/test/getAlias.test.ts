import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteAlias } from "../src/operations/deleteAlias";
import { deleteCollection } from "../src/operations/deleteCollection";
import { getAlias } from "../src/operations/getAlias";
import { upsertAlias } from "../src/operations/upsertAlias";
import { runEffect, testRunId } from "./setup";

describe("getAlias", () => {
  it(
    "retrieves an existing alias and returns its name + target collection",
    async () => {
      const collectionName = `distilled-typesense-getalias-col-${testRunId}`;
      const aliasName = `distilled-typesense-getalias-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });
        yield* upsertAlias({
          aliasName,
          collection_name: collectionName,
        });

        const result = yield* getAlias({ aliasName });
        expect(result.name).toBe(aliasName);
        expect(result.collection_name).toBe(collectionName);
      }).pipe(
        Effect.ensuring(
          Effect.all([
            deleteAlias({ aliasName }).pipe(Effect.ignore),
            deleteCollection({ collectionName }).pipe(Effect.ignore),
          ]),
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
        getAlias({
          aliasName: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
