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
      // Axiom annotation IDs are prefixed with `ann_`. A syntactically valid
      // but non-existent id should produce a 404 → NotFound.
      const error = await runEffect(
        getAnnotation({ id: `ann_doesnotexist${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns BadRequest for a malformed annotation id",
    async () => {
      // Probes confirmed axiom returns 400 for invalid annotation id formats
      // (ids not matching the `ann_<token>` shape).
      const error = await runEffect(
        getAnnotation({ id: "not-a-valid-annotation-id" }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
