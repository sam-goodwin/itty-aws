import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { updateFieldForDataset } from "../src/operations/v2/updateFieldForDataset";
import { runEffect, testRunId } from "./setup";

// The happy-path "updates a field's description" test is removed: dataset
// fields only exist after real events have been ingested, and the SDK
// doesn't currently model the ingest request body (see
// `ingestToDataset.test.ts`), so there's no way to seed a field from the
// typed SDK alone. 422 / UnprocessableEntity can't be probed either
// because schema validation would need to pass through a real field id
// first.

describe("updateFieldForDataset", () => {
  it(
    "returns NotFound for a field name that does not exist on the dataset",
    async () => {
      const datasetName = `distilled-axiom-updatefield-404-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateFieldForDataset NotFound fixture",
        });

        const error = yield* updateFieldForDataset({
          dataset_id: datasetName,
          field_id: `does_not_exist_${testRunId}`,
          name: `does_not_exist_${testRunId}`,
          type: "string",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("NotFound");
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
    "returns NotFound when the dataset itself does not exist",
    async () => {
      const error = await runEffect(
        updateFieldForDataset({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
          field_id: "_time",
          name: "_time",
          type: "datetime",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
