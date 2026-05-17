import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalorderslist", () => {
  it(
    "lists orders for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalorderslist({ page: 1, limit: 10 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const order of result.items) {
        expect(typeof order.id).toBe("string");
        expect(typeof order.customer_id).toBe("string");
        expect(order.status).toBe("Unauthorized");
        expect(order.billing_reason).toBe("Unauthorized");
        expect(typeof order.total_amount).toBe("number");
        expect(typeof order.currency).toBe("string");
        expect(typeof order.invoice_number).toBe("string");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // limit max is 100 per the operation docstring — anything larger is
      // rejected by request validation.
      const error = await runEffectAsCustomer(
        customerPortalorderslist({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalorderslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
