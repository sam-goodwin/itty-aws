import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getDatasetTagValues } from "../src/operations/v1-edge-query/getDatasetTagValues";
import { runEffect, testRunId } from "./setup";

describe("getDatasetTagValues", () => {
  it(
    "returns an array of tag values for a dataset/tag over a 24h window",
    async () => {
      const datasetName = `distilled-axiom-dstagvals-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getDatasetTagValues test fixture",
        });

        const end = new Date().toISOString();
        const start = new Date(
          Date.now() - 24 * 60 * 60 * 1000,
        ).toISOString();

        const values = yield* getDatasetTagValues({
          dataset: datasetName,
          tag: "host",
          start,
          end,
        });

        expect(Array.isArray(values)).toBe(true);
        for (const v of values) {
          expect(typeof v).toBe("string");
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
        getDatasetTagValues({
          dataset: `doesnotexist-${testRunId}`,
          tag: "host",
          start,
          end,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
