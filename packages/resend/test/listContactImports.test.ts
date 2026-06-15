import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listContactImports } from "../src/operations/listContactImports";
import { runEffect } from "./setup";

const VALID_STATUSES = ["queued", "in_progress", "completed", "failed"];

describe("listContactImports", () => {
  it("lists contact imports in the test account", async () => {
    const result = await runEffect(listContactImports({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const imp of result.data) {
        if (imp.id !== undefined) {
          expect(typeof imp.id).toBe("string");
        }
        if (imp.status !== undefined) {
          expect(VALID_STATUSES).toContain(imp.status);
        }
      }
    }
  });

  it("lists contact imports filtered by status with a limit", async () => {
    const result = await runEffect(
      listContactImports({ status: "completed", limit: 5 }),
    );

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
      for (const imp of result.data) {
        if (imp.status !== undefined) {
          expect(imp.status).toBe("completed");
        }
      }
    }
  });

  it("fails with InvalidRequestError for a malformed cursor", async () => {
    const error = await runEffect(
      listContactImports({ after: "not-a-valid-cursor-!!!" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
