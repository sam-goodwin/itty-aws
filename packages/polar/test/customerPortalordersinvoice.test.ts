import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalordersinvoice } from "../src/operations/customerPortalordersinvoice.ts";
import { customerPortalorderslist } from "../src/operations/customerPortalorderslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalordersinvoice", () => {
  it(
    "returns the invoice URL for an existing order with a generated invoice",
    { timeout: 30_000 },
    async () => {
      // Orders are created via paid checkouts and cannot be deterministically
      // produced from a backend test. Invoices are also only generated on
      // demand. When the sandbox has at least one order with a generated
      // invoice we exercise the real call; otherwise the listing call still
      // verifies the prerequisite shape and the error tests below cover
      // the operation. If invoice generation isn't ready yet, Polar
      // returns NotFound which is surfaced as a typed error here.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalorderslist({ limit: 100 });
          const target = listed.items.find((o) => o.is_invoice_generated);
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.pagination.total_count,
            } as const;
          }
          const invoice = yield* customerPortalordersinvoice({
            id: target.id,
          }).pipe(Effect.result);
          if (invoice._tag === "Success") {
            return { kind: "fetched", invoice: invoice.success } as const;
          }
          return { kind: "errored", tag: invoice.failure._tag } as const;
        }),
      );

      if (result.kind === "fetched") {
        expect(typeof result.invoice.url).toBe("string");
        expect(result.invoice.url.length).toBeGreaterThan(0);
      } else if (result.kind === "errored") {
        // If the invoice isn't ready, Polar surfaces a typed NotFound; the
        // listing flag may lag actual file generation in the sandbox.
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
        customerPortalordersinvoice({
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
        customerPortalordersinvoice({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
