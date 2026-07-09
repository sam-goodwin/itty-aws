import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook";
import { deleteWebhook } from "../src/operations/deleteWebhook";
import { runEffect, testRunId } from "./setup";

describe("createWebhook", () => {
  it("creates a webhook with a single event", async () => {
    const endpoint = `https://example.com/distilled-resend-createWebhook-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createWebhook({
          endpoint,
          events: ["email.sent"],
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
    expect(result.signing_secret).toBeDefined();
  });

  it("creates a webhook with multiple events", async () => {
    const endpoint = `https://example.com/distilled-resend-createWebhook-multi-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createWebhook({
          endpoint,
          events: ["email.sent", "email.delivered", "email.bounced"],
        });
        createdId = created.id;
        return created;
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
    expect(typeof result.id).toBe("string");
  });

  it("fails with UnprocessableEntity for an invalid endpoint URL", async () => {
    const error = await runEffect(
      createWebhook({
        endpoint: "not-a-valid-url",
        events: ["email.sent"],
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
