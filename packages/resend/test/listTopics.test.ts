import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listTopics } from "../src/operations/listTopics";
import { runEffect } from "./setup";

const VALID_SUBSCRIPTIONS = ["opt_in", "opt_out"];
const VALID_VISIBILITIES = ["public", "private"];

describe("listTopics", () => {
  it("lists topics in the test account", async () => {
    const result = await runEffect(listTopics({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const topic of result.data) {
        if (topic.id !== undefined) {
          expect(typeof topic.id).toBe("string");
        }
        if (topic.default_subscription !== undefined) {
          expect(VALID_SUBSCRIPTIONS).toContain(topic.default_subscription);
        }
        if (topic.visibility !== undefined) {
          expect(VALID_VISIBILITIES).toContain(topic.visibility);
        }
      }
    }
  });

  it("lists topics with a limit parameter", async () => {
    const result = await runEffect(listTopics({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError for a malformed cursor", async () => {
    const error = await runEffect(
      listTopics({ after: "not-a-valid-cursor-!!!" }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
