import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutLinkscreate } from "../src/operations/checkoutLinkscreate.ts";
import { checkoutLinksdelete } from "../src/operations/checkoutLinksdelete.ts";
import { checkoutLinksget } from "../src/operations/checkoutLinksget.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutLinksget", () => {
  it("gets a checkout link by id", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const productIdRef = yield* Ref.make<string | null>(null);
        const linkIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-clg-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1000,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const created = yield* checkoutLinkscreate({
            payment_processor: "stripe",
            products: [product.id],
            label: `distilled-polar-clg-link-${testRunId}`,
          });
          yield* Ref.set(linkIdRef, created.id);

          const fetched = yield* checkoutLinksget({ id: created.id });
          expect(fetched.id).toBe(created.id);
          expect(fetched.organization_id).toBe(created.organization_id);
          expect(fetched.payment_processor).toBe("stripe");
          expect(fetched.label).toBe(created.label);
          expect(typeof fetched.url).toBe("string");
          expect(fetched.url.length).toBeGreaterThan(0);
          expect(Array.isArray(fetched.products)).toBe(true);
          expect(fetched.products.some((p) => p.id === product.id)).toBe(true);
        }).pipe(
          Effect.ensuring(
            Effect.gen(function* () {
              const linkId = yield* Ref.get(linkIdRef);
              if (linkId !== null) {
                yield* checkoutLinksdelete({ id: linkId }).pipe(Effect.ignore);
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
  });

  it(
    "returns RequestValidationError for a non-existent checkout link id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutLinksget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a malformed checkout link id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutLinksget({ id: "not-a-valid-uuid" }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
