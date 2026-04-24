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
      // original name so the test is net-neutral.
      const renamed = `distilled-axiom-updorg-${testRunId}`;
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

        const updated = yield* updateOrg({ id: target.id, name: renamed });

        expect(updated.id).toBe(target.id);
        expect(updated.name).toBe(renamed);
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
    "returns NotFound for an org id that does not exist",
    async () => {
      // A syntactically-valid but non-existent org id should produce a 404
      // → NotFound.
      const error = await runEffect(
        updateOrg({
          id: `doesnotexist-${testRunId}`,
          name: `distilled-axiom-updorg-nf-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
