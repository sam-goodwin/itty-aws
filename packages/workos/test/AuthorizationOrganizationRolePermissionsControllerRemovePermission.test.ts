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
    "removes a permission from a custom role",
    async () => {
      const role = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-remove-${testRunId}`,
          });

          const slug = `perms_remove_role_${testRunId}`;
          const permissionSlug = "users:read";

          yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug,
            name: `Perms Remove Role ${testRunId}`,
          });

          yield* AuthorizationOrganizationRolePermissionsControllerSetPermissions(
            {
              organizationId: org.id,
              slug,
              permissions: [permissionSlug],
            },
          );

          return yield* AuthorizationOrganizationRolePermissionsControllerRemovePermission(
            {
              organizationId: org.id,
              slug,
              permissionSlug,
            },
          ).pipe(
            Effect.ensuring(
              AuthorizationOrganizationRolesControllerDelete({
                organizationId: org.id,
                slug,
              }).pipe(Effect.ignore),
            ),
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }),
      );

      expect(role).toBeDefined();
      expect(role.slug).toBe(`perms_remove_role_${testRunId}`);
      expect(Array.isArray(role.permissions)).toBe(true);
      expect(role.permissions).not.toContain("users:read");
    },
    { timeout: 60_000 },
  );

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
    { timeout: 60_000 },
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
    { timeout: 30_000 },
  );
});
