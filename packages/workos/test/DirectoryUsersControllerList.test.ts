import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryUsersControllerList } from "../src/operations/DirectoryUsersControllerList.ts";
import { runEffect } from "./setup.ts";

describe("DirectoryUsersControllerList", () => {
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
    30_000,
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
    30_000,
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
    30_000,
  );
});
