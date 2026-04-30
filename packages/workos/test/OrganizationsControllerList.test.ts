import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { OrganizationsControllerList } from "../src/operations/OrganizationsControllerList.ts";
import { runEffect } from "./setup.ts";

describe("OrganizationsControllerList", () => {
  it("lists organizations with a limit", async () => {
    const result = await runEffect(
      OrganizationsControllerList({ limit: 5 }),
    );
    expect(result).toBeDefined();
    expect(result.object).toBe("list");
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data.length).toBeLessThanOrEqual(5);
    expect(result.list_metadata).toBeDefined();
    for (const org of result.data) {
      expect(typeof org.id).toBe("string");
      expect(typeof org.name).toBe("string");
      expect(Array.isArray(org.domains)).toBe(true);
    }
  }, { timeout: 30_000 });

  it("fails with UnprocessableEntity when limit exceeds the maximum", async () => {
    const error = await runEffect(
      OrganizationsControllerList({ limit: 1000 }).pipe(Effect.flip),
    );
    expect(error._tag).toBe("UnprocessableEntity");
  }, { timeout: 30_000 });
});
