import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRoleAssignmentsControllerListRoleAssignments } from "../src/operations/AuthorizationRoleAssignmentsControllerListRoleAssignments.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRoleAssignmentsControllerListRoleAssignments", () => {
  it(
    "lists role assignments for an organization membership",
    async () => {
      const result = await runEffect(
        AuthorizationRoleAssignmentsControllerListRoleAssignments({
          organization_membership_id: `om_${testRunId}`,
          limit: 10,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent organization membership id",
    async () => {
      const error = await runEffect(
        AuthorizationRoleAssignmentsControllerListRoleAssignments({
          organization_membership_id: `om_does_not_exist_${testRunId}`,
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
        AuthorizationRoleAssignmentsControllerListRoleAssignments({
          organization_membership_id: "om_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
