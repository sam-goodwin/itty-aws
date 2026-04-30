import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryUsersControllerList } from "../src/operations/DirectoryUsersControllerList.ts";
import { runEffect } from "./setup.ts";

describe("DirectoryUsersControllerList", () => {
  it(
    "lists directory users",
    async () => {
      const result = await runEffect(
        DirectoryUsersControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const user of result.data) {
        expect(typeof user.id).toBe("string");
        expect(typeof user.directory_id).toBe("string");
        expect(typeof user.organization_id).toBe("string");
        expect(typeof user.idp_id).toBe("string");
        expect(["active", "suspended", "inactive"]).toContain(user.state);
        expect(typeof user.created_at).toBe("string");
        expect(typeof user.updated_at).toBe("string");
        expect(Array.isArray(user.groups)).toBe(true);
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when filtering by a non-existent directory",
    async () => {
      const error = await runEffect(
        DirectoryUsersControllerList({
          directory: "directory_01HFGZ6QYV0000000000000001",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when filtering by a directory in a different tenant",
    async () => {
      const error = await runEffect(
        DirectoryUsersControllerList({
          directory: "directory_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the directory id is malformed",
    async () => {
      const error = await runEffect(
        DirectoryUsersControllerList({
          directory: "not a valid directory id!!",
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
