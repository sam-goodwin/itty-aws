import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAnnotation } from "../src/operations/v2/createAnnotation";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getAnnotations } from "../src/operations/v2/getAnnotations";
import { runEffect, testRunId } from "./setup";

describe("getAnnotations", () => {
  it(
    "returns an array of annotations",
    async () => {
      const result = await runEffect(getAnnotations({}));

      expect(Array.isArray(result)).toBe(true);
      // Every element must match the schema shape.
      for (const annotation of result) {
        expect(typeof annotation.id).toBe("string");
        expect(typeof annotation.type).toBe("string");
        expect(typeof annotation.time).toBe("string");
        expect(Array.isArray(annotation.datasets)).toBe(true);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "returns annotations filtered by dataset, including a freshly created one",
    async () => {
      const datasetName = `distilled-axiom-getannotations-${testRunId}`;
      const annotationType = `distilled-test-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Create a dataset so we have something to attach an annotation to.
        const dataset = yield* createDataset({
          name: datasetName,
          description: "getAnnotations test fixture",
        });
        expect(dataset.name).toBe(datasetName);

        // Create an annotation on that dataset.
        const annotation = yield* createAnnotation({
          datasets: [datasetName],
          type: annotationType,
          title: "getAnnotations test annotation",
          description: "created by automated test",
        });
        expect(annotation.id).toBeDefined();
        expect(annotation.datasets).toContain(datasetName);

        // List annotations filtered to the new dataset.
        const annotations = yield* getAnnotations({ datasets: datasetName });

        expect(Array.isArray(annotations)).toBe(true);
        const found = annotations.find((a) => a.id === annotation.id);
        expect(found).toBeDefined();
        expect(found!.datasets).toContain(datasetName);
        expect(found!.type).toBe(annotationType);
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup: delete the dataset. Annotations attached to
          // it are removed with it. Ignore failures so a partially-set-up run
          // still tears down what it can.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns BadRequest when given an invalid start date format",
    async () => {
      const error = await runEffect(
        getAnnotations({ start: "not-a-valid-rfc3339-date" }).pipe(Effect.flip),
      );

      // Axiom maps 400 responses to the typed BadRequest error class.
      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "returns BadRequest when given an invalid end date format",
    async () => {
      const error = await runEffect(
        getAnnotations({
          start: "2024-01-01T00:00:00Z",
          end: "also-not-a-date",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );
});
