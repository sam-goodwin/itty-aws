import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook";
import { deleteWebhook } from "../src/operations/deleteWebhook";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_WEBHOOK_ID = "00000000-0000-4000-8000-000000000000";

describe("deleteWebhook", () => {
  it("deletes a webhook created in the test", async () => {
    const endpoint = `https://example.com/distilled-resend-deleteWebhook-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createWebhook({
          endpoint,
          events: ["email.sent"],
        });
        if (!created.id) {
          return yield* Effect.die("createWebhook did not return an id");
        }
        return yield* deleteWebhook({ webhook_id: created.id });
      }),
    );

    expect(result).toBeDefined();
    if (result.deleted !== undefined) {
      expect(result.deleted).toBe(true);
    }
  });

  it("fails with NotFound for a non-existent webhook id", async () => {
    const error = await runEffect(
      deleteWebhook({ webhook_id: NON_EXISTENT_WEBHOOK_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
