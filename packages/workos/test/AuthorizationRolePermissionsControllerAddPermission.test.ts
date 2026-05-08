import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRolePermissionsControllerAddPermission } from "../src/operations/AuthorizationRolePermissionsControllerAddPermission.ts";
import { AuthorizationRolesControllerCreate } from "../src/operations/AuthorizationRolesControllerCreate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRolePermissionsControllerAddPermission", () => {
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
    30_000,
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
    30_000,
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
    30_000,
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
    30_000,
  );
});
