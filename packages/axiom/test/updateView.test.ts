import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createView } from "../src/operations/v2/createView";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteView } from "../src/operations/v2/deleteView";
import { updateView } from "../src/operations/v2/updateView";
import { runEffect, testRunId } from "./setup";

describe("updateView", () => {
  it(
    "updates an existing view's APL query",
    async () => {
      const datasetName = `distilled-ax-uvds-${testRunId}`;
      const viewName = `distilled-ax-uvview-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateView test fixture",
        });

        yield* createView({
          name: viewName,
          description: "updateView happy path",
          aplQuery: `['${datasetName}'] | limit 10`,
        });

        // Views are addressed by name on api.axiom.co — the generated `id`
        // path param is really the view's name. Probed live: a `name`
        // change in the body is silently ignored (the view's name is its
        // primary key and cannot be renamed via this endpoint), so we
        // only assert the `aplQuery` change round-trips.
        const updated = yield* updateView({
          id: viewName,
          name: viewName,
          description: "updateView happy path (updated)",
          aplQuery: `['${datasetName}'] | limit 25`,
        });

        expect(updated.name).toBe(viewName);
        expect(updated.aplQuery).toBe(`['${datasetName}'] | limit 25`);
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
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
        updateView({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-upview-${testRunId}`,
          aplQuery: "['_traces'] | limit 10",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: the client-side schema requires name/aplQuery on update, so
  // `updateView({ id })` fails at encode time before any request is sent.
  // Server-side 422 is not reachable without bypassing the schema.
});
