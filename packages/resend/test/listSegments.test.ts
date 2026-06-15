import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listSegments } from "../src/operations/listSegments";
import { runEffect } from "./setup";

describe("listSegments", () => {
  it("lists segments in the test account", async () => {
    const result = await runEffect(listSegments({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const segment of result.data) {
        if (segment.id !== undefined) {
          expect(typeof segment.id).toBe("string");
        }
      }
    }
  });

  it("lists segments with a limit parameter", async () => {
    const result = await runEffect(listSegments({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for a malformed cursor", async () => {
    const error = await runEffect(
      listSegments({ after: "not-a-valid-cursor-!!!" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
