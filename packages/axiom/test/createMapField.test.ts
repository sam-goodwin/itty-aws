import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMapField } from "../src/operations/v2/createMapField";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { runEffect, testRunId } from "./setup";

describe("createMapField", () => {
  it(
    "creates a map field on an existing dataset",
    async () => {
      const datasetName = `distilled-axiom-createmap-${testRunId}`;
      const mapFieldName = `mapfield_${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "createMapField test fixture",
        });

        const created = yield* createMapField({
          dataset_id: datasetName,
          name: mapFieldName,
        });

        expect(created.name).toBe(mapFieldName);
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup. Deleting the dataset removes its map fields.
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
        createMapField({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
          name: `mapfield_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: "returns UnprocessableEntity when the name is empty". Probed
  // live: axiom's /datasets/{id}/mapfields endpoint returns 500 ("Internal
  // Server Error") rather than a typed 422 for empty names, so there's no
  // clean UnprocessableEntity path to assert against.
});
