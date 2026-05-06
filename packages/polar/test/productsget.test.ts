import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsget } from "../src/operations/productsget.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("productsget", () => {
  it(
    "fetches a product by id after creating it",
    { timeout: 30_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const created = yield* productscreate({
            name: `distilled-polar-product-get-${testRunId}`,
            description: "distilled product get test",
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1500,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, created.id);

          const product = yield* productsget({ id: created.id });

          expect(product.id).toBe(created.id);
          expect(product.name).toBe(`distilled-polar-product-get-${testRunId}`);
          expect(product.description).toBe("distilled product get test");
          expect(product.visibility).toBe("public");
          expect(typeof product.organization_id).toBe("string");
          expect(typeof product.is_recurring).toBe("boolean");
          expect(typeof product.is_archived).toBe("boolean");
          expect(Array.isArray(product.prices)).toBe(true);
          expect(Array.isArray(product.benefits)).toBe(true);
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
    "fails with RequestValidationError for a non-existent product id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productsget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed product id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productsget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
