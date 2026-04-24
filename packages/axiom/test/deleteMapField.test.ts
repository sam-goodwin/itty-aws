import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMapField } from "../src/operations/v2/createMapField";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteMapField } from "../src/operations/v2/deleteMapField";
import { getMapFields } from "../src/operations/v2/getMapFields";
import { runEffect, testRunId } from "./setup";

describe("deleteMapField", () => {
  it(
    "deletes an existing map field and removes it from the listing",
    async () => {
      const datasetName = `distilled-axiom-deletemap-${testRunId}`;
      const mapFieldName = `mapfield_${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteMapField test fixture",
        });

        const created = yield* createMapField({
          dataset_id: datasetName,
          name: mapFieldName,
        });
        expect(created.name).toBe(mapFieldName);

        // Destructive op under test. Output is Void — completing without
        // error is the success signal.
        const result = yield* deleteMapField({
          dataset_id: datasetName,
          map_field_name: mapFieldName,
        });
        expect(result).toBeUndefined();

        // Verify the map field is gone from the listing.
        const remaining = yield* getMapFields({ dataset_id: datasetName });
        expect(remaining).not.toContain(mapFieldName);
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup. Deleting the dataset removes any residual
          // map fields.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a map field name that does not exist on the dataset",
    async () => {
      const datasetName = `distilled-axiom-deletemap-404-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteMapField NotFound fixture",
        });

        const error = yield* deleteMapField({
          dataset_id: datasetName,
          map_field_name: `does_not_exist_${testRunId}`,
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
        deleteMapField({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
          map_field_name: `mapfield_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
