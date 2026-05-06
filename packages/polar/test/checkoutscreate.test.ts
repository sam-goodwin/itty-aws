import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutscreate", () => {
  it(
    "creates a checkout session for a product",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1300,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const checkout = yield* checkoutscreate({
            products: [product.id],
            metadata: { distilled: true, testRunId },
          });

          expect(typeof checkout.id).toBe("string");
          expect(checkout.payment_processor).toBe("stripe");
          expect(checkout.status).toBe("open");
          expect(typeof checkout.url).toBe("string");
          expect(checkout.url.length).toBeGreaterThan(0);
          expect(typeof checkout.amount).toBe("number");
          expect(typeof checkout.organization_id).toBe("string");
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const id = yield* Ref.get(productIdRef);
              if (id) {
                yield* productsupdate({ id, is_archived: true }).pipe(
                  Effect.ignore,
                );
              }
            }),
          ),
        ),
      );
    },
  );

  it(
    "rejects an empty products array with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutscreate({ products: [] }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a malformed product id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutscreate({
          products: ["not-a-valid-uuid"],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
