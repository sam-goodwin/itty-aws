import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getMonitors } from "../src/operations/v2/getMonitors";
import { updateMonitor } from "../src/operations/v2/updateMonitor";
import { runEffect, testRunId } from "./setup";

describe("updateMonitor", () => {
  it(
    "updates an existing monitor and returns the refreshed record",
    async () => {
      // The generated updateMonitor input schema only exposes `id` and
      // strips any extra fields during encoding. We still need a real
      // monitor to target, so we discover one via getMonitors.
      const effect = Effect.gen(function* () {
        const monitors = yield* getMonitors({});

        if (monitors.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one monitor; the generated input schema is incomplete so this test cannot create its own fixture.",
          );
        }

        const target = monitors[0]!;

        // Cast through `unknown` to send a realistic body. Fields that are
        // not declared on the input schema are stripped by
        // `buildRequestParts`; this test also doubles as a signal that the
        // updateMonitor input schema needs to be broadened.
        const updated = yield* updateMonitor({
          id: target.id,
          name: target.name,
          description: `updated by distilled test ${testRunId}`,
          type: target.type,
          aplQuery: target.aplQuery ?? "",
          intervalMinutes: target.intervalMinutes ?? 5,
          rangeMinutes: target.rangeMinutes ?? 5,
          operator: target.operator ?? "Above",
          threshold: target.threshold ?? 1,
        } as unknown as { id: string });

        expect(updated.id).toBe(target.id);
        expect(typeof updated.name).toBe("string");
        expect(["Threshold", "MatchEvent", "AnomalyDetection"]).toContain(
          updated.type,
        );
      });

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
        updateMonitor({ id: `mon_doesnotexist${testRunId}` } as unknown as {
          id: string;
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "returns UnprocessableEntity when required body fields are missing",
    async () => {
      // PUT /v2/monitors/{id} requires a full monitor payload (name, type,
      // query, etc.). The generated schema sends an empty body, which
      // should yield 422 → UnprocessableEntity for any existing monitor.
      const effect = Effect.gen(function* () {
        const monitors = yield* getMonitors({});
        if (monitors.length === 0) {
          throw new Error(
            "Test prerequisite: axiom org must have at least one monitor to probe UnprocessableEntity against.",
          );
        }

        const target = monitors[0]!;
        const error = yield* updateMonitor({ id: target.id }).pipe(
          Effect.flip,
        );

        expect((error as { _tag: string })._tag).toBe("UnprocessableEntity");
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );
});
