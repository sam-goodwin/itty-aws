import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import * as Redacted from "effect/Redacted";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { checkoutsclientConfirm } from "../src/operations/checkoutsclientConfirm.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutsclientConfirm", () => {
  it(
    "exercises confirm on a real checkout (success requires a payment token)",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-confirm-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1900,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });
          const clientSecret = Redacted.isRedacted(created.client_secret)
            ? Redacted.value(created.client_secret)
            : created.client_secret;

          // Confirming requires a Stripe confirmation_token_id we don't have
          // in CI, so the call is expected to fail with a typed error. Either
          // outcome on a real client_secret exercises the operation.
          const exit = yield* Effect.exit(
            checkoutsclientConfirm({
              client_secret: clientSecret,
              customer_name: `distilled-${testRunId}`,
              customer_email: testEmail(`distilled+${testRunId}`),
              customer_billing_address: { country: "US" },
            }),
          );

          if (Exit.isSuccess(exit)) {
            expect(exit.value.id).toBe(created.id);
            expect(exit.value.status).toBe("confirmed");
          } else {
            const failure = Cause.findErrorOption(exit.cause);
            expect(failure._tag).toBe("Some");
            if (failure._tag === "Some") {
              expect(failure.value._tag).toBe("RequestValidationError");
            }
          }
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
        checkoutsclientConfirm({
          client_secret: `polar_c_not_a_real_client_secret_${testRunId}_aaaaaaaaaaaaaaaa`,
          customer_email: testEmail(`distilled+${testRunId}`),
          customer_billing_address: { country: "US" },
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
        checkoutsclientConfirm({
          client_secret: "x",
          customer_email: testEmail(`distilled+${testRunId}`),
          customer_billing_address: { country: "US" },
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with RequestValidationError when required fields are missing on a real checkout",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-confirm-br-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 950,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });
          const clientSecret = Redacted.isRedacted(created.client_secret)
            ? Redacted.value(created.client_secret)
            : created.client_secret;

          // Confirm without any of the required customer/billing fields.
          const error = yield* checkoutsclientConfirm({
            client_secret: clientSecret,
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

  it(
    "fails with RequestValidationError when targeting a non-existent product on a real checkout",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-confirm-fb-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 750,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });
          const clientSecret = Redacted.isRedacted(created.client_secret)
            ? Redacted.value(created.client_secret)
            : created.client_secret;

          const error = yield* checkoutsclientConfirm({
            client_secret: clientSecret,
            product_id: "00000000-0000-0000-0000-000000000000",
            customer_email: testEmail(`distilled+${testRunId}`),
            customer_billing_address: { country: "US" },
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
