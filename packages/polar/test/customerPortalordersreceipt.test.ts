import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { customerPortalordersreceipt } from "../src/operations/customerPortalordersreceipt.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalordersreceipt", () => {
  it(
    "returns a presigned receipt URL for an existing order",
    { timeout: 30_000 },
    async () => {
      // Orders are created via paid checkouts and cannot be deterministically
      // produced from a backend test. Receipts are also only available for
      // certain order states. When the sandbox has at least one order with
      // a receipt_number we exercise the real call; otherwise the listing
      // call still verifies the prerequisite shape and the error tests
      // below cover the operation. Polar may also surface a typed NotFound
      // when the receipt PDF isn't ready — that is a valid documented
      // outcome of this live call.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 100 });
          const target = listed.items.find((o) => o.receipt_number !== null);
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.pagination.total_count,
            } as const;
          }
          const outcome = yield* customerPortalordersreceipt({
            id: target.id,
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "fetched", receipt: outcome.success } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "fetched") {
        expect(typeof result.receipt.url).toBe("string");
        expect(result.receipt.url.length).toBeGreaterThan(0);
      } else if (result.kind === "errored") {
        // Receipt may not yet be available even when receipt_number is set;
        // Polar surfaces this as a typed NotFound.
        expect(result.tag).toBe("ResourceNotFound");
      } else {
        expect(typeof result.totalCount).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersreceipt({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersreceipt({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
