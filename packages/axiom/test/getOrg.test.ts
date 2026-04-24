import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { getOrg } from "../src/operations/v2/getOrg";
import { getOrgs } from "../src/operations/v2/getOrgs";
import { runEffect, testRunId } from "./setup";

describe("getOrg", () => {
  it(
    "returns an org by id",
    async () => {
      // Discover an org we can access via getOrgs; the caller's token must
      // belong to at least one org.
      const effect = Effect.gen(function* () {
        const orgs = yield* getOrgs({});
        if (orgs.length === 0) {
          throw new Error(
            "Test prerequisite: the caller must belong to at least one axiom org.",
          );
        }

        const target = orgs[0]!;
        const fetched = yield* getOrg({ id: target.id });

        expect(fetched.id).toBe(target.id);
        expect(fetched.name).toBe(target.name);
        expect(typeof fetched.primaryEmail).toBe("string");
        expect([
          "personal",
          "basicDirect",
          "teamMonthlyDirect",
          "teamMonthlyAws",
          "axiomCloud",
          "teamPlus",
          "enterprise",
          "comped",
        ]).toContain(fetched.plan);
      });

      await runEffect(effect);
    },
    { timeout: 30_000 },
  );

  it(
    "returns InternalServerError for an org id that does not exist",
    async () => {
      // Probed live: axiom's /v2/orgs/{id} returns 500 (not 404) when the
      // id does not exist. Document the observed behaviour rather than
      // pretending 404 is reachable.
      const error = await runEffect(
        getOrg({ id: `doesnotexist-${testRunId}` }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("InternalServerError");
    },
    { timeout: 30_000 },
  );
});
