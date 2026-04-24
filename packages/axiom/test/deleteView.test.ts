import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createView } from "../src/operations/v2/createView";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteView } from "../src/operations/v2/deleteView";
import { getView } from "../src/operations/v2/getView";
import { runEffect, testRunId } from "./setup";

describe("deleteView", () => {
  it(
    "deletes an existing view and subsequent fetches return NotFound",
    async () => {
      const datasetName = `distilled-ax-dvds-${testRunId}`;
      const viewName = `distilled-ax-dvview-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteView test fixture",
        });

        yield* createView({
          name: viewName,
          description: "deleteView happy path",
          aplQuery: `['${datasetName}'] | limit 10`,
        });

        // Views are addressed by name on api.axiom.co — the generated `id`
        // path param is really the view's name.
        yield* deleteView({ id: viewName });

        const afterDelete = yield* getView({ id: viewName }).pipe(
          Effect.flip,
        );
        expect((afterDelete as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            // Best-effort cleanup if an earlier step failed mid-flight.
            yield* deleteView({ id: viewName }).pipe(Effect.ignore);
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
    "returns NotFound for a view id that does not exist",
    async () => {
      const error = await runEffect(
        deleteView({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
