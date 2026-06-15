import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listEmails } from "../src/operations/listEmails";
import { runEffect } from "./setup";

describe("listEmails", () => {
  it("returns a paginated list of emails", async () => {
    const result = await runEffect(listEmails({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("respects the limit parameter", async () => {
    const result = await runEffect(listEmails({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with BadRequest for an invalid pagination cursor", async () => {
    const error = await runEffect(
      listEmails({ after: "not-a-real-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
  });
});
