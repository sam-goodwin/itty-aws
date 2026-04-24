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
  refreshTime: "60" as const,
  schemaVersion: "2" as const,
  timeWindowStart: "now-1h",
  timeWindowEnd: "now",
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
        expect(result.dashboard.version).toBeGreaterThanOrEqual(1);
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

  it(
    "returns BadRequest when the dashboard body is structurally invalid",
    async () => {
      const me = await runEffect(getCurrentUser({}));

      // `owner` must be a real user id; an empty string is the right shape
      // for the client schema but invalid on the server. Axiom surfaces
      // this as a 400, which the SDK's matchError maps to the typed
      // BadRequest class.
      const error = await runEffect(
        createDashboard({
          dashboard: minimalDashboard(
            `distilled-axiom-dash-badreq-${testRunId}`,
            "",
          ),
        }).pipe(Effect.flip),
      );
      void me;

      expect((error as { _tag: string })._tag).toBe("BadRequest");
    },
    { timeout: 30_000 },
  );

  it(
    "returns Conflict when creating a dashboard with a uid that already exists",
    async () => {
      const name = `distilled-axiom-dash-conflict-${testRunId}`;
      const uid = `dash-conflict-${testRunId}`;
      let createdUid: string | undefined;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const first = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
          uid,
        });
        createdUid = first.dashboard.uid;

        // Re-creating with the same uid and without overwrite should 409.
        const error = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
          uid,
          overwrite: false,
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("Conflict");
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
});
