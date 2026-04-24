import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAnnotation } from "../src/operations/v2/createAnnotation";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteAnnotation } from "../src/operations/v2/deleteAnnotation";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { runEffect, testRunId } from "./setup";

describe("createAnnotation", () => {
  it(
    "creates an annotation against a freshly created dataset",
    async () => {
      const datasetName = `distilled-axiom-createannotation-${testRunId}`;
      const annotationType = `distilled-test-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Prerequisite: annotations must reference at least one dataset.
        const dataset = yield* createDataset({
          name: datasetName,
          description: "createAnnotation test fixture",
        });
        expect(dataset.name).toBe(datasetName);

        const annotation = yield* createAnnotation({
          datasets: [datasetName],
          type: annotationType,
          title: "createAnnotation happy path",
          description: "created by automated test",
        });

        expect(typeof annotation.id).toBe("string");
        expect(annotation.id.length).toBeGreaterThan(0);
        expect(annotation.type).toBe(annotationType);
        expect(annotation.datasets).toContain(datasetName);
        expect(typeof annotation.time).toBe("string");

        // Destructive verify: the annotation we just created is addressable.
        yield* deleteAnnotation({ id: annotation.id });
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup. Deleting the dataset removes any residual
          // annotations attached to it. Ignore failures so a half-setup run
          // still tears down what it can.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns BadRequest when the time field is an invalid date format",
    async () => {
      const datasetName = `distilled-axiom-createanno-bad-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "createAnnotation BadRequest fixture",
        });

        // Axiom requires RFC3339 time; a garbage string should produce a 400.
        const error = yield* createAnnotation({
          datasets: [datasetName],
          type: `distilled-test-${testRunId}`,
          time: "not-a-valid-rfc3339-date",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
      }).pipe(
        Effect.ensuring(
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns UnprocessableEntity when required fields are missing",
    async () => {
      // Axiom returns 422 with code:602 for missing required body fields.
      // `datasets` is required; an empty array violates this.
      const error = await runEffect(
        createAnnotation({
          datasets: [],
          type: `distilled-test-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
