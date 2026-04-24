import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createView } from "../src/operations/v2/createView";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteView } from "../src/operations/v2/deleteView";
import { getViews } from "../src/operations/v2/getViews";
import { runEffect, testRunId } from "./setup";

describe("createView", () => {
  it(
    "creates a view with an APL query and returns the stored record",
    async () => {
      const datasetName = `distilled-ax-cvds-${testRunId}`;
      const viewName = `distilled-ax-cvview-${testRunId}`;
      let createdId: string | undefined;

      // Axiom validates the APL query's dataset at create time, so we need a
      // real dataset before creating a view against it.
      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "createView test fixture",
        });

        const view = yield* createView({
          name: viewName,
          description: "createView happy path",
          aplQuery: `['${datasetName}'] | limit 10`,
        });

        expect(view.name).toBe(viewName);
        expect(typeof view.aplQuery).toBe("string");
        expect(view.aplQuery.length).toBeGreaterThan(0);

        // The create response schema omits `id`, so we discover the created
        // view by listing — needed for cleanup.
        const views = yield* getViews({});
        const match = views.find((v) => v.name === viewName) as
          | { id?: string }
          | undefined;
        if (match?.id) createdId = match.id;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteView({ id: createdId }).pipe(Effect.ignore);
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

  // Removed: the client-side schema requires `name` and `aplQuery`, so
  // `createView({})` fails at encode time before any request is sent.
  // Server-side 422 is not reachable without bypassing the schema.
});
