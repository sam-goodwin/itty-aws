import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook";
import { deleteWebhook } from "../src/operations/deleteWebhook";
import { getWebhook } from "../src/operations/getWebhook";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_WEBHOOK_ID = "00000000-0000-4000-8000-000000000000";

describe("getWebhook", () => {
  it("retrieves a webhook created in the test", async () => {
    const endpoint = `https://example.com/distilled-resend-getWebhook-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createWebhook({
          endpoint,
          events: ["email.sent"],
        });
        if (!created.id) {
          return yield* Effect.die("createWebhook did not return an id");
        }
        createdId = created.id;
        return yield* getWebhook({ webhook_id: created.id });
      }).pipe(
        Effect.ensuring(
          Effect.suspend(() =>
            createdId
              ? deleteWebhook({ webhook_id: createdId }).pipe(Effect.ignore)
              : Effect.void,
          ),
        ),
      ),
    );

    expect(result).toBeDefined();
    expect(result.id).toBe(createdId);
    expect(result.endpoint).toBe(endpoint);
    if (result.events != null) {
      expect(result.events).toContain("email.sent");
    }
  });

  it("fails with NotFound for a non-existent webhook id", async () => {
    const error = await runEffect(
      getWebhook({ webhook_id: NON_EXISTENT_WEBHOOK_ID }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });
});
