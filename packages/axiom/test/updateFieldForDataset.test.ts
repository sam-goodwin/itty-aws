import { Effect, Schedule } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getFieldsForDataset } from "../src/operations/v2/getFieldsForDataset";
import { updateFieldForDataset } from "../src/operations/v2/updateFieldForDataset";
import { runEffect, testRunId } from "./setup";

/**
 * Poll getFieldsForDataset until at least one field is provisioned on the
 * dataset, then return its name and type. Bounded wait — 15 tries at 2s each.
 */
const waitForFirstField = (datasetName: string) =>
  Effect.retry(
    Effect.gen(function* () {
      const fields = yield* getFieldsForDataset({ dataset_id: datasetName });
      if (fields.length === 0) {
        return yield* Effect.fail({ _tag: "NoFieldsYet" as const });
      }
      const first = fields[0]!;
      return { name: first.name, type: first.type };
    }),
    {
      while: (e) =>
        typeof e === "object" &&
        e !== null &&
        "_tag" in e &&
        (e as { _tag: string })._tag === "NoFieldsYet",
      schedule: Schedule.both(
        Schedule.recurs(15),
        Schedule.spaced("2 seconds"),
      ),
    },
  );

describe("updateFieldForDataset", () => {
  it(
    "updates a field's description",
    async () => {
      const datasetName = `distilled-axiom-updatefield-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateFieldForDataset test fixture",
        });

        const field = yield* waitForFirstField(datasetName);

        const updated = yield* updateFieldForDataset({
          dataset_id: datasetName,
          field_id: field.name,
          name: field.name,
          type: field.type,
          description: `updated by test ${testRunId}`,
        });

        expect(updated.name).toBe(field.name);
        expect(updated.type).toBe(field.type);
        expect(updated.description).toBe(`updated by test ${testRunId}`);
      }).pipe(
        Effect.ensuring(
          // Best-effort cleanup.
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 120_000 },
  );

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

  it(
    "returns UnprocessableEntity for semantically invalid body fields",
    async () => {
      const datasetName = `distilled-axiom-updatefield-422-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateFieldForDataset 422 fixture",
        });

        const field = yield* waitForFirstField(datasetName);

        // An empty `name` violates the required-field contract; axiom
        // responds with 422 / code 602.
        const error = yield* updateFieldForDataset({
          dataset_id: datasetName,
          field_id: field.name,
          name: "",
          type: "",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      }).pipe(
        Effect.ensuring(
          deleteDataset({ dataset_id: datasetName }).pipe(Effect.ignore),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 120_000 },
  );
});
