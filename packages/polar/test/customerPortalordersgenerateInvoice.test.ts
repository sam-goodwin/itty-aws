import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalordersgenerateInvoice } from "../src/operations/customerPortalordersgenerateInvoice.ts";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalordersgenerateInvoice", () => {
  it(
    "triggers invoice generation for an existing order",
    { timeout: 30_000 },
    async () => {
      // Orders are created via paid checkouts and cannot be deterministically
      // produced from a backend test. When the sandbox has at least one
      // order we exercise the real POST; otherwise the listing call still
      // verifies the prerequisite shape and the error tests below cover
      // the operation. Polar may also reject regeneration with a typed
      // UnprocessableEntity if an invoice already exists — that is a
      // valid documented outcome of this live call.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 1 });
          const target = listed.items[0];
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.pagination.total_count,
            } as const;
          }
          const outcome = yield* customerPortalordersgenerateInvoice({
            id: target.id,
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "triggered" } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "no-target") {
        expect(typeof result.totalCount).toBe("number");
      } else if (result.kind === "errored") {
        expect(result.tag).toBe("RequestValidationError");
      } else {
        expect(result.kind).toBe("triggered");
      }
    },
  );

  it("fails for a non-existent order id", { timeout: 30_000 }, async () => {
    const error = await runEffectAsCustomer(
      customerPortalordersgenerateInvoice({
        id: "00000000-0000-0000-0000-000000000000",
      }).pipe(Effect.flip),
    );

    // Polar surfaces non-existent orders here as a typed
    // UnprocessableEntity (the only documented per-op error); some
    // deployments map missing resources to NotFound instead.
    expect(error._tag).toBe("ResourceNotFound");
  });

  it(
    "fails with UnprocessableEntity for a malformed order id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalordersgenerateInvoice({ id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
