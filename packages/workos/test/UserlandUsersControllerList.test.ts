import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect } from "./setup.ts";

describe("UserlandUsersControllerList", () => {
  it(
    "lists users with a small limit",
    async () => {
      const result = await runEffect(
        UserlandUsersControllerList({ limit: 5 }),
      );

      expect(result).toBeDefined();
      expect(result.object).toBe("list");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const user of result.data) {
        expect(typeof user.id).toBe("string");
        expect(typeof user.email).toBe("string");
        expect(typeof user.email_verified).toBe("boolean");
        expect(typeof user.created_at).toBe("string");
        expect(typeof user.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when limit exceeds the allowed maximum",
    async () => {
      // The API documents limit as between 1 and 100; 1000 violates that bound.
      const error = await runEffect(
        UserlandUsersControllerList({ limit: 1000 }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
