import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("productscreate", () => {
  it(
    "creates a one-time product with a fixed price",
    { timeout: 30_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-product-${testRunId}`,
            description: "distilled product create test",
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1000,
                price_currency: "usd",
              },
            ],
          });

          yield* Ref.set(productIdRef, product.id);

          expect(typeof product.id).toBe("string");
          expect(product.name).toBe(`distilled-polar-product-${testRunId}`);
          expect(product.description).toBe("distilled product create test");
          expect(product.visibility).toBe("draft");
          expect(product.is_archived).toBe(false);
          expect(typeof product.organization_id).toBe("string");
          expect(Array.isArray(product.prices)).toBe(true);
          expect(product.prices.length).toBe(1);
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
    "rejects an empty prices array with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productscreate({
          name: `distilled-polar-product-bad-${testRunId}`,
          prices: [],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
