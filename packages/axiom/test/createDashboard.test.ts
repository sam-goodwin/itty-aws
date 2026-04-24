import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDashboard } from "../src/operations/v2/createDashboard";
import { deleteDashboard } from "../src/operations/v2/deleteDashboard";
import { getCurrentUser } from "../src/operations/v2/getCurrentUser";
import { runEffect, testRunId } from "./setup";

const minimalDashboard = (name: string, owner: string) => ({
  name,
  owner,
  charts: [],
  layout: [],
  refreshTime: 60 as const,
  schemaVersion: 2 as const,
  timeWindowStart: "qr-now-1h",
  timeWindowEnd: "qr-now",
});

describe("createDashboard", () => {
  it(
    "creates a dashboard from a minimal document payload",
    async () => {
      const name = `distilled-axiom-dash-${testRunId}`;
      let createdUid: string | undefined;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const result = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
        });

        expect(result.status).toBe("created");
        expect(typeof result.dashboard.id).toBe("string");
        expect(typeof result.dashboard.uid).toBe("string");
        expect(result.dashboard.uid.length).toBeGreaterThan(0);
        expect(result.dashboard.dashboard.name).toBe(name);
        expect(result.dashboard.dashboard.owner).toBe(me.id);
        // `version` is a 64-bit hybrid-logical-clock timestamp; schema is
        // Unknown because the value exceeds Number.MAX_SAFE_INTEGER.
        expect(result.dashboard.version).toBeDefined();
        createdUid = result.dashboard.uid;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdUid !== undefined) {
              yield* deleteDashboard({ uid: createdUid }).pipe(Effect.ignore);
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  // Removed: "returns BadRequest when the dashboard body is structurally
  // invalid (empty owner)". Probed live: axiom silently substitutes the
  // authenticated user when `owner` is an empty string, creating the
  // dashboard successfully. There's no simple schema-valid body that
  // triggers a clean 400 on this endpoint today.

  // Removed: "returns Conflict when creating a dashboard with a uid that
  // already exists". On duplicate-uid + `overwrite: false`, axiom requires
  // the caller to supply the current `version`. Because `version` is a
  // 64-bit hybrid-logical-clock timestamp that exceeds JavaScript Number
  // precision, we can't round-trip it cleanly from JSON and so can't
  // construct the request that would actually trigger 409 — we only ever
  // get 400 "version is required when overwrite is false".
});
