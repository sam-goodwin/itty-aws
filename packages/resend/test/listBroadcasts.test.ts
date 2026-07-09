import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listBroadcasts } from "../src/operations/listBroadcasts";
import { runEffect } from "./setup";

describe("listBroadcasts", () => {
  it("lists broadcasts in the test account", async () => {
    const result = await runEffect(listBroadcasts({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const broadcast of result.data) {
        if (broadcast.id !== undefined) {
          expect(typeof broadcast.id).toBe("string");
        }
      }
    }
  });

  it("lists broadcasts with a limit parameter", async () => {
    const result = await runEffect(listBroadcasts({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for a malformed cursor", async () => {
    const error = await runEffect(
      listBroadcasts({ after: "not-a-valid-cursor-!!!" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
