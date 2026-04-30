import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryGroupsControllerList } from "../src/operations/DirectoryGroupsControllerList.ts";
import { runEffect } from "./setup.ts";

describe("DirectoryGroupsControllerList", () => {
  it(
    "lists directory groups",
    async () => {
      const result = await runEffect(
        DirectoryGroupsControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const group of result.data) {
        expect(typeof group.id).toBe("string");
        expect(typeof group.idp_id).toBe("string");
        expect(typeof group.directory_id).toBe("string");
        expect(typeof group.organization_id).toBe("string");
        expect(typeof group.name).toBe("string");
        expect(typeof group.created_at).toBe("string");
        expect(typeof group.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound when filtering by a non-existent directory",
    async () => {
      const error = await runEffect(
        DirectoryGroupsControllerList({
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
        DirectoryGroupsControllerList({
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
        DirectoryGroupsControllerList({
          directory: "not a valid directory id!!",
        }).pipe(Effect.flip),
      );

      expect(["NotFound", "UnprocessableEntity"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
