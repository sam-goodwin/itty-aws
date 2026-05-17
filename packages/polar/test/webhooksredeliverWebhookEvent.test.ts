import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { webhookslistWebhookDeliveries } from "../src/operations/webhookslistWebhookDeliveries.ts";
import { webhooksredeliverWebhookEvent } from "../src/operations/webhooksredeliverWebhookEvent.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhooksredeliverWebhookEvent", () => {
  it(
    "schedules redelivery of an existing webhook event",
    { timeout: 30_000 },
    async () => {
      const deliveries = await runEffect(
        webhookslistWebhookDeliveries({ limit: 100 }),
      );

      const eventId = deliveries.items[0]?.webhook_event.id;
      if (!eventId) {
        // Without any historical deliveries, exercise the operation against a
        // well-formed but non-existent UUID and assert the typed NotFound.
        const error = await runEffect(
          webhooksredeliverWebhookEvent({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const result = await runEffect(
        webhooksredeliverWebhookEvent({ id: eventId }),
      );

      expect(result).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a non-existent webhook event id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksredeliverWebhookEvent({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed webhook event id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhooksredeliverWebhookEvent({
          id: "not-a-valid-uuid",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
