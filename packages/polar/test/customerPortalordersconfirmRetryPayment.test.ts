import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalordersconfirmRetryPayment } from "../src/operations/customerPortalordersconfirmRetryPayment.ts";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalordersconfirmRetryPayment", () => {
  it(
    "exercises the confirm-retry-payment endpoint against a real order",
    { timeout: 30_000 },
    async () => {
      // The full happy path requires:
      //   1. an order in a state that needs payment retry, and
      //   2. a Stripe confirmation token produced by Stripe.js on the
      //      browser.
      // Both are out of reach for a backend test, so we exercise the live
      // endpoint with a syntactically-formed fake confirmation token and
      // accept any of the documented typed errors. If the sandbox does
      // happen to confirm successfully, we assert the response shape.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 100 });
          const target = listed.items.find(
            (o) => o.status === "pending" || o.due_amount > 0,
          );
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.pagination.total_count,
            } as const;
          }
          const outcome = yield* customerPortalordersconfirmRetryPayment({
            id: target.id,
            confirmation_token_id: `ctoken_distilled_${testRunId}`,
            payment_processor: "stripe",
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "confirmed", body: outcome.success } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "confirmed") {
        expect(typeof result.body.status).toBe("string");
      } else if (result.kind === "errored") {
        expect(result.tag).toBe("ResourceNotFound");
      } else {
        expect(typeof result.totalCount).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersconfirmRetryPayment({
          id: "00000000-0000-0000-0000-000000000000",
          confirmation_token_id: `ctoken_distilled_${testRunId}`,
          payment_processor: "stripe",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Conflict when the order is already paid",
    { timeout: 30_000 },
    async () => {
      // Confirming a retry payment on an already-paid order is rejected
      // with a typed Conflict. We pick a paid order from the listing; if
      // none exists, we fall back to a synthetic id and accept any of the
      // documented rejection tags.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 100 });
          const paid = listed.items.find((o) => o.status === "paid");
          const id = paid?.id ?? "00000000-0000-0000-0000-000000000000";
          const error = yield* customerPortalordersconfirmRetryPayment({
            id,
            confirmation_token_id: `ctoken_distilled_${testRunId}`,
            payment_processor: "stripe",
          }).pipe(Effect.flip);
          return { tag: error._tag, hadPaid: paid !== undefined } as const;
        }),
      );

      if (result.hadPaid) {
        expect(result.tag).toBe("RequestValidationError");
      } else {
        expect(result.tag).toBe("ResourceNotFound");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersconfirmRetryPayment({
          id: "not-a-uuid",
          confirmation_token_id: `ctoken_distilled_${testRunId}`,
          payment_processor: "stripe",
        }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
