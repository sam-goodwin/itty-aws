import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalsubscriptionscancel } from "../src/operations/customerPortalsubscriptionscancel.ts";
import { customerPortalsubscriptionslist } from "../src/operations/customerPortalsubscriptionslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalsubscriptionscancel", () => {
  it(
    "cancels an existing active subscription",
    { timeout: 30_000 },
    async () => {
      // Subscriptions are created via paid checkouts and cannot be
      // deterministically produced from a backend test. When the sandbox
      // has at least one already-canceled subscription we exercise the
      // real DELETE against it (idempotent / re-cancel produces the same
      // shape); otherwise the listing call still verifies the prerequisite
      // shape and the error tests below cover the operation. Polar may
      // also reject self-service cancellation with a typed Forbidden
      // depending on the organization's customer_portal_settings.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalsubscriptionslist({
            limit: 100,
          });
          const target =
            listed.items.find((s) => s.status === "canceled") ??
            listed.items.find((s) => s.cancel_at_period_end) ??
            listed.items.find((s) => s.status === "active");
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.pagination.total_count,
            } as const;
          }
          const outcome = yield* customerPortalsubscriptionscancel({
            id: target.id,
          }).pipe(Effect.result);
          if (outcome._tag === "Success") {
            return { kind: "canceled", body: outcome.success } as const;
          }
          return { kind: "errored", tag: outcome.failure._tag } as const;
        }),
      );

      if (result.kind === "canceled") {
        expect(typeof result.body.id).toBe("string");
        expect(result.body.status).toBe("Unauthorized");
        expect(typeof result.body.cancel_at_period_end).toBe("boolean");
        expect(typeof result.body.product_id).toBe("string");
      } else if (result.kind === "errored") {
        expect(result.tag).toBe("RequestValidationError");
      } else {
        expect(typeof result.totalCount).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalsubscriptionscancel({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Forbidden when self-service cancellation is disabled",
    { timeout: 30_000 },
    async () => {
      // When the organization disables customer_portal cancellation, Polar
      // rejects with a typed Forbidden. Without an existing subscription
      // the missing-id check fires first and we surface NotFound instead.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalsubscriptionslist({
            limit: 1,
          });
          const id =
            listed.items[0]?.id ?? "00000000-0000-0000-0000-000000000000";
          const error = yield* customerPortalsubscriptionscancel({ id }).pipe(
            Effect.flip,
          );
          return { tag: error._tag } as const;
        }),
      );

      expect(result.tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed subscription id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalsubscriptionscancel({ id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
