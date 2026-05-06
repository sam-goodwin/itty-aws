import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { subscriptionscreate } from "../src/operations/subscriptionscreate.ts";
import { subscriptionsrevoke } from "../src/operations/subscriptionsrevoke.ts";
import { subscriptionsupdate } from "../src/operations/subscriptionsupdate.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("subscriptionsupdate", () => {
  it(
    "updates a subscription's cancel_at_period_end flag",
    { timeout: 120_000 },
    async () => {
      const email = testEmail(
        `distilled.polar.subupdate.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
      );
      const productName = `distilled-subupdate-product-${testRunId}`;

      const result = await runEffect(
        Effect.gen(function* () {
          const customer = yield* customerscreate({
            email,
            name: `Distilled SubUpdate ${testRunId}`,
            metadata: { distilled: true, testRunId },
          });
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled subscriptionsupdate test.",
            visibility: "private",
            recurring_interval: "month",
            prices: [{ amount_type: "free" }],
            metadata: { distilled: true, testRunId },
          });

          return yield* Effect.gen(function* () {
            const created = yield* subscriptionscreate({
              customer_id: customer.id,
              product_id: product.id,
              metadata: { distilled: true, testRunId },
            });
            const updated = yield* subscriptionsupdate({
              id: created.id,
              cancel_at_period_end: true,
              customer_cancellation_reason: "other",
              customer_cancellation_comment: "distilled test",
            });
            return { customer, product, created, updated };
          }).pipe(
            Effect.ensuring(
              Effect.all(
                [
                  productsupdate({
                    id: product.id,
                    is_archived: true,
                  }).pipe(Effect.ignore),
                  customersdelete({ id: customer.id }).pipe(Effect.ignore),
                ],
                { concurrency: "unbounded" },
              ),
            ),
          );
        }).pipe(
          Effect.flatMap((res) =>
            subscriptionsrevoke({ id: res.created.id }).pipe(
              Effect.ignore,
              Effect.as(res),
            ),
          ),
        ),
      );

      expect(result.updated.id).toBe(result.created.id);
      expect(result.updated.cancel_at_period_end).toBe(true);
    },
  );

  it(
    "fails with NotFound for a non-existent subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionsupdate({
          id: "00000000-0000-4000-8000-000000000000",
          cancel_at_period_end: false,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "surfaces validation details for a malformed subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionsupdate({
          id: "not-a-uuid",
          cancel_at_period_end: false,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a second revoke on an already-revoked subscription",
    { timeout: 120_000 },
    async () => {
      const email = testEmail(
        `distilled.polar.subupdate.fb.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
      );
      const productName = `distilled-subupdate-fb-product-${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          const customer = yield* customerscreate({
            email,
            name: `Distilled SubUpdate FB ${testRunId}`,
            metadata: { distilled: true, testRunId },
          });
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled subscriptionsupdate test.",
            visibility: "private",
            recurring_interval: "month",
            prices: [{ amount_type: "free" }],
            metadata: { distilled: true, testRunId },
          });

          return yield* Effect.gen(function* () {
            const created = yield* subscriptionscreate({
              customer_id: customer.id,
              product_id: product.id,
              metadata: { distilled: true, testRunId },
            });
            yield* subscriptionsrevoke({ id: created.id });
            return yield* subscriptionsupdate({
              id: created.id,
              revoke: true,
            }).pipe(Effect.flip);
          }).pipe(
            Effect.ensuring(
              Effect.all(
                [
                  productsupdate({
                    id: product.id,
                    is_archived: true,
                  }).pipe(Effect.ignore),
                  customersdelete({ id: customer.id }).pipe(Effect.ignore),
                ],
                { concurrency: "unbounded" },
              ),
            ),
          );
        }),
      );

      expect(error._tag).toBe("AlreadyCanceledSubscription");
    },
  );

  it(
    "rejects updating a revoked subscription's product",
    { timeout: 120_000 },
    async () => {
      const email = testEmail(
        `distilled.polar.subupdate.cf.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
      );
      const productName = `distilled-subupdate-cf-product-${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          const customer = yield* customerscreate({
            email,
            name: `Distilled SubUpdate CF ${testRunId}`,
            metadata: { distilled: true, testRunId },
          });
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled subscriptionsupdate test.",
            visibility: "private",
            recurring_interval: "month",
            prices: [{ amount_type: "free" }],
            metadata: { distilled: true, testRunId },
          });

          return yield* Effect.gen(function* () {
            const created = yield* subscriptionscreate({
              customer_id: customer.id,
              product_id: product.id,
              metadata: { distilled: true, testRunId },
            });
            yield* subscriptionsrevoke({ id: created.id });
            return yield* subscriptionsupdate({
              id: created.id,
              product_id: product.id,
            }).pipe(Effect.flip);
          }).pipe(
            Effect.ensuring(
              Effect.all(
                [
                  productsupdate({
                    id: product.id,
                    is_archived: true,
                  }).pipe(Effect.ignore),
                  customersdelete({ id: customer.id }).pipe(Effect.ignore),
                ],
                { concurrency: "unbounded" },
              ),
            ),
          );
        }),
      );

      expect(error._tag).toBe("AlreadyCanceledSubscription");
    },
  );
});
