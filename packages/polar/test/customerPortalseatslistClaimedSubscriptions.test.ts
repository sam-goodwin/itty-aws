import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalseatslistClaimedSubscriptions } from "../src/operations/customerPortalseatslistClaimedSubscriptions.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalseatslistClaimedSubscriptions", () => {
  it(
    "lists subscriptions where the authenticated customer has claimed a seat",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalseatslistClaimedSubscriptions({ limit: 100 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.created_at).toBe("string");
        expect(typeof item.amount).toBe("number");
        expect(typeof item.currency).toBe("string");
        expect(item.recurring_interval).toBe("Unauthorized");
        expect(item.status).toBe("Unauthorized");
        expect(typeof item.customer_id).toBe("string");
        expect(typeof item.product_id).toBe("string");
        expect(typeof item.product.id).toBe("string");
        expect(typeof item.product.name).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatslistClaimedSubscriptions({ limit: 1000 }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a non-positive page with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatslistClaimedSubscriptions({ page: 0 }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
