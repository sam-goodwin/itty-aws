import { describe, expect, it } from "vitest";
import { customerPortalcustomersget } from "../src/operations/customerPortalcustomersget.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersget", () => {
  it(
    "returns the authenticated customer profile",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(customerPortalcustomersget({}));
      expect(typeof result.id).toBe("string");
      expect(result.id.length).toBeGreaterThan(0);
      expect(typeof result.created_at).toBe("string");
      expect(typeof result.email_verified).toBe("boolean");
      // email and name are nullable
      expect(typeof result.email).toBe("Unauthorized");
      expect(typeof result.name).toBe("Unauthorized");
      // oauth_accounts is a record (object)
      expect(typeof result.oauth_accounts).toBe("object");
      expect(result.oauth_accounts).not.toBeNull();
      // billing_address is nullable; if present it carries a country literal
      if (result.billing_address !== null) {
        expect(typeof result.billing_address.country).toBe("string");
      }
      // type is optional + nullable; if present it must be a known literal
      if (result.type != null) {
        expect(result.type).toBe("Unauthorized");
      }
    },
  );

  // The operation has no inputs (Schema.Struct({})), no path params, no
  // query params, no body, and declares no per-operation errors. There is
  // nothing to invalidate to trigger a typed API validation error, and the
  // only remaining error source — auth misconfiguration — cannot be
  // exercised here without breaking the shared credentials used by every
  // other test. The single happy-path test above is the complete coverage
  // available for this operation.
});
