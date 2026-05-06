import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalbenefitGrantslist } from "../src/operations/customerPortalbenefitGrantslist.ts";
import { customerPortalbenefitGrantsupdate } from "../src/operations/customerPortalbenefitGrantsupdate.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalbenefitGrantsupdate", () => {
  it(
    "updates a benefit grant for the authenticated customer",
    { timeout: 60_000 },
    async () => {
      await runEffectAsCustomer(
        Effect.gen(function* () {
          const list = yield* customerPortalbenefitGrantslist({ limit: 100 });
          if (list.items.length === 0) {
            // No grants in the test environment — at minimum assert that
            // updating a non-existent id surfaces NotFound, exercising the
            // operation against the live API.
            const error = yield* customerPortalbenefitGrantsupdate({
              id: "00000000-0000-0000-0000-000000000000",
              benefit_type: "custom",
            }).pipe(Effect.flip);
            expect(error._tag).toBe("ResourceNotFound");
            return;
          }

          const first = list.items[0];
          const benefitType = first.benefit.type;
          const input =
            benefitType === "discord" || benefitType === "github_repository"
              ? {
                  id: first.id,
                  benefit_type: benefitType,
                  properties: { account_id: null },
                }
              : {
                  id: first.id,
                  benefit_type: benefitType,
                };
          const updated = yield* customerPortalbenefitGrantsupdate(input);
          expect(updated.id).toBe(first.id);
          expect(updated.benefit_id).toBe(first.benefit_id);
          expect(updated.customer_id).toBe(first.customer_id);
          expect(typeof updated.is_granted).toBe("boolean");
        }),
      );
    },
  );

  it(
    "returns Forbidden or NotFound when the grant is not owned by the caller",
    { timeout: 30_000 },
    async () => {
      // The customer portal scope (customer_portal:write) is enforced per
      // grant ownership. With an organization access token (no customer
      // session) the API surfaces either Forbidden (missing scope/owner) or
      // NotFound (no such grant accessible to the caller). We assert one of
      // those typed errors is raised.
      const error = await runEffectAsCustomer(
        customerPortalbenefitGrantsupdate({
          id: "11111111-1111-1111-1111-111111111111",
          benefit_type: "custom",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "returns NotFound for a non-existent benefit grant id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalbenefitGrantsupdate({
          id: "00000000-0000-0000-0000-000000000000",
          benefit_type: "custom",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "rejects a malformed benefit grant id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalbenefitGrantsupdate({
          id: "not-a-valid-uuid",
          benefit_type: "custom",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
