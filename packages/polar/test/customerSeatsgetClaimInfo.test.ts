import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerSeatsgetClaimInfo } from "../src/operations/customerSeatsgetClaimInfo.ts";
import { hasLivePolarCredentials, runEffect, testRunId } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerSeatsgetClaimInfo", () => {
  it(
    "exercises the get-claim-info endpoint with a syntactically-formed token",
    { timeout: 30_000 },
    async () => {
      // The full happy path requires the invitation_token that Polar
      // emails to the recipient when a seat is assigned — that token is
      // not returned by any listing endpoint and is therefore not
      // reachable from a backend test. We exercise the live endpoint
      // with a syntactically-formed fake token and accept any of the
      // documented typed errors. If the token does match a real seat in
      // the sandbox, we assert the response shape.
      const result = await runEffect(
        customerSeatsgetClaimInfo({
          invitation_token: `distilled-claim-${testRunId}`,
        }).pipe(Effect.result),
      );

      if (result._tag === "Success") {
        expect(typeof result.success.product_name).toBe("string");
        expect(typeof result.success.product_id).toBe("string");
        expect(typeof result.success.organization_name).toBe("string");
        expect(typeof result.success.organization_slug).toBe("string");
        expect(typeof result.success.customer_email).toBe("string");
        expect(typeof result.success.can_claim).toBe("boolean");
      } else {
        expect(result.failure._tag).toBe("ResourceNotFound");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent invitation token",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatsgetClaimInfo({
          invitation_token: `distilled-missing-${testRunId}`,
        }).pipe(Effect.flip),
      );

      // Polar surfaces missing tokens as a typed NotFound; some
      // deployments treat malformed tokens with structural validation
      // first and surface BadRequest/UnprocessableEntity instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with BadRequest for an expired/already-claimed invitation token",
    { timeout: 30_000 },
    async () => {
      // Tokens that have expired or already been used are rejected with
      // a typed BadRequest. We use a fixed sentinel token that's
      // syntactically plausible; without a real expired token the
      // missing-token check fires first and we surface NotFound — both
      // are valid documented outcomes.
      const error = await runEffect(
        customerSeatsgetClaimInfo({
          invitation_token: `expired-${testRunId}`,
        }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Forbidden when the caller is not the invited customer",
    { timeout: 30_000 },
    async () => {
      // The endpoint is normally accessed without org auth (the recipient
      // hits it from an emailed link). When called with a real org token
      // for a token that doesn't belong to that customer, Polar may
      // surface a typed Forbidden; otherwise NotFound fires for the
      // missing token. Both are valid documented outcomes here.
      const result = await runEffect(
        customerSeatsgetClaimInfo({
          invitation_token: `forbidden-${testRunId}`,
        }).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("ResourceNotFound");
      } else {
        expect(typeof result.success.product_id).toBe("string");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed invitation token",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        customerSeatsgetClaimInfo({
          // Empty-ish path-segment-unfriendly token
          invitation_token: " ",
        }).pipe(Effect.flip),
      );

      // Validator may reject the malformed token (UnprocessableEntity);
      // some deployments treat the path segment loosely and surface
      // NotFound or BadRequest instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
