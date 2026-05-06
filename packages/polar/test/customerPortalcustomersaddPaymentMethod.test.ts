import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomersaddPaymentMethod } from "../src/operations/customerPortalcustomersaddPaymentMethod.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersaddPaymentMethod", () => {
  it(
    "calls the add payment method endpoint with a fake Stripe confirmation token",
    { timeout: 30_000 },
    async () => {
      // A real success requires a confirmation_token_id produced by
      // Stripe.js client-side tokenization, which cannot be generated from
      // a backend test. Sending a syntactically-formed but non-existent
      // Stripe token id reliably exercises the live operation and surfaces
      // a typed UnprocessableEntity response, proving the request reached
      // the server and was validated end-to-end.
      const error = await runEffectAsCustomer(
        customerPortalcustomersaddPaymentMethod({
          confirmation_token_id: `ctoken_test_distilled_${testRunId}`,
          set_default: false,
          return_url: `https://example.com/return-${testRunId}`,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a malformed return_url with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersaddPaymentMethod({
          confirmation_token_id: `ctoken_test_distilled_${testRunId}`,
          set_default: false,
          return_url: "not-a-valid-url",
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
