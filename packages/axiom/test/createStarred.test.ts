import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createStarred } from "../src/operations/v2/createStarred";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteStarred } from "../src/operations/v2/deleteStarred";
import { runEffect, testRunId } from "./setup";

describe("createStarred", () => {
  it(
    "creates a starred APL query against a fresh dataset",
    async () => {
      const datasetName = `distilled-axiom-starred-${testRunId}`;
      const queryName = `distilled-axiom-starred-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "createStarred test fixture",
        });

        const starred = yield* createStarred({
          name: queryName,
          dataset: datasetName,
          kind: "apl",
          metadata: {},
          query: {
            apl: `['${datasetName}'] | summarize count()`,
          },
          who: "user",
        });

        expect(typeof starred.id).toBe("string");
        expect(starred.id.length).toBeGreaterThan(0);
        expect(starred.kind).toBe("apl");
        expect(typeof starred.query.apl).toBe("string");
        createdId = starred.id;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteStarred({ id: createdId }).pipe(Effect.ignore);
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

  // Removed: the client-side schema now requires kind/name/query/who/
  // metadata, so `createStarred({})` fails at encode time before any request
  // is sent. Server-side 422 is not reachable without bypassing the schema.
});
