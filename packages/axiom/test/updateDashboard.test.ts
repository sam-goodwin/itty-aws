import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createDashboard } from "../src/operations/v2/createDashboard";
import { deleteDashboard } from "../src/operations/v2/deleteDashboard";
import { getCurrentUser } from "../src/operations/v2/getCurrentUser";
import { updateDashboard } from "../src/operations/v2/updateDashboard";
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

describe("updateDashboard", () => {
  it(
    "updates an existing dashboard's name and bumps the version",
    async () => {
      const initialName = `distilled-axiom-updash-${testRunId}`;
      const renamed = `distilled-axiom-updash-renamed-${testRunId}`;
      let createdUid: string | undefined;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const created = yield* createDashboard({
          dashboard: minimalDashboard(initialName, me.id),
        });
        createdUid = created.dashboard.uid;

        const updated = yield* updateDashboard({
          uid: created.dashboard.uid,
          dashboard: minimalDashboard(renamed, me.id),
          version: created.dashboard.version,
        });

        expect(updated.status).toBe("updated");
        expect(updated.dashboard.uid).toBe(created.dashboard.uid);
        expect(updated.dashboard.dashboard.name).toBe(renamed);
        expect(updated.dashboard.version).toBeGreaterThan(
          created.dashboard.version,
        );
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
      const name = `distilled-axiom-updash-badreq-${testRunId}`;
      let createdUid: string | undefined;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const created = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
        });
        createdUid = created.dashboard.uid;

        // `owner` must be a real user id; empty string is valid client-side
        // but rejected by axiom as a 400 BadRequest.
        const error = yield* updateDashboard({
          uid: created.dashboard.uid,
          dashboard: minimalDashboard(name, ""),
          version: created.dashboard.version,
        }).pipe(Effect.flip);

        expect((error as { _tag: string })._tag).toBe("BadRequest");
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
    "returns Conflict when updating with a stale version and overwrite is false",
    async () => {
      const name = `distilled-axiom-updash-conflict-${testRunId}`;
      let createdUid: string | undefined;

      const effect = Effect.gen(function* () {
        const me = yield* getCurrentUser({});

        const created = yield* createDashboard({
          dashboard: minimalDashboard(name, me.id),
        });
        createdUid = created.dashboard.uid;

        // Bump the version so the follow-up request's `version` is stale.
        yield* updateDashboard({
          uid: created.dashboard.uid,
          dashboard: minimalDashboard(`${name}-v2`, me.id),
          version: created.dashboard.version,
        });

        // Re-submit the original version without overwrite → 409 Conflict.
        const error = yield* updateDashboard({
          uid: created.dashboard.uid,
          dashboard: minimalDashboard(`${name}-stale`, me.id),
          version: created.dashboard.version,
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
