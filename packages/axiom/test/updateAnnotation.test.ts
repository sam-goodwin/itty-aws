import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createAnnotation } from "../src/operations/v2/createAnnotation";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { updateAnnotation } from "../src/operations/v2/updateAnnotation";
import { runEffect, testRunId } from "./setup";

describe("updateAnnotation", () => {
  it(
    "updates an existing annotation's title and description",
    async () => {
      const datasetName = `distilled-axiom-updateanno-${testRunId}`;
      const annotationType = `distilled-test-${testRunId}`;

      const effect = Effect.gen(function* () {
        // Prerequisites.
        yield* createDataset({
          name: datasetName,
          description: "updateAnnotation test fixture",
        });
        const created = yield* createAnnotation({
          datasets: [datasetName],
          type: annotationType,
          title: "initial title",
          description: "initial description",
        });
        expect(created.id).toBeDefined();

        // Update fields.
        const updated = yield* updateAnnotation({
          id: created.id,
          title: "updated title",
          description: "updated description",
        });

        expect(updated.id).toBe(created.id);
        expect(updated.title).toBe("updated title");
        expect(updated.description).toBe("updated description");
        expect(updated.type).toBe(annotationType);
        expect(updated.datasets).toContain(datasetName);
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
      // Well-formed `ann_` prefixed id that should never resolve.
      const error = await runEffect(
        updateAnnotation({
          id: `ann_doesnotexist${testRunId}`,
          title: "anything",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns BadRequest for a malformed annotation id",
    async () => {
      // Probes confirmed axiom returns 400 for ids that don't match the
      // `ann_<token>` shape.
      const error = await runEffect(
        updateAnnotation({
          id: "not-a-valid-annotation-id",
          title: "anything",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when updating with invalid required fields",
    async () => {
      const datasetName = `distilled-axiom-updateanno-422-${testRunId}`;
      const annotationType = `distilled-test-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateAnnotation 422 fixture",
        });
        const created = yield* createAnnotation({
          datasets: [datasetName],
          type: annotationType,
          title: "initial",
        });

        // Empty datasets array violates required-field semantics; axiom
        // responds with 422 / code 602.
        const error = yield* updateAnnotation({
          id: created.id,
          datasets: [],
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      }).pipe(
        Effect.ensuring(
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );
});
