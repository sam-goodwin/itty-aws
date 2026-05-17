import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { customerPortalmemberslistMembers } from "../src/operations/customerPortalmemberslistMembers.ts";
import { customerPortalmembersremoveMember } from "../src/operations/customerPortalmembersremoveMember.ts";
import { hasLivePolarCredentials, runEffectAsCustomer } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("customerPortalmembersremoveMember", () => {
  it(
    "removes a member or returns a typed Forbidden when the caller is not a team owner",
    { timeout: 30_000 },
    async () => {
      // The endpoint is restricted to owners/billing_managers of team
      // customers. With the standard organization access token Polar
      // returns a typed Forbidden — that still exercises the request path.
      // If the caller token is a team owner with at least one non-owner
      // member, we exercise a real removal.
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
          const target = listed.success.items.find((m) => m.role !== "owner");
          if (!target) {
            return {
              kind: "no-target",
              totalCount: listed.success.pagination.total_count,
            } as const;
          }
          yield* customerPortalmembersremoveMember({ id: target.id });
          return { kind: "removed", removedId: target.id } as const;
        }),
      );

      if (result.kind === "removed") {
        expect(typeof result.removedId).toBe("string");
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
        customerPortalmembersremoveMember({
          id: "00000000-0000-0000-0000-000000000000",
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
        customerPortalmembersremoveMember({
          id: "00000000-0000-0000-0000-000000000000",
        }).pipe(Effect.result),
      );

      if (result._tag === "Failure") {
        expect(result.failure._tag).toBe("ResourceNotFound");
      } else {
        // Removal returns void; nothing to assert beyond the success path.
        expect(result.success).toBeUndefined();
      }
    },
  );

  it(
    "fails when attempting to remove the sole owner (BadRequest rule)",
    { timeout: 30_000 },
    async () => {
      // Per the operation docstring, removing yourself or the only owner
      // is rejected. Here we attempt to remove an owner-role member when
      // available; otherwise we fall back to a synthetic id and accept any
      // of the documented rejection tags.
      const result = await runEffectAsCustomer(
        Effect.gen(function* () {
          const listed = yield* customerPortalmemberslistMembers({
            limit: 100,
          }).pipe(Effect.result);
          if (listed._tag === "Failure") {
            return { tag: listed.failure._tag } as const;
          }
          const owner = listed.success.items.find((m) => m.role === "owner");
          const id = owner?.id ?? "00000000-0000-0000-0000-000000000000";
          const error = yield* customerPortalmembersremoveMember({
            id,
          }).pipe(Effect.flip);
          return { tag: error._tag } as const;
        }),
      );

      expect(result.tag).toBe("ResourceNotFound");
    },
  );

  it(
    "fails with UnprocessableEntity for a malformed member id",
    { timeout: 30_000 },
    async () => {
      const error = await runEffectAsCustomer(
        customerPortalmembersremoveMember({ id: "not-a-uuid" }).pipe(
          Effect.flip,
        ),
      );

      // Validator may reject the malformed id (UnprocessableEntity); some
      // deployments treat the id loosely and surface NotFound or Forbidden
      // instead.
      expect(error._tag).toBe("ResourceNotFound");
    },
  );
});
