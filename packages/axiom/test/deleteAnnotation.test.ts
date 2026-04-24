import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAnnotation } from "../src/operations/v2/createAnnotation";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteAnnotation } from "../src/operations/v2/deleteAnnotation";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getAnnotation } from "../src/operations/v2/getAnnotation";
import { runEffect, testRunId } from "./setup";

describe("deleteAnnotation", () => {
  it(
    "deletes an existing annotation and makes it unfetchable afterwards",
    async () => {
      const datasetName = `distilled-axiom-deleteanno-${testRunId}`;
      const annotationType = `distilled-test-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Prerequisites.
        yield* createDataset({
          name: datasetName,
          description: "deleteAnnotation test fixture",
        });
        const created = yield* createAnnotation({
          datasets: [datasetName],
          type: annotationType,
          title: "to-be-deleted",
        });
        expect(created.id).toBeDefined();

        // Destructive op under test — must succeed on real data.
        yield* deleteAnnotation({ id: created.id });

        // Verify the annotation is gone: a follow-up GET must surface NotFound.
        const error = yield* getAnnotation({ id: created.id }).pipe(
          Effect.flip,
        );
        expect((error as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup of the dataset; deleting it also removes any
          // residual annotations still bound to it. Ignore failures so a
          // half-setup run still cleans up what it can.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a well-formed id that does not exist",
    async () => {
      // Axiom annotation IDs are `ann_` + a 26-char Crockford-base32 suffix.
      // An id with the wrong suffix is rejected as 400 before the lookup,
      // so we send a structurally valid non-existent id.
      const error = await runEffect(
        deleteAnnotation({ id: "ann_01234567890123456789012345" }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity for a malformed annotation id",
    async () => {
      // Probed live: axiom returns 422 (code 605 "id in path should match
      // '^ann_'") for ids that don't start with `ann_`.
      const error = await runEffect(
        deleteAnnotation({ id: "not-a-valid-annotation-id" }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});

