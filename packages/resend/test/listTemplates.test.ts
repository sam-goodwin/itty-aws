import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listTemplates } from "../src/operations/listTemplates";
import { runEffect } from "./setup";

describe("listTemplates", () => {
  it("lists templates in the test account", async () => {
    const result = await runEffect(listTemplates({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const template of result.data) {
        if (template.id !== undefined) {
          expect(typeof template.id).toBe("string");
        }
        if (template.status !== undefined) {
          expect(["draft", "published"]).toContain(template.status);
        }
      }
    }
  });

  it("lists templates with a limit parameter", async () => {
    const result = await runEffect(listTemplates({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for a malformed cursor", async () => {
    const error = await runEffect(
      listTemplates({ after: "not-a-valid-cursor-!!!" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
