import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolesControllerCreate } from "../src/operations/AuthorizationOrganizationRolesControllerCreate.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { AuthorizationOrganizationRolesControllerGet } from "../src/operations/AuthorizationOrganizationRolesControllerGet.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolesControllerDelete", () => {
  it(
    "deletes a custom role for an organization",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-delete-${testRunId}`,
          });

          const slug = `delete_role_${testRunId}`;

          yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug,
            name: `Delete Role ${testRunId}`,
          });

          yield* AuthorizationOrganizationRolesControllerDelete({
            organizationId: org.id,
            slug,
          });

          return yield* AuthorizationOrganizationRolesControllerGet({
            organizationId: org.id,
            slug,
          })
            .pipe(Effect.flip)
            .pipe(
              Effect.ensuring(
                OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                  Effect.ignore,
                ),
              ),
            );
        }),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when the role slug is empty",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-delete-400-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerDelete({
            organizationId: org.id,
            slug: "",
          }).pipe(
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
            name: `distilled-workos-roles-delete-404-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerDelete({
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
        AuthorizationOrganizationRolesControllerDelete({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          slug: `some_role_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when deleting a built-in environment role",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-delete-409-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerDelete({
            organizationId: org.id,
            slug: "admin",
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(["Conflict", "NotFound"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );
});
