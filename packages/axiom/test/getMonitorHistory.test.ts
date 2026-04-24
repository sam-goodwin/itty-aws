import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getMonitorHistory } from "../src/operations/v2/getMonitorHistory";
import { getMonitors } from "../src/operations/v2/getMonitors";
import { runEffect, testRunId } from "./setup";

describe("getMonitorHistory", () => {
  it(
    "returns an array of history entries for an existing monitor",
    async () => {
      const now = Date.now();
      const startTime = new Date(now - 24 * 60 * 60 * 1000).toISOString();
      const endTime = new Date(now).toISOString();

      const effect = Effect.gen(function* () {
        // The generated createMonitor input schema is empty and cannot
        // reliably produce a fixture, so we discover an existing monitor
        // via getMonitors.
        const monitors = yield* getMonitors({});
        if (monitors.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one monitor; createMonitor input schema is incomplete and cannot be used as setup.",
          );
        }

        const target = monitors[0]!;
        const history = yield* getMonitorHistory({
          id: target.id,
          startTime,
          endTime,
        });

        // History may be empty if the monitor has never fired in the
        // window, so we assert on the array shape rather than length.
        expect(Array.isArray(history)).toBe(true);
        for (const entry of history) {
          expect(typeof entry.checkId).toBe("string");
          expect(typeof entry.name).toBe("string");
          expect(["open", "closed"]).toContain(entry.state);
          expect(typeof entry.timestamp).toBe("string");
        }
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "returns NotFound for a well-formed monitor id that does not exist",
    async () => {
      // Axiom monitor ids are prefixed with `mon_`. A syntactically valid
      // but non-existent id should produce a 404 → NotFound.
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
      // Malformed time arguments against a real monitor id should produce
      // a 422 → UnprocessableEntity.
      const effect = Effect.gen(function* () {
        const monitors = yield* getMonitors({});
        if (monitors.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one monitor to probe UnprocessableEntity against.",
          );
        }

        const target = monitors[0]!;
        const error = yield* getMonitorHistory({
          id: target.id,
          startTime: "not-a-valid-iso-8601-date",
          endTime: "also-not-a-valid-iso-8601-date",
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
