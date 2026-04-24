import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createVirtualField } from "../src/operations/v2/createVirtualField";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteVirtualField } from "../src/operations/v2/deleteVirtualField";
import { getVirtualField } from "../src/operations/v2/getVirtualField";
import { runEffect, testRunId } from "./setup";

describe("deleteVirtualField", () => {
  it(
    "deletes an existing virtual field and subsequent fetches return NotFound",
    async () => {
      const datasetName = `distilled-axiom-delvf-${testRunId}`;
      const fieldName = `distilled_axiom_delvf_${testRunId}`;
      let createdId: string | undefined;
      let deleted = false;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteVirtualField test fixture",
        });

        // createVirtualField's generated input schema is Struct({}); cast
        // through `unknown` to send a realistic payload.
        const created = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "deleteVirtualField happy path",
          expression: "1 + 1",
        } as unknown as Record<string, never>);
        createdId = created.id;

        yield* deleteVirtualField({ id: created.id });
        deleted = true;

        const afterDelete = yield* getVirtualField({ id: created.id }).pipe(
          Effect.flip,
        );
        expect((afterDelete as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined && !deleted) {
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
        deleteVirtualField({ id: `doesnotexist-${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
