import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDataset } from "../src/operations/v2/createDataset";
import { createMonitor } from "../src/operations/v2/createMonitor";
import { deleteDataset } from "../src/operations/v2/deleteDataset";
import { deleteMonitor } from "../src/operations/v2/deleteMonitor";
import { updateMonitor } from "../src/operations/v2/updateMonitor";
import { runEffect, testRunId } from "./setup";

describe("updateMonitor", () => {
  it(
    "updates an existing monitor and returns the refreshed record",
    async () => {
      const datasetName = `distilled-axiom-upmon-${testRunId}`;
      const monitorName = `distilled-axiom-upmon-${testRunId}`;
      let createdId: string | undefined;

      const effect = Effect.gen(function* () {
        yield* createDataset({
          name: datasetName,
          description: "updateMonitor test fixture",
        });

        const monitor = yield* createMonitor({
          name: monitorName,
          description: "updateMonitor initial",
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

        const updated = yield* updateMonitor({
          id: monitor.id,
          name: monitor.name,
          description: `updated by distilled test ${testRunId}`,
          type: monitor.type,
          aplQuery: monitor.aplQuery ?? `['${datasetName}']`,
          intervalMinutes: monitor.intervalMinutes ?? 5,
          rangeMinutes: monitor.rangeMinutes ?? 5,
          operator: monitor.operator ?? "Above",
          threshold: (monitor.threshold ?? 1) + 1,
        });

        expect(updated.id).toBe(monitor.id);
        expect(updated.description).toContain("updated by distilled test");
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
      // Axiom monitor ids are prefixed with `mon_`. A syntactically valid
      // but non-existent id should produce a 404 → NotFound. Provide a full
      // body so the request passes client-side schema validation.
      const error = await runEffect(
        updateMonitor({
          id: `mon_doesnotexist${testRunId}`,
          name: `distilled-axiom-upmon-nf-${testRunId}`,
          type: "Threshold",
          aplQuery: "['_traces']",
          intervalMinutes: 5,
          rangeMinutes: 5,
          operator: "Above",
          threshold: 1,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  // Removed: the client-side schema requires name/type, so
  // `updateMonitor({ id })` fails at encode time before any request is
  // sent. Server-side 422 is not reachable without bypassing the schema.
});
