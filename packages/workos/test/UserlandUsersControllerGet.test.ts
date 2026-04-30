import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { UserlandUsersControllerGet } from "../src/operations/UserlandUsersControllerGet.ts";
import { UserlandUsersControllerList } from "../src/operations/UserlandUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("UserlandUsersControllerGet", () => {
  it(
    "fetches a user by id",
    async () => {
      const users = await runEffect(UserlandUsersControllerList({ limit: 1 }));

      if (users.data.length === 0) {
        const error = await runEffect(
          UserlandUsersControllerGet({
            id: `user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = users.data[0] as { id: string };
      const result = await runEffect(
        UserlandUsersControllerGet({ id: seed.id }),
      );
      expect(result).toBeDefined();
      expect(result.id).toBe(seed.id);
      expect(typeof result.email).toBe("string");
      expect(typeof result.email_verified).toBe("boolean");
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.updated_at).toBe("string");
    },
    { timeout: 60_000 },
  );

  it(
    "fails with NotFound for a non-existent user id",
    async () => {
      const error = await runEffect(
        UserlandUsersControllerGet({
          id: `user_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );
});
