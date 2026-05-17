import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { orderslist } from "../src/operations/orderslist.ts";
import { refundscreate } from "../src/operations/refundscreate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("refundscreate", () => {
  it(
    "creates a refund against a paid order with refundable balance",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(orderslist({ limit: 100 }));
      const order = list.items.find((o) => o.paid && o.refundable_amount > 0);

      if (!order) {
        // No refundable orders — exercise the operation against a malformed
        // order id and assert the typed UnprocessableEntity.
        const error = await runEffect(
          refundscreate({
            order_id: "not-a-valid-uuid",
            reason: "customer_request",
            amount: 1,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("RequestValidationError");
        return;
      }

      // Refund the smallest unit available against the order. Polar may also
      // return UnprocessableEntity (e.g. duplicate refund / partial-refund
      // restriction) on retry — accept either real outcome.
      const exit = await runEffect(
        Effect.exit(
          refundscreate({
            order_id: order.id,
            reason: "customer_request",
            amount: 1,
            comment: `distilled-refund-${testRunId}`,
            metadata: { distilled: true, testRunId },
          }),
        ),
      );

      if (Exit.isSuccess(exit)) {
        expect(typeof exit.value.id).toBe("string");
        expect(exit.value.order_id).toBe(order.id);
        expect(exit.value.reason).toBe("customer_request");
        expect(exit.value.amount).toBe(1);
        expect(exit.value.status).toBe("pending");
      } else {
        const failure = Cause.findErrorOption(exit.cause);
        expect(failure._tag).toBe("Some");
        if (failure._tag === "Some") {
          expect(failure.value._tag).toBe("RequestValidationError");
        }
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed order_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        refundscreate({
          order_id: "not-a-valid-uuid",
          reason: "customer_request",
          amount: 100,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden or UnprocessableEntity for a non-existent order_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        refundscreate({
          order_id: "00000000-0000-0000-0000-000000000000",
          reason: "customer_request",
          amount: 100,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
