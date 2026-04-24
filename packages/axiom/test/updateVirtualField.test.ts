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

        // The generated create/update virtual field input schemas are
        // Struct({}) / Struct({id}); cast through `unknown` to send a
        // realistic payload. `buildRequestParts` only serialises fields
        // the schema knows about — a signal the input schema needs to be
        // broadened — but the underlying PUT accepts the full body.
        const created = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "initial",
          expression: "1 + 1",
        } as unknown as Record<string, never>);
        createdId = created.id;

        const updated = yield* updateVirtualField({
          id: created.id,
          dataset: datasetName,
          name: fieldName,
          description: "updated",
          expression: "2 + 2",
        } as unknown as { id: string });

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
        } as unknown as { id: string }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when required update fields are missing",
    async () => {
      const datasetName = `distilled-axiom-upvf-422-${testRunId}`;
      const fieldName = `distilled_axiom_upvf_422_${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateVirtualField 422 fixture",
        });

        const created = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "initial",
          expression: "1 + 1",
        } as unknown as Record<string, never>);
        createdId = created.id;

        // Sending only the `id` (no dataset/name/expression) violates the
        // required update body; axiom surfaces this as 422.
        const error = yield* updateVirtualField({ id: created.id }).pipe(
          Effect.flip,
        );

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
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
});
