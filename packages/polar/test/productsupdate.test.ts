import * as Effect from "effect/Effect";
import * as Ref from "effect/Ref";
import { describe, expect, it } from "vitest";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("productsupdate", () => {
  it(
    "updates the description and metadata of an existing product",
    { timeout: 30_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const created = yield* productscreate({
            name: `distilled-polar-product-update-${testRunId}`,
            description: "initial description",
            prices: [
              {
                amount_type: "fixed",
                price_amount: 1200,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, created.id);

          const updated = yield* productsupdate({
            id: created.id,
            description: "updated description",
            metadata: { run: testRunId },
          });

          expect(updated.id).toBe(created.id);
          expect(updated.description).toBe("updated description");
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
    "fails with RequestValidationError for a non-existent product id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productsupdate({
          id: "00000000-0000-0000-0000-000000000000",
          description: "no such product",
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
        productsupdate({
          id: "not-a-valid-uuid",
          description: "malformed id",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden when switching a one-time product to recurring",
    { timeout: 30_000 },
    async () => {
      const productIdRef = await runEffect(Ref.make<string | null>(null));

      await runEffect(
        Effect.gen(function* () {
          const created = yield* productscreate({
            name: `distilled-polar-product-forbidden-${testRunId}`,
            prices: [
              {
                amount_type: "fixed",
                price_amount: 900,
                price_currency: "usd",
              },
            ],
          });
          yield* Ref.set(productIdRef, created.id);

          const error = yield* productsupdate({
            id: created.id,
            recurring_interval: "month",
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
