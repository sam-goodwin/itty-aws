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

  it(
    "returns UnprocessableEntity when the name is empty",
    async () => {
      const datasetName = `distilled-axiom-createmap-422-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "createMapField 422 fixture",
        });

        // Axiom responds with 422 / code 602 when the required `name` field
        // is missing or empty in the request body.
        const error = yield* createMapField({
          dataset_id: datasetName,
          name: "",
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
