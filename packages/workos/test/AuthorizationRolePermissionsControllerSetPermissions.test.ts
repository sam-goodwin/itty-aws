import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRolePermissionsControllerSetPermissions } from "../src/operations/AuthorizationRolePermissionsControllerSetPermissions.ts";
import { AuthorizationRolesControllerCreate } from "../src/operations/AuthorizationRolesControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRolePermissionsControllerSetPermissions", () => {
  it(
    "replaces the permissions on an environment role",
    async () => {
      const slug = `role_setperms_${testRunId}`;

      // Seed: create the role.
      await runEffect(
        AuthorizationRolesControllerCreate({
          slug,
          name: `Set Permissions Seed ${testRunId}`,
        }),
      );

      const result = await runEffect(
        AuthorizationRolePermissionsControllerSetPermissions({
          slug,
          permissions: ["users:read"],
        }),
      );

      expect(result).toBeDefined();
      expect(result.slug).toBe(slug);
      expect(typeof result.id).toBe("string");
      expect(typeof result.name).toBe("string");
      expect(["EnvironmentRole", "OrganizationRole"]).toContain(result.type);
      expect(typeof result.resource_type_slug).toBe("string");
      expect(Array.isArray(result.permissions)).toBe(true);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with BadRequest when permissions is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerSetPermissions({
          slug: `role_bad_request_${testRunId}`,
          permissions: [""],
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerSetPermissions({
          slug: `role_does_not_exist_${testRunId}`,
          permissions: ["users:read"],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the caller cannot modify the role",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerSetPermissions({
          slug: `role_forbidden_${testRunId}`,
          permissions: ["users:read"],
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when targeting the built-in admin role",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerSetPermissions({
          slug: "admin",
          permissions: ["users:read"],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
