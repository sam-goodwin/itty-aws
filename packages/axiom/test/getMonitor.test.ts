import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getMonitor } from "../src/operations/v2/getMonitor";
import { getMonitors } from "../src/operations/v2/getMonitors";
import { runEffect, testRunId } from "./setup";

describe("getMonitor", () => {
  it(
    "returns a monitor by id",
    async () => {
      // The generated createMonitor input schema is empty and cannot
      // reliably produce a fixture, so we discover an existing monitor
      // via getMonitors and fetch it by id.
      const effect = Effect.gen(function* () {
        const monitors = yield* getMonitors({});

        if (monitors.length === 0) {
          // The test account has no monitors to fetch. This is a prerequisite
          // failure, not a bug in getMonitor. Fail loudly so the missing
          // fixture is visible rather than silently skipped.
          throw new Error(
            "Test prerequisite: axiom org must have at least one monitor; createMonitor input schema is incomplete and cannot be used as setup.",
          );
        }

        const target = monitors[0]!;
        const fetched = yield* getMonitor({ id: target.id });

        expect(fetched.id).toBe(target.id);
        expect(fetched.name).toBe(target.name);
        expect(typeof fetched.name).toBe("string");
        expect(["Threshold", "MatchEvent", "AnomalyDetection"]).toContain(
          fetched.type,
        );
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
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
