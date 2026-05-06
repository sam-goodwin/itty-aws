import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalbenefitGrantsget } from "../src/operations/customerPortalbenefitGrantsget.ts";
import { customerPortalbenefitGrantslist } from "../src/operations/customerPortalbenefitGrantslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalbenefitGrantsget", () => {
  it("fetches a benefit grant by id", { timeout: 60_000 }, async () => {
    await runEffectAsCustomer(
      Effect.gen(function* () {
        const list = yield* customerPortalbenefitGrantslist({ limit: 100 });
        if (list.items.length === 0) {
          // No grants in the test environment — at minimum assert that
          // requesting a non-existent id surfaces NotFound, exercising the
          // operation against the live API.
          const error = yield* customerPortalbenefitGrantsget({
            id: "00000000-0000-0000-0000-000000000000",
          }).pipe(Effect.flip);
          expect(error._tag).toBe("ResourceNotFound");
          return;
        }

        const first = list.items[0];
        const fetched = yield* customerPortalbenefitGrantsget({
          id: first.id,
        });
        expect(fetched.id).toBe(first.id);
        expect(fetched.customer_id).toBe(first.customer_id);
        expect(fetched.benefit_id).toBe(first.benefit_id);
        expect(typeof fetched.is_granted).toBe("boolean");
        expect(typeof fetched.is_revoked).toBe("boolean");
        expect(typeof fetched.customer.id).toBe("string");
        expect(typeof fetched.benefit.id).toBe("string");
      }),
    );
  });

  it(
    "returns NotFound for a non-existent benefit grant id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalbenefitGrantsget({
          id: "00000000-0000-0000-0000-000000000000",
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
        customerPortalbenefitGrantsget({ id: "not-a-valid-uuid" }).pipe(
          Effect.flip,
        ),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
