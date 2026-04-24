import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDashboard } from "../src/operations/v2/createDashboard";
import { deleteDashboard } from "../src/operations/v2/deleteDashboard";
import { getCurrentUser } from "../src/operations/v2/getCurrentUser";
import { getDashboard } from "../src/operations/v2/getDashboard";
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

describe("getDashboard", () => {
  it(
    "fetches a dashboard by uid and returns its configuration",
    async () => {
      const name = `distilled-axiom-getdash-${testRunId}`;
      let createdUid: string | undefined;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const created = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
        });
        createdUid = created.dashboard.uid;

        const fetched = yield* getDashboard({ uid: created.dashboard.uid });

        expect(fetched.uid).toBe(created.dashboard.uid);
        expect(fetched.id).toBe(created.dashboard.id);
        expect(fetched.dashboard.name).toBe(name);
        expect(fetched.dashboard.owner).toBe(me.id);
        expect(fetched.version).toBeGreaterThanOrEqual(1);
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
    "returns NotFound for a dashboard uid that does not exist",
    async () => {
      const error = await runEffect(
        getDashboard({ uid: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
