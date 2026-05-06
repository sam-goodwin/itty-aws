import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { benefitscreate } from "../src/operations/benefitscreate.ts";
import { benefitsdelete } from "../src/operations/benefitsdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsget } from "../src/operations/productsget.ts";
import { productslist } from "../src/operations/productslist.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { productsupdateBenefits } from "../src/operations/productsupdateBenefits.ts";
import {
  hasLivePolarCredentials,
  organizationId,
  runEffect,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("Products", () => {
  it(
    "creates, gets, lists, attaches benefits, and archives a product",
    { timeout: 120_000 },
    async () => {
      const name = `distilled-polar-product-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          let benefitId: string | undefined;
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
            const benefit = yield* benefitscreate({
              type: "custom",
              description: `distilled-product-benefit-${testRunId.slice(-10)}`,
              organization_id: organizationId,
              metadata: {
                distilled: true,
                testRunId,
              },
              properties: {},
            });
            benefitId = benefit.id;
            const fetched = yield* productsget({ id: created.id });
            const listed = yield* productslist({
              query: name,
              is_archived: false,
              limit: 100,
            });
            const withBenefits = yield* productsupdateBenefits({
              id: created.id,
              benefits: [benefit.id],
            });

            const archived = yield* productsupdate({
              id: created.id,
              is_archived: true,
            });

            return {
              created,
              benefit,
              fetched,
              listed,
              withBenefits,
              archived,
            };
          }).pipe(
            Effect.ensuring(
              Effect.all(
                [
                  productsupdate({
                    id: created.id,
                    is_archived: true,
                  }).pipe(Effect.ignore),
                  benefitId
                    ? benefitsdelete({ id: benefitId }).pipe(Effect.ignore)
                    : Effect.void,
                ],
                { concurrency: "unbounded" },
              ),
            ),
          );
        }),
      );

      expect(result.created.id).toBeTruthy();
      expect(result.created.name).toBe(name);
      expect(result.fetched.id).toBe(result.created.id);
      expect(
        result.listed.items.some((product) => product.id === result.created.id),
      ).toBe(true);
      expect(
        result.withBenefits.benefits.some(
          (benefit) => benefit.id === result.benefit.id,
        ),
      ).toBe(true);
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
