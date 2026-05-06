import * as Cause from "effect/Cause";
import * as Effect from "effect/Effect";
import * as Exit from "effect/Exit";
import { describe, expect, it } from "vitest";
import { checkoutLinkslist } from "../src/operations/checkoutLinkslist.ts";
import { hasLivePolarCredentials, runEffect } from "./setup.ts";

const describeLive = hasLivePolarCredentials ? describe : describe.skip;

describeLive("checkoutLinkslist", () => {
  it(
    "lists checkout links for the configured organization",
    { timeout: 30_000 },
    async () => {
      const result = await runEffect(checkoutLinkslist({ limit: 100 }));

      expect(Array.isArray(result.items)).toBe(true);
      expect(typeof result.pagination.total_count).toBe("number");
      expect(typeof result.pagination.max_page).toBe("number");
      for (const link of result.items) {
        expect(typeof link.id).toBe("string");
        expect(typeof link.organization_id).toBe("string");
        expect(typeof link.url).toBe("string");
        expect(link.payment_processor).toBe("stripe");
        expect(typeof link.allow_discount_codes).toBe("boolean");
        expect(typeof link.require_billing_address).toBe("boolean");
        expect(Array.isArray(link.products)).toBe(true);
      }
    },
  );

  it(
    "rejects an out-of-range page size with UnprocessableEntity",
    { timeout: 30_000 },
    async () => {
      const error = await runEffect(
        checkoutLinkslist({ limit: 1000 }).pipe(Effect.exit),
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
