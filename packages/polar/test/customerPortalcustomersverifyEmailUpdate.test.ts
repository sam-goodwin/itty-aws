import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomersverifyEmailUpdate } from "../src/operations/customerPortalcustomersverifyEmailUpdate.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomersverifyEmailUpdate", () => {
  it(
    "calls the verify email-update endpoint with a syntactically-formed token",
    { timeout: 30_000 },
    async () => {
      // A real success requires a verification token issued by Polar via
      // email after a request-email-update call, which cannot be obtained
      // from a backend test. Sending a syntactically-formed but non-existent
      // token reliably exercises the live operation and surfaces a typed
      // UnprocessableEntity, proving the request reached the server and was
      // validated end-to-end.
      const error = await runEffectAsCustomer(
        customerPortalcustomersverifyEmailUpdate({
          token: `distilled-portal-verify-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects an empty token with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersverifyEmailUpdate({ token: "" }).pipe(
          Effect.flip,
        ),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "rejects a non-existent verification token with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalcustomersverifyEmailUpdate({
          token: `distilled-missing-verify-${testRunId}-${Date.now()}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
