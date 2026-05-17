import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutLinkscreate } from "../src/operations/checkoutLinkscreate.ts";
import { checkoutLinksdelete } from "../src/operations/checkoutLinksdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutLinkscreate", () => {
  it(
    "creates a checkout link for an existing product",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const productIdRef = yield* Ref.make<string | null>(null);
          const linkIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const product = yield* productscreate({
              name: `distilled-polar-clc-${testRunId}`,
              prices: [
                {
                  amount_type: "fixed",
                  price_amount: 1000,
                  price_currency: "usd",
                },
              ],
            });
            yield* Ref.set(productIdRef, product.id);

            const label = `distilled-polar-clc-link-${testRunId}`;
            const link = yield* checkoutLinkscreate({
              payment_processor: "stripe",
              products: [product.id],
              label,
              allow_discount_codes: true,
              require_billing_address: false,
            });
            yield* Ref.set(linkIdRef, link.id);

            expect(typeof link.id).toBe("string");
            expect(link.id.length).toBeGreaterThan(0);
            expect(link.label).toBe(label);
            expect(link.payment_processor).toBe("stripe");
            expect(link.allow_discount_codes).toBe(true);
            expect(link.require_billing_address).toBe(false);
            expect(typeof link.url).toBe("string");
            expect(link.url.length).toBeGreaterThan(0);
            expect(typeof link.organization_id).toBe("string");
            expect(Array.isArray(link.products)).toBe(true);
            expect(link.products.some((p) => p.id === product.id)).toBe(true);
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const linkId = yield* Ref.get(linkIdRef);
                if (linkId !== null) {
                  yield* checkoutLinksdelete({ id: linkId }).pipe(
                    Effect.ignore,
                  );
                }
                const productId = yield* Ref.get(productIdRef);
                if (productId !== null) {
                  yield* productsupdate({
                    id: productId,
                    is_archived: true,
                  }).pipe(Effect.ignore);
                }
              }),
            ),
          );
        }),
      );
    },
  );

  it(
    "rejects an empty products array with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutLinkscreate({
          payment_processor: "stripe",
          products: [],
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
