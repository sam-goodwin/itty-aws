import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAnnotation } from "../src/operations/v2/createAnnotation";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getAnnotation } from "../src/operations/v2/getAnnotation";
import { runEffect, testRunId } from "./setup";

describe("getAnnotation", () => {
  it(
    "returns an annotation by id",
    async () => {
      const datasetName = `distilled-axiom-getanno-${testRunId}`;
      const annotationType = `distilled-test-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Prerequisite: an annotation must exist to fetch.
        yield* createDataset({
          name: datasetName,
          description: "getAnnotation test fixture",
        });

        const created = yield* createAnnotation({
          datasets: [datasetName],
          type: annotationType,
          title: "getAnnotation happy path",
          description: "created by automated test",
        });

        const fetched = yield* getAnnotation({ id: created.id });

        expect(fetched.id).toBe(created.id);
        expect(fetched.type).toBe(annotationType);
        expect(fetched.datasets).toContain(datasetName);
        expect(typeof fetched.time).toBe("string");
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup. Deleting the dataset removes the annotation
          // attached to it. Ignore failures so a half-setup run still cleans
          // up what it can.
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
      // Axiom annotation IDs are `ann_` + a 26-char Crockford-base32 suffix
      // (digits 0-9 + a-z minus i/l/o/u). Anything else is rejected as a
      // 400 "invalid annotation ID" before the lookup runs, so we must
      // supply a structurally valid non-existent id to reach NotFound.
      const error = await runEffect(
        getAnnotation({ id: "ann_01234567890123456789012345" }).pipe(
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
        getAnnotation({ id: "not-a-valid-annotation-id" }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
