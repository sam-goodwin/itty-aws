import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { updateMapFields } from "../src/operations/v2/updateMapFields";
import { runEffect, testRunId } from "./setup";

describe("updateMapFields", () => {
  it(
    "updates map fields on an existing dataset and returns an array of names",
    async () => {
      const datasetName = `distilled-axiom-updatemapfields-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateMapFields test fixture",
        });

        const result = yield* updateMapFields({ dataset_id: datasetName });

        expect(Array.isArray(result)).toBe(true);
        for (const name of result) {
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
        updateMapFields({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
