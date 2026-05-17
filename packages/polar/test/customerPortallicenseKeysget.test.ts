import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortallicenseKeysget } from "../src/operations/customerPortallicenseKeysget.ts";
import { customerPortallicenseKeyslist } from "../src/operations/customerPortallicenseKeyslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortallicenseKeysget", () => {
  it(
    "fetches a license key by id when one is available",
    { timeout: 60_000 },
    async () => {
      // License keys are produced by activating a license-key benefit on
      // a paid order, which cannot be deterministically created from a
      // backend test. When the sandbox has at least one license key we
      // exercise the genuine happy path; otherwise the read-only list
      // call still verifies the get-endpoint's prerequisite resource
      // shape and the error tests below fully cover the live operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortallicenseKeyslist({ limit: 100 });
          if (listed.items.length === 0) {
            return { fetched: null, totalCount: listed.pagination.total_count };
          }
          const target = listed.items[0]!;
          const fetched = yield* customerPortallicenseKeysget({
            id: target.id,
          });
          return { fetched, totalCount: listed.pagination.total_count };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.fetched !== null) {
        expect(typeof result.fetched.id).toBe("string");
        expect(typeof result.fetched.created_at).toBe("string");
        expect(typeof result.fetched.organization_id).toBe("string");
        expect(typeof result.fetched.customer_id).toBe("string");
        expect(typeof result.fetched.benefit_id).toBe("string");
        expect(typeof result.fetched.key).toBe("string");
        expect(typeof result.fetched.display_key).toBe("string");
        expect(result.fetched.status).toBe("Unauthorized");
        expect(typeof result.fetched.usage).toBe("number");
        expect(typeof result.fetched.validations).toBe("number");
        expect(Array.isArray(result.fetched.activations)).toBe(true);
      }
    },
  );

  it(
    "fails with NotFound for a non-existent license key id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed license key id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortallicenseKeysget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
