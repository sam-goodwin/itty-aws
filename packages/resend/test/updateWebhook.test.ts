import { Effect } from "effect";
import { describe, expect, it } from "vitest";
import { createWebhook } from "../src/operations/createWebhook";
import { deleteWebhook } from "../src/operations/deleteWebhook";
import { getWebhook } from "../src/operations/getWebhook";
import { updateWebhook } from "../src/operations/updateWebhook";
import { runEffect, testRunId } from "./setup";

const NON_EXISTENT_WEBHOOK_ID = "00000000-0000-4000-8000-000000000000";

describe("updateWebhook", () => {
  it("updates a webhook's endpoint and status", async () => {
    const originalEndpoint = `https://example.com/distilled-resend-updateWebhook-${testRunId}`;
    const updatedEndpoint = `https://example.com/distilled-resend-updateWebhook-renamed-${testRunId}`;
    let createdId: string | undefined;

    const result = await runEffect(
      Effect.gen(function* () {
        const created = yield* createWebhook({
          endpoint: originalEndpoint,
          events: ["email.sent"],
        });
        if (!created.id) {
          return yield* Effect.die("createWebhook did not return an id");
        }
        createdId = created.id;
        const updated = yield* updateWebhook({
          webhook_id: created.id,
          endpoint: updatedEndpoint,
          status: "disabled",
        });
        const refetched = yield* getWebhook({ webhook_id: created.id });
        return { updated, refetched };
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

    expect(result.updated).toBeDefined();
    expect(result.updated.id).toBe(createdId);
    expect(result.refetched.endpoint).toBe(updatedEndpoint);
    expect(result.refetched.status).toBe("disabled");
  });

  it("fails with NotFound for a non-existent webhook id", async () => {
    const error = await runEffect(
      updateWebhook({
        webhook_id: NON_EXISTENT_WEBHOOK_ID,
        status: "disabled",
      }).pipe(Effect.flip),
    );

    expect(error._tag).toBe("NotFound");
  });

  it("fails with UnprocessableEntity for an invalid endpoint URL", async () => {
    const endpoint = `https://example.com/distilled-resend-updateWebhook-bad-${testRunId}`;
    let createdId: string | undefined;

    const error = await runEffect(
      Effect.gen(function* () {
        const created = yield* createWebhook({
          endpoint,
          events: ["email.sent"],
        });
        if (!created.id) {
          return yield* Effect.die("createWebhook did not return an id");
        }
        createdId = created.id;
        return yield* updateWebhook({
          webhook_id: created.id,
          endpoint: "not-a-valid-url",
        });
      })
        .pipe(
          Effect.ensuring(
            Effect.suspend(() =>
              createdId
                ? deleteWebhook({ webhook_id: createdId }).pipe(Effect.ignore)
                : Effect.void,
            ),
          ),
        )
        .pipe(Effect.flip),
    );

    expect(error._tag).toBe("UnprocessableEntity");
  });
});
