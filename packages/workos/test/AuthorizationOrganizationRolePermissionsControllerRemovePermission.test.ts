import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolePermissionsControllerRemovePermission } from "../src/operations/AuthorizationOrganizationRolePermissionsControllerRemovePermission.ts";
import { AuthorizationOrganizationRolePermissionsControllerSetPermissions } from "../src/operations/AuthorizationOrganizationRolePermissionsControllerSetPermissions.ts";
import { AuthorizationOrganizationRolesControllerCreate } from "../src/operations/AuthorizationOrganizationRolesControllerCreate.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolePermissionsControllerRemovePermission", () => {
  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-remove-404-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerRemovePermission(
            {
              organizationId: org.id,
              slug: `does_not_exist_${testRunId}`,
              permissionSlug: "users:read",
            },
          ).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    60_000,
  );

  it(
    "fails with Forbidden when the organization belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationOrganizationRolePermissionsControllerRemovePermission({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          slug: `some_role_${testRunId}`,
          permissionSlug: "users:read",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    30_000,
  );
});
