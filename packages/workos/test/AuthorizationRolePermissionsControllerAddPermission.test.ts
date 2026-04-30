import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRolePermissionsControllerAddPermission } from "../src/operations/AuthorizationRolePermissionsControllerAddPermission.ts";
import { AuthorizationRolesControllerCreate } from "../src/operations/AuthorizationRolesControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRolePermissionsControllerAddPermission", () => {
  it(
    "adds a permission to an environment role",
    async () => {
      const slug = `role_addperm_${testRunId}`;

      // Seed: create the role.
      await runEffect(
        AuthorizationRolesControllerCreate({
          slug,
          name: `Add Permission Seed ${testRunId}`,
        }),
      );

      const result = await runEffect(
        AuthorizationRolePermissionsControllerAddPermission({ slug }),
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
    "fails with BadRequest when the request body is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerAddPermission({
          slug: `role_bad_request_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["BadRequest", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerAddPermission({
          slug: `role_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the caller cannot modify the role",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerAddPermission({
          slug: `role_forbidden_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when targeting the built-in admin role",
    async () => {
      const error = await runEffect(
        AuthorizationRolePermissionsControllerAddPermission({
          slug: "admin",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
