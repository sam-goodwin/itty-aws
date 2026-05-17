import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutscreate } from "../src/operations/checkoutscreate.ts";
import { checkoutsupdate } from "../src/operations/checkoutsupdate.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutsupdate", () => {
  it(
    "updates customer details and metadata on an open checkout",
    { timeout: 60_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-checkout-update-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1700,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });

          const newName = `distilled-${testRunId}`;
          const updated = yield* checkoutsupdate({
            id: created.id,
            customer_name: newName,
            metadata: { run: testRunId },
          });

          expect(updated.id).toBe(created.id);
          expect(updated.customer_name).toBe(newName);
          expect(updated.metadata.run).toBe(testRunId);
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
    "fails with RequestValidationError for a non-existent checkout id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsupdate({
          id: "00000000-0000-0000-0000-000000000000",
          customer_name: `distilled-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed checkout id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutsupdate({
          id: "not-a-valid-uuid",
          customer_name: `distilled-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
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
            name: `distilled-polar-checkout-update-fb-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 800,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutscreate({ products: [product.id] });

          const error = yield* checkoutsupdate({
            id: created.id,
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
