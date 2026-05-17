import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalsubscriptionslist } from "../src/operations/customerPortalsubscriptionslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalsubscriptionslist", () => {
  it(
    "lists subscriptions for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalsubscriptionslist({ page: 1, limit: 10 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const sub of result.items) {
        expect(typeof sub.id).toBe("string");
        expect(typeof sub.amount).toBe("number");
        expect(typeof sub.currency).toBe("string");
        expect(sub.recurring_interval).toBe("Unauthorized");
        expect(sub.status).toBe("Unauthorized");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // limit max is 100 per Polar pagination — anything larger is rejected
      // by request validation.
      const error = await runEffectAsCustomer(
        customerPortalsubscriptionslist({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalsubscriptionslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
