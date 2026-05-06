import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomersdeletePaymentMethod } from "../src/operations/customerPortalcustomersdeletePaymentMethod.ts";
import { customerPortalcustomerslistPaymentMethods } from "../src/operations/customerPortalcustomerslistPaymentMethods.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersdeletePaymentMethod", () => {
  it(
    "deletes an existing payment method when one is available",
    { timeout: 60_000 },
    async () => {
      // A payment method cannot be created from a backend test (it requires
      // Stripe.js client-side tokenization). When the sandbox has at least
      // one payment method available we exercise the genuine happy path by
      // deleting it; otherwise we assert that the empty-list case is
      // observable (the delete endpoint itself is still covered by the
      // error tests below, which all reach the live API).
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalcustomerslistPaymentMethods({
            limit: 100,
          });
          if (listed.items.length === 0) {
            return { deleted: null, totalCount: listed.pagination.total_count };
          }
          const target = listed.items[0]!;
          const deleted = yield* customerPortalcustomersdeletePaymentMethod({
            id: target.id,
          });
          return { deleted, totalCount: listed.pagination.total_count };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      // void on success — `deleted` will be undefined when an actual delete ran.
      if (result.deleted !== null) {
        expect(result.deleted).toBeUndefined();
      }
    },
  );

  it(
    "fails with NotFound for a non-existent payment method id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersdeletePaymentMethod({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed payment method id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersdeletePaymentMethod({
          id: `not-a-uuid-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "surfaces a typed BadRequest / NotFound / UnprocessableEntity envelope for any rejected delete",
    { timeout: 30_000 },
    async () => {
      // The operation declares BadRequest as a possible error (e.g. when the
      // payment method is in use by an active subscription, surfaced as
      // PaymentMethodInUseByActiveSubscription → BadRequest). We cannot
      // deterministically provoke that condition from a fresh sandbox, so we
      // assert the discriminator stays within the documented set when an
      // arbitrary UUID is rejected end-to-end. A non-error response would
      // also fail here because Effect.flip would short-circuit.
      const error = await runEffectAsCustomer(
        customerPortalcustomersdeletePaymentMethod({
          id: "11111111-1111-4111-8111-111111111111",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
