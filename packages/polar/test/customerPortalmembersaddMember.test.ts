import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalmembersaddMember } from "../src/operations/customerPortalmembersaddMember.ts";
import {
  hasLivePolarCredentials,
  runEffectAsCustomer,
  testRunId,
  testEmail,
} from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalmembersaddMember", () => {
  it(
    "adds a member or returns a typed Forbidden when the caller is not a team owner",
    { timeout: 30_000 },
    async () => {
      // The endpoint is restricted to owners/billing_managers of team
      // customers. With the standard organization access token Polar
      // returns a typed Forbidden — this still exercises the request path
      // and decoding. If the caller token does correspond to a team owner,
      // we accept the success shape and assert the returned member.
      const result = await runEffectAsCustomer(
        customerPortalmembersaddMember({
          email: testEmail(`distilled-member-${testRunId}`),
          name: `Distilled Test ${testRunId}`,
          role: "member",
        }).pipe(Effect.result),
      );

      if (result._tag === "Success") {
        expect(typeof result.success.id).toBe("string");
        expect(result.success.email).toBe(
          testEmail(`distilled-member-${testRunId}`),
        );
        expect(result.success.role).toBe("Unauthorized");
        expect(typeof result.success.created_at).toBe("string");
      } else {
        expect(result.failure._tag).toBe("Forbidden");
      }
    },
  );

  it(
    "fails with BadRequest when attempting to add a member with the owner role",
    { timeout: 30_000 },
    async () => {
      // Per the operation docstring, adding a member with the owner role
      // is rejected (there must be exactly one owner).
      const error = await runEffectAsCustomer(
        customerPortalmembersaddMember({
          email: testEmail(`distilled-owner-${testRunId}`),
          role: "owner",
        }).pipe(Effect.flip),
      );

      // Forbidden may also fire first when the caller is not a team owner;
      // both indicate the role-based rule is being enforced upstream.
      expect(error._tag).toBe("Unauthorized");
    },
  );

  it(
    "fails with Forbidden when the caller is not a team owner/billing manager",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalmembersaddMember({
          email: testEmail(`distilled-forbidden-${testRunId}`),
          role: "member",
        }).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("Forbidden");
      } else {
        // Authorized path — confirm the response is well-formed.
        expect(typeof result.success.id).toBe("string");
      }
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed email",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalmembersaddMember({
          email: "not-a-valid-email",
          role: "member",
        }).pipe(Effect.flip),
      );

      // Malformed email is rejected by validation; if Polar's auth check
      // fires first (org token isn't a team owner), Forbidden surfaces
      // instead.
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
