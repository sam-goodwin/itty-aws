import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolesControllerCreate } from "../src/operations/AuthorizationOrganizationRolesControllerCreate.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { AuthorizationOrganizationRolesControllerGet } from "../src/operations/AuthorizationOrganizationRolesControllerGet.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolesControllerGet", () => {
  it(
    "retrieves a custom role for an organization by slug",
    async () => {
      const role = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-get-${testRunId}`,
          });

          const slug = `get_role_${testRunId}`;

          yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug,
            name: `Get Role ${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerGet({
            organizationId: org.id,
            slug,
          }).pipe(
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
      expect(typeof role.id).toBe("string");
      expect(role.slug).toBe(`get_role_${testRunId}`);
      expect(role.name).toBe(`Get Role ${testRunId}`);
      expect(role.type).toBe("OrganizationRole");
      expect(Array.isArray(role.permissions)).toBe(true);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-get-404-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerGet({
            organizationId: org.id,
            slug: `does_not_exist_${testRunId}`,
          }).pipe(
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
        AuthorizationOrganizationRolesControllerGet({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          slug: `some_role_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
