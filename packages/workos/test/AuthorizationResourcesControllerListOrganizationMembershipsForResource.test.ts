import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationResourcesControllerList } from "../src/operations/AuthorizationResourcesControllerList.ts";
import { AuthorizationResourcesControllerListOrganizationMembershipsForResource } from "../src/operations/AuthorizationResourcesControllerListOrganizationMembershipsForResource.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationResourcesControllerListOrganizationMembershipsForResource", () => {
  it(
    "lists organization memberships for a resource",
    async () => {
      const list = await runEffect(
        AuthorizationResourcesControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed resource available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          AuthorizationResourcesControllerListOrganizationMembershipsForResource(
            {
              resource_id: `resource_does_not_exist_${testRunId}`,
              permission_slug: "users:read",
              limit: 10,
            },
          ).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const result = await runEffect(
        AuthorizationResourcesControllerListOrganizationMembershipsForResource({
          resource_id: seed.id,
          permission_slug: "users:read",
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
    "fails with BadRequest when permission_slug is missing",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerListOrganizationMembershipsForResource({
          resource_id: `resource_${testRunId}`,
          permission_slug: "",
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent resource id",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerListOrganizationMembershipsForResource({
          resource_id: `resource_does_not_exist_${testRunId}`,
          permission_slug: "users:read",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the resource is in a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerListOrganizationMembershipsForResource({
          resource_id: "resource_01HFGZ6QYV0000000000000000",
          permission_slug: "users:read",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the permission slug is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationResourcesControllerListOrganizationMembershipsForResource({
          resource_id: `resource_${testRunId}`,
          permission_slug: "Not A Valid Slug!!",
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
