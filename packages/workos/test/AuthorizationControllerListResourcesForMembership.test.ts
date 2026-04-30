import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationControllerListResourcesForMembership } from "../src/operations/AuthorizationControllerListResourcesForMembership.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationControllerListResourcesForMembership", () => {
  it(
    "lists resources for an organization membership",
    async () => {
      const result = await runEffect(
        AuthorizationControllerListResourcesForMembership({
          organization_membership_id: `om_${testRunId}`,
          permission_slug: "read",
          parent_resource_id: `resource_${testRunId}`,
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
    "fails with BadRequest when neither parent_resource_id nor parent_resource_external_id+slug are provided",
    async () => {
      const error = await runEffect(
        AuthorizationControllerListResourcesForMembership({
          organization_membership_id: `om_${testRunId}`,
          permission_slug: "read",
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent organization membership id",
    async () => {
      const error = await runEffect(
        AuthorizationControllerListResourcesForMembership({
          organization_membership_id: `om_does_not_exist_${testRunId}`,
          permission_slug: "read",
          parent_resource_id: `resource_${testRunId}`,
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
        AuthorizationControllerListResourcesForMembership({
          organization_membership_id: "om_01HFGZ6QYV0000000000000000",
          permission_slug: "read",
          parent_resource_id: "resource_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when both parent_resource_id and parent_resource_external_id are provided",
    async () => {
      const error = await runEffect(
        AuthorizationControllerListResourcesForMembership({
          organization_membership_id: `om_${testRunId}`,
          permission_slug: "read",
          parent_resource_id: `resource_${testRunId}`,
          parent_resource_external_id: `external_${testRunId}`,
          parent_resource_type_slug: "workspace",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
