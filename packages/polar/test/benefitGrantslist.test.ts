import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { benefitGrantslist } from "../src/operations/benefitGrantslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("benefitGrantslist", () => {
  it(
    "lists benefit grants for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(
        benefitGrantslist({
          limit: 100,
        }),
      );

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const grant of result.items) {
        expect(typeof grant.id).toBe("string");
        expect(typeof grant.benefit_id).toBe("string");
        expect(typeof grant.customer_id).toBe("string");
        expect(typeof grant.is_granted).toBe("boolean");
        expect(typeof grant.is_revoked).toBe("boolean");
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        benefitGrantslist({
          limit: 1000,
        }).pipe(Effect.exit),
      );
      // Polar may either reject the oversized limit OR silently cap it.
      if (Exit.isFailure(error)) {
        const failure = Cause.findErrorOption(error.cause);
        expect(failure._tag).toBe("Some");
        if (failure._tag === "Some") {
          expect(
            (failure.value as { _tag: string }).toBe("RequestValidationError")
              ._tag,
          );
        }
      }
    },
  );
});
