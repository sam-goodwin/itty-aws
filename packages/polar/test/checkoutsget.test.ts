import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { checkoutsget } from "../src/operations/checkoutsget.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutsget", () => {
  it(
    "fetches a checkout by id after creating it",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-get-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1400,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({
            products: [product.id],
            metadata: { distilled: true, testRunId },
          });

          const checkout = yield* checkoutsget({ id: created.id });

          expect(checkout.id).toBe(created.id);
          expect(checkout.payment_processor).toBe("stripe");
          expect(checkout.status).toBe("open");
          expect(typeof checkout.url).toBe("string");
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
    "fails with NotFound for a non-existent checkout id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed checkout id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
