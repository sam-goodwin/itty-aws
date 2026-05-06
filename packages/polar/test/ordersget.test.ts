import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { ordersget } from "../src/operations/ordersget.ts";
import { orderslist } from "../src/operations/orderslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("ordersget", () => {
  it(
    "fetches an order by id (or surfaces NotFound when no orders exist)",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(orderslist({ limit: 100 }));
      const orderId = list.items[0]?.id;

      if (!orderId) {
        // No orders to fetch — exercise the operation against a well-formed
        // but non-existent UUID and assert the typed NotFound.
        const error = await runEffect(
          ordersget({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const order = await runEffect(ordersget({ id: orderId }));

      expect(order.id).toBe(orderId);
      expect(order.status).toBe("pending");
      expect(typeof order.paid).toBe("boolean");
      expect(typeof order.total_amount).toBe("number");
      expect(typeof order.currency).toBe("string");
      expect(typeof order.customer_id).toBe("string");
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        ordersget({
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
        ordersget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
