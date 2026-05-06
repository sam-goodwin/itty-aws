import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { subscriptionscreate } from "../src/operations/subscriptionscreate.ts";
import { subscriptionsget } from "../src/operations/subscriptionsget.ts";
import { subscriptionsrevoke } from "../src/operations/subscriptionsrevoke.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("subscriptionsget", () => {
  it("fetches a subscription by id", { timeout: 120_000 }, async () => {
    const email = testEmail(
      `distilled.polar.subget.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
    );
    const productName = `distilled-subget-product-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const customer = yield* customerscreate({
          email,
          name: `Distilled SubGet ${testRunId}`,
          metadata: { distilled: true, testRunId },
        });
        const product = yield* productscreate({
          name: productName,
          description: "Created by distilled subscriptionsget test.",
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
          const fetched = yield* subscriptionsget({ id: created.id });
          return { customer, product, created, fetched };
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

    expect(result.fetched.id).toBe(result.created.id);
    expect(result.fetched.customer_id).toBe(result.customer.id);
    expect(result.fetched.product_id).toBe(result.product.id);
    expect(typeof result.fetched.status).toBe("string");
  });

  it(
    "fails with NotFound for a non-existent subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "surfaces validation details for a malformed subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionsget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
