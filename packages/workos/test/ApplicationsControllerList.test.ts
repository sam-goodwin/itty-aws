import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { ApplicationsControllerList } from "../src/operations/ApplicationsControllerList.ts";
import { runEffect } from "./setup.ts";

describe("ApplicationsControllerList", () => {
  it(
    "lists Connect Applications",
    async () => {
      const result = await runEffect(
        ApplicationsControllerList({ limit: 10 }),
      );

      expect(result).toBeDefined();
      expect(typeof result.object).toBe("string");
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.list_metadata).toBeDefined();

      for (const app of result.data) {
        expect(typeof app.id).toBe("string");
        expect(typeof app.client_id).toBe("string");
        expect(typeof app.name).toBe("string");
        expect(Array.isArray(app.scopes)).toBe(true);
        expect(typeof app.created_at).toBe("string");
        expect(typeof app.updated_at).toBe("string");
      }
    },
    { timeout: 30_000 },
  );

  it(
    "fails with UnprocessableEntity when the organization_id is malformed",
    async () => {
      const error = await runEffect(
        ApplicationsControllerList({
          organization_id: "not a valid org id!!",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("UnprocessableEntity");
    },
    { timeout: 30_000 },
  );
});
