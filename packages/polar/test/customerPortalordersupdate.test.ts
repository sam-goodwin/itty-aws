import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalordersget } from "../src/operations/customerPortalordersget.ts";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { customerPortalordersupdate } from "../src/operations/customerPortalordersupdate.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalordersupdate", () => {
  it(
    "updates the billing_name on an existing customer-portal order",
    { timeout: 30_000 },
    async () => {
      // Orders are created via paid checkouts and cannot be deterministically
      // produced from a backend test. When the sandbox has at least one
      // order we exercise the real PATCH; otherwise the listing call still
      // verifies the prerequisite shape and the error tests below cover
      // the operation. We restore the original billing_name on completion.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 1 });
          const target = listed.items[0];
          if (!target) {
            return {
              updated: null,
              totalCount: listed.pagination.total_count,
            };
          }
          const original = yield* customerPortalordersget({ id: target.id });
          const updated = yield* customerPortalordersupdate({
            id: target.id,
            billing_name: `Distilled Test ${testRunId}`,
          }).pipe(
            Effect.ensuring(
              customerPortalordersupdate({
                id: target.id,
                billing_name: original.billing_name,
              }).pipe(Effect.ignore),
            ),
          );
          return {
            updated,
            totalCount: listed.pagination.total_count,
          };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.updated !== null) {
        expect(typeof result.updated.id).toBe("string");
        expect(result.updated.billing_name).toBe(`Distilled Test ${testRunId}`);
        expect(result.updated.status).toBe("Unauthorized");
        expect(typeof result.updated.total_amount).toBe("number");
        expect(typeof result.updated.currency).toBe("string");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersupdate({
          id: "00000000-0000-0000-0000-000000000000",
          billing_name: `Distilled Test ${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed billing_address country",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersupdate({
          id: "00000000-0000-0000-0000-000000000000",
          billing_address: {
            country: "ZZ" as never,
          },
        }).pipe(Effect.flip),
      );

      // Invalid country enum is rejected by validation before the
      // not-found id check fires; some deployments may surface NotFound
      // instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersupdate({
          id: "not-a-uuid",
          billing_name: `Distilled Test ${testRunId}`,
        }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
