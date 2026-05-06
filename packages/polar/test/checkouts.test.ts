import * as Effect from "effect/Effect";
import * as Redacted from "effect/Redacted";
import { describe, expect, it } from "vitest";
import { checkoutsclientConfirm } from "../src/operations/checkoutsclientConfirm.ts";
import { checkoutsclientGet } from "../src/operations/checkoutsclientGet.ts";
import { checkoutsclientUpdate } from "../src/operations/checkoutsclientUpdate.ts";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { checkoutsget } from "../src/operations/checkoutsget.ts";
import { checkoutslist } from "../src/operations/checkoutslist.ts";
import { checkoutsupdate } from "../src/operations/checkoutsupdate.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Checkouts", () => {
  it(
    "creates, gets, lists, and updates a checkout session",
    { timeout: 120_000 },
    async () => {
      const productName = `distilled-polar-checkout-${testRunId}`;
      const customerEmail = `distilled.checkout.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`;
      const updatedEmail = `distilled.checkout.updated.${testRunId.replace(/[^a-z0-9]/gi, ".")}@gmail.com`;

      const result = await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled Polar SDK checkout tests.",
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
            const created = yield* checkoutscreate({
              products: [product.id],
              customer_email: customerEmail,
              customer_name: `Distilled Checkout ${testRunId}`,
              success_url: "https://example.com/distilled/polar/success",
              return_url: "https://example.com/distilled/polar/return",
              allow_discount_codes: true,
              metadata: {
                distilled: true,
                testRunId,
              },
            });
            const fetched = yield* checkoutsget({ id: created.id });
            const listed = yield* checkoutslist({
              query: customerEmail,
              limit: 100,
            });
            const updated = yield* checkoutsupdate({
              id: created.id,
              customer_email: updatedEmail,
              customer_name: `Distilled Checkout Updated ${testRunId}`,
            });
            const clientSecret = Redacted.value(created.client_secret);
            const clientFetched = yield* checkoutsclientGet({
              client_secret: clientSecret,
            });
            const clientUpdated = yield* checkoutsclientUpdate({
              client_secret: clientSecret,
              customer_name: `Distilled Checkout Client ${testRunId}`,
            });
            const confirmError = yield* checkoutsclientConfirm({
              client_secret: clientSecret,
            }).pipe(Effect.flip);

            return {
              product,
              created,
              fetched,
              listed,
              updated,
              clientFetched,
              clientUpdated,
              confirmError,
            };
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
      expect(
        result.created.products.some(
          (product) => product.id === result.product.id,
        ),
      ).toBe(true);
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.items.some(
          (checkout) => checkout.id === result.created.id,
        ),
      ).toBe(true);
      expect(result.updated.customer_email).toBe(updatedEmail);
      expect(result.clientFetched.id).toBe(result.created.id);
      expect(result.clientUpdated.id).toBe(result.created.id);
      expect(result.clientUpdated.customer_name).toBe(
        `Distilled Checkout Client ${testRunId}`,
      );
      expect(result.confirmError._tag).toBe("UnprocessableEntity");
    },
  );

  it(
    "fails with NotFound for a missing checkout",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
