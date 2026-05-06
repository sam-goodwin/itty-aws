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

describeLive("checkoutLinksdelete", () => {
  it("deletes an existing checkout link", { timeout: 60_000 }, async () => {
    await runEffect(
      Effect.gen(function* () {
        const productIdRef = yield* Ref.make<string | null>(null);
        const linkIdRef = yield* Ref.make<string | null>(null);

        yield* Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-cld-${testRunId}`,
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
            label: `distilled-polar-cld-link-${testRunId}`,
            allow_discount_codes: true,
          });
          yield* Ref.set(linkIdRef, created.id);

          const result = yield* checkoutLinksdelete({ id: created.id });
          expect(result).toBeUndefined();

          // After delete, the link should be gone — clear the ref so cleanup
          // doesn't double-delete and the subsequent get must fail.
          yield* Ref.set(linkIdRef, null);

          const lookupError = yield* checkoutLinksget({
            id: created.id,
          }).pipe(Effect.flip);
          expect(lookupError._tag).toBe("ResourceNotFound");
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
        checkoutLinksdelete({
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
        checkoutLinksdelete({
          id: "not-a-valid-uuid",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
