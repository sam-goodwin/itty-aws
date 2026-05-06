import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomersrequestEmailUpdate } from "../src/operations/customerPortalcustomersrequestEmailUpdate.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersrequestEmailUpdate", () => {
  it(
    "requests an email change for the authenticated customer",
    { timeout: 30_000 },
    async () => {
      // Output schema is Schema.Void — a successful request resolves with
      // undefined and triggers a verification email to the requested address
      // in the sandbox.
      const result = await runEffectAsCustomer(
        customerPortalcustomersrequestEmailUpdate({
          email: testEmail(`distilled-portal-email-${testRunId}`),
        }),
      );

      expect(result).toBeUndefined();
    },
  );

  it(
    "rejects a malformed email with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersrequestEmailUpdate({
          email: `not-a-valid-email-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects an empty email with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersrequestEmailUpdate({
          email: "",
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
