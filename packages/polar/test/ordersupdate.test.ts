import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { orderslist } from "../src/operations/orderslist.ts";
import { ordersupdate } from "../src/operations/ordersupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("ordersupdate", () => {
  it(
    "updates the billing_name of an existing order",
    { timeout: 30_000 },
    async () => {
      const list = await runEffect(orderslist({ limit: 100 }));
      const orderId = list.items[0]?.id;

      if (!orderId) {
        // No orders to update — exercise the operation against a well-formed
        // but non-existent UUID and assert the typed NotFound.
        const error = await runEffect(
          ordersupdate({
            id: "00000000-0000-0000-0000-000000000000",
            billing_name: `distilled-${testRunId}`,
          }).pipe(Effect.flip),
        );
        expect(error._tag).toBe("ResourceNotFound");
        return;
      }

      const newBillingName = `distilled-billing-${testRunId}`;
      const updated = await runEffect(
        ordersupdate({ id: orderId, billing_name: newBillingName }),
      );

      expect(updated.id).toBe(orderId);
      expect(updated.billing_name).toBe(newBillingName);
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        ordersupdate({
          id: "00000000-0000-0000-0000-000000000000",
          billing_name: `distilled-${testRunId}`,
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
        ordersupdate({
          id: "not-a-valid-uuid",
          billing_name: `distilled-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
