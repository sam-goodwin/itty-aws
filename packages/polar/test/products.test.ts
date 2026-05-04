import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { productscreate } from "../src/operations/productscreate.ts";
import { productslist } from "../src/operations/productslist.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Products", () => {
  it(
    "creates, lists, and archives a product",
    { timeout: 60_000 },
    async () => {
      const name = `distilled-polar-product-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const created = yield* productscreate({
            name,
            description: "Created by distilled Polar SDK integration tests.",
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
            const listed = yield* productslist({
              query: name,
              is_archived: false,
              limit: 100,
            });

            const archived = yield* productsupdate({
              id: created.id,
              is_archived: true,
            });

            return { created, listed, archived };
          }).pipe(
            Effect.ensuring(
              productsupdate({
                id: created.id,
                is_archived: true,
              }).pipe(Effect.ignore),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.name).toBe(name);
      expect(result.listed.items.some((product) => product.id === result.created.id)).toBe(true);
      expect(result.archived.is_archived).toBe(true);
    },
  );

  it(
    "fails with NotFound for a missing product",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        productsupdate({
          id: "00000000-0000-4000-8000-000000000000",
          name: "does-not-exist",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("NotFound");
    },
  );
});
