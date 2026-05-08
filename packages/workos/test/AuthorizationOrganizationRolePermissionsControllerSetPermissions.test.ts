import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolePermissionsControllerSetPermissions } from "../src/operations/AuthorizationOrganizationRolePermissionsControllerSetPermissions.ts";
import { AuthorizationOrganizationRolesControllerCreate } from "../src/operations/AuthorizationOrganizationRolesControllerCreate.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolePermissionsControllerSetPermissions", () => {
  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-set-404-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerSetPermissions(
            {
              organizationId: org.id,
              slug: `does_not_exist_${testRunId}`,
              permissions: [],
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
        AuthorizationOrganizationRolePermissionsControllerSetPermissions({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          slug: `some_role_${testRunId}`,
          permissions: [],
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    30_000,
  );

  it(
    "fails with UnprocessableEntity when setting permissions on a built-in environment role",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-role-perms-set-422-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolePermissionsControllerSetPermissions(
            {
              organizationId: org.id,
              slug: "admin",
              permissions: [],
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
    60_000,
  );
});
