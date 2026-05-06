import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRolesControllerCreate } from "../src/operations/AuthorizationRolesControllerCreate.ts";
import { AuthorizationRolesControllerUpdate } from "../src/operations/AuthorizationRolesControllerUpdate.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRolesControllerUpdate", () => {
  it(
    "updates an environment role",
    async () => {
      const slug = `role_update_${testRunId}`;

      // Seed: create the role.
      await runEffect(
        AuthorizationRolesControllerCreate({
          slug,
          name: `Update Seed ${testRunId}`,
        }),
      );

      const updated = await runEffect(
        AuthorizationRolesControllerUpdate({
          slug,
          name: `Updated Name ${testRunId}`,
          description: `Updated description ${testRunId}`,
        }),
      );

      expect(updated).toBeDefined();
      expect(updated.slug).toBe(slug);
      expect(updated.name).toBe(`Updated Name ${testRunId}`);
      expect(updated.description).toBe(`Updated description ${testRunId}`);
      expect(["EnvironmentRole", "OrganizationRole"]).toContain(updated.type);
      expect(typeof updated.resource_type_slug).toBe("string");
      expect(Array.isArray(updated.permissions)).toBe(true);
      expect(typeof updated.created_at).toBe("string");
      expect(typeof updated.updated_at).toBe("string");
    },
    30_000,
  );

  it(
    "fails with BadRequest when the request body is malformed",
    async () => {
      const error = await runEffect(
        AuthorizationRolesControllerUpdate({
          slug: `role_bad_request_${testRunId}`,
          name: "",
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
        AuthorizationRolesControllerUpdate({
          slug: `role_does_not_exist_${testRunId}`,
          name: `Whatever ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    30_000,
  );

  it(
    "fails with Forbidden when updating a role the caller cannot modify",
    async () => {
      const error = await runEffect(
        AuthorizationRolesControllerUpdate({
          slug: `role_forbidden_${testRunId}`,
          name: `Forbidden ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    30_000,
  );

});
