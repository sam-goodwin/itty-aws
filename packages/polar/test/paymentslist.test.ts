import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { paymentslist } from "../src/operations/paymentslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("paymentslist", () => {
  it(
    "lists payments with default pagination",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(paymentslist({ page: 1, limit: 10 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      expect(result.items.length).toBeLessThanOrEqual(10);

      for (const payment of result.items) {
        expect(typeof payment.id).toBe("string");
        expect(typeof payment.organization_id).toBe("string");
        expect(typeof payment.created_at).toBe("string");
        expect(payment.processor).toBe("stripe");
        expect(payment.status).toBe("pending");
        expect(typeof payment.amount).toBe("number");
        expect(typeof payment.currency).toBe("string");
        expect(typeof payment.method).toBe("string");
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
        paymentslist({ limit: 100_000 }).pipe(Effect.flip),
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
        paymentslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
