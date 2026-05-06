import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { ordersgenerateInvoice } from "../src/operations/ordersgenerateInvoice.ts";
import { orderslist } from "../src/operations/orderslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("ordersgenerateInvoice", () => {
  it(
    "triggers invoice generation for an existing order",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(orderslist({ limit: 100 }));
      const eligible =
        list.items.find((o) => !o.is_invoice_generated) ?? list.items[0];

      if (!eligible) {
        // No orders to generate invoices for — exercise the operation against
        // a malformed UUID and assert the typed UnprocessableEntity.
        const error = await runEffect(
          ordersgenerateInvoice({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("RequestValidationError");
        return;
      }

      // Polar returns UnprocessableEntity if invoice generation is already in
      // progress / already generated for this order. Either outcome on a real
      // order id exercises the operation; assert exactly one of them.
      const exit = await runEffect(
        Effect.exit(ordersgenerateInvoice({ id: eligible.id })),
      );

      if (Exit.isSuccess(exit)) {
        expect(exit.value).toBeUndefined();
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
    "fails with UnprocessableEntity for a malformed order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        ordersgenerateInvoice({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
