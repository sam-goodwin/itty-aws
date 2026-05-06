import * as Effect from "effect/Effect";
import { describe, expect, it } from "vitest";
import { organizationAccessTokenslist } from "../src/operations/organizationAccessTokenslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("organizationAccessTokenslist", () => {
  it(
    "lists organization access tokens with default pagination",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        organizationAccessTokenslist({ page: 1, limit: 10 }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      expect(result.items.length).toBeLessThanOrEqual(10);

      for (const token of result.items) {
        expect(typeof token.id).toBe("string");
        expect(typeof token.organization_id).toBe("string");
        expect(typeof token.comment).toBe("string");
        expect(typeof token.created_at).toBe("string");
        expect(Array.isArray(token.scopes)).toBe(true);
        for (const scope of token.scopes) {
          expect(typeof scope).toBe("string");
        }
      }
    },
  );

  it(
    "fails with UnprocessableEntity for an out-of-range limit",
    { timeout: 30_000 },
    async () => {
      // Polar caps `limit` at 100; values above the cap are rejected with
      // a typed UnprocessableEntity from the validation layer.
      const error = await runEffect(
        organizationAccessTokenslist({ limit: 100_000 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );

  it(
    "fails with UnprocessableEntity for a non-positive page",
    { timeout: 30_000 },
    async () => {
      // Pages are 1-indexed; `page=0` is rejected as a typed
      // UnprocessableEntity by the validation layer.
      const error = await runEffect(
        organizationAccessTokenslist({ page: 0 }).pipe(Effect.flip),
      );

      expect(error._tag).toBe("RequestValidationError");
    },
  );
});
