import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { ordersinvoice } from "../src/operations/ordersinvoice.ts";
import { orderslist } from "../src/operations/orderslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("ordersinvoice", () => {
  it(
    "fetches the invoice url for an existing order",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(orderslist({ limit: 100 }));
      const order =
        list.items.find((o) => o.is_invoice_generated) ?? list.items[0];

      if (!order) {
        // No orders to fetch invoices for — exercise the operation against a
        // well-formed but non-existent UUID and assert the typed NotFound.
        const error = await runEffect(
          ordersinvoice({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const result = await runEffect(ordersinvoice({ id: order.id }));

      expect(typeof result.url).toBe("string");
      expect(result.url.length).toBeGreaterThan(0);
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        ordersinvoice({
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
        ordersinvoice({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
