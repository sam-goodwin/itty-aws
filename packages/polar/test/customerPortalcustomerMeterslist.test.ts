import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomerMeterslist } from "../src/operations/customerPortalcustomerMeterslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomerMeterslist", () => {
  it(
    "lists the authenticated customer's meters",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalcustomerMeterslist({ limit: 100 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.created_at).toBe("string");
        expect(typeof item.customer_id).toBe("string");
        expect(typeof item.meter_id).toBe("string");
        expect(typeof item.consumed_units).toBe("number");
        expect(typeof item.credited_units).toBe("number");
        expect(typeof item.balance).toBe("number");
        expect(typeof item.meter.id).toBe("string");
        expect(typeof item.meter.name).toBe("string");
      }
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomerMeterslist({ limit: 1000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a malformed meter_id filter with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomerMeterslist({ meter_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
