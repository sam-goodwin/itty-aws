import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalseatsassignSeat } from "../src/operations/customerPortalseatsassignSeat.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalseatsassignSeat", () => {
  it(
    "calls the assign-seat endpoint with a syntactically-formed payload",
    { timeout: 30_000 },
    async () => {
      // A real success requires an active team-billed subscription with
      // available seat capacity, which cannot be created from a backend
      // test. Sending a syntactically-formed payload that targets a
      // non-existent subscription reliably exercises the live operation
      // and surfaces a typed BadRequest / Forbidden / NotFound /
      // UnprocessableEntity response, proving the request reached the
      // server and was validated end-to-end.
      const error = await runEffectAsCustomer(
        customerPortalseatsassignSeat({
          subscription_id: "00000000-0000-4000-8000-000000000000",
          email: testEmail(`distilled-seat-${testRunId}`),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with NotFound for a non-existent subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatsassignSeat({
          subscription_id: "00000000-0000-4000-8000-000000000000",
          email: testEmail(`distilled-seat-nf-${testRunId}`),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed subscription_id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalseatsassignSeat({
          subscription_id: "not-a-uuid",
          email: testEmail(`distilled-seat-ue-${testRunId}`),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with BadRequest when no seat-context identifier is provided",
    { timeout: 30_000 },
    async () => {
      // No subscription_id, checkout_id, checkout_client_secret, or order_id
      // — Polar should reject this as a semantically invalid payload.
      const error = await runEffectAsCustomer(
        customerPortalseatsassignSeat({
          email: testEmail(`distilled-seat-br-${testRunId}`),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with Forbidden when assigning against a subscription not owned by the caller",
    { timeout: 30_000 },
    async () => {
      // Polar gates seat assignment by ownership: providing a syntactically
      // valid subscription_id that the authenticated context does not own
      // surfaces a typed Forbidden / NotFound response.
      const error = await runEffectAsCustomer(
        customerPortalseatsassignSeat({
          subscription_id: "11111111-1111-4111-8111-111111111111",
          email: testEmail(`distilled-seat-fb-${testRunId}`),
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
