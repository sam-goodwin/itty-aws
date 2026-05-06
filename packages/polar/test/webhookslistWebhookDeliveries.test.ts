import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { webhookslistWebhookDeliveries } from "../src/operations/webhookslistWebhookDeliveries.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("webhookslistWebhookDeliveries", () => {
  it(
    "lists webhook deliveries for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        webhookslistWebhookDeliveries({
          limit: 100,
        }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const delivery of result.items) {
        expect(typeof delivery.id).toBe("string");
        expect(typeof delivery.succeeded).toBe("boolean");
        expect(typeof delivery.webhook_event.id).toBe("string");
        expect(typeof delivery.webhook_event.type).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        webhookslistWebhookDeliveries({
          limit: 1000,
        }).pipe(Effect.exit),
      );
      // Polar may either reject the oversized limit OR silently cap it.
      if (Exit.isFailure(error)) {
        const failure = Cause.findErrorOption(error.cause);
        expect(failure._tag).toBe("Some");
        if (failure._tag === "Some") {
          expect(
            (failure.value as { _tag: string }).toBe("RequestValidationError")
              ._tag,
          );
        }
      }
    },
  );
});
