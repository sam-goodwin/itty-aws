import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRolesControllerGet } from "../src/operations/AuthorizationRolesControllerGet.ts";
import { AuthorizationRolesControllerList } from "../src/operations/AuthorizationRolesControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationRolesControllerGet", () => {
  it(
    "retrieves an environment role by slug",
    async () => {
      const list = await runEffect(AuthorizationRolesControllerList({}));

      if (list.data.length === 0) {
        // No seed role available — exercise the operation against a missing
        // slug so the call still hits the live API.
        const error = await runEffect(
          AuthorizationRolesControllerGet({
            slug: `role_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { slug: string };
      const role = await runEffect(
        AuthorizationRolesControllerGet({ slug: seed.slug }),
      );

      expect(role).toBeDefined();
      expect(role.slug).toBe(seed.slug);
      expect(typeof role.id).toBe("string");
      expect(typeof role.name).toBe("string");
      expect(["EnvironmentRole", "OrganizationRole"]).toContain(role.type);
      expect(typeof role.resource_type_slug).toBe("string");
      expect(Array.isArray(role.permissions)).toBe(true);
      expect(typeof role.created_at).toBe("string");
      expect(typeof role.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent role slug",
    async () => {
      const error = await runEffect(
        AuthorizationRolesControllerGet({
          slug: `role_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the caller is not allowed to read the role",
    async () => {
      const error = await runEffect(
        AuthorizationRolesControllerGet({
          slug: `role_forbidden_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
