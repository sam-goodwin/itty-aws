import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { checkoutsclientGet } from "../src/operations/checkoutsclientGet.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutsclientGet", () => {
  it(
    "fetches a checkout by client_secret after creating it",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-client-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1600,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });
          const clientSecret = Redacted.isRedacted(created.client_secret)
            ? Redacted.value(created.client_secret)
            : created.client_secret;

          const checkout = yield* checkoutsclientGet({
            client_secret: clientSecret,
          });

          expect(checkout.id).toBe(created.id);
          expect(checkout.payment_processor).toBe("stripe");
          expect(checkout.status).toBe("open");
          expect(typeof checkout.url).toBe("string");
          expect(typeof checkout.amount).toBe("number");
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
    "fails with NotFound for a non-existent client_secret",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsclientGet({
          client_secret: `polar_c_not_a_real_client_secret_${testRunId}_aaaaaaaaaaaaaaaa`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed client_secret",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsclientGet({ client_secret: "x" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
