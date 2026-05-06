import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryUsersControllerFind } from "../src/operations/DirectoryUsersControllerFind.ts";
import { DirectoryUsersControllerList } from "../src/operations/DirectoryUsersControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DirectoryUsersControllerFind", () => {
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
    30_000,
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
    30_000,
  );
});
