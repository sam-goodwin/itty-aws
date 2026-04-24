import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMonitor } from "../src/operations/v2/createMonitor";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteMonitor } from "../src/operations/v2/deleteMonitor";
import { getMonitorHistory } from "../src/operations/v2/getMonitorHistory";
import { runEffect, testRunId } from "./setup";

const makeMonitor = (datasetName: string, monitorName: string) => ({
  name: monitorName,
  description: "getMonitorHistory fixture",
  type: "Threshold" as const,
  aplQuery: `['${datasetName}'] | summarize count()`,
  intervalMinutes: 5,
  rangeMinutes: 5,
  operator: "Above" as const,
  threshold: 1,
  notifierIds: [],
  alertOnNoData: false,
  resolvable: true,
});

describe("getMonitorHistory", () => {
  it(
    "returns an array of history entries for an existing monitor",
    async () => {
      const datasetName = `distilled-axiom-monhist-${testRunId}`;
      const monitorName = `distilled-axiom-monhist-${testRunId}`;
      let createdId: string | undefined;

      const now = Date.now();
      const startTime = new Date(now - 24 * 60 * 60 * 1000).toISOString();
      const endTime = new Date(now).toISOString();

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getMonitorHistory test fixture",
        });

        const monitor = yield* createMonitor(
          makeMonitor(datasetName, monitorName),
        );
        createdId = monitor.id;

        const history = yield* getMonitorHistory({
          id: monitor.id,
          startTime,
          endTime,
        });

        // History may be empty for a brand-new monitor.
        expect(Array.isArray(history)).toBe(true);
        for (const entry of history) {
          expect(typeof entry.checkId).toBe("string");
          expect(typeof entry.name).toBe("string");
          expect(["open", "closed"]).toContain(entry.state);
          expect(typeof entry.timestamp).toBe("string");
        }
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
      const now = Date.now();
      const startTime = new Date(now - 24 * 60 * 60 * 1000).toISOString();
      const endTime = new Date(now).toISOString();

      const error = await runEffect(
        getMonitorHistory({
          id: `mon_doesnotexist${testRunId}`,
          startTime,
          endTime,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when startTime/endTime are not valid ISO 8601",
    async () => {
      const datasetName = `distilled-axiom-monhist-422-${testRunId}`;
      const monitorName = `distilled-axiom-monhist-422-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "getMonitorHistory 422 fixture",
        });

        const monitor = yield* createMonitor(
          makeMonitor(datasetName, monitorName),
        );
        createdId = monitor.id;

        const error = yield* getMonitorHistory({
          id: monitor.id,
          startTime: "not-a-valid-iso-8601-date",
          endTime: "also-not-a-valid-iso-8601-date",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
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
});
