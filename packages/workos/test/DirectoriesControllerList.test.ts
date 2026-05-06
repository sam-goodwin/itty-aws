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
    30_000,
  );

});
