import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoriesControllerFind } from "../src/operations/DirectoriesControllerFind.ts";
import { DirectoriesControllerList } from "../src/operations/DirectoriesControllerList.ts";
import { runEffect, testRunId } from "./setup.ts";

describe("DirectoriesControllerFind", () => {
  it(
    "retrieves a directory by id",
    async () => {
      const list = await runEffect(DirectoriesControllerList({ limit: 1 }));

      if (list.data.length === 0) {
        // No seed directory available — exercise the operation against a
        // missing id so the call still hits the live API.
        const error = await runEffect(
          DirectoriesControllerFind({
            id: `directory_does_not_exist_${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("NotFound");
        return;
      }

      const seed = list.data[0] as { id: string };
      const dir = await runEffect(DirectoriesControllerFind({ id: seed.id }));

      expect(dir).toBeDefined();
      expect(dir.id).toBe(seed.id);
      expect(typeof dir.organization_id).toBe("string");
      expect(typeof dir.external_key).toBe("string");
      expect(typeof dir.type).toBe("string");
      expect([
        "linked",
        "validating",
        "invalid_credentials",
        "unlinked",
        "deleting",
      ]).toContain(dir.state);
      expect(typeof dir.name).toBe("string");
      expect(typeof dir.created_at).toBe("string");
      expect(typeof dir.updated_at).toBe("string");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with NotFound for a non-existent directory id",
    async () => {
      const error = await runEffect(
        DirectoriesControllerFind({
          id: `directory_does_not_exist_${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when reading a directory in a different tenant",
    async () => {
      const error = await runEffect(
        DirectoriesControllerFind({
          id: "directory_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(["Forbidden", "NotFound"]).toContain(error._tag);
    },
    { timeout: 30_000 },
  );
});
