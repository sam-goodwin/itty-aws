import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { customerPortalcustomerSessionintrospect } from "../src/operations/customerPortalcustomerSessionintrospect.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomerSessionintrospect", () => {
  it(
    "introspects the current customer session",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalcustomerSessionintrospect({}),
      );

      expect(typeof result.expires_at).toBe("string");
      expect(result.expires_at.length).toBeGreaterThan(0);
      // return_url is nullable in the schema — assert the discriminator only.
      expect(
        result.return_url === null || typeof result.return_url === "string",
      ).toBe(true);
    },
  );

  it(
    "produces a typed failure if the introspect call cannot complete",
    { timeout: 30_000 },
    async () => {
      const exit = await runEffectAsCustomer(
        Effect.exit(customerPortalcustomerSessionintrospect({})),
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
        expect(typeof exit.value.expires_at).toBe("string");
      }
    },
  );
});
