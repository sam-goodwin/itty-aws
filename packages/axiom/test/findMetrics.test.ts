import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { findMetrics } from "../src/operations/v1-edge-query/findMetrics";
import { runEffect, testRunId } from "./setup";

describe("findMetrics", () => {
  it(
    "searches a dataset for metric names and returns an array",
    async () => {
      const datasetName = `distilled-axiom-findmetrics-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "findMetrics test fixture",
        });

        const end = new Date().toISOString();
        const start = new Date(
          Date.now() - 24 * 60 * 60 * 1000,
        ).toISOString();

        const results = yield* findMetrics({
          dataset: datasetName,
          start,
          end,
          value: "axiom",
        });

        expect(Array.isArray(results)).toBe(true);
        for (const metric of results) {
          expect(typeof metric).toBe("string");
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
        findMetrics({
          dataset: `doesnotexist-${testRunId}`,
          start,
          end,
          value: "axiom",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
