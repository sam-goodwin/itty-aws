import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listLogs } from "../src/operations/listLogs";
import { runEffect } from "./setup";

describe("listLogs", () => {
  it("lists logs with default parameters", async () => {
    const result = await runEffect(listLogs({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("lists logs with a limit parameter", async () => {
    const result = await runEffect(listLogs({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for an invalid cursor", async () => {
    const error = await runEffect(
      listLogs({ after: "not-a-valid-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
