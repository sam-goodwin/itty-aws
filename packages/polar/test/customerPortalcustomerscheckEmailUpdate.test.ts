import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalcustomerscheckEmailUpdate } from "../src/operations/customerPortalcustomerscheckEmailUpdate.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalcustomerscheckEmailUpdate", () => {
  it(
    "calls the check email-update endpoint with a syntactically-formed token",
    { timeout: 30_000 },
    async () => {
      // A genuine success requires a verification token issued by Polar via
      // email after a request-email-update call, which cannot be obtained
      // from a backend test. Sending a syntactically-formed but non-existent
      // token reliably exercises the live operation and surfaces a typed
      // UnprocessableEntity, proving the request reached the server and
      // was validated end-to-end.
      const error = await runEffectAsCustomer(
        customerPortalcustomerscheckEmailUpdate({
          token: `distilled-portal-email-token-${testRunId}`,
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
        customerPortalcustomerscheckEmailUpdate({ token: "" }).pipe(
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
        customerPortalcustomerscheckEmailUpdate({
          token: `distilled-missing-${testRunId}-${Date.now()}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
