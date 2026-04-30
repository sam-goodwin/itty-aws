import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { DirectoriesControllerList } from "../src/operations/DirectoriesControllerList.ts";
import { runEffect } from "./setup.ts";

describe("DirectoriesControllerList", () => {
  it(
    "lists directories",
    async () => {
      const result = await runEffect(
        DirectoriesControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const dir of result.data) {
        expect(typeof dir.id).toBe("string");
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
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with Forbidden when filtering by an organization in a different tenant",
    async () => {
      const error = await runEffect(
        DirectoriesControllerList({
          organization_id: "org_01HFGZ6QYV0000000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("Forbidden");
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the organization_id is malformed",
    async () => {
      const error = await runEffect(
        DirectoriesControllerList({
          organization_id: "not a valid org id!!",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
