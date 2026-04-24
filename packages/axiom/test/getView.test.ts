import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createView } from "../src/operations/v2/createView";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteView } from "../src/operations/v2/deleteView";
import { getView } from "../src/operations/v2/getView";
import { runEffect, testRunId } from "./setup";

describe("getView", () => {
  it(
    "fetches a view by id and returns its configuration",
    async () => {
      const datasetName = `distilled-ax-gvds-${testRunId}`;
      const viewName = `distilled-ax-gvview-${testRunId}`;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getView test fixture",
        });

        yield* createView({
          name: viewName,
          description: "getView happy path",
          aplQuery: `['${datasetName}'] | limit 10`,
        });

        // Views are addressed by name on api.axiom.co — the generated
        // `id` path param is really the view's name.
        const fetched = yield* getView({ id: viewName });

        expect(fetched.name).toBe(viewName);
        expect(typeof fetched.aplQuery).toBe("string");
        expect(fetched.aplQuery.length).toBeGreaterThan(0);
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
        getView({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
