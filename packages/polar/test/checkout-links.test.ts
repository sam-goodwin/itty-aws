import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { checkoutLinkscreate } from "../src/operations/checkoutLinkscreate.ts";
import { checkoutLinksdelete } from "../src/operations/checkoutLinksdelete.ts";
import { checkoutLinkslist } from "../src/operations/checkoutLinkslist.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Checkout Links", () => {
  it(
    "creates, lists, and deletes a checkout link",
    { timeout: 60_000 },
    async () => {
      const productName = `distilled-polar-checkout-product-${testRunId}`;
      const label = `distilled-polar-checkout-link-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: productName,
            description:
              "Created by distilled Polar SDK checkout link integration tests.",
            visibility: "private",
            organization_id: organizationId,
            metadata: {
              distilled: true,
              testRunId,
            },
            prices: [
              {
                amount_type: "fixed",
                price_amount: 100,
                price_currency: "usd",
              },
            ],
          });

          return yield* Effect.gen(function* () {
            const created = yield* checkoutLinkscreate({
              product_id: product.id,
              payment_processor: "stripe",
              label,
              allow_discount_codes: true,
              require_billing_address: false,
              metadata: {
                distilled: true,
                testRunId,
              },
            });
            const listed = yield* checkoutLinkslist({
              product_id: product.id,
              limit: 100,
              organization_id: organizationId,
            });
            const deleted = yield* checkoutLinksdelete({ id: created.id });

            return { product, created, listed, deleted };
          }).pipe(
            Effect.ensuring(
              productsupdate({
                id: product.id,
                is_archived: true,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.label).toBe(label);
      expect(result.created.products.some((product) => product.id === result.product.id)).toBe(true);
      expect(
        result.listed.items.some((link) => link.id === result.created.id),
      ).toBe(true);
      expect(result.deleted).toBeUndefined();
    },
  );

  it(
    "fails with NotFound for a missing checkout link",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutLinksdelete({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});

