import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { customerPortalcustomerSessiongetAuthenticatedUser } from "../src/operations/customerPortalcustomerSessiongetAuthenticatedUser.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomerSessiongetAuthenticatedUser", () => {
  it("returns the authenticated portal user", { timeout: 30_000 }, async () => {
    const result = await runEffectAsCustomer(
      customerPortalcustomerSessiongetAuthenticatedUser({}),
    );

    expect(typeof result.type).toBe("string");
    expect(result.type.length).toBeGreaterThan(0);
    expect(typeof result.email).toBe("string");
    expect(result.email.length).toBeGreaterThan(0);
    expect(typeof result.customer_id).toBe("string");
    expect(result.customer_id.length).toBeGreaterThan(0);
    expect(result.name === null || typeof result.name === "string").toBe(true);
  });

  it(
    "produces a typed failure if the authenticated-user call cannot complete",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffectAsCustomer(
        Effect.exit(customerPortalcustomerSessiongetAuthenticatedUser({})),
      );
      if (Exit.isFailure(exit)) {
        const failureOption = Cause.findErrorOption(exit.cause);
        expect(failureOption._tag).toBe("Some");
        if (failureOption._tag === "Some") {
          const tag = (failureOption.value as { _tag: string })._tag;
          expect(typeof tag).toBe("string");
          expect(tag.length).toBeGreaterThan(0);
          expect(tag).not.toMatch(/^Un[a-z]+Error$/i);
        }
      } else {
        expect(typeof exit.value.email).toBe("string");
      }
    },
  );
});
