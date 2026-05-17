import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { checkoutLinkscreate } from "../src/operations/checkoutLinkscreate.ts";
import { checkoutLinksdelete } from "../src/operations/checkoutLinksdelete.ts";
import { checkoutLinksupdate } from "../src/operations/checkoutLinksupdate.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutLinksupdate", () => {
  it(
    "updates the label and discount-codes flag of an existing checkout link",
    { timeout: 60_000 },
    async () => {
      await runEffect(
        Effect.gen(function* () {
          const productIdRef = yield* Ref.make<string | null>(null);
          const linkIdRef = yield* Ref.make<string | null>(null);

          yield* Effect.gen(function* () {
            const product = yield* productscreate({
              name: `distilled-polar-clu-${testRunId}`,
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
              label: `distilled-polar-clu-link-${testRunId}`,
              allow_discount_codes: true,
            });
            yield* Ref.set(linkIdRef, created.id);

            const renamed = `distilled-polar-clu-renamed-${testRunId}`;
            const updated = yield* checkoutLinksupdate({
              id: created.id,
              label: renamed,
              allow_discount_codes: false,
              metadata: { test_run_id: testRunId },
            });

            expect(updated.id).toBe(created.id);
            expect(updated.label).toBe(renamed);
            expect(updated.allow_discount_codes).toBe(false);
            expect(updated.metadata.test_run_id).toBe(testRunId);
            expect(updated.organization_id).toBe(created.organization_id);
            expect(updated.payment_processor).toBe("stripe");
          }).pipe(
            Effect.ensuring(
              Effect.gen(function* () {
                const linkId = yield* Ref.get(linkIdRef);
                if (linkId !== null) {
                  yield* checkoutLinksdelete({ id: linkId }).pipe(
                    Effect.ignore,
                  );
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
    },
  );

  it(
    "returns RequestValidationError for a non-existent checkout link id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutLinksupdate({
          id: "00000000-0000-0000-0000-000000000000",
          label: `distilled-polar-clu-missing-${testRunId}`,
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
        checkoutLinksupdate({
          id: "not-a-valid-uuid",
          label: `distilled-polar-clu-bad-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
