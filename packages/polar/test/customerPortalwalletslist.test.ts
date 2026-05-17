import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalwalletslist } from "../src/operations/customerPortalwalletslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalwalletslist", () => {
  it(
    "lists wallets for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalwalletslist({ page: 1, limit: 10 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const wallet of result.items) {
        expect(typeof wallet.id).toBe("string");
        expect(typeof wallet.customer_id).toBe("string");
        expect(typeof wallet.balance).toBe("number");
        expect(typeof wallet.currency).toBe("string");
        expect(typeof wallet.created_at).toBe("string");
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
        customerPortalwalletslist({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalwalletslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
