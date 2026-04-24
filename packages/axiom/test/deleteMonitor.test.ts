import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMonitor } from "../src/operations/v2/createMonitor";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteMonitor } from "../src/operations/v2/deleteMonitor";
import { getMonitor } from "../src/operations/v2/getMonitor";
import { runEffect, testRunId } from "./setup";

describe("deleteMonitor", () => {
  it(
    "deletes an existing monitor and subsequent fetches return NotFound",
    async () => {
      const datasetName = `distilled-axiom-delmon-${testRunId}`;
      const monitorName = `distilled-axiom-mon-${testRunId}`;
      let createdMonitorId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "deleteMonitor test fixture",
        });

        // The generated createMonitor input schema is empty, so we cast
        // through `unknown` to send a realistic Threshold monitor body.
        // Fields not declared on the input schema will be stripped by
        // `buildRequestParts` — this test also doubles as a signal that
        // the createMonitor input schema needs to be broadened.
        const created = yield* createMonitor({
          name: monitorName,
          description: "deleteMonitor happy path",
          type: "Threshold",
          aplQuery: `['${datasetName}'] | summarize count()`,
          intervalMinutes: 5,
          rangeMinutes: 5,
          operator: "Above",
          threshold: 1,
          notifierIds: [],
          alertOnNoData: false,
          resolvable: true,
        } as unknown as Record<string, never>);

        createdMonitorId = created.id;

        // Destructive op under test. Output schema is Void — completing
        // without error is the success signal.
        const result = yield* deleteMonitor({ id: created.id });
        expect(result).toBeUndefined();

        // Verify removal: a subsequent fetch must now surface NotFound.
        const error = yield* getMonitor({ id: created.id }).pipe(Effect.flip);
        expect((error as { _tag: string })._tag).toBe("NotFound");

        // Clear the id so the ensuring cleanup doesn't try to delete twice.
        createdMonitorId = undefined;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdMonitorId !== undefined) {
              yield* deleteMonitor({ id: createdMonitorId }).pipe(
                Effect.ignore,
              );
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
    "returns NotFound for a well-formed monitor id that does not exist",
    async () => {
      // Axiom monitor ids are prefixed with `mon_`. A syntactically valid
      // but non-existent id should produce a 404 → NotFound.
      const error = await runEffect(
        deleteMonitor({ id: `mon_doesnotexist${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
