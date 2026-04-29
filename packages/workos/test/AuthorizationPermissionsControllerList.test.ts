import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { AuthorizationPermissionsControllerList } from "../src/operations/AuthorizationPermissionsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("AuthorizationPermissionsControllerList", () => {
  it(
    "lists permissions in the WorkOS environment",
    async () => {
      const result = await runEffect(
        AuthorizationPermissionsControllerList({
          limit: 5,
        }),
      );

      expect(result).toBeDefined();
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();
      for (const permission of result.data) {
        expect(typeof permission.id).toBe("string");
        expect(typeof permission.slug).toBe("string");
        expect(typeof permission.system).toBe("boolean");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when paginating with a non-existent cursor",
    async () => {
      const error = await runEffect(
        AuthorizationPermissionsControllerList({
          after: `permission_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
