import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerscreate } from "../src/operations/customerscreate.ts";
import { customersdelete } from "../src/operations/customersdelete.ts";
import { productscreate } from "../src/operations/productscreate.ts";
import { productsupdate } from "../src/operations/productsupdate.ts";
import { subscriptionscreate } from "../src/operations/subscriptionscreate.ts";
import { subscriptionsrevoke } from "../src/operations/subscriptionsrevoke.ts";
import {
  hasLivePolarCredentials,
  runEffect,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("subscriptionsrevoke", () => {
  it("revokes an active subscription", { timeout: 120_000 }, async () => {
    const email = testEmail(
      `distilled.polar.subrevoke.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
    );
    const productName = `distilled-subrevoke-product-${testRunId}`;

    const result = await runEffect(
      Effect.gen(function* () {
        const customer = yield* customerscreate({
          email,
          name: `Distilled SubRevoke ${testRunId}`,
          metadata: { distilled: true, testRunId },
        });
        const product = yield* productscreate({
          name: productName,
          description: "Created by distilled subscriptionsrevoke test.",
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
          const revoked = yield* subscriptionsrevoke({ id: created.id });
          return { customer, product, created, revoked };
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

    expect(result.revoked.id).toBe(result.created.id);
    expect(result.revoked.status).toBe("canceled");
  });

  it(
    "fails with NotFound for a non-existent subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        subscriptionsrevoke({
          id: "00000000-0000-4000-8000-000000000000",
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
        subscriptionsrevoke({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects revoking an already-revoked subscription",
    { timeout: 120_000 },
    async () => {
      const email = testEmail(
        `distilled.polar.subrevoke.fb.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
      );
      const productName = `distilled-subrevoke-fb-product-${testRunId}`;

      const error = await runEffect(
        Effect.gen(function* () {
          const customer = yield* customerscreate({
            email,
            name: `Distilled SubRevoke FB ${testRunId}`,
            metadata: { distilled: true, testRunId },
          });
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled subscriptionsrevoke test.",
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
            return yield* subscriptionsrevoke({ id: created.id }).pipe(
              Effect.flip,
            );
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
    "surfaces a Conflict when concurrent revokes race for the same subscription",
    { timeout: 120_000 },
    async () => {
      const email = testEmail(
        `distilled.polar.subrevoke.cf.${testRunId.replace(/[^a-z0-9]/gi, ".")}`,
      );
      const productName = `distilled-subrevoke-cf-product-${testRunId}`;

      const tags = await runEffect(
        Effect.gen(function* () {
          const customer = yield* customerscreate({
            email,
            name: `Distilled SubRevoke CF ${testRunId}`,
            metadata: { distilled: true, testRunId },
          });
          const product = yield* productscreate({
            name: productName,
            description: "Created by distilled subscriptionsrevoke test.",
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

            const attempts = yield* Effect.all(
              [
                subscriptionsrevoke({ id: created.id }).pipe(
                  Effect.matchEffect({
                    onFailure: (e) => Effect.succeed(e._tag),
                    onSuccess: () => Effect.succeed("ok"),
                  }),
                ),
                subscriptionsrevoke({ id: created.id }).pipe(
                  Effect.matchEffect({
                    onFailure: (e) => Effect.succeed(e._tag),
                    onSuccess: () => Effect.succeed("ok"),
                  }),
                ),
                subscriptionsrevoke({ id: created.id }).pipe(
                  Effect.matchEffect({
                    onFailure: (e) => Effect.succeed(e._tag),
                    onSuccess: () => Effect.succeed("ok"),
                  }),
                ),
              ],
              { concurrency: "unbounded" },
            );
            return attempts;
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

      const failures = tags.filter((t) => t !== "ok");
      expect(failures.length).toBeGreaterThan(0);
      for (const tag of failures) {
        expect(tag).toBe("AlreadyCanceledSubscription");
      }
    },
  );
});
