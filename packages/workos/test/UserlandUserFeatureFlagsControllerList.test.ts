import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUserFeatureFlagsControllerList } from "../src/operations/UserlandUserFeatureFlagsControllerList.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUserFeatureFlagsControllerList", () => {
  it(
    "lists feature flags for an existing user",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          UserlandUserFeatureFlagsControllerList({
            userId: `user_does_not_exist_${testRunId}`,
            limit: 5,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        UserlandUserFeatureFlagsControllerList({ userId: seed.id, limit: 5 }),
      );
      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
      for (const flag of result.data) {
        expect(typeof flag.id).toBe("string");
        expect(typeof flag.slug).toBe("string");
        expect(typeof flag.name).toBe("string");
        expect(typeof flag.enabled).toBe("boolean");
        expect(typeof flag.default_value).toBe("boolean");
        expect(Array.isArray(flag.tags)).toBe(true);
        expect(typeof flag.created_at).toBe("string");
        expect(typeof flag.updated_at).toBe("string");
      }
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUserFeatureFlagsControllerList({
          userId: `user_does_not_exist_${testRunId}`,
          limit: 5,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
