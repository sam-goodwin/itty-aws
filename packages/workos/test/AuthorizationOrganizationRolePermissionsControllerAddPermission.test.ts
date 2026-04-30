import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolePermissionsControllerAddPermission } from "../src/operations/AuthorizationOrganizationRolePermissionsControllerAddPermission.ts";
import { AuthorizationOrganizationRolesControllerCreate } from "../src/operations/AuthorizationOrganizationRolesControllerCreate.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolePermissionsControllerAddPermission", () => {
  it(
    "adds a permission to a custom role",
    async () => {
      const role = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-add-${testRunId}`,
          });

          const slug = `perms_add_role_${testRunId}`;

          yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug,
            name: `Perms Add Role ${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerAddPermission(
            {
              organizationId: org.id,
              slug,
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
      expect(role.slug).toBe(`perms_add_role_${testRunId}`);
      expect(Array.isArray(role.permissions)).toBe(true);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when the role slug is empty",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-add-400-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerAddPermission(
            {
              organizationId: org.id,
              slug: "",
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

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-add-404-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerAddPermission(
            {
              organizationId: org.id,
              slug: `does_not_exist_${testRunId}`,
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

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with Forbidden when the organization belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationOrganizationRolePermissionsControllerAddPermission({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          slug: `some_role_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when adding a permission to a built-in environment role",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-add-422-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerAddPermission(
            {
              organizationId: org.id,
              slug: "admin",
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

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 60_000 },
  );
});
