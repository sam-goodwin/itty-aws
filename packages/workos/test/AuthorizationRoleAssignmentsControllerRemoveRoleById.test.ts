import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRoleAssignmentsControllerRemoveRoleById } from "../src/operations/AuthorizationRoleAssignmentsControllerRemoveRoleById.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRoleAssignmentsControllerRemoveRoleById", () => {
  it(
    "removes a role assignment by id for an organization membership",
    async () => {
      const result = await runEffect(
        AuthorizationRoleAssignmentsControllerRemoveRoleById({
          organization_membership_id: `om_${testRunId}`,
          role_assignment_id: `ra_${testRunId}`,
        }),
      );

      expect(result).toBeUndefined();
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent role assignment id",
    async () => {
      const error = await runEffect(
        AuthorizationRoleAssignmentsControllerRemoveRoleById({
          organization_membership_id: `om_${testRunId}`,
          role_assignment_id: `ra_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the membership belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationRoleAssignmentsControllerRemoveRoleById({
          organization_membership_id: "om_01HFGZ6QYV0000000000000000",
          role_assignment_id: "ra_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
