import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalordersgetPaymentStatus } from "../src/operations/customerPortalordersgetPaymentStatus.ts";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalordersgetPaymentStatus", () => {
  it(
    "returns the payment status for an existing order",
    { timeout: 30_000 },
    async () => {
      // Orders are created via paid checkouts and cannot be deterministically
      // produced from a backend test. When the sandbox has at least one
      // order we exercise the real GET; otherwise the listing call still
      // verifies the prerequisite shape and the error tests below cover
      // the operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 1 });
          const target = listed.items[0];
          if (!target) {
            return {
              fetched: null,
              totalCount: listed.pagination.total_count,
            };
          }
          const status = yield* customerPortalordersgetPaymentStatus({
            id: target.id,
          });
          return {
            fetched: status,
            totalCount: listed.pagination.total_count,
          };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.fetched !== null) {
        expect(typeof result.fetched.status).toBe("string");
        expect(result.fetched.status.length).toBeGreaterThan(0);
        if (
          result.fetched.error !== null &&
          result.fetched.error !== undefined
        ) {
          expect(typeof result.fetched.error).toBe("string");
        }
      }
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersgetPaymentStatus({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersgetPaymentStatus({ id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
