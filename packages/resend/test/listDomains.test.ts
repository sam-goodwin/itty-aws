import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listDomains } from "../src/operations/listDomains";
import { runEffect } from "./setup";

describe("listDomains", () => {
  it("returns a paginated list of domains", async () => {
    const result = await runEffect(listDomains({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("respects the limit parameter", async () => {
    const result = await runEffect(listDomains({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with BadRequest for an invalid pagination cursor", async () => {
    const error = await runEffect(
      listDomains({ after: "not-a-real-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
  });
});
