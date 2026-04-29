import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationRolesControllerList } from "../src/operations/AuthorizationRolesControllerList.ts";
import { runEffect } from "./setup.ts";

describe("AuthorizationRolesControllerList", () => {
  it(
    "lists environment roles",
    async () => {
      const result = await runEffect(AuthorizationRolesControllerList({}));

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);

      for (const role of result.data) {
        expect(typeof role.id).toBe("string");
        expect(typeof role.slug).toBe("string");
        expect(typeof role.name).toBe("string");
        expect(typeof role.resource_type_slug).toBe("string");
        expect(["EnvironmentRole", "OrganizationRole"]).toContain(role.type);
        expect(Array.isArray(role.permissions)).toBe(true);
        expect(typeof role.created_at).toBe("string");
        expect(typeof role.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when the caller is not allowed to list roles",
    async () => {
      const error = await runEffect(
        AuthorizationRolesControllerList({}).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );
});
