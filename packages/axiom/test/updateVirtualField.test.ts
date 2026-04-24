import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createVirtualField } from "../src/operations/v2/createVirtualField";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteVirtualField } from "../src/operations/v2/deleteVirtualField";
import { updateVirtualField } from "../src/operations/v2/updateVirtualField";
import { runEffect, testRunId } from "./setup";

describe("updateVirtualField", () => {
  it(
    "updates an existing virtual field's expression and description",
    async () => {
      const datasetName = `distilled-axiom-upvf-${testRunId}`;
      const fieldName = `distilled_axiom_upvf_${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateVirtualField test fixture",
        });

        const created = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "initial",
          expression: "1 + 1",
        });
        createdId = created.id;

        const updated = yield* updateVirtualField({
          id: created.id,
          dataset: datasetName,
          name: fieldName,
          description: "updated",
          expression: "2 + 2",
        });

        expect(updated.id).toBe(created.id);
        expect(updated.dataset).toBe(datasetName);
        expect(updated.name).toBe(fieldName);
        expect(updated.expression).toBe("2 + 2");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteVirtualField({ id: createdId }).pipe(Effect.ignore);
            }
            yield* deleteDataset({ dataset_id: datasetName }).pipe(
              Effect.ignore,
            );
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns NotFound for a virtual-field id that does not exist",
    async () => {
      const error = await runEffect(
        updateVirtualField({
          id: `doesnotexist-${testRunId}`,
          dataset: `distilled-axiom-upvf-${testRunId}`,
          name: `distilled_axiom_upvf_${testRunId}`,
          expression: "1 + 1",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: the client-side schema requires dataset/name/expression on
  // update, so `updateVirtualField({ id })` fails at encode time before any
  // request is sent. Server-side 422 is not reachable without bypassing the
  // schema.
});
