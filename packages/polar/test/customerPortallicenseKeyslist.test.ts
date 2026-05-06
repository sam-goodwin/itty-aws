import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortallicenseKeyslist } from "../src/operations/customerPortallicenseKeyslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortallicenseKeyslist", () => {
  it(
    "lists license keys for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortallicenseKeyslist({ limit: 100 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const item of result.items) {
        expect(typeof item.id).toBe("string");
        expect(typeof item.created_at).toBe("string");
        expect(typeof item.organization_id).toBe("string");
        expect(typeof item.customer_id).toBe("string");
        expect(typeof item.benefit_id).toBe("string");
        expect(typeof item.key).toBe("string");
        expect(typeof item.display_key).toBe("string");
        expect(item.status).toBe("Unauthorized");
        expect(typeof item.usage).toBe("number");
        expect(typeof item.validations).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound when filtering by a non-existent benefit_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeyslist({
          benefit_id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed benefit_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeyslist({ benefit_id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects an out-of-range limit with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeyslist({ limit: 1000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
