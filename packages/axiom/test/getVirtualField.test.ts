import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createVirtualField } from "../src/operations/v2/createVirtualField";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteVirtualField } from "../src/operations/v2/deleteVirtualField";
import { getVirtualField } from "../src/operations/v2/getVirtualField";
import { runEffect, testRunId } from "./setup";

describe("getVirtualField", () => {
  it(
    "fetches a virtual field by id and returns its configuration",
    async () => {
      const datasetName = `distilled-axiom-getvf-${testRunId}`;
      const fieldName = `distilled_axiom_getvf_${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getVirtualField test fixture",
        });

        // createVirtualField's generated input schema is Struct({}); cast
        // through `unknown` to send a realistic payload.
        const created = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "getVirtualField happy path",
          expression: "1 + 1",
        } as unknown as Record<string, never>);
        createdId = created.id;

        const fetched = yield* getVirtualField({ id: created.id });

        expect(fetched.id).toBe(created.id);
        expect(fetched.dataset).toBe(datasetName);
        expect(fetched.name).toBe(fieldName);
        expect(fetched.expression).toBe("1 + 1");
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
        getVirtualField({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
