import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createCollection } from "../src/operations/createCollection";
import { deleteAlias } from "../src/operations/deleteAlias";
import { deleteCollection } from "../src/operations/deleteCollection";
import { upsertAlias } from "../src/operations/upsertAlias";
import { runEffect, testRunId } from "./setup";

describe("upsertAlias", () => {
  it(
    "creates an alias pointing at a collection",
    async () => {
      const collectionName = `distilled-typesense-upsalias-col-${testRunId}`;
      const aliasName = `distilled-typesense-upsalias-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createCollection({
          name: collectionName,
          fields: [{ name: "title", type: "string" }],
        });

        const result = yield* upsertAlias({
          aliasName,
          collection_name: collectionName,
        });

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
    "fails with NotFound when the target collection does not exist",
    async () => {
      const aliasName = `distilled-typesense-upsalias-nf-${testRunId}`;

      const error = await runEffect(
        upsertAlias({
          aliasName,
          collection_name: `does-not-exist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when collection_name is empty",
    async () => {
      const aliasName = `distilled-typesense-upsalias-bad-${testRunId}`;

      // Empty collection_name violates the Typesense alias body contract,
      // so the server returns 400 with a validation message.
      const error = await runEffect(
        upsertAlias({
          aliasName,
          collection_name: "",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
