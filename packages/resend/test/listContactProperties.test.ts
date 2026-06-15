import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listContactProperties } from "../src/operations/listContactProperties";
import { runEffect } from "./setup";

describe("listContactProperties", () => {
  it("lists contact properties in the test account", async () => {
    const result = await runEffect(listContactProperties({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const property of result.data) {
        if (property.id !== undefined) {
          expect(typeof property.id).toBe("string");
        }
        if (property.key !== undefined) {
          expect(typeof property.key).toBe("string");
        }
      }
    }
  });

  it("lists contact properties with a limit parameter", async () => {
    const result = await runEffect(listContactProperties({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for a malformed cursor", async () => {
    const error = await runEffect(
      listContactProperties({ after: "not-a-valid-cursor-!!!" }).pipe(
        Effect.flip,
      ),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
