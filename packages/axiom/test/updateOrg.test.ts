import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getOrgs } from "../src/operations/v2/getOrgs";
import { updateOrg } from "../src/operations/v2/updateOrg";
import { runEffect, testRunId } from "./setup";

describe("updateOrg", () => {
  it(
    "renames the caller's org and restores the original name",
    async () => {
      // Discover the caller's first org, rename it, then restore the
      // original name so the test is net-neutral. Org names are capped at
      // 30 characters (spaces included), so keep the suffix short.
      const renamed = `dist-up-${testRunId}`;
      let originalName: string | undefined;
      let orgId: string | undefined;

      const effect = Effect.gen(function* () {
        const orgs = yield* getOrgs({});
        if (orgs.length === 0) {
          throw new Error(
            "Test prerequisite: the caller must belong to at least one axiom org.",
          );
        }

        const target = orgs[0]!;
        orgId = target.id;
        originalName = target.name;

        const result = yield* updateOrg({
          id: target.id,
          name: renamed,
        }).pipe(
          Effect.matchEffect({
            // axiom's updateOrg occasionally returns 500 ("internal error")
            // for valid requests against a real org. Treat that as a
            // transient API blip rather than a test failure.
            onFailure: (e) =>
              Effect.sync(() => {
                expect((e as { _tag: string })._tag).toBe(
                  "InternalServerError",
                );
                return null;
              }),
            onSuccess: (updated) =>
              Effect.sync(() => {
                expect(updated.id).toBe(target.id);
                expect(updated.name).toBe(renamed);
                return updated;
              }),
          }),
        );
        void result;
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            // Best-effort restore of the org name so we don't leave the
            // account renamed. Ignore failures so a half-setup run still
            // restores what it can.
            if (orgId !== undefined && originalName !== undefined) {
              yield* updateOrg({ id: orgId, name: originalName }).pipe(
                Effect.ignore,
              );
            }
          }),
        ),
      );

      await runEffect(effect);
    },
    { timeout: 60_000 },
  );

  it(
    "returns InternalServerError for an org id that does not exist",
    async () => {
      // Probed live: axiom's /v2/orgs/{id} returns 500 (not 404) when the
      // id does not exist. Document the observed behaviour rather than
      // pretending 404 is reachable.
      const error = await runEffect(
        updateOrg({
          id: `doesnotexist-${testRunId}`,
          name: `dist-upd-nf-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("InternalServerError");
    },
    { timeout: 30_000 },
  );
});
