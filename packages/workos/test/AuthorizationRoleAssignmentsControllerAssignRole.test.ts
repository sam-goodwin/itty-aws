import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRoleAssignmentsControllerAssignRole } from "../src/operations/AuthorizationRoleAssignmentsControllerAssignRole.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRoleAssignmentsControllerAssignRole", () => {
  it(
    "fails with NotFound for a non-existent organization membership id",
    async () => {
      const error = await runEffect(
        AuthorizationRoleAssignmentsControllerAssignRole({
          organization_membership_id: `om_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    30_000,
  );

  it(
    "fails with Forbidden when the membership belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationRoleAssignmentsControllerAssignRole({
          organization_membership_id: "om_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "UnprocessableEntity"]).toContain(error._tag);
    },
    30_000,
  );

  it(
    "fails with UnprocessableEntity when the membership id is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationRoleAssignmentsControllerAssignRole({
          organization_membership_id: `not-a-real-id-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    30_000,
  );
});
