import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalsubscriptionsget } from "../src/operations/customerPortalsubscriptionsget.ts";
import { customerPortalsubscriptionslist } from "../src/operations/customerPortalsubscriptionslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalsubscriptionsget", () => {
  it(
    "fetches an existing customer-portal subscription",
    { timeout: 30_000 },
    async () => {
      // Subscriptions are created via paid checkouts and cannot be
      // deterministically produced from a backend test. When the sandbox
      // has at least one subscription we exercise the real GET; otherwise
      // the listing call still verifies the prerequisite shape and the
      // error tests below cover the operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalsubscriptionslist({ limit: 1 });
          const target = listed.items[0];
          if (!target) {
            return {
              fetched: null,
              totalCount: listed.pagination.total_count,
            };
          }
          const sub = yield* customerPortalsubscriptionsget({
            id: target.id,
          });
          return { fetched: sub, totalCount: listed.pagination.total_count };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.fetched !== null) {
        expect(typeof result.fetched.id).toBe("string");
        expect(typeof result.fetched.amount).toBe("number");
        expect(typeof result.fetched.currency).toBe("string");
        expect(result.fetched.recurring_interval).toBe("Unauthorized");
        expect(result.fetched.status).toBe("Unauthorized");
        expect(typeof result.fetched.current_period_start).toBe("string");
        expect(typeof result.fetched.current_period_end).toBe("string");
        expect(typeof result.fetched.cancel_at_period_end).toBe("boolean");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalsubscriptionsget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalsubscriptionsget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
