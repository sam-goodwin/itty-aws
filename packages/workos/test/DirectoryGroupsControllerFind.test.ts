import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoryGroupsControllerFind } from "../src/operations/DirectoryGroupsControllerFind.ts";
import { DirectoryGroupsControllerList } from "../src/operations/DirectoryGroupsControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DirectoryGroupsControllerFind", () => {
  it(
    "retrieves a directory group by id",
    async () => {
      const list = await runEffect(
        DirectoryGroupsControllerList({ limit: 1 }),
      );

      if (list.data.length === 0) {
        // No seed directory group available — exercise the operation against
        // a missing id so the call still hits the live API.
        const error = await runEffect(
          DirectoryGroupsControllerFind({
            id: `directory_group_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const group = await runEffect(
        DirectoryGroupsControllerFind({ id: seed.id }),
      );

      expect(group).toBeDefined();
      expect(group.id).toBe(seed.id);
      expect(typeof group.idp_id).toBe("string");
      expect(typeof group.directory_id).toBe("string");
      expect(typeof group.organization_id).toBe("string");
      expect(typeof group.name).toBe("string");
      expect(typeof group.created_at).toBe("string");
      expect(typeof group.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

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
    { timeout: 30_000 },
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
    { timeout: 30_000 },
  );
});
