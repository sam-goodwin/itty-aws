import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { updateUserRole } from "../src/operations/v2/updateUserRole";
import { runEffect, testRunId } from "./setup";

// All happy-path / "needs a role-id" scenarios are removed: the test
// account has no RBAC roles (listRoles returns `[]`), so we cannot seed a
// user with a role and we cannot target an existing role id in the update
// body. The "role id does not exist" probe is the only scenario that is
// reachable without fixtures.

describe("updateUserRole", () => {
  it(
    "returns NotFound for a user id that does not exist",
    async () => {
      const error = await runEffect(
        updateUserRole({
          id: `doesnotexist-${testRunId}`,
          role: `doesnotexist-role-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect((error as { _tag: string })._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
