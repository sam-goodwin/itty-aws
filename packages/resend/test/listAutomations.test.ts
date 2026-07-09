import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listAutomations } from "../src/operations/listAutomations";
import { runEffect } from "./setup";

describe("listAutomations", () => {
  it("lists automations with default parameters", async () => {
    const result = await runEffect(listAutomations({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("lists automations with a limit parameter", async () => {
    const result = await runEffect(listAutomations({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("lists automations filtered by status", async () => {
    const result = await runEffect(listAutomations({ status: "enabled" }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const automation of result.data) {
        if (automation.status !== undefined) {
          expect(automation.status).toBe("enabled");
        }
      }
    }
  });

  it("fails with InvalidRequestError for an invalid cursor", async () => {
    const error = await runEffect(
      listAutomations({ after: "not-a-valid-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
