import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { subscriptionscreate } from "../src/operations/subscriptionscreate.ts";
import { subscriptionsrevoke } from "../src/operations/subscriptionsrevoke.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("subscriptionscreate", () => {
  it(
    "creates a subscription for a customer on a recurring product",
    { timeout: 120_000 },
    async () => {
      const email = testEmail(
        `distilled.polar.subcreate.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
      );
      const productName = `distilled-subcreate-product-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const customer = yield* customerscreate({
            email,
            name: `Distilled SubCreate ${testRunId}`,
            metadata: { distilled: true, testRunId },
          });
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled subscriptionscreate test.",
            visibility: "private",
            recurring_interval: "month",
            prices: [
              {
                amount_type: "fixed",
                price_amount: 500,
                price_currency: "usd",
              },
            ],
            metadata: { distilled: true, testRunId },
          });

          return yield* Effect.gen(function* () {
            const created = yield* subscriptionscreate({
              customer_id: customer.id,
              product_id: product.id,
              metadata: { distilled: true, testRunId },
            });
            return { customer, product, created };
          }).pipe(
            Effect.ensuring(
              Effect.all(
                [
                  productsupdate({
                    id: product.id,
                    is_archived: true,
                  }).pipe(Effect.ignore),
                  customersdelete({ id: customer.id }).pipe(Effect.ignore),
                ],
                { concurrency: "unbounded" },
              ),
            ),
          );
        }).pipe(
          Effect.flatMap((res) =>
            subscriptionsrevoke({ id: res.created.id }).pipe(
              Effect.ignore,
              Effect.as(res),
            ),
          ),
        ),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.customer_id).toBe(result.customer.id);
      expect(result.created.product_id).toBe(result.product.id);
      expect(typeof result.created.status).toBe("string");
    },
  );

  it(
    "surfaces validation details for malformed customer and product ids",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionscreate({
          customer_id: "not-a-uuid",
          product_id: "also-not-a-uuid",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
