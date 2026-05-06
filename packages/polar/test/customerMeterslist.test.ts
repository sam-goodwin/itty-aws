import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerMeterslist } from "../src/operations/customerMeterslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerMeterslist", () => {
  it(
    "lists customer meters with default pagination",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        customerMeterslist({ page: 1, limit: 10 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      expect(result.items.length).toBeLessThanOrEqual(10);

      for (const entry of result.items) {
        expect(typeof entry.id).toBe("string");
        expect(typeof entry.customer_id).toBe("string");
        expect(typeof entry.meter_id).toBe("string");
        expect(typeof entry.consumed_units).toBe("number");
        expect(typeof entry.credited_units).toBe("number");
        expect(typeof entry.balance).toBe("number");
        expect(typeof entry.customer.id).toBe("string");
        expect(entry.customer.type).toBe("individual");
        expect(typeof entry.meter.id).toBe("string");
        expect(entry.meter.unit).toBe("scalar");
        expect(entry.meter.aggregation.func).toBe("count");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // Polar caps `limit` at 100; values above the cap are rejected with
      // a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        customerMeterslist({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      // Pages are 1-indexed; `page=0` is rejected as a typed
      // UnprocessableEntity by the validation layer.
      const error = await runEffect(
        customerMeterslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
