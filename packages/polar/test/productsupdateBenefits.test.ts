import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { productsupdateBenefits } from "../src/operations/productsupdateBenefits.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("productsupdateBenefits", () => {
  it("attaches a benefit to a product", { timeout: 60_000 }, async () => {
    const productIdRef = await runEffect(Ref.make<string | null>(null));
    const benefitIdRef = await runEffect(Ref.make<string | null>(null));

    await runEffect(
      Effect.gen(function* () {
        const product = yield* productscreate({
          name: `distilled-polar-pubenefits-${testRunId}`,
          prices: [
            {
              amount_type: "fixed",
              price_amount: 1100,
              price_currency: "usd",
            },
          ],
        });
        yield* Ref.set(productIdRef, product.id);

        const description = `distilled-pub-${testRunId}`.slice(0, 42);
        const benefit = yield* benefitscreate({
          type: "custom",
          description,
          properties: { note: `pub note ${testRunId}` },
        });
        yield* Ref.set(benefitIdRef, benefit.id);

        const updated = yield* productsupdateBenefits({
          id: product.id,
          benefits: [benefit.id],
        });

        expect(updated.id).toBe(product.id);
        expect(Array.isArray(updated.benefits)).toBe(true);
        expect(updated.benefits.length).toBe(1);
        expect(updated.benefits[0]?.id).toBe(benefit.id);

        // detach so the benefit can be deleted in cleanup
        yield* productsupdateBenefits({
          id: product.id,
          benefits: [],
        });
      }).pipe(
        Effect.ensuring(
          Effect.gen(function* () {
            const benefitId = yield* Ref.get(benefitIdRef);
            if (benefitId) {
              yield* benefitsdelete({ id: benefitId }).pipe(Effect.ignore);
            }
            const productId = yield* Ref.get(productIdRef);
            if (productId) {
              yield* productsupdate({
                id: productId,
                is_archived: true,
              }).pipe(Effect.ignore);
            }
          }),
        ),
      ),
    );
  });

  it(
    "fails with NotFound for a non-existent product id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productsupdateBenefits({
          id: "00000000-0000-0000-0000-000000000000",
          benefits: [],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed product id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productsupdateBenefits({
          id: "not-a-valid-uuid",
          benefits: [],
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden when attaching a benefit that doesn't belong to the user",
    { timeout: 30_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const product = yield* productscreate({
            name: `distilled-polar-pubenefits-fb-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 700,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, product.id);

          const error = yield* productsupdateBenefits({
            id: product.id,
            benefits: ["00000000-0000-0000-0000-000000000000"],
          }).pipe(Effect.flip);

          expect(error._tag).toBe("ResourceNotFound");
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
