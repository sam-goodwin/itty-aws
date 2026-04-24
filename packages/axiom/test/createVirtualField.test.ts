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

        // The generated createVirtualField input schema is Struct({}) so TS
        // rejects real virtual-field fields. We cast through `unknown` to
        // send a realistic payload; `buildRequestParts` will only include
        // fields the schema knows about, so this test doubles as a signal
        // that the input schema needs to be broadened.
        const field = yield* createVirtualField({
          dataset: datasetName,
          name: fieldName,
          description: "createVirtualField happy path",
          expression: "1 + 1",
        } as unknown as Record<string, never>);

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

  it(
    "returns UnprocessableEntity when required virtual-field fields are missing",
    async () => {
      // Empty body violates required fields (dataset, name, expression).
      // Axiom surfaces this as 422, which the SDK's matchError maps to the
      // typed UnprocessableEntity class.
      const error = await runEffect(
        createVirtualField({} as Record<string, never>).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
