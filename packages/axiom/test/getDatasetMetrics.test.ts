import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getDatasetMetrics } from "../src/operations/v1-edge-query/getDatasetMetrics";
import { runEffect, testRunId } from "./setup";

describe("getDatasetMetrics", () => {
  it(
    "returns a metrics record for a dataset over a 24h window",
    async () => {
      const datasetName = `distilled-axiom-dsmetrics-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getDatasetMetrics test fixture",
        });

        const end = new Date().toISOString();
        const start = new Date(
          Date.now() - 24 * 60 * 60 * 1000,
        ).toISOString();

        const metrics = yield* getDatasetMetrics({
          dataset: datasetName,
          start,
          end,
        });

        // Output is a Record<string, { temporality, type, unit }>. A fresh
        // dataset has no metrics yet, so the record is typically empty;
        // regardless, entries must match the declared shape.
        expect(typeof metrics).toBe("object");
        expect(metrics).not.toBeNull();

        for (const [key, entry] of Object.entries(metrics)) {
          expect(typeof key).toBe("string");
          expect(typeof entry.temporality).toBe("string");
          expect(typeof entry.type).toBe("string");
          expect(typeof entry.unit).toBe("string");
        }
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
    "returns NotFound for a dataset that does not exist",
    async () => {
      const end = new Date().toISOString();
      const start = new Date(
        Date.now() - 24 * 60 * 60 * 1000,
      ).toISOString();

      const error = await runEffect(
        getDatasetMetrics({
          dataset: `doesnotexist-${testRunId}`,
          start,
          end,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
