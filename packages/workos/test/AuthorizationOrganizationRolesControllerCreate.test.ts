import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationOrganizationRolesControllerCreate } from "../src/operations/AuthorizationOrganizationRolesControllerCreate.ts";
import { AuthorizationOrganizationRolesControllerDelete } from "../src/operations/AuthorizationOrganizationRolesControllerDelete.ts";
import { OrganizationsControllerCreate } from "../src/operations/OrganizationsControllerCreate.ts";
import { OrganizationsControllerDeleteOrganization } from "../src/operations/OrganizationsControllerDeleteOrganization.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationOrganizationRolesControllerCreate", () => {
  it(
    "creates a custom role for an organization",
    async () => {
      const role = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-create-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug: `custom_role_${testRunId}`,
            name: `Custom Role ${testRunId}`,
            description: "Test role created by distilled SDK tests",
          }).pipe(
            Effect.ensuring(
              AuthorizationOrganizationRolesControllerDelete({
                organizationId: org.id,
                slug: `custom_role_${testRunId}`,
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
      expect(role.slug).toBe(`custom_role_${testRunId}`);
      expect(role.name).toBe(`Custom Role ${testRunId}`);
      expect(role.type).toBe("OrganizationRole");
      expect(Array.isArray(role.permissions)).toBe(true);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with BadRequest when name is empty",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-400-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            name: "",
          }).pipe(
            Effect.ensuring(
              OrganizationsControllerDeleteOrganization({ id: org.id }).pipe(
                Effect.ignore,
              ),
            ),
          );
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent organization id",
    async () => {
      const error = await runEffect(
        AuthorizationOrganizationRolesControllerCreate({
          organizationId: `org_does_not_exist_${testRunId}`,
          name: `Role ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the organization belongs to a different tenant",
    async () => {
      const error = await runEffect(
        AuthorizationOrganizationRolesControllerCreate({
          organizationId: "org_01HFGZ6QYV0000000000000000",
          name: `Role ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Conflict when creating a role with a duplicate slug",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-409-${testRunId}`,
          });

          const slug = `dup_role_${testRunId}`;

          yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug,
            name: `First ${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug,
            name: `Second ${testRunId}`,
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
        }).pipe(Effect.flip),
      );

      expect(["Conflict", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 60_000 },
  );

  it(
    "fails with UnprocessableEntity when slug has invalid format",
    async () => {
      const error = await runEffect(
        Effect.gen(function* () {
          const org = yield* OrganizationsControllerCreate({
            name: `distilled-workos-roles-422-${testRunId}`,
          });

          return yield* AuthorizationOrganizationRolesControllerCreate({
            organizationId: org.id,
            slug: "Invalid Slug With Spaces!!!",
            name: `Role ${testRunId}`,
          }).pipe(
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
