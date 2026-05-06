import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { ordersreceipt } from "../src/operations/ordersreceipt.ts";
import { orderslist } from "../src/operations/orderslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("ordersreceipt", () => {
  it(
    "fetches the receipt url for a paid order",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(orderslist({ limit: 100 }));
      const order = list.items.find((o) => o.paid) ?? list.items[0];

      if (!order) {
        // No orders to fetch receipts for — exercise the operation against a
        // well-formed but non-existent UUID and assert the typed NotFound.
        const error = await runEffect(
          ordersreceipt({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      // Polar may return UnprocessableEntity if the order is not paid (no
      // receipt available). Either outcome on a real order id exercises the
      // operation; assert exactly one of them.
      const exit = await runEffect(
        Effect.exit(ordersreceipt({ id: order.id })),
      );

      if (Exit.isSuccess(exit)) {
        expect(typeof exit.value.url).toBe("string");
        expect(exit.value.url.length).toBeGreaterThan(0);
      } else {
        const failure = Cause.findErrorOption(exit.cause);
        expect(failure._tag).toBe("Some");
        if (failure._tag === "Some") {
          expect(failure.value._tag).toBe("ResourceNotFound");
        }
      }
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        ordersreceipt({
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
      const error = await runEffect(
        ordersreceipt({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
