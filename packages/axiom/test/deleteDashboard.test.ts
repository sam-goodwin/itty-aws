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

describe("deleteDashboard", () => {
  it(
    "deletes an existing dashboard and subsequent fetches return NotFound",
    async () => {
      const name = `distilled-axiom-deldash-${testRunId}`;
      let createdUid: string | undefined;
      let deleted = false;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const created = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
        });
        createdUid = created.dashboard.uid;

        yield* deleteDashboard({ uid: created.dashboard.uid });
        deleted = true;

        const afterDelete = yield* getDashboard({
          uid: created.dashboard.uid,
        }).pipe(Effect.flip);
        expect((afterDelete as { _tag: string })._tag).toBe("NotFound");
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            if (createdUid !== undefined && !deleted) {
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
        deleteDashboard({ uid: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
