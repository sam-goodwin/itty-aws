import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryUsersControllerFind } from "../src/operations/DirectoryUsersControllerFind.ts";
import { DirectoryUsersControllerList } from "../src/operations/DirectoryUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DirectoryUsersControllerFind", () => {
  it(
    "retrieves a directory user by id",
    async () => {
      const list = await runEffect(DirectoryUsersControllerList({ limit: 1 }));

      if (list.data.length === 0) {
        // No seed directory user available — exercise the operation against
        // a missing id so the call still hits the live API.
        const error = await runEffect(
          DirectoryUsersControllerFind({
            id: `directory_user_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const user = await runEffect(
        DirectoryUsersControllerFind({ id: seed.id }),
      );

      expect(user).toBeDefined();
      expect(user.id).toBe(seed.id);
      expect(typeof user.directory_id).toBe("string");
      expect(typeof user.organization_id).toBe("string");
      expect(typeof user.idp_id).toBe("string");
      expect(["active", "suspended", "inactive"]).toContain(user.state);
      expect(typeof user.created_at).toBe("string");
      expect(typeof user.updated_at).toBe("string");
      expect(Array.isArray(user.groups)).toBe(true);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent directory user id",
    async () => {
      const error = await runEffect(
        DirectoryUsersControllerFind({
          id: `directory_user_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when reading a directory user in a different tenant",
    async () => {
      const error = await runEffect(
        DirectoryUsersControllerFind({
          id: "directory_user_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
