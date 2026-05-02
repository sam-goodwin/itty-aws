import { Effect, Schedule } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { getFieldForDataset } from "../src/operations/v2/getFieldForDataset";
import { getFieldsForDataset } from "../src/operations/v2/getFieldsForDataset";
import { runEffect, testRunId } from "./setup";

describe("getFieldForDataset", () => {
  it(
    "returns a field by name for an existing dataset",
    async () => {
      const datasetName = `distilled-axiom-getfield-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getFieldForDataset test fixture",
        });

        // Axiom provisions its auto fields (e.g. `_time`, `_sysTime`) on the
        // dataset asynchronously. Poll the fields listing until at least one
        // exists, then fetch it by name. Bounded wait — 15 tries at 2s each.
        const fieldName = yield* Effect.retry(
          Effect.gen(function* () {
            const fields = yield* getFieldsForDataset({
              dataset_id: datasetName,
            });
            if (fields.length === 0) {
              return yield* Effect.fail({ _tag: "NoFieldsYet" as const });
            }
            return fields[0]!.name;
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

        const field = yield* getFieldForDataset({
          dataset_id: datasetName,
          field_id: fieldName,
        });

        expect(field.name).toBe(fieldName);
        expect(typeof field.type).toBe("string");
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
      const datasetName = `distilled-axiom-getfield-404-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getFieldForDataset NotFound fixture",
        });

        // Axiom occasionally returns 500 instead of 404 here — the dataset
        // is freshly provisioned and the field-lookup path can race with
        // internal indexing. Retry on InternalServerError so the test only
        // fails when the response is genuinely wrong, not transiently 500.
        const error = yield* getFieldForDataset({
          dataset_id: datasetName,
          field_id: `does_not_exist_${testRunId}`,
        }).pipe(
          Effect.flip,
          Effect.flatMap((e) =>
            (e as { _tag: string })._tag === "InternalServerError"
              ? Effect.fail(e)
              : Effect.succeed(e),
          ),
          Effect.retry({
            schedule: Schedule.both(
              Schedule.spaced("2 seconds"),
              Schedule.recurs(5),
            ),
          }),
        );

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
        getFieldForDataset({
          dataset_id: `distilled-axiom-doesnotexist-${testRunId}`,
          field_id: "_time",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
