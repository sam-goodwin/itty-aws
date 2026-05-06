import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomerslistPaymentMethods } from "../src/operations/customerPortalcustomerslistPaymentMethods.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomerslistPaymentMethods", () => {
  it(
    "lists the authenticated customer's saved payment methods",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalcustomerslistPaymentMethods({ limit: 100 }),
      );
      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.created_at).toBe("string");
        expect(item.processor).toBe("stripe");
        expect(typeof item.customer_id).toBe("string");
        expect(typeof item.type).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomerslistPaymentMethods({ limit: 1000 }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
