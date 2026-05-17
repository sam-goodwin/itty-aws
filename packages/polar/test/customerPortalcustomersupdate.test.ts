import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomersget } from "../src/operations/customerPortalcustomersget.ts";
import { customerPortalcustomersupdate } from "../src/operations/customerPortalcustomersupdate.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersupdate", () => {
  it(
    "updates the authenticated customer billing_name",
    { timeout: 60_000 },
    async () => {
      await runEffectAsCustomer(
        Effect.gen(function* () {
          const before = yield* customerPortalcustomersget({});
          const newBillingName = `distilled-polar-portal-billing-${testRunId}`;
          const updated = yield* customerPortalcustomersupdate({
            billing_name: newBillingName,
          });
          expect(updated.id).toBe(before.id);
          expect(updated.billing_name).toBe(newBillingName);
          expect(typeof updated.email_verified).toBe("boolean");
          expect(typeof updated.oauth_accounts).toBe("object");

          // Restore the prior billing_name to avoid bleeding state across runs.
          yield* customerPortalcustomersupdate({
            billing_name: before.billing_name,
          });
        }),
      );
    },
  );

  it(
    "rejects an invalid tax_id format with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersupdate({
          tax_id: "not-a-valid-tax-id",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
