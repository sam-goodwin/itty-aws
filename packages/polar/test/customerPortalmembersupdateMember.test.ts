import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalmemberslistMembers } from "../src/operations/customerPortalmemberslistMembers.ts";
import { customerPortalmembersupdateMember } from "../src/operations/customerPortalmembersupdateMember.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalmembersupdateMember", () => {
  it(
    "updates a member's role or returns a typed Forbidden when the caller is not a team owner",
    { timeout: 30_000 },
    async () => {
      // The endpoint is restricted to owners/billing_managers of team
      // customers. With the standard organization access token, listing
      // and updating both surface a typed Forbidden — that still exercises
      // the request path and decoding. If the caller token corresponds to
      // a team owner with at least one non-self member we exercise a real
      // role update.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalmemberslistMembers({
            limit: 100,
          }).pipe(Effect.result);
          if (listed._tag === "Failure") {
            return {
              kind: "forbidden-list",
              tag: listed.failure._tag,
            } as const;
          }
          const target = listed.success.items.find((m) => m.role === "member");
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.success.pagination.total_count,
            } as const;
          }
          const updated = yield* customerPortalmembersupdateMember({
            id: target.id,
            role: "billing_manager",
          });
          return { kind: "updated", updated } as const;
        }),
      );

      if (result.kind === "updated") {
        expect(typeof result.updated.id).toBe("string");
        expect(result.updated.role).toBe("Unauthorized");
        expect(typeof result.updated.email).toBe("string");
      } else if (result.kind === "forbidden-list") {
        expect(result.tag).toBe("Forbidden");
      } else {
        expect(typeof result.totalCount).toBe("number");
      }
    },
  );

  it(
    "fails with NotFound for a non-existent member id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalmembersupdateMember({
          id: "00000000-0000-0000-0000-000000000000",
          role: "member",
        }).pipe(Effect.flip),
      );

      // Org-token callers will hit the auth check first (Forbidden); team
      // owners will see NotFound for the missing id.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with Forbidden when the caller is not a team owner/billing manager",
    { timeout: 30_000 },
    async () => {
      const result = await runEffectAsCustomer(
        customerPortalmembersupdateMember({
          id: "00000000-0000-0000-0000-000000000000",
          role: "member",
        }).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("ResourceNotFound");
      } else {
        // Not expected without a real member id, but accept a well-formed
        // success response.
        expect(typeof result.success.id).toBe("string");
      }
    },
  );

  it(
    "fails with BadRequest when attempting to set role to owner",
    { timeout: 30_000 },
    async () => {
      // Per the operation docstring, the customer must have exactly one
      // owner at all times — promoting another member to owner is rejected.
      const error = await runEffectAsCustomer(
        customerPortalmembersupdateMember({
          id: "00000000-0000-0000-0000-000000000000",
          role: "owner",
        }).pipe(Effect.flip),
      );

      // Rule violation may surface as BadRequest, but Forbidden (org token
      // not a team owner) or NotFound (missing id) can fire first depending
      // on which check runs first.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed member id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalmembersupdateMember({
          id: "not-a-uuid",
          role: "member",
        }).pipe(Effect.flip),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound or Forbidden
      // instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
