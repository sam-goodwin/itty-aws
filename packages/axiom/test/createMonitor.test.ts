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

        // The generated input schema is Struct({}) so TS rejects real monitor
        // fields. We cast through `unknown` to send a realistic Threshold
        // monitor body; `buildRequestParts` will only include fields the
        // schema knows about, so this test doubles as a signal that the
        // input schema needs to be broadened.
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
        } as unknown as Record<string, never>);

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

  it(
    "returns UnprocessableEntity when required monitor fields are missing",
    async () => {
      // Empty body violates required fields (name, type, query fields, etc.).
      // Axiom surfaces this as 422, which the SDK's matchError maps to the
      // typed UnprocessableEntity class.
      const error = await runEffect(
        createMonitor({} as Record<string, never>).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
