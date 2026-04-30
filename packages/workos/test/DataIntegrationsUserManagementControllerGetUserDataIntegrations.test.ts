import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DataIntegrationsUserManagementControllerGetUserDataIntegrations } from "../src/operations/DataIntegrationsUserManagementControllerGetUserDataIntegrations.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DataIntegrationsUserManagementControllerGetUserDataIntegrations", () => {
  it(
    "lists configured data providers for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          DataIntegrationsUserManagementControllerGetUserDataIntegrations({
            user_id: `user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        DataIntegrationsUserManagementControllerGetUserDataIntegrations({
          user_id: seed.id,
        }),
      );
      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      for (const provider of result.data) {
        expect(typeof provider.id).toBe("string");
        expect(typeof provider.name).toBe("string");
        expect(typeof provider.slug).toBe("string");
        expect(typeof provider.integration_type).toBe("string");
        expect(typeof provider.credentials_type).toBe("string");
        expect(["userland_user", "organization"]).toContain(provider.ownership);
        expect(typeof provider.created_at).toBe("string");
        expect(typeof provider.updated_at).toBe("string");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        DataIntegrationsUserManagementControllerGetUserDataIntegrations({
          user_id: `user_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
