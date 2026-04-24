import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createVirtualField } from "../src/operations/v2/createVirtualField";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteVirtualField } from "../src/operations/v2/deleteVirtualField";
import { runEffect, testRunId } from "./setup";

describe("createVirtualField", () => {
  it(
    "creates a virtual field against a fresh dataset",
    async () => {
      const datasetName = `distilled-axiom-vfield-${testRunId}`;
      const fieldName = `distilled_axiom_vfield_${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "createVirtualField test fixture",
        });

        const field = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "createVirtualField happy path",
          expression: "1 + 1",
        });

        expect(typeof field.id).toBe("string");
        expect(field.id.length).toBeGreaterThan(0);
        expect(field.dataset).toBe(datasetName);
        expect(field.name).toBe(fieldName);
        expect(field.expression).toBe("1 + 1");
        createdId = field.id;
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

  // Removed: the client-side schema requires dataset/name/expression, so
  // `createVirtualField({})` fails at encode time before any request is
  // sent. Server-side 422 is not reachable without bypassing the schema.
});
