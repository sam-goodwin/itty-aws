import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listEmailReceiving } from "../src/operations/listEmailReceiving";
import { runEffect } from "./setup";

describe("listEmailReceiving", () => {
  it("returns a paginated list of received emails", async () => {
    const result = await runEffect(listEmailReceiving({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
    }
  });

  it("respects the limit parameter", async () => {
    const result = await runEffect(listEmailReceiving({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with BadRequest for an invalid pagination cursor", async () => {
    const error = await runEffect(
      listEmailReceiving({ after: "not-a-real-cursor" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("BadRequest");
  });
});
