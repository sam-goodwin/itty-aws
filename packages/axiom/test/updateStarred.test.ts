import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createStarred } from "../src/operations/v2/createStarred";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteStarred } from "../src/operations/v2/deleteStarred";
import { updateStarred } from "../src/operations/v2/updateStarred";
import { runEffect, testRunId } from "./setup";

describe("updateStarred", () => {
  it(
    "updates an existing starred query and returns the refreshed record",
    async () => {
      const datasetName = `distilled-axiom-upstarred-${testRunId}`;
      const queryName = `distilled-axiom-upstarred-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateStarred test fixture",
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
        createdId = starred.id;

        const renamed = `${queryName}-renamed`;
        const updated = yield* updateStarred({
          id: starred.id,
          name: renamed,
          dataset: datasetName,
          kind: "apl",
          metadata: {},
          query: starred.query,
          who: starred.who,
        });

        expect(updated.id).toBe(starred.id);
        expect(updated.name).toBe(renamed);
        expect(updated.kind).toBe("apl");
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

  it(
    "returns NotFound for a starred-query id that does not exist",
    async () => {
      // A syntactically-valid but non-existent starred-query id should
      // produce a 404 → NotFound. Provide a full body so the request passes
      // schema validation and the server reaches the id lookup.
      const error = await runEffect(
        updateStarred({
          id: `doesnotexist-${testRunId}`,
          name: "doesnotexist",
          kind: "apl",
          metadata: {},
          query: { apl: "['_time']" },
          who: "user",
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: the client-side schema requires kind/name/query/who/metadata
  // on update, so `updateStarred({ id })` fails at encode time before any
  // request is sent. Server-side 422 is not reachable without bypassing the
  // schema.
});
