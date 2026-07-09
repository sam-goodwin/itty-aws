import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listApiKeys } from "../src/operations/listApiKeys";
import { runEffect } from "./setup";

describe("listApiKeys", () => {
  it("returns a paginated list of API keys", async () => {
    const result = await runEffect(listApiKeys({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("respects the limit parameter", async () => {
    const result = await runEffect(listApiKeys({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with BadRequest for an invalid pagination cursor", async () => {
    const error = await runEffect(
      listApiKeys({ after: "not-a-real-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
  });
});
