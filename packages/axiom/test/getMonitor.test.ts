import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMonitor } from "../src/operations/v2/createMonitor";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteMonitor } from "../src/operations/v2/deleteMonitor";
import { getMonitor } from "../src/operations/v2/getMonitor";
import { runEffect, testRunId } from "./setup";

describe("getMonitor", () => {
  it(
    "returns a monitor by id",
    async () => {
      const datasetName = `distilled-axiom-getmon-${testRunId}`;
      const monitorName = `distilled-axiom-getmon-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getMonitor test fixture",
        });

        const monitor = yield* createMonitor({
          name: monitorName,
          description: "getMonitor happy path",
          type: "Threshold",
          aplQuery: `['${datasetName}'] | summarize count()`,
          intervalMinutes: 5,
          rangeMinutes: 5,
          operator: "Above",
          threshold: 1,
          notifierIds: [],
          alertOnNoData: false,
          resolvable: true,
        });
        createdId = monitor.id;

        const fetched = yield* getMonitor({ id: monitor.id });

        expect(fetched.id).toBe(monitor.id);
        expect(fetched.name).toBe(monitorName);
        expect(["Threshold", "MatchEvent", "AnomalyDetection"]).toContain(
          fetched.type,
        );
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdId !== undefined) {
              yield* deleteMonitor({ id: createdId }).pipe(Effect.ignore);
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
      // Axiom monitor ids are prefixed with `mon_`. A syntactically valid but
      // non-existent id should produce a 404 → NotFound.
      const error = await runEffect(
        getMonitor({ id: `mon_doesnotexist${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
