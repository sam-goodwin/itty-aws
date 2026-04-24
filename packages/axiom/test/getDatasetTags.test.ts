import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getDatasetTags } from "../src/operations/v1-edge-query/getDatasetTags";
import { runEffect, testRunId } from "./setup";

describe("getDatasetTags", () => {
  it(
    "returns an array of tag names for a dataset over a 24h window",
    async () => {
      const datasetName = `distilled-axiom-dstags-all-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getDatasetTags test fixture",
        });

        const end = new Date().toISOString();
        const start = new Date(
          Date.now() - 24 * 60 * 60 * 1000,
        ).toISOString();

        const tags = yield* getDatasetTags({
          dataset: datasetName,
          start,
          end,
        });

        expect(Array.isArray(tags)).toBe(true);
        for (const tag of tags) {
          expect(typeof tag).toBe("string");
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
        getDatasetTags({
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
