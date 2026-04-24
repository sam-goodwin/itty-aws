import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getMapFields } from "../src/operations/v2/getMapFields";
import { runEffect, testRunId } from "./setup";

describe("getMapFields", () => {
  it(
    "returns an array of map field names for an existing dataset",
    async () => {
      const datasetName = `distilled-axiom-getmapfields-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getMapFields test fixture",
        });

        const mapFields = yield* getMapFields({ dataset_id: datasetName });

        expect(Array.isArray(mapFields)).toBe(true);
        // A brand-new dataset has no map fields configured; every element we
        // do see must be a string per the output schema.
        for (const name of mapFields) {
          expect(typeof name).toBe("string");
        }
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a dataset name that does not exist",
    async () => {
      const error = await runEffect(
        getMapFields({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
