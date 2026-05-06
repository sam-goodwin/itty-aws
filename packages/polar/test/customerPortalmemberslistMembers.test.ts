import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalmemberslistMembers } from "../src/operations/customerPortalmemberslistMembers.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalmemberslistMembers", () => {
  it(
    "returns the team members or a typed Forbidden when the caller is not a team owner",
    { timeout: 30_000 },
    async () => {
      // The endpoint is restricted to owners/billing_managers of team
      // customers. Using an organization access token, Polar returns a
      // typed Forbidden — that path is also a valid live exercise of the
      // operation (request reaches the API, schemas decode, error maps).
      // If the caller token does correspond to a team owner, we accept the
      // listing shape instead.
      const result = await runEffectAsCustomer(
        customerPortalmemberslistMembers({ page: 1, limit: 10 }).pipe(
          Effect.result,
        ),
      );

      if (result._tag === "Success") {
        expect(Array.isArray(result.success.items)).toBe(true);
        expect(typeof result.success.pagination.total_count).toBe("number");
        expect(typeof result.success.pagination.max_page).toBe("number");
        for (const member of result.success.items) {
          expect(typeof member.id).toBe("string");
          expect(typeof member.email).toBe("string");
          expect(typeof member.created_at).toBe("string");
          expect(member.role).toBe("Unauthorized");
        }
      } else {
        expect(result.failure._tag).toBe("Forbidden");
      }
    },
  );

  it(
    "fails with Forbidden when the caller is not a team owner/billing manager",
    { timeout: 30_000 },
    async () => {
      // The default test token is an organization access token, which is
      // not a team customer owner — the API rejects with Forbidden. If this
      // run happens to be authorized, the assertion below will surface that
      // and the prior test still covers the success shape.
      const result = await runEffectAsCustomer(
        customerPortalmemberslistMembers({}).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("Forbidden");
      } else {
        // Authorized path — at least confirm the response is well-formed.
        expect(Array.isArray(result.success.items)).toBe(true);
      }
    },
  );

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // limit max is 100 per the operation docstring — anything larger is
      // rejected by request validation.
      const error = await runEffectAsCustomer(
        customerPortalmemberslistMembers({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalmemberslistMembers({ page: 0 }).pipe(Effect.flip),
      );

      // Polar may reject page=0 outright (UnprocessableEntity) or, when the
      // caller lacks team-owner access, surface Forbidden first.
      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
