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

        // The generated createStarred input schema is Struct({}) so TS
        // rejects real starred-query fields. We cast through `unknown` to
        // send a realistic APL query payload; `buildRequestParts` will only
        // include fields the schema knows about, so this test doubles as a
        // signal that the input schema needs to be broadened.
        const starred = yield* createStarred({
          name: queryName,
          dataset: datasetName,
          kind: "apl",
          metadata: {},
          query: {
            apl: `['${datasetName}'] | summarize count()`,
          },
          who: "user",
        } as unknown as Record<string, never>);

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

  it(
    "returns UnprocessableEntity when required starred-query fields are missing",
    async () => {
      // Empty body violates required fields (name, kind, query, who, etc.).
      // Axiom surfaces this as 422, which the SDK's matchError maps to the
      // typed UnprocessableEntity class.
      const error = await runEffect(
        createStarred({} as Record<string, never>).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
