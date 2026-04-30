import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationControllerListEffectivePermissionsByExternalId } from "../src/operations/AuthorizationControllerListEffectivePermissionsByExternalId.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationControllerListEffectivePermissionsByExternalId", () => {
  it(
    "lists effective permissions for an organization membership on a resource by external id",
    async () => {
      const result = await runEffect(
        AuthorizationControllerListEffectivePermissionsByExternalId({
          organization_membership_id: `om_${testRunId}`,
          resource_type_slug: "workspace",
          external_id: `external_${testRunId}`,
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
        AuthorizationControllerListEffectivePermissionsByExternalId({
          organization_membership_id: `om_does_not_exist_${testRunId}`,
          resource_type_slug: "workspace",
          external_id: `external_${testRunId}`,
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
        AuthorizationControllerListEffectivePermissionsByExternalId({
          organization_membership_id: "om_01HFGZ6QYV0000000000000000",
          resource_type_slug: "workspace",
          external_id: "external_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the membership id is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationControllerListEffectivePermissionsByExternalId({
          organization_membership_id: `not-a-real-id-${testRunId}`,
          resource_type_slug: "workspace",
          external_id: `external_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
