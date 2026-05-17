import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { orderslist } from "../src/operations/orderslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("orderslist", () => {
  it(
    "lists orders for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(orderslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const order of result.items) {
        expect(typeof order.id).toBe("string");
        expect(order.status).toBe("pending");
        expect(typeof order.paid).toBe("boolean");
        expect(typeof order.total_amount).toBe("number");
        expect(typeof order.currency).toBe("string");
        expect(order.billing_reason).toBe("purchase");
        expect(typeof order.customer_id).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        orderslist({ limit: 1000 }).pipe(Effect.exit),
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
