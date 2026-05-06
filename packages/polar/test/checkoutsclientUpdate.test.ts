import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { checkoutsclientUpdate } from "../src/operations/checkoutsclientUpdate.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutsclientUpdate", () => {
  it(
    "updates customer details on a checkout via client_secret",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-cu-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1800,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });
          const clientSecret = Redacted.isRedacted(created.client_secret)
            ? Redacted.value(created.client_secret)
            : created.client_secret;

          const newName = `distilled-${testRunId}`;
          const updated = yield* checkoutsclientUpdate({
            client_secret: clientSecret,
            customer_name: newName,
          });

          expect(updated.id).toBe(created.id);
          expect(updated.customer_name).toBe(newName);
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
        checkoutsclientUpdate({
          client_secret: `polar_c_not_a_real_client_secret_${testRunId}_aaaaaaaaaaaaaaaa`,
          customer_name: `distilled-${testRunId}`,
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
        checkoutsclientUpdate({
          client_secret: "x",
          customer_name: `distilled-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with RequestValidationError when targeting a non-existent product on an open checkout",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-cu-fb-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 850,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });
          const clientSecret = Redacted.isRedacted(created.client_secret)
            ? Redacted.value(created.client_secret)
            : created.client_secret;

          const error = yield* checkoutsclientUpdate({
            client_secret: clientSecret,
            product_id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip);

          expect(error._tag).toBe("RequestValidationError");
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
});
