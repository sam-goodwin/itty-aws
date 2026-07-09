import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listEvents } from "../src/operations/listEvents";
import { runEffect } from "./setup";

describe("listEvents", () => {
  it("lists events with default parameters", async () => {
    const result = await runEffect(listEvents({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("lists events with a limit parameter", async () => {
    const result = await runEffect(listEvents({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for an invalid cursor", async () => {
    const error = await runEffect(
      listEvents({ after: "not-a-valid-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
