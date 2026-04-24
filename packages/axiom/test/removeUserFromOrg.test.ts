import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { removeUserFromOrg } from "../src/operations/v2/removeUserFromOrg";
import { runEffect, testRunId } from "./setup";

// The happy-path test ("remove a user we just invited") is removed: the test
// account has no RBAC roles and has hit its user license limit, so
// createUser cannot seed a fixture for us to remove.
describe("removeUserFromOrg", () => {
  it(
    "returns InternalServerError for a user id that does not exist",
    async () => {
      // Probed live: axiom's DELETE /v2/users/{id} returns 500 (not 404)
      // when the id doesn't resolve. Document the observed behaviour.
      const error = await runEffect(
        removeUserFromOrg({ id: `doesnotexist-${testRunId}` }).pipe(
          Effect.flip,
        ),
      );

      expect((error as { _tag: string })._tag).toBe("InternalServerError");
    },
    { timeout: 30_000 },
  );
});
