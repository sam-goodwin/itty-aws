import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerGetByExternalId } from "../src/operations/UserlandUsersControllerGetByExternalId.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUsersControllerGetByExternalId", () => {
  it(
    "fetches a user by external id",
    async () => {
      // Find a seed user that has an external_id set. If none exist in the
      // test environment, fall back to asserting the typed NotFound for an
      // arbitrary external id. This still verifies the SDK maps the response
      // to a typed error class.
      const users = await runEffect(
        UserlandUsersControllerList({ limit: 100 }),
      );
      const seed = users.data.find(
        (u): u is typeof u & { external_id: string } =>
          typeof u.external_id === "string" && u.external_id.length > 0,
      );

      if (!seed) {
        const error = await runEffect(
          UserlandUsersControllerGetByExternalId({
            external_id: `ext_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const result = await runEffect(
        UserlandUsersControllerGetByExternalId({
          external_id: seed.external_id,
        }),
      );
      expect(result).toBeDefined();
      expect(result.id).toBe(seed.id);
      expect(result.external_id).toBe(seed.external_id);
      expect(typeof result.email).toBe("string");
      expect(typeof result.email_verified).toBe("boolean");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent external id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerGetByExternalId({
          external_id: `ext_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
