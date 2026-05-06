import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalbenefitGrantslist } from "../src/operations/customerPortalbenefitGrantslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalbenefitGrantslist", () => {
  it(
    "lists benefit grants with default pagination",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalbenefitGrantslist({ limit: 100 }),
      );
      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.is_granted).toBe("boolean");
        expect(typeof item.is_revoked).toBe("boolean");
        expect(typeof item.customer_id).toBe("string");
        expect(typeof item.benefit_id).toBe("string");
        expect(typeof item.customer.id).toBe("string");
        expect(typeof item.benefit.id).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalbenefitGrantslist({ limit: 1000 }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
