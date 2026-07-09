import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { listWebhooks } from "../src/operations/listWebhooks";
import { runEffect } from "./setup";

describe("listWebhooks", () => {
  it("lists webhooks in the test account", async () => {
    const result = await runEffect(listWebhooks({}));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      for (const webhook of result.data) {
        if (webhook.id !== undefined) {
          expect(typeof webhook.id).toBe("string");
        }
        if (webhook.endpoint !== undefined) {
          expect(typeof webhook.endpoint).toBe("string");
        }
      }
    }
  });

  it("lists webhooks with a limit parameter", async () => {
    const result = await runEffect(listWebhooks({ limit: 5 }));

    expect(result).toBeDefined();
    if (result.data !== undefined) {
      expect(Array.isArray(result.data)).toBe(true);
      expect(result.data.length).toBeLessThanOrEqual(5);
    }
  });

  it("fails with InvalidRequestError when after and before are combined", async () => {
    const error = await runEffect(
      listWebhooks({
        after: "00000000-0000-4000-8000-000000000000",
        before: "00000000-0000-4000-8000-000000000000",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("InvalidRequestError");
  });
});
