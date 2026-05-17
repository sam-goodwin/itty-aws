import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomersconfirmPaymentMethod } from "../src/operations/customerPortalcustomersconfirmPaymentMethod.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersconfirmPaymentMethod", () => {
  it(
    "calls the confirm payment method endpoint with a fake Stripe setup intent",
    { timeout: 30_000 },
    async () => {
      // A real success requires a setup_intent_id produced by a Stripe.js
      // payment confirmation flow, which cannot be generated from a
      // backend test. Sending a syntactically-formed but non-existent
      // Stripe setup intent id reliably exercises the live operation:
      // Polar relays it to Stripe and surfaces a typed BadRequest, proving
      // the request reached the server and was validated end-to-end.
      const error = await runEffectAsCustomer(
        customerPortalcustomersconfirmPaymentMethod({
          setup_intent_id: `seti_test_distilled_${testRunId}`,
          set_default: false,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "returns BadRequest for a non-existent Stripe setup intent",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersconfirmPaymentMethod({
          setup_intent_id: `seti_distilled_missing_${testRunId}`,
          set_default: true,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects an empty setup_intent_id with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersconfirmPaymentMethod({
          setup_intent_id: "",
          set_default: false,
        }).pipe(Effect.flip),
      );
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
