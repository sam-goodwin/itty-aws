import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryGroupsControllerFind } from "../src/operations/DirectoryGroupsControllerFind.ts";
import { DirectoryGroupsControllerList } from "../src/operations/DirectoryGroupsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DirectoryGroupsControllerFind", () => {
  it(
    "fails with NotFound for a non-existent directory group id",
    async () => {
      const error = await runEffect(
        DirectoryGroupsControllerFind({
          id: `directory_group_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    30_000,
  );

  it(
    "fails with Forbidden when reading a directory group in a different tenant",
    async () => {
      const error = await runEffect(
        DirectoryGroupsControllerFind({
          id: "directory_group_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    30_000,
  );
});
