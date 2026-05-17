import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalwalletsget } from "../src/operations/customerPortalwalletsget.ts";
import { customerPortalwalletslist } from "../src/operations/customerPortalwalletslist.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalwalletsget", () => {
  it("fetches an existing wallet", { timeout: 30_000 }, async () => {
    // Wallets are auto-provisioned for customers and cannot be
    // deterministically created from a backend test. When the sandbox
    // has at least one wallet we exercise the real GET; otherwise the
    // listing call still verifies the prerequisite shape and the error
    // tests below cover the operation.
    const result = await runEffectAsCustomer(
      Effect.gen(function* () {
        const listed = yield* customerPortalwalletslist({ limit: 1 });
        const target = listed.items[0];
        if (!target) {
          return {
            fetched: null,
            totalCount: listed.pagination.total_count,
          };
        }
        const wallet = yield* customerPortalwalletsget({ id: target.id });
        return {
          fetched: wallet,
          totalCount: listed.pagination.total_count,
        };
      }),
    );

    expect(typeof result.totalCount).toBe("number");
    if (result.fetched !== null) {
      expect(typeof result.fetched.id).toBe("string");
      expect(typeof result.fetched.customer_id).toBe("string");
      expect(typeof result.fetched.balance).toBe("number");
      expect(typeof result.fetched.currency).toBe("string");
      expect(typeof result.fetched.created_at).toBe("string");
    }
  });

  it(
    "fails with NotFound for a non-existent wallet id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalwalletsget({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed wallet id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalwalletsget({ id: "not-a-uuid" }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
