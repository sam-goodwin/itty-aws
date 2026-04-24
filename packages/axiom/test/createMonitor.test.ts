import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMonitor } from "../src/operations/v2/createMonitor";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteMonitor } from "../src/operations/v2/deleteMonitor";
import { runEffect, testRunId } from "./setup";

describe("createMonitor", () => {
  it(
    "creates a Threshold monitor backed by a fresh dataset",
    async () => {
      const datasetName = `distilled-axiom-createmon-${testRunId}`;
      const monitorName = `distilled-axiom-mon-${testRunId}`;
      let createdMonitorId: string | undefined;

      const effect = Effect.gen(function* () {
        // Prerequisite: the APL query target must exist.
        yield* createDataset({
          name: datasetName,
          description: "createMonitor test fixture",
        });

        const monitor = yield* createMonitor({
          name: monitorName,
          description: "createMonitor happy path",
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

        expect(typeof monitor.id).toBe("string");
        expect(monitor.id.length).toBeGreaterThan(0);
        expect(monitor.name).toBe(monitorName);
        expect(["Threshold", "MatchEvent", "AnomalyDetection"]).toContain(
          monitor.type,
        );
        createdMonitorId = monitor.id;
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

  // Removed: the client-side schema requires `name` and `type`, so
  // `createMonitor({})` fails at encode time before any request is sent.
  // Server-side 422 is not reachable without bypassing the schema.
});
