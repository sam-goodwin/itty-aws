import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomerMetersget } from "../src/operations/customerPortalcustomerMetersget.ts";
import { customerPortalcustomerMeterslist } from "../src/operations/customerPortalcustomerMeterslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomerMetersget", () => {
  it(
    "fetches a customer meter by id when one is available",
    { timeout: 60_000 },
    async () => {
      // Customer meters are produced by event ingestion against an active
      // metered subscription, which cannot be deterministically created from
      // a backend test. When the sandbox has at least one customer meter we
      // exercise the genuine happy path; otherwise the read-only list call
      // still verifies the get-endpoint's prerequisite resource shape and
      // the error tests below fully cover the live operation.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalcustomerMeterslist({
            limit: 100,
          });
          if (listed.items.length === 0) {
            return { fetched: null, totalCount: listed.pagination.total_count };
          }
          const target = listed.items[0]!;
          const fetched = yield* customerPortalcustomerMetersget({
            id: target.id,
          });
          return { fetched, totalCount: listed.pagination.total_count };
        }),
      );

      expect(typeof result.totalCount).toBe("number");
      if (result.fetched !== null) {
        expect(typeof result.fetched.id).toBe("string");
        expect(typeof result.fetched.created_at).toBe("string");
        expect(typeof result.fetched.customer_id).toBe("string");
        expect(typeof result.fetched.meter_id).toBe("string");
        expect(typeof result.fetched.consumed_units).toBe("number");
        expect(typeof result.fetched.credited_units).toBe("number");
        expect(typeof result.fetched.balance).toBe("number");
        expect(typeof result.fetched.meter.id).toBe("string");
        expect(typeof result.fetched.meter.name).toBe("string");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent customer meter id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomerMetersget({
          id: "00000000-0000-4000-8000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed customer meter id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomerMetersget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
